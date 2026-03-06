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

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute bottom-[-35vh] left-0 right-0 h-[80vh] z-0 pointer-events-none">
        <VideoPlayer />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-16 text-center">
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[72px] font-bold tracking-tight leading-[1.05] text-foreground mb-6"
        >
          Your Growth Engine.
          <br />
          <span className="gradient-text">AI-Powered.</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We combine AI tools with sharp creative to build brands, rank pages, and drive revenue.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group px-8 py-3.5 rounded-lg text-sm font-medium bg-foreground text-background hover:bg-foreground/90 transition-all inline-flex items-center gap-2"
          >
            Book a Call
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
    </section>
  );
};

export default HeroSection;
