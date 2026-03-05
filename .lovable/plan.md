

## Hero Section: Keep H1, Update Everything Else

The H1 ("Your Growth Engine. AI-Powered.") stays as-is. Changes below:

### Typography adjustments
- Reduce H1 size slightly: `lg:text-[72px]` instead of `80px`, loosen leading to `leading-[1.05]`
- Add `gradient-text` to "AI-Powered" for visual punch

### Subtitle rewrite
Current: "We're a lean team of three who build brands, rank pages, and scale businesses. Combining human creativity with machine precision to compound your growth."

New: "We combine AI tools with sharp creative to build brands, rank pages, and drive revenue."

Single line, outcome-focused, no self-referential team size mention.

### CTA changes
- Primary: "Book a Free Strategy Call" → "Book a Call" (shorter, cleaner)
- Secondary: "See Our Work" stays

### Add kicker pill
Small badge/pill above the H1: "AI-Powered Growth" using a subtle bordered pill style, animated in before the headline.

### File
| File | Change |
|------|--------|
| `src/components/HeroSection.tsx` | Update subtitle copy, shorten CTA, add gradient to "AI-Powered", add kicker pill, adjust font size/leading |

