import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const posts = [
  {
    slug: "ai-powered-seo-2026",
    title: "How AI-Powered SEO Is Changing Growth Marketing in 2026",
    excerpt: "Search is evolving. Here's how we use AI-enhanced audits and AEO optimization to compound organic traffic for our clients.",
    category: "SEO & AEO",
    date: "Mar 2026",
  },
  {
    slug: "brand-identity-startups",
    title: "Building a Brand Identity That Converts: A Startup Playbook",
    excerpt: "Logo, guidelines, and a production-ready website in 6 weeks — our process for early-stage companies.",
    category: "Brand & Web",
    date: "Feb 2026",
  },
  {
    slug: "content-strategy-compounding-growth",
    title: "The Content Strategy That Compounds: Our Framework",
    excerpt: "How we structure content calendars, SEO clusters, and distribution to build organic growth month over month.",
    category: "Content Strategy",
    date: "Feb 2026",
  },
  {
    slug: "kol-campaigns-web3",
    title: "Running KOL Campaigns That Actually Drive Pipeline",
    excerpt: "Not all influencer partnerships are equal. Here's how to vet, structure, and measure KOL campaigns.",
    category: "Growth",
    date: "Jan 2026",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[hsl(var(--sage))] mb-3 block">
              Insights
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Resources & Thinking
            </h1>
            <p className="text-muted-foreground text-base max-w-lg">
              Frameworks, case breakdowns, and lessons from scaling brands.
            </p>
          </motion.div>

          <div className="flex flex-col divide-y divide-border">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group py-10 first:pt-0 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h2 className="text-xl font-semibold text-foreground group-hover:text-[hsl(var(--sage))] transition-colors tracking-tight mb-2 flex items-center gap-2">
                  {post.title}
                  <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                  {post.excerpt}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-border text-center">
            <p className="text-muted-foreground text-sm">
              More articles coming soon. Follow us for updates.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
