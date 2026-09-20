# Lance Sagabaen — Personal Portfolio

A static portfolio presenting my cloud and DevOps experience, backend projects, UI/UX work, skills and education.

The site uses HTML, CSS and JavaScript. A small Node.js build script combines shared templates and project content into ready-to-host HTML files. There is no frontend framework, database or backend in the published website.

## Quick start

Install **Node.js 20 or newer**, then open a terminal in this folder. There are no project dependencies to install.

```sh
npm run dev
```

Visit **http://localhost:4321**. Keep the terminal open; press Ctrl+C to stop the server. On Windows, `Start-Portfolio.cmd` starts the same server and requires Node on PATH.

Development mode rebuilds after changes to `src/` or `public/`. Refresh the browser to see the result; automatic browser refresh is not implemented.

## How this portfolio is built

### Content and design

The résumé supplies names, dates, roles, skills and project contributions. The design PDF supplies the starting direction for the navy-and-blue palette, page sections, mobile navigation and project-detail flow.

The homepage introduces the role, presents three selected projects, then covers experience, skills, education, certifications and contact information. Each selected project has its own static page. Team contributions are described as contributions rather than sole ownership.

### Templates and content

`src/content.mjs` exports the profile and project data. `src/components.mjs` provides reusable HTML functions: `renderHeader`, `renderProjectRow`, `renderContact`, `renderFooter` and `renderLayout`.

`src/pages.mjs` assembles those components into `renderHomePage`, `renderProjectPage` and `renderNotFoundPage`. Its `getPages()` function returns output paths paired with HTML. `escapeHtml()` protects dynamic text inserted into markup.

The templates produce complete HTML. The browser does not need a framework to mount or hydrate the page; reading content and following links work without JavaScript.

### Static build

```text
content.mjs + components.mjs + pages.mjs
                    |
            scripts/build.mjs
                    |
           HTML written to dist/
                    +
       public/ assets copied to dist/
```

`buildPortfolio()` creates the output directory, copies assets and writes every rendered page. A project URL such as `/work/fabella-opd/` resolves to `dist/work/fabella-opd/index.html`.

The build does not clear `dist/` automatically. When deleting or renaming pages or assets, remove their obsolete output files before publishing again.

### Responsive styling

`public/assets/styles.css` contains the theme, components and responsive rules. CSS Grid and Flexbox handle layouts. Media queries at 1100, 800 and 700 pixels adjust columns and spacing; mobile navigation activates at 700 pixels. A rule above 1600 pixels increases hero spacing. System fonts avoid a third-party font request.

| Color | Value | Purpose |
| --- | --- | --- |
| Navy | `#14243B` | Headings, focus panel and contact section |
| Blue | `#2457D6` | Buttons, links and accents |
| Off-white | `#F5F7FA` | Background |
| Slate | `#526175` | Supporting text |
| Teal | `#0F766E` | Role labels |

Focus outlines, a skip link, semantic headings and reduced-motion styles support accessibility.

### Browser interactions

`public/assets/main.js` adds:

- Mobile navigation with expanded-state announcements, Escape handling and focus management.
- Copy-email behavior with success and failure messages in a live status region.
- Active-section navigation using IntersectionObserver.

Clipboard access requires HTTPS or localhost. The visible email address and mail link remain available if copying fails. Contact uses `mailto:`; there is no contact form or visitor database.

### Local server

`scripts/server.mjs` rebuilds on startup and serves `dist/` on `127.0.0.1`. It handles directory URLs, MIME types, path validation and 404 responses. With `--watch`, source changes trigger a new build process so imported content is reloaded.

The server is for local use. Public hosting only needs `dist/`.

## Folder structure

```text
lance-sagabaen-portfolio/
├── src/
│   ├── content.mjs          # Profile and selected projects
│   ├── components.mjs       # Shared HTML components
│   └── pages.mjs            # Page templates and output paths
├── public/assets/
│   ├── styles.css          # Theme and responsive layouts
│   ├── main.js             # Browser interactions
│   ├── favicon.svg
│   └── lance-sagabaen-resume.pdf
├── scripts/
│   ├── build.mjs           # Static generator
│   └── server.mjs          # Local preview and source watcher
├── docs/testing.md         # Verification notes
├── dist/                   # Ready-to-host website
├── package.json
├── Start-Portfolio.cmd
└── README.md
```

The working repository also retains its hosting provider’s required configuration. Provider configuration and Git history are excluded from the portable source ZIP; neither is needed for local development or another static host.

## Editing guide

| Change | File |
| --- | --- |
| Profile metadata and selected-project content | `src/content.mjs` |
| Homepage text, experience, education and credentials | `src/pages.mjs` |
| Navigation, footer and contact layout | `src/components.mjs` |
| Colors, typography and spacing | `public/assets/styles.css` |
| Menu and email-copy behavior | `public/assets/main.js` |
| Résumé | `public/assets/lance-sagabaen-resume.pdf` |

Some profile text is written directly in templates. When changing a name, email or location, review the homepage, shared components, page metadata and clipboard address in `main.js` for consistency.

To add a selected project, copy an entry in the `projects` array. Give it a unique URL-safe slug and fill in its role, context, technologies and contributions. Both the home listing and project page use this array.

Edit source files rather than `dist/`, then rebuild.

## Build and preview

```sh
npm run build
npm run preview
```

Preview rebuilds once and serves the output. It does not watch for changes.

To use a different port in PowerShell:

```powershell
$env:PORT = "4322"
npm run dev
```

## Publish

1. Run `npm run build`.
2. Upload the **contents of `dist/`** to the website root on a static host.
3. Configure missing URLs to serve `404.html` with a 404 response.
4. Verify navigation, project pages, the résumé PDF and contact actions.

Links are root-relative by default. For hosting under a subdirectory such as `/portfolio/`, set `SITE_BASE_PATH` before building. The GitHub Pages workflow supplies this value automatically. The templates do not hard-code a production domain.

## Troubleshooting

- **Node not recognized:** install Node.js 20 or newer and reopen the terminal.
- **Port occupied:** stop the other local server or change `PORT`.
- **Edits missing:** rebuild and refresh. Direct edits to `dist/` are overwritten.
- **Deleted page still present:** remove its obsolete file from `dist/` before uploading.
- **Copy email fails:** use HTTPS or localhost, or copy the visible address manually.
- **Assets missing when opening HTML directly:** use the local server instead of a file URL.

## Testing and next additions

See [testing notes](docs/testing.md). Approved screenshots, Figma frames and verified project or certification links can be added when available. Current project pages use text-based descriptions grounded in the résumé.

## Resume preview

`/resume/` displays two lossless WebP renders of the original PDF, avoiding the browser PDF viewer startup. The first page has eager loading and high fetch priority; the second is lazy-loaded. Navigation links warm the preview document and first image on focus/pointer intent and after idle time, unless the visitor enables data saving or has a slow 2G connection.

The original PDF remains available to open or download. A text transcript is available below the previews for screen-reader access and reading at larger text sizes. If the PDF is replaced, regenerate the WebP pages and `src/resume-content.mjs` together to keep the preview and transcript current.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` builds and publishes `dist/` using GitHub Actions. Set the repository’s **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. The workflow reads the hosting base path and supplies `SITE_BASE_PATH` to the build, so both account sites and repository subpaths work.

After enabling Pages for the first time, open **Actions → Publish portfolio → Run workflow** and run it on `main`. Later pushes to `main` publish automatically. The Actions run and Pages settings show the published website URL.

Generated `dist/` files and local hosting-provider metadata are excluded from GitHub source uploads. GitHub builds fresh output from `src/` and `public/` on every deployment.

For a local build with a repository prefix in PowerShell:

```powershell
$env:SITE_BASE_PATH = "/lance-sagabaen-portfolio"
npm run build
```

Clear `SITE_BASE_PATH` before a root-hosted local or Sites build. `src/urls.mjs` rewrites internal asset and page links. The browser reads the same path from page metadata for mobile navigation and resume prefetching.

To regenerate previews after replacing the PDF, install the optional Python packages pypdfium2, pdfplumber and Pillow, then run: python scripts/prepare-resume.py. Run npm run build afterward. These Python packages are not needed for routine builds or GitHub deployment.

