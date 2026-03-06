

## Make the Selected Clients Section More Premium

### Design Direction
The current cards are functional but flat — uniform boxes with text only. A premium feel comes from **visual hierarchy, subtle depth, and intentional spacing**. Here's the approach:

### Changes to `src/components/PortfolioSection.tsx`

1. **Add a numbered index** per card (like the Services section uses `01`, `02`, etc.) — displayed as a faint mono label in the top-left, creating a sense of curation and editorial quality.

2. **Add scope/service tags** — Each client gets a `services` array (e.g., `["Branding", "Web", "SEO"]`) rendered as small muted pills below the description, giving each card more visual texture and information density.

3. **Larger featured card** — Make the first card span 2 columns on `sm:grid-cols-2` layout (`col-span-2`), giving it prominence. The remaining 4 cards fill a natural 2x2 below it.

4. **Subtle hover lift** — Add `hover:-translate-y-0.5 hover:shadow-lg` with `transition-all duration-300` for a tactile, premium interaction instead of just border color change.

5. **Refined typography hierarchy** — Increase client name to `text-xl font-bold`, add a thin divider line (`border-t border-border mt-auto pt-4`) separating the URL from the content above.

6. **Section subtitle** — Add a muted subtitle below "Selected Clients" like `"A selection of brands we've helped build and grow."` for editorial polish, matching the pattern used in Services and Results sections.

### Updated client data structure
```ts
{
  name: "Surflux",
  url: "https://surflux.dev",
  description: "...",
  services: ["Branding", "Web Development", "Social Media", "GTM Strategy"],
}
```

### Layout
```text
┌─────────────────────────────────────┐
│  01  Surflux         (full width)   │
│  Branding · Web · Social · GTM      │
│  surflux.dev                    ↗   │
├──────────────────┬──────────────────┤
│  02  LoadBetter  │  03  Vino si Vezi│
├──────────────────┼──────────────────┤
│  04  Meridian    │  05  Blanc Smile │
│  CONCEPT PROJECT │  CONCEPT PROJECT │
└──────────────────┴──────────────────┘
```

### Files
| File | Change |
|------|--------|
| `src/components/PortfolioSection.tsx` | Add numbering, service tags, featured first card, hover lift, divider line, subtitle, updated data |

