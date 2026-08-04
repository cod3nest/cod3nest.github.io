export const BASE_URL = 'https://codenest.uk'

// Every @id on the site resolves to one of these two nodes, so schema blocks can
// reference the company and the site instead of restating them.
export const ORGANIZATION_ID = `${BASE_URL}/#organization`
export const WEBSITE_ID = `${BASE_URL}/#website`

/**
 * Build a BreadcrumbList. Home is prepended automatically; pass the rest of the
 * trail in order, e.g. breadcrumbs([{ name: 'Services', path: '/services/' }]).
 *
 * Paths carry the trailing slash because next.config.js sets trailingSlash: true —
 * a breadcrumb item pointing at a URL that 301s is a breadcrumb Google discards.
 */
export function breadcrumbs(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...trail].map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${BASE_URL}${crumb.path}`,
    })),
  }
}
