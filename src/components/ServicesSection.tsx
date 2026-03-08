import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Brand & Web Development",
    description: "From visual identity to production-ready websites. We design and ship — fast.",
    tags: ["Visual Identity", "Product/UI Design", "Websites", "Landing Pages", "Pitch Decks"],
  },
  {
    num: "02",
    title: "Content & Distribution",
    description: "SEO-optimized content, multi-channel distribution, and a publishing engine that compounds.",
    tags: ["Content Calendars", "Blog & Long-Form", "SEO/AEO Strategy", "Newsletter", "Medium/LinkedIn/Substack"],
  },
  {
    num: "03",
    title: "Social & Community",
    description: "Platform-native strategies for X, Instagram, and emerging channels. Community-first growth.",
    tags: ["X Management", "Community Building", "Reply Strategy", "Spaces & Events", "Custom Graphics"],
  },
  {
    num: "04",
    title: "Growth & Partnerships",
    description: "KOL campaigns, influencer coordination, press, and go-to-market strategy.",
    tags: ["KOL Campaigns", "Partnership Management", "PR & Media", "Launch Strategy", "Campaign Analytics"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A4D2E] mb-3 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Full-stack growth. Every channel covered.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`border-t-2 border-t-[#1A4D2E] p-6 pt-8 transition-colors duration-200 hover:bg-[#F3F2ED] ${
                i < services.length - 1 ? "lg:border-r border-border" : ""
              }`}
            >
              <span className="font-mono text-xs text-muted-foreground tracking-wider">
                {service.num}
              </span>
              <h3 className="text-lg font-semibold text-foreground mt-4 mb-3 tracking-tight leading-snug">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
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
