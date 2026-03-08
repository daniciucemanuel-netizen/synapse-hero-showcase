

## Premium Refinement Pass

A systematic elevation of spacing, hierarchy, composition, and visual rhythm across every section. No structural changes — pure design refinement.

### 1. Hero Section (`src/components/HeroSection.tsx`)

- Increase `mb-6` after H1 to `mb-8` for more breathing room before subtext
- Increase `mb-14` after subtext to `mb-16`
- Make CTA buttons use `rounded-full` instead of `rounded-lg` for a more premium, intentional feel
- Increase primary CTA padding: `px-10 py-4`
- Add `tracking-[-0.02em]` to subtext for tighter, more refined body copy

### 2. Social Proof Bar (`src/components/SocialProofBar.tsx`)

- Increase vertical padding from `py-12` to `py-16`
- Add thin separator dots or dashes between client names instead of just gap spacing (use a `·` character between names)
- Increase client name size to `text-base md:text-lg` and reduce opacity further to `/40` so they feel like watermarks, not content
- Remove the "Trusted by" text — premium agencies don't explain, they imply. Just show the names.

### 3. Services Section (`src/components/ServicesSection.tsx`)

- Increase `mb-16` header margin to `mb-20` for more separation
- Remove `border border-border` from cards (keep only the sage top border) — the full border makes it feel like a template grid
- Increase card padding from `p-6 pt-8` to `p-8 pt-10`
- Increase `mb-5` on tags to `mb-6`
- Add `min-h-[280px]` to cards for consistent height and more visual weight

### 4. Results Section (`src/components/ResultsSection.tsx`)

- Move to `bg-[hsl(var(--surface))]` background to create alternating rhythm with services
- Increase cell padding from `p-8 md:p-10` to `p-10 md:p-14`
- Make metric values larger: `text-5xl sm:text-6xl md:text-7xl`
- Increase `mb-3` gap to `mb-4` between value and label
- Remove hover effect on metric cells — metrics shouldn't feel interactive

### 5. Portfolio Section (`src/components/PortfolioSection.tsx`)

- Change to `bg-background` (keep) but increase `mb-12` header to `mb-16`
- Increase card padding from `p-6` to `p-8`
- Increase gap between cards from `gap-4` to `gap-5`
- Make client name `text-xl` instead of `text-2xl` — slightly smaller feels more refined
- Increase `mb-4` before tags to `mb-6`
- Style "View all work" link with an underline-on-hover effect instead of just color change

### 6. Process Section (`src/components/ProcessSection.tsx`)

- Increase step padding from `py-8` to `py-10` for more vertical breathing room
- Make step numbers larger: `text-sm` instead of `text-xs`
- Increase description left padding from `pl-8` to `pl-10` to better align with title
- Add a subtle `p-1` top margin to the description for more air between title and body

### 7. Contact CTA (`src/components/ContactSection.tsx`)

- Increase padding from `py-32` to `py-40` — this is the most important section, it needs gravity
- Make the heading `lg:text-6xl` — bigger, bolder
- Increase `mb-10` to `mb-12`
- Make CTA button `rounded-full` to match hero buttons
- Add a second line of micro-copy below the button: "No commitment. No pitch deck required." in small muted text

### 8. Footer (`src/components/Footer.tsx`)

- Increase padding from `py-16` to `py-20`
- Reduce social icon size from `18` to `16` for subtlety
- Add more vertical gap between top and bottom rows

### 9. Global CSS (`src/index.css`)

- Add smooth scroll behavior: `html { scroll-behavior: smooth; }`
- Slightly refine `--muted-foreground` in light mode to `220 10% 50%` (a touch lighter for more contrast with foreground)

### 10. Navbar (`src/components/Navbar.tsx`)

- Make nav links use `text-[13px]` and `tracking-wide` for more refinement
- Add `uppercase` to nav links for editorial consistency
- Make "Get Started" button `rounded-full` to match other CTAs

### Summary

Every change is a spacing/typography/composition refinement — no new features, no structural changes. The goal is to take what exists and add 20% more intentional whitespace, 10% larger key typography, and remove any template-like borders or hover effects that cheapen the design.

