import React from 'react';
import { PhoneCall, MessageSquare, Sparkles, ArrowRight } from 'lucide-react';

interface BannerCTAProps {
  onOpenConsultation: () => void;
}

export const BannerCTA: React.FC<BannerCTAProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative w-full py-20 lg:py-24 bg-slate-950 text-white text-center overflow-hidden border-t border-b border-slate-800">
      {/* Ambient background aura */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-red-900/30 via-amber-900/20 to-red-900/30 blur-3xl rounded-full pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-25" 
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>ZERO COMMITMENT ASSESSMENT</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15] mb-5 text-balance">
          Find Out Today Whether You Qualify
        </h2>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto mb-10 text-pretty">
          Share your details on WhatsApp to receive a written eligibility assessment, a clear government-fee breakdown, and our service fee before you make any commitment.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#c81928] to-[#a81420] hover:from-[#d81c2d] hover:to-[#b71624] text-white font-bold text-sm tracking-wide shadow-xl shadow-red-950/40 hover:shadow-2xl transition-all duration-200 active:scale-[0.98] cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Free Consultation</span>
            <ArrowRight className="w-4 h-4 ml-0.5" />
          </button>

          <a
            href="https://wa.me/971566556645?text=Hello%20Brightlink%20Team%2C%20I%20would%20like%20to%20know%20whether%20I%20qualify%20for%20the%20UAE%20Golden%20Visa."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 hover:text-white font-semibold text-sm tracking-wide border border-slate-700/80 shadow-md transition-all duration-200 active:scale-[0.98] cursor-pointer group"
          >
            <MessageSquare className="w-4 h-4 text-[#25d366] transition-transform group-hover:scale-110" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <p className="text-xs sm:text-[13px] text-slate-400 font-medium max-w-xl mx-auto">
          Turn your UAE residency dreams into reality with expert support from consultation to approval.
        </p>

      </div>
    </section>
  );
};
