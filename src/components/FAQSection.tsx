import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What does a typical engagement look like?",
    answer:
      "We start with a free growth audit to understand your goals, audience, and current positioning. From there we propose a tailored scope — most clients begin with a 3-month sprint covering brand, content, and distribution, then transition to ongoing retainers.",
  },
  {
    question: "How long until we see results?",
    answer:
      "Brand and web deliverables ship within 4–6 weeks. SEO and content gains typically compound over 60–90 days. Paid and KOL campaigns can generate pipeline within the first month.",
  },
  {
    question: "What's the investment range?",
    answer:
      "Engagements start at $5k/month for single-channel execution and scale based on scope. We'll give you a transparent breakdown after the growth audit — no hidden fees.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      "Yes. We've helped pre-seed to Series B companies build brand presence from zero. If you have product-market traction and need growth support, we're a good fit.",
  },
  {
    question: "What tools and platforms do you use?",
    answer:
      "Our stack includes Figma for design, Webflow and custom code for builds, Ahrefs and Surfer for SEO, Buffer and Typefully for social, and AI tools for content ideation and AEO optimization.",
  },
  {
    question: "Can we start with just one service?",
    answer:
      "Absolutely. Many clients start with content & SEO or brand & web, then expand as results come in. We'll recommend the highest-impact starting point during your audit.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const FAQSection = () => {
  return (
    <section id="faq" className="py-32 bg-background border-t border-border">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[hsl(var(--sage))] mb-3 block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            Common questions
          </h2>
          <p className="text-muted-foreground text-base">
            Everything you need to know before getting started.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:text-[hsl(var(--sage))] transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
