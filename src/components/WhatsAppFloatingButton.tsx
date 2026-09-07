import React, { useState, useEffect } from 'react';
import { X, Send, Sparkles } from 'lucide-react';

interface WhatsAppFloatingButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export default function WhatsAppFloatingButton({
  phoneNumber = '254765728779',
  defaultMessage = "Hello Holistic Glow Mobile Spa! I would like to inquire about your mobile spa services and availability.",
}: WhatsAppFloatingButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasPrompted, setHasPrompted] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  // Auto-show a subtle greeting prompt after 4 seconds for first-time visitors
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasPrompted(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const encodedDefault = encodeURIComponent(customMsg.trim() || defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedDefault}`;

  const handleDirectChat = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      id="whatsapp-widget-container"
      className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-end pointer-events-auto"
      aria-label="WhatsApp Concierge"
    >
      {/* Floating Chat Box Dialog */}
      {isOpen && (
        <div
          id="whatsapp-chat-card"
          className="mb-3 w-[320px] sm:w-[350px] bg-white rounded-3xl shadow-2xl border border-[#C59B27]/40 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          {/* Header */}
          <div className="bg-[#14382C] text-[#F3ECE2] p-4 flex items-center justify-between border-b border-[#C59B27]/30">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#EAE0D2] border-2 border-[#C59B27] flex items-center justify-center text-[#14382C] font-serif font-bold text-sm shadow-xs">
                  HG
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#14382C] rounded-full animate-pulse" />
              </div>
              <div>
                <h4 className="font-serif font-medium text-sm tracking-wide text-[#F3ECE2] flex items-center gap-1.5">
                  Holistic Glow Concierge
                  <Sparkles className="w-3 h-3 text-[#C59B27]" />
                </h4>
                <p className="text-[11px] text-emerald-300 font-medium">Online • Typically replies instantly</p>
              </div>
            </div>

            <button
              id="close-wa-card-btn"
              onClick={() => setIsOpen(false)}
              className="p-1 text-[#F3ECE2]/70 hover:text-[#F3ECE2] hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close WhatsApp card"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Bubble Body */}
          <div className="p-4 bg-[#FAF7F2] space-y-3">
            <div className="bg-white p-3.5 rounded-2xl rounded-tl-xs shadow-xs border border-[#14382C]/10 text-xs sm:text-sm text-[#3A332E] leading-relaxed">
              <p className="font-medium text-[#14382C] mb-1">
                Jambo! Welcome to Holistic Glow Mobile Spa 🌿
              </p>
              <p>
                How can we pamper you today? Feel free to ask about our mobile massage, waxing, body polish, or schedule a custom booking for your home or hotel.
              </p>
              <span className="block text-[10px] text-right text-[#7D6B5F] mt-1">
                Concierge Desk
              </span>
            </div>

            {/* Quick Inquiry Options */}
            <div className="space-y-1.5 pt-1">
              <p className="text-[11px] font-semibold text-[#7D6B5F] uppercase tracking-wider">
                Quick Inquiries:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Check availability today',
                  'Inquire about couples massage',
                  'Corporate/Hotel rates',
                  'Waxing menu',
                ].map((prompt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      const msg = `Hello! I would like to ${prompt.toLowerCase()} with Holistic Glow.`;
                      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
                    }}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-white hover:bg-[#14382C] hover:text-[#F3ECE2] border border-[#C59B27]/40 text-[#14382C] transition-colors text-left"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input Field */}
            <div className="pt-2">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleDirectChat();
                  }}
                  placeholder="Type your question..."
                  className="w-full text-xs sm:text-sm pl-3 pr-10 py-2.5 rounded-xl border border-[#C59B27]/50 bg-white focus:outline-none focus:ring-2 focus:ring-[#14382C]/20 text-[#24201D]"
                />
                <button
                  type="button"
                  onClick={handleDirectChat}
                  className="absolute right-1.5 p-1.5 bg-[#25D366] text-white rounded-lg hover:bg-[#20bd5a] transition-colors"
                  aria-label="Send WhatsApp message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Direct Open Button */}
            <button
              id="open-direct-wa-btn"
              type="button"
              onClick={handleDirectChat}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold shadow-md transition-all active:scale-98"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>Chat Directly on WhatsApp</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Pill & Icon Button */}
      <div className="flex items-center gap-2.5">
        {/* Subtle Greeting Bubble (Auto-shows after 4s or on hover) */}
        {!isOpen && hasPrompted && (
          <div
            id="wa-greeting-tooltip"
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full shadow-lg border border-[#C59B27]/50 text-[#14382C] text-xs font-medium cursor-pointer hover:shadow-xl transition-all duration-300 animate-in fade-in"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Chat on WhatsApp</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setHasPrompted(false);
              }}
              className="text-[#7D6B5F] hover:text-[#14382C] p-0.5 ml-0.5"
              aria-label="Dismiss tooltip"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* The Main WhatsApp Round Button */}
        <button
          id="main-whatsapp-floating-btn"
          onClick={() => setIsOpen(!isOpen)}
          className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl flex items-center justify-center border-2 border-white hover:scale-105 active:scale-95 transition-all duration-300"
          aria-label="Chat on WhatsApp with Holistic Glow Mobile Spa"
        >
          <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 fill-white drop-shadow-xs" />
        </button>
      </div>
    </div>
  );
}

// Crisp Vector WhatsApp Icon
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}
