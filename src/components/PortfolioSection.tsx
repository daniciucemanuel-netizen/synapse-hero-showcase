import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const clients = [
  {
    name: "Surflux",
    url: "https://surflux.dev",
    description: "Took an existing product with no branding and built the brand, website, and social media presence. Managed partnership discussions and go-to-market strategy.",
  },
  {
    name: "LoadBetter",
    url: "https://loadbetter.com",
    description: "Website redesign, brand positioning, social media strategy, SEO, and content development.",
  },
  {
    name: "Vino si Vezi",
    url: "https://vinosivezi.ro",
    description: "Built the platform from the ground up including landing pages, payments, and a volunteer management dashboard.",
  },
  {
    name: "Meridian Freight",
    url: "https://meridian-freight-smart.lovable.app",
    description: "Full concept build — branding, logo design, and website, all created from scratch.",
    tag: "Concept Project",
  },
  {
    name: "Blanc Smile Studio",
    url: "https://blanc-smile-studio.lovable.app",
    description: "Full concept build — branding, logo design, and website, all created from scratch.",
    tag: "Concept Project",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {clients.map((client, i) => (
            <motion.a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-xl border border-border p-8 pb-6 hover:border-muted-foreground/40 transition-colors flex flex-col justify-between min-h-[240px]"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-foreground tracking-tight">
                      {client.name}
                    </h3>
                    {client.tag && (
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2 py-0.5">
                        {client.tag}
                      </span>
                    )}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {client.description}
                </p>
              </div>
              <span className="text-xs text-muted-foreground/60 mt-6">
                {client.url.replace("https://", "")}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
