import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Sparkles,
  User,
  MapPin,
  Car,
  HeartPulse,
  ShieldCheck,
  Info,
} from 'lucide-react';
import { SERVICES, TRAVEL_ZONES } from '../data/servicesData';
import { BookingFormData } from '../types';

export default function BookingPage() {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service');

  // Form State
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    treatmentId: serviceParam || SERVICES[0].id,
    preferredDate: '',
    preferredTime: '10:00 AM',
    travelZone: 'nairobi',
    locationArea: '',
    medicalConditions: '',
    additionalNotes: '',
  });

  // Update selected treatment if query param changes
  useEffect(() => {
    if (serviceParam) {
      const match = SERVICES.find((s) => s.id === serviceParam);
      if (match) {
        setFormData((prev) => ({ ...prev, treatmentId: serviceParam }));
      }
    }
  }, [serviceParam]);

  const selectedService =
    SERVICES.find((s) => s.id === formData.treatmentId) || SERVICES[0];

  const selectedTravelZone =
    TRAVEL_ZONES.find((z) => z.id === formData.travelZone) || TRAVEL_ZONES[0];

  const totalEstimatedKes = selectedService.priceKes + selectedTravelZone.feeKes;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Generate Clean WhatsApp Message
  const generateWhatsAppMessage = () => {
    const medicalAnswer = formData.medicalConditions.trim() || 'None';
    const travelFeeText =
      selectedTravelZone.feeKes === 0
        ? 'KES 0 (Complimentary within Nairobi)'
        : `KES ${selectedTravelZone.feeKes.toLocaleString()}`;

    const lines = [
      'Hello Holistic Glow Mobile Spa (Holi-Glo),',
      '',
      'I would like to book a mobile spa appointment.',
      '',
      `Name: ${formData.fullName.trim() || '[Your Name]'}`,
      `Treatment: ${selectedService.name} (KES ${selectedService.priceKes.toLocaleString()})`,
      `Preferred date: ${formData.preferredDate || '[Preferred Date]'}`,
      `Preferred time: ${formData.preferredTime || '[Preferred Time]'}`,
      `Location / Area / Hotel: ${formData.locationArea.trim() || '[Your Location Details]'}`,
      `Travel Zone: ${selectedTravelZone.name} (Travel fee: ${travelFeeText})`,
      `Estimated Total: KES ${totalEstimatedKes.toLocaleString()}`,
      `Phone: ${formData.phone.trim() || '[Your Phone]'}`,
      formData.email.trim() ? `Email: ${formData.email.trim()}` : '',
      '',
      'Medical conditions / Allergies / Injuries / Pregnancy:',
      medicalAnswer,
      '',
      'Special Requests / Notes:',
      formData.additionalNotes.trim() || 'No additional notes provided.',
    ].filter(Boolean);

    return lines.join('\n');
  };

  // WhatsApp Action
  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const rawMessage = generateWhatsAppMessage();
    const encoded = encodeURIComponent(rawMessage);
    // Use WhatsApp number: +254 765 728 779
    const waUrl = `https://wa.me/254765728779?text=${encoded}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  // Email Action
  const handleEmailBooking = () => {
    const subject = encodeURIComponent(
      `Appointment Request - Holistic Glow Mobile Spa (${formData.fullName.trim() || 'New Client'})`
    );
    const body = encodeURIComponent(generateWhatsAppMessage());
    window.location.href = `mailto:theconciergespa7@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-[#F3ECE2] text-[#24201D]">
      {/* 1. Page Header */}
      <section className="py-14 sm:py-20 border-b border-[#14382C]/10 bg-[#EAE0D2] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full gold-badge text-[#14382C] text-xs uppercase tracking-[0.25em] font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>On-Demand Mobile Spa</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#14382C] font-normal leading-tight">
            Book An Appointment
          </h1>

          <div className="w-20 h-[2.5px] bg-gradient-to-r from-transparent via-[#C59B27] to-transparent mx-auto" />

          <p className="text-lg sm:text-xl text-[#4A3E36] font-light max-w-2xl mx-auto leading-relaxed">
            Reserve your mobile spa session below. Our certified team brings everything needed for a five-star spa experience directly to your home, hotel, or private residence in Kenya.
          </p>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Booking Form */}
          <div className="lg:col-span-7 bg-[#F8F4EE] rounded-3xl p-7 sm:p-10 border-1.5 border-[#C59B27]/50 shadow-md space-y-7">
            <div className="border-b border-[#14382C]/10 pb-5">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#14382C] font-semibold">
                Appointment Details
              </h2>
              <p className="text-sm sm:text-base text-[#7D6B5F] mt-1 font-medium">
                Choose your treatment, select your location zone, and share any health considerations.
              </p>
            </div>

            <form onSubmit={handleWhatsAppBooking} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label
                  htmlFor="fullName"
                  className="block text-xs sm:text-sm uppercase tracking-wider font-bold text-[#14382C]"
                >
                  Full Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="e.g. Sarah Njeri"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-5 py-3.5 rounded-2xl bg-[#EAE0D2] border border-[#C59B27]/40 focus:border-[#C59B27] focus:bg-white focus:outline-none text-base transition-colors shadow-xs"
                  />
                  <User className="w-5 h-5 text-[#7D6B5F] absolute right-4 top-4 pointer-events-none" />
                </div>
              </div>

              {/* Phone & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone */}
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-xs sm:text-sm uppercase tracking-wider font-bold text-[#14382C]"
                  >
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="e.g. +254 700 000 000"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-5 py-3.5 rounded-2xl bg-[#EAE0D2] border border-[#C59B27]/40 focus:border-[#C59B27] focus:bg-white focus:outline-none text-base transition-colors shadow-xs"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm uppercase tracking-wider font-bold text-[#14382C]"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="e.g. sarah@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-5 py-3.5 rounded-2xl bg-[#EAE0D2] border border-[#C59B27]/40 focus:border-[#C59B27] focus:bg-white focus:outline-none text-base transition-colors shadow-xs"
                  />
                </div>
              </div>

              {/* Treatment Selection */}
              <div className="space-y-2">
                <label
                  htmlFor="treatmentId"
                  className="block text-xs sm:text-sm uppercase tracking-wider font-bold text-[#14382C]"
                >
                  Selected Treatment / Service *
                </label>
                <select
                  id="treatmentId"
                  name="treatmentId"
                  value={formData.treatmentId}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3.5 rounded-2xl bg-[#EAE0D2] border border-[#C59B27]/40 focus:border-[#C59B27] focus:bg-white focus:outline-none text-base font-semibold text-[#14382C] transition-colors cursor-pointer shadow-xs"
                >
                  <optgroup label="Massage Therapies">
                    {SERVICES.filter((s) => s.category === 'massage').map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} {s.duration ? `(${s.duration} — KES ${s.priceKes.toLocaleString()})` : `(KES ${s.priceKes.toLocaleString()})`}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Facial Therapy">
                    {SERVICES.filter((s) => s.category === 'facials').map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} {s.duration ? `(${s.duration} — KES ${s.priceKes.toLocaleString()})` : `(KES ${s.priceKes.toLocaleString()})`}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Precision Waxing">
                    {SERVICES.filter((s) => s.category === 'waxing').map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} {s.duration ? `(${s.duration} — KES ${s.priceKes.toLocaleString()})` : `(KES ${s.priceKes.toLocaleString()})`}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Scrubs & Body Polish">
                    {SERVICES.filter((s) => s.category === 'scrubs').map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} (KES {s.priceKes.toLocaleString()})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Combos & Signature Rituals">
                    {SERVICES.filter((s) => s.category === 'combos').map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} (KES {s.priceKes.toLocaleString()})
                      </option>
                    ))}
                  </optgroup>
                </select>
                
                {/* Active service badge */}
                <div className="p-4 rounded-2xl bg-[#EAE0D2] border-1.5 border-[#C59B27] flex items-center justify-between text-sm sm:text-base shadow-xs">
                  <span className="text-[#4A3E36]">
                    {selectedService.duration ? (
                      <>Duration: <strong className="text-[#14382C] font-bold">{selectedService.duration}</strong></>
                    ) : (
                      <span className="text-[#14382C] font-semibold">{selectedService.name}</span>
                    )}
                  </span>
                  <span className="font-serif text-lg sm:text-xl font-bold text-[#14382C]">
                    KES {selectedService.priceKes.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Preferred Date */}
                <div className="space-y-2">
                  <label
                    htmlFor="preferredDate"
                    className="block text-xs sm:text-sm uppercase tracking-wider font-bold text-[#14382C]"
                  >
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    required
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full px-5 py-3.5 rounded-2xl bg-[#EAE0D2] border border-[#C59B27]/40 focus:border-[#C59B27] focus:bg-white focus:outline-none text-base transition-colors shadow-xs"
                  />
                </div>

                {/* Preferred Time */}
                <div className="space-y-2">
                  <label
                    htmlFor="preferredTime"
                    className="block text-xs sm:text-sm uppercase tracking-wider font-bold text-[#14382C]"
                  >
                    Preferred Time *
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-5 py-3.5 rounded-2xl bg-[#EAE0D2] border border-[#C59B27]/40 focus:border-[#C59B27] focus:bg-white focus:outline-none text-base transition-colors cursor-pointer shadow-xs font-medium"
                  >
                    <option value="8:00 AM">8:00 AM (Early Morning)</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM (Morning)</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="1:00 PM">1:00 PM (Afternoon)</option>
                    <option value="2:30 PM">2:30 PM</option>
                    <option value="4:00 PM">4:00 PM (Late Afternoon)</option>
                    <option value="5:30 PM">5:30 PM (Evening)</option>
                    <option value="6:00 PM">6:00 PM (Evening)</option>
                  </select>
                </div>
              </div>

              {/* Travel Zone & Location Section */}
              <div className="space-y-4 pt-2">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="travelZone"
                      className="block text-xs sm:text-sm uppercase tracking-wider font-bold text-[#14382C]"
                    >
                      Travel & Coverage Zone <span className="text-[#C59B27]">*</span>
                    </label>
                    <span className="text-xs text-[#7D6B5F] font-semibold">
                      Transparent Mobile Travel Fee
                    </span>
                  </div>
                  <select
                    id="travelZone"
                    name="travelZone"
                    value={formData.travelZone}
                    onChange={handleInputChange}
                    className="w-full px-5 py-3.5 rounded-2xl bg-[#EAE0D2] border border-[#C59B27]/40 focus:border-[#C59B27] focus:bg-white focus:outline-none text-base font-semibold text-[#14382C] transition-colors cursor-pointer shadow-xs"
                  >
                    {TRAVEL_ZONES.map((zone) => (
                      <option key={zone.id} value={zone.id}>
                        {zone.name} — {zone.feeKes === 0 ? 'KES 0 (Inclusive)' : `+KES ${zone.feeKes.toLocaleString()} Travel Fee`}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Delivery Location / Address / Hotel */}
                <div className="space-y-2">
                  <label
                    htmlFor="locationArea"
                    className="block text-xs sm:text-sm uppercase tracking-wider font-bold text-[#14382C]"
                  >
                    Specific Address / Residence / Hotel <span className="text-[#C59B27]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="locationArea"
                      name="locationArea"
                      type="text"
                      required
                      placeholder="e.g. Westlands, Karen, Kilimani, Serena Hotel Room 402, Utawala, Ruaka..."
                      value={formData.locationArea}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3.5 pl-11 rounded-2xl bg-[#EAE0D2] border border-[#C59B27]/40 focus:border-[#C59B27] focus:bg-white focus:outline-none text-base transition-colors shadow-xs"
                    />
                    <MapPin className="w-5 h-5 text-[#C59B27] absolute left-4 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                {/* Transparent Total Summary Breakdown */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#EAE0D2] border-1.5 border-[#C59B27] space-y-2 text-sm">
                  <div className="flex items-center justify-between text-[#4A3E36]">
                    <span>Treatment: <strong className="text-[#14382C]">{selectedService.name}</strong></span>
                    <span className="font-semibold text-[#14382C]">KES {selectedService.priceKes.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#4A3E36]">
                    <span className="flex items-center gap-1.5">
                      <Car className="w-4 h-4 text-[#C59B27]" />
                      Travel fee ({selectedTravelZone.name}):
                    </span>
                    <span className="font-semibold text-[#14382C]">
                      {selectedTravelZone.feeKes === 0 ? (
                        <span className="text-[#14382C] bg-[#C59B27]/25 px-2 py-0.5 rounded-md font-bold">KES 0 (Included)</span>
                      ) : (
                        `KES ${selectedTravelZone.feeKes.toLocaleString()}`
                      )}
                    </span>
                  </div>
                  <div className="border-t border-[#14382C]/15 pt-2 flex items-center justify-between text-base font-bold text-[#14382C]">
                    <span>Estimated Total:</span>
                    <span className="font-serif text-xl sm:text-2xl text-[#14382C]">
                      KES {totalEstimatedKes.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Client Health Consultation Question */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-2.5 bg-[#EAE0D2] p-4 rounded-2xl border-1.5 border-[#C59B27]">
                  <HeartPulse className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <label
                      htmlFor="medicalConditions"
                      className="block text-xs sm:text-sm font-bold text-[#14382C] leading-snug"
                    >
                      Do you have any medical conditions, allergies, injuries, or are you pregnant that your therapist should know about before your treatment? <span className="text-[#C59B27]">*</span>
                    </label>
                    <p className="text-xs font-semibold text-[#7D6B5F]">
                      If none, please write <span className="text-[#14382C] bg-[#F8F4EE] px-1.5 py-0.5 rounded border border-[#C59B27]/50 font-bold">"None"</span>
                    </p>
                  </div>
                </div>

                <textarea
                  id="medicalConditions"
                  name="medicalConditions"
                  rows={2}
                  required
                  placeholder='If none, please write "None" (or describe any skin allergies, high blood pressure, pregnancy trimesters, recent injuries, or sensitive areas...)'
                  value={formData.medicalConditions}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3.5 rounded-2xl bg-[#EAE0D2] border border-[#C59B27]/40 focus:border-[#C59B27] focus:bg-white focus:outline-none text-base transition-colors shadow-xs"
                />
              </div>

              {/* Additional Notes */}
              <div className="space-y-2">
                <label
                  htmlFor="additionalNotes"
                  className="block text-xs sm:text-sm uppercase tracking-wider font-bold text-[#14382C]"
                >
                  Special Requests / Tension Areas / General Notes
                </label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  rows={2}
                  placeholder="e.g. Focus on shoulder tension, preferred pressure level (soft / medium / firm)..."
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3.5 rounded-2xl bg-[#EAE0D2] border border-[#C59B27]/40 focus:border-[#C59B27] focus:bg-white focus:outline-none text-base transition-colors shadow-xs"
                />
              </div>

              {/* Professional Boundaries & Strict Policy Notice */}
              <div className="p-4 rounded-2xl bg-[#F8F4EE] border-1.5 border-[#C59B27] flex items-start gap-3 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#14382C] block">
                    Strict Professional Standards (Zero Tolerance)
                  </span>
                  <p className="text-xs sm:text-sm text-[#4A3E36] leading-relaxed">
                    All treatments are strictly professional therapeutic massages, facials, waxing, and body polishes. <strong>Absolutely NO sexual favours</strong> or inappropriate conduct will be tolerated. Therapists reserve the full right to immediately refuse or terminate service without refund.
                  </p>
                </div>
              </div>

              {/* Primary Form Actions */}
              <div className="pt-2 space-y-4">
                <button
                  id="booking-form-submit-wa"
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#14382C] text-[#F3ECE2] text-xs sm:text-sm uppercase tracking-[0.2em] font-bold hover:bg-[#0D261E] border-2 border-[#C59B27] transition-all shadow-md hover:shadow-xl cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-[#C59B27]" />
                  <span>Send Appointment via WhatsApp</span>
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    id="booking-form-email-btn"
                    type="button"
                    onClick={handleEmailBooking}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-[#EAE0D2] border border-[#C59B27]/50 text-[#14382C] text-xs sm:text-sm uppercase tracking-wider font-bold hover:bg-[#E2D5C3] transition-colors cursor-pointer shadow-xs"
                  >
                    <Mail className="w-4 h-4 text-[#C59B27]" />
                    <span>Send via Email</span>
                  </button>

                  <a
                    id="booking-form-call-btn"
                    href="tel:+254719728779"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-[#EAE0D2] border border-[#C59B27]/50 text-[#14382C] text-xs sm:text-sm uppercase tracking-wider font-bold hover:bg-[#E2D5C3] transition-colors shadow-xs"
                  >
                    <Phone className="w-4 h-4 text-[#C59B27]" />
                    <span>Call Concierge Desk</span>
                  </a>
                </div>
              </div>
            </form>
          </div>

          {/* Right Column: Travel Fee Schedule & Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Travel Fee Schedule Breakdown Card */}
            <div className="bg-[#0D261E] text-[#F3ECE2] rounded-3xl p-7 sm:p-8 border-2 border-[#C59B27]/60 space-y-5 shadow-xl">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C59B27]/20 border border-[#C59B27]/60 text-[#DFB257] text-xs uppercase tracking-wider font-bold">
                  <Car className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>Travel Fee Schedule</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F3ECE2] font-normal pt-1">
                  Mobile Coverage & Fees
                </h3>
                <p className="text-xs sm:text-sm text-[#F3ECE2]/80 leading-relaxed">
                  Transparent travel fees from Holistic Glow Mobile Spa to your residence or hotel:
                </p>
              </div>

              <div className="space-y-2.5 pt-1 text-sm">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-[#14382C] border border-[#C59B27]/40">
                  <span className="font-semibold text-[#F3ECE2]">Nairobi (Within Nairobi)</span>
                  <span className="text-xs font-bold text-[#14382C] bg-[#DFB257] px-2.5 py-1 rounded-full">
                    KES 0 (Complimentary)
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-[#14382C] border border-[#C59B27]/40">
                  <span className="font-semibold text-[#F3ECE2]">From Utawala & Environs</span>
                  <span className="text-sm font-bold text-[#DFB257]">
                    KES 300
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-[#14382C] border border-[#C59B27]/40">
                  <span className="font-semibold text-[#F3ECE2]">Kiambu County</span>
                  <span className="text-sm font-bold text-[#DFB257]">
                    KES 500
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-[#14382C] border border-[#C59B27]/40">
                  <span className="font-semibold text-[#F3ECE2]">Kajiado & Machakos Counties</span>
                  <span className="text-sm font-bold text-[#DFB257]">
                    KES 700
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#F3ECE2]/70 italic pt-1">
                * We bring ergonomic massage beds, fresh sanitised linens, warming blankets, and organic aromatics directly to you.
              </p>
            </div>

            {/* Health & Safety Consultation Assurance Card */}
            <div className="p-6 rounded-3xl bg-[#EAE0D2] border-1.5 border-[#C59B27]/50 space-y-3 shadow-md">
              <div className="flex items-center gap-2 text-[#14382C]">
                <ShieldCheck className="w-5 h-5 text-[#C59B27]" />
                <span className="text-xs sm:text-sm uppercase tracking-wider font-bold">
                  Pre-Treatment Health & Safety
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#4A3E36] leading-relaxed">
                Your safety and comfort are paramount. Your certified therapist reviews your health notes, skin sensitivities, injuries, or pregnancy stage to tailor safe pressures, positions, and botanicals.
              </p>
            </div>

            {/* Direct Contact Details Card */}
            <div className="bg-[#0D261E] text-[#F3ECE2] rounded-3xl p-7 sm:p-8 border-2 border-[#C59B27]/60 space-y-6 shadow-xl">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C59B27] font-bold block">
                  Direct Inquiries
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F3ECE2] font-normal">
                  The Concierge Desk
                </h3>
                <p className="text-xs sm:text-sm text-[#F3ECE2]/80 leading-relaxed pt-1">
                  Connect with our team directly for immediate assistance, schedule adjustments, or specialized inquiries.
                </p>
              </div>

              <div className="space-y-4 text-sm">
                {/* Phone */}
                <a
                  id="booking-sidebar-phone"
                  href="tel:+254719728779"
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#14382C] border border-[#C59B27]/40 hover:border-[#C59B27] transition-colors group shadow-xs"
                >
                  <Phone className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#C59B27] uppercase tracking-wider font-bold block text-xs">
                      Phone Calls Only
                    </span>
                    <span className="text-base font-semibold text-[#F3ECE2] group-hover:text-[#C59B27] transition-colors">
                      +254 719 728 779
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  id="booking-sidebar-wa"
                  href="https://wa.me/254765728779"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#14382C] border border-[#C59B27]/40 hover:border-[#C59B27] transition-colors group shadow-xs"
                >
                  <MessageCircle className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#C59B27] uppercase tracking-wider font-bold block text-xs">
                      WhatsApp Bookings Only
                    </span>
                    <span className="text-base font-semibold text-[#F3ECE2] group-hover:text-[#C59B27] transition-colors">
                      +254 765 728 779
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  id="booking-sidebar-email"
                  href="mailto:theconciergespa7@gmail.com"
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#14382C] border border-[#C59B27]/40 hover:border-[#C59B27] transition-colors group shadow-xs"
                >
                  <Mail className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#C59B27] uppercase tracking-wider font-bold block text-xs">
                      Email Inquiries
                    </span>
                    <span className="text-base font-semibold text-[#F3ECE2] group-hover:text-[#C59B27] transition-colors break-all">
                      theconciergespa7@gmail.com
                    </span>
                  </div>
                </a>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#14382C]/70 border border-[#C59B27]/30">
                  <Clock className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#C59B27] uppercase tracking-wider font-bold block text-xs">
                      Operating Hours
                    </span>
                    <span className="text-base font-semibold text-[#F3ECE2]">
                      8:00 AM – 7:00 PM (Daily)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Reassurance */}
            <div className="p-6 rounded-3xl bg-[#EAE0D2] border-1.5 border-[#C59B27]/50 space-y-3 shadow-md">
              <div className="flex items-center gap-2 text-[#14382C]">
                <Sparkles className="w-4 h-4 text-[#C59B27]" />
                <span className="text-xs sm:text-sm uppercase tracking-wider font-bold">
                  No Upfront Payment Required
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#4A3E36] leading-relaxed">
                Your booking request is confirmed directly with our concierge team. Payment is settled seamlessly upon completion of your mobile treatment session.
              </p>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}

