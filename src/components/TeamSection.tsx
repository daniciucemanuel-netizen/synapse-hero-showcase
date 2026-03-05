import { motion } from "framer-motion";

const team = [
  { name: "Alex Rivera", role: "Co-Founder & Strategist" },
  { name: "Jordan Kale", role: "Lead Developer" },
  { name: "Sam Oduya", role: "Creative Director" },
];

const TeamSection = () => {
  return (
    <section id="about" className="py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            The Team Behind the Tech
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            We're a dedicated, agile trio obsessed with performance, design, and measurable growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="text-center"
            >
              <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-5 flex items-center justify-center text-2xl font-bold text-muted-foreground">
                {member.name.charAt(0)}
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
