

## Three Changes: Bento Metrics, Portfolio Section, Team Centering

### 1. Split PortfolioSection into two sections

**New component: `ResultsSection.tsx`** — Bento-style metrics grid

Title: "What We Delivered"

Bento layout using CSS grid with varying card sizes:
```text
┌──────────────────────┬────────────────┐
│  12x organic traffic │  3.2x ROAS     │
│  (large, spans 2)    │  (medium)      │
├───────────┬──────────┼────────────────┤
│  20% more │ 40% faster│ 2x conversion │
│  leads    │ launches  │ improvement   │
└───────────┴──────────┴────────────────┘
```

Each card: metric number (large bold text) + one-line label underneath. Clean bordered cards, no backgrounds. The large card spans `col-span-2` on desktop.

5 metrics total:
- 12x organic traffic in 6 months (large)
- 3.2x return on ad spend in 90 days (medium)
- 20% increase in qualified leads (small)
- 40% faster product launch cycles (small)
- 2x conversion improvement after website redesign (small)

**Rewrite `PortfolioSection.tsx`** — Clean client/project cards

Title: "Selected Clients"

Simple grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`), each card with:
- Project name (bold)
- One sentence description

Projects:
- Surflux: "AI-driven web presence and brand overhaul."
- LoadBetter: "Website redesign, brand positioning, social media strategy, SEO, and content development."
- Vino si Vezi: "Built the platform from the ground up including landing pages, payments, and a volunteer management dashboard."

No tags, no metrics (those are in the Results section now).

### 2. Center the Team Section

The grid has `max-w-2xl` but no `mx-auto` centering. Fix: add `mx-auto` and change `items-start` to `items-center` consistently.

### 3. Page order in `Index.tsx`

```
Hero → TechStack → Services → ResultsSection → PortfolioSection → Team → Footer
```

### Files
| File | Action |
|------|--------|
| `src/components/ResultsSection.tsx` | New bento metrics component |
| `src/components/PortfolioSection.tsx` | Rewrite as clean client cards |
| `src/components/TeamSection.tsx` | Center the grid |
| `src/pages/Index.tsx` | Add ResultsSection import and placement |

