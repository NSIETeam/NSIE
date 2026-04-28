/** Site base URL path (matches astro.config.mjs base) */
export const SITE_BASE = '/NSIE';

/** Helper: prepend site base to a path */
export function href(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_BASE}${p}`;
}
