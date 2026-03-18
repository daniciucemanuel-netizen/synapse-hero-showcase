

## The Problem — It's Real

Yes, this is true and it's a fundamental limitation. Your site is a **client-side rendered React SPA** (Vite + React). The initial HTML response from the server is essentially:

```text
<div id="root"></div>
<script type="module" src="/src/main.tsx"></script>
```

All content is injected by JavaScript after the page loads. This means:

- **Crawlers that don't execute JS** (most AI tools, Slack/LinkedIn previews, many bots) see an empty page
- **Googlebot** can render JS but does it on a delayed "second wave" — less reliable
- **Social previews** partially work because your OG meta tags are in `index.html`, but the body content is invisible

**What's already working:** Your `<title>`, `<meta description>`, OG tags, Twitter cards, and JSON-LD structured data are all in the static `index.html` — so link previews on social media should actually show title + description + image correctly. That part is fine.

**What's broken:** The actual page *content* (headings, service descriptions, FAQ answers, etc.) is invisible to non-JS crawlers.

## What We Can Do Within Lovable

Lovable runs Vite + React (no SSR/Next.js). We can't do true server-side rendering, but we can significantly improve the situation:

### 1. Add a static HTML fallback in `index.html` (high impact)
Inject a `<noscript>` block and **hidden semantic HTML** inside `<div id="root">` that contains your key content. React will hydrate over it, but crawlers will see real text content. This includes:
- H1, service names, key value propositions
- FAQ content (critical for featured snippets)
- Contact info, social links
- A condensed version of all page sections

This is the single most impactful change — it makes your content visible to every crawler without changing the user experience at all.

### 2. Pre-render key pages using a build-time script
Add a simple prerender step to the build process that generates static HTML snapshots for `/`, `/blog`, `/contact`, `/work`. This can be done with a lightweight tool like `prerender-spa-plugin` or a custom Puppeteer script in CI.

**However**, this requires build pipeline changes that Lovable can't fully control. So option 1 is the practical choice.

### 3. Verify social previews are actually working
Your OG meta tags are already in `index.html` statically, so LinkedIn/Slack/WhatsApp previews *should* work. We should verify this is the case — the report may be overstating the social preview issue.

## Recommended Plan

**Approach: Inject static semantic content into `index.html`**

1. **Add hidden crawlable content inside `<div id="root">`** — a `<noscript>` section plus a visually-hidden `<div>` with all key page content (services, results stats, FAQ Q&As, contact info). React's `createRoot` will replace this on load, so users see no difference.

2. **Structure it with proper semantic HTML** — `<h1>`, `<h2>`, `<article>`, `<section>`, `<dl>` for FAQs — so search engines can parse it meaningfully.

3. **Include the homepage content primarily** since it's the highest-priority page for indexing.

This won't give you full SSR, but it will ensure that crawlers, AI tools, and accessibility readers can access your core content. For a marketing agency site with relatively static content, this is a practical and effective solution.

### What it won't solve
- Dynamic per-page content on `/blog`, `/work`, `/contact` will still require JS. For those, the meta tags in `index.html` (set by the SEO component) are the main signal.
- True SSR would require migrating to Next.js, which isn't supported in Lovable.

