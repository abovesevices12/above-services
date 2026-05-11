import type { Metadata } from 'next';
import ServiceHero from '@/components/ServiceHero';
import ReviewCard from '@/components/ReviewCard';
import FAQItem from '@/components/FAQItem';
import CTABanner from '@/components/CTABanner';
import Link from 'next/link';
import { faqSchema, breadcrumbSchema, serviceSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Chimney Repair Boston MA | Tuckpointing & Masonry | (781) 921-6228',
  description:
    'Expert chimney repair in Boston, MA. Tuckpointing, crown repair, liner replacement & flashing repair by CSIA-certified masons. Serving Cambridge, Brookline & Greater Boston. Call (781) 921-6228.',
  keywords: [
    'chimney repair Boston MA',
    'tuckpointing Boston MA',
    'chimney crown repair Boston',
    'chimney flashing repair Boston',
    'chimney mortar repair Boston',
    'chimney repair Cambridge MA',
    'chimney repair Brookline MA',
    'chimney repair Newton MA',
    'chimney repair Somerville MA',
    'chimney mason Boston MA',
    'spalling brick chimney Boston',
    'chimney leak repair Boston MA',
  ],
  alternates: {
    canonical: 'https://www.aboveservicesboston.com/chimney-repair',
  },
  openGraph: {
    title: 'Chimney Repair Boston MA | Above Services | (781) 921-6228',
    description:
      'Expert chimney repair in Boston, MA. Tuckpointing, crown repair, liner replacement & flashing repair by CSIA-certified masons. Serving Cambridge, Brookline & Greater Boston. Call (781) 921-6228.',
    url: 'https://www.aboveservicesboston.com/chimney-repair',
  },
};


const reviews = [
  {
    name: 'Andrew B.',
    location: 'Boston, MA',
    date: 'April 2024',
    review:
      'Had significant mortar deterioration on our 100-year-old chimney. Above Services did a complete tuckpointing job — looks like new. The crew was professional, covered everything, and the workmanship is excellent. Already recommended them to two neighbors.',
  },
  {
    name: 'Nancy P.',
    location: 'Newton, MA',
    date: 'May 2024',
    review:
      'Water was coming into our home through the chimney every time it rained. Above Services found a cracked crown and failing flashing. They repaired both in one visit and waterproofed the exterior masonry. Completely solved the problem. Very professional team.',
  },
  {
    name: 'Kevin S.',
    location: 'Waltham, MA',
    date: 'March 2024',
    review:
      'Our chimney liner was old clay tile, badly cracked. Above Services installed a new stainless steel liner and it made an incredible difference in fireplace draft and efficiency. Fair price and great work. They also cleaned the chimney while they were at it.',
  },
];

const faqs = [
  {
    question: 'How do I know if my chimney needs repairs?',
    answer:
      'Common signs include white staining (efflorescence) on the exterior, crumbling or missing mortar between bricks, cracks in the chimney crown, rust stains on the firebox or damper, water intrusion into the fireplace, and chunks of tile in the firebox (indicating liner damage). If you see any of these, schedule an inspection right away.',
  },
  {
    question: 'What is tuckpointing and do I need it?',
    answer:
      'Tuckpointing is the process of removing deteriorated mortar joints and replacing them with fresh mortar. Boston\'s freeze-thaw cycles are particularly hard on chimney mortar. If your mortar is crumbling, eroded, or missing, tuckpointing is essential to prevent water infiltration and structural damage. Neglected mortar can lead to brick instability over time.',
  },
  {
    question: 'How much does chimney repair cost in Boston?',
    answer:
      'Chimney repair costs vary widely depending on the scope of work. We provide free detailed estimates for all work — pricing varies based on height, extent, and materials. Call us to discuss your situation and we\'ll give you a clear, itemized quote before any work begins.',
  },
  {
    question: 'How long do chimney repairs take?',
    answer:
      'Minor repairs (cap replacement, partial tuckpointing) can often be completed in a single visit of 2–4 hours. More extensive work like full tuckpointing or liner installation may take 1–2 days. Mortar work requires 24–48 hours curing time before use.',
  },
  {
    question: 'Do I need to stop using my fireplace after repairs?',
    answer:
      'It depends on the type of repair. Masonry work using mortar requires a curing period of at least 48–72 hours before you fire up the fireplace. Liner replacements, cap installations, and other non-masonry repairs typically don\'t require any waiting period. We\'ll give you specific instructions after every job.',
  },
  {
    question: 'Do you repair gas fireplace chimneys?',
    answer:
      'Yes. We repair all types of chimney systems including gas fireplace vents, prefabricated metal chimneys, and traditional masonry chimneys. Gas systems have their own unique repair needs — we\'re trained and equipped to handle them all safely.',
  },
];

const schemas = [
  serviceSchema({ name: 'Chimney Repair', description: 'Expert chimney repair in Boston, MA. Tuckpointing, crown repair, liner replacement, flashing repair and complete chimney restoration by CSIA-certified masons.', slug: 'chimney-repair' }),
  faqSchema(faqs),
  breadcrumbSchema([{ name: 'Chimney Repair', href: '/chimney-repair' }]),
];

export default function ChimneyRepairPage() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <ServiceHero
        title="Chimney Repair Boston MA — Licensed & Certified Masons"
        subtitle="Whether it's deteriorating mortar, a cracked crown, or a liner that needs replacing — we diagnose the problem, explain it clearly, and fix it right the first time."
        breadcrumbs={[{ label: 'Chimney Repair', href: '/chimney-repair' }]}
        badge="Call Today & Save 10% on Any Repair"
      />

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">What We Repair</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mt-2 mb-4">
              What We Repair
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From mortar that's crumbling to liners that need full replacement — here's what we handle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Tuckpointing',
                desc: 'Remove and replace deteriorated mortar joints between bricks. Prevents water infiltration and brick movement. Essential for Boston homes exposed to harsh freeze-thaw cycles.',
                icon: '🧱',
              },
              {
                title: 'Chimney Crown Repair',
                desc: 'The concrete crown at the top of your chimney keeps water out of the flue. Cracks allow water inside, causing major damage. We repair or replace crowns to factory specs.',
                icon: '🔝',
              },
              {
                title: 'Chimney Cap Replacement',
                desc: 'Chimney caps keep rain, animals, and debris out of your flue. We install heavy-duty stainless steel caps that last decades and include mesh screens for animal exclusion.',
                icon: '🏠',
              },
              {
                title: 'Flashing Repair',
                desc: 'Chimney flashing is the metal sealing at the base of your chimney where it meets the roof. Failing flashing is the #1 cause of chimney-related roof leaks. We reseal or replace as needed.',
                icon: '🔧',
              },
              {
                title: 'Chimney Liner Repair/Replacement',
                desc: 'A damaged liner allows dangerous combustion gases into your living space. We repair damaged clay tile liners or install new stainless steel or cast-in-place liners.',
                icon: '⚙️',
              },
              {
                title: 'Chimney Waterproofing',
                desc: 'We apply professional-grade masonry waterproofer to protect your chimney from Boston\'s wet climate. This breathable treatment prevents water absorption while allowing moisture vapor to escape.',
                icon: '💧',
              },
            ].map((service) => (
              <div key={service.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="font-bold text-navy-950 text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 md:py-20 bg-navy-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Don't Ignore These Signs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Warning Signs Your Chimney Needs Repair
            </h2>
            <p className="text-blue-300 text-lg max-w-2xl mx-auto">
              Catching chimney damage early saves thousands. Here's what to look out for:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              { sign: 'White Staining (Efflorescence)', desc: 'White chalky deposits on chimney bricks indicate water is moving through the masonry, carrying salts to the surface. This can signal significant moisture damage inside.' },
              { sign: 'Crumbling or Missing Mortar', desc: 'Mortar naturally deteriorates over 20–30 years, but Boston\'s harsh winters accelerate this. Missing mortar allows water and debris into the chimney structure.' },
              { sign: 'Cracks in Chimney Crown or Bricks', desc: 'Cracks allow water to penetrate the chimney system. Even small cracks can rapidly expand through freeze-thaw cycles if not sealed promptly.' },
              { sign: 'Water in Firebox After Rain', desc: 'Finding water inside your firebox is a clear sign of failed flashing, a damaged crown, or liner cracks. Water damage compounds quickly — act fast.' },
              { sign: 'Chunks of Tile in Firebox', desc: 'Pieces of clay tile in your firebox indicate your liner is deteriorating. A damaged liner is a serious safety hazard and requires immediate attention.' },
              { sign: 'Rust on Damper or Firebox', desc: 'Rust indicates moisture is getting into your firebox. This usually means the chimney cap is damaged or the crown is cracked, allowing rainwater in.' },
            ].map((item) => (
              <div key={item.sign} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">{item.sign}</h3>
                  <p className="text-blue-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="tel:+17819216228"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 active:scale-95"
            >
              Call to Book an Inspection
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy-950 mb-2">Customer Reviews</h2>
            <p className="text-gray-600">See what Boston homeowners say about our chimney repair work.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy-950 mb-2">Chimney Repair FAQ</h2>
            <p className="text-gray-600">Common questions about chimney repair in Boston, MA.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy-950 mb-6 text-center">Related Chimney Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { name: 'Chimney Rebuilds', href: '/chimney-rebuilds', desc: 'Full & partial chimney reconstruction' },
              { name: 'Chimney Liner Installation', href: '/chimney-liner-installation', desc: 'Stainless steel & cast-in-place liners' },
              { name: 'Chimney Crown Repair', href: '/chimney-crown-repair', desc: 'Seal & restore your chimney crown' },
              { name: 'Chimney Inspection', href: '/chimney-inspection', desc: 'Level 1, 2 & 3 CSIA-certified inspections' },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-white rounded-xl p-4 border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all duration-200 group text-center"
              >
                <div className="text-amber-500 font-semibold text-sm group-hover:text-amber-600">{service.name}</div>
                <div className="text-gray-500 text-xs mt-1">{service.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Call Above Services Now — Save 10% on Repairs"
        subtext="Don't let small chimney damage become a major expense. Call today, save 10%, and get a full assessment before any work begins. Serving all of Greater Boston."
        primaryButtonText="Call Now — Save 10%"
        primaryButtonHref="tel:+17819216228"
        secondaryButtonText="Book Today & Save 10%"
        secondaryButtonHref="#contact"
        showPhone={false}
      />
    </>
  );
}
