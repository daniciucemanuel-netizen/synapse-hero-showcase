

## Spacing & Rhythm Refinement

Audit of current section padding reveals an inconsistent rhythm. The goal is to establish a deliberate vertical cadence and tighten internal element spacing for a calmer, more editorial flow.

### Current Section Padding Map

| Section | Current | Issue |
|---------|---------|-------|
| Hero | `min-h-screen` | Fine |
| Social Proof | `py-16` | Too tight relative to neighbors |
| Services | `py-32` | OK |
| Results | `py-32` | OK but header `mb-16` feels tight |
| Portfolio | `py-32` | OK but header `mb-16` vs Services `mb-20` — inconsistent |
| Process | `py-32` | OK |
| Contact | `py-40` | Good — should stay distinct |
| Footer | `py-20` | Slightly tight |

### Changes

**1. Establish consistent section header spacing**

Standardize all section headers to `mb-20` (currently Results has `mb-16`, Portfolio has `mb-16`). This creates uniform breathing room between every section title block and its content grid.

- `ResultsSection.tsx`: `mb-16` → `mb-20`
- `PortfolioSection.tsx`: `mb-16` → `mb-20`

**2. Social Proof Bar — more breathing room**

- `py-16` → `py-20` — the social proof strip currently feels squeezed between the hero and services. More vertical padding gives it presence without adding content.

**3. Results Section — increase section padding**

- `py-32` → `py-36` — the metrics grid is visually dense (6 cells), so it benefits from slightly more outer padding to avoid feeling cramped against neighbors.

**4. Portfolio Section — increase section padding**

- `py-32` → `py-36` — mirrors Results for balance. Both content-heavy sections get the extra room.
- `mt-12` on "View all work" → `mt-16` for more separation from the card grid.

**5. Process Section — increase outer padding and column gap**

- `py-32` → `py-36` for consistency with other content sections
- `gap-12 lg:gap-16` → `gap-16 lg:gap-20` — the sticky left heading needs more separation from the right column
- Step `py-10` → `py-12` for more vertical rhythm between steps

**6. Contact Section — refine inner spacing**

- `mb-5` on heading → `mb-8` — more air between the heading and body text
- `mb-12` on body → `mb-14` — more air before the CTA button

**7. Footer — more generous padding**

- `py-20` → `py-24`
- `gap-14` → `gap-16` between top and bottom rows

**8. Services Section — card gap for grid clarity**

- Add `gap-px bg-border` to the services grid (same technique as Results) to create subtle visual dividers between the 4 columns. This gives the grid structure without adding heavy borders.
- Alternatively: add `gap-6` between cards for clear separation. The `gap-px bg-border` approach is more editorial.

**9. Hero — bottom margin before social proof**

- Add `pb-8` to the hero section wrapper so the content doesn't butt directly against the social proof bar's border.

### Files Modified

| File | Changes |
|------|---------|
| `HeroSection.tsx` | Add bottom padding |
| `SocialProofBar.tsx` | `py-16` → `py-20` |
| `ServicesSection.tsx` | Add gap between cards |
| `ResultsSection.tsx` | `py-32` → `py-36`, header `mb-16` → `mb-20` |
| `PortfolioSection.tsx` | `py-32` → `py-36`, header `mb-16` → `mb-20`, link `mt-12` → `mt-16` |
| `ProcessSection.tsx` | `py-32` → `py-36`, wider column gap, step `py-10` → `py-12` |
| `ContactSection.tsx` | Heading `mb-5` → `mb-8`, body `mb-12` → `mb-14` |
| `Footer.tsx` | `py-20` → `py-24`, `gap-14` → `gap-16` |

