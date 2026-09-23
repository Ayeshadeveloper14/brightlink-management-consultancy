import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, Calendar, MessageSquare } from 'lucide-react';

interface OfficeLocationProps {
  onBookAppointment: () => void;
}

export const OfficeLocation: React.FC<OfficeLocationProps> = ({ onBookAppointment }) => {
  return (
    <section id="office" className="relative w-full py-20 lg:py-28 bg-[#fafafa] border-t border-b border-slate-200/80 overflow-hidden">
      {/* Subtle luxury ambient background glows */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-10 left-10 w-96 h-96 bg-red-100/20 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold tracking-wider uppercase mb-5 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-[#c81928]" />
            <span>HEADQUARTERS &amp; CLIENT SUITE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Visit Our{' '}
            <span className="relative inline-block text-[#c81928]">
              Office
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-gradient-to-r from-[#c81928] via-[#e53848] to-[#c81928]/40 rounded-full"></span>
            </span>
          </h2>
        </div>

        {/* Map & Office Information Container */}
        <div className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/70 p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left: Interactive Map Simulation */}
            <div className="lg:col-span-7 w-full min-h-[340px] sm:min-h-[380px] rounded-2xl overflow-hidden relative border border-slate-200 bg-slate-100 shadow-inner group">
              <iframe
                title="Brightlink Management Consultancy Dubai Map"
                src="https://maps.google.com/maps?q=Crystal%20Tower%20Business%20Bay%20Dubai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[340px] sm:min-h-[380px] border-0 filter contrast-[1.03]"
                loading="lazy"
                aria-label="Brightlink Management Consultancy Location Map"
              ></iframe>

              {/* Floating Map Label Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-xl border border-slate-200 text-left max-w-[260px]">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 leading-tight">
                  <div className="w-6 h-6 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-[#c81928]" />
                  </div>
                  <span className="truncate">Brightlink Management</span>
                </div>
                <div className="flex items-center gap-1.5 mt-1.5 text-xs text-amber-600 font-bold">
                  <span>4.8</span>
                  <span className="text-amber-500">★★★★★</span>
                  <span className="text-slate-400 font-normal">(127)</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  Business Bay, Dubai
                </div>
              </div>

              {/* Directions External Action */}
              <a
                href="https://maps.google.com/?q=Crystal+Tower+Business+Bay+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-white/95 hover:bg-white text-slate-800 text-xs font-bold px-3.5 py-2 rounded-xl shadow-lg border border-slate-200 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                <Navigation className="w-3.5 h-3.5 text-[#c81928]" />
                <span>Directions</span>
              </a>
            </div>

            {/* Right: Office Address & Contacts */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-6 text-left">
                
                {/* Address */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#c81928]" />
                    <span>Address</span>
                  </h4>
                  <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed font-normal">
                    Office M08-27, M1 Floor, Crystal Tower, Millennium Central Same Building, Al Asayel Street, Business Bay, Dubai, U.A.E
                  </p>
                </div>

                {/* Working Hours */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-600" />
                    <span>Working Hours</span>
                  </h4>
                  <p className="text-xs sm:text-[13.5px] text-slate-700 leading-normal">
                    Monday – Saturday:<br />
                    <span className="font-bold text-slate-900">9:00 am - 6:00 pm</span>
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Sunday: Closed
                  </p>
                </div>

                {/* Phone & Email side by side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-emerald-600" />
                      <span>Phone</span>
                    </h4>
                    <a
                      href="tel:+971566556645"
                      className="text-xs sm:text-[13px] text-[#c81928] hover:underline font-bold block"
                    >
                      +971566556645
                    </a>
                  </div>

                  {/* Email */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span>Email</span>
                    </h4>
                    <a
                      href="mailto:info@brightlinkconsulting.ae"
                      className="text-xs sm:text-[12px] text-slate-700 hover:text-[#c81928] font-medium truncate block"
                    >
                      info@brightlinkconsulting.ae
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* 3 Bottom Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-100">
            {/* WhatsApp */}
            <a
              href="https://wa.me/971566556645?text=Hello%20Brightlink%20Team%2C%20I%20would%20like%20to%20visit%20your%20office%20in%20Business%20Bay."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-emerald-500/20 hover:shadow-lg transition-all active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>

            {/* Call */}
            <a
              href="tel:+971566556645"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm tracking-wide border border-slate-300 shadow-sm transition-all active:scale-[0.98]"
            >
              <Phone className="w-4 h-4 text-[#c81928]" />
              <span>Call +971566556645</span>
            </a>

            {/* Book an Appointment */}
            <button
              onClick={onBookAppointment}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-slate-900 hover:bg-black text-white font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Book an Appointment</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
