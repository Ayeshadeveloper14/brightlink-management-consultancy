import React, { useState } from 'react';
import { X, Calculator, Check, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { openSafeLink } from '../../utils/safeLinks';

interface VisaCostCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VisaCostCalculatorModal: React.FC<VisaCostCalculatorModalProps> = ({
  isOpen,
  onClose
}) => {
  const [category, setCategory] = useState<'property' | 'skilled' | 'investor' | 'talent'>('property');
  const [includeSpouse, setIncludeSpouse] = useState(false);
  const [childrenCount, setChildrenCount] = useState(0);
  const [parentsCount, setParentsCount] = useState(0);
  const [vipMedical, setVipMedical] = useState(true);
  const [location, setLocation] = useState<'inside' | 'outside'>('inside');

  if (!isOpen) return null;

  // Real UAE Government fee structure breakdown
  const baseGovernmentFee = category === 'property' ? 3850 : category === 'skilled' ? 3200 : 3500;
  const emiratesIdFee = 1150; // 10 Years Emirates ID (AED 1,150)
  const medicalFee = vipMedical ? 950 : 350; // Smart Salem VIP vs standard
  const statusChangeFee = location === 'inside' ? 650 : 350;

  // Family additions
  const spouseFee = includeSpouse ? 2850 + (vipMedical ? 950 : 350) + 1150 : 0;
  const childFee = childrenCount * (2450 + 1150 + (vipMedical ? 500 : 250));
  const parentFee = parentsCount * (3100 + (vipMedical ? 950 : 350) + 1150);

  const serviceFee = 1200; // Brightlink VIP documentation & end-to-end processing

  const totalAED = baseGovernmentFee + emiratesIdFee + medicalFee + statusChangeFee + spouseFee + childFee + parentFee + serviceFee;
  const totalUSD = Math.round(totalAED / 3.6725);

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello Brightlink Team, I calculated my 10-Year UAE Golden Visa quotation on your website:\n` +
      `Category: ${category.toUpperCase()}\n` +
      `Applicants: Self + ${includeSpouse ? 'Spouse ' : ''}${childrenCount} Children, ${parentsCount} Parents\n` +
      `Total Estimate: AED ${totalAED.toLocaleString()} (~$${totalUSD.toLocaleString()} USD).\n` +
      `I would like to proceed with document verification.`
    );
    openSafeLink(`https://wa.me/971566556645?text=${text}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#141518] text-white p-5 flex items-center justify-between border-b border-neutral-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#c81928] flex items-center justify-center text-white">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold tracking-tight">
                UAE Golden Visa Cost Calculator
              </h3>
              <p className="text-xs text-neutral-400">
                Official government fees &amp; VIP processing breakdown
              </p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-neutral-800 text-xs sm:text-sm">
          
          {/* 1. Category Selection */}
          <div>
            <label className="block font-bold text-neutral-900 mb-2">
              1. Select Your Qualifying Category:
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => setCategory('property')}
                className={`p-3 text-left rounded-lg border text-xs font-semibold transition-all ${
                  category === 'property'
                    ? 'border-[#c81928] bg-red-50 text-[#c81928]'
                    : 'border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <div>🏢 Property Investor</div>
                <div className="text-[10px] text-neutral-500 font-normal mt-0.5">AED 2M+ Real Estate</div>
              </button>

              <button
                type="button"
                onClick={() => setCategory('skilled')}
                className={`p-3 text-left rounded-lg border text-xs font-semibold transition-all ${
                  category === 'skilled'
                    ? 'border-[#c81928] bg-red-50 text-[#c81928]'
                    : 'border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <div>💼 Skilled Professional</div>
                <div className="text-[10px] text-neutral-500 font-normal mt-0.5">AED 30,000+ Monthly Salary</div>
              </button>

              <button
                type="button"
                onClick={() => setCategory('investor')}
                className={`p-3 text-left rounded-lg border text-xs font-semibold transition-all ${
                  category === 'investor'
                    ? 'border-[#c81928] bg-red-50 text-[#c81928]'
                    : 'border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <div>📈 Public Investment / Fund</div>
                <div className="text-[10px] text-neutral-500 font-normal mt-0.5">AED 2M Deposit or Capital</div>
              </button>

              <button
                type="button"
                onClick={() => setCategory('talent')}
                className={`p-3 text-left rounded-lg border text-xs font-semibold transition-all ${
                  category === 'talent'
                    ? 'border-[#c81928] bg-red-50 text-[#c81928]'
                    : 'border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <div>🎨 Talent / Doctor / Ph.D.</div>
                <div className="text-[10px] text-neutral-500 font-normal mt-0.5">Government Nomination</div>
              </button>
            </div>
          </div>

          {/* 2. Applicant Location & Medical Option */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-neutral-900 mb-2">
                2. Applicant Current Location:
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setLocation('inside')}
                  className={`flex-1 py-2 px-3 text-xs font-medium rounded-lg border text-center ${
                    location === 'inside'
                      ? 'border-[#c81928] bg-red-50 text-[#c81928]'
                      : 'border-neutral-200 hover:bg-neutral-50'
                  }`}
                >
                  Inside UAE (Status Change)
                </button>
                <button
                  type="button"
                  onClick={() => setLocation('outside')}
                  className={`flex-1 py-2 px-3 text-xs font-medium rounded-lg border text-center ${
                    location === 'outside'
                      ? 'border-[#c81928] bg-red-50 text-[#c81928]'
                      : 'border-neutral-200 hover:bg-neutral-50'
                  }`}
                >
                  Outside UAE (Entry Permit)
                </button>
              </div>
            </div>

            <div>
              <label className="block font-bold text-neutral-900 mb-2">
                3. Medical Fitness Package:
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setVipMedical(true)}
                  className={`flex-1 py-2 px-3 text-xs font-medium rounded-lg border text-center ${
                    vipMedical
                      ? 'border-[#c81928] bg-red-50 text-[#c81928]'
                      : 'border-neutral-200 hover:bg-neutral-50'
                  }`}
                >
                  VIP Express (30 Mins)
                </button>
                <button
                  type="button"
                  onClick={() => setVipMedical(false)}
                  className={`flex-1 py-2 px-3 text-xs font-medium rounded-lg border text-center ${
                    !vipMedical
                      ? 'border-[#c81928] bg-red-50 text-[#c81928]'
                      : 'border-neutral-200 hover:bg-neutral-50'
                  }`}
                >
                  Standard (24-48 Hours)
                </button>
              </div>
            </div>
          </div>

          {/* 4. Family Sponsorship Add-ons */}
          <div>
            <label className="block font-bold text-neutral-900 mb-2">
              4. Family Members to Sponsor:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Spouse */}
              <div className="border border-neutral-200 rounded-lg p-3 flex items-center justify-between">
                <span className="text-xs font-medium">Include Spouse</span>
                <input
                  type="checkbox"
                  checked={includeSpouse}
                  onChange={(e) => setIncludeSpouse(e.target.checked)}
                  className="w-4 h-4 accent-[#c81928] cursor-pointer"
                />
              </div>

              {/* Children */}
              <div className="border border-neutral-200 rounded-lg p-3 flex items-center justify-between">
                <span className="text-xs font-medium">Children:</span>
                <select
                  value={childrenCount}
                  onChange={(e) => setChildrenCount(Number(e.target.value))}
                  className="text-xs border border-neutral-300 rounded px-2 py-1 bg-white"
                >
                  <option value={0}>0</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4+</option>
                </select>
              </div>

              {/* Parents */}
              <div className="border border-neutral-200 rounded-lg p-3 flex items-center justify-between">
                <span className="text-xs font-medium">Parents:</span>
                <select
                  value={parentsCount}
                  onChange={(e) => setParentsCount(Number(e.target.value))}
                  className="text-xs border border-neutral-300 rounded px-2 py-1 bg-white"
                >
                  <option value={0}>0</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                </select>
              </div>
            </div>
          </div>

          {/* Calculation Summary Box */}
          <div className="bg-[#f8f9fa] border border-neutral-200 rounded-xl p-4.5 space-y-2.5">
            <div className="flex items-center justify-between text-xs text-neutral-600">
              <span>Government Golden Visa Authority Fee (10 Years):</span>
              <span className="font-semibold text-neutral-800">AED {baseGovernmentFee.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-neutral-600">
              <span>Emirates ID (10-Year Smart Card):</span>
              <span className="font-semibold text-neutral-800">AED {emiratesIdFee.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-neutral-600">
              <span>Medical Fitness Test &amp; Biometrics:</span>
              <span className="font-semibold text-neutral-800">AED {medicalFee.toLocaleString()}</span>
            </div>
            {statusChangeFee > 0 && (
              <div className="flex items-center justify-between text-xs text-neutral-600">
                <span>Entry Permit &amp; Status Amendment:</span>
                <span className="font-semibold text-neutral-800">AED {statusChangeFee.toLocaleString()}</span>
              </div>
            )}
            {(spouseFee > 0 || childFee > 0 || parentFee > 0) && (
              <div className="flex items-center justify-between text-xs text-neutral-600">
                <span>Family Dependents Sponsorship Total:</span>
                <span className="font-semibold text-neutral-800">AED {(spouseFee + childFee + parentFee).toLocaleString()}</span>
              </div>
            )}
            <div className="flex items-center justify-between text-xs text-neutral-600">
              <span>Brightlink Document Attestation &amp; VIP Support:</span>
              <span className="font-semibold text-neutral-800">AED {serviceFee.toLocaleString()}</span>
            </div>

            <div className="border-t border-neutral-200 pt-3 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block">
                  Estimated Total:
                </span>
                <span className="text-2xl font-black text-[#c81928]">
                  AED {totalAED.toLocaleString()}
                </span>
                <span className="text-xs text-neutral-500 ml-2 font-medium">
                  (~${totalUSD.toLocaleString()} USD)
                </span>
              </div>

              <div className="text-right">
                <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  100% Guaranteed Submission
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-neutral-50 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] text-neutral-500 text-center sm:text-left">
            *Final fees may vary slightly based on specific emirate GDRFA/ICP issuing authority.
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-neutral-600 hover:text-neutral-900"
            >
              Close
            </button>
            <button
              onClick={handleWhatsAppBooking}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#25d366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-xs"
            >
              <span>Get Quotation on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
