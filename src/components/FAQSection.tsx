import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare, ArrowRight } from 'lucide-react';
import { FAQ_ITEMS } from '../data/websiteData';

interface FAQSectionProps {
  onOpenConsultation: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenConsultation }) => {
  // First item expanded by default as in screenshot
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative w-full py-20 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden">
      {/* Subtle luxury ambient background glows */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-10 left-10 w-96 h-96 bg-red-100/20 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          
          {/* Left Column: Heading and intro */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold tracking-wider uppercase mb-5 shadow-xs">
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Golden Visa FAQ</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.12] mb-5">
              Got{' '}
              <span className="relative inline-block text-[#c81928]">
                Questions?
                <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-gradient-to-r from-[#c81928] via-[#e53848] to-[#c81928]/40 rounded-full"></span>
              </span>
              <br />
              We're Here to Help.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8 text-pretty">
              Clear answers to the most common questions about UAE Golden Visa eligibility, property investment, family sponsorship, costs, and residency.
            </p>

            {/* Quick Consultation Prompt Box */}
            <div className="hidden lg:block p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                <MessageSquare className="w-4 h-4 text-[#c81928]" />
                <span>Need immediate guidance?</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Our Golden Visa consultants are available for personalized 1-on-1 eligibility assessments.
              </p>
              <button
                onClick={onOpenConsultation}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold tracking-wide transition-colors cursor-pointer"
              >
                <span>Ask A Consultant</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-8 space-y-3.5">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              
              return (
                <div
                  key={item.id}
                  className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                    isOpen && item.id === 'faq-1'
                      ? 'border-[#c81928]/50 bg-white shadow-lg shadow-red-950/5 ring-1 ring-[#c81928]/20'
                      : isOpen
                      ? 'border-slate-300 bg-white shadow-md'
                      : 'border-slate-200/90 bg-white hover:border-slate-300 hover:shadow-2xs'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className={`w-full flex items-center justify-between px-6 py-4.5 text-left transition-colors cursor-pointer ${
                      isOpen && item.id === 'faq-1'
                        ? 'bg-gradient-to-r from-[#c81928] to-[#b01422] text-white font-bold'
                        : isOpen
                        ? 'bg-slate-50 text-slate-900 font-bold'
                        : 'bg-white text-slate-800 hover:bg-slate-50/80 font-semibold'
                    }`}
                  >
                    <span className="text-sm sm:text-[15px] pr-4 tracking-tight leading-snug">
                      {item.question}
                    </span>
                    <div className="shrink-0">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen && item.id === 'faq-1'
                          ? 'bg-white/20 text-white rotate-180'
                          : isOpen
                          ? 'bg-slate-200 text-slate-800 rotate-180'
                          : 'bg-slate-100 text-slate-500'
                      }`}>
                        <ChevronDown className="w-4 h-4 stroke-[2.2]" />
                      </div>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 py-5 bg-white text-sm sm:text-[14px] text-slate-600 leading-relaxed border-t border-slate-100">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Bottom Dark Red CTA Banner */}
            <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#990e1b] via-[#c81928] to-[#990e1b] text-white p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl shadow-red-950/20">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-center sm:text-left">
                Still Have Any Questions?
              </span>
              <button
                onClick={onOpenConsultation}
                className="shrink-0 px-7 py-3 rounded-xl bg-white hover:bg-slate-100 text-[#a50e1d] font-black text-xs sm:text-sm tracking-wide shadow-md transition-all active:scale-95 cursor-pointer"
              >
                Contact Us
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
