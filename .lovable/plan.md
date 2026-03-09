

## Feedback-Driven Refinement — 4 Issues

Addressing each piece of feedback individually.

---

### 1. Limited Visual Differentiation — Add Icons to Services & Process

The site is text-heavy with no visual anchors. Add Lucide icons to the Services cards and Process steps to create visual landmarks and improve scannability.

**`src/components/ServicesSection.tsx`**
- Add an icon to each service object (`Palette`, `FileText`, `Users`, `Rocket`)
- Render the icon above the service number at `24px`, colored with `--sage`
- This breaks the wall-of-text pattern and adds brand texture without illustrations

**`src/components/ProcessSection.tsx`**
- Add an icon to each step (`Search`, `Map`, `Zap`, `TrendingUp`)
- Render inline next to the step number
- Subtle, same `--sage` color, `18px`

**`src/components/ResultsSection.tsx`**
- Add a thin decorative line or dash above each metric value (a `w-8 h-px bg-[hsl(var(--sage)/0.3)]` element) to give visual structure to the grid cells beyond just numbers

---

### 2. No Animated Elements — Add Micro-Interactions

Currently using `framer-motion` for scroll reveals only. Add subtle interactive animations:

**`src/components/ServicesSection.tsx`**
- Add `whileHover={{ y: -4 }}` to service cards for a gentle lift effect
- Add `transition={{ type: "spring", stiffness: 300 }}` for organic feel

**`src/components/Navbar.tsx`**
- Add a subtle bottom border that fades in on scroll using a `useEffect` + scroll listener that adds `border-b border-border/50` after scrolling past 100px

**`src/components/SocialProofBar.tsx`**
- Stagger the client names with individual `motion.span` wrappers and `delay: i * 0.1` for a sequential fade-in

**`src/components/ResultsSection.tsx`**
- Add a counter animation to metric values: animate numbers counting up from 0 when they enter the viewport using a simple `useEffect` + `requestAnimationFrame` approach

---

### 3. Color Accessibility — Fix Sage Contrast

The sage green (`152 45% 18%` in light mode, `152 40% 55%` in dark mode) is used as text on both light and dark backgrounds. Need to verify and fix contrast ratios.

**`src/index.css`**
- Light mode `--sage`: `152 45% 18%` on white (`99%` lightness) — this is ~3.2:1 contrast. Needs to be darker. Change to `152 50% 14%` to hit WCAG AA (4.5:1+)
- Dark mode `--sage`: `152 40% 55%` on black (`3%` lightness) — this is ~5.5:1, passes AA. Keep as-is.
- Dark mode sage on `bg-foreground` (Contact section): sage text on `40 10% 95%` bg — `152 40% 55%` gives ~3.1:1. Change the Contact section label to use a darker sage variant or use the light-mode sage value. Fix by making the Contact section sage label use `text-[hsl(152,50%,30%)]` explicitly since it's always on a light bg in that context.

Actually, the Contact section uses `bg-foreground` which flips: in light mode it's dark bg (sage is fine), in dark mode it's light bg. The simplest fix:
- In `ContactSection.tsx`, change the sage label to `text-emerald-400 dark:text-emerald-700` to ensure contrast in both modes on the inverted background.

---

### 4. CTA Button Inconsistency — Differentiate CTAs

Currently there are 3 "Get Started" touchpoints:
1. **Navbar**: sage bg, small — navigation utility CTA
2. **Hero**: dark bg, large — primary conversion CTA  
3. **Contact section label**: just a section label, not a button

The problem: Navbar and Hero both say "Get Started" but serve different purposes.

**`src/components/Navbar.tsx`**
- Change CTA text from "Get Started" to "Book a Call" — differentiates from the hero CTA and implies a more specific action

**`src/components/ContactSection.tsx`**
- Change section label from "Get Started" to "Let's Talk" — differentiates from the nav CTA
- Change heading CTA button text to "Start a Conversation" with the email link

**`src/components/HeroSection.tsx`**
- Keep "Get Started" as the primary CTA — it's the first thing users see and should be the broadest call to action

This creates a CTA journey: **Get Started** (awareness) → **Book a Call** (intent) → **Start a Conversation** (action)

---

### Files Modified

| File | Changes |
|------|--------|
| `src/index.css` | Darken light-mode `--sage` for AA contrast |
| `src/components/ServicesSection.tsx` | Add icons, hover lift animation |
| `src/components/ProcessSection.tsx` | Add icons to steps |
| `src/components/ResultsSection.tsx` | Add decorative lines, counter animation |
| `src/components/SocialProofBar.tsx` | Staggered fade-in for client names |
| `src/components/Navbar.tsx` | Scroll border effect, CTA text → "Book a Call" |
| `src/components/ContactSection.tsx` | Fix sage contrast, CTA text differentiation |

