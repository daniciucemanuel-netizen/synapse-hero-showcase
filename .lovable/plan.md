

## Add Meridian Freight as a Concept Project

### Change

**`src/components/PortfolioSection.tsx`**:

1. Add an optional `tag` field to the client data. The new entry:
   ```
   { name: "Meridian Freight", url: "https://meridian-freight-smart.lovable.app", description: "Full concept build — branding, logo design, and website, all created from scratch.", tag: "Concept Project" }
   ```

2. Render the tag as a small pill/badge next to the client name (inside the header flex row). Style: `text-[10px] uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2 py-0.5`.

3. Grid now has 4 cards — the layout (`lg:grid-cols-3`) stays, so row 1 gets 3 cards and row 2 gets 1 card, or switch to `lg:grid-cols-2` for a 2x2 layout. A 2x2 grid will look more balanced with 4 items.

### Files
| File | Change |
|------|--------|
| `src/components/PortfolioSection.tsx` | Add 4th client with `tag`, render tag pill, switch to 2-col grid on lg |

