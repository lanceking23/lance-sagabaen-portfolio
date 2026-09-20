import http from 'node:http';
import { readFile, stat, watch } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { projectRoot } from './build.mjs';
const outputDirectory = path.join(projectRoot,'dist');
const port = Number(process.env.PORT || 4321);
const contentTypes = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.webp':'image/webp','.svg':'image/svg+xml','.pdf':'application/pdf','.txt':'text/plain; charset=utf-8'};
function rebuildPortfolio() { const buildResult=spawnSync(process.execPath,[path.join(projectRoot,'scripts/build.mjs')],{stdio:'inherit'}); if(buildResult.status!==0) throw new Error('Static build failed'); }
rebuildPortfolio();
const server = http.createServer(async(request,response)=>{
  try {
    if (!['GET','HEAD'].includes(request.method)) {response.writeHead(405,{Allow:'GET, HEAD'});return response.end();}
    const pathname=decodeURIComponent(new URL(request.url,'http://localhost').pathname);
    if (pathname.includes('\0') || pathname.includes('\\')) {response.writeHead(400);return response.end('Bad request');}
    let filePath=path.resolve(outputDirectory,'.'+pathname);
    if (filePath!==outputDirectory && !filePath.startsWith(outputDirectory+path.sep)) {response.writeHead(403);return response.end('Forbidden');}
    try {if ((await stat(filePath)).isDirectory()) {
      if(!pathname.endsWith('/')){response.writeHead(301,{Location:pathname+'/'});return response.end();}
      filePath=path.join(filePath,'index.html');
    }} catch {}
    let responseBody; let statusCode=200;
    try {responseBody=await readFile(filePath);} catch {filePath=path.join(outputDirectory,'404.html');statusCode=404;responseBody=await readFile(filePath).catch(()=>Buffer.from('Page not found'));}
    response.writeHead(statusCode,{'Content-Type':contentTypes[path.extname(filePath)]||'application/octet-stream','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});
    response.end(request.method==='HEAD'?undefined:responseBody);
  } catch {response.writeHead(400);response.end('Bad request');}
});
server.on('error',error=>{console.error(error.code==='EADDRINUSE'?`Port ${port} is already in use. Set PORT to another value.`:error);process.exit(1);});
server.listen(port,'127.0.0.1',()=>console.log(`Portfolio available at http://localhost:${port}`));
if(process.argv.includes('--watch')){
  let rebuildTimer;
  for(const directory of ['src','public']) (async()=>{for await(const change of watch(path.join(projectRoot,directory),{recursive:true})){clearTimeout(rebuildTimer);rebuildTimer=setTimeout(()=>{try{rebuildPortfolio();}catch(error){console.error(error.message);}},150);}})().catch(console.error);
}

