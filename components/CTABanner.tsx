'use client';

import React from 'react';

interface CTABannerProps {
  heading?: string;
  subtext?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  showPhone?: boolean;
  urgencyNote?: string;
}

export default function CTABanner({
  heading = 'Call Above Services Now',
  subtext = 'Book today and save 10% on your chimney service. Same-day availability in Greater Boston — spots fill fast.',
  primaryButtonText = 'Call Now — Save 10%',
  primaryButtonHref = 'tel:+17819216228',
  secondaryButtonText = 'Book Today & Save 10%',
  secondaryButtonHref,
  showPhone = true,
  urgencyNote,
}: CTABannerProps) {
  function openModal() {
    window.dispatchEvent(new CustomEvent('openBookingModal'));
  }

  return (
    <section className="relative bg-navy-950 py-16 md:py-20 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #F59E0B 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      <div className="relative container mx-auto px-4 text-center">
        {urgencyNote && (
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/40 text-red-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wide">
            <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
            {urgencyNote}
          </div>
        )}

        {/* Stars */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="flex items-center gap-0.5">
            {[1,2,3,4,5].map((s) => (
              <svg key={s} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-white font-bold text-sm">4.9/5</span>
          <span className="text-slate-400 text-sm">· 500+ Google Reviews</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">{heading}</h2>
        <p className="text-blue-200 text-lg mb-6 max-w-2xl mx-auto leading-relaxed">{subtext}</p>

        {showPhone && (
          <a
            href="tel:+17819216228"
            className="block text-4xl md:text-6xl font-black text-amber-400 hover:text-amber-300 transition-colors duration-200 mb-8 tracking-tight"
          >
            (781) 921-6228
          </a>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={primaryButtonHref}
            className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-black py-4 px-10 rounded-2xl text-lg transition-all duration-200 shadow-2xl hover:shadow-amber-500/40 active:scale-95"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {primaryButtonText}
          </a>
          {secondaryButtonHref ? (
            <a
              href={secondaryButtonHref}
              className="inline-flex items-center justify-center bg-white/10 border-2 border-white/40 hover:bg-white hover:border-white text-white hover:text-navy-950 font-black py-4 px-10 rounded-2xl text-lg transition-all duration-200 active:scale-95"
            >
              {secondaryButtonText}
            </a>
          ) : (
            <button
              onClick={openModal}
              className="inline-flex items-center justify-center bg-white/10 border-2 border-white/40 hover:bg-white hover:border-white text-white hover:text-navy-950 font-black py-4 px-10 rounded-2xl text-lg transition-all duration-200 active:scale-95"
            >
              {secondaryButtonText}
            </button>
          )}
        </div>

        <p className="text-slate-500 text-sm mt-6">
          Licensed & Insured · CSIA Certified · Serving Greater Boston & Southern NH Since 2013
        </p>
      </div>
    </section>
  );
}
