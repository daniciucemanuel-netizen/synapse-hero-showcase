

## Website Redesign: Scalable Results, Tech Stack, Team Update & Copy Cleanup

### 1. Portfolio → Results Section (`PortfolioSection.tsx` → full rewrite)

Rename to "What We've Delivered." Replace the current editorial grid with a scalable card grid system.

**Layout**: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` with consistent gap. Scales cleanly to 10-20+ items.

**Card structure**:
- Optional tag pill (e.g., "AI", "Automation", "Web App") top-left
- Project/client name (bold)
- One-sentence description
- Result line in muted text

No thumbnails, no color-coded backgrounds. Clean bordered cards with subtle hover.

**Data** (keep existing 3 plus structure for easy additions):
```
{ name: "Surflux", tag: "AI", desc: "AI-driven web presence and brand overhaul", result: "40% increase in qualified leads" }
{ name: "LoadBetter", tag: "Growth", desc: "Technical SEO and programmatic content engine", result: "12x organic traffic in 6 months" }  
{ name: "Vinosivezi", tag: "Automation", desc: "E-commerce funnel and community building", result: "3.2x return on ad spend in 90 days" }
```

### 2. Remove all em dashes across the site

**Files affected**:
- `HeroSection.tsx` line 49: " — combining..." → ". Combining..."
- `ServicesSection.tsx` lines 8, 14, 20: replace all em dashes with periods or commas
- `ServicesSection.tsx` line 39: "Strategy, design, and engineering — under one roof." → "Strategy, design, and engineering. Under one roof."

### 3. Team Section (`TeamSection.tsx` → rewrite)

Replace current layout with:
- Names: Emanuel Daniciuc, Alex Rus, Cris Crisan
- Circular avatar placeholders (initials or generic user icon)
- Name only, no titles
- Simple 3-column grid, centered

### 4. Replace "Trusted By" with "Technologies We Use" (`HeroSection.tsx`)

Remove the "Trusted by forward-thinking brands" block at the bottom of the hero.

Create a new `TechStackSection.tsx` component placed between Hero and Services in `Index.tsx`.

**Layout**: Centered heading "Technologies We Use" + grid of tech names displayed as subtle badges or a logo-style text grid at low opacity.

**Items**: Gemini, Claude, ChatGPT, Grok, Lovable, Stripe, Vercel, Figma, Notion, Framer, Webflow, Canva, OpenAI, Supabase, Firebase, LangChain, React, Next.js, Node.js, Tailwind CSS, PostgreSQL, Antigravity

Use a `flex-wrap` layout with consistent spacing, text rendered as uppercase tracking-wide labels at ~40-50% opacity for a credible but understated look.

### 5. Files to modify

| File | Action |
|------|--------|
| `src/components/HeroSection.tsx` | Remove "Trusted By" block, fix em dash |
| `src/components/ServicesSection.tsx` | Fix em dashes in copy |
| `src/components/PortfolioSection.tsx` | Full rewrite to scalable results grid |
| `src/components/TeamSection.tsx` | Rewrite with new names, circular avatars, no titles |
| `src/components/TechStackSection.tsx` | New component for technology grid |
| `src/pages/Index.tsx` | Add TechStackSection between Hero and Services |

