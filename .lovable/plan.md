

## Redesign "What We Delivered" Section

### Problem
The bento grid layout looks awkward — uneven card sizes, too much empty space in larger cards, and the metrics feel exaggerated/unrealistic for a young agency.

### Updated Metrics (realistic for a small growth studio)

| Value | Label |
|-------|-------|
| 3.5x | Average organic traffic growth in 6 months |
| 47% | Increase in qualified inbound leads |
| 2.1x | Return on ad spend across campaigns |
| 30+ | Projects shipped for clients |
| 18 | Average days from brief to launch |
| 96% | Client retention rate |

### New Layout
Replace the bento grid with a clean **3-column uniform grid** (`grid-cols-2 md:grid-cols-3`) — all cards same size, no spanning. Each card:
- Sage green monospace number (large, `text-[hsl(var(--sage))]`)
- Muted description below
- Subtle top border in sage (`border-t-2 border-[hsl(var(--sage))]`)
- `bg-[hsl(var(--surface))]` background, hover `hover:bg-muted/50`
- Consistent padding `p-8`

This matches the editorial/premium feel of the Services and Process sections.

### Files
| File | Change |
|------|--------|
| `src/components/ResultsSection.tsx` | Full rewrite — new metrics data, uniform 3-col grid, theme-aware styling |

