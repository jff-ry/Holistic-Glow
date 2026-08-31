import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Mail, Clock, Sparkles } from 'lucide-react';
import brandLogoImg from '../assets/images/holistic_glow_logo_1788024251079.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Booking', path: '/booking' },
  ];

  return (
    <>
      {/* Top micro bar for brand context */}
      <header
        className="border-b border-[#14382C]/10 bg-[#EAE0D2] text-xs sm:text-sm text-[#4A3E36] py-2.5 px-4 sm:px-8 hidden md:block"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-[#14382C] font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-[#C59B27]" />
              Holistic Glow Mobile Spa • Delivered to Your Home or Hotel in Kenya
            </span>
            <span className="hidden lg:flex items-center gap-2 text-[#7D6B5F] font-medium">
              <Clock className="w-3.5 h-3.5 text-[#C59B27]" />
              Daily: 8:00 AM – 7:00 PM
            </span>
          </div>

          <div className="flex items-center gap-4 lg:gap-6">
            <a
              id="topbar-email-link"
              href="mailto:holisticglow57@gmail.com"
              className="flex items-center gap-1.5 text-[#4A3E36] hover:text-[#14382C] font-medium transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C59B27]" />
              <span className="hidden xl:inline">holisticglow57@gmail.com</span>
              <span className="xl:hidden">Email</span>
            </a>
            <span className="text-[#C59B27]/60">|</span>
            <a
              id="topbar-phone-link"
              href="tel:+254719728779"
              className="flex items-center gap-1.5 text-[#4A3E36] hover:text-[#14382C] font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>Call: +254 719 728 779</span>
            </a>
            <span className="text-[#C59B27]/60">|</span>
            <a
              id="topbar-wa-link"
              href="https://wa.me/254765728779"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#4A3E36] hover:text-[#14382C] font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#14382C]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Sticky Navbar */}
      <nav
        id="main-navigation"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F3ECE2]/95 backdrop-blur-md shadow-md border-b border-[#C59B27]/30 py-2 sm:py-3'
            : 'bg-[#F3ECE2] border-b border-[#14382C]/10 py-3 sm:py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo - Pure Uploaded Logo Artwork with Luxury Wellness subtext */}
          <Link
            id="brand-logo-link"
            to="/"
            className="group flex flex-col items-center focus:outline-none py-1 transition-transform"
            aria-label="The Holistic Glow Mobile Spa Home"
          >
            <img
              src={brandLogoImg}
              alt="The Holistic Glow Mobile Spa"
              className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto max-w-[260px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[440px] object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <span className="text-[6.5px] sm:text-[7.5px] md:text-[8px] font-serif italic lowercase tracking-normal text-[#14382C] text-center -mt-2 sm:-mt-2.5 opacity-90 transition-opacity group-hover:opacity-100">
              luxury wellness at your convenience
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7 lg:gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                id={`nav-link-${link.name.toLowerCase()}`}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm lg:text-base tracking-wider uppercase font-semibold transition-all duration-200 relative py-1 ${
                    isActive
                      ? 'text-[#14382C] after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-[#C59B27]'
                      : 'text-[#4A3E36] hover:text-[#14382C]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Action CTA Button Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              id="nav-book-btn-desktop"
              to="/booking"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#14382C] text-[#F3ECE2] text-xs sm:text-sm uppercase tracking-[0.16em] font-semibold hover:bg-[#0D261E] border-2 border-[#C59B27] transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              id="nav-book-btn-mobile-pill"
              to="/booking"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#14382C] text-[#F3ECE2] text-xs uppercase tracking-wider font-semibold border border-[#C59B27]"
            >
              Book
            </Link>
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-[#14382C] hover:bg-[#14382C]/5 focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div
            id="mobile-menu-drawer"
            className="md:hidden bg-[#F3ECE2] border-b border-[#C59B27]/30 px-6 pt-4 pb-8 space-y-5 animate-in fade-in slide-in-from-top-3 duration-200 shadow-xl"
          >
            <div className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  id={`mobile-nav-link-${link.name.toLowerCase()}`}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-lg font-serif tracking-wider py-2.5 border-b border-[#14382C]/10 flex items-center justify-between ${
                      isActive ? 'text-[#14382C] font-semibold' : 'text-[#4A3E36]'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <span className="text-sm text-[#C59B27] font-bold">→</span>
                </NavLink>
              ))}
            </div>

            <div className="pt-4 space-y-3">
              <Link
                id="mobile-menu-booking-cta"
                to="/booking"
                className="w-full inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#14382C] text-[#F3ECE2] text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-center shadow-md border-2 border-[#C59B27]"
              >
                Book An Appointment
              </Link>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs sm:text-sm">
                <a
                  id="mobile-menu-call-btn"
                  href="tel:+254719728779"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl border border-[#C59B27]/40 text-[#14382C] font-semibold bg-[#EAE0D2] shadow-xs"
                >
                  <Phone className="w-4 h-4 text-[#C59B27]" />
                  <span>Call Us</span>
                </a>
                <a
                  id="mobile-menu-wa-btn"
                  href="https://wa.me/254765728779"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl border border-[#C59B27]/40 text-[#14382C] font-semibold bg-[#EAE0D2] shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#14382C]" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="text-center pt-2 text-xs text-[#7D6B5F] font-medium">
                Operating Hours: 8:00 AM – 7:00 PM Daily
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
