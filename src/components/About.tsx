import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-32 bg-brand-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50%] h-full bg-brand-red opacity-[0.02] -skew-x-12 translate-x-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
             <span className="font-mono text-xs uppercase tracking-[0.4em] text-brand-red mb-6 block">More About Me</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold uppercase tracking-tighter mb-8">
              Designer <br />Of The <br />Future.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
             <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-8">
               I am Monesh, an emerging graphic designer based in Mettur. I am passionate about creating clean, impactful visuals that help brands communicate their message effectively.
             </p>
             <p className="text-lg text-white/50 leading-relaxed mb-10">
               Currently at an intermediate level, I am constantly exploring new design trends and refining my technical skills in industry-standard tools. My approach focuses on clarity, balance, and modern aesthetics, ensuring every design is both functional and visually engaging.
             </p>
             
             <div className="flex gap-12 border-t border-white/10 pt-10">
                <div>
                   <span className="block text-3xl font-display font-bold text-brand-red mb-2">02+</span>
                   <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">Years Exp.</span>
                </div>
                <div>
                   <span className="block text-3xl font-display font-bold text-brand-red mb-2">40+</span>
                   <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">Projects</span>
                </div>
                <div>
                   <span className="block text-3xl font-display font-bold text-brand-red mb-2">15+</span>
                   <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">Clients</span>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
