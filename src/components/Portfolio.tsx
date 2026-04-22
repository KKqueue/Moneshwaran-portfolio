import { motion } from "motion/react";
import { Project } from "../types";
import { ArrowUpRight } from "lucide-react";

const projects: Project[] = [
  {
    id: "1",
    title: "Planet Restro Cafe",
    category: "Branding & Identity",
    image: "/img/PLANET RESTRO CAFE.jpg.jpeg", // Astronaut/Cosmic theme
    featured: true,
  },
  {
    id: "2",
    title: "Creative Poster Series",
    category: "Visual Identity",
    image: "/img/SE_Academy.jpg.jpeg",
  },
  {
    id: "3",
    title: "Minimal Identity System",
    category: "Graphic Design",
    image: "/img/orange juice.jpg.jpeg",
  },
  {
    id: "4",
    title: "Product Packaging Design",
    category: "Packaging",
    image: "/img/juicy squad flyer.jpg.jpeg",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-32 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-brand-red mb-4 block">Selected Works</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold uppercase tracking-tighter">
              Latest <br />Portfolio
            </h2>
          </div>
          <p className="max-w-sm text-white/50 text-lg leading-relaxed">
            A curation of my most impactful projects across branding, visual identity, and high-end digital design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-brand-grey aspect-[4/5]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-brand-red mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-display font-bold uppercase tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-colors duration-300">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
