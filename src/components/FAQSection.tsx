import { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, MessageSquare } from 'lucide-react';
import { FAQ } from '../types';

interface FAQSectionProps {
  faqs: FAQ[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-16 md:py-24 bg-brand-pink-light/25 border-t border-brand-pink-rose/10 relative">
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pink-soft border border-brand-pink-rose text-brand-pink-deep text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="h-3 w-3" />
            <span>Support Centre</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-black tracking-tight text-luxury-charcoal">
            Frequently Asked Questions 💜✨
          </h2>
          <p className="text-sm text-stone-500 font-medium leading-relaxed">
            Everything you need to know about wrist sizing, flat-rate shipping in Pakistan, secure payments, and jewelry care.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div 
                key={faq.id}
                className="bg-white rounded-2xl border transition-all duration-300 overflow-hidden"
                style={{
                  borderColor: isExpanded ? 'rgba(173, 20, 87, 0.4)' : 'rgba(251, 207, 232, 0.25)',
                  boxShadow: isExpanded ? '0 10px 20px -10px rgba(173, 20, 87, 0.12)' : 'none'
                }}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 group cursor-pointer"
                  id={`faq-btn-${faq.id}`}
                >
                  <span className={`text-sm md:text-base font-serif font-bold tracking-wide transition-colors duration-200 ${isExpanded ? 'text-brand-pink-deep' : 'text-stone-800 group-hover:text-brand-pink-deep'}`}>
                    {faq.question}
                  </span>
                  <span className={`p-1.5 rounded-full ${isExpanded ? 'bg-brand-pink-soft text-brand-pink-deep' : 'bg-stone-50 text-stone-400 group-hover:bg-brand-pink-soft/40 group-hover:text-brand-pink-deep'} transition-all`}>
                    {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </span>
                </button>

                {/* Accordion Content */}
                <div 
                  className={`transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-72 border-t border-brand-pink-rose/10 opacity-100 p-5' : 'max-h-0 opacity-0 pointer-events-none'}`}
                  id={`faq-content-${faq.id}`}
                >
                  <p className="text-xs md:text-sm text-stone-600 font-sans leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Contact CTA */}
        <div className="mt-12 text-center p-6 bg-white/50 border border-brand-pink-rose/15 rounded-2xl glass-panel max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="font-serif font-bold text-sm text-stone-800">Still have questions?</h4>
            <p className="text-[11px] text-stone-500 font-medium">Get in touch directly with our support team on WhatsApp for lightning-fast replies!</p>
          </div>
          <a
            href="https://wa.me/923095590059?text=Hi%20Luki%20Charms%20I%20have%20a%20question%20about%20your%20bracelets!"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-brand-pink-vibrant text-white text-xs font-bold rounded-full flex items-center gap-1.5 shadow-md shadow-brand-pink-rose/40 hover:bg-brand-pink-deep transition cursor-pointer"
          >
            <span>Ask on WhatsApp</span>
            <Sparkles className="h-3 w-3 animate-pulse" />
          </a>
        </div>

      </div>
    </section>
  );
}
