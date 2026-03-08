import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    tag: "Concept",
    services: ["Branding", "Logo Design", "Web Development"],
  },
  {
    name: "Blanc Smile Studio",
    url: "https://blanc-smile-studio.lovable.app",
    description: "Full concept build — branding, logo design, and website, all created from scratch.",
    tag: "Concept",
    services: ["Branding", "Logo Design", "Web Development"],
  },
];

const PortfolioSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="work" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[hsl(var(--sage))] mb-4 block">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Clients
          </h2>
        </motion.div>

        <div className="border-t border-border">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <button
                onClick={() => handleClick(i)}
                className="w-full text-left border-b border-border group"
              >
                <div className="flex items-center justify-between py-8 md:py-10 transition-transform duration-300 group-hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-[hsl(var(--sage))]">
                      {client.name}
                    </h3>
                    {client.tag && (
                      <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground border border-border rounded-full px-3 py-1">
                        {client.tag}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-2">
                      {client.services.slice(0, 3).map((service) => (
                        <span
                          key={service}
                          className="text-xs text-muted-foreground"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-all duration-300 group-hover:text-[hsl(var(--sage))] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </button>

              <AnimatePresence mode="wait">
                {activeIndex === i && (
                  <motion.div
                    key={`detail-${i}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 md:pb-10 pl-0 md:pl-2">
                      <div className="bg-muted/30 rounded-xl p-8 md:p-10 max-w-3xl">
                        <p className="text-base text-muted-foreground leading-relaxed mb-6">
                          {client.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {client.services.map((service) => (
                            <span
                              key={service}
                              className="text-xs text-muted-foreground bg-background rounded-full px-3 py-1 border border-border"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                        <a
                          href={client.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-[hsl(var(--sage))] transition-colors"
                        >
                          {client.url.replace("https://", "")}
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
