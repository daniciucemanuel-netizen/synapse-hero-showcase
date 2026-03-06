import { motion } from "framer-motion";

const team = [
  { name: "Emanuel Daniciuc", initials: "ED" },
  { name: "Alex Rus", initials: "AR" },
  { name: "Cris Crisan", initials: "CC" },
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
            The Team
          </h2>
        </motion.div>

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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
