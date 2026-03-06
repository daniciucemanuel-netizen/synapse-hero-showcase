import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const clients = [
  {
    name: "Surflux",
    url: "https://surflux.dev",
    description: "Took an existing product with no branding and built the brand, website, and social media presence. Managed partnership discussions and go-to-market strategy.",
    services: ["Branding", "Web Development", "Social Media", "GTM Strategy"],
  },
  {
    name: "LoadBetter",
    url: "https://loadbetter.com",
    description: "Website redesign, brand positioning, social media strategy, SEO, and content development.",
    services: ["Web Design", "SEO", "Content", "Brand Strategy"],
  },
  {
    name: "Vino si Vezi",
    url: "https://vinosivezi.ro",
    description: "Built the platform from the ground up including landing pages, payments, and a volunteer management dashboard.",
    services: ["Web Development", "Payments", "Dashboard", "UX Design"],
  },
  {
    name: "Meridian Freight",
    url: "https://meridian-freight-smart.lovable.app",
    description: "Full concept build — branding, logo design, and website, all created from scratch.",
    tag: "Concept Project",
    services: ["Branding", "Logo Design", "Web Development"],
  },
  {
    name: "Blanc Smile Studio",
    url: "https://blanc-smile-studio.lovable.app",
    description: "Full concept build — branding, logo design, and website, all created from scratch.",
    tag: "Concept Project",
    services: ["Branding", "Logo Design", "Web Development"],
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
          <p className="text-muted-foreground text-lg max-w-xl">
            A selection of brands we've helped build and grow.
          </p>
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
              className={`group rounded-xl border border-border p-8 pb-6 hover:border-muted-foreground/40 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 flex flex-col justify-between min-h-[260px] ${
                i === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-muted-foreground/50 tracking-wider">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-bold text-foreground tracking-tight">
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
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {client.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {client.services.map((service) => (
                    <span
                      key={service}
                      className="text-[11px] text-muted-foreground/70 bg-muted/60 rounded-full px-2.5 py-0.5"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t border-border mt-6 pt-4">
                <span className="text-xs text-muted-foreground/60">
                  {client.url.replace("https://", "")}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
