import { siteBasePath, resolveSiteLinks } from './urls.mjs';
import { profile } from './content.mjs';
export const escapeHtml = (value) => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
export const arrowIcon = '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
export const externalLinkIcon = '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6 18 18 6M6 6h12v12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
export const downloadIcon = '<svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none"><path d="M12 3v12m-4-4 4 4 4-4M5 17v4h14v-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
export function renderHeader() { return `<header class="header"><div class="container header-inner"><a class="brand" href="/" aria-label="Lance Sagabaen, home"><span class="monogram" aria-hidden="true">LJS<span>.</span></span><span class="brand-name">Lance Sagabaen</span></a><button class="menu-toggle" aria-expanded="false" aria-controls="main-nav" hidden><span data-menu-label>Menu</span><span class="menu-lines" aria-hidden="true"></span></button><nav id="main-nav" aria-label="Main navigation"><a href="/#work">Work</a><a href="/#experience">Experience</a><a href="/#about">About</a><a href="/#contact">Contact</a><a class="nav-resume" href="/resume/" data-resume-link>Résumé ${externalLinkIcon}</a></nav>
</div>
</header>`; }
export function renderContact() { return `<section class="contact" id="contact" aria-labelledby="contact-title"><div class="container contact-grid"><div><p class="eyebrow light">LET’S CONNECT</p>
<h2 id="contact-title">Good work starts<br>with a conversation.</h2>
<p class="contact-description">Have a cloud, DevOps or systems role in mind? <br>I’d be glad to hear about your team.</p>
</div>
<div class="contact-actions"><a class="email-address" href="mailto:${profile.email}">${profile.email} ${externalLinkIcon}</a><div class="contact-controls"><a class="button button-white" href="mailto:${profile.email}">Email me ${arrowIcon}</a><button class="button button-ghost" data-copy-email hidden>Copy email</button></div>
<p class="copy-status" role="status" aria-live="polite"></p>
<span class="contact-location">Makati City, Philippines</span></div>
</div>
</section>`; }
export function renderFooter() { return `<footer class="footer"><div class="container footer-inner"><p>© 2026 ${profile.name}</p>
<a href="/assets/lance-sagabaen-resume.pdf" download="Lance-Sagabaen-Resume.pdf">Download résumé ${downloadIcon}</a><a href="#top">Back to top ↑</a></div>
</footer>`; }
export function renderLayout({title,description,body,page='home'}) { return resolveSiteLinks(`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escapeHtml(title)}</title><meta name="description" content="${escapeHtml(description)}"><meta name="site-base-path" content="${siteBasePath}"><meta name="theme-color" content="#14243B"><meta property="og:title" content="${escapeHtml(title)}"><meta property="og:description" content="${escapeHtml(description)}"><meta property="og:type" content="website"><link rel="icon" type="image/svg+xml" href="/assets/favicon.svg"><link rel="stylesheet" href="/assets/styles.css"><script type="module" src="/assets/main.js"></script></head><body id="top" data-page="${page}"><a class="skip-link" href="#main">Skip to content</a>${renderHeader()}<main id="main" tabindex="-1">${body}</main>${renderFooter()}</body></html>`); }
export function renderProjectRow(project) { return `<article class="project-row"><span class="project-number">${project.number}</span><div class="project-main"><p class="eyebrow">${project.category}</p>
<h3><a href="/work/${project.slug}/">${escapeHtml(project.title)}<span class="project-arrow">${externalLinkIcon}</span></a></h3>
<p>${escapeHtml(project.short)}</p>
<ul class="tags" aria-label="Technologies">${project.tags.map(technology =>`<li>${escapeHtml(technology)}</li>`).join('')}</ul>
</div>
</article>`; }


