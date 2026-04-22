import { motion } from "motion/react";
import { Service } from "../types";
import { Layers, Monitor, PenTool, Zap } from "lucide-react";

const services: Service[] = [
  {
    id: "s1",
    title: "Branding & Identity",
    description: "Creating memorable logos and basic brand guidelines that establish a solid visual foundation for small businesses.",
    icon: "Layers",
  },
  {
    id: "s2",
    title: "Social Media Design",
    description: "Designing engaging posts, templates, and banners that maintain a consistent aesthetic across all digital platforms.",
    icon: "Monitor",
  },
  {
    id: "s3",
    title: "Marketing Materials",
    description: "Developing effective flyers, brochures, and posters that communicate your key messages to your target audience.",
    icon: "PenTool",
  },
  {
    id: "s4",
    title: "Digital Illustration",
    description: "Crafting custom icons and graphic elements that add a unique touch to your digital products and presentations.",
    icon: "Zap",
  },
];

const IconMap: { [key: string]: any } = {
  Layers,
  Monitor,
  PenTool,
  Zap,
};

export default function Services() {
  return (
    <section id="services" className="py-32 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-brand-red mb-4 block">Our Expertise</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold uppercase tracking-tighter">
                Services
            </h2>
        </div>

        <div className="space-y-0">
          {services.map((service, idx) => {
            const Icon = IconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group border-b border-white/10 hover:bg-brand-red transition-all duration-500 py-12 px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 cursor-pointer overflow-hidden relative"
              >
                <div className="flex items-center gap-8 relative z-10">
                   <span className="text-white/20 font-mono text-sm group-hover:text-white/50 transition-colors">0{idx + 1}</span>
                   <div className="p-4 bg-brand-grey group-hover:bg-white/20 transition-colors">
                      <Icon className="w-8 h-8 text-brand-red group-hover:text-white transition-colors" />
                   </div>
                   <h3 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight group-hover:pl-4 transition-all duration-500">
                     {service.title}
                   </h3>
                </div>
                <p className="max-w-md text-white/40 group-hover:text-white/80 transition-colors text-lg relative z-10">
                   {service.description}
                </p>
                {/* Background Text reveal on hover */}
                <div className="absolute top-1/2 right-10 -translate-y-1/2 text-[10vw] font-display font-black text-white/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-700 uppercase leading-none select-none">
                    {service.title.split(' ')[0]}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
