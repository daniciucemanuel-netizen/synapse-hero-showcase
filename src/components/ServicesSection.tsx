import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "AI Web Development",
    description:
      "High-performance websites built at startup speed. We design, develop, and deploy custom sites that convert visitors into customers — powered by AI tooling from wireframe to production.",
  },
  {
    num: "02",
    title: "SEO & Growth Engineering",
    description:
      "Rank. Convert. Repeat. From technical audits to AI-assisted content at scale, we build the organic engine that keeps compounding — 12x traffic growth and counting.",
  },
  {
    num: "03",
    title: "Content & Social Media",
    description:
      "Platform-specific strategies that turn followers into customers. We handle content calendars, community management, and creator partnerships — all backed by data.",
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
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Strategy, design, and engineering — under one roof.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-border">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="p-8 pt-10 border-b md:border-b-0 md:border-r border-border last:border-r-0 last:border-b-0"
            >
              <span className="text-xs font-mono text-muted-foreground tracking-wider">
                {service.num}
              </span>
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
