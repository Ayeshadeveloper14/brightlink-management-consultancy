import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { openSafeLink } from '../../utils/safeLinks';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultTopic
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(defaultTopic || '10-Year Golden Visa Consultation');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      const msg = encodeURIComponent(
        `Hello Brightlink Team, I submitted a consultation request:\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Email: ${email}\n` +
        `Service: ${service}\n` +
        `Notes: ${notes || 'Looking forward to expert advice.'}`
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
          <div>
            <h3 className="text-base font-bold tracking-tight">
              Get Personalised Advice At No Cost
            </h3>
            <p className="text-xs text-neutral-400">
              Brightlink VIP Management Consultancy
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-neutral-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h4 className="text-base font-bold text-neutral-900">
              Request Received!
            </h4>
            <p className="text-xs text-neutral-600">
              Redirecting you to our Senior Visa Advisor on WhatsApp...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-3.5 text-xs">
            <div>
              <label className="block font-semibold text-neutral-800 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alexander Vance"
                className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-[#c81928]"
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
                className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-[#c81928]"
              />
            </div>

            <div>
              <label className="block font-semibold text-neutral-800 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-[#c81928]"
              />
            </div>

            <div>
              <label className="block font-semibold text-neutral-800 mb-1">
                Service of Interest
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-[#c81928] bg-white text-xs"
              >
                <option value="10-Year Golden Visa (Property)">10-Year Golden Visa (Property AED 2M+)</option>
                <option value="10-Year Golden Visa (Executive)">10-Year Golden Visa (Executive / Salary AED 30k+)</option>
                <option value="Retirement Visa (5 Years)">Retirement Visa (5 Years)</option>
                <option value="Investor Visa (2 Years)">Investor Visa (2 Years)</option>
                <option value="Business Setup & Company Formation">Business Setup &amp; Company Formation</option>
                <option value="Family Sponsorship VIP">Family Sponsorship VIP</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-neutral-800 mb-1">
                Brief Details or Questions (Optional)
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Tell us about your property or profile..."
                className="w-full px-3.5 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:border-[#c81928]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg bg-[#c81928] hover:bg-[#b01422] text-white font-bold text-xs tracking-wide shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit &amp; Connect with Consultant</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
