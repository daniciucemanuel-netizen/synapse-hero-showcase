import { Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm text-muted-foreground mb-8">Let's grow smarter, together.</p>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-sm text-muted-foreground">
          © 2026 The Growth Desk. All rights reserved.
        </div>

        <div className="flex items-center gap-5">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Twitter size={18} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Instagram size={18} />
          </a>
          <a
            href="mailto:hello@synapse.agency"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors ml-3"
          >
            Contact Us
          </a>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
