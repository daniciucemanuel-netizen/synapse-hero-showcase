import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Surflux",
    tag: "AI Web Design & SEO",
    metric: "+40%",
    metricLabel: "Qualified Leads",
    description: "Complete brand overhaul and AI-driven web presence. Launched in 6 weeks with a 40% increase in qualified leads from day one.",
    color: "from-[hsl(175,40%,20%)] to-[hsl(175,50%,10%)]",
    span: "md:col-span-2 md:row-span-2",
    large: true,
  },
  {
    title: "LoadBetter",
    tag: "Growth Engineering",
    metric: "12×",
    metricLabel: "Organic Traffic",
    description: "Scaled organic traffic 12x in 6 months through technical SEO, programmatic content, and strategic link building.",
    color: "from-[hsl(35,50%,20%)] to-[hsl(35,60%,10%)]",
    span: "",
    large: false,
  },
  {
    title: "Vinosivezi",
    tag: "Content & Social",
    metric: "3.2×",
    metricLabel: "Return on Ad Spend",
    description: "Built a 50K+ community and full e-commerce funnel for an artisan wine brand. 3.2x return on ad spend within 90 days.",
    color: "from-[hsl(340,40%,18%)] to-[hsl(340,50%,10%)]",
    span: "",
    large: false,
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
            Results Speak Louder.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Real outcomes for real brands. No vanity metrics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${project.span}`}
            >
              {/* Thumbnail */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
              
              {/* Large typographic project name */}
              <div className={`absolute inset-0 flex items-center justify-center ${project.large ? 'p-12' : 'p-6'}`}>
                <span className={`font-bold tracking-tight text-foreground/[0.06] select-none ${project.large ? 'text-[120px] md:text-[180px]' : 'text-[80px] md:text-[100px]'}`}>
                  {project.title}
                </span>
              </div>

              {/* Content overlay */}
              <div className={`relative z-10 flex flex-col justify-between ${project.large ? 'p-10 min-h-[400px] md:min-h-[500px]' : 'p-8 min-h-[240px]'}`}>
                <div className="flex items-start justify-between">
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-foreground/60">
                    {project.tag}
                  </span>
                  <ArrowUpRight 
                    size={18} 
                    className="text-foreground/40 group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" 
                  />
                </div>

                <div>
                  <div className={`font-bold tracking-tight text-foreground mb-1 ${project.large ? 'text-5xl md:text-6xl' : 'text-3xl'}`}>
                    {project.metric}
                  </div>
                  <div className="text-sm text-foreground/60 mb-3">
                    {project.metricLabel}
                  </div>
                  <h3 className={`font-semibold text-foreground tracking-tight ${project.large ? 'text-2xl mb-3' : 'text-lg mb-2'}`}>
                    {project.title}
                  </h3>
                  {project.large && (
                    <p className="text-foreground/50 text-sm leading-relaxed max-w-md">
                      {project.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
