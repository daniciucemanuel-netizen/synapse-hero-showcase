# Norel Studio — Comprehensive SEO Audit & Launch Checklist

## Full Audit Results

### 1. Indexability & Crawlability ✅

| Item | Status | Notes |
|------|--------|-------|
| robots.txt | ✅ Fixed | Allows all, disallows `/offer`, `/api/`, `/admin/`, `/staging/`. Sitemap referenced. |
| sitemap.xml | ✅ Fixed | 3 pages: `/`, `/work`, `/blog`. Image sitemap extension added. `lastmod` dates included. |
| Canonical tags | ✅ Fixed | Dynamic per-page canonicals via `SEO.tsx` component. All point to `norelstudio.com`. |
| noindex/nofollow | ✅ Fixed | `/offer` page has `noindex, nofollow` (private proposal template). |
| Duplicate URLs | ✅ OK | No duplicate URL issues — SPA with clean routes. |
| URL structure | ✅ OK | Clean: `/`, `/work`, `/blog`. No query params or hash-based routing. |
| Crawl depth | ✅ OK | Max 1 click from homepage to any page. |
| Redirect chains | ✅ OK | No redirects — all links go directly to final URLs. |
| Broken links | ⚠️ Monitor | External client URLs should be checked periodically. |

### 2. Technical SEO & Performance ✅

| Item | Status | Fix Applied |
|------|--------|-------------|
| Font loading | ✅ Fixed | `preconnect` to Google Fonts added in `<head>`. |
| Video (Mux) | ✅ Fixed | `dns-prefetch` for `stream.mux.com` added. HLS.js streams efficiently. |
| Logo LCP | ✅ Fixed | `fetchpriority="high"` on navbar logo. `loading="lazy"` on footer logo. |
| Font smoothing | ✅ Fixed | `-webkit-font-smoothing: antialiased` added to body. |
| CLS prevention | ✅ OK | Fixed heights on navbar (72px), no layout shifts from fonts. |
| CSS render blocking | ⚠️ Note | Google Fonts `@import` in CSS is slightly render-blocking. Consider self-hosting fonts for maximum performance. |
| Image optimization | ✅ Fixed | OG image optimized. No other raster images on-page (logos are small PNGs). |
| `theme-color` | ✅ Fixed | `<meta name="theme-color" content="#0a0a0a">` added. |
| Mobile performance | ✅ OK | Fully responsive. No heavy JS. Framer Motion animations are GPU-accelerated. |

### 3. On-Page SEO ✅

| Page | Title | Description | H1 | Status |
|------|-------|-------------|-----|--------|
| `/` | Norel Studio — AI-Powered Growth Marketing Agency \| Brand, Content & SEO | ✅ 160 chars, keywords | ✅ Single H1 | ✅ |
| `/work` | Case Studies — Norel Studio \| Growth Marketing Portfolio & Results | ✅ Keywords + results | ✅ Single H1 | ✅ |
| `/blog` | Blog — Norel Studio \| Growth Marketing Insights, SEO & Brand Strategy | ✅ Keywords + value | ✅ Single H1 | ✅ |
| `/offer` | Growth Proposal — Norel Studio | ✅ Generic (noindexed) | ✅ Single H1 | ✅ |

**Heading hierarchy**: All pages follow H1 → H2 → H3 correctly. No skipped levels.

**Keyword targeting**:
- Homepage targets: "growth marketing agency", "AI-powered", "brand strategy", "content marketing", "SEO"
- Work page targets: "case studies", "growth marketing portfolio"
- Blog targets: "growth marketing insights", "SEO", "brand strategy"

### 4. Content & Keyword Strategy

**Current keyword coverage:**
| Keyword | Covered? | Page |
|---------|----------|------|
| growth marketing agency | ✅ | Homepage |
| AI marketing agency | ✅ | Homepage |
| SEO agency | ✅ | Homepage, Services |
| content marketing agency | ✅ | Homepage, Blog |
| brand strategy agency | ✅ | Homepage, Services |
| digital marketing agency | ✅ | Meta keywords |
| performance marketing agency | ⚠️ Weak | Add to service descriptions |

**Recommended new pages to create:**
1. **`/services/seo`** — Dedicated SEO service page targeting "SEO agency", "AI-powered SEO"
2. **`/services/brand-strategy`** — Targets "brand strategy agency", "startup branding"
3. **`/services/content-marketing`** — Targets "content marketing agency", "B2B content"
4. **`/about`** — Team page with more depth for E-E-A-T signals

**Blog topics to prioritize:**
1. "How to Choose a Growth Marketing Agency in 2026"
2. "SEO vs AEO: What Startups Need to Know"
3. "5 Signs Your Startup Needs a Brand Refresh"
4. "Content Marketing ROI: How We Measure It"
5. "The Startup CMO's Guide to Agency Selection"

### 5. Local SEO ✅

| Item | Status | Notes |
|------|--------|-------|
| Location signals | ✅ Fixed | Footer, Contact section mention "Europe-based, worldwide service" |
| NAP consistency | ✅ Fixed | Email in footer, contact section, and schema. Address in schema. |
| Local schema | ✅ Fixed | `ProfessionalService` schema with geo coordinates, address, opening hours |
| Google Business Profile | 📋 Post-launch | Create GBP listing for "Norel Studio" |

**For "marketing agency + city" ranking:**
- Consider adding city-specific landing pages (e.g., `/marketing-agency-cluj`, `/marketing-agency-romania`)
- Add city name to schema `address` field once confirmed

### 6. Structured Data ✅

| Schema Type | Status | Location |
|-------------|--------|----------|
| Organization | ✅ | index.html |
| ProfessionalService | ✅ | index.html (replaced LocalBusiness for accuracy) |
| WebSite | ✅ | index.html |
| Service (×4) | ✅ | index.html (within Organization) |
| FAQPage | ✅ | FAQSection.tsx |
| Blog + BlogPosting | ✅ | Blog.tsx |
| BreadcrumbList | ✅ | Work.tsx, Blog.tsx |

### 7. Internal Linking ✅

| From | To | Link Text | Status |
|------|----|-----------|--------|
| Homepage Services | /offer | "See our full offer →" | ✅ |
| Homepage Portfolio | /work | "View all work" | ✅ |
| Navbar | /#services, #work, /blog, #contact | Nav labels | ✅ |
| Footer | /#services, /work, /blog, /#contact | Footer nav | ✅ Fixed (was using `<a>`, now uses `<Link>`) |
| Work page | /#contact | "Get Your Free Growth Audit" | ✅ Added |
| Blog page | /#contact | "Get a free growth audit →" | ✅ Added |

**No orphan pages** — all pages reachable within 1 click from nav/footer.

### 8. Conversion SEO ✅

| Element | Status | Notes |
|---------|--------|-------|
| CTA placement | ✅ | Hero, navbar, contact section, work page, blog page |
| Service page structure | ✅ | Clear services with tags, descriptions |
| Trust signals | ✅ | Client logos, metrics (2.4x growth, 32% leads, 91% retention) |
| Case studies | ✅ | 11 clients with descriptions and links |
| Contact flow | ✅ | Email CTA + assurance badges (free, 24h, no commitment) |
| Social proof | ✅ | Client name bar, results section |

### 9. Accessibility & Technical

| Item | Status |
|------|--------|
| Skip to content link | ✅ Added |
| ARIA labels on social links | ✅ Added |
| `aria-expanded` on accordion buttons | ✅ Added (Work page) |
| `<main>` landmark | ✅ Added on all pages |
| `<address>` for contact info | ✅ Added in footer and contact |
| `role="contentinfo"` on footer | ✅ Added |
| Semantic `<time>` elements | ✅ Added in Blog |

---

## Post-Launch Checklist

### Day 1 (Immediate)

- [ ] **Connect custom domain** `norelstudio.com` in Lovable project settings
- [ ] Set up [Google Search Console](https://search.google.com/search-console) and verify `norelstudio.com`
- [ ] Submit sitemap: `https://norelstudio.com/sitemap.xml`
- [ ] Request indexing for `/`, `/work`, `/blog`
- [ ] Set up [Google Analytics 4](https://analytics.google.com/)
- [ ] Verify OG images:
  - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
  - [X Card Validator](https://cards-dev.twitter.com/validator)
  - [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Test structured data: [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev/) and document baseline scores

### Week 1

- [ ] Create [Google Business Profile](https://business.google.com/) for "Norel Studio"
- [ ] Monitor crawl errors in Search Console
- [ ] Check Core Web Vitals (Experience tab)
- [ ] Ensure all 3 pages are indexed (Coverage report)
- [ ] Set up rank tracking for target keywords

### Month 1

- [ ] Publish 2–4 blog posts targeting long-tail keywords
- [ ] Build initial backlinks (directories, guest posts, partnerships)
- [ ] Create dedicated service landing pages (`/services/seo`, `/services/brand-strategy`)
- [ ] Add Google Analytics conversion tracking on CTA clicks

### Ongoing

- [ ] Publish 2–4 blog posts per month
- [ ] Monitor and improve Core Web Vitals
- [ ] Update sitemap.xml when adding new pages
- [ ] Review and update meta descriptions quarterly
- [ ] Build backlinks through case studies and partnerships
- [ ] Track rankings for target keywords weekly

---

## Top 10 SEO Fixes (Priority Order)

| # | Issue | Impact | Status |
|---|-------|--------|--------|
| 1 | **No per-page meta titles/descriptions** — SPA shared one title for all pages | 🔴 Critical | ✅ Fixed |
| 2 | **No robots.txt sitemap reference** — search engines couldn't discover sitemap | 🔴 Critical | ✅ Fixed |
| 3 | **Offer page indexed** — private proposal template was crawlable | 🔴 Critical | ✅ Fixed (noindex) |
| 4 | **No structured data beyond Organization** — missing FAQ, Blog, Breadcrumb schemas | 🟡 High | ✅ Fixed |
| 5 | **No preconnect for Google Fonts** — render-blocking font load | 🟡 High | ✅ Fixed |
| 6 | **Duplicate content in TeamSection** — same paragraph repeated | 🟡 High | ✅ Fixed |
| 7 | **No internal linking CTAs on sub-pages** — Work and Blog were dead ends | 🟡 High | ✅ Fixed |
| 8 | **Social links with no href** — `<a href="#">` on LinkedIn/Twitter in footer | 🟡 Medium | ✅ Fixed |
| 9 | **No `<main>` landmark or skip link** — accessibility gap | 🟡 Medium | ✅ Fixed |
| 10 | **Missing `og:image:width/height`** — slower social card rendering | 🟢 Low | ✅ Fixed |

---

## Target Keywords Strategy

| Keyword Cluster | Primary Keyword | Long-tail Targets | Recommended Page |
|----------------|----------------|-------------------|-----------------|
| Growth Marketing | growth marketing agency | AI-powered growth marketing for startups | Homepage |
| SEO | SEO agency | AI SEO agency for SaaS, AEO optimization | /services/seo (create) |
| Content | content marketing agency | B2B content marketing services | /services/content (create) |
| Brand | brand strategy agency | startup brand identity design | /services/brand (create) |
| Local | marketing agency Europe | digital marketing agency Romania | Homepage + GBP |
| Performance | performance marketing | performance marketing for startups | Homepage |
