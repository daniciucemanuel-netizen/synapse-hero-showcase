

## Add Light Mode + Dark/Light Toggle

### Overview
Define light-mode CSS variables, integrate `next-themes` for theme switching, and add a toggle button to the navbar.

### Changes

**1. `src/index.css`** — Add light-mode variable values under `:root` (which becomes the light theme). Move current dark values to `.dark` class only. Light values: white background, dark text, light gray cards/borders, same primary/accent hues but adjusted for light backgrounds.

**2. `src/App.tsx`** — Wrap the app in `ThemeProvider` from `next-themes` with `attribute="class"`, `defaultTheme="dark"`, `enableSystem={false}`.

**3. `src/components/Navbar.tsx`** — Add a Sun/Moon icon toggle button using `useTheme()` from `next-themes`. Clicking switches between `"dark"` and `"light"`.

**4. `src/components/HeroSection.tsx`** — The CTA buttons use `bg-foreground text-background` which will invert correctly. The gradient-text utility should work in both modes. No changes needed.

**5. `src/index.css` light variable values:**
- `--background: 0 0% 100%` (white)
- `--foreground: 220 20% 10%` (near-black)
- `--card: 220 10% 96%` (light gray)
- `--border: 220 10% 90%`
- `--muted: 220 10% 94%`
- `--muted-foreground: 220 10% 40%`
- `--secondary: 220 10% 94%`
- Primary and accent hues stay the same

### Files
| File | Change |
|------|--------|
| `src/index.css` | Split `:root` into light values, keep `.dark` with current dark values |
| `src/App.tsx` | Add `ThemeProvider` wrapper |
| `src/components/Navbar.tsx` | Add Sun/Moon toggle button |

