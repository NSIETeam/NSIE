/**
 * Generate a URL that respects the Astro base path configuration.
 * Use this for all internal links to ensure correct routing on GitHub Pages.
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}
