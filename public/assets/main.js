const homePath = (document.querySelector('meta[name=site-base-path]')?.content || '') + '/';
const navigation = document.querySelector('#main-nav');
const menuButton = document.querySelector('.menu-toggle');
const mobileViewport = matchMedia('(max-width: 700px)');
const menuLabel = document.querySelector('[data-menu-label]');
function setMenuExpanded(isExpanded, restoreFocus = false) {
  menuButton.setAttribute('aria-expanded', String(isExpanded));
  menuLabel.textContent = isExpanded ? 'Close' : 'Menu';
  navigation.hidden = mobileViewport.matches && !isExpanded;
  if (restoreFocus) menuButton.focus();
}
function syncNavigationLayout() { menuButton.hidden = !mobileViewport.matches; setMenuExpanded(false); }
syncNavigationLayout();
mobileViewport.addEventListener('change', syncNavigationLayout);
menuButton.addEventListener('click', () => {
  const isExpanded = menuButton.getAttribute('aria-expanded') !== 'true';
  setMenuExpanded(isExpanded);
  if (isExpanded) navigation.querySelector('a').focus();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileViewport.matches && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenuExpanded(false, true);
  }
});
navigation.addEventListener('click', (event) => {
  const selectedLink = event.target.closest('a');
  if (!selectedLink || !mobileViewport.matches) return;
  setMenuExpanded(false);
  if (location.pathname === homePath && selectedLink.hash) {
    const destination = document.getElementById(selectedLink.hash.slice(1));
    if (destination) { destination.setAttribute('tabindex', '-1'); destination.focus({preventScroll:true}); }
  }
});
navigation.addEventListener('focusout', () => {
  setTimeout(() => { if (mobileViewport.matches && !navigation.contains(document.activeElement) && document.activeElement !== menuButton) setMenuExpanded(false); }, 0);
});
const copyEmailButton = document.querySelector('[data-copy-email]');
if (copyEmailButton) {
  copyEmailButton.hidden = false;
  copyEmailButton.addEventListener('click', async () => {
    const copyStatus = document.querySelector('.copy-status');
    try { await navigator.clipboard.writeText('lancebasco212019@gmail.com'); copyStatus.textContent = 'Email copied. Ready to paste.'; }
    catch { copyStatus.textContent = 'Could not copy. Select and copy the email address above, or use Email me.'; }
  });
}
if (document.body.dataset.page === 'home' && 'IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    const visibleSection = entries.find(sectionEntry => sectionEntry.isIntersecting);
    if (visibleSection) {
      navigation.querySelectorAll('a[href*="/#"]').forEach(sectionLink => {
        if (sectionLink.hash === '#' + visibleSection.target.id) sectionLink.setAttribute('aria-current', 'location');
        else sectionLink.removeAttribute('aria-current');
      });
    }
  }, {rootMargin:'-15% 0px -65% 0px'});
  document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));
}


// Warm the resume preview after the main page has settled, or on link intent.
// Skip speculative transfers when the visitor is conserving mobile data.
const resumeLinks = document.querySelectorAll('[data-resume-link]');
let resumePrefetched = false;
function prefetchResume() {
  const connection = navigator.connection;
  if (resumePrefetched || connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType || '')) return;
  resumePrefetched = true;
  const previewDocument = document.createElement('link');
  previewDocument.rel = 'prefetch';
  previewDocument.href = homePath + 'resume/';
  previewDocument.as = 'document';
  document.head.append(previewDocument);
  const firstPage = new Image();
  firstPage.fetchPriority = 'low';
  firstPage.src = homePath + 'assets/resume-page-1.webp';
}
resumeLinks.forEach((link) => {
  link.addEventListener('pointerenter', prefetchResume, { once: true });
  link.addEventListener('focus', prefetchResume, { once: true });
  link.addEventListener('pointerdown', prefetchResume, { once: true });
});
if (resumeLinks.length && document.body.dataset.page !== 'resume') {
  const schedulePrefetch = () => {
    if ('requestIdleCallback' in window) requestIdleCallback(prefetchResume, { timeout: 3000 });
    else setTimeout(prefetchResume, 1500);
  };
  if (document.readyState === 'complete') schedulePrefetch();
  else window.addEventListener('load', schedulePrefetch, { once: true });
}
