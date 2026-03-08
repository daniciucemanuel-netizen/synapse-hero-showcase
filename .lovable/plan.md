

## Make Hero Section Taller and More Commanding

### `src/components/HeroSection.tsx`

The hero needs to fill the viewport to feel premium. Current `pt-32 pb-20` makes it too short.

| Element | Current | New |
|---------|---------|-----|
| Section | No min-height | `min-h-screen` |
| Inner div padding | `pt-32 pb-20` | `pt-0 pb-0` (centered via flexbox) |
| Headline size | `text-5xl sm:text-6xl md:text-7xl lg:text-[72px]` | `text-5xl sm:text-6xl md:text-7xl lg:text-[80px]` |
| Subheadline margin | `mb-10` | `mb-12` |

Add `min-h-screen` to the section so the hero fills the entire viewport. The section already has `flex items-center justify-center`, so removing the manual padding and letting flexbox center the content vertically will produce a clean, full-screen hero. Bump the headline slightly larger at the top breakpoint.

