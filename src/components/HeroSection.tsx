import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import VideoPlayer from "./VideoPlayer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.15, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
};

const trustedBy = ["Stripe", "Vercel", "Figma", "Notion", "Linear", "Framer"];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden flex flex-col items-center justify-center">
      {/* Background Video */}
      <div className="absolute bottom-[-35vh] left-0 right-0 h-[80vh] z-0 pointer-events-none">
        <VideoPlayer />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-16 text-center">
        {/* Headline */}
        <motion.h1
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tight leading-[0.95] text-foreground mb-6"
        >
          Your Growth Engine.
          <br />
          AI-Powered.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We're a lean team of three who build brands, rank pages, and scale businesses
          <br className="hidden sm:block" />
           — combining human creativity with machine precision to compound your growth.
        </motion.p>

        {/* Buttons */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group px-8 py-3.5 rounded-lg text-sm font-medium bg-foreground text-background hover:bg-foreground/90 transition-all inline-flex items-center gap-2"
          >
            Book a Free Strategy Call
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#work"
            className="px-8 py-3.5 rounded-lg text-sm font-medium border border-border text-foreground hover:border-muted-foreground transition-all"
          >
            See Our Work
          </a>
        </motion.div>
      </div>

      {/* Trusted By — static, minimal */}
      <motion.div
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full mt-auto pb-16"
      >
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
          Trusted by forward-thinking brands
        </p>
        <div className="flex items-center justify-center gap-10 flex-wrap opacity-30">
          {trustedBy.map((name) => (
            <span
              key={name}
              className="text-foreground text-sm font-medium tracking-widest uppercase"
            >
              {name}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
