import type { Metadata } from 'next';
import Link from 'next/link';
import ReviewCard from '@/components/ReviewCard';
import FAQItem from '@/components/FAQItem';
import CTABanner from '@/components/CTABanner';
import ContactForm from '@/components/ContactForm';
import BookingButton from '@/components/BookingButton';

export const metadata: Metadata = {
  title: 'Chimney Cleaning & Repair in Boston, MA | Above Services',
  description:
    'Chimney cleaning, inspection, repair, liner & crown work in Boston, Saugus, Lynn & the North Shore. Licensed & insured. Same-day service. Call (781) 921-6228.',
  alternates: {
    canonical: 'https://www.aboveservices.us',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.aboveservices.us',
    siteName: 'Above Services',
    title: 'Chimney Cleaning & Repair in Boston, MA | Above Services',
    description:
      'Chimney cleaning, inspection, repair, liner & crown work in Boston, Saugus, Lynn & the North Shore. Licensed & insured. Same-day service. Call (781) 921-6228.',
  },
};

const services = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    name: 'Chimney Inspection',
    description:
      'Level 1, 2 & 3 chimney inspections — annual safety checks, home-buying inspections, and post-incident assessments. Includes camera scan with Level 2.',
    href: '/chimney-inspection',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    name: 'Chimney Cleaning',
    description:
      'Annual chimney sweeping and cleaning removes dangerous creosote buildup and debris. Keep your home safe and your fireplace burning efficiently all winter.',
    href: '/chimney-cleaning',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    name: 'Chimney Repair',
    description:
      'From tuckpointing and flashing repair to full liner replacement — our experienced masons restore your chimney\'s structural integrity. Call for a quote.',
    href: '/chimney-repair',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    name: 'Chimney Rebuilds',
    description:
      'Full and partial chimney reconstruction using premium matching brick and mortar. Experienced masons. We pull all permits and handle insurance documentation.',
    href: '/chimney-rebuilds',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    name: 'Chimney Liner Installation',
    description:
      'Stainless steel and cast-in-place liners restore safe draft and prevent dangerous CO leaks. 20-year warranty available. Camera inspection included.',
    href: '/chimney-liner-installation',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    name: 'Chimney Cap Installation',
    description:
      'Prevent water damage, animal intrusion, and downdrafts with a premium stainless steel cap. Same-day installation available across Greater Boston.',
    href: '/chimney-cap-installation',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    name: 'Chimney Crown Repair',
    description:
      'Stop water infiltration before it destroys your chimney. New England\'s freeze-thaw cycles are brutal on crowns — small cracks today become big problems next winter.',
    href: '/chimney-crown-repair',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    name: 'Smoke Chamber Repair',
    description:
      'Parging and crack repair for smoke chambers. Improves draft, prevents CO seepage, and reduces creosote accumulation. Free camera inspection included.',
    href: '/smoke-chamber-repair',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    name: 'Fireplace Repair',
    description:
      'Restore your fireplace to safe, beautiful condition. Damper repair, firebox restoration, gas fireplace service, and fireplace insert installation.',
    href: '/fireplace-repair',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    name: 'Gas Fireplace Services',
    description:
      'Annual tune-ups, ignition repair, thermocouple replacement, and safety inspections for all gas fireplace brands. Direct-vent, natural-vent, and vent-free models.',
    href: '/gas-fireplace-services',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    name: 'Chimney Leak Repair',
    description:
      "Stop water damage before it spreads. Flashing repair, crown sealing, brick waterproofing, and cap installation. New England's freeze-thaw cycles make chimney leaks urgent.",
    href: '/chimney-leak-repair',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    name: 'Tuckpointing',
    description:
      'Restore crumbling mortar joints with color-matched repointing. Prevents water infiltration, restores structural integrity, and extends chimney life by decades.',
    href: '/tuckpointing',
  },
];

const reviews = [
  {
    name: 'Michael T.',
    location: 'Cambridge, MA',
    date: 'March 2024',
    review:
      'Above Services came out same-day to clean our chimney before a big snowstorm. The tech was thorough, professional, and explained everything. Found a small crack in the crown and fixed it on the spot. Highly recommend to any Boston homeowner!',
  },
  {
    name: 'Sarah L.',
    location: 'Brookline, MA',
    date: 'February 2024',
    review:
      'We have a 1920s colonial with an original fireplace. Above Services repaired the damper and cleaned out decades of buildup. The difference in draft is incredible. Our first fire of the season burned perfectly. Worth every penny.',
  },
  {
    name: 'David R.',
    location: 'Newton, MA',
    date: 'January 2024',
    review:
      'Had a stainless steel chimney liner installed after our old clay tile liner cracked. The crew was on time, incredibly professional, and finished in a single day. The camera inspection they showed me afterward was reassuring — clean, safe, and solid. Five stars without question.',
  },
  {
    name: 'Jennifer M.',
    location: 'Somerville, MA',
    date: 'December 2023',
    review:
      'Hired Above Services for a Level 2 chimney inspection before closing on our new home. They caught a deteriorated smoke chamber and cracked flue tiles the other inspector missed. The detailed written report saved us from a serious safety issue. Worth every dollar — do not skip this before buying a home.',
  },
  {
    name: 'Robert K.',
    location: 'Quincy, MA',
    date: 'November 2023',
    review:
      'Had significant tuckpointing work done on our chimney — several courses of mortar had deteriorated badly. The masonry crew was skilled, cleaned up after themselves, and the repair looks seamless. Already scheduled next year\'s cleaning.',
  },
];

const faqs = [
  {
    question: 'How often should I have my chimney cleaned?',
    answer:
      'The National Fire Protection Association (NFPA) recommends annual chimney inspections and cleaning as needed. If you use your fireplace regularly (more than a cord of wood per season), you should have it cleaned annually. Occasional users may be able to go every 2 years, but an annual inspection is always recommended to catch issues early.',
  },
  {
    question: 'How much does chimney cleaning cost in Boston?',
    answer:
      'Chimney cleaning is flat-rate, and we give you a complete price over the phone before any work begins — no surprises. Repairs and installations are quoted after an on-site assessment, and we confirm the price before we start. Call (781) 921-6228 for a quote and book today to save 10% on your first service.',
  },
  {
    question: 'What are the signs I need chimney repair?',
    answer:
      'Common warning signs include cracked or crumbling mortar joints, flaking or spalling bricks, white staining on the brick (efflorescence), rust on the damper or firebox, water stains on the ceiling or walls near the chimney, a cracked crown, and a smoky or drafty fireplace. If you notice any of these, schedule an inspection before the next heating season.',
  },
  {
    question: 'Do you service gas fireplaces?',
    answer:
      'Yes. We offer annual tune-ups, ignition repair, thermocouple replacement, and safety inspections for direct-vent, natural-vent, and vent-free gas fireplaces.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve Greater Boston and the North Shore, including Boston, Saugus, Lynn, Revere, Malden, Medford, Somerville, Cambridge, Brookline, Newton, Quincy, Waltham, Arlington, Peabody, Salem, Gloucester, and surrounding towns. If you\'re unsure, just call — we likely cover your area.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Absolutely. Above Services is fully licensed by the Commonwealth of Massachusetts and carries comprehensive general liability insurance and workers\' compensation coverage. You can request proof of insurance at any time.',
  },
  {
    question: 'Do you offer same-day service?',
    answer:
      'Yes! We offer same-day service for most of our service areas, subject to availability. For urgent chimney issues or a suspected blockage, call us at (781) 921-6228 and we\'ll do our best to get a technician to you the same day.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, Mastercard, American Express, Discover), cash, and check. We also offer financing options for larger repair projects. Ask about our payment plans when you call.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-screen flex items-center bg-navy-950 overflow-hidden">
        {/* Multi-layer gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-navy-950 to-[#0f1f35]" />

        {/* Amber glow orb — top right */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #F59E0B 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
        {/* Amber glow orb — bottom left */}
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-8 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #FBBF24 0%, transparent 70%)', filter: 'blur(80px)' }}
        />

        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative container mx-auto px-4 py-24 md:py-32">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-sm font-semibold px-5 py-2 rounded-full mb-8">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
            </span>
            Same-Day Available &bull; Licensed & Insured &bull; 5.0★ 60+ Reviews
          </div>

          {/* H1 */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white max-w-4xl leading-none sm:leading-[0.88] mb-6">
            <span className="block">Boston Chimney</span>
            <span className="block text-amber-400">Cleaning & Repair</span>
            <span className="block">Specialists</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-300 max-w-xl mb-8 leading-relaxed">
            Chimney cleaning, inspection, repair & rebuilds in Boston, Saugus, Lynn and the North Shore — serving Greater Boston since 2013.
            Honest pricing. Same-day availability. No subcontractors.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <a
              href="tel:+17819216228"
              className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-white font-black py-4 px-8 rounded-xl text-lg transition-all duration-200 shadow-2xl hover:shadow-amber-500/40 active:scale-[0.97]"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (781) 921-6228
            </a>
            <BookingButton className="inline-flex items-center justify-center bg-white/10 border border-white/30 hover:bg-white hover:text-navy-950 text-white font-black py-4 px-8 rounded-xl text-lg transition-all duration-200 active:scale-[0.97] backdrop-blur-sm">
              Book Online & Save 10%
            </BookingButton>
          </div>

          {/* Micro trust line */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-400 text-sm mb-12">
            {['No hidden fees', 'Upfront pricing', '100% satisfaction guaranteed', 'Licensed & insured'].map((t) => (
              <span key={t} className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {t}
              </span>
            ))}
          </div>

          {/* Trust badges — compact horizontal list */}
          <div className="flex flex-wrap gap-3 max-w-2xl">
            {[
              { icon: '🛡', label: 'Licensed & Insured', sub: 'MA State' },
              { icon: '⭐', label: '5.0 · 60+ Reviews', sub: 'Google' },
              { icon: '✓', label: 'Experienced Crew', sub: 'No Subcontractors' },
              { icon: '⚡', label: 'Same-Day Service', sub: 'Most Days' },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2.5 bg-white/8 border border-white/12 rounded-xl px-4 py-2.5 backdrop-blur-sm">
                <span className="text-lg leading-none" aria-hidden="true">{b.icon}</span>
                <div>
                  <p className="text-white font-bold text-sm leading-none">{b.label}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{b.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 text-xs font-medium hidden md:flex" aria-hidden="true">
            <span>Scroll</span>
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP ─── */}
      <section className="bg-amber-500 py-8 md:py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { number: '500+', label: 'Happy Customers', icon: '😊' },
              { number: '5.0★', label: 'Google Rating', icon: '⭐' },
              { number: '13+', label: 'Years Serving Greater Boston', icon: '🏠' },
              { number: '100%', label: 'Satisfaction Guaranteed', icon: '✓' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center py-5 px-4 ${i < 3 ? 'border-b md:border-b-0 md:border-r border-amber-400/30' : ''} ${i >= 2 ? 'border-b-0' : ''}`}
              >
                <div className="text-4xl md:text-5xl font-black text-navy-950 tracking-tight">{stat.number}</div>
                <div className="text-navy-900/70 text-sm font-bold uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES SECTION ─── */}
      <section className="bg-white py-20 md:py-28 touch-pan-y" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-black text-navy-950 mt-3 mb-4">
              Chimney Cleaning, Repair & Inspection Services
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Every job is done by our own crew — no subcontractors. We quote upfront, show up on time, and leave your home clean.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm md:hover:shadow-2xl md:hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden flex flex-col"
              >
                {/* Animated amber top border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Icon */}
                <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-5 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-navy-950 mb-2">{service.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{service.description}</p>

                <div className="flex items-center justify-end mt-auto">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1 text-navy-950 font-semibold text-sm hover:text-amber-600 transition-colors duration-200"
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}

            {/* CTA card */}
            <div className="bg-gradient-to-br from-navy-950 to-[#0f2440] rounded-2xl p-8 flex flex-col items-start border border-navy-900">
              <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Not Sure What You Need?</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Call us and describe what you're seeing. We'll tell you honestly what it sounds like and book a same-day visit if needed.
              </p>
              <a
                href="tel:+17819216228"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-black py-3.5 px-7 rounded-2xl transition-all duration-200 active:scale-95 text-base"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now — Save 10%
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MID-PAGE CALL STRIP ─── */}
      <section className="bg-amber-500 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-black text-2xl md:text-3xl text-navy-950">Book Today & Save 10% on Any Service</p>
              <p className="text-amber-900/70 text-sm mt-1">Same-day availability · Licensed & Insured · Greater Boston & the North Shore</p>
            </div>
            <a
              href="tel:+17819216228"
              className="flex-shrink-0 inline-flex items-center gap-3 bg-navy-950 hover:bg-[#0f2440] text-white font-black py-4 px-10 rounded-2xl text-xl transition-all duration-200 active:scale-95 shadow-2xl whitespace-nowrap"
            >
              <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (781) 921-6228
            </a>
          </div>
        </div>
      </section>

      {/* ─── BEFORE / AFTER SECTION ─── */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">Transformations</span>
            <h2 className="text-4xl md:text-5xl font-black text-navy-950 mt-3 mb-4">See the Difference</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">What a neglected chimney looks like — and what it looks like after we've done the work.</p>
          </div>

          {/* Before / After cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">

            {/* BEFORE */}
            <div className="relative bg-gray-900 rounded-3xl p-10 overflow-hidden">
              <div className="absolute top-6 left-6 bg-red-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">Before</div>
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, #7f1d1d 0%, transparent 50%)' }}
              />
              <div className="relative mt-8">
                <div className="w-20 h-20 bg-red-900/50 rounded-2xl flex items-center justify-center mb-8">
                  <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-white mb-6">Neglected Chimney</h3>
                <ul className="space-y-3">
                  {[
                    'Dangerous creosote buildup (fire risk)',
                    'Cracked mortar joints & spalling brick',
                    'Water infiltration & interior damage',
                    'Blocked flue — carbon monoxide risk',
                    'Failed chimney crown & cap',
                    'Deteriorated smoke chamber',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-400 text-sm">
                      <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* AFTER */}
            <div className="relative bg-white rounded-3xl p-10 overflow-hidden border-2 border-amber-200 shadow-2xl">
              <div className="absolute top-6 left-6 bg-amber-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">After Above Services</div>
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #F59E0B 0%, transparent 50%)' }}
              />
              <div className="relative mt-8">
                <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mb-8">
                  <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-navy-950 mb-6">Professionally Restored</h3>
                <ul className="space-y-3">
                  {[
                    'Flue swept clean — zero creosote',
                    'Repointed mortar, sealed masonry',
                    'Watertight crown, flashing & cap',
                    'Clear draft — safe carbon monoxide venting',
                    'New or relined chimney liner',
                    'Smooth, sealed smoke chamber',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                      <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA below before/after */}
          <div className="text-center">
            <p className="text-gray-600 mb-6 text-lg">Ready for the &ldquo;After&rdquo;? Call Above Services today.</p>
            <a
              href="tel:+17819216228"
              className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-white font-black py-4 px-10 rounded-2xl text-xl transition-all shadow-lg hover:shadow-amber-500/30 active:scale-95"
            >
              <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now For 10% Off
            </a>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE ABOVE SERVICES ─── */}
      <section className="bg-navy-950 py-20 md:py-28" id="about">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">Why Above Services</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
              Why Homeowners Keep Calling Us Back
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              We've been working in New England homes for over a decade. We know these old chimneys, what New England winters do to them, and what it takes to fix them right.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2
