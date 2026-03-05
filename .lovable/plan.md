

## Premium Audit & Portfolio Upgrade

### Problems Identified
1. **Hero badges/pills** ("Integrated with Zapier/Vercel/AWS") -- generic AI-startup trope, screams template
2. **Logo marquee** -- plain text placeholders look cheap, not premium
3. **Services section heading** "Every Service. Powered by AI." -- leans too hard into "AI" branding
4. **Portfolio cards** -- bland gradient placeholder instead of real thumbnails, generic card layout
5. **Navbar** -- "Get Started for Free" and "Features/Insights" links feel SaaS-template, not agency
6. **Overall** -- too many rounded-full pills, gradient borders, and "glass" effects that read as generic AI

### Changes

**1. HeroSection.tsx -- Remove badges, refine copy & buttons**
- Remove the entire badges array and badges rendering block
- Adjust animation custom indices (headline becomes 0, subtext 1, buttons 2)
- Change buttons from `rounded-full` to `rounded-lg` for a more editorial feel
- Remove the logo marquee entirely (or replace with a minimal "Trusted by" line with styled text, no scrolling animation)
- Adjust headline animation delay to start sooner without badge stagger

**2. Navbar.tsx -- Make it feel like an agency, not a SaaS**
- Change nav links to: Services, Work, About, Contact (remove "Features", "Insights", strikethrough "Case Studies")
- Change CTA from "Get Started for Free" to "Let's Talk"
- Remove gradient button style, use a simple white text with subtle border instead
- Remove `gradient-border` on active link, use a simple underline or opacity difference

**3. ServicesSection.tsx -- Tone down AI branding**
- Change heading to "What We Do" (straightforward, premium)
- Change subtitle to "Strategy, design, and engineering — under one roof."
- Remove the icon boxes with colored backgrounds (too SaaS); instead use a thin top-border accent line or a large number (01, 02, 03) as a visual anchor

**4. PortfolioSection.tsx -- Premium redesign with thumbnails**
- Switch from 3-column equal grid to a more editorial layout: first project spans 2 columns (large), next two are stacked in the third column — or use a larger card format
- Replace gradient placeholder with actual styled thumbnail areas using distinct color palettes per project (dark teal for Surflux, warm amber for LoadBetter, deep wine for Vinosivezi) with the project name as large typographic element
- Add a key metric callout on each card (e.g., "+40% leads", "12x traffic", "3.2x ROAS")
- Remove the small "Read Case Study" link; make the entire card clickable with a subtle arrow on hover

**5. TeamSection.tsx -- Minor refinements**
- Keep as-is but remove the single-letter avatar circles (cheap feel); replace with initials in a more refined square with rounded corners

**6. index.css -- Remove unused glass/gradient utilities if no longer needed**

### Files to Modify
1. `src/components/HeroSection.tsx` -- Remove badges, remove marquee, refine buttons
2. `src/components/Navbar.tsx` -- Simplify links, change CTA
3. `src/components/ServicesSection.tsx` -- New heading, numbered layout instead of icon boxes
4. `src/components/PortfolioSection.tsx` -- Editorial layout with colored thumbnails and metric callouts
5. `src/components/TeamSection.tsx` -- Square avatar containers

