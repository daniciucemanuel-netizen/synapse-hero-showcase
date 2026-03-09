import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const metrics = [
  { value: "2.4", suffix: "x", label: "Organic traffic growth, 6 months" },
  { value: "32", suffix: "%", label: "Increase in qualified inbound leads" },
  { value: "1.8", suffix: "x", label: "Return on ad spend" },
  { value: "10", suffix: "+", label: "Projects shipped" },
  { value: "20", suffix: "", label: "Days from brief to launch" },
  { value: "91", suffix: "%", label: "Client retention rate" },
];

function AnimatedNumber({ value, suffix }: { value: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const target = parseFloat(value);
    const isDecimal = value.includes(".");
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      setDisplay(isDecimal ? current.toFixed(1) : Math.round(current).toString());
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
}

const ResultsSection = () => {
  return (
    <section id="results" className="py-36 bg-[hsl(var(--surface))]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
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
              <div className="w-8 h-px bg-[hsl(var(--sage))] opacity-30 mb-6" />
              <span className="font-mono text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[hsl(var(--sage))] block mb-4">
                <AnimatedNumber value={metric.value} suffix={metric.suffix} />
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
