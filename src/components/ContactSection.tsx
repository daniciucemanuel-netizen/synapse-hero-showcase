import { motion } from "framer-motion";
import { ArrowRight, Mail, Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      // Save to database
      const { error: dbError } = await supabase
        .from("contact_submissions")
        .insert({
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim() || null,
          message: form.message.trim(),
        });

      if (dbError) throw dbError;

      // Trigger notification edge function
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
    <section id="contact" className="py-40 bg-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column — copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[hsl(var(--sage))] mb-3 block">
              Let's Talk
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-background mb-8 leading-[1.1]">
              Get your free growth audit.
            </h2>
            <p className="text-background/60 text-base leading-relaxed mb-14 max-w-lg">
              Tell us what you're building. We'll respond within 24 hours with a custom growth roadmap — no commitment, no pitch deck required.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-background/40 text-xs tracking-wide">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--sage))]/60" />
                Free consultation
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--sage))]/60" />
                24h response time
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--sage))]/60" />
                No commitment
              </span>
            </div>

            <div className="mt-8">
              <address className="not-italic text-background/30 text-xs">
                <a href="mailto:hello@norelstudio.com" className="hover:text-background/60 transition-colors">hello@norelstudio.com</a>
              </address>
            </div>
          </motion.div>

          {/* Right column — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                <CheckCircle size={48} className="text-[hsl(var(--sage))]" />
                <h3 className="text-2xl font-semibold text-background">Message sent!</h3>
                <p className="text-background/50 text-sm max-w-sm">
                  We'll get back to you within 24 hours with a custom growth roadmap.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-sm text-[hsl(var(--sage))] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-background/50 mb-2 uppercase tracking-wider">
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background/5 border border-background/10 text-background text-sm placeholder:text-background/25 focus:outline-none focus:border-[hsl(var(--sage))]/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-background/50 mb-2 uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background/5 border border-background/10 text-background text-sm placeholder:text-background/25 focus:outline-none focus:border-[hsl(var(--sage))]/50 transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs font-medium text-background/50 mb-2 uppercase tracking-wider">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    maxLength={100}
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background/5 border border-background/10 text-background text-sm placeholder:text-background/25 focus:outline-none focus:border-[hsl(var(--sage))]/50 transition-colors"
                    placeholder="Your company (optional)"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-background/50 mb-2 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    maxLength={2000}
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background/5 border border-background/10 text-background text-sm placeholder:text-background/25 focus:outline-none focus:border-[hsl(var(--sage))]/50 transition-colors resize-none"
                    placeholder="Tell us about your project, goals, and timeline..."
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm">
                    {errorMsg || "Something went wrong."}{" "}
                    <a href="mailto:hello@norelstudio.com" className="underline">Email us directly</a>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-medium bg-[hsl(var(--sage))] text-white hover:opacity-90 transition-all disabled:opacity-60"
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
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
