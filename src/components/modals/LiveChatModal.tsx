import React, { useState } from 'react';
import { X, Send, MessageSquare, CheckCheck, Clock } from 'lucide-react';
import { openSafeLink } from '../../utils/safeLinks';

interface LiveChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LiveChatModal: React.FC<LiveChatModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      sender: 'agent',
      text: 'Hello! Welcome to Brightlink Management Consultancy. Are you looking to check your UAE Golden Visa eligibility or calculate government fees today?',
      time: 'Just now'
    }
  ]);
  const [input, setInput] = useState('');

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: userMsg, time: 'Just now' }
    ]);
    setInput('');

    // Instant helpful automated response with WhatsApp transfer
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'agent',
          text: `Thank you for your message! Our Senior Visa Specialist Bilal is online right now. Let's continue directly on WhatsApp for instant document review:`,
          time: 'Just now'
        }
      ]);
    }, 600);
  };

  const handleContinueWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Brightlink Team, I am chatting from your website live chat and have a question regarding UAE Golden Visa.`
    );
    openSafeLink(`https://wa.me/971566556645?text=${text}`);
  };

  return (
    <div className="fixed bottom-16 left-4 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-3 duration-200">
      {/* Chat Header */}
      <div className="bg-[#121316] text-white p-3.5 flex items-center justify-between border-b border-neutral-800">
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-[#c81928] text-white flex items-center justify-center font-bold text-xs">
              BL
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#121316]"></span>
          </div>
          <div>
            <h4 className="text-xs font-bold leading-tight">
              Brightlink Visa Helpdesk
            </h4>
            <span className="text-[10px] text-emerald-400 font-medium">
              Online • Replies within 2 mins
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1 rounded-md text-neutral-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Message List */}
      <div className="p-4 h-64 overflow-y-auto space-y-3 bg-[#f8f9fa] text-xs">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[85%] p-3 rounded-xl leading-relaxed ${
                m.sender === 'user'
                  ? 'bg-[#c81928] text-white rounded-br-none'
                  : 'bg-white text-neutral-800 border border-neutral-200 shadow-2xs rounded-bl-none'
              }`}
            >
              {m.text}
            </div>
            <span className="text-[9px] text-neutral-400 mt-1 px-1 flex items-center gap-1">
              <Clock className="w-2.5 h-2.5" />
              {m.time}
            </span>
          </div>
        ))}
      </div>

      {/* WhatsApp Quick Action inside Chat */}
      <div className="p-2 bg-emerald-50 border-t border-emerald-100 flex items-center justify-between text-xs">
        <span className="text-[11px] text-emerald-800 font-medium">
          Prefer WhatsApp instant chat?
        </span>
        <button
          onClick={handleContinueWhatsApp}
          className="px-2.5 py-1 bg-[#25d366] hover:bg-[#20ba59] text-white text-[11px] font-bold rounded shadow-2xs cursor-pointer"
        >
          Open WhatsApp
        </button>
      </div>

      {/* Input Field */}
      <form onSubmit={handleSend} className="p-2.5 bg-white border-t border-neutral-200 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 text-xs px-3 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:border-[#c81928]"
        />
        <button
          type="submit"
          className="p-2 bg-[#c81928] text-white rounded-lg hover:bg-[#b01422] transition-colors cursor-pointer"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
};
