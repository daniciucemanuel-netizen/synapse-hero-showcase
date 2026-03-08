import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <span className="text-foreground font-semibold tracking-tight text-lg font-[Space_Grotesk]">
          The Growth Desk
        </span>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium bg-[hsl(var(--sage))] text-white hover:opacity-90 transition-all"
          >
            Get Started
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
