import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Check, Quote, MessageSquareHeart } from 'lucide-react';
import { TESTIMONIALS } from '../data/websiteData';

interface TestimonialsProps {
  onWriteReview: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onWriteReview }) => {
  const [startIndex, setStartIndex] = useState(0);

  const prevReview = () => {
    setStartIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 3 : prev - 1));
  };

  const nextReview = () => {
    setStartIndex((prev) => (prev >= TESTIMONIALS.length - 3 ? 0 : prev + 1));
  };

  // We display 3 cards on desktop
  const visibleReviews = [
    TESTIMONIALS[startIndex % TESTIMONIALS.length],
    TESTIMONIALS[(startIndex + 1) % TESTIMONIALS.length],
    TESTIMONIALS[(startIndex + 2) % TESTIMONIALS.length],
  ];

  return (
    <section id="testimonials" className="relative w-full py-20 lg:py-28 bg-[#fafafa] border-t border-b border-slate-200/80 overflow-hidden">
      {/* Subtle luxury ambient background glows */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-12 right-12 w-96 h-96 bg-red-100/25 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-12 left-12 w-96 h-96 bg-amber-100/25 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold tracking-wider uppercase mb-5 shadow-xs">
            <MessageSquareHeart className="w-3.5 h-3.5 text-rose-400" />
            <span>Client Success Stories | Trusted UAE Consultancy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-5">
            Real Clients,{' '}
            <span className="relative inline-block text-[#c81928]">
              Real Results
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-gradient-to-r from-[#c81928] via-[#e53848] to-[#c81928]/40 rounded-full"></span>
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-3 text-pretty max-w-2xl mx-auto">
            The best reflection of our commitment is the experience of the people and businesses we serve. From UAE residency and Golden Visas to business setup, property services, PRO services, and more, discover how Brightlink has helped clients achieve their goals across the UAE.
          </p>
          <p className="text-xs sm:text-sm font-bold text-slate-900">
            See what our clients have to say about their experience with Brightlink.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto mb-12">
          {/* Controls */}
          <button
            onClick={prevReview}
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-slate-700 hover:text-white hover:bg-[#c81928] hover:border-[#c81928] transition-all duration-200 cursor-pointer active:scale-95"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
          </button>
          
          <button
            onClick={nextReview}
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-slate-700 hover:text-white hover:bg-[#c81928] hover:border-[#c81928] transition-all duration-200 cursor-pointer active:scale-95"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.2]" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleReviews.map((rev) => (
              <div
                key={rev.id}
                className="group relative bg-white border border-slate-200/90 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:shadow-slate-200/70 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Decorative subtle quote watermark */}
                <div className="absolute top-4 right-4 text-slate-100 pointer-events-none group-hover:text-red-50 transition-colors">
                  <Quote className="w-12 h-12" />
                </div>

                <div className="relative z-10">
                  {/* Author Header with Google Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-2xl ${rev.avatarColor} text-white font-black text-sm flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform`}>
                        {rev.initials}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 leading-snug">
                          {rev.author}
                        </h4>
                        <span className="text-[11px] text-slate-400 font-medium">
                          {rev.timeAgo}
                        </span>
                      </div>
                    </div>

                    {/* Google G icon container */}
                    <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    "{rev.content}"
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-emerald-600">
                  <span className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>Verified Client</span>
                  </span>
                  <span className="text-slate-400 font-normal">Google Review</span>
                </div>
              </div>
            ))}
          </div>

          {/* Trustindex Verified Badge */}
          <div className="flex justify-end mt-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1a7f37] text-white text-xs font-bold rounded-xl shadow-xs">
              <Check className="w-4 h-4 stroke-[3]" />
              <span>Verified by Trustindex 🛡️</span>
            </div>
          </div>
        </div>

        {/* Google Write A Review Button */}
        <div className="text-center">
          <button
            onClick={onWriteReview}
            className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-slate-900 hover:bg-black text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95 border border-slate-800"
          >
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center font-black text-xs text-white">G</span>
            <span>Write A Review ➔</span>
          </button>
        </div>

      </div>
    </section>
  );
};
