import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Services from "./components/Services";
import StatsAndClients from "./components/StatsAndClients";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";

export default function App() {
  // Smooth scroll behavior
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href) return;
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-black text-white selection:bg-brand-red selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Portfolio />
        <Services />
        <About />
        <StatsAndClients />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
