import { motion } from "framer-motion";
import { Code, TrendingUp, Smartphone } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "AI Web Development",
    description:
      "High-performance websites built at startup speed. We design, develop, and deploy custom sites that convert visitors into customers — powered by AI tooling from wireframe to production.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Growth Engineering",
    description:
      "Rank. Convert. Repeat. From technical audits to AI-assisted content at scale, we build the organic engine that keeps compounding — 12x traffic growth and counting.",
  },
  {
    icon: Smartphone,
    title: "Content & Social Media",
    description:
      "Platform-specific strategies that turn followers into customers. We handle content calendars, community management, and creator partnerships — all backed by data.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A lean, powerful toolkit for brands that move fast.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
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
