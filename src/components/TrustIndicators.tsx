import React from 'react';
import { Award, Leaf, ShieldCheck, Sparkles } from 'lucide-react';

export default function TrustIndicators() {
  const indicators = [
    {
      icon: Award,
      title: 'Certified Mobile Therapists',
      desc: 'Highly trained, vetted & attentive professionals arriving at your location',
    },
    {
      icon: Leaf,
      title: 'Delivered to Your Doorstep',
      desc: 'Homes, luxury residences, boutique hotels & Airbnb suites across Kenya',
    },
    {
      icon: ShieldCheck,
      title: 'Complete Spa Setup',
      desc: 'We bring ergonomic massage beds, sanitized linens & warm organic oils',
    },
    {
      icon: Sparkles,
      title: 'Strictly Professional Therapy',
      desc: 'Certified practitioners — zero tolerance for sexual favours or inappropriate conduct',
    },
  ];

  return (
    <section className="border-y border-[#14382C]/10 bg-[#EAE0D2] py-9 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {indicators.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 group p-3.5 rounded-2xl transition-all duration-300 hover:bg-[#F3ECE2] border border-transparent hover:border-[#C59B27]/40 shadow-xs"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F3ECE2] border-1.5 border-[#C59B27] flex items-center justify-center text-[#14382C] shrink-0 group-hover:border-[#C59B27] group-hover:bg-[#C59B27]/20 transition-all shadow-xs">
                  <IconComponent className="w-5 h-5 text-[#C59B27] group-hover:text-[#14382C] transition-colors" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-base sm:text-lg text-[#14382C] font-semibold tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#7D6B5F] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
