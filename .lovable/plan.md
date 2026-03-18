

## Problem

Your site is a client-side rendered React SPA. The server sends an empty `<div id="root"></div>` — all content is rendered by JavaScript. Non-JS crawlers (most AI tools, link preview bots, and even Googlebot's first pass) see nothing.

## Solution: Static HTML Fallback in `index.html`

Inject a comprehensive, semantically structured HTML snapshot of your homepage content directly inside `<div id="root">...</div>` in `index.html`. When React boots, `createRoot` replaces this content seamlessly — users see no difference. But crawlers get real, indexable text on first load.

This is the highest-impact fix available within a Vite+React stack (no SSR/Next.js needed).

## What gets injected

A visually-hidden but crawlable `<div>` containing:

1. **Hero** — H1, tagline, CTA text
2. **Services** — All 4 service titles + descriptions + tags
3. **Results/metrics** — All 6 stats with labels
4. **FAQ** — All 6 questions and answers (critical for featured snippets and AI grounding)
5. **Contact info** — Email, response time, CTA
6. **Navigation links** — All page routes

The content will use proper semantic HTML (`<h1>`, `<h2>`, `<section>`, `<article>`, `<dl>`/`<dt>`/`<dd>` for FAQs) so search engines can parse structure and meaning.

A `<noscript>` block will also be added for users/bots with JS completely disabled.

## Files changed

- **`index.html`** — Add static content inside `<div id="root">` with `style="display:contents"` wrapper that React will replace on hydration. Content is real HTML, not hidden with `display:none` (which Google may ignore).

## What this fixes

- Google indexes your actual content on first crawl pass
- AI tools (ChatGPT, Perplexity, Claude) can read and cite your services/FAQ
- Link previews on Slack/LinkedIn show OG tags (already working) + crawlers can extract body text
- FAQ content becomes eligible for Google featured snippets

## What it doesn't fix

- Subpages (`/blog`, `/work`, `/contact`) will still require JS — but their OG meta tags are set statically by the SEO component, which is acceptable for secondary pages
- True SSR would require Next.js migration (not supported in Lovable)

