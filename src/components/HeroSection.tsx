import { motion } from "framer-motion";
import { Zap, Shield, Globe } from "lucide-react";
import VideoPlayer from "./VideoPlayer";

const badges = [
  { icon: Zap, label: "Integrated with Zapier" },
  { icon: Shield, label: "Integrated with Vercel" },
  { icon: Globe, label: "Integrated with AWS" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
};

const placeholderLogos = ["Stripe", "Vercel", "Figma", "Notion", "Linear", "Framer"];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden flex flex-col items-center justify-center">
      {/* Background Video */}
      <div className="absolute bottom-[-35vh] left-0 right-0 h-[80vh] z-0 pointer-events-none">
        <VideoPlayer />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-16 text-center">
        {/* Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial="hidden"
          animate="visible"
        >
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              custom={i}
              variants={fadeUp}
              className="glass rounded-full px-4 py-2 flex items-center gap-2 text-sm text-foreground/80"
            >
              <badge.icon size={14} className="text-primary" />
              {badge.label}
            </motion.div>
          ))}
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={3}
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
          custom={4}
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
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#get-started"
            className="px-8 py-3.5 rounded-full text-sm font-medium bg-background text-foreground border border-foreground/20 hover:border-foreground/50 transition-all"
          >
            Book a Free Strategy Call
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full text-sm font-medium glass hover:bg-white/10 transition-all text-foreground"
          >
            Let's Get Connected
          </a>
        </motion.div>
      </div>

      {/* Logo Marquee */}
      <div className="relative z-10 w-full mt-auto pb-12 overflow-hidden">
        <div className="flex marquee opacity-40 grayscale">
          {[...placeholderLogos, ...placeholderLogos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-10 text-foreground/50 text-sm font-medium tracking-widest uppercase"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
