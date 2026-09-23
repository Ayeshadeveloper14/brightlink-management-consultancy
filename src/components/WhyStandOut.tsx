import React from 'react';
import { CheckCircle2, Globe2, ArrowRight, ShieldCheck } from 'lucide-react';

interface WhyStandOutProps {
  onOpenEligibility: () => void;
}

export const WhyStandOut: React.FC<WhyStandOutProps> = ({ onOpenEligibility }) => {
  const points = [
    {
      title: "10-Year Renewable Residency",
      desc: "Enjoy long-term UAE residency with greater stability and fewer renewal cycles than many traditional residence programmes."
    },
    {
      title: "Multiple Eligibility Routes",
      desc: "Qualify through property investment, public investment, fixed deposits, entrepreneurship, or eligible professional and talent categories."
    },
    {
      title: "Property Investment from AED 2 Million",
      desc: "Property investors may qualify with eligible UAE real estate valued at AED 2 million or more, subject to authority requirements."
    },
    {
      title: "Family Sponsorship",
      desc: "Eligible spouses, children, and parents can be sponsored, allowing families to establish their long-term future together in the UAE."
    },
    {
      title: "No Standard Six-Month Absence Restriction",
      desc: "Golden Visa holders have greater flexibility to spend extended periods outside the UAE without losing their residency."
    },
    {
      title: "Business & Lifestyle Advantage",
      desc: "Establish your base in a globally connected, business-friendly environment with access to the UAE's growing investment and commercial opportunities."
    }
  ];

  return (
    <section id="why-standout" className="relative w-full py-20 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden">
      {/* Subtle luxury ambient background glows */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-10 left-1/3 w-96 h-96 bg-red-100/20 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold tracking-wider uppercase mb-5 shadow-xs">
            <Globe2 className="w-3.5 h-3.5 text-amber-400" />
            <span>GLOBAL ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6">
            Why the{' '}
            <span className="relative inline-block text-[#c81928]">
              UAE Golden Visa
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-gradient-to-r from-[#c81928] via-[#e53848] to-[#c81928]/40 rounded-full"></span>
            </span>{' '}
            Stands Out Globally
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal text-pretty max-w-2xl mx-auto">
            Compared with residency-by-investment programmes in countries such as Portugal, Malta, and the United States, the UAE Golden Visa offers a flexible pathway to long-term residency for investors, entrepreneurs, skilled professionals, and their families.
          </p>
        </div>

        {/* Benefits Grid (Executive 2-column or 3-column cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 mb-14">
          {points.map((pt, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white/90 hover:bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-xl hover:shadow-slate-200/70 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 text-left"
            >
              <div className="shrink-0 mt-1">
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200/70 flex items-center justify-center text-[#c81928] group-hover:bg-[#c81928] group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 fill-current group-hover:fill-white text-white group-hover:text-[#c81928] transition-colors" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#c81928] transition-colors tracking-tight">
                    {pt.title}
                  </h3>
                  <span className="text-[11px] font-black text-slate-300 group-hover:text-slate-500 transition-colors">
                    0{idx + 1}
                  </span>
                </div>
                <p className="text-xs sm:text-[14px] leading-relaxed text-slate-600 font-normal">
                  {pt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Console */}
        <div className="flex flex-col items-center justify-center text-center">
          <button
            onClick={onOpenEligibility}
            className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#c81928] to-[#a81420] hover:from-[#d81c2d] hover:to-[#b71624] text-white font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-red-600/20 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-200 active:scale-[0.98] cursor-pointer"
          >
            <span>Ready To Start Your Journey?</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Fast-Track Processing • 100% Confidential Support</span>
          </div>
        </div>

      </div>
    </section>
  );
};
