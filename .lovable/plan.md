

## Logo Wall + Expandable Portfolio Section

### Design
A compact grid of client names displayed as large, bold text blocks. Clicking a name expands it to reveal the description, services, and external link. Only one expanded at a time. Clean, interactive, and visually striking.

### Layout
```text
┌──────────────┬──────────────┬──────────────┐
│   Surflux    │  LoadBetter  │ Vino si Vezi  │
├──────────────┴──────────────┴──────────────┤
│  [expanded panel: description, services,   │
│   link with arrow]                         │
├──────────────┬──────────────┐              │
│  Meridian    │ Blanc Smile  │              │
│  Freight     │ Studio       │              │
└──────────────┴──────────────┘              │
```

### Changes — `src/components/PortfolioSection.tsx`

- Add `useState` to track the currently expanded client index (default: `null` or `0`)
- Render client names in a responsive grid (`grid-cols-2 sm:grid-cols-3`) as clickable blocks with large typography (`text-2xl md:text-3xl font-bold`)
- Inactive names are muted (`text-muted-foreground`), the active name is fully opaque (`text-foreground`) with a subtle underline or accent indicator
- Below the grid, render an expandable panel using `AnimatePresence` + `motion.div` that shows the selected client's description, service pills, "Concept Project" tag, and an external link with arrow icon
- Clicking a name smoothly transitions the panel content
- Hover effect: slight scale or opacity change on names

### Interaction
- Click a client name → panel expands/swaps with a fade + height animation
- Click the same name again → panel collapses
- External link inside the panel opens the site in a new tab

### Files
| File | Change |
|------|--------|
| `src/components/PortfolioSection.tsx` | Full rewrite to logo wall + expandable panel layout |

