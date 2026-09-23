import React from 'react';
import { Sparkles, ArrowUpRight, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import villaImg from '../assets/images/property_card_villa_1790105637902.jpg';
import marinaImg from '../assets/images/property_card_marina_1790105656468.jpg';
import downtownImg from '../assets/images/property_card_downtown_1790105673116.jpg';

interface PropertyVisaProps {
  onSelectPathway?: (pathway: string) => void;
}

export const PropertyVisa: React.FC<PropertyVisaProps> = ({ onSelectPathway }) => {
  return (
    <section id="property-visa" className="relative w-full py-20 lg:py-28 bg-[#fafafa] border-t border-b border-slate-200/80 overflow-hidden">
      {/* Subtle luxury ambient background glows */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-12 left-10 w-96 h-96 bg-red-100/25 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100/25 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold tracking-wider uppercase mb-5 shadow-xs">
            <Building2 className="w-3.5 h-3.5 text-amber-400" />
            <span>PROPERTY VISA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6">
            Turn Your UAE Property Into a{' '}
            <span className="relative inline-block text-[#c81928]">
              Pathway to Residency.
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-gradient-to-r from-[#c81928] via-[#e53848] to-[#c81928]/40 rounded-full"></span>
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal text-pretty max-w-2xl mx-auto">
            Explore three property-based residency pathways in the UAE — from investor visas to long-term Golden and Retirement Visas. Choose the option that matches your property and goals.
          </p>
        </div>

        {/* 3 Pathway Showcase Cards with Integrated Architectural Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 items-stretch">
          
          {/* Card 1: Golden Visa */}
          <div 
            onClick={() => onSelectPathway?.('Golden Visa (10 Year)')}
            className="group relative bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-red-900/10 hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            {/* Top Accent Ribbon */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-500 via-[#c81928] to-[#a81420] z-20" />

            <div>
              {/* Card Image Showcase */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={villaImg}
                  alt="Luxury Palm Jumeirah Villa"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Floating Tag over Image */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-bold shadow-md">
                    <Sparkles className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span>Prime Real Estate</span>
                  </span>
                </div>

                {/* Duration Floating Badge */}
                <div className="absolute bottom-4 left-4 z-10">
                  <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#c81928] text-white text-xs font-extrabold tracking-wide shadow-lg border border-red-400/40">
                    10 Year
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 sm:p-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-[#c81928] transition-colors duration-200">
                    Golden Visa
                  </h3>
                  <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-[#c81928] group-hover:text-white transition-all duration-300 shadow-xs">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <div className="inline-block px-3 py-0.5 rounded-full bg-red-50 text-[#c81928] text-xs font-bold mb-4 border border-red-200/80">
                  10 Year
                </div>

                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                  Own property worth at least AED 2 Million. Ready, Off Plan or Mortgaged Accepted.
                </p>
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="px-7 sm:px-8 pb-7 pt-0 mt-auto">
              <div className="pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5 text-[#c81928]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>AED 2M+ Threshold</span>
                </span>
                <span className="text-slate-400 group-hover:text-slate-700 transition-colors">Select Pathway →</span>
              </div>
            </div>
          </div>

          {/* Card 2: Retirement Visa */}
          <div 
            onClick={() => onSelectPathway?.('Retirement Visa (5 Year)')}
            className="group relative bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-emerald-900/10 hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            {/* Top Accent Ribbon */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-700 z-20" />

            <div>
              {/* Card Image Showcase */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={marinaImg}
                  alt="Dubai Marina Waterfront Towers"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Floating Tag over Image */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-emerald-400/40 text-emerald-300 text-xs font-bold shadow-md">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>Retire in Luxury</span>
                  </span>
                </div>

                {/* Duration Floating Badge */}
                <div className="absolute bottom-4 left-4 z-10">
                  <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-emerald-600 text-white text-xs font-extrabold tracking-wide shadow-lg border border-emerald-400/40">
                    5 Year
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 sm:p-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors duration-200">
                    Retirement Visa
                  </h3>
                  <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-xs">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <div className="inline-block px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-4 border border-emerald-200/80">
                  5 Year
                </div>

                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                  Buying a property valued at AED 1 Million. Minimum Age requirement is 55 Years.
                </p>
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="px-7 sm:px-8 pb-7 pt-0 mt-auto">
              <div className="pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Age 55+ Eligible</span>
                </span>
                <span className="text-slate-400 group-hover:text-slate-700 transition-colors">Select Pathway →</span>
              </div>
            </div>
          </div>

          {/* Card 3: Investor Visa */}
          <div 
            onClick={() => onSelectPathway?.('Investor Visa (2 Year)')}
            className="group relative bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-sky-900/10 hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            {/* Top Accent Ribbon */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 z-20" />

            <div>
              {/* Card Image Showcase */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={downtownImg}
                  alt="Downtown Dubai Modern Skyline"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Floating Tag over Image */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-sky-400/40 text-sky-300 text-xs font-bold shadow-md">
                    <Building2 className="w-3 h-3 text-sky-400" />
                    <span>Commercial & Residential</span>
                  </span>
                </div>

                {/* Duration Floating Badge */}
                <div className="absolute bottom-4 left-4 z-10">
                  <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-sky-600 text-white text-xs font-extrabold tracking-wide shadow-lg border border-sky-400/40">
                    2 Year
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 sm:p-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-sky-700 transition-colors duration-200">
                    Investor Visa
                  </h3>
                  <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-xs">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <div className="inline-block px-3 py-0.5 rounded-full bg-sky-50 text-sky-700 text-xs font-bold mb-4 border border-sky-200/80">
                  2 Year
                </div>

                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                  No Minimum Property Value for Single &amp; AED 400,000 for Joint Ownership.
                </p>
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="px-7 sm:px-8 pb-7 pt-0 mt-auto">
              <div className="pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5 text-sky-700">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Flexible Ownership</span>
                </span>
                <span className="text-slate-400 group-hover:text-slate-700 transition-colors">Select Pathway →</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
