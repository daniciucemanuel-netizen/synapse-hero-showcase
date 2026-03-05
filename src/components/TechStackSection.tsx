import { motion } from "framer-motion";

const technologies = [
  "Gemini", "Antigravity", "Claude", "ChatGPT", "Grok", "Lovable",
  "Stripe", "Vercel", "Figma", "Notion", "Framer", "Webflow", "Canva",
  "OpenAI", "Supabase", "Firebase", "LangChain", "React", "Next.js",
  "Node.js", "Tailwind CSS", "PostgreSQL",
];

const TechStackSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-10"
        >
          Technologies We Use
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center justify-center gap-x-8 gap-y-4 flex-wrap max-w-4xl mx-auto"
        >
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-muted-foreground/50 text-xs font-medium tracking-widest uppercase"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
