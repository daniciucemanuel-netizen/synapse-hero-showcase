import { Linkedin, Twitter, Instagram } from "lucide-react";
import { useTheme } from "next-themes";
import logoBlack from "@/assets/Norel_Studio_Black.png";
import logoWhite from "@/assets/Norel_Studio_White.png";

const Footer = () => {
  const { theme } = useTheme();
  const logo = theme === "dark" ? logoWhite : logoBlack;

  return (
    <footer className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <img src={logo} alt="Norel Studio" className="h-8 mb-1" />
              <p className="text-sm text-muted-foreground">
                AI-powered growth marketing agency — brand strategy, content, SEO, and distribution.
              </p>
            </div>
            <nav className="flex items-center gap-6" aria-label="Footer navigation">
              <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a href="/offer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Our Offer</a>
              <a href="/work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Case Studies</a>
              <a href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </nav>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-border">
            <div className="text-sm text-muted-foreground">
              © 2026 Norel Studio. All rights reserved.
            </div>
            <div className="flex items-center gap-5">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
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
