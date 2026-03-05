

## AI Marketing Agency Landing Page

### Hero Section
- **Navbar**: Fixed, glass-blur effect on black background. "Synapse" logo, nav links (Features, Insights, About, Case Studies with strikethrough, Contact), and "Get Started for Free" gradient CTA button
- **Background Video**: Mux HLS stream via hls.js, positioned absolute at bottom, 80vh height, looping/muted/autoplay, no overlay
- **Hero Content**: Centered with staggered fade-in animations using Framer Motion
  - Row of 3 glass-effect "Integrated with" badges
  - Large headline "Where Innovation Meets Execution" (~80px)
  - 2-line subtext about testing and deployment
  - Two CTAs: "Get Started for Free" (black bg, white border) and "Let's Get Connected" (glass style)
- **Logo Marquee**: Grayscale placeholder logos at 40% opacity

### Services Section (Bento Grid)
- "What We Do" heading
- 3-column grid with hover-lift cards: AI Web Development, SEO & Growth, Content & Social Media
- Each with Lucide icon, title, and description
- Dark navy/charcoal cards with accent highlights

### Portfolio Section
- "Recent Projects" heading
- 3 project cards (Surflux, LoadBetter, Vinosivezi) with image placeholders, titles, tags, and "Read Case Study" links with arrow icons

### Team Section
- "The Team Behind the Tech" heading
- Brief paragraph about the agile trio
- 3 profile cards with circular avatar placeholders, names, and roles

### Footer
- Agency name, 2026 copyright, social media icons (LinkedIn, X, Instagram), "Contact Us" email link

### Design System
- **Background**: Solid black (#000000) hero transitioning to dark charcoal for lower sections
- **Accent**: Electric blue/neon purple for buttons and highlights
- **Typography**: White text, tight tracking, large display fonts
- **Animations**: Framer Motion staggered fade-in-up on load, smooth scroll animations for sections, subtle hover effects throughout
- **Responsive**: Fully mobile-optimized layout

### Dependencies to Add
- `framer-motion` for animations
- `hls.js` for video streaming

