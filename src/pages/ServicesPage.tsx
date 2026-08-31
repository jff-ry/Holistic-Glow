import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Clock, ArrowRight, Sparkles, Check, HelpCircle, Car, HeartPulse, ShieldCheck } from 'lucide-react';
import { SERVICES, CATEGORIES, TRAVEL_ZONES } from '../data/servicesData';
import { ServiceCategory } from '../types';

export default function ServicesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const catParam = searchParams.get('cat') as ServiceCategory | null;
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>(
    catParam && ['massage', 'facials', 'waxing', 'scrubs', 'combos'].includes(catParam)
      ? (catParam as ServiceCategory)
      : 'massage'
  );

  useEffect(() => {
    if (catParam && ['massage', 'facials', 'waxing', 'scrubs', 'combos'].includes(catParam)) {
      setActiveCategory(catParam as ServiceCategory);
    }
  }, [catParam]);

  const handleCategoryChange = (cat: ServiceCategory) => {
    setActiveCategory(cat);
    setSearchParams({ cat });
  };

  const filteredServices = SERVICES.filter((s) => s.category === activeCategory);

  const categoriesTab: { id: ServiceCategory; name: string }[] = [
    { id: 'massage', name: 'Massage Therapies' },
    { id: 'facials', name: 'Facial Therapy' },
    { id: 'waxing', name: 'Precision Waxing' },
    { id: 'scrubs', name: 'Scrubs & Body Polish' },
    { id: 'combos', name: 'Combos & Rituals' },
  ];

  const currentCat = CATEGORIES.find((c) => c.id === activeCategory) || CATEGORIES[0];

  return (
    <div className="bg-[#F3ECE2] text-[#24201D]">
      {/* 1. Page Header */}
      <section className="py-14 sm:py-20 border-b border-[#14382C]/10 bg-[#EAE0D2] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full gold-badge text-[#14382C] text-xs uppercase tracking-[0.25em] font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Our Treatment Menu</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#14382C] font-normal leading-tight">
            Curated Spa & Beauty Therapies
          </h1>

          <div className="w-20 h-[2.5px] bg-gradient-to-r from-transparent via-[#C59B27] to-transparent mx-auto" />
          
          <p className="text-base sm:text-lg text-[#4A3E36] max-w-2xl mx-auto font-light leading-relaxed">
            Delivered directly to your home, apartment, or hotel suite with luxury equipment, warm botanical oils, and unhurried care.
          </p>
        </div>
      </section>

      {/* 2. Category Filter & Service Listing */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-4 mb-14">
          {categoriesTab.map((tab) => {
            const isSelected = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                id={`service-tab-${tab.id}`}
                onClick={() => handleCategoryChange(tab.id)}
                className={`px-6 py-3 rounded-full text-xs sm:text-sm uppercase tracking-[0.18em] font-bold transition-all duration-300 cursor-pointer shadow-xs ${
                  isSelected
                    ? 'bg-[#14382C] text-[#F3ECE2] border-2 border-[#C59B27] shadow-lg transform -translate-y-0.5'
                    : 'bg-[#EAE0D2] text-[#4A3E36] border border-[#C59B27]/40 hover:border-[#C59B27] hover:bg-[#F3ECE2] hover:text-[#14382C]'
                }`}
              >
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Category Banner Highlight */}
        <div className="mb-12 p-7 sm:p-8 rounded-3xl bg-[#EAE0D2] border-1.5 border-[#C59B27]/50 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C59B27] font-bold block">
              {currentCat.tagline}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#14382C] font-semibold">
              {currentCat.name}
            </h2>
            <p className="text-sm sm:text-base text-[#4A3E36] max-w-2xl leading-relaxed">
              {currentCat.description}
            </p>
          </div>
          <div className="w-28 h-28 rounded-2xl overflow-hidden shrink-0 hidden md:block shadow-md border-2 border-[#C59B27]">
            <img
              src={currentCat.image}
              alt={currentCat.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-[#F8F4EE] rounded-3xl p-7 sm:p-8 border-1.5 border-[#C59B27]/40 hover:border-[#C59B27] hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 shadow-sm group relative"
            >
              {/* Header row: Name + Price */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="space-y-1.5">
                    {service.popular && (
                      <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-[#14382C] bg-[#C59B27]/25 px-3 py-1 rounded-full border border-[#C59B27] mb-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
                        Client Favorite
                      </span>
                    )}
                    <h3 className="font-serif text-2xl sm:text-[26px] text-[#14382C] font-semibold group-hover:text-[#0D261E] transition-colors leading-snug">
                      {service.name}
                    </h3>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#14382C] block">
                      KES {service.priceKes.toLocaleString()}
                    </span>
                    {service.duration && (
                      <span className="text-xs text-[#7D6B5F] font-semibold flex items-center justify-end gap-1 mt-0.5">
                        <Clock className="w-3.5 h-3.5 text-[#C59B27]" />
                        {service.duration}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#4A3E36] leading-relaxed mb-4">
                  {service.description}
                </p>

                {service.benefits && service.benefits.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {service.benefits.map((b, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-xs text-[#14382C] bg-[#EAE0D2] px-2.5 py-1 rounded-lg border border-[#C59B27]/30 font-medium"
                      >
                        <Check className="w-3.5 h-3.5 text-[#C59B27]" />
                        {b}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Action */}
              <div className="pt-5 border-t border-[#14382C]/10 flex items-center justify-end">
                <Link
                  id={`book-btn-${service.id}`}
                  to={`/booking?service=${service.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#14382C] text-[#F3ECE2] text-xs sm:text-sm uppercase tracking-wider font-bold hover:bg-[#0D261E] hover:border-[#C59B27] border-2 border-[#C59B27] transition-all shadow-sm group-hover:shadow-md"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C59B27]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Travel Fee Schedule & Client Health Safety Grid */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Travel Fee Breakdown Card */}
          <div className="lg:col-span-6 p-8 sm:p-9 rounded-3xl bg-[#0D261E] text-[#F3ECE2] border-2 border-[#C59B27]/60 shadow-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C59B27]/20 border border-[#C59B27]/60 text-[#DFB257] text-xs uppercase tracking-wider font-bold">
                <Car className="w-4 h-4 text-[#C59B27]" />
                <span>Transparent Mobile Delivery</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F3ECE2]">
                Travel Fees to Your Location
              </h3>
              <p className="text-sm text-[#F3ECE2]/80 leading-relaxed">
                From Holistic Glow Mobile Spa directly to your home, apartment, or hotel suite across Kenya:
              </p>

              <div className="space-y-2.5 pt-2 text-sm">
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#14382C] border border-[#C59B27]/40">
                  <span className="font-semibold text-[#F3ECE2]">Nairobi (Within Nairobi)</span>
                  <span className="text-xs font-bold text-[#14382C] bg-[#DFB257] px-3 py-1 rounded-full">
                    KES 0 (Inclusive)
                  </span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#14382C] border border-[#C59B27]/40">
                  <span className="font-semibold text-[#F3ECE2]">From Utawala & Outskirts</span>
                  <span className="font-bold text-[#DFB257] text-base">
                    KES 300
                  </span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#14382C] border border-[#C59B27]/40">
                  <span className="font-semibold text-[#F3ECE2]">Kiambu County</span>
                  <span className="font-bold text-[#DFB257] text-base">
                    KES 500
                  </span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#14382C] border border-[#C59B27]/40">
                  <span className="font-semibold text-[#F3ECE2]">Kajiado & Machakos Counties</span>
                  <span className="font-bold text-[#DFB257] text-base">
                    KES 700
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#F3ECE2]/70 italic pt-2">
              * Complete mobile setup included: luxury table, fresh linens, organic oils, scrubs, and ambient music.
            </p>
          </div>

          {/* Pre-Treatment Medical & Safety Consultation Card */}
          <div className="lg:col-span-6 p-8 sm:p-9 rounded-3xl bg-[#EAE0D2] border-1.5 border-[#C59B27]/50 shadow-md space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14382C]/10 border border-[#C59B27]/50 text-[#14382C] text-xs uppercase tracking-wider font-bold">
                <HeartPulse className="w-4 h-4 text-[#C59B27]" />
                <span>Client Health & Wellness Care</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#14382C]">
                Pre-Treatment Health Consultation
              </h3>
              <p className="text-sm sm:text-base text-[#4A3E36] leading-relaxed">
                Before every session, your therapist reviews all health factors to ensure your complete comfort and safety:
              </p>

              <div className="p-4 rounded-2xl bg-[#F8F4EE] border-1.5 border-[#C59B27] space-y-2">
                <p className="text-sm font-bold text-[#14382C]">
                  "Do you have any medical conditions, allergies, injuries, or are you pregnant that your therapist should know about before your treatment?"
                </p>
                <p className="text-xs text-[#7D6B5F] font-semibold">
                  * If none, you can simply write "None" when booking.
                </p>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-[#4A3E36] leading-relaxed">
                <p className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                  <span>Customized pressure modulation for sensitive areas, muscle knots, or injuries.</span>
                </p>
                <p className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                  <span>Hypoallergenic botanicals selected according to your skin sensitivities.</span>
                </p>
                <p className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                  <span>Specialized prenatal positioning for expectant mothers.</span>
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider font-bold text-[#14382C] hover:text-[#0D261E]"
              >
                <span>Reserve with Custom Notes</span>
                <ArrowRight className="w-4 h-4 text-[#C59B27]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Concierge Experience Guide */}
        <div className="mt-12 sm:mt-16 p-8 sm:p-10 rounded-3xl bg-[#EAE0D2] border-1.5 border-[#C59B27]/50 space-y-6 shadow-md">
          <div className="flex items-center gap-3 text-[#14382C]">
            <HelpCircle className="w-6 h-6 text-[#C59B27]" />
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold">
              What to Expect During Your Mobile Spa Visit
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm sm:text-base text-[#4A3E36] leading-relaxed">
            <div className="space-y-2">
              <span className="font-bold text-[#14382C] block text-base sm:text-lg">
                1. Warm Welcome & Consultation
              </span>
              <p>
                Your certified therapist arrives on time, verifies your health considerations, allergies, or tension hotspots, and tailors the experience.
              </p>
            </div>
            <div className="space-y-2">
              <span className="font-bold text-[#14382C] block text-base sm:text-lg">
                2. Everything is Provided
              </span>
              <p>
                We provide sanitized plush towels, ergonomic massage table, warming blankets, natural scrubs, and calming soundscapes.
              </p>
            </div>
            <div className="space-y-2">
              <span className="font-bold text-[#14382C] block text-base sm:text-lg">
                3. Total Rest & Renewal
              </span>
              <p>
                Unwind in the privacy of your own home or hotel suite without the rush or traffic of traveling back.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#14382C]/15 flex items-center gap-3 text-xs sm:text-sm text-[#14382C] font-semibold">
            <ShieldCheck className="w-5 h-5 text-[#C59B27] shrink-0" />
            <span>
              <strong>Professional Standard:</strong> All treatments are strictly therapeutic and aesthetic wellness services. We maintain a zero-tolerance policy against any sexual favours or inappropriate requests.
            </span>
          </div>
        </div>
      </section>

      {/* 3. Bottom Booking Invitation */}
      <section className="py-16 sm:py-20 bg-[#0D261E] text-[#F3ECE2] text-center border-t-2 border-[#C59B27]/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-5">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#F3ECE2]">
            Ready to schedule your personalized ritual?
          </h2>
          <p className="text-base sm:text-lg text-[#F3ECE2]/85 max-w-md mx-auto font-light">
            Book online or message our concierge directly via WhatsApp or phone.
          </p>
          <div className="pt-3">
            <Link
              id="services-bottom-book-btn"
              to="/booking"
              className="inline-flex items-center justify-center px-9 py-4 rounded-full bg-[#C59B27] text-[#0D261E] text-xs sm:text-sm uppercase tracking-[0.2em] font-bold hover:bg-[#DFB257] transition-all shadow-md hover:shadow-lg"
            >
              Go to Booking Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
