

# Add Logo & Favicon to The Growth Desk

## What we'll do

1. **Copy assets into the project**
   - `Growth_Desk_Logo.png` → `src/assets/Growth_Desk_Logo.png` (for React components)
   - `Growth_Desk_Icon.png` → `public/favicon.png` (for browser tab)

2. **Favicon** — Update `index.html` to reference `/favicon.png` as the site icon.

3. **Navbar** — Replace the text "The Growth Desk" with the logo image (`~32px` height), wrapped in a clickable link to `/` (home). Use `react-router-dom`'s `Link` component for client-side navigation.

4. **Footer** — Replace the text "The Growth Desk" with the logo image (same asset, slightly larger or same size).

## Files changed

| File | Change |
|------|--------|
| `index.html` | Add `<link rel="icon" href="/favicon.png">` |
| `src/components/Navbar.tsx` | Import logo, replace text with `<Link to="/"><img></Link>` |
| `src/components/Footer.tsx` | Import logo, replace text with logo image |

