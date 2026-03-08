

## Make Theme-Aware + Premium Redesign

### Problem
Multiple sections use hardcoded light-mode colors (`bg-white`, `bg-[#FAFAF7]`, `hover:bg-[#F3F2ED]`, `text-[#1A4D2E]`) that break dark mode. The overall design also lacks the premium, polished feel expected.

### Approach

**1. Replace all hardcoded colors with theme-aware values**

Every component needs hardcoded colors swapped:

| Hardcoded | Light Mode | Dark Mode Equivalent |
|-----------|-----------|---------------------|
| `bg-white` | white | `bg-background` |
| `bg-[#FAFAF7]` | warm off-white | `bg-muted/30` or new CSS variable |
| `hover:bg-[#F3F2ED]` | warm hover | `hover:bg-muted/50` |
| `text-[#1A4D2E]` | sage green | Keep but add dark variant via CSS variable |
| `border-t-[#1A4D2E]` | sage green border | Same treatment |

**2. Add custom CSS variables for sage green accent**

In `src/index.css`, add a `--sage` variable that adapts:
- Light: `152 48% 21%` (the #1A4D2E)
- Dark: `152 40% 55%` (lighter sage for visibility on dark backgrounds)

Add a `--surface` variable for alternating section backgrounds:
- Light: `40 20% 97%` (warm off-white)
- Dark: `220 15% 7%` (slightly elevated dark)

**3. Files to edit**

| File | Changes |
|------|---------|
| `src/index.css` | Add `--sage` and `--surface` CSS variables for both light/dark |
| `src/components/ServicesSection.tsx` | `bg-white` → `bg-background`, hardcoded sage → `hsl(var(--sage))`, hover → `hover:bg-muted/50` |
| `src/components/ProcessSection.tsx` | `bg-[#FAFAF7]` → `bg-[hsl(var(--surface))]`, hardcoded sage → CSS var |
| `src/components/TechStackSection.tsx` | Already theme-aware, no changes needed |
| `src/components/PortfolioSection.tsx` | Already theme-aware, no changes needed |
| `src/components/ResultsSection.tsx` | Already theme-aware, minor polish |
| `src/components/TeamSection.tsx` | Already theme-aware, no changes needed |
| `src/components/Navbar.tsx` | Already theme-aware, no changes needed |
| `src/components/HeroSection.tsx` | Already theme-aware, no changes needed |
| `src/components/Footer.tsx` | Already theme-aware, no changes needed |
| `src/pages/Offer.tsx` | `bg-[#FAFAF7]` → surface var, all hardcoded sage → CSS var |

**4. Premium polish touches**

- Services cards: add subtle `border border-border` on each card for more structure
- Process section: refine spacing and add a faint top border on the section
- Results section: give the hero metric card a subtle gradient border in dark mode
- Offer page: same theme-aware treatment throughout

