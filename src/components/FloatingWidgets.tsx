import React from 'react';

interface FloatingWidgetsProps {
  onOpenConsultation?: () => void;
  onToggleChat: () => void;
  isChatOpen: boolean;
}

export const FloatingWidgets: React.FC<FloatingWidgetsProps> = ({
  onToggleChat,
}) => {
  return (
    <>
      {/* Bottom Left "We are Online*" Live Indicator Pill */}
      <div className="fixed bottom-4 left-4 z-40">
        <button
          onClick={onToggleChat}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#c81928] hover:bg-[#b01422] text-white text-xs font-bold tracking-wide shadow-lg border border-red-400/40 transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>We are Online*</span>
        </button>
      </div>
    </>
  );
};

