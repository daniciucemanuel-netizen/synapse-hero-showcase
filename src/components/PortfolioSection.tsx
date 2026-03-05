import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Surflux",
    tag: "AI Web Design & SEO",
    description: "Complete brand overhaul and AI-driven web presence. Launched in 6 weeks with a 40% increase in qualified leads from day one.",
  },
  {
    title: "LoadBetter",
    tag: "Growth Engineering",
    description: "Scaled organic traffic 12x in 6 months through technical SEO, programmatic content, and strategic link building.",
  },
  {
    title: "Vinosivezi",
    tag: "Content & Social",
    description: "Built a 50K+ community and full e-commerce funnel for an artisan wine brand. 3.2x return on ad spend within 90 days.",
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Recent Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Real results for real brands. Here's what we've been building.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Project Preview</span>
              </div>

              <div className="p-6">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {project.tag}
                </span>
                <h3 className="text-xl font-semibold text-foreground mt-2 mb-3 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-accent transition-colors group/link"
                >
                  Read Case Study
                  <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
