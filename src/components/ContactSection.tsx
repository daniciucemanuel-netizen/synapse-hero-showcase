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
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[hsl(var(--sage))] mb-3 block">
              Get Started
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-background mb-8 leading-[1.1]"
            >
              Ready to accelerate?
            </h2>
            <p className="text-background/60 text-base leading-relaxed mb-14 max-w-lg">
              Tell us what you're building. We'll respond within 24 hours with a clear next step.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="mailto:hello@thegrowthdesk.com"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-medium bg-[hsl(var(--sage))] text-white hover:opacity-90 transition-all"
              >
                <Mail size={16} />
                hello@thegrowthdesk.com
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
            <p className="text-background/30 text-xs mt-6 tracking-wide">
              No commitment. No pitch deck required.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
