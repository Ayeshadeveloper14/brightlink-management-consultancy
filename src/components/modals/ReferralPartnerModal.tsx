import React, { useState } from 'react';
import { X, Users2, CheckCircle2 } from 'lucide-react';
import { openSafeLink } from '../../utils/safeLinks';

interface ReferralPartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReferralPartnerModal: React.FC<ReferralPartnerModalProps> = ({ isOpen, onClose }) => {
  const [partnerType, setPartnerType] = useState('Real Estate Broker / Agency');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      const msg = encodeURIComponent(
        `Hello Brightlink Management, I would like to join the B2B Corporate Referral Program:\n` +
        `Partner Name: ${name}\n` +
        `Company: ${company || 'Individual'}\n` +
        `Industry: ${partnerType}\n` +
        `Phone: ${phone}\n` +
        `Email: ${email}\n` +
        `Please send me the B2B commission structure.`
      );
      openSafeLink(`https://wa.me/971566556645?text=${msg}`);
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#141518] text-white p-5 flex items-center justify-between border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <Users2 className="w-5 h-5 text-[#c81928]" />
            <div>
              <h3 className="text-base font-bold tracking-tight">
                Join B2B Referral Program
              </h3>
              <p className="text-[11px] text-neutral-400">
                Partner with Brightlink Management Consultancy
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded text-neutral-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h4 className="text-base font-bold text-neutral-900">
              Application Submitted!
            </h4>
            <p className="text-xs text-neutral-600">
              Opening WhatsApp to provide your Partner Referral ID...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-3.5 text-xs">
            <div>
              <label className="block font-semibold text-neutral-800 mb-1">
                Your Sector / Specialty *
              </label>
              <select
                value={partnerType}
                onChange={(e) => setPartnerType(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-neutral-300 bg-white"
              >
                <option value="Real Estate Broker / Agency">Real Estate Broker / Agency</option>
                <option value="Legal & Law Firm">Legal &amp; Law Firm</option>
                <option value="Accounting & Audit Practice">Accounting &amp; Audit Practice</option>
                <option value="Wealth Management / Family Office">Wealth Management / Family Office</option>
                <option value="HR / Relocation Agency">HR / Relocation Agency</option>
                <option value="Independent Consultant">Independent Consultant</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-neutral-800 mb-1">
                Contact Person Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="w-full px-3.5 py-2 rounded-lg border border-neutral-300"
              />
            </div>

            <div>
              <label className="block font-semibold text-neutral-800 mb-1">
                Company / Agency Name (Optional)
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. Prestige Properties Dubai"
                className="w-full px-3.5 py-2 rounded-lg border border-neutral-300"
              />
            </div>

            <div>
              <label className="block font-semibold text-neutral-800 mb-1">
                WhatsApp Phone Number *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+971 50 123 4567"
                className="w-full px-3.5 py-2 rounded-lg border border-neutral-300"
              />
            </div>

            <div>
              <label className="block font-semibold text-neutral-800 mb-1">
                Business Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="partner@company.com"
                className="w-full px-3.5 py-2 rounded-lg border border-neutral-300"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg bg-[#c81928] hover:bg-[#b01422] text-white font-bold text-xs tracking-wide shadow-xs transition-colors cursor-pointer"
            >
              Register As Referral Partner
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
