import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-40 bg-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400 dark:text-emerald-700 mb-3 block">
              Let's Talk
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-background mb-8 leading-[1.1] whitespace-nowrap"
            >
              Get your free growth audit.
            </h2>
            <p className="text-background/60 text-base leading-relaxed mb-14 max-w-lg">
              Tell us what you're building. We'll respond within 24 hours with a custom growth roadmap — no commitment, no pitch deck required. We work with teams worldwide from our European base.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="mailto:hello@norelstudio.com"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-medium bg-emerald-400 dark:bg-emerald-700 text-foreground dark:text-background hover:opacity-90 transition-all"
              >
                <Mail size={16} />
                Get Your Custom Strategy
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 text-background/40 text-xs tracking-wide">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                Free consultation
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                24h response time
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                No commitment
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
