import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { FAQ as FAQType } from "../types";

const faqs: FAQType[] = [
  {
    question: "What is your typical project timeline?",
    answer: "Most branding and UI/UX projects take between 4 to 8 weeks, depending on complexity. We prioritize quality over speed to ensure a premium result.",
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, we provide 3 months of complimentary support for all design implementations to ensure everything is working perfectly.",
  },
  {
    question: "How do you handle project payments?",
    answer: "We typically work with a 50% upfront deposit and 50% upon project completion or defined milestones.",
  },
  {
    question: "Can I request custom visual elements?",
    answer: "Absolutely. I specialize in creating bespoke 3D elements, custom typography, and unique visual assets tailored specifically to your brand.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-brand-black">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-brand-red mb-4 block">Common Queries</span>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold uppercase tracking-tighter">
                Frequently Asked
            </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-white/10 overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="text-lg md:text-xl font-display font-bold uppercase tracking-tight">
                  {faq.question}
                </span>
                <div className="ml-4 flex-shrink-0">
                  {openIndex === idx ? <Minus className="text-brand-red" /> : <Plus />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 md:p-8 pt-0 text-white/50 leading-relaxed border-t border-white/10 mt-2 mx-8">
                       {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
