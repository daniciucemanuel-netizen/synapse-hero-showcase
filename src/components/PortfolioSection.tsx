import { motion } from "framer-motion";

const results = [
  {
    name: "Surflux",
    tag: "AI",
    description: "AI-driven web presence and brand overhaul.",
    result: "40% increase in qualified leads",
  },
  {
    name: "LoadBetter",
    tag: "Growth",
    description: "Technical SEO and programmatic content engine.",
    result: "12x organic traffic in 6 months",
  },
  {
    name: "Vinosivezi",
    tag: "Automation",
    description: "E-commerce funnel and community building.",
    result: "3.2x return on ad spend in 90 days",
  },
];

const PortfolioSection = () => {
  return (
    <section id="work" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            What We've Delivered
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Real outcomes for real brands. No vanity metrics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-xl border border-border p-8 hover:border-muted-foreground/40 transition-colors"
            >
              <span className="inline-block text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground border border-border rounded-md px-2.5 py-1 mb-6">
                {project.tag}
              </span>
              <h3 className="text-lg font-semibold text-foreground tracking-tight mb-2">
                {project.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>
              <p className="text-sm font-medium text-foreground/70">
                {project.result}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
