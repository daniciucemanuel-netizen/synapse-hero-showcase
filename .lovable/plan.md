

## Update Hero H1 Text

### `src/components/HeroSection.tsx` (line 28-31)

Change the H1 from the current single-line text to a two-line heading:

```
Your growth engine.
AI-Powered.
```

The second line ("AI-Powered.") will be wrapped in a `<span>` with the sage color class (`text-[hsl(var(--sage))]`), replacing the current "grow." highlight. Use a `<br />` or block-level span to force the line break.

