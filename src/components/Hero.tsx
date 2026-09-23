import React from 'react';
import { Calculator, Star, CheckCircle, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import heroVisaCardImg from '../assets/images/hero_golden_visa_card_1790105562987.jpg';

interface HeroProps {
  onOpenCalculator: () => void;
  onOpenEligibility: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenCalculator,
  onOpenEligibility
}) => {
  return (
    <section className="relative w-full bg-[#fbfcfd] pt-10 pb-16 lg:py-20 border-b border-slate-200/80 overflow-hidden">
      {/* Premium subtle background ornamentation */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:28px_28px] opacity-40" 
      />
      <div 
        aria-hidden="true" 
        className="absolute -top-32 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-red-100/40 via-amber-50/30 to-transparent rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute -bottom-24 -left-20 w-[450px] h-[450px] bg-gradient-to-tr from-slate-100/60 to-transparent rounded-full blur-2xl pointer-events-none" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* 10-Year Golden Residency Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-amber-400/15 to-amber-500/10 border border-amber-500/30 text-amber-900 text-xs font-bold tracking-wide mb-6 shadow-xs backdrop-blur-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>10-Year UAE Golden Residency</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-slate-900 tracking-tight leading-[1.12] mb-6 text-balance">
              Secure Your Future with{' '}
              <br className="hidden sm:inline" />
              Golden Visa in the{' '}
              <span className="relative inline-block text-[#c81928]">
                UAE
                <span className="absolute left-0 -bottom-1 w-full h-[4px] bg-gradient-to-r from-[#c81928] via-[#e53848] to-[#c81928]/40 rounded-full"></span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mb-8 text-pretty">
              Live, work, invest, and build your future in the UAE with long-term residency, family sponsorship, and greater freedom. Check and apply for Golden Visa UAE!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-7 w-full sm:w-auto">
              {/* Calculate Visa Cost button */}
              <button
                onClick={onOpenCalculator}
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#c81928] to-[#a81420] hover:from-[#d81c2d] hover:to-[#b71624] text-white font-bold text-sm tracking-wide shadow-lg shadow-red-600/20 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <Calculator className="w-4 h-4 transition-transform group-hover:rotate-6" />
                <span>Calculate Visa Cost</span>
                <ArrowRight className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Free Eligibility Check button */}
              <button
                onClick={onOpenEligibility}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-black text-white font-semibold text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] cursor-pointer border border-slate-800"
              >
                <span>Free Eligibility Check</span>
                <ShieldCheck className="w-4 h-4 text-emerald-400 transition-transform group-hover:scale-110" />
              </button>
            </div>

            {/* Trust Bullet */}
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-lg bg-slate-100/80 border border-slate-200/80 text-xs text-slate-600 font-semibold tracking-wide">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>100% Free Consultation</span>
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5">
                <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                <span>VIP Services</span>
              </span>
            </div>
          </div>

          {/* Right Column: Card Preview & Quick Action Card */}
          <div className="lg:col-span-5 flex flex-col items-center z-10">
            <div className="w-full max-w-[430px] bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/70 overflow-hidden transition-all duration-300 hover:shadow-slate-300 hover:-translate-y-1">
              
              {/* Golden Visa Card Image Artwork Showcase */}
              <div className="relative w-full aspect-[16/11] bg-slate-950 overflow-hidden group">
                <img
                  src={heroVisaCardImg}
                  alt="UAE Golden Visa VIP Card Preview"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle vignette gradient for luxury feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30 pointer-events-none" />

                {/* Visual Glass Overlay Badge */}
                <div className="absolute top-3.5 left-3.5 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] font-black text-amber-300 tracking-wider uppercase border border-amber-400/40 shadow-lg flex items-center gap-1.5">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>Official 10-Year Permit</span>
                </div>
              </div>

              {/* Instant Eligibility Box */}
              <div className="p-6 sm:p-7 text-center flex flex-col items-center bg-white">
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-2">
                  Instant Eligibility Check
                </h3>
                
                <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-5 max-w-xs">
                  Share your details and receive a quick eligibility assessment and personalised quotation.
                </p>

                {/* Fast Response Indicator */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-bold mb-5 shadow-2xs">
                  <CheckCircle className="w-4 h-4 fill-emerald-500 text-white" />
                  <span>Fast Response Within Minutes</span>
                </div>

                {/* WhatsApp Chat CTA Button */}
                <a
                  href="https://wa.me/971566556645?text=Hello%20Brightlink%20Team%2C%20I%20would%20like%20to%20do%20an%20Instant%20Eligibility%20Check%20for%20the%20UAE%20Golden%20Visa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white font-extrabold text-sm tracking-wide shadow-md shadow-emerald-500/25 hover:shadow-lg hover:shadow-emerald-500/35 transition-all duration-200 active:scale-[0.98] group cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white transition-transform group-hover:scale-110" />
                  <span>Chat with an Expert</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
