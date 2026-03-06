import { motion } from "framer-motion";

const metrics = [
  { value: "12x", label: "Organic traffic in 6 months", grid: "col-span-2 row-span-2 p-12", valueClass: "text-6xl sm:text-8xl gradient-text", bg: "bg-muted/50" },
  { value: "3.2x", label: "Return on ad spend in 90 days", grid: "row-span-2 p-10", valueClass: "text-4xl sm:text-5xl", bg: "" },
  { value: "20%", label: "Increase in qualified leads", grid: "p-8", valueClass: "text-3xl sm:text-4xl", bg: "" },
  { value: "40%", label: "Faster product launch cycles", grid: "p-8", valueClass: "text-3xl sm:text-4xl", bg: "" },
  { value: "2x", label: "Conversion improvement after website redesign", grid: "p-8", valueClass: "text-3xl sm:text-4xl", bg: "" },
  { value: "50+", label: "Products and campaigns launched", grid: "p-8", valueClass: "text-3xl sm:text-4xl", bg: "" },
];

const ResultsSection = () => {
  return (
    <section id="results" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            What We Delivered
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Real outcomes for real brands. No vanity metrics.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(160px,1fr)] gap-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.value + metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`rounded-xl border border-border hover:border-muted-foreground/40 transition-colors flex flex-col justify-end ${metric.grid} ${metric.bg}`}
            >
              <span className={`font-bold tracking-tight text-foreground mb-3 ${metric.valueClass}`}>
                {metric.value}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
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
