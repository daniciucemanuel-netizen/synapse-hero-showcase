import { motion } from "framer-motion";

const navLinks = [
  { label: "Features", active: true },
  { label: "Insights" },
  { label: "About" },
  { label: "Case Studies", strikethrough: true },
  { label: "Contact" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-strong"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-foreground font-medium tracking-tight text-lg font-[Space_Grotesk]">
          Synapse
        </span>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={`#${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={`text-sm transition-colors ${
                link.strikethrough
                  ? "line-through text-muted-foreground hover:text-foreground"
                  : link.active
                  ? "gradient-border rounded-full px-3 py-1 text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#get-started"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-foreground/90 to-foreground/70 text-background hover:from-foreground hover:to-foreground/80 transition-all"
        >
          Get Started for Free
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
