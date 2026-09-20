import { renderResumePage } from './resume.mjs';
import { profile, projects } from './content.mjs';
import { renderLayout, renderProjectRow, renderContact, arrowIcon, externalLinkIcon, escapeHtml } from './components.mjs';
export function renderHomePage() { return renderLayout({title:`${profile.name} | Cloud & DevOps Engineer`,description:'Cloud infrastructure, backend development and real-world delivery. Explore the experience and projects of Lance Jetrho B. Sagabaen, based in Makati, Philippines.',body:`
<section class="hero container" aria-labelledby="hero-title"><div class="hero-copy"><p class="eyebrow hero-eyebrow"><span class="eyebrow-line"></span>CLOUD & DEVOPS ENGINEER</p>
<h1 id="hero-title">Built for the cloud.<br>Grounded in<br><span>real-world delivery.</span></h1>
<p class="hero-intro">I’m <strong>Lance Jetrho B. Sagabaen.</strong> I help deploy and support cloud infrastructure and business applications.</p>
<div class="hero-actions"><a class="button button-primary" href="#work">Explore my work ${arrowIcon}</a><a class="text-link" href="/resume/" data-resume-link>View résumé ${externalLinkIcon}</a></div>
<p class="hero-location">Based in Makati City, Philippines</p>
</div>
<aside class="focus-panel" aria-label="Current role and areas of focus"><div class="focus-header"><span class="eyebrow light">CURRENTLY AT</span><p>ApexLogic Technologies</p>
<span>Cloud and DevOps Engineer</span></div>
<ol class="focus-list"><li><span class="focus-index">01</span><div><h2>Provision.</h2>
<p>AWS & Azure infrastructure</p>
</div>
</li>
<li><span class="focus-index">02</span><div><h2>Deploy.</h2>
<p>CI/CD & release support</p>
</div>
</li>
<li><span class="focus-index">03</span><div><h2>Support.</h2>
<p>Monitoring & troubleshooting</p>
</div>
</li>
</ol>
<a href="#experience">View experience ${arrowIcon}</a></aside>
</section>
<div class="expertise-strip"><div class="container"><span>FROM INFRASTRUCTURE TO APPLICATION</span><p>AWS <i>/</i> Azure <i>/</i> Linux <i>/</i> Laravel <i>/</i> MySQL</p>
</div>
</div>
<section class="section container" id="work" aria-labelledby="work-title"><div class="section-heading"><div><p class="eyebrow">01 / SELECTED WORK</p>
<h2 id="work-title">A closer look at the work.</h2>
</div>
<p>Cloud operations, backend systems<br>and thoughtful interface design.</p>
</div>
<div class="projects">${projects.map(renderProjectRow).join('')}</div>
<div class="more-work"><h3>More systems.<br>More perspectives.</h3>
<div><p class="more-intro">At ApexLogic, I also contributed to the development and delivery of business applications across several domains.</p>
<ul class="contribution-list"><li><strong>Cooperative accounting</strong><span>Member, loan and savings management; accounting and financial reporting.</span></li>
<li><strong>Distribution & inventory</strong><span>Production, warehouses, deliveries, collections and stock movement.</span></li>
<li><strong>Point of sale</strong><span>Sales transactions, payments and inventory integration.</span></li>
<li><strong>HRIS & payroll</strong><span>Employee records, attendance, leave and payroll computation.</span></li>
</ul>
<p class="other-work">I also developed the <strong>TripAlly PH</strong> travel consultancy website and supported automation workflows. My academic and personal work includes a <strong>Video Rental System</strong> backend in PHP.</p>
</div>
</div>
</section>
<section class="experience section" id="experience" aria-labelledby="experience-title"><div class="container split-section"><div class="section-intro"><p class="eyebrow">02 / EXPERIENCE</p>
<h2 id="experience-title">Hands-on.<br>Across the stack.</h2>
<p>From cloud infrastructure to application quality, my experience connects delivery with day-to-day operations.</p>
<a class="text-link" href="/resume/" data-resume-link>Read my résumé ${externalLinkIcon}</a></div>
<div class="timeline"><article class="experience-entry"><div class="entry-meta"><span>APR 2026 — PRESENT</span><span class="role-type">Independent contractor</span></div>
<h3>Cloud and DevOps Engineer</h3>
<p class="company">ApexLogic Technologies</p>
<p class="work-location">Full-time · Remote, Makati, Philippines</p>
<ul><li>Provision and manage AWS compute and VPC networking for enterprise applications.</li>
<li>Administer Azure VMs and cloud SQL databases, including backups, scaling and performance monitoring.</li>
<li>Maintain CI/CD pipelines, monitoring and alerting; troubleshoot production incidents.</li>
<li>Contribute to business application development, deployment and client support.</li>
</ul>
</article>
<article class="experience-entry"><div class="entry-meta"><span>JAN 2026 — JUL 2026</span><span class="role-type">Internship</span></div>
<h3>Quality Assurance Intern</h3>
<p class="company">Ollopa Corporation</p>
<ul><li>Checked websites for responsiveness, functionality and usability.</li>
<li>Researched products and maintained accurate listings using company profiles and contact details.</li>
<li>Supported online presence through social engagement and comment management.</li>
</ul>
</article>
</div>
</div>
</section>
<section class="section container" id="about" aria-labelledby="about-title"><div class="split-section about-intro"><div><p class="eyebrow">03 / ABOUT</p>
<h2 id="about-title">An IT foundation.<br>A practical mindset.</h2>
</div>
<div><p class="about-lead">I’m Lance, an IT graduate based in Makati City, Philippines, with hands-on experience in cloud infrastructure, DevOps and backend development.</p>
<p>My work spans production support, enterprise applications, quality assurance and interface design. I’m interested in opportunities in cloud engineering, CloudOps, DevOps, systems administration and QA.</p>
</div>
</div>
<div class="skills-heading"><h3>Tools I work with</h3>
<span>Infrastructure / Development / Delivery</span></div>
<div class="skills-grid">${[
['Cloud & systems',['AWS: EC2, VPC, networking, security groups','Azure: Virtual Machines, Cloud SQL','Linux, Apache, Nginx, Tomcat','TCP/IP, DNS, SSL, HTTP/HTTPS']],
['Development & data',['Python, Java, C++, PHP, JavaScript','HTML, CSS, Laravel','MySQL, PostgreSQL']],
['Tools & workflow',['Jira, ServiceNow, PowerShell','Power BI, Figma','CI/CD, monitoring & alerting']]
].map(([title,skills], groupIndex) =>`<div class="skill-group"><span class="skill-index">0${groupIndex+1}</span><h4>${title}</h4>
<ul>${skills.map(skill =>`<li>${escapeHtml(skill)}</li>`).join('')}</ul>
</div>`).join('')}</div>
<div class="qualifications"><div class="education"><p class="eyebrow">EDUCATION</p>
<h3>Far Eastern University<br>Institute of Technology</h3>
<p class="degree">BS in Information Technology</p>
<p>Specialization in Business Analytics</p>
<span>FEB 2022 — SEP 2026 · MANILA</span></div>
<div class="credentials"><p class="eyebrow">CERTIFICATIONS</p>
<ul><li><div><strong>Information Technology Specialist</strong><span>Certiport — A Pearson VUE Business</span></div>
<time datetime="2025-11">Nov 2025</time></li>
<li><div><strong>Certified Professional PMI Project Management Ready</strong></div>
<time datetime="2025-03">Mar 2025</time></li>
<li><div><strong>Certified Professional IT Specialist</strong></div>
<time datetime="2024-06">Jun 2024</time></li>
<li><div><strong>SQL · Intermediate</strong><span>HackerRank Certified Skill Test</span></div>
</li>
<li><div><strong>Python · Basic</strong><span>HackerRank Certified Skill Test</span></div>
</li>
</ul>
</div>
</div>
</section>
${renderContact()}`}); }
export function renderProjectPage(project,projectIndex) {
  const nextProject=projects[(projectIndex+1)%projects.length];
  return renderLayout({page:'project',title:`${project.title} | Lance Sagabaen`,description:project.short,body:`<div class="container project-page"><a class="back-link" href="/#work"><span aria-hidden="true">←</span> Back to work</a><section class="project-hero" aria-labelledby="project-title"><p class="eyebrow">${project.number} / ${project.category}</p>
<h1 id="project-title">${escapeHtml(project.title)}</h1>
<p class="project-deck">${escapeHtml(project.short)}</p>
<dl class="project-meta"><div><dt>MY ROLE</dt>
<dd>${escapeHtml(project.role)}</dd>
</div>
<div><dt>CONTEXT</dt>
<dd>${escapeHtml(project.context)}</dd>
</div>
</dl>
</section>
<div class="case-layout"><div class="case-content"><section aria-labelledby="overview-title"><p class="eyebrow">THE CONTEXT</p>
<h2 id="overview-title">${project.slug==='cloud-operations'?'Supporting production, every day.':project.slug==='fabella-opd'?'The logic behind the queue.':'Bringing an internal experience into focus.'}</h2>
<p class="case-overview">${escapeHtml(project.overview)}</p>
</section>
<section class="case-contributions" aria-labelledby="contributions-title"><p class="eyebrow">MY CONTRIBUTIONS</p>
<h2 id="contributions-title">Where I focused.</h2>
<ol>${project.contributions.map(([heading, description], contributionIndex) =>`<li><span class="contribution-number">0${contributionIndex+1}</span><div><h3>${escapeHtml(heading)}</h3>
<p>${escapeHtml(description)}</p>
</div>
</li>`).join('')}</ol>
</section>
<section class="delivery-note" aria-labelledby="delivery-title"><p class="eyebrow">THE DELIVERY</p>
<h2 id="delivery-title">${project.slug==='internal-hr-design'?'Screens and interactions.':'Implementation and support.'}</h2>
<p>${escapeHtml(project.delivery)}</p>
</section>
</div>
<aside class="project-sidebar" aria-label="Project tools and contact"><div><p class="eyebrow">${project.slug==='internal-hr-design'?'DESIGN TOOLS & OUTPUTS':'TOOLS & PRACTICES'}</p>
<ul>${project.tools.map(tool =>`<li>${escapeHtml(tool)}</li>`).join('')}</ul>
<a class="text-link" href="#contact">Discuss this work ${arrowIcon}</a></div>
</aside>
</div>
<a class="next-project" href="/work/${nextProject.slug}/"><div><span class="eyebrow">NEXT PROJECT</span><h2>${escapeHtml(nextProject.title)}</h2>
</div>${arrowIcon}</a></div>${renderContact()}`});
}
export function renderNotFoundPage() { return renderLayout({page:'not-found',title:'Page not found | Lance Sagabaen',description:'This page could not be found. Return to Lance Sagabaen’s portfolio to explore his work and experience.',body:`<section class="container not-found"><p class="eyebrow">404 / PAGE NOT FOUND</p>
<h1>A little off course.</h1>
<p>This page may have moved, or the link might be incomplete.<br>Let’s get you back to the work.</p>
<div class="hero-actions"><a class="button button-primary" href="/">Return home ${arrowIcon}</a><a class="text-link" href="/#work">Explore projects ${externalLinkIcon}</a></div>
</section>`}); }
export function getPages() { return [['index.html',renderHomePage()],['resume/index.html',renderResumePage()],...projects.map((project, projectIndex) =>[`work/${project.slug}/index.html`,renderProjectPage(project, projectIndex)]),['404.html',renderNotFoundPage()]]; }

