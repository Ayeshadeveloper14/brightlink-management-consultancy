import React from 'react';
import { Clock, Globe2, TrendingUp, Sparkles, Award } from 'lucide-react';

export const WhatIsVisa: React.FC = () => {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200/80 overflow-hidden">
      {/* Subtle luxury ambient background glows */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]"
      />
      <div 
        aria-hidden="true" 
        className="absolute -top-24 right-1/4 w-96 h-96 bg-red-100/30 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold tracking-wider uppercase mb-5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Official Residency Program</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6">
            What is a UAE{' '}
            <span className="relative inline-block text-[#c81928]">
              Golden Visa?
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-gradient-to-r from-[#c81928] via-[#e53848] to-[#c81928]/40 rounded-full"></span>
            </span>
          </h2>

          <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-amber-50 border border-amber-300/80 text-amber-900 text-[11px] font-bold tracking-wide flex items-center gap-1.5 shadow-2xs">
              <Award className="w-3 h-3 text-amber-600" />
              <span>150,000+ Visas Issued Milestone</span>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal text-pretty pt-1">
              The UAE Golden Visa is a long-term residency visa introduced by the UAE government to attract and retain talented individuals and investors from around the world. This visa grants a 10-year residency permit to qualified individuals. The program aims to enhance the UAE's economic development and global competitiveness by providing stability and opportunities for residents. Up until the year 2023, more than 150,000 Golden Visas have been issued in the UAE.
            </p>
          </div>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 items-stretch">
          
          {/* Card 1: Long-Term Stability */}
          <div className="group relative bg-white rounded-3xl p-8 lg:p-9 border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Top decorative gradient border accent */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-500 to-[#c81928] transform origin-left transition-transform duration-300 group-hover:scale-x-100" />
            
            <div>
              {/* Pillar Counter & Icon Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700 shadow-xs group-hover:bg-[#c81928] group-hover:text-white group-hover:border-[#c81928] transition-colors duration-300">
                  <Clock className="w-7 h-7 stroke-[1.8]" />
                </div>
                <span className="text-xs font-black tracking-widest text-slate-400 uppercase bg-slate-100 px-3 py-1 rounded-full">
                  Pillar 01
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 tracking-tight group-hover:text-[#c81928] transition-colors duration-200">
                Long-Term Stability
              </h3>

              {/* Exact Text */}
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                With extended visa validity, the Golden Visa offers greater security for individuals and families. It enables long-term planning for careers, education, and investments, eliminating the stress of frequent visa renewals and ensuring peace of mind.
              </p>
            </div>

            {/* Bottom accent indicator */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>10-Year Renewable Security</span>
            </div>
          </div>

          {/* Card 2: Global Talent Attraction */}
          <div className="group relative bg-white rounded-3xl p-8 lg:p-9 border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Top decorative gradient border accent */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 transform origin-left transition-transform duration-300 group-hover:scale-x-100" />
            
            <div>
              {/* Pillar Counter & Icon Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-700 shadow-xs group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-colors duration-300">
                  <Globe2 className="w-7 h-7 stroke-[1.8]" />
                </div>
                <span className="text-xs font-black tracking-widest text-slate-400 uppercase bg-slate-100 px-3 py-1 rounded-full">
                  Pillar 02
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors duration-200">
                Global Talent Attraction
              </h3>

              {/* Exact Text */}
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                The program is designed to attract skilled professionals and top talent across key sectors. By offering long-term residency, the UAE creates an environment where global experts can contribute, grow, and thrive within a supportive ecosystem.
              </p>
            </div>

            {/* Bottom accent indicator */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              <span>Worldwide Executive Network</span>
            </div>
          </div>

          {/* Card 3: Economic Growth */}
          <div className="group relative bg-white rounded-3xl p-8 lg:p-9 border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Top decorative gradient border accent */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 transform origin-left transition-transform duration-300 group-hover:scale-x-100" />
            
            <div>
              {/* Pillar Counter & Icon Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-700 shadow-xs group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-colors duration-300">
                  <TrendingUp className="w-7 h-7 stroke-[1.8]" />
                </div>
                <span className="text-xs font-black tracking-widest text-slate-400 uppercase bg-slate-100 px-3 py-1 rounded-full">
                  Pillar 03
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 tracking-tight group-hover:text-emerald-600 transition-colors duration-200">
                Economic Growth
              </h3>

              {/* Exact Text */}
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                Golden Visa holders bring valuable skills and investments that support national development. From entrepreneurs and scientists to creatives and students, the program plays a key role in building a diverse and competitive economy.
              </p>
            </div>

            {/* Bottom accent indicator */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <span>High-Yield Investment Hub</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
