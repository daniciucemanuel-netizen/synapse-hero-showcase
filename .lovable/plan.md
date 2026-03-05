

## Results Section: Better Bento Layout + Portfolio Upgrade

### 1. Results Section — Add 6th metric, rearrange bento grid

Current: 5 metrics, the large card spans 2 cols but the bottom row has 3 small cards that look uniform and flat.

**Fix**: Add a 6th metric and use a proper 2-row bento layout:

```text
Row 1: ┌─── large (2 col) ───┬── medium ──┐
Row 2: ┌── small ──┬── small ──┬── small ──┐
```

→ Change to a more dynamic arrangement with explicit grid positioning:

```text
┌──────────────┬────────────┐
│  12x         │  3.2x      │
│  (col-span-2,│  (row-span  │
│   row-span-2)│   -2)      │
├───────┬──────┤            │
│  20%  │ 40%  │            │
├───────┴──────┼────────────┤
│  2x          │  50+       │
└──────────────┴────────────┘
```

Add 6th metric: `{ value: "50+", label: "Products and campaigns launched" }`

Make it cooler:
- Add a subtle gradient or accent color to the large card's metric value (use `gradient-text` class)
- Add a faint background tint to the large card (`bg-white/[0.02]`)
- Slightly larger padding on medium cards
- Use `aspect-square` or min-height on small cards for visual rhythm

### 2. Portfolio Section — Add URLs, update Surflux copy, improve cards

**Data updates**:
- Surflux: `url: "surflux.dev"`, description: "Took an existing product with no branding and built the brand, website, and social media presence. Managed partnership discussions and go-to-market strategy."
- LoadBetter: `url: "loadbetter.com"` (keep description)
- Vino si Vezi: `url: "vinosivezi.ro"` (keep description)

**Card improvements**:
- Add the URL as a subtle link at the bottom of each card (external link icon from lucide)
- Make cards taller with more breathing room
- Add a subtle arrow (→) that appears on hover, indicating the card links out
- Use `group` + `group-hover` for the hover arrow effect

### Files
| File | Change |
|------|--------|
| `src/components/ResultsSection.tsx` | Add 6th metric, rearrange to proper bento with gradient accent on hero metric |
| `src/components/PortfolioSection.tsx` | Add URLs, update Surflux copy, add external link + hover arrow |

