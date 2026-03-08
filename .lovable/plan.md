

## Redesign Portfolio "Selected Clients" Section — Ultra Premium

### Problem
The current grid of bordered boxes with client names looks generic and flat. The cards are too uniform, boxy, and lack visual weight or editorial sophistication.

### New Design: Full-Width Stacked List

Replace the card grid with a **full-width horizontal list layout** — each client is a row spanning the full container width, separated by thin hairline borders. This is the approach used by elite agencies (Pentagram, Instrument, ueno).

**Layout per row:**
- Left: Large client name in Space Grotesk (~`text-4xl md:text-6xl`), bold
- Right: Small service tags + arrow icon
- Concept projects get a subtle "Concept" label next to the name
- On hover: row shifts slightly right (`translateX(8px)`), name color transitions to sage green, arrow animates
- On click: expandable detail panel slides down (keep existing AnimatePresence logic)

**Visual treatment:**
- No borders on rows — just `border-b border-border` hairlines between entries
- No background color on rows — transparent, letting the section bg breathe
- Generous vertical padding per row (`py-8 md:py-10`)
- Section header gets the sage "Selected Work" mono label like other sections
- The expanded panel uses a subtle `bg-muted/30` backdrop with the description, tags, and link

### File
| File | Change |
|------|--------|
| `src/components/PortfolioSection.tsx` | Full rewrite — stacked list layout, hover animations, premium typography |

