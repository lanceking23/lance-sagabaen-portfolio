# Delivery verification

Verified on 19 September 2026 against the local static build.

- Successful static build: home, three project-detail pages and a 404 page.
- 78 local link/asset references and cross-page anchors checked; no missing targets.
- Original résumé served as application/pdf and verified byte-for-byte against the supplied file.
- Missing route returns HTTP 404; Return home recovers correctly in the browser.
- Visually inspected desktop (1440 px), tablet (768 px) and mobile (390 px) layouts. No horizontal overflow measured at those widths.
- Visited all three project pages and exercised Back to work navigation.
- Mobile menu moves focus to its first link, closes on Escape, restores focus to the toggle and closes/focuses the destination after section selection.
- Skip link receives keyboard focus with a visible outline.
- Email copy succeeds in the browser and announces success. Both success and denied-clipboard fallback paths passed an isolated script test.
- Reduced-motion stylesheet disables smooth scrolling, transitions and animations. This was checked in source; an OS-level reduced-motion test was not performed.
- No browser JavaScript errors observed in the final local session.

A 200% browser-zoom check remains unverified. This is not a formal accessibility audit or screen-reader certification. Project artifacts and external credential links can be added once provided and approved.


## Source cleanup checks

- All five pages retain their HTML structure and visible text after identifier and file renaming.
- All local page links and assets resolve after switching the browser script to main.js.
- JavaScript syntax checks and both clipboard result paths pass.
- Source files, launcher and documentation contain no tool-specific branding. Hosting configuration and existing repository history are retained separately.


## Resume preview and GitHub Pages preparation

- Six pages and 95 internal links/assets validated for root hosting and the /lance-sagabaen-portfolio repository prefix.
- Resume preview checked on desktop and at 390 px, without horizontal overflow or browser script errors.
- Original PDF remains unchanged. Lossless preview images are 95,174 and 47,070 bytes; the second page is lazy-loaded.
- Preview navigation and expandable transcript work. No embedded PDF viewer or external viewer service is required.
- The GitHub Actions workflow is prepared; successful deployment still requires access to the intended GitHub account and repository.

