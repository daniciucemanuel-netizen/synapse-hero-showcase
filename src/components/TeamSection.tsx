import { motion } from "framer-motion";

const team = [
  { name: "Emanuel Daniciuc", initials: "ED", role: "Strategy & Growth" },
  { name: "Alex Rus", initials: "AR", role: "Content & SEO" },
  { name: "Cris Crisan", initials: "CC", role: "Brand & Design" },
];

const TeamSection = () => {
  return (
    <section id="about" className="py-32 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[hsl(var(--sage))] mb-3 block">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              Built by operators,<br />not consultants.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-end"
          >
            <p className="text-muted-foreground text-base leading-relaxed max-w-lg">
              We started Norel Studio because we saw too many agencies selling decks instead of shipping work. Our team has scaled brands from zero to millions in reach across Web3, SaaS, and consumer tech — combining AI-powered tooling with hands-on execution.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-secondary border border-border mb-5 flex items-center justify-center text-sm font-medium text-muted-foreground tracking-wide">
                {member.initials}
              </div>
              <h3 className="text-foreground font-semibold tracking-tight text-sm">
                {member.name}
              </h3>
              <span className="text-muted-foreground text-xs mt-1">{member.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
