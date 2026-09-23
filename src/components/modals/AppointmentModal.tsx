import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { openSafeLink } from '../../utils/safeLinks';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [date, setDate] = useState('2026-09-24');
  const [time, setTime] = useState('11:00 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Golden Visa Document Review');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      const text = encodeURIComponent(
        `Hello Brightlink Team, I booked an office consultation appointment:\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Date: ${date}\n` +
        `Time: ${time}\n` +
        `Service: ${service}\n` +
        `Location: Office M08-27, Crystal Tower, Business Bay, Dubai`
      );
      openSafeLink(`https://wa.me/971566556645?text=${text}`);
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
            <Calendar className="w-5 h-5 text-[#c81928]" />
            <div>
              <h3 className="text-base font-bold tracking-tight">
                Book Office Appointment
              </h3>
              <p className="text-[11px] text-neutral-400">
                Crystal Tower, Business Bay, Dubai
              </p>
            </div>
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
              Appointment Reserved!
            </h4>
            <p className="text-xs text-neutral-600">
              A calendar confirmation is being prepared for you on WhatsApp.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-3.5 text-xs">
            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex items-center gap-2 text-[11px] text-neutral-600">
              <MapPin className="w-3.5 h-3.5 text-[#c81928] shrink-0" />
              <span>Office M08-27, M1 Floor, Millennium Central, Business Bay</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-neutral-800 mb-1">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-neutral-300 text-xs"
                />
              </div>

              <div>
                <label className="block font-semibold text-neutral-800 mb-1">
                  Time Slot *
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-neutral-300 text-xs bg-white"
                >
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:30 AM">11:30 AM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="03:30 PM">03:30 PM</option>
                  <option value="05:00 PM">05:00 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-neutral-800 mb-1">
                Your Name *
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
                WhatsApp Phone *
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
                Consultation Topic
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-neutral-300 bg-white"
              >
                <option value="Golden Visa Document Review">Golden Visa Document Review</option>
                <option value="Property Title Deed Verification">Property Title Deed Verification</option>
                <option value="Executive Professional Application">Executive Professional Application</option>
                <option value="Business Formation & Free Zone">Business Formation &amp; Free Zone</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg bg-[#141518] hover:bg-black text-white font-bold text-xs tracking-wide shadow-xs transition-colors cursor-pointer"
            >
              Confirm Appointment Slot
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
