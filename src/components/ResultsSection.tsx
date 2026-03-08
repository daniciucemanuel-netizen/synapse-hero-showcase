import { motion } from "framer-motion";

const metrics = [
  { value: "3.5x", label: "Organic traffic growth, 6 months" },
  { value: "47%", label: "Increase in qualified inbound leads" },
  { value: "2.1x", label: "Return on ad spend" },
  { value: "30+", label: "Projects shipped" },
  { value: "18", label: "Days from brief to launch" },
  { value: "96%", label: "Client retention rate" },
];

const ResultsSection = () => {
  return (
    <section id="results" className="py-32 bg-[hsl(var(--surface))]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[hsl(var(--sage))] mb-3 block">
            Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            The numbers speak.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.value + metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-background p-10 md:p-14"
            >
              <span className="font-mono text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[hsl(var(--sage))] block mb-4">
                {metric.value}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
