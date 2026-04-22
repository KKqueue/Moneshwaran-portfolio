export default function Footer() {
  return (
    <footer className="py-20 bg-brand-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20 text-center md:text-left">
           <div>
              <h2 className="text-4xl font-display font-black uppercase tracking-tighter mb-4">MONESH</h2>
              <p className="max-w-xs text-white/30 text-sm font-mono uppercase tracking-widest leading-relaxed">
                Design for brands that value digital excellence and visual impact.
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-mono text-xs uppercase tracking-[0.3em]">
              <div className="flex flex-col gap-4">
                 <span className="text-white/20 mb-2">Navigation</span>
                 <a href="#home" className="hover:text-brand-red transition-colors">Home</a>
                 <a href="#work" className="hover:text-brand-red transition-colors">Work</a>
                 <a href="#services" className="hover:text-brand-red transition-colors">Services</a>
                 <a href="#about" className="hover:text-brand-red transition-colors">About</a>
              </div>
              <div className="flex flex-col gap-4">
                 <span className="text-white/20 mb-2">Contact</span>
                 <a href="mailto:Moneshravi28@gmail.com" className="hover:text-brand-red transition-colors break-all">
                    Moneshravi28@gmail.com
                 </a>
              </div>
           </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <span className="text-white/20 font-mono text-[10px] uppercase tracking-widest">
             © 2026 Monesh Portfolio. All rights reserved.
           </span>
           <div className="flex gap-8 text-white/20 font-mono text-[10px] uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
           </div>
        </div>
      </div>
      
      {/* Massive Background Logo */}
      <div className="mt-20 opacity-[0.02] text-[15vw] font-display font-black tracking-tighter leading-none text-center select-none">
          MONESH
      </div>
    </footer>
  );
}
