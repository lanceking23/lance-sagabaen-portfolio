// A GitHub project site has a path prefix; local and custom-domain sites do not.
const configuredPath = process.env.SITE_BASE_PATH || '';
if (configuredPath && !/^\/[A-Za-z0-9_/-]*$/.test(configuredPath)) {
  throw new Error('SITE_BASE_PATH must be an absolute URL path, such as /portfolio');
}
export const siteBasePath = configuredPath.replace(/\/+$/, '');

export function resolveSiteLinks(html) {
  return html.replace(/\b(href|src)="\/(?!\/)/g, `$1="${siteBasePath}/`);
}
