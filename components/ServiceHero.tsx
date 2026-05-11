'use client';

import React from 'react';
import Link from 'next/link';

interface Breadcrumb {
  label: string;
  href: string;
}

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  breadcrumbs?: Breadcrumb[];
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
  };
  badge?: string;
}

export default function ServiceHero({
  title,
  subtitle,
  breadcrumbs = [],
  primaryCTA = {
    text: 'Call Now: (781) 921-6228',
    href: 'tel:+17819216228',
  },
  secondaryCTA = {
    text: 'Book Today — Save 10%',
  },
  badge,
}: ServiceHeroProps) {
  function openModal() {
    window.dispatchEvent(new CustomEvent('openBookingModal'));
  }

  return (
    <section className="relative bg-navy-950 py-20 md:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-[#1e3a5f] opacity-90" />

      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative container mx-auto px-4">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="mb-6 flex items-center gap-2 text-sm text-blue-300" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                <span className="text-blue-500">/</span>
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-white">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-amber-400 transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            {badge}
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-blue-200 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          {subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={primaryCTA.href}
            className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 shadow-lg hover:shadow-amber-500/25 active:scale-95"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {primaryCTA.text}
          </a>
          <button
            onClick={openModal}
            className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 hover:bg-white hover:text-navy-950 active:scale-95"
          >
            {secondaryCTA.text}
          </button>
        </div>

        {/* Urgency pill */}
        <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 text-red-300 text-xs font-semibold px-3 py-1 rounded-full mt-6 uppercase tracking-wide">
          <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
          Call today & save 10% — limited availability
        </div>

        {/* Trust row */}
        <div className="flex flex-wrap items-center gap-6 mt-4 text-blue-300 text-sm">
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Licensed & Insured
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            500+ 5-Star Reviews
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Same-Day Service Available
          </div>
        </div>
      </div>
    </section>
  );
}
