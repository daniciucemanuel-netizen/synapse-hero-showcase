import { motion } from "framer-motion";

const clients = [
  {
    name: "Surflux",
    description: "AI-driven web presence and brand overhaul.",
  },
  {
    name: "LoadBetter",
    description: "Website redesign, brand positioning, social media strategy, SEO, and content development.",
  },
  {
    name: "Vino si Vezi",
    description: "Built the platform from the ground up including landing pages, payments, and a volunteer management dashboard.",
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
            Selected Clients
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-xl border border-border p-8 hover:border-muted-foreground/40 transition-colors"
            >
              <h3 className="text-lg font-semibold text-foreground tracking-tight mb-2">
                {client.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {client.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
