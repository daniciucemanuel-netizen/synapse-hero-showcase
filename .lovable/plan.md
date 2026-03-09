

## Sharper Service Descriptions + AI Integration

Two surgical changes to `src/components/ServicesSection.tsx` — rewrite the data, nothing else.

### 1. More specific descriptions

Replace vague one-liners with descriptions that name concrete deliverables:

| Service | Current | Proposed |
|---------|---------|----------|
| Brand & Web | "Identity systems and production-ready websites..." | "Logo systems, brand guidelines, and conversion-optimized websites — from wireframe to deployed product." |
| Content & SEO | "Search-optimized content and a publishing engine..." | "Long-form articles, landing page copy, and AI-enhanced SEO audits that compound organic traffic month over month." |
| Social & Community | "Platform-native strategies that build audience..." | "Daily content calendars, community moderation, and platform-native campaigns across X, LinkedIn, and Discord." |
| Growth & Partnerships | "KOL campaigns, press, and go-to-market..." | "Influencer outreach, co-marketing partnerships, and launch playbooks that put your brand in front of the right people." |

### 2. Make tags more specific + weave in AI/AEO

Replace generic tags with deliverable-level specificity and surface AI where it's real:

| Service | Current Tags | Proposed Tags |
|---------|-------------|---------------|
| Brand & Web | Visual Identity, Product Design, Websites, Landing Pages | Logo & Guidelines, UI/UX Design, Websites, Landing Pages |
| Content & SEO | Content Strategy, Blog & Long-Form, SEO/AEO, Newsletter | Content Strategy, Blog & Long-Form, AI-Powered SEO, AEO Optimization |
| Social & Community | X Management, Community, Spaces & Events, Custom Graphics | X & LinkedIn, Community, Spaces & Events, AI Content Tools |
| Growth & Partnerships | KOL Campaigns, Partnerships, PR & Media, Launch Strategy | KOL Outreach, Co-Marketing, PR & Media, Launch Playbooks |

### File changed

`src/components/ServicesSection.tsx` — data array only (lines 4–33). No layout or styling changes.

