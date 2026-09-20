import { resumePages, resumeText } from './resume-content.mjs';
import { renderLayout, escapeHtml, downloadIcon, externalLinkIcon } from './components.mjs';

export function renderResumePage() {
  return renderLayout({
    title: 'Résumé | Lance Jetrho B. Sagabaen',
    description: 'View Lance Sagabaen’s résumé and download the original PDF. Cloud, DevOps and backend development experience.',
    page: 'resume',
    body: `
      <section class="container resume-section" aria-labelledby="resume-title">
        <a class="back-link" href="/">← Back to portfolio</a>
        <div class="resume-heading">
          <div>
            <p class="eyebrow">EXPERIENCE AT A GLANCE</p>
            <h1 id="resume-title">My résumé.</h1>
            <p>Lance Jetrho B. Sagabaen · Cloud &amp; DevOps Engineer</p>
          </div>
          <div class="resume-actions">
            <a class="button button-primary" href="/assets/lance-sagabaen-resume.pdf" download="Lance-Sagabaen-Resume.pdf">Download PDF ${downloadIcon}</a>
            <a class="text-link" href="/assets/lance-sagabaen-resume.pdf" target="_blank" rel="noopener">Open original PDF ${externalLinkIcon}<span class="sr-only"> (opens in a new tab)</span></a>
          </div>
        </div>
        <p class="resume-hint">${resumePages.length} pages · PDF preview · Pinch to zoom on your phone.</p>
        <div class="resume-pages" aria-label="Résumé page previews">
          ${resumePages.map((page, index) => `
            <figure class="resume-sheet">
              <img src="${page.src}" width="${page.width}" height="${page.height}"
                alt="Page ${page.page} of Lance Sagabaen’s résumé. A text version is available below."
                loading="${index === 0 ? 'eager' : 'lazy'}" fetchpriority="${index === 0 ? 'high' : 'auto'}" decoding="async">
              <figcaption>Page ${page.page} of ${resumePages.length}</figcaption>
            </figure>
          `).join('')}
        </div>
        <details class="resume-text">
          <summary>Read the text version</summary>
          ${resumeText.map((page, index) => `<section aria-label="Résumé page ${index + 1}"><h2>Page ${index + 1}</h2><div class="resume-transcript">${escapeHtml(page)}</div></section>`).join('')}
        </details>
      </section>
    `,
  });
}

