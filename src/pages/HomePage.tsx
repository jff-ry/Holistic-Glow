import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Clock, MapPin, ShieldCheck, Heart, Car, HeartPulse } from 'lucide-react';
import TrustIndicators from '../components/TrustIndicators';
import { CATEGORIES } from '../data/servicesData';
import heroAfricanSpaImg from '../assets/images/hero_african_spa_1788112077485.jpg';
import africanTherapistMassageImg from '../assets/images/african_therapist_massage_1788112091282.jpg';
import sanitizedLinenImg from '../assets/images/sanitized_linen_candle_vertical_1788019703723.jpg';

export default function HomePage() {
  return (
    <div className="bg-[#F3ECE2] text-[#24201D]">
      {/* 1. HERO SECTION - Editorial & Asymmetric Luxury Composition */}
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 border-b border-[#14382C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Left Hero Editorial Text Column */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full gold-badge text-[#14382C] text-xs sm:text-sm uppercase tracking-[0.25em] font-bold">
                <Sparkles className="w-4 h-4 text-[#C59B27]" />
                <span>Holistic Glow Mobile Spa • Kenya</span>
              </div>

              <div className="space-y-3">
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[64px] text-[#14382C] font-normal leading-[1.12] tracking-tight">
                  Wellness rituals <br />
                  <span className="italic font-normal text-[#14382C]/90">delivered to your home or hotel.</span>
                </h1>
                <div className="w-24 h-[3px] bg-gradient-to-r from-[#C59B27] via-[#ECC870] to-[#C59B27] mt-4 rounded-full" />
              </div>

              <p className="text-lg sm:text-xl text-[#4A3E36] leading-relaxed max-w-xl font-light">
                Experience bespoke massage therapy, precision waxing, and revitalizing body polishes delivered directly to your doorstep. We bring the full luxury spa experience to your living room, bedroom, or hotel suite across Kenya.
              </p>

              {/* Action Button - Only Explore Treatments */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                <Link
                  id="hero-explore-treatments-btn"
                  to="/services"
                  className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-[#14382C] text-[#F3ECE2] text-xs sm:text-sm uppercase tracking-[0.2em] font-bold hover:bg-[#0D261E] border-2 border-[#C59B27] transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  <span>Explore Treatments</span>
                  <ArrowRight className="w-4 h-4 text-[#C59B27]" />
                </Link>
              </div>

              {/* Discreet Operating Hours / Notice */}
              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#7D6B5F] font-semibold">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C59B27]" />
                  <span>Available Daily: 8:00 AM – 7:00 PM</span>
                </div>
                <span className="text-[#C59B27] hidden sm:inline">•</span>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C59B27]" />
                  <span>Delivering Across Nairobi & Surrounds</span>
                </div>
              </div>
            </div>

            {/* Right Hero Imagery - Refined Asymmetric Editorial Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Large Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C59B27]/60 bg-white">
                  <img
                    src={heroAfricanSpaImg}
                    alt="Holistic massage therapy at Holistic Glow Mobile Spa Kenya"
                    className="w-full h-[420px] sm:h-[480px] object-cover object-center transform hover:scale-102 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14382C]/75 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-7 left-7 right-7 text-[#F3ECE2]">
                    <span className="text-xs uppercase tracking-[0.25em] text-[#DFB257] font-bold block mb-1.5">
                      Pure Serenity Delivered
                    </span>
                    <p className="font-serif text-xl sm:text-2xl leading-snug">
                      A private sanctuary created wherever you are.
                    </p>
                  </div>
                </div>

                {/* Overlapping Floating Delicate Detail Card */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#EAE0D2] p-5 rounded-2xl border-1.5 border-[#C59B27] shadow-xl max-w-[240px] hidden sm:block">
                  <div className="flex items-center gap-2 text-[#14382C] mb-1.5">
                    <Sparkles className="w-4 h-4 text-[#C59B27]" />
                    <span className="text-xs uppercase tracking-wider font-bold">Complete Setup</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A3E36] leading-snug">
                    Ergonomic beds, sanitized linens & warm oils brought to you.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST INDICATORS */}
      <TrustIndicators />

      {/* 3. HOME INTRODUCTION - Calm, Warm & Refined */}
      <section className="py-16 md:py-24 bg-[#F3ECE2] border-b border-[#14382C]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C59B27] font-bold block">
            The Mobile Spa Philosophy
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#14382C] font-normal leading-snug">
            A private sanctuary created wherever you are.
          </h2>

          <div className="w-20 h-[2.5px] bg-gradient-to-r from-transparent via-[#C59B27] to-transparent mx-auto" />

          <p className="text-base sm:text-lg text-[#4A3E36] leading-relaxed font-light">
            We believe true relaxation should fit seamlessly into your life without the rush of traffic or crowded waiting rooms. Holistic Glow Mobile Spa (Holi-Glo) transforms your living room, bedroom, patio, or hotel suite into a serene, private wellness haven. Our certified mobile therapists arrive with professional massage tables, organic botanical oils, soothing body scrubs, gentle waxes, rejuvenating facial treatments, and calming ambient soundscapes—delivering unhurried, holistic care right to your door.
          </p>

          <div className="pt-3">
            <Link
              id="home-about-link"
              to="/about"
              className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#14382C] font-bold hover:text-[#C59B27] transition-colors group"
            >
              <span>Read Our Story & Mobile Approach</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform text-[#C59B27]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. EXPLORE OUR TREATMENTS (Preview Section) */}
      <section className="py-16 md:py-24 bg-[#EAE0D2] border-b border-[#14382C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C59B27] font-bold block">
                Tailored Therapies
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#14382C] font-normal">
                Explore Our Treatments
              </h2>
              <p className="text-base sm:text-lg text-[#4A3E36] max-w-lg">
                Discover our curated menu of holistic massages, facial therapy, precision waxing, natural body polishes, and signature restorative combos brought to your location.
              </p>
            </div>

            <Link
              id="home-explore-all-treatments-top-cta"
              to="/services"
              className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-[#14382C] hover:text-[#0D261E] group self-start md:self-end"
            >
              <span>Explore All Treatments</span>
              <ArrowRight className="w-4 h-4 text-[#C59B27] transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Treatment Category Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {CATEGORIES.map((category) => (
              <div
                key={category.id}
                className="group bg-[#F8F4EE] rounded-3xl overflow-hidden border-1.5 border-[#C59B27]/40 hover:border-[#C59B27] hover:shadow-xl transition-all duration-300 flex flex-col shadow-xs"
              >
                {/* Category Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14382C]/50 via-transparent to-transparent" />
                </div>

                {/* Category Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#C59B27] font-bold block">
                      {category.tagline}
                    </span>
                    <h3 className="font-serif text-2xl text-[#14382C] font-semibold group-hover:text-[#0D261E] transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-[#4A3E36] leading-relaxed line-clamp-3">
                      {category.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#14382C]/10">
                    <Link
                      id={`home-cat-link-${category.id}`}
                      to={`/services?cat=${category.id}`}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider text-[#14382C] font-bold group-hover:text-[#C59B27] transition-colors"
                    >
                      <span>View Category</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C59B27]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <div className="text-center mt-14">
            <Link
              id="home-explore-all-treatments-bottom-cta"
              to="/services"
              className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-[#14382C] text-[#F3ECE2] text-xs sm:text-sm uppercase tracking-[0.2em] font-bold hover:bg-[#0D261E] border-2 border-[#C59B27] transition-all shadow-md hover:shadow-xl"
            >
              <span>Explore All Treatments & Pricing</span>
              <ArrowRight className="w-4 h-4 text-[#C59B27]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. HOW CONCIERGE MOBILE SPA WORKS */}
      <section className="py-16 md:py-24 bg-[#F3ECE2] border-b border-[#14382C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Imagery */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden shadow-md border-1.5 border-[#C59B27]/50 bg-white">
                <img
                  src={africanTherapistMassageImg}
                  alt="Certified mobile therapist providing home massage in Kenya"
                  className="w-full h-64 sm:h-80 object-cover hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-md border-1.5 border-[#C59B27]/50 bg-white sm:mt-6">
                <img
                  src={sanitizedLinenImg}
                  alt="Pristine sanitized linens, towels, and candles"
                  className="w-full h-64 sm:h-80 object-cover hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Editorial Content */}
            <div className="lg:col-span-6 space-y-6 lg:pl-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C59B27] font-bold block">
                Effortless & Discreet
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#14382C] font-normal leading-snug">
                How Concierge Mobile Spa Works
              </h2>

              <p className="text-base sm:text-lg text-[#4A3E36] leading-relaxed">
                Enjoy a bespoke spa treatment in your personal space with effortless comfort. We manage every detail from setup to pack-down so you can focus entirely on unwinding.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#14382C] text-[#F3ECE2] border-2 border-[#C59B27] flex items-center justify-center text-sm font-serif font-bold shrink-0 mt-0.5 shadow-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-[#14382C] font-semibold">
                      Select Your Treatment & Location
                    </h4>
                    <p className="text-sm text-[#4A3E36] leading-relaxed">
                      Choose from our therapeutic massages, precision waxing, body scrubs, or combos and specify your preferred date, time, and home address or hotel.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#14382C] text-[#F3ECE2] border-2 border-[#C59B27] flex items-center justify-center text-sm font-serif font-bold shrink-0 mt-0.5 shadow-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-[#14382C] font-semibold">
                      We Bring The Complete Spa Setup
                    </h4>
                    <p className="text-sm text-[#4A3E36] leading-relaxed">
                      Your certified therapist arrives on time with a luxury massage bed, sanitized linens, warmed organic oils, and calming ambient melodies to transform your room.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#14382C] text-[#F3ECE2] border-2 border-[#C59B27] flex items-center justify-center text-sm font-serif font-bold shrink-0 mt-0.5 shadow-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-[#14382C] font-semibold">
                      Unwind In Complete Privacy
                    </h4>
                    <p className="text-sm text-[#4A3E36] leading-relaxed">
                      Experience deeply personalized wellness care, then step straight into your own restful surroundings without the hassle of a commute home.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Link
                  id="home-view-gallery-btn"
                  to="/gallery"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#14382C] font-bold hover:text-[#C59B27] transition-colors"
                >
                  <span>Explore The Spa Visuals & Setup</span>
                  <ArrowRight className="w-4 h-4 text-[#C59B27]" />
                </Link>
                <span className="text-[#C59B27] hidden sm:inline">•</span>
                <Link
                  id="home-view-booking-travel-btn"
                  to="/booking"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#14382C] font-bold hover:text-[#C59B27] transition-colors"
                >
                  <Car className="w-4 h-4 text-[#C59B27]" />
                  <span>View Travel Rates (Nairobi KES 0, Kiambu 500, Machakos 700)</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. HOME CONTACT & UNWIND SECTION */}
      <section className="py-20 md:py-28 bg-[#0D261E] text-[#F3ECE2] relative overflow-hidden border-t-2 border-[#C59B27]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
          <span className="text-xs uppercase tracking-[0.3em] text-[#DFB257] font-bold block">
            Your Personal Sanctuary Awaits
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#F3ECE2] font-normal leading-tight">
            Make time to unwind in the comfort of your own space.
          </h2>

          <div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-[#C59B27] to-transparent mx-auto" />

          <p className="text-base sm:text-lg text-[#F3ECE2]/90 leading-relaxed max-w-xl mx-auto font-light">
            Allow yourself a peaceful pause. Connect with our concierge team to schedule your luxury mobile spa experience today.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              id="home-bottom-wa-btn"
              href="https://wa.me/254765728779"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-[#C59B27] text-[#0D261E] text-xs sm:text-sm uppercase tracking-[0.2em] font-bold hover:bg-[#DFB257] transition-all shadow-md hover:shadow-lg"
            >
              <span>Chat on WhatsApp</span>
            </a>

            <a
              id="home-bottom-call-btn"
              href="tel:+254719728779"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-transparent text-[#F3ECE2] text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold border-2 border-[#C59B27]/60 hover:border-[#C59B27] hover:bg-[#F3ECE2]/10 transition-all"
            >
              <span>Call +254 719 728 779</span>
            </a>
          </div>

          <div className="pt-6 text-xs sm:text-sm text-[#F3ECE2]/70 font-medium">
            Available daily 8:00 AM – 7:00 PM • Direct Tel: +254 719 728 779 • Nairobi & Environs, Kenya
          </div>
        </div>
      </section>
    </div>
  );
}

