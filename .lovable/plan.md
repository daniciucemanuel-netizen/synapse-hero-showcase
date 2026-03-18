

## Problem

The static HTML fallback inside `<div id="root">` is visible for a brief moment before React mounts and replaces it. This creates an ugly "flash of unstyled content" (FOUC) that looks unprofessional.

## Solution

Hide the static fallback visually from regular users while keeping it accessible to crawlers (which don't execute JS). Two changes:

### 1. Hide the fallback by default (`index.html`)
Add a `style="display:none"` to the static fallback `<div>` (the one inside `#root` at line 150). Then add a `<noscript>` block in `<head>` that overrides this to `display:block` -- so crawlers and no-JS users still see the content.

Replace the current approach:
- Line 150: Add `id="static-fallback"` and `style="display:none"` to the fallback wrapper div
- In `<head>`, add: `<noscript><style>#static-fallback{display:block!important}</style></noscript>`

### 2. Remove the existing `<noscript>` block (line ~236)
The existing `<noscript>` message at the bottom of `<body>` becomes redundant since the fallback itself now serves as the no-JS experience.

This way:
- **Regular users**: See nothing until React renders the polished UI (no flash)
- **Crawlers/no-JS**: See the full static HTML fallback for indexing
- **SEO impact**: Zero -- Googlebot renders JS anyway, and the fallback is still in the DOM for non-JS crawlers

