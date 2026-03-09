import { motion } from "framer-motion";

const categories = [
  {
    name: "AI",
    dotColor: "bg-emerald-500",
    tools: ["Claude", "ChatGPT", "Gemini", "Grok"],
  },
  {
    name: "Development",
    dotColor: "bg-blue-500",
    tools: ["Lovable", "React", "Tailwind CSS", "Supabase"],
  },
  {
    name: "Design",
    dotColor: "bg-purple-500",
    tools: ["Figma", "Framer", "Canva"],
  },
  {
    name: "Distribution",
    dotColor: "bg-amber-500",
    tools: ["X/Twitter", "LinkedIn", "Medium", "Substack"],
  },
];

const TechStackSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-12"
        >
          Technologies We Use
        </motion.p>
        <div className="max-w-4xl mx-auto space-y-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
              className="flex flex-wrap items-center gap-2"
            >
              <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-medium mr-2 min-w-[100px]">
                <span className={`w-2 h-2 rounded-full ${cat.dotColor} shrink-0`} />
                {cat.name}
              </span>
              {cat.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
