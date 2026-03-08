import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { clients } from "@/data/clients";

const featured = clients.filter((c) => c.featured);

const PortfolioSection = () => {
  return (
    <section id="work" className="py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[hsl(var(--sage))] mb-3 block">
            Selected Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
            Clients
          </h2>
          <p className="text-muted-foreground text-base max-w-lg">
            A selection of recent projects across brand, web, and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featured.map((client, i) => (
            <motion.a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative bg-muted/30 rounded-xl p-8 border border-border hover:border-[hsl(var(--sage)/0.5)] hover:bg-muted/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-[hsl(var(--sage))] font-[Space_Grotesk]">
                    {client.name}
                  </h3>
                  {client.tag && (
                    <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground border border-border rounded-full px-3 py-1">
                      {client.tag}
                    </span>
                  )}
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-all duration-300 group-hover:text-[hsl(var(--sage))] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 mt-1" />
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-2">
                {client.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {client.services.map((service) => (
                  <span
                    key={service}
                    className="text-xs text-muted-foreground bg-background rounded-full px-3 py-1 border border-border"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
          >
            View all work
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
