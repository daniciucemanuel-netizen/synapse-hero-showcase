

# Updated Plan: Use `norelstudio.com` as the canonical domain

All URLs throughout the project will use `norelstudio.com` instead of `norelstudio.lovable.app`.

## Changes

### `public/robots.txt`
- Rewrite with proper structure, include `Sitemap: https://norelstudio.com/sitemap.xml`
- Disallow `/offer`

### `public/sitemap.xml`
- Create with all indexable pages using `https://norelstudio.com/` as the base URL

### `index.html`
- Update canonical URL to `https://norelstudio.com/`
- Update `og:url` to `https://norelstudio.com/`
- Update `og:image` and `twitter:image` to `https://norelstudio.com/og-image.png`
- Update JSON-LD `url` and `logo` to use `norelstudio.com`
- Add `<meta name="theme-color">`

### All other SEO changes from the approved plan
- `src/components/SEO.tsx` — dynamic title/description/canonical per page
- `src/pages/Index.tsx`, `Work.tsx`, `Blog.tsx` — add SEO component
- `src/components/FAQSection.tsx` — FAQ JSON-LD
- `src/components/Navbar.tsx` — `fetchpriority="high"` on logo
- `src/components/Footer.tsx` — `loading="lazy"` on logo, location line
- `src/components/ContactSection.tsx` — location reference
- `SEO_CHECKLIST.md` — post-launch checklist

