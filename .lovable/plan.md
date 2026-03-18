

## Problem

Google's live test shows a blank page because **every piece of content** on the site starts with `opacity: 0` via Framer Motion's `initial="hidden"` or `initial={{ opacity: 0 }}`. Googlebot executes JavaScript but uses a headless Chrome environment where Framer Motion animations may not trigger reliably -- so all content stays invisible at `opacity: 0`.

This affects **all 10+ components** across the site (HeroSection, ServicesSection, ResultsSection, FAQSection, ContactSection, etc.).

The static HTML fallback we added is correctly hidden with `display:none` (for FOUC prevention), so Google can't see that either. The result: Google sees a rendered page with zero visible content.

## Solution

Add a small CSS block in `index.html` that forces all Framer Motion elements to be visible when Googlebot (or any bot) renders the page. This is the least invasive approach -- no changes to any React components.

### Implementation

**1. Add a `<style>` block in `index.html` `<head>`** that targets the `[style*="opacity"]` pattern Framer Motion uses, but only after a brief delay (to let animations run for real users):

```css
<style>
  /* Ensure content is visible for search engine renderers that may not 
     trigger Framer Motion animations. Real users see animations normally 
     because the timeout fires after animations complete. */
  @media (prefers-reduced-motion: reduce) {
    [style*="opacity: 0"] { opacity: 1 !important; }
    [style*="transform"] { transform: none !important; }
  }
</style>
```

Actually, a better and more reliable approach: **Add a small inline script** that sets a class on `<html>` after a short delay, then use CSS to force visibility only if that class is NOT present (meaning animations didn't fire):

**Simplest reliable approach -- add a `<noscript>` style AND a bot-detection script:**

In `index.html` `<head>`, add:
```html
<script>
  // After 2s, ensure all content is visible (covers bots that execute JS 
  // but don't trigger IntersectionObserver/animation APIs properly)
  setTimeout(function() {
    var s = document.createElement('style');
    s.textContent = '[style*="opacity: 0"]{opacity:1!important;transform:none!important}';
    document.head.appendChild(s);
  }, 2000);
</script>
```

This ensures:
- **Real users**: See normal animations (they complete well within 2 seconds)
- **Googlebot**: After 2s, any still-hidden content becomes forced visible
- **No component changes needed**: Zero changes to any React file

### Files to modify
- `index.html` -- add the inline script in `<head>` (1 small addition)

