

## Redesign "What We Do" Section

Complete rewrite of `src/components/ServicesSection.tsx` with the specified design.

### Changes

**Data**: Replace 3 services with 4, each containing `num`, `title`, `description`, and `tags` array.

**Layout**:
- White background, section label "WHAT WE DO" in monospace uppercase with `#1A4D2E` color
- Heading: "Full-stack growth. Every channel covered."
- 4-column grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`) with thick top border (`border-t-2 border-[#1A4D2E]`) on each card and thin vertical borders between cards (`border-r border-border`)
- Each card: number (mono), title, description, then deliverable tags as small muted pills
- Hover: `hover:bg-[#F3F2ED]` transition
- Tight padding throughout

### Files
| File | Change |
|------|--------|
| `src/components/ServicesSection.tsx` | Full rewrite with new 4-card layout, data, and styling |

