import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Audit & Discovery",
    time: "Week 1",
    description:
      "We map your digital presence, brand positioning, content gaps, and channel opportunities. Full audit delivered in 7 days.",
  },
  {
    num: "02",
    title: "Strategy & Roadmap",
    time: "Week 2",
    description:
      "A 90-day growth plan with clear milestones, channel priorities, and KPI targets. Every recommendation is data-backed.",
  },
  {
    num: "03",
    title: "Execute & Ship",
    time: "Weeks 3–8",
    description:
      "Content, campaigns, community, and distribution. All running simultaneously. Bi-weekly check-ins, weekly reports.",
  },
  {
    num: "04",
    title: "Optimize & Scale",
    time: "Ongoing",
    description:
      "Monthly performance reviews. Double down on what works, cut what doesn't, expand as the engine compounds.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-36 bg-[hsl(var(--surface))]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[hsl(var(--sage))] mb-3 block">
                  How We Work
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-5 leading-[1.1]">
                  From audit to scale in eight weeks.
                </h2>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`py-10 ${i < steps.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-[hsl(var(--sage))] tracking-wider">
                      {step.num}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-medium px-3 py-1 rounded-full border border-border text-muted-foreground whitespace-nowrap">
                    {step.time}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed pl-10 mt-1">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
