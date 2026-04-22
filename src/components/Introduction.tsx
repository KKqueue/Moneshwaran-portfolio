import { motion } from "motion/react";

export default function Introduction() {
  return (
    <section className="py-24 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold leading-tight"
            >
              I build <span className="text-brand-red">bold identities</span> for forward-thinking brands that value digital excellence and visual impact.
            </motion.h2>
          </div>
          <div className="md:col-span-4 flex flex-col gap-6">
             <div className="flex flex-col">
                <span className="font-mono text-xs uppercase tracking-widest text-white/40 mb-1">Located In</span>
                <span className="text-xl font-medium tracking-tight">Mettur, Erode District, Tamil Nadu</span>
             </div>
             <div className="flex flex-col">
                <span className="font-mono text-xs uppercase tracking-widest text-white/40 mb-1">Identity</span>
                <span className="text-xl font-medium tracking-tight">Monesh Graphic Designer</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
