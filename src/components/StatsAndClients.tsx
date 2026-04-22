import { motion } from "motion/react";

const stats = [
  { label: "Dedication", value: "100%" },
  { label: "Live Projects", value: "07+" },
  { label: "Tools Mastered", value: "05+" },
  { label: "Client Satisfaction", value: "100%" },
];

export default function StatsAndClients() {
  return (
    <section className="py-32 bg-brand-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <span className="block text-4xl md:text-6xl font-display font-black text-white mb-2">{stat.value}</span>
              <span className="font-mono text-xs uppercase tracking-widest text-brand-red">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
