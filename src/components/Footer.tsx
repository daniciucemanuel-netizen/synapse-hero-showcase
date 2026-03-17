import { Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import logoBlack from "@/assets/Norel_Studio_Black.png";
import logoWhite from "@/assets/Norel_Studio_White.png";

const Footer = () => {
  const { theme } = useTheme();
  const logo = theme === "dark" ? logoWhite : logoBlack;

  return (
    <footer className="py-24 bg-background border-t border-border" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <img src={logo} alt="Norel Studio — AI-powered growth marketing agency" className="h-8 mb-1" loading="lazy" />
              <p className="text-sm text-muted-foreground">
                AI-powered growth marketing agency — brand strategy, content marketing, SEO, and distribution.
              </p>
              <p className="text-xs text-muted-foreground/60 mt-1">
                Remote-first · Serving clients worldwide
              </p>
              <address className="text-xs text-muted-foreground/50 mt-2 not-italic">
                <a href="mailto:hello@norelstudio.com" className="hover:text-foreground transition-colors">hello@norelstudio.com</a>
              </address>
            </div>
            <nav className="flex items-center gap-6" aria-label="Footer navigation">
              <a href="/#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <Link to="/work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Case Studies</Link>
              <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </nav>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-border">
            <div className="text-sm text-muted-foreground">
              © 2026 Norel Studio. All rights reserved.
            </div>
            <div className="flex items-center gap-5">
              <a href="https://linkedin.com/company/norel-studio" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Norel Studio on LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="https://x.com/NorelStudio" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Norel Studio on X">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.instagram.com/norelstudiooficial/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Norel Studio on Instagram">
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
