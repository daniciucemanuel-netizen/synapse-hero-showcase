import { motion } from "framer-motion";

const clientNames = ["LoadBetter", "Vino si Vezi", "Sovereign Motors", "Maison Claret", "Atheneum Medical", "Ember & Oak"];

const SocialProofBar = () => {
  return (
    <section className="py-20 border-y border-border bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-y-4">
            {clientNames.map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-center"
              >
                <span className="text-base md:text-lg font-medium text-muted-foreground/40 tracking-tight font-[Space_Grotesk]">
                  {name}
                </span>
                {i < clientNames.length - 1 && (
                  <span className="text-muted-foreground/20 mx-6 md:mx-8 text-sm">·</span>
                )}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
