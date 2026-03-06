

## Fix Team Section Alignment

The issue: the heading "The Team" is left-aligned within the full `max-w-7xl` container, but the team members grid is constrained to `max-w-2xl mx-auto` and centered. This creates a visual disconnect — the title sits far left while the avatars are centered in a narrower container.

### Fix in `src/components/TeamSection.tsx`

- Remove `max-w-2xl mx-auto` from the grid container so it uses the same full-width `max-w-7xl` parent as the heading
- Change `items-center sm:items-start` to `items-center` on each member card so avatars and names are consistently centered
- This aligns everything to the same content width and keeps the section visually balanced

