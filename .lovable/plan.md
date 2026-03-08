

## Split Portfolio: 6 Featured on Homepage + Full "/work" Page

### 1. Extract shared client data (`src/data/clients.ts`)

Move the entire `clients` array into a shared file so both the homepage and the /work page can import from it. Add a `featured: boolean` field to each client.

Featured (homepage): LoadBetter, Vino si Vezi, Sovereign Motors, Ember & Oak, Atheneum Medical, Maison Claret.

### 2. Redesign homepage portfolio (`src/components/PortfolioSection.tsx`)

Instead of the current stacked list (which works for 11 items but feels underwhelming for 6), switch to a **2-column grid of cards** with more visual presence:

- Each card: client name, short description (2 lines max), service tags, and a hover effect that reveals an arrow link.
- Cards use `bg-muted/30` with `rounded-xl`, `p-6`, border on hover transitioning to sage color.
- Below the grid, a "View all work" link routes to `/work`.
- Filter: `clients.filter(c => c.featured)`.

This gives the 6 selected clients more spotlight compared to a compressed list.

### 3. Create `/work` page (`src/pages/Work.tsx`)

Full page with Navbar + Footer. Displays **all 11 clients** using the existing stacked-list expandable layout (move that rendering logic into a reusable component or just duplicate it on this page). Section header: "All Work".

### 4. Add route (`src/App.tsx`)

Add `<Route path="/work" element={<Work />} />`.

### 5. Update Navbar (`src/components/Navbar.tsx`)

Change the "Work" nav link from `#work` to use both: on homepage it scrolls to the section, on /work page it navigates. Simplest approach: keep `#work` for homepage anchor and add the "/work" route as the "View all work" CTA within the portfolio section.

### Spotlight approach for the 6 homepage clients

The 2-column card grid gives each client its own visual block rather than a compressed list row. Each card will have:
- Larger typography for the name (`text-2xl`)
- Service pills visible by default (not hidden behind a click)
- Description always visible (no expand needed)
- Subtle hover animation (scale + border color shift)
- The "Concept" tag displayed as a small badge

This makes the homepage feel curated and premium, while the /work page serves as the comprehensive portfolio.

