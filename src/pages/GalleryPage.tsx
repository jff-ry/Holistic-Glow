import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, X, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/galleryData';
import { GalleryItem } from '../types';

export default function GalleryPage() {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  return (
    <div className="bg-[#F3ECE2] text-[#24201D]">
      {/* 1. Page Header */}
      <section className="py-14 sm:py-20 border-b border-[#14382C]/10 bg-[#EAE0D2] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full gold-badge text-[#14382C] text-xs uppercase tracking-[0.25em] font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Visual Ambiance</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#14382C] font-normal leading-tight">
            The Spa Experience
          </h1>

          <div className="w-20 h-[2.5px] bg-gradient-to-r from-transparent via-[#C59B27] to-transparent mx-auto" />

          <p className="text-lg sm:text-xl text-[#4A3E36] font-light max-w-2xl mx-auto leading-relaxed">
            A glimpse into the serene textures, natural products, and restorative atmosphere of our wellness sanctuary.
          </p>
        </div>
      </section>

      {/* 2. Gallery Editorial Grid */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-9">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => setActiveImage(item)}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-[#F8F4EE] border-1.5 border-[#C59B27]/40 hover:border-[#C59B27] hover:shadow-xl transition-all duration-300 shadow-sm flex flex-col"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3] bg-[#EAE0D2]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#14382C]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#F3ECE2] text-[#14382C] border-2 border-[#C59B27] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5 text-[#C59B27]" />
                  </div>
                </div>
              </div>

              {/* Caption Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-2.5">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#C59B27] font-bold block">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#14382C] font-semibold group-hover:text-[#0D261E] transition-colors mt-1">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-[#4A3E36] leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle note */}
        <div className="text-center pt-14 text-sm text-[#7D6B5F] font-medium">
          Curated visual atmosphere reflecting our serene suites, natural ingredients, and relaxation standards.
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          id="gallery-lightbox-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#0D261E]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#F3ECE2] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C59B27]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              id="gallery-lightbox-close"
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#F3ECE2]/90 backdrop-blur-sm text-[#14382C] border border-[#C59B27] flex items-center justify-center hover:bg-[#14382C] hover:text-[#F3ECE2] transition-colors shadow-md"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Image */}
            <div className="max-h-[65vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="w-full h-full max-h-[65vh] object-contain"
              />
            </div>

            {/* Modal Caption */}
            <div className="p-7 sm:p-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="space-y-1.5">
                <span className="text-xs uppercase tracking-[0.2em] text-[#C59B27] font-bold block">
                  {activeImage.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#14382C] font-semibold">
                  {activeImage.title}
                </h3>
                <p className="text-sm sm:text-base text-[#4A3E36] max-w-xl">
                  {activeImage.caption}
                </p>
              </div>

              <Link
                id="lightbox-book-now-btn"
                to="/booking"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#14382C] text-[#F3ECE2] text-xs sm:text-sm uppercase tracking-wider font-bold hover:bg-[#0D261E] border-2 border-[#C59B27] shrink-0 shadow-md"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* 3. Bottom Booking Section */}
      <section className="py-16 sm:py-20 bg-[#0D261E] text-[#F3ECE2] text-center border-t-2 border-[#C59B27]/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-5">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal">
            Immerse yourself in serenity.
          </h2>
          <p className="text-base sm:text-lg text-[#F3ECE2]/85 max-w-md mx-auto font-light">
            Experience our five-star luxury spa therapies in an unhurried, private setting.
          </p>
          <div className="pt-3">
            <Link
              id="gallery-bottom-book-btn"
              to="/booking"
              className="inline-flex items-center justify-center px-9 py-4 rounded-full bg-[#C59B27] text-[#0D261E] text-xs sm:text-sm uppercase tracking-[0.2em] font-bold hover:bg-[#DFB257] transition-all shadow-md hover:shadow-lg"
            >
              Schedule Your Treatment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
