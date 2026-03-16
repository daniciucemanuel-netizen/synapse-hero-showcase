import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { clients } from "@/data/clients";

const Work = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Case Studies — Norel Studio | Growth Marketing Portfolio"
        description="See how Norel Studio drives growth for startups and scale-ups through brand, content, SEO, and distribution."
        canonical="https://norelstudio.com/work"
      />
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[hsl(var(--sage))] mb-4 block">
              Portfolio
            </span>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              All Work
            </h1>
          </motion.div>

          <div className="border-t border-border">
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <button
                  onClick={() => handleClick(i)}
                  className="w-full text-left border-b border-border group"
                >
                  <div className="flex items-center justify-between py-4 md:py-5 transition-transform duration-300 group-hover:translate-x-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-[hsl(var(--sage))]">
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
                          <span key={service} className="text-xs text-muted-foreground">
                            {service}
                          </span>
                        ))}
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground transition-all duration-300 group-hover:text-[hsl(var(--sage))] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
                      <div className="pb-5 md:pb-6 pl-0 md:pl-2">
                        <div className="bg-muted/30 rounded-xl p-6 md:p-8 max-w-3xl">
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
      </main>
      <Footer />
    </div>
  );
};

export default Work;
