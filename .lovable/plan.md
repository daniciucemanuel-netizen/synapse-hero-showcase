

## Fix Light Mode Appearance

The screenshot shows several issues in light mode:

1. **Hero video clash** — The dark cinematic video creates a harsh, jarring cutoff against the white background. Need to add a gradient overlay that fades the video into the background color so it blends in both themes.

2. **Glass utility classes** — `.glass` and `.glass-strong` use `bg-white/5` and `bg-white/10` which are invisible on white backgrounds. Need theme-aware versions (use `bg-black/5` in light mode).

3. **Results section** — The `bg-white/[0.02]` on the 12x metric card is invisible on white. Remove or make theme-aware.

4. **Subtitle readability** — The `text-muted-foreground` subtitle in the hero is too faint against the video area. Needs better contrast in light mode.

### Changes

| File | Change |
|------|--------|
| `src/components/HeroSection.tsx` | Add a gradient overlay div above the video that fades from `bg-background` to transparent, softening the video edge in both modes |
| `src/index.css` | Update `.glass` and `.glass-strong` to use `dark:bg-white/5 bg-black/5` and `dark:border-white/10 border-black/10`. Remove or fix `bg-white/[0.02]` pattern. |
| `src/components/ResultsSection.tsx` | Replace `bg-white/[0.02]` with a theme-safe class like `bg-muted/50` |

