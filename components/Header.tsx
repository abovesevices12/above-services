'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BookingButton from '@/components/BookingButton';

const maCities = [
  { name: 'Boston', slug: 'boston' },
  { name: 'Cambridge', slug: 'cambridge' },
  { name: 'Somerville', slug: 'somerville' },
  { name: 'Brookline', slug: 'brookline' },
  { name: 'Newton', slug: 'newton' },
  { name: 'Lexington', slug: 'lexington' },
  { name: 'Arlington', slug: 'arlington' },
  { name: 'Winchester', slug: 'winchester' },
  { name: 'Medford', slug: 'medford' },
  { name: 'Melrose', slug: 'melrose' },
  { name: 'Stoneham', slug: 'stoneham' },
  { name: 'Quincy', slug: 'quincy' },
  { name: 'Milton', slug: 'milton' },
  { name: 'Needham', slug: 'needham' },
  { name: 'Norwood', slug: 'norwood' },
  { name: 'Waltham', slug: 'waltham' },
  { name: 'Woburn', slug: 'woburn' },
  { name: 'Burlington', slug: 'burlington' },
  { name: 'Reading', slug: 'reading' },
  { name: 'Wilmington', slug: 'wilmington' },
  { name: 'Billerica', slug: 'billerica' },
  { name: 'Chelmsford', slug: 'chelmsford' },
  { name: 'Framingham', slug: 'framingham' },
  { name: 'Acton', slug: 'acton' },
  { name: 'Maynard', slug: 'maynard' },
  { name: 'Andover', slug: 'andover' },
  { name: 'Salem', slug: 'salem-ma' },
  { name: 'Beverly', slug: 'beverly' },
  { name: 'Newburyport', slug: 'newburyport' },
  { name: 'Gloucester', slug: 'gloucester' },
  { name: 'Saugus', slug: 'saugus' },
  { name: 'Pepperell', slug: 'pepperell' },
];

const nhCities = [
  { name: 'Nashua', slug: 'nashua' },
  { name: 'Manchester', slug: 'manchester' },
  { name: 'Salem', slug: 'salem' },
  { name: 'Derry', slug: 'derry' },
  { name: 'Londonderry', slug: 'londonderry' },
  { name: 'Hudson', slug: 'hudson' },
  { name: 'Windham', slug: 'windham' },
  { name: 'Merrimack', slug: 'merrimack' },
  { name: 'Bedford', slug: 'bedford' },
];

const servicesCol1 = [
  { name: 'Chimney Inspection', href: '/chimney-inspection' },
  { name: 'Chimney Cleaning', href: '/chimney-cleaning' },
  { name: 'Chimney Repair', href: '/chimney-repair' },
  { name: 'Chimney Rebuilds', href: '/chimney-rebuilds' },
  { name: 'Chimney Leak Repair', href: '/chimney-leak-repair' },
  { name: 'Tuckpointing', href: '/tuckpointing' },
];

const servicesCol2 = [
  { name: 'Chimney Liner Installation', href: '/chimney-liner-installation' },
  { name: 'Chimney Cap Installation', href: '/chimney-cap-installation' },
  { name: 'Chimney Crown Repair', href: '/chimney-crown-repair' },
  { name: 'Smoke Chamber Repair', href: '/smoke-chamber-repair' },
  { name: 'Fireplace Repair', href: '/fireplace-repair' },
  { name: 'Gas Fireplace Services', href: '/gas-fireplace-services' },
];

const allServices = [...servicesCol1, ...servicesCol2];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (areasRef.current && !areasRef.current.contains(e.target as Node)) {
        setAreasOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="sticky top-0 left-0 right-0 z-50">
      {/* Announcement bar */}
      <div className="bg-navy-950 text-center py-2 px-4 text-xs text-blue-200 font-medium hidden md:block">
        <span className="text-amber-400 font-semibold">★★★★★ 4.9/5</span>
        {' '}· 500+ Google Reviews · CSIA Certified · Same-Day Service Available ·{' '}
        <a href="tel:+17819216228" className="text-amber-400 font-bold hover:text-amber-300 transition-colors">
          (781) 921-6228
        </a>
      </div>

      <header
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-lg border-b border-gray-100'
            : 'bg-white/98 backdrop-blur-sm shadow-sm'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo-white.png"
                alt="Above Services"
                style={{ display: 'block', height: '36px', width: 'auto' }}
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              <Link href="/" className="px-3.5 py-2 text-gray-600 hover:text-amber-600 font-medium rounded-lg hover:bg-amber-50 transition-all duration-150 text-sm">
                Home
              </Link>

              {/* Services dropdown */}
              <div ref={dropdownRef} className="relative flex items-center">
                <button
                  className="flex items-center gap-1 px-3.5 py-2 text-gray-600 hover:text-amber-600 font-medium rounded-lg hover:bg-amber-50 transition-all duration-150 text-sm"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  onClick={() => { setServicesOpen((prev) => !prev); setAreasOpen(false); }}
                >
                  Services
                  <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-[420px] bg-white rounded-2xl shadow-2xl border border-gray-100 py-4 z-50">
                    <div className="px-4 pb-3 border-b border-gray-100 mb-2">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">All Chimney Services</p>
                    </div>
                    <div className="grid grid-cols-2 gap-x-2 px-3">
                      <div>
                        {servicesCol1.map((service) => (
                          <Link key={service.href} href={service.href}
                            onClick={() => setServicesOpen(false)}
                            className="flex items-center gap-2 px-2 py-2.5 text-sm text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-xl transition-colors duration-150 group"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:bg-amber-500 flex-shrink-0" />
                            {service.name}
                          </Link>
                        ))}
                      </div>
                      <div>
                        {servicesCol2.map((service) => (
                          <Link key={service.href} href={service.href}
                            onClick={() => setServicesOpen(false)}
                            className="flex items-center gap-2 px-2 py-2.5 text-sm text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-xl transition-colors duration-150 group"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:bg-amber-500 flex-shrink-0" />
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="mt-3 mx-3 pt-3 border-t border-gray-100">
                      <a href="tel:+17819216228"
                        className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold py-2.5 rounded-xl text-sm transition-colors duration-150"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call for Same-Day Booking
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Service Areas dropdown */}
              <div ref={areasRef} className="relative flex items-center">
                <button
                  className="flex items-center gap-1 px-3.5 py-2 text-gray-600 hover:text-amber-600 font-medium rounded-lg hover:bg-amber-50 transition-all duration-150 text-sm"
                  aria-expanded={areasOpen}
                  aria-haspopup="true"
                  onClick={() => { setAreasOpen((p) => !p); setServicesOpen(false); }}
                >
                  Service Areas
                  <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${areasOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {areasOpen && (
                  <div className="absolute top-full left-0 mt-1 w-[580px] bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden">
                    <div className="grid grid-cols-2 divide-x divide-gray-100">
                      {/* Massachusetts */}
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-xs font-black text-amber-600 uppercase tracking-widest">Massachusetts</p>
                          <Link href="/service-areas" onClick={() => setAreasOpen(false)} className="text-[10px] text-gray-400 hover:text-amber-600 font-semibold transition-colors">View all →</Link>
                        </div>
                        <div className="grid grid-cols-2 gap-x-1">
                          {maCities.map((c) => (
                            <Link
                              key={c.slug}
                              href={`/service-areas/${c.slug}`}
                              onClick={() => setAreasOpen(false)}
                              className="flex items-center gap-1.5 px-2 py-1.5 text-xs text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors duration-100 group"
                            >
                              <span className="w-1 h-1 rounded-full bg-amber-400 flex-shrink-0 group-hover:bg-amber-500" />
                              {c.name}
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* New Hampshire */}
                      <div className="p-4">
                        <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-3">Southern New Hampshire</p>
                        <div className="flex flex-col">
                          {nhCities.map((c) => (
                            <Link
                              key={c.slug}
                              href={`/service-areas/${c.slug}`}
                              onClick={() => setAreasOpen(false)}
                              className="flex items-center gap-1.5 px-2 py-1.5 text-xs text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-100 group"
                            >
                              <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0 group-hover:bg-blue-500" />
                              {c.name}
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-3 border-t border-gray-100">
                          <Link
                            href="/service-areas"
                            onClick={() => setAreasOpen(false)}
                            className="flex items-center justify-center gap-1.5 bg-[#07111f] hover:bg-navy-900 text-white font-bold py-2.5 rounded-xl text-xs transition-colors"
                          >
                            All 41 Service Areas →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Link href="/blog" className="px-3.5 py-2 text-gray-600 hover:text-amber-600 font-medium rounded-lg hover:bg-amber-50 transition-all duration-150 text-sm">
                Blog
              </Link>
              <a href="/#about" className="px-3.5 py-2 text-gray-600 hover:text-amber-600 font-medium rounded-lg hover:bg-amber-50 transition-all duration-150 text-sm">
                About
              </a>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:+17819216228" className="flex items-center gap-1.5 text-gray-700 font-semibold text-sm hover:text-amber-600 transition-colors whitespace-nowrap">
                <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (781) 921-6228
              </a>
              <a
                href="tel:+17819216228"
                className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-white font-bold py-[7px] px-4 rounded-lg text-sm transition-all duration-150 active:scale-95 whitespace-nowrap"
              >
                Call Now
              </a>
              <BookingButton className="flex items-center gap-1.5 border border-amber-500 text-amber-600 hover:bg-amber-50 font-bold py-[7px] px-4 rounded-lg text-sm transition-all duration-150 whitespace-nowrap">
                Get a Quote
              </BookingButton>
            </div>

            {/* Mobile: phone + hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="tel:+17819216228"
                className="flex items-center gap-1.5 bg-amber-500 text-white font-bold px-3 py-2 rounded-lg text-sm active:bg-amber-600 transition-colors"
                aria-label="Call (781) 921-6228"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="hidden sm:inline">Call Now</span>
              </a>
              <button
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle mobile menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="container mx-auto px-4 py-4">
              {/* Social proof strip */}
              <div className="flex items-center justify-center gap-2 bg-amber-50 rounded-xl py-2.5 px-4 mb-4">
                <div className="flex items-center gap-0.5">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-bold text-navy-950">4.9/5</span>
                <span className="text-xs text-gray-500">· 500+ Google Reviews · CSIA Certified</span>
              </div>

              <div className="flex flex-col gap-0.5">
                <Link href="/" className="px-4 py-3 text-gray-700 font-semibold rounded-xl hover:bg-amber-50 hover:text-amber-600 transition-colors" onClick={() => setMobileOpen(false)}>
                  Home
                </Link>
                <div className="px-4 pt-2 pb-1 text-xs font-bold text-gray-400 uppercase tracking-widest">Services</div>
                {allServices.map((service) => (
                  <Link key={service.href} href={service.href}
                    className="px-6 py-2.5 text-gray-600 hover:text-amber-600 rounded-xl hover:bg-amber-50 transition-colors text-sm flex items-center gap-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    {service.name}
                  </Link>
                ))}
                <Link href="/service-areas" className="px-4 py-3 text-gray-700 font-semibold rounded-xl hover:bg-amber-50 hover:text-amber-600 transition-colors mt-1" onClick={() => setMobileOpen(false)}>
                  Service Areas
                </Link>
                <Link href="/blog" className="px-4 py-3 text-gray-700 font-semibold rounded-xl hover:bg-amber-50 hover:text-amber-600 transition-colors" onClick={() => setMobileOpen(false)}>
                  Blog
                </Link>
                <a href="/#about" className="px-4 py-3 text-gray-700 font-semibold rounded-xl hover:bg-amber-50 hover:text-amber-600 transition-colors" onClick={() => setMobileOpen(false)}>
                  About
                </a>
                <a href="/#contact" className="px-4 py-3 text-gray-700 font-semibold rounded-xl hover:bg-amber-50 hover:text-amber-600 transition-colors" onClick={() => setMobileOpen(false)}>
                  Contact
                </a>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-3">
                <a
                  href="tel:+17819216228"
                  className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-black py-3.5 px-4 rounded-xl transition-all duration-200 active:scale-95 text-sm"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
                <a
                  href="https://maps.app.goo.gl/m6JmBt8W75SP118S8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-navy-950 font-bold py-3.5 px-4 rounded-xl transition-all duration-200 active:scale-95 text-sm"
                >
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Reviews
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
