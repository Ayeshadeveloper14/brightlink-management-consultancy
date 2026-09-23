import React from 'react';
import { Users2 } from 'lucide-react';

interface B2BReferralProps {
  onOpenReferralModal: () => void;
}

export const B2BReferral: React.FC<B2BReferralProps> = ({ onOpenReferralModal }) => {
  return (
    <section className="w-full py-16 md:py-20 bg-[#161719] text-white text-center">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
          Grow Together With Our B2B Referral Program
        </h2>

        <p className="text-xs sm:text-[13px] text-neutral-300 leading-relaxed font-normal max-w-3xl mx-auto mb-8">
          Partner with Brightlink through our structured B2B and Corporate Referral Program. Refer clients who need Business Setup, Golden Visa, Family Visa, Attestation, Vat &amp; Corporate Tax, PRO, or Corporate Services and benefit from a transparent referral structure, dedicated partner support, and long-term collaboration opportunities.
        </p>

        <button
          onClick={onOpenReferralModal}
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#c81928] hover:bg-[#b01422] text-white font-semibold text-xs sm:text-sm tracking-wide shadow-sm hover:shadow-md transition-all active:scale-[0.99] cursor-pointer"
        >
          <Users2 className="w-4 h-4" />
          <span>Become a Referral Partner ➔</span>
        </button>

      </div>
    </section>
  );
};
