import { motion } from "framer-motion";

const COMPANY = "[Company Name]";
const DATE = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const deliverables = [
  "Brand & Visual Identity Refresh",
  "Website Design & Development",
  "SEO/AEO Audit & Implementation",
  "Content Strategy & Calendar",
  "Social Media Management (X, LinkedIn)",
  "Community Building & Engagement",
  "Newsletter Setup & Distribution",
  "KOL & Partnership Outreach",
];

const timeline = [
  { phase: "Phase 1", period: "Days 1–14", title: "Foundation", items: ["Brand audit & positioning", "Website wireframes & design", "SEO technical audit", "Content strategy development"] },
  { phase: "Phase 2", period: "Days 15–45", title: "Build & Launch", items: ["Website development & deployment", "Content production begins", "Social channels activated", "Newsletter launch"] },
  { phase: "Phase 3", period: "Days 46–90", title: "Scale & Optimize", items: ["Performance analytics review", "Content engine at full cadence", "Community growth campaigns", "Partnership activations"] },
];

const whatYouGet = [
  { item: "Custom Website", qty: "1 site" },
  { item: "Blog Articles", qty: "8 / month" },
  { item: "Social Posts", qty: "20 / month" },
  { item: "Newsletter Editions", qty: "4 / month" },
  { item: "SEO Reports", qty: "Monthly" },
  { item: "Community Management", qty: "Daily" },
  { item: "Strategy Calls", qty: "Bi-weekly" },
  { item: "Performance Dashboard", qty: "Real-time" },
];

const pricing = [
  { service: "Brand & Web Development", price: "$X,XXX" },
  { service: "Content & Distribution", price: "$X,XXX / mo" },
  { service: "Social & Community Management", price: "$X,XXX / mo" },
  { service: "Growth & Partnerships", price: "$X,XXX / mo" },
];

const Offer = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--surface))]">
      {/* Header */}
      <header className="max-w-4xl mx-auto px-6 py-8 flex items-center justify-between border-b border-border">
        <span className="font-semibold text-foreground tracking-tight text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          The Growth Desk
        </span>
        <div className="flex items-center gap-6 text-xs text-muted-foreground font-mono tracking-wide">
          <span>Prepared for {COMPANY}</span>
          <span>{DATE}</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-24">
        {/* 1. Hero */}
        <motion.section {...fade()}>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[hsl(var(--sage))] mb-4 block">
            Growth Proposal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Growth Proposal for {COMPANY}
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            A full-stack growth engagement covering brand, content, community, and distribution — designed to establish market presence, build organic momentum, and deliver measurable results within 90 days.
          </p>
        </motion.section>

        {/* 2. What We'll Do */}
        <motion.section {...fade(0.1)}>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A4D2E] mb-3 block">
            Scope of Work
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8">
            What We'll Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-border">
            {deliverables.map((d, i) => (
              <div
                key={d}
                className={`flex items-center gap-3 py-4 px-1 border-b border-border ${i % 2 === 0 ? "md:border-r" : ""}`}
              >
                <span className="font-mono text-xs text-[#1A4D2E]">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm text-foreground font-medium">{d}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 3. The Plan */}
        <motion.section {...fade(0.15)}>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A4D2E] mb-3 block">
            Timeline
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8">
            The Plan
          </h2>
          <div className="space-y-0 border-t border-border">
            {timeline.map((t) => (
              <div key={t.phase} className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 py-8 border-b border-border">
                <div>
                  <span className="font-mono text-xs text-[#1A4D2E] tracking-wider block mb-1">{t.phase}</span>
                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-full border border-border text-muted-foreground">{t.period}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {t.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {t.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#1A4D2E] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 4. What You Get */}
        <motion.section {...fade(0.2)}>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A4D2E] mb-3 block">
            Deliverables
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8">
            What You Get
          </h2>
          <div className="border-t border-border">
            {whatYouGet.map((d) => (
              <div key={d.item} className="flex items-center justify-between py-4 border-b border-border">
                <span className="text-sm font-medium text-foreground">{d.item}</span>
                <span className="text-sm text-muted-foreground font-mono">{d.qty}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 5. Investment */}
        <motion.section {...fade(0.25)}>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A4D2E] mb-3 block">
            Pricing
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8">
            Investment
          </h2>
          <div className="border-t-2 border-t-[#1A4D2E] border-b border-border">
            {pricing.map((p) => (
              <div key={p.service} className="flex items-center justify-between py-5 border-b border-border last:border-b-0">
                <span className="text-sm font-medium text-foreground">{p.service}</span>
                <span className="text-sm font-semibold text-foreground font-mono">{p.price}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between pt-5 mt-0">
            <span className="text-base font-bold text-foreground">Total Monthly Retainer</span>
            <span className="text-base font-bold text-foreground font-mono">$XX,XXX / mo</span>
          </div>
        </motion.section>

        {/* 6. CTA */}
        <motion.section {...fade(0.3)} className="text-center py-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">
            Ready to grow?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Let's lock in the plan and start building your growth engine.
          </p>
          <a
            href="mailto:hello@thegrowthdesk.com"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold rounded-full bg-[#1A4D2E] text-white hover:bg-[#163f26] transition-colors"
          >
            Let's Get Started
          </a>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          Confidential — Prepared exclusively for {COMPANY} by The Growth Desk.
        </p>
      </footer>
    </div>
  );
};

export default Offer;
