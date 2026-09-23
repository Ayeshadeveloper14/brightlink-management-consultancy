import React, { useState } from 'react';
import { X, Star, CheckCircle2 } from 'lucide-react';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddReview?: (review: { author: string; rating: number; content: string }) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose, onAddReview }) => {
  const [rating, setRating] = useState(5);
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onAddReview && name && feedback) {
      onAddReview({
        author: name,
        rating,
        content: feedback
      });
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#141518] text-white p-5 flex items-center justify-between border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-amber-400">★</span>
            <h3 className="text-base font-bold tracking-tight">
              Review Brightlink Consultancy
            </h3>
          </div>
          <button onClick={onClose} className="p-1 rounded text-neutral-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h4 className="text-base font-bold text-neutral-900">
              Thank You For Your Review!
            </h4>
            <p className="text-xs text-neutral-600">
              Your feedback helps clients trust Brightlink Management Consultancy.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            <div>
              <label className="block font-semibold text-neutral-800 mb-1.5">
                Rating
              </label>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 transition-transform hover:scale-110 cursor-pointer"
                  >
                    <Star
                      className={`w-6 h-6 ${
                        star <= rating
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-neutral-300'
                      }`}
                    />
                  </button>
                ))}
                <span className="ml-2 text-xs font-bold text-neutral-700">
                  {rating} of 5 Stars
                </span>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-neutral-800 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Zeeshan Butt"
                className="w-full px-3.5 py-2 rounded-lg border border-neutral-300"
              />
            </div>

            <div>
              <label className="block font-semibold text-neutral-800 mb-1">
                Your Experience &amp; Feedback *
              </label>
              <textarea
                rows={4}
                required
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Share your experience with Brightlink Golden Visa or Business Setup..."
                className="w-full px-3.5 py-2 rounded-lg border border-neutral-300"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg bg-[#141518] hover:bg-black text-white font-bold text-xs tracking-wide shadow-xs transition-colors cursor-pointer"
            >
              Post Google Review
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
