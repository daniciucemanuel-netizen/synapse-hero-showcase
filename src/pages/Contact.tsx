import { motion } from "framer-motion";
import { ArrowRight, Mail, Loader2, CheckCircle, Clock, Shield, Zap } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://norelstudio.com/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://norelstudio.com/contact" },
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.12, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
};

const trustItems = [
  { icon: Clock, label: "24h response time" },
  { icon: Shield, label: "No commitment required" },
  { icon: Zap, label: "Free growth audit included" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const { error: dbError } = await supabase
        .from("contact_submissions")
        .insert({
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim() || null,
          message: form.message.trim(),
        });

      if (dbError) throw dbError;

      await supabase.functions.invoke("contact-notify", {
        body: {
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim(),
          message: form.message.trim(),
        },
      });

      setStatus("success");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (err: any) {
      console.error("Contact form error:", err);
      setStatus("error");
      setErrorMsg("Something went wrong. Please email us directly.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Norel Studio — Free Growth Audit | AI-Powered Marketing Agency"
        description="Get in touch with Norel Studio for a free growth audit. Tell us about your project and receive a custom growth roadmap within 24 hours. No commitment required."
        canonical="https://norelstudio.com/contact"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />

      <main className="pt-[72px]">
        {/* Hero */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--sage))]/5 to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              {/* Left — copy */}
              <div>
                <motion.nav
                  custom={0}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="flex items-center gap-2 text-xs text-muted-foreground mb-8"
                  aria-label="Breadcrumb"
                >
                  <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
                  <span>/</span>
                  <span className="text-foreground">Contact</span>
                </motion.nav>

                <motion.span
                  custom={1}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="font-mono text-xs uppercase tracking-[0.2em] text-[hsl(var(--sage))] mb-4 block"
                >
                  Let's Talk
                </motion.span>

                <motion.h1
                  custom={2}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08] mb-6"
                >
                  Start your free<br />
                  <span className="text-[hsl(var(--sage))]">growth audit.</span>
                </motion.h1>

                <motion.p
                  custom={3}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-md"
                >
                  Tell us what you're building. We'll respond within 24 hours with a custom growth roadmap — no commitment, no pitch deck required.
                </motion.p>

                {/* Trust badges */}
                <motion.div
                  custom={4}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col gap-4"
                >
                  {trustItems.map((item) => (
                    <div key={item.label} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-9 h-9 rounded-lg bg-[hsl(var(--sage))]/10 flex items-center justify-center flex-shrink-0">
                        <item.icon size={16} className="text-[hsl(var(--sage))]" />
                      </div>
                      {item.label}
                    </div>
                  ))}
                </motion.div>

                {/* Direct email fallback */}
                <motion.div
                  custom={5}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="mt-12 pt-8 border-t border-border"
                >
                  <p className="text-xs text-muted-foreground/60 mb-1">Prefer email?</p>
                  <a
                    href="mailto:hello@norelstudio.com"
                    className="text-sm text-foreground hover:text-[hsl(var(--sage))] transition-colors font-medium"
                  >
                    hello@norelstudio.com
                  </a>
                </motion.div>
              </div>

              {/* Right — form */}
              <motion.div
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
              >
                <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
                  {status === "success" ? (
                    <div className="flex flex-col items-center justify-center text-center gap-4 py-12">
                      <div className="w-16 h-16 rounded-full bg-[hsl(var(--sage))]/10 flex items-center justify-center">
                        <CheckCircle size={32} className="text-[hsl(var(--sage))]" />
                      </div>
                      <h2 className="text-2xl font-semibold text-foreground">Message sent!</h2>
                      <p className="text-muted-foreground text-sm max-w-sm">
                        We'll get back to you within 24 hours with a custom growth roadmap tailored to your goals.
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="mt-4 text-sm text-[hsl(var(--sage))] hover:underline"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <h2 className="text-lg font-semibold text-foreground mb-1">Get your custom strategy</h2>
                        <p className="text-sm text-muted-foreground">Fill out the form and we'll be in touch.</p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="contact-name" className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                            Name *
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            required
                            maxLength={100}
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-[hsl(var(--sage))]/50 focus:ring-1 focus:ring-[hsl(var(--sage))]/20 transition-all"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="contact-email" className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                            Email *
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            required
                            maxLength={255}
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-[hsl(var(--sage))]/50 focus:ring-1 focus:ring-[hsl(var(--sage))]/20 transition-all"
                            placeholder="you@company.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="contact-company" className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                          Company
                        </label>
                        <input
                          id="contact-company"
                          type="text"
                          maxLength={100}
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-[hsl(var(--sage))]/50 focus:ring-1 focus:ring-[hsl(var(--sage))]/20 transition-all"
                          placeholder="Your company (optional)"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-message" className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                          Tell us about your project *
                        </label>
                        <textarea
                          id="contact-message"
                          required
                          maxLength={2000}
                          rows={5}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-[hsl(var(--sage))]/50 focus:ring-1 focus:ring-[hsl(var(--sage))]/20 transition-all resize-none"
                          placeholder="Your goals, timeline, current challenges..."
                        />
                      </div>

                      {status === "error" && (
                        <p className="text-destructive text-sm">
                          {errorMsg}{" "}
                          <a href="mailto:hello@norelstudio.com" className="underline">Email us directly</a>
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-medium bg-[hsl(var(--sage))] text-white hover:opacity-90 transition-all disabled:opacity-60"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Mail size={16} />
                            Get Your Custom Strategy
                            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                          </>
                        )}
                      </button>

                      <p className="text-xs text-muted-foreground/50 text-center">
                        We respect your privacy. No spam, ever.
                      </p>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
