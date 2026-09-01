import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Mail, Clock, Sparkles } from 'lucide-react';
import brandLogoImg from '../assets/images/holistic_glow_logo_1788024251079.jpg';

export default function Footer() {
  return (
    <footer id="app-footer" className="bg-[#0D261E] text-[#F3ECE2] relative overflow-hidden border-t border-[#C59B27]/40">
      {/* Decorative top gold line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#C59B27] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-10 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-block group focus:outline-none">
              <div className="p-3 rounded-2xl bg-[#FAF7F2] border-2 border-[#C59B27]/60 shadow-lg inline-flex flex-col items-center">
                <img
                  src={brandLogoImg}
                  alt="The Holistic Glow Mobile Spa"
                  className="h-20 sm:h-24 md:h-28 w-auto max-w-[240px] sm:max-w-[300px] object-contain transition-transform group-hover:scale-102 duration-300"
                />
                <span className="text-[6.5px] sm:text-[7.5px] font-serif italic lowercase tracking-normal text-[#14382C] text-center -mt-1 pb-0.5 opacity-90">
                  luxury wellness at your convenience
                </span>
              </div>
            </Link>
            
            <p className="text-base text-[#F3ECE2]/85 leading-relaxed max-w-md pt-2 font-light">
              Kenya's premier mobile spa experience delivering bespoke therapeutic massage, gentle precision waxing, renewing body scrubs, and curated packages directly to your home, hotel, or private residence.
            </p>

            <div className="pt-3">
              <Link
                id="footer-book-appointment-btn"
                to="/booking"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#C59B27] text-[#0D261E] text-xs sm:text-sm uppercase tracking-[0.18em] font-bold hover:bg-[#DFB257] transition-all shadow-md hover:shadow-lg"
              >
                <span>Book Appointment</span>
                <Sparkles className="w-4 h-4 text-[#0D261E]" />
              </Link>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif text-lg text-[#C59B27] tracking-wider uppercase font-semibold">
              Explore
            </h4>
            <ul className="space-y-3 text-base">
              <li>
                <Link to="/" className="text-[#F3ECE2]/80 hover:text-[#C59B27] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#F3ECE2]/80 hover:text-[#C59B27] transition-colors">
                  About Our Spa
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#F3ECE2]/80 hover:text-[#C59B27] transition-colors">
                  Treatment Menu
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-[#F3ECE2]/80 hover:text-[#C59B27] transition-colors">
                  Spa Atmosphere & Gallery
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-[#F3ECE2]/80 hover:text-[#C59B27] transition-colors">
                  Schedule Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Concierge Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-lg text-[#C59B27] tracking-wider uppercase font-semibold">
              Concierge Desk
            </h4>
            <ul className="space-y-3.5 text-base">
              <li>
                <a
                  id="footer-phone-link"
                  href="tel:+254719728779"
                  className="flex items-center gap-3.5 text-[#F3ECE2]/90 hover:text-[#C59B27] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#14382C] border border-[#C59B27]/50 flex items-center justify-center text-[#C59B27] group-hover:bg-[#C59B27] group-hover:text-[#0D261E] transition-colors shadow-xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-[#C59B27] uppercase tracking-wider font-bold">Direct Call</span>
                    <span className="font-medium">+254 719 728 779</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  id="footer-wa-link"
                  href="https://wa.me/254765728779"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 text-[#F3ECE2]/90 hover:text-[#C59B27] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#14382C] border border-[#C59B27]/50 flex items-center justify-center text-[#C59B27] group-hover:bg-[#C59B27] group-hover:text-[#0D261E] transition-colors shadow-xs">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-[#C59B27] uppercase tracking-wider font-bold">WhatsApp Concierge</span>
                    <span className="font-medium">+254 765 728 779</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  id="footer-email-link"
                  href="mailto:holisticglow57@gmail.com"
                  className="flex items-center gap-3.5 text-[#F3ECE2]/90 hover:text-[#C59B27] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#14382C] border border-[#C59B27]/50 flex items-center justify-center text-[#C59B27] group-hover:bg-[#C59B27] group-hover:text-[#0D261E] transition-colors shadow-xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-[#C59B27] uppercase tracking-wider font-bold">Email Enquiries</span>
                    <span className="font-medium break-all">holisticglow57@gmail.com</span>
                  </div>
                </a>
              </li>
              <li className="flex items-center gap-3.5 text-[#F3ECE2]/80 pt-1">
                <div className="w-9 h-9 rounded-xl bg-[#14382C] border border-[#C59B27]/50 flex items-center justify-center text-[#C59B27]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs text-[#C59B27] uppercase tracking-wider font-bold">Operating Hours</span>
                  <span className="font-medium">8:00 AM – 7:00 PM Daily</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Brand closing line & copyright */}
        <div className="pt-8 border-t border-[#F3ECE2]/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#F3ECE2]/65">
          <p className="font-serif italic text-[#C59B27] text-base tracking-widest text-center md:text-left font-medium">
            Relax · Rejuvenate · Repeat
          </p>

          <p className="text-center text-xs text-[#F3ECE2]/70">
            Strictly professional therapeutic services only • Zero tolerance for sexual favours
          </p>

          <p className="text-center md:text-right">
            © {new Date().getFullYear()} Holistic Glow Mobile Spa (Holi-Glo).
          </p>
        </div>
      </div>
    </footer>
  );
}
