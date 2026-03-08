import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Brand & Web",
    description: "Identity systems and production-ready websites that convert visitors into pipeline.",
    tags: ["Visual Identity", "Product Design", "Websites", "Landing Pages"],
  },
  {
    num: "02",
    title: "Content & SEO",
    description: "Search-optimized content and a publishing engine that compounds organic growth month over month.",
    tags: ["Content Strategy", "Blog & Long-Form", "SEO/AEO", "Newsletter"],
  },
  {
    num: "03",
    title: "Social & Community",
    description: "Platform-native strategies that build audience, trust, and inbound demand across every channel.",
    tags: ["X Management", "Community", "Spaces & Events", "Custom Graphics"],
  },
  {
    num: "04",
    title: "Growth & Partnerships",
    description: "KOL campaigns, press, and go-to-market execution that put your brand in front of the right people.",
    tags: ["KOL Campaigns", "Partnerships", "PR & Media", "Launch Strategy"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[hsl(var(--sage))] mb-3 block">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            End-to-end growth. No gaps.
          </h2>
          <p className="text-muted-foreground text-base max-w-lg">
            From brand to pipeline, we own the full funnel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="border-t-2 border-t-[hsl(var(--sage))] p-8 pt-10 min-h-[280px] transition-colors duration-200 hover:bg-muted/30"
            >
              <span className="font-mono text-xs text-muted-foreground tracking-wider">
                {service.num}
              </span>
              <h3 className="text-lg font-semibold text-foreground mt-4 mb-3 tracking-tight leading-snug">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
