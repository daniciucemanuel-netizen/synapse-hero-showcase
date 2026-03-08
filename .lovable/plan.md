

## Hero Headline Change

### `src/components/HeroSection.tsx`

Replace the two-line headline with a single line where "grow" is colored sage:

**Current:**
```
We build brands that grow.
Then we grow them.
```

**New:**
```
We build brands that <sage>grow.</sage>
```

Lines 30-32 change to a single line with "grow." wrapped in a sage-colored span. Remove the `<br />` and the second line entirely.

