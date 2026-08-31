import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Phone, CalendarCheck } from 'lucide-react';

export default function MobileQuickBar() {
  const location = useLocation();
  const isBookingPage = location.pathname === '/booking';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-[#F3ECE2]/95 backdrop-blur-md border-t border-[#C59B27]/40 px-4 py-2.5 shadow-2xl">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <a
          id="mobile-quick-wa"
          href="https://wa.me/254765728779"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#EAE0D2] border border-[#C59B27]/40 text-[#14382C] text-[11px] font-semibold active:bg-[#E2D5C3] shadow-xs"
          aria-label="WhatsApp Holistic Glow Mobile Spa Kenya"
        >
          <MessageCircle className="w-4 h-4 text-[#14382C]" />
          <span className="mt-0.5">WhatsApp</span>
        </a>

        <a
          id="mobile-quick-call"
          href="tel:+254719728779"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#EAE0D2] border border-[#C59B27]/40 text-[#14382C] text-[11px] font-semibold active:bg-[#E2D5C3] shadow-xs"
          aria-label="Call Holistic Glow Mobile Spa Kenya"
        >
          <Phone className="w-4 h-4 text-[#C59B27]" />
          <span className="mt-0.5">Call</span>
        </a>

        {!isBookingPage && (
          <Link
            id="mobile-quick-book"
            to="/booking"
            className="flex-[1.5] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#14382C] text-[#F3ECE2] text-xs uppercase tracking-wider font-semibold shadow-md border border-[#C59B27] active:bg-[#0D261E]"
          >
            <CalendarCheck className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Book Now</span>
          </Link>
        )}
      </div>
    </div>
  );
}
