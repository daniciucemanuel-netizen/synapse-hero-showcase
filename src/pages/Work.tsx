import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { clients } from "@/data/clients";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://norelstudio.com/" },
    { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://norelstudio.com/work" },
  ],
};

const Work = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Case Studies — Norel Studio | Growth Marketing Portfolio & Results"
        description="See how Norel Studio drives 2.4x organic growth for startups and scale-ups through brand strategy, content marketing, SEO, and distribution. View our portfolio."
        canonical="https://norelstudio.com/work"
        jsonLd={breadcrumbJsonLd}
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
              Our Work — Growth Marketing Case Studies
            </h1>
            <p className="text-muted-foreground text-base mt-3 max-w-lg">
              Real results from real clients. See how we help startups and scale-ups grow through brand, content, SEO, and distribution.
            </p>
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
                  aria-expanded={activeIndex === i}
                >
                  <div className="flex items-center justify-between py-4 md:py-5 transition-transform duration-300 group-hover:translate-x-2">
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-[hsl(var(--sage))]">
                        {client.name}
                      </h2>
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

          {/* Internal link back to services */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground text-sm mb-4">
              Want results like these for your brand?
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-[hsl(var(--sage))] text-white hover:opacity-90 transition-all"
            >
              Get Your Free Growth Audit
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Work;
