import { motion } from "framer-motion";

const metrics = [
  { value: "3.5x", label: "Average organic traffic growth in 6 months" },
  { value: "47%", label: "Increase in qualified inbound leads" },
  { value: "2.1x", label: "Return on ad spend across campaigns" },
  { value: "30+", label: "Projects shipped for clients" },
  { value: "18", label: "Average days from brief to launch" },
  { value: "96%", label: "Client retention rate" },
];

const ResultsSection = () => {
  return (
    <section id="results" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[hsl(var(--sage))] mb-3 block">
            Results
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Numbers
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
              className="bg-[hsl(var(--surface))] p-8 hover:bg-muted/50 transition-colors duration-200"
            >
              <span className="font-mono text-4xl sm:text-5xl font-bold tracking-tight text-[hsl(var(--sage))] block mb-3">
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
