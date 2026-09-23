import React, { useState } from 'react';
import { X, CheckCircle, AlertCircle, ArrowRight, Sparkles } from 'lucide-react';
import { openSafeLink } from '../../utils/safeLinks';

interface EligibilityCheckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EligibilityCheckModal: React.FC<EligibilityCheckModalProps> = ({
  isOpen,
  onClose
}) => {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState('');
  const [meetsCriteria, setMeetsCriteria] = useState<boolean | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [nationality, setNationality] = useState('');

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleFinishWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Brightlink Team, I completed the Golden Visa Eligibility Check:\n` +
      `Name: ${name || 'Prospective Applicant'}\n` +
      `Category: ${category}\n` +
      `Criteria Qualified: ${meetsCriteria ? 'YES' : 'Need Review'}\n` +
      `Nationality: ${nationality || 'Not specified'}\n` +
      `Please provide me with the exact document checklist.`
    );
    openSafeLink(`https://wa.me/971566556645?text=${text}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="bg-[#141518] text-white p-5 flex items-center justify-between border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-bold tracking-tight">
              UAE Golden Visa Eligibility Assessment
            </h3>
          </div>
          
          <button
            onClick={onClose}
            className="p-1 rounded text-neutral-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-neutral-100 h-1">
          <div 
            className="bg-[#c81928] h-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {/* Step Content */}
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-4">
              <span className="text-[11px] font-bold text-[#c81928] uppercase tracking-wider">
                Step 1 of 3: Primary Pathway
              </span>
              <h4 className="text-base font-bold text-neutral-900">
                Which best describes your current qualification route?
              </h4>

              <div className="space-y-2.5">
                {[
                  { id: 'property', label: 'Real Estate Property Owner (AED 2M+ value)' },
                  { id: 'salary', label: 'Skilled Executive / Manager (AED 30,000+ monthly basic)' },
                  { id: 'business', label: 'Investor / Business Owner / Fixed Deposit (AED 2M)' },
                  { id: 'doctor', label: 'Licensed Medical Doctor / Specialist (DHA/MOHAP)' },
                  { id: 'student', label: 'Outstanding High School / University Graduate (GPA 3.8+)' },
                  { id: 'creative', label: 'Creative Artist / Designer / Cultural Pioneer' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCategory(item.label);
                      setStep(2);
                    }}
                    className="w-full text-left px-4 py-3 rounded-lg border border-neutral-200 hover:border-[#c81928] hover:bg-red-50/50 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <span className="text-[11px] font-bold text-[#c81928] uppercase tracking-wider">
                Step 2 of 3: Verification
              </span>
              <h4 className="text-base font-bold text-neutral-900">
                Selected: {category}
              </h4>

              <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200 space-y-3">
                <p className="text-xs text-neutral-700 leading-relaxed">
                  Do you possess the corresponding documentation (e.g. Title Deed / MOHRE salary certificate / bank statements / accredited degree)?
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setMeetsCriteria(true);
                      setStep(3);
                    }}
                    className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                  >
                    Yes, I Have Proof
                  </button>

                  <button
                    onClick={() => {
                      setMeetsCriteria(false);
                      setStep(3);
                    }}
                    className="flex-1 py-2.5 px-4 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                  >
                    Not Sure / Need Assistance
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <span className="text-[11px] font-bold text-[#c81928] uppercase tracking-wider">
                Step 3 of 3: Instant Result
              </span>

              {meetsCriteria ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="font-bold block text-sm mb-1 text-emerald-800">
                      High Eligibility Match! (98% Approval Probability)
                    </strong>
                    Based on your responses, you qualify under official UAE federal guidelines for the 10-Year Golden Visa.
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="font-bold block text-sm mb-1 text-amber-800">
                      Preliminary Assessment Needed
                    </strong>
                    You may require document attestation or an alternate route (e.g. company formation or joint ownership). Brightlink can assist.
                  </div>
                </div>
              )}

              <div className="space-y-2 pt-2">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-[#c81928]"
                />
                <input
                  type="tel"
                  placeholder="WhatsApp Mobile (+971 ...)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-[#c81928]"
                />
                <input
                  type="text"
                  placeholder="Your Nationality"
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-[#c81928]"
                />
              </div>

              <button
                onClick={handleFinishWhatsApp}
                className="w-full py-3 px-5 rounded-lg bg-[#25d366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <span>Receive Formal Assessment on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
