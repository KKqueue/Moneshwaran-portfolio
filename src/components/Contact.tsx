import { motion } from "motion/react";
import { Mail, Github, Twitter, Instagram, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-brand-black relative">
       {/* Background accent */}
       <div className="absolute bottom-0 right-0 w-full h-full bg-brand-red opacity-[0.03] blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <div className="md:pr-10">
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-brand-red mb-6 block">Ready to start?</span>
            <h2 className="text-4xl lg:text-7xl font-display font-extrabold uppercase tracking-tighter leading-[0.9] mb-8">
              Let's <br />Work <br /><span className="text-brand-red italic underline decoration-white/20 underline-offset-8">Together</span>
            </h2>
            
            <div className="flex flex-col gap-8 mt-12 font-display font-bold uppercase tracking-widest">
                <a href="mailto:Moneshravi28@gmail.com" className="flex items-center gap-4 text-xl lg:text-2xl hover:text-brand-red transition-colors group break-all">
                    Moneshravi28@gmail.com
                    <ArrowRight className="group-hover:translate-x-2 transition-transform opacity-0 lg:group-hover:opacity-100 flex-shrink-0" />
                </a>
            </div>
          </div>

          <div className="bg-brand-grey/50 p-8 md:p-12 border border-white/5 backdrop-blur-sm">
             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="flex flex-col gap-2">
                       <label className="font-mono text-[10px] uppercase tracking-widest text-white/40">Name</label>
                       <input type="text" placeholder="Your Name" className="bg-brand-black border border-white/10 p-4 focus:border-brand-red outline-none transition-colors" />
                   </div>
                   <div className="flex flex-col gap-2">
                       <label className="font-mono text-[10px] uppercase tracking-widest text-white/40">Email</label>
                       <input type="email" placeholder="Your Email" className="bg-brand-black border border-white/10 p-4 focus:border-brand-red outline-none transition-colors" />
                   </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-white/40">Message</label>
                    <textarea rows={4} placeholder="How can we help?" className="bg-brand-black border border-white/10 p-4 focus:border-brand-red outline-none transition-colors resize-none"></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-brand-red text-white font-display font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-brand-black transition-all duration-500">
                    Send Proposal
                </button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
}
