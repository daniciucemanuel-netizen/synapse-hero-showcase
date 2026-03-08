import { motion } from "framer-motion";

const clientNames = ["LoadBetter", "Vino si Vezi", "Sovereign Motors", "Maison Claret", "Atheneum Medical", "Ember & Oak"];

const SocialProofBar = () => {
  return (
    <section className="py-12 border-y border-border bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
            Trusted by teams building the future
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {clientNames.map((name) => (
              <span
                key={name}
                className="text-sm md:text-base font-medium text-muted-foreground/60 tracking-tight font-[Space_Grotesk]"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofBar;
