import { mkdir, cp, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
export const projectRoot = fileURLToPath(new URL('../', import.meta.url));
export async function buildPortfolio() {
  const { getPages } = await import(`../src/pages.mjs?build=${Date.now()}`);
  const outputDirectory = path.join(projectRoot,'dist');
  await mkdir(outputDirectory,{recursive:true});
  await cp(path.join(projectRoot,'public'),outputDirectory,{recursive:true});
  const renderedPages = getPages();
  for (const [relativePath,html] of renderedPages) {
    const outputPath = path.join(outputDirectory,relativePath);
    await mkdir(path.dirname(outputPath),{recursive:true});
    await writeFile(outputPath,html);
  }
  console.log(`Built ${renderedPages.length} static pages in ${outputDirectory}`);
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await buildPortfolio();
