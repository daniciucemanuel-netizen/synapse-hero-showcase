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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const activeClient = activeIndex !== null ? clients[activeIndex] : null;

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

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {clients.map((client, i) => (
            <motion.button
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              onClick={() => handleClick(i)}
              className={`relative text-left rounded-xl border px-6 py-8 transition-all duration-300 cursor-pointer ${
                activeIndex === i
                  ? "border-primary/40 bg-primary/5 text-foreground"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground/40"
              }`}
            >
              <span className="text-2xl md:text-3xl font-bold tracking-tight leading-tight block">
                {client.name}
              </span>
              {client.tag && (
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground mt-2 inline-block">
                  {client.tag}
                </span>
              )}
              {activeIndex === i && (
                <motion.div
                  layoutId="active-indicator"
                  className="absolute bottom-0 left-6 right-6 h-0.5 bg-primary rounded-full"
                />
              )}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeClient && (
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-4 rounded-xl border border-border p-8 md:p-10">
                <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                  {activeClient.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeClient.services.map((service) => (
                    <span
                      key={service}
                      className="text-xs text-muted-foreground bg-muted rounded-full px-3 py-1"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                <a
                  href={activeClient.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {activeClient.url.replace("https://", "")}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PortfolioSection;
