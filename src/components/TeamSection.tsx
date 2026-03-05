import { motion } from "framer-motion";

const team = [
  { name: "Alex Rivera", role: "Co-Founder & Strategist", initials: "AR" },
  { name: "Jordan Kale", role: "Lead Developer", initials: "JK" },
  { name: "Sam Oduya", role: "Creative Director", initials: "SO" },
];

const TeamSection = () => {
  return (
    <section id="about" className="py-32 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Small Team. Big Results.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            No account managers. No layers. You work directly with the people who do the work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="w-20 h-20 rounded-lg bg-card border border-border mb-5 flex items-center justify-center text-base font-medium text-muted-foreground tracking-wide">
                {member.initials}
              </div>
              <h3 className="text-foreground font-semibold tracking-tight">{member.name}</h3>
              <p className="text-muted-foreground text-sm mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
