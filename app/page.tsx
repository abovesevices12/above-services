import type { Metadata } from 'next';
import Link from 'next/link';
import ReviewCard from '@/components/ReviewCard';
import FAQItem from '@/components/FAQItem';
import CTABanner from '@/components/CTABanner';
import ContactForm from '@/components/ContactForm';
import BookingButton from '@/components/BookingButton';

export const metadata: Metadata = {
  title: 'Above Services | New England\'s Premier Chimney Specialists | (781) 921-6228',
  description:
    'Above Services is a CSIA-certified chimney company serving New England since 2013. Chimney cleaning, inspection, repair, rebuilds, liner installation, crown repair & fireplace service across MA & Southern NH. Call (781) 921-6228.',
  alternates: {
    canonical: 'https://www.aboveservicesboston.com',
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
      'CSIA-certified Level 1, 2 & 3 inspections. Annual safety checks, real estate inspections, post-incident assessments. Includes camera scan with Level 2.',
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
      'Annual chimney sweeping removes dangerous creosote buildup and debris. Keep your home safe and your fireplace burning efficiently all winter.',
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
      'From tuckpointing and flashing repair to full liner replacement — our CSIA-certified masons restore your chimney\'s structural integrity. Call for a quote.',
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
      'Full and partial chimney reconstruction using premium matching brick and mortar. CSIA-certified masons. We pull all permits and handle insurance documentation.',
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
      'Prevent water damage, animal intrusion, and downdrafts with a premium stainless steel cap. Same-day installation available across New England.',
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
    question: 'What areas do you serve?',
    answer:
      'We serve 32 cities across Massachusetts (Boston, Cambridge, Somerville, Brookline, Newton, Quincy, Medford, Waltham, Arlington, and more) and 9 cities in Southern New Hampshire (Nashua, Salem, Manchester, Derry, Londonderry, Hudson, and more). If you\'re unsure, just call — we likely cover your area.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Absolutely. Above Services is fully licensed by the Commonwealth of Massachusetts and carries comprehensive general liability insurance and workers\' compensation coverage. We\'re also certified by the Chimney Safety Institute of America (CSIA). You can request proof of insurance at any time.',
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
  {
    question: 'How do I book and what does it cost?',
    answer:
      'Call us at (781) 921-6228 to book — we\'ll give you a complete price over the phone before any work begins, no surprises. Cleaning services are flat-rate. For repairs and installations we assess on-site and confirm pricing before starting. Book today and save 10% on your first service.',
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
            Same-Day Available &bull; CSIA Certified &bull; 4.9★ 500+ Reviews
          </div>

          {/* H1 */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white max-w-4xl leading-none sm:leading-[0.88] mb-6">
            <span className="block">New England's</span>
            <span className="block text-amber-400">Premier Chimney</span>
            <span className="block">Specialists</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-300 max-w-xl mb-8 leading-relaxed">
            CSIA-certified chimney cleaning, inspection, repair & rebuilds — serving New England since 2013.
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
              { icon: '⭐', label: '4.9 · 500+ Reviews', sub: 'Google' },
              { icon: '✓', label: 'CSIA Certified', sub: 'Every Tech' },
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
              { number: '4.9★', label: 'Google Rating', icon: '⭐' },
              { number: '12+', label: 'Years Serving New England', icon: '🏠' },
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
              Complete Chimney Services
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Every job is done by our own CSIA-certified crew — no subcontractors. We quote upfront, show up on time, and leave your home clean.
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
              <p className="text-amber-900/70 text-sm mt-1">Same-day availability · CSIA Certified · Licensed & Insured · Massachusetts & Southern NH</p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: 'CSIA Certified',
                description: 'Every technician holds an active CSIA certification — the industry\'s recognized standard for chimney safety.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: 'New England-Based & New England-Focused',
                description: 'We live here. We know New England\'s historic homes, old masonry, and brutal winters.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'No Surprises',
                description: "We quote before we start, explain what we find, and only do work you've agreed to. That's it.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: 'Licensed, Bonded & Insured',
                description: 'Full general liability and workers\' comp coverage. We carry proof of insurance on every job.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-amber-400/30 transition-colors duration-300">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-amber-400 mb-5">
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Credential chips */}
          <div className="border-t border-white/10 pt-10 mb-14">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {['NFPA Standards', 'CSIA Member', 'MA Licensed Contractor'].map((cred) => (
                <span
                  key={cred}
                  className="inline-flex items-center gap-2 border border-amber-400/40 text-amber-400 text-sm font-semibold px-5 py-2.5 rounded-full bg-amber-400/5"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {cred}
                </span>
              ))}
            </div>
          </div>

          {/* About Us story */}
          <div className="border-t border-white/10 pt-14 max-w-3xl mx-auto text-center">
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">Our Story</span>
            <h3 className="text-3xl font-black text-white mt-3 mb-6">Above Services LLC</h3>
            <div className="space-y-4 text-slate-300 text-base leading-relaxed text-left">
              <p>
                Above Services was founded in 2013 by a small crew that grew up working on old New England homes. We started doing inspections and cleanings, and over the years we expanded into everything a chimney might need — from tuckpointing and liner replacement to full rebuilds after storm damage.
              </p>
              <p>
                We're not a franchise and we don't use subcontractors. When you call us, you get the same CSIA-certified technicians who've been doing this work for years. We've now cleaned and repaired thousands of chimneys across Massachusetts — Boston, Cambridge, Newton, Brookline, Gloucester, Newburyport, Framingham, and more — and throughout southern New Hampshire — Nashua, Salem, Manchester, Derry, and beyond.
              </p>
              <p>
                We tell you exactly what we find, give you an honest quote before anything starts, and only do the work you agree to. Most of our business comes from referrals and repeat customers. We think that says more than any marketing could.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-black text-navy-950 mt-3 mb-4">From Call to Clean Chimney</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Here's how a typical job works — from the first call to the final report.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
            {/* Connecting line — desktop only */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-amber-200 z-0" />

            {[
              { step: 1, title: 'Call & Schedule', description: 'Call (781) 921-6228 and we\'ll book you in — often same-day. No wait, no runaround.' },
              { step: 2, title: 'Expert Arrives', description: 'A CSIA-certified technician arrives on time, in uniform, with all the right equipment.' },
              { step: 3, title: 'Work Completed', description: 'We do the job right the first time. Clean, safe, and fully explained to you.' },
              { step: 4, title: 'Satisfaction Guaranteed', description: 'You approve the job. We leave your home spotless and give you a written report.' },
            ].map((s) => (
              <div key={s.step} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center text-white font-black text-2xl mb-5 shadow-lg shadow-amber-500/30">
                  {s.step}
                </div>
                <h3 className="font-bold text-navy-950 text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REVIEWS SECTION ─── */}
      <section className="bg-white py-20 md:py-28" id="reviews">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-black text-navy-950 mt-3 mb-4">
              What New England Homeowners Say
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-black text-navy-950 text-lg">4.9/5</span>
              <span className="text-gray-500 text-sm">&bull; 500+ verified reviews &bull; Google</span>
            </div>
          </div>

          {/* Featured review */}
          <div className="bg-gradient-to-br from-navy-950 to-[#0f2440] rounded-3xl p-10 md:p-14 mb-6 relative overflow-hidden">
            <div className="absolute top-6 left-10 text-8xl leading-none text-amber-400 opacity-20 font-black select-none pointer-events-none">&ldquo;</div>
            <div className="relative">
              <p className="text-xl md:text-2xl italic text-slate-200 leading-relaxed mb-8 max-w-4xl">
                {reviews[0].review}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-black text-lg flex-shrink-0">
                    {reviews[0].name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-black text-lg">{reviews[0].name}</p>
                    <p className="text-slate-400 text-sm">{reviews[0].location} &bull; {reviews[0].date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 sm:ml-auto">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Remaining 4 reviews in 2×2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.slice(1).map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>

          {/* Google Reviews badge */}
          <div className="mt-10 flex justify-center">
            <a
              href="https://maps.app.goo.gl/m6JmBt8W75SP118S8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-white border border-gray-200 hover:border-amber-400 hover:shadow-md rounded-2xl px-6 py-4 transition-all duration-200 group"
              aria-label="See all reviews on Google"
            >
              {/* Google G */}
              <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <div className="flex items-center gap-0.5">
                    {[1,2,3,4,5].map((s) => (
                      <svg key={s} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-black text-navy-950 text-sm">4.9</span>
                </div>
                <p className="text-gray-500 text-xs">500+ reviews on Google</p>
              </div>
              <svg className="w-4 h-4 text-gray-400 group-hover:text-amber-500 flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ─── TRUST & CERTIFICATIONS BAR ─── */}
      <section className="bg-gray-50 py-12 border-y border-gray-200">
        <div className="container mx-auto px-4">
          {/* Mobile: 2-col grid. Desktop: single flex row with dividers */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {[
              {
                icon: (
                  <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                label: 'Fully Licensed & Insured in Massachusetts',
              },
              {
                icon: (
                  <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ),
                label: 'CSIA Certified Technicians',
              },
              {
                icon: (
                  <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
                label: 'Written Reports on Every Job',
              },
              {
                icon: (
                  <svg className="w-4 h-4 text-amber-500 flex-shrink-0 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ),
                label: '4.9 Stars · 500+ Reviews',
              },
              {
                icon: (
                  <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                label: 'Same-Day Service Available',
              },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm font-semibold text-gray-600">
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Desktop: flex row with dividers */}
          <div className="hidden md:flex items-center justify-center divide-x divide-gray-300">
            {[
              {
                icon: (
                  <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                label: 'Fully Licensed & Insured in Massachusetts',
              },
              {
                icon: (
                  <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ),
                label: 'CSIA Certified Technicians',
              },
              {
                icon: (
                  <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
                label: 'Written Reports on Every Job',
              },
              {
                icon: (
                  <svg className="w-4 h-4 text-amber-500 flex-shrink-0 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ),
                label: '4.9 Stars · 500+ Reviews',
              },
              {
                icon: (
                  <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                label: 'Same-Day Service Available',
              },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm font-semibold text-gray-600 px-6 first:pl-0 last:pr-0">
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREAS ─── */}
      <section className="bg-white py-20 md:py-24" id="service-areas">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Left: description + CTA */}
            <div>
              <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">Where We Serve</span>
              <h2 className="text-4xl md:text-5xl font-black text-navy-950 mt-3 mb-4">
                Serving All of New England
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                We cover 32 cities across Massachusetts and 9 cities in Southern New Hampshire. From coastal Gloucester and Newburyport to the NH border towns of Pepperell and Nashua. Not sure if we reach you? Call and ask.
              </p>
              <a
                href="tel:+17819216228"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-black py-4 px-8 rounded-2xl text-base transition-all duration-200 active:scale-95 shadow-lg hover:shadow-amber-500/30"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (781) 921-6228
              </a>
            </div>

            {/* Right: city pills grid */}
            <div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { city: 'Boston', state: 'MA', slug: 'boston' },
                  { city: 'Cambridge', state: 'MA', slug: 'cambridge' },
                  { city: 'Somerville', state: 'MA', slug: 'somerville' },
                  { city: 'Newton', state: 'MA', slug: 'newton' },
                  { city: 'Brookline', state: 'MA', slug: 'brookline' },
                  { city: 'Quincy', state: 'MA', slug: 'quincy' },
                  { city: 'Medford', state: 'MA', slug: 'medford' },
                  { city: 'Waltham', state: 'MA', slug: 'waltham' },
                  { city: 'Nashua', state: 'NH', slug: null },
                  { city: 'Salem', state: 'NH', slug: null },
                  { city: 'Manchester', state: 'NH', slug: null },
                  { city: 'Derry', state: 'NH', slug: null },
                ].map(({ city, state, slug }) => (
                  <Link
                    key={city}
                    href={slug ? `/service-areas/${slug}` : '/service-areas'}
                    className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-navy-950 hover:border-amber-400 hover:bg-amber-50 transition-colors duration-200 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {city}, {state}
                  </Link>
                ))}
              </div>
              <p className="text-gray-500 text-sm">
                Don't see your city?{' '}
                <a href="tel:+17819216228" className="text-amber-600 font-semibold hover:text-amber-700">
                  Call us
                </a>{' '}
                — we likely cover your area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ SECTION ─── */}
      <section className="bg-gray-50 py-20 md:py-24" id="faq">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">Common Questions</span>
            <h2 className="text-4xl md:text-5xl font-black text-navy-950 mt-3 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              A few questions we hear all the time. If yours isn't here, just call — we're easy to reach.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-500 mb-4">Still have questions?</p>
            <a
              href="tel:+17819216228"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-black py-3.5 px-8 rounded-2xl transition-all duration-200 active:scale-95"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us — We're Happy to Help
            </a>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA BANNER ─── */}
      <CTABanner
        heading="Call Above Services Now"
        subtext="Book your chimney service today and save 10%. Over 500 satisfied homeowners across New England. Same-day availability — spots fill fast."
        primaryButtonText="Call Now — Save 10%"
        primaryButtonHref="tel:+17819216228"
        secondaryButtonText="Book Today & Save 10%"
        showPhone={true}
        urgencyNote="Limited same-day spots available"
      />

      {/* ─── CONTACT SECTION ─── */}
      <section className="py-20 md:py-28 bg-white" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-black text-navy-950 mt-3 mb-4">
                Book Your Chimney Service
              </h2>
              <p className="text-gray-500 text-lg">
                Call for same-day availability, or fill out the form below. We respond to all messages within 2 hours during business hours.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Contact info */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-950 mb-1">Phone</p>
                    <a href="tel:+17819216228" className="text-amber-600 font-black text-2xl hover:text-amber-700 transition-colors">
                      (781) 921-6228
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Sun&ndash;Thu: 24/7 &bull; Fri: 8am&ndash;6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-950 mb-1">Email</p>
                    <a href="mailto:aboveservicesllc@gmail.com" className="text-amber-600 hover:text-amber-700 transition-colors font-semibold">
                      aboveservicesllc@gmail.com
                    </a>
                    <p className="text-gray-500 text-sm mt-1">We respond within 2 business hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-950 mb-1">Service Area</p>
                    <p className="text-gray-700 font-semibold">Massachusetts & Southern NH</p>
                    <p className="text-gray-500 text-sm mt-1">41 cities — from Boston to Gloucester to Nashua</p>
                  </div>
                </div>

                {/* Trust note */}
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-bold text-navy-950 text-sm">4.9/5 Stars &bull; 500+ Google Reviews</span>
                  </div>
                  <p className="text-gray-500 text-sm">Over 500 homeowners across New England have used Above Services LLC. We don't push work you don't need — we tell you what your chimney actually requires.</p>
                </div>
              </div>

              {/* Contact form */}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
