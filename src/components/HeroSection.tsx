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
    <section className="relative bg-background overflow-hidden flex flex-col items-center justify-center min-h-screen pt-[72px] pb-8">
      <div className="absolute bottom-[-35vh] left-0 right-0 h-[80vh] z-0 pointer-events-none">
        <VideoPlayer />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tight leading-[1.05] text-foreground mb-8"
        >
          Your growth engine.<br />
          <span className="text-[hsl(var(--sage))]">AI-Powered.</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed tracking-[-0.02em]"
        >
          Full-funnel growth marketing — brand strategy, content marketing, SEO, and distribution for companies that need traction.
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
            className="group w-[280px] sm:w-[240px] py-4 rounded-full text-sm font-medium bg-foreground text-background hover:bg-foreground/90 transition-all inline-flex items-center justify-center gap-2"
          >
            Get Your Free Growth Audit
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#work"
            className="w-[280px] sm:w-[240px] py-4 rounded-full text-sm font-medium border border-foreground/20 text-foreground hover:border-foreground/50 transition-all text-center inline-flex items-center justify-center"
          >
            See Our Work
          </a>
        </motion.div>

        <motion.p
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-muted-foreground/50 text-xs mt-6 tracking-wide"
        >
          Free consultation · No commitment · Response within 24h
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
