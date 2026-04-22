import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="absolute inset-0 noise"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-red/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="text-brand-red font-mono text-sm uppercase tracking-[0.3em] font-medium">
            Aspiring Graphic Designer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[13vw] md:text-[9vw] leading-[0.8] font-display font-extrabold uppercase tracking-tighter select-none whitespace-nowrap"
        >
          MON<span className="text-brand-red">ESH</span>
        </motion.h1>

        <div className="mt-12 flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-md"
          >
            <p className="text-lg md:text-xl text-white/60 leading-relaxed">
              Crafting futuristic visual identities and high-end digital experiences 
              that push the boundaries of creative storytelling.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a
              href="#work"
              className="group relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/20 hover:border-brand-red hover:bg-brand-red transition-all duration-500 overflow-hidden"
            >
              <ArrowDownRight className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:-rotate-45 transition-transform duration-500" />
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
         <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">Scroll Down</span>
         <div className="w-[1px] h-12 bg-gradient-to-b from-brand-red to-transparent"></div>
      </div>
    </section>
  );
}
