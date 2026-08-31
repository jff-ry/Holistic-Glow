import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, Heart, Leaf, Award } from 'lucide-react';
import TrustIndicators from '../components/TrustIndicators';
import brandLogoImg from '../assets/images/holistic_glow_logo_1788024251079.jpg';
import africanSpaRitualImg from '../assets/images/african_spa_ritual_1788112140731.jpg';

export default function AboutPage() {
  return (
    <div className="bg-[#F3ECE2] text-[#24201D]">
      {/* 1. Page Header */}
      <section className="py-14 sm:py-20 border-b border-[#14382C]/10 bg-[#EAE0D2] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full gold-badge text-[#14382C] text-xs uppercase tracking-[0.25em] font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>About Holistic Glow Mobile Spa</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#14382C] font-normal leading-tight">
            The Luxury of On-Demand Wellness
          </h1>

          <div className="w-20 h-[2.5px] bg-gradient-to-r from-transparent via-[#C59B27] to-transparent mx-auto" />

          <p className="text-lg sm:text-xl text-[#4A3E36] font-light max-w-2xl mx-auto leading-relaxed">
            Delivering refined, unhurried massage therapies, precision waxing, and revitalizing body scrubs directly to your doorstep in Kenya.
          </p>
        </div>
      </section>

      {/* 2. Editorial Story & Philosophy Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Editorial Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-2xl bg-[#FAF7F2] shadow-sm border border-[#C59B27]/40 inline-flex flex-col items-center">
                <img
                  src={brandLogoImg}
                  alt="The Holistic Glow Mobile Spa Official Logo"
                  className="h-16 sm:h-20 w-auto object-contain"
                />
                <span className="text-[6.5px] sm:text-[7.5px] font-serif italic lowercase tracking-normal text-[#14382C] text-center -mt-1 opacity-90">
                  luxury wellness at your convenience
                </span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#C59B27] font-bold block">
                  Our Journey & Dedication
                </span>
                <span className="text-sm font-serif text-[#14382C] font-semibold">
                  11+ Years of Mobile Spa Excellence
                </span>
              </div>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#14382C] font-normal leading-snug">
              Creating a private sanctuary wherever you are.
            </h2>

            <p className="text-base sm:text-lg text-[#4A3E36] leading-relaxed font-light">
              Holistic Glow Mobile Spa (fondly known as Holi-Glo) was founded on a simple yet profound premise: genuine relaxation is most powerful when experienced in the peaceful comfort and privacy of your own home or hotel suite. Over more than a decade of dedicated service—bringing tranquility to clients for eleven years—we have perfected the art of on-demand mobile wellness.
            </p>

            <p className="text-base sm:text-lg text-[#4A3E36] leading-relaxed font-light">
              Instead of navigating busy Nairobi traffic and crowded reception lobbies, our clients enjoy bespoke treatments without ever stepping outside their door. We arrive fully equipped with ergonomic massage tables, freshly sanitized linens, warming pads, rich organic botanicals, and gentle soundscapes—seamlessly turning any room into a luxury spa oasis.
            </p>

            <div className="p-7 rounded-3xl bg-[#EAE0D2] border-1.5 border-[#C59B27]/50 space-y-3 shadow-md">
              <h4 className="font-serif text-lg sm:text-xl text-[#14382C] font-semibold">
                The Holistic Glow Standard & Code of Ethics
              </h4>
              <p className="text-sm sm:text-base text-[#4A3E36] leading-relaxed">
                Every mobile therapist on our team is certified and trained in discreet, respectful professionalism. All therapies are strictly therapeutic wellness and aesthetic treatments — absolutely no sexual favours or non-therapeutic requests are entertained or tolerated under any circumstances.
              </p>
            </div>
          </div>

          {/* Right Image Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C59B27]/60 bg-white">
              <img
                src={africanSpaRitualImg}
                alt="Holistic Glow Mobile Spa Kenya treatment room serenity"
                className="w-full h-[460px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14382C]/75 via-transparent to-transparent" />
              <div className="absolute bottom-7 left-7 right-7 text-[#F3ECE2]">
                <p className="font-serif text-lg sm:text-xl italic leading-snug">
                  "True relaxation begins the moment you step into our sanctuary."
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="py-16 md:py-24 bg-[#EAE0D2] border-y border-[#14382C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C59B27] font-bold block">
              What Defines Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#14382C] font-normal">
              Our Core Principles
            </h2>
            <p className="text-base sm:text-lg text-[#4A3E36]">
              Every treatment is guided by a commitment to natural beauty, ethical care, and personal wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-[#F8F4EE] p-8 rounded-3xl border-1.5 border-[#C59B27]/40 space-y-4 shadow-sm hover:border-[#C59B27] hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#F3ECE2] border-1.5 border-[#C59B27] flex items-center justify-center text-[#14382C] shadow-xs">
                <Leaf className="w-6 h-6 text-[#C59B27]" />
              </div>
              <h3 className="font-serif text-2xl text-[#14382C] font-semibold">
                Purity & Natural Care
              </h3>
              <p className="text-sm sm:text-base text-[#4A3E36] leading-relaxed">
                We select only nourishing plant oils, natural roasted coffee scrubs, and soothing gentle waxes that respect your skin’s health.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-[#F8F4EE] p-8 rounded-3xl border-1.5 border-[#C59B27]/40 space-y-4 shadow-sm hover:border-[#C59B27] hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#F3ECE2] border-1.5 border-[#C59B27] flex items-center justify-center text-[#14382C] shadow-xs">
                <ShieldCheck className="w-6 h-6 text-[#C59B27]" />
              </div>
              <h3 className="font-serif text-2xl text-[#14382C] font-semibold">
                Pristine Hygiene & Safety
              </h3>
              <p className="text-sm sm:text-base text-[#4A3E36] leading-relaxed">
                Freshly laundered and sanitized plush linens, single-use sanitary accessories, and medical-grade sterilization for every client appointment without exception.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-[#F8F4EE] p-8 rounded-3xl border-1.5 border-[#C59B27]/40 space-y-4 shadow-sm hover:border-[#C59B27] hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#F3ECE2] border-1.5 border-[#C59B27] flex items-center justify-center text-[#14382C] shadow-xs">
                <Heart className="w-6 h-6 text-[#C59B27]" />
              </div>
              <h3 className="font-serif text-2xl text-[#14382C] font-semibold">
                Personalized Touch
              </h3>
              <p className="text-sm sm:text-base text-[#4A3E36] leading-relaxed">
                No standard conveyor-belt routines. Pressure levels and treatment focuses are tailored specifically to your body’s unique needs and comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Trust Indicators Component */}
      <TrustIndicators />
    </div>
  );
}
