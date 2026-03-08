

## Premium Agency Redesign

This is a comprehensive visual and structural overhaul to elevate the site from "good template" to "$50k+ custom agency site." The hero copy stays untouched.

### Page Structure (reordered for conversion)

```text
Navbar (refined)
Hero (untouched copy, refined spacing)
→ Social Proof Bar (NEW — client logos / credibility strip)
→ Services (rewritten copy, refined layout)
→ Results (rewritten, tighter metrics)
→ Portfolio / Selected Work (refined cards)
→ Process (refined copy)
→ Contact CTA (elevated to full-bleed block)
→ Footer (refined)
```

### 1. Color System Refinement (`src/index.css`)

Shift the palette to feel more premium:
- **Light mode**: warm white background (`--background: 40 20% 99%`), deep charcoal foreground (`--foreground: 220 25% 8%`), refine `--sage` to a deeper, more sophisticated emerald (`152 45% 18%`)
- **Dark mode**: true black base (`0 0% 3%`), slightly warmer muted tones
- Remove the blue primary / purple accent gradient system. Replace with sage as the single accent color throughout. This eliminates the "AI startup" feel.
- `--surface` stays as a subtle alternate background for section rhythm

### 2. Navbar (`src/components/Navbar.tsx`)

- Increase height to `h-18` (72px) for more breathing room
- Make "Get Started" button use sage bg with white text instead of outline (stronger CTA)
- Remove border-bottom, use only subtle backdrop blur separation

### 3. Hero Section (`src/components/HeroSection.tsx`)

**Copy stays exactly the same.** Refinements:
- Add more top padding to account for taller nav
- Increase bottom margin before next section
- Make the CTA buttons slightly larger with more padding

### 4. NEW: Social Proof Bar (`src/components/SocialProofBar.tsx`)

A simple horizontal strip below the hero:
- Text: "Trusted by teams building the future" or similar
- Display 4-5 client names in a clean row (LoadBetter, Vino si Vezi, Sovereign Motors, etc.) styled as muted text logos (just their names in Space Grotesk, spaced out)
- Subtle top/bottom border, minimal padding
- This is the #1 missing trust signal

### 5. Services Section (`src/components/ServicesSection.tsx`)

Rewrite copy to be more premium and outcome-focused:
- Section heading: "Capabilities" instead of "What We Do" / "Four services. One team. No gaps."
- New heading: "End-to-end growth. No gaps."
- Rewrite each service description to focus on outcomes, not deliverables
- Keep the 4-column grid and sage top-border. Refine tags to fewer, higher-impact terms
- Add a brief line under the section heading: "From brand to pipeline, we own the full funnel."

### 6. Results Section (`src/components/ResultsSection.tsx`)

- Section label: "Impact" instead of "Results"
- Heading: "The numbers speak." (shorter, more confident)
- Tighten metric descriptions to be punchier (e.g., "Average organic traffic growth in 6 months" → "Organic traffic growth, 6 months")
- Keep the grid layout but increase the metric font size slightly

### 7. Portfolio Section (`src/components/PortfolioSection.tsx`)

- Heading: "Selected Work" (keep) with subtext: "A selection of recent projects across brand, web, and growth."
- Refine card hover: instead of scale transform (feels cheap), use a subtle background shift and border color change
- Remove `hover:scale-[1.01]`

### 8. Process Section (`src/components/ProcessSection.tsx`)

- Rewrite heading: "From audit to scale in eight weeks."
- Keep the sticky left / scrolling right layout (this is already premium)
- Tighten descriptions to be more concise (2 lines max each)

### 9. Contact CTA (`src/components/ContactSection.tsx`)

Elevate to a full-width, high-impact CTA block:
- Dark background (foreground color) with light text — creates visual contrast break
- Larger heading: "Ready to accelerate?"
- Subtext: "Tell us what you're building. We'll respond within 24 hours."
- Larger CTA button with sage accent
- This becomes the most visually distinct section on the page

### 10. Footer (`src/components/Footer.tsx`)

- Add a minimal top section with The Growth Desk name, a one-line tagline, and nav links
- Keep social icons and copyright below
- More generous padding

### 11. Typography & Spacing

- Increase section padding from `py-28` to `py-32` across all sections for more breathing room
- Ensure consistent use of Space Grotesk for headings, Inter for body
- Remove inline `fontFamily` styles on Playfair Display and Syne — standardize on Space Grotesk + Inter only (too many fonts feels unfocused)

### Files Modified

| File | Change |
|------|--------|
| `src/index.css` | Refine color variables, remove gradient utilities |
| `src/pages/Index.tsx` | Add SocialProofBar after Hero |
| `src/components/Navbar.tsx` | Taller, stronger CTA, no bottom border |
| `src/components/HeroSection.tsx` | Spacing only, no copy changes |
| `src/components/SocialProofBar.tsx` | **NEW** — client name trust strip |
| `src/components/ServicesSection.tsx` | Rewritten copy, refined heading |
| `src/components/ResultsSection.tsx` | Rewritten copy, punchier metrics |
| `src/components/PortfolioSection.tsx` | Remove scale hover, add subtext |
| `src/components/ProcessSection.tsx` | Tighter copy, standardized fonts |
| `src/components/ContactSection.tsx` | Full-bleed dark CTA block |
| `src/components/Footer.tsx` | Expanded with tagline and nav |

