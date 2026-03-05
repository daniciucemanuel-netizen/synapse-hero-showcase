import { motion } from "framer-motion";

const metrics = [
  { value: "12x", label: "Organic traffic in 6 months", size: "large" },
  { value: "3.2x", label: "Return on ad spend in 90 days", size: "medium" },
  { value: "20%", label: "Increase in qualified leads", size: "small" },
  { value: "40%", label: "Faster product launch cycles", size: "small" },
  { value: "2x", label: "Conversion improvement after website redesign", size: "small" },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.value + metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`rounded-xl border border-border p-8 hover:border-muted-foreground/40 transition-colors flex flex-col justify-end ${
                metric.size === "large"
                  ? "sm:col-span-2 sm:row-span-2 sm:p-12"
                  : ""
              }`}
            >
              <span className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-3">
                {metric.size === "large" && (
                  <span className="text-5xl sm:text-7xl">{metric.value}</span>
                )}
                {metric.size !== "large" && metric.value}
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
