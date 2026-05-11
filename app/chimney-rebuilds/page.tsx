import type { Metadata } from 'next';
import ServiceHero from '@/components/ServiceHero';
import ReviewCard from '@/components/ReviewCard';
import FAQItem from '@/components/FAQItem';
import CTABanner from '@/components/CTABanner';
import Link from 'next/link';
import { faqSchema, breadcrumbSchema, serviceSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Chimney Rebuilds Boston MA | Full & Partial Reconstruction | (781) 921-6228',
  description:
    'Expert chimney rebuilds in Boston, MA. Full & partial chimney reconstruction using premium matching materials. CSIA-certified masons serving Cambridge, Brookline, Newton & Greater Boston. Call (781) 921-6228.',
  keywords: [
    'chimney rebuilds Boston MA',
    'chimney reconstruction Boston',
    'partial chimney rebuild Boston',
    'full chimney rebuild Boston MA',
    'chimney mason Boston MA',
    'chimney rebuilds Cambridge MA',
    'chimney rebuilds Brookline MA',
    'chimney rebuilds Newton MA',
    'historic chimney rebuild Boston',
    'chimney rebuild cost Boston MA',
    'collapsed chimney repair Boston',
    'chimney insurance claim Boston MA',
  ],
  alternates: {
    canonical: 'https://www.aboveservicesboston.com/chimney-rebuilds',
  },
  openGraph: {
    title: 'Chimney Rebuilds Boston MA | Above Services | (781) 921-6228',
    description:
      'Expert chimney rebuilds in Boston, MA. Full & partial chimney reconstruction using premium matching materials. CSIA-certified masons serving Cambridge, Brookline, Newton & Greater Boston. Call (781) 921-6228.',
    url: 'https://www.aboveservicesboston.com/chimney-rebuilds',
  },
};


const reviews = [
  {
    name: 'Eleanor T.',
    location: 'Beacon Hill, Boston, MA',
    date: 'September 2024',
    review:
      'Our 1880s townhouse had a chimney that was leaning visibly — a serious structural issue we had been putting off for years. Above Services did a full rebuild above the roofline, matching the original brick perfectly. You honestly cannot tell new work was done. The crew was meticulous and professional from start to finish.',
  },
  {
    name: 'Patrick D.',
    location: 'South Boston, MA',
    date: 'October 2024',
    review:
      'After a small chimney fire, our insurance adjuster recommended a partial rebuild. Above Services documented the damage thoroughly, which made the insurance claim straightforward. The reconstruction took three days and the result is better than the original. Highly recommend for any major chimney work.',
  },
  {
    name: 'Renee H.',
    location: 'Jamaica Plain, Boston, MA',
    date: 'August 2024',
    review:
      'Five years of deferred maintenance had left our chimney with severe spalling and failed mortar throughout the top two feet. Above Services assessed it, pulled the necessary permits, and rebuilt it with matching brick they sourced from a local yard. Fantastic work and they kept me updated throughout the project.',
  },
];

const faqs = [
  {
    question: 'How long does a chimney rebuild take?',
    answer:
      'Most chimney rebuilds take 2–5 days depending on the scope of work. A partial rebuild of the top few courses may be completed in 2 days. A full rebuild above the roofline typically takes 3–5 days. Mortar requires an additional 24–48 hours of curing time before you can use the fireplace, and we factor that into our project schedule.',
  },
  {
    question: 'Will my homeowner\'s insurance cover a chimney rebuild?',
    answer:
      'In many cases, yes — especially if the damage was caused by a fire, severe storm, lightning strike, or other covered peril. We provide thorough written documentation of the damage, including photographs and a detailed scope of work, which makes the insurance claim process much easier. We have extensive experience working with insurance adjusters and can help walk you through the process.',
  },
  {
    question: 'Can you match the original brick and mortar?',
    answer:
      'Yes. Matching brick and mortar is one of our specialties, especially important in Boston where many homes have historic or antique brick that can be difficult to source. We take core samples of the existing mortar to analyze the composition, and we work with local masonry suppliers to source brick that matches your existing chimney as closely as possible in color, texture, and size.',
  },
  {
    question: 'Can I use my fireplace while a rebuild is being scheduled?',
    answer:
      'No. Once we have inspected your chimney and determined it needs a rebuild, we strongly recommend stopping use immediately. A structurally compromised chimney poses a serious fire hazard and a risk of carbon monoxide infiltration into your home. We can usually schedule most rebuilds within 1–2 weeks of the initial inspection.',
  },
  {
    question: 'Is a permit required for a chimney rebuild?',
    answer:
      'Yes — chimney rebuilds require a building permit in Boston and most surrounding communities. Above Services pulls all necessary permits as part of our service. We handle the permit application, scheduling of required inspections, and final sign-off. You don\'t need to deal with the building department at all.',
  },
  {
    question: 'What is the difference between repointing and rebuilding?',
    answer:
      'Repointing (also called tuckpointing) involves removing deteriorated mortar from the joints between existing bricks and replacing it with fresh mortar — the bricks themselves remain in place. A rebuild involves removing the damaged masonry units (bricks) themselves and reconstructing the chimney with new brick and mortar. Repointing is appropriate when the bricks are sound but the mortar has failed. A rebuild is necessary when the bricks are spalling, cracked, structurally compromised, or when the damage is too extensive for repointing alone.',
  },
];

const schemas = [
  serviceSchema({ name: 'Chimney Rebuilds', description: 'Expert full and partial chimney reconstruction in Boston, MA. Premium matching brick and mortar by CSIA-certified masonry specialists.', slug: 'chimney-rebuilds' }),
  faqSchema(faqs),
  breadcrumbSchema([{ name: 'Chimney Rebuilds', href: '/chimney-rebuilds' }]),
];

export default function ChimneyRebuildsPage() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <ServiceHero
        title="Chimney Rebuilds in Boston, MA"
        subtitle="Some chimneys have been patched too many times. When the masonry is too far gone for repairs, we take it down and rebuild it — matching your original brick, pulling all the permits, and getting it right."
        breadcrumbs={[{ label: 'Chimney Rebuilds', href: '/chimney-rebuilds' }]}
        badge="Inspection Included with Every Quote"
      />

      {/* Warning Signs */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Know the Signs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mt-2 mb-4">
              When Is a Chimney Rebuild Needed?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Some chimney damage goes beyond what repointing or minor repair can fix. Here are six warning signs that a rebuild may be required.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Severe Spalling Brick',
                desc: 'When brick faces are flaking or breaking apart throughout the chimney, the structural integrity is compromised. Spalled brick cannot hold mortar properly and the condition accelerates quickly with Boston\'s freeze-thaw cycles.',
                icon: '🧱',
              },
              {
                title: 'Leaning or Tilting Chimney',
                desc: 'A chimney that has visibly shifted from plumb is an emergency. Foundation movement, failed mortar, or water damage can cause leaning — and a leaning chimney can collapse without warning.',
                icon: '⚠️',
              },
              {
                title: 'Collapsed or Destroyed Liner',
                desc: 'When a clay tile liner has severely deteriorated or collapsed, it often means significant heat has been transferred to the surrounding masonry for years, requiring a full inspection and often a structural rebuild.',
                icon: '🔥',
              },
              {
                title: 'Fire or Heat Damage',
                desc: 'Chimney fires burn at over 2,000°F and can crack brick, destroy mortar, and compromise the entire structure. After any chimney fire, a Level 2 inspection is required — and a rebuild is frequently needed.',
                icon: '💥',
              },
              {
                title: 'Extensive Mortar Failure',
                desc: 'When mortar joints are missing, crumbling, or recessed more than ¾ inch throughout large sections of the chimney, the masonry is structurally unsound. Repointing alone is not sufficient — a rebuild is the proper solution.',
                icon: '🔨',
              },
              {
                title: 'Freeze-Thaw Damage',
                desc: 'Boston\'s harsh winters are brutal on chimneys. Water infiltrating small cracks freezes and expands, widening those cracks each cycle. After years of neglect, the cumulative damage can make a rebuild more cost-effective than piecemeal repairs.',
                icon: '❄️',
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-navy-950 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full vs Partial */}
      <section className="py-16 md:py-20 bg-navy-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Understanding Your Options</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Full vs. Partial Chimney Rebuild
            </h2>
            <p className="text-blue-300 text-lg max-w-2xl mx-auto">
              The right scope of work depends on where the damage is and how extensive it has become. Here's how we assess which approach is right for your chimney.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Full Chimney Rebuild</h3>
              <p className="text-blue-300 text-sm leading-relaxed mb-5">
                A full rebuild involves demolishing and reconstructing the entire chimney above the roofline — the most commonly damaged section. This is typically required when damage is extensive throughout the above-roof portion, when the chimney is leaning, or after major fire damage.
              </p>
              <ul className="space-y-2 mb-6">
                {['Complete reconstruction above roofline', 'New liner installation included', 'New crown pour and waterproofing', 'Flashing replacement', 'Matches original brick profile'].map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-sm text-blue-200">
                    <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="bg-amber-500/20 rounded-xl p-4 text-center">
                <div className="text-amber-400 font-bold text-xl">Call for a Quote</div>
                <div className="text-blue-300 text-xs mt-1">Final price depends on chimney height and materials</div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Partial Chimney Rebuild</h3>
              <p className="text-blue-300 text-sm leading-relaxed mb-5">
                A partial rebuild targets only the damaged sections of the chimney — preserving sound masonry while replacing what has failed. This approach is more cost-effective when damage is localized, such as the top few courses or a single damaged face of the chimney.
              </p>
              <ul className="space-y-2 mb-6">
                {['Targeted reconstruction of damaged sections', 'Preserves sound existing masonry', 'Blended brick and mortar matching', 'New crown if top section rebuilt', 'Waterproofing of entire chimney'].map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-sm text-blue-200">
                    <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="bg-amber-500/20 rounded-xl p-4 text-center">
                <div className="text-amber-400 font-bold text-xl">Call for a Quote</div>
                <div className="text-blue-300 text-xs mt-1">Final price depends on extent of damage and access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mt-2 mb-4">
              Our Chimney Rebuild Process
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Here's how a chimney rebuild works — from the first call to the final waterproofing coat.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                step: '1',
                title: 'Assessment & Engineering',
                desc: 'We perform a full structural assessment — top to bottom — documenting all damage with photographs. For complex or tall chimneys, we consult with a masonry engineer to ensure the rebuild plan meets local code requirements.',
              },
              {
                step: '2',
                title: 'Material Selection',
                desc: 'We source brick that matches your existing chimney in color, texture, and size. Our team analyzes the existing mortar composition to create a matching mix — critically important for historic Boston homes where aesthetics matter.',
              },
              {
                step: '3',
                title: 'Demolition & Construction',
                desc: 'We carefully dismantle the damaged section, protecting your roof and flashing throughout the process. New masonry is laid course by course, with each layer checked for plumb and level. All work meets or exceeds MA building code.',
              },
              {
                step: '4',
                title: 'Waterproofing & Crown',
                desc: 'Every rebuild concludes with a new concrete crown pour — sloped to shed water — and an application of professional-grade breathable masonry waterproofer. We install a stainless steel chimney cap to complete the system.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-navy-950 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy-950 mb-2">What Our Customers Say</h2>
            <p className="text-gray-600">Real reviews from Boston homeowners about our chimney rebuild work.</p>
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
            <h2 className="text-3xl font-bold text-navy-950 mb-2">Chimney Rebuild FAQ</h2>
            <p className="text-gray-600">Common questions about chimney rebuilds in Boston, MA.</p>
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
              { name: 'Chimney Repair', href: '/chimney-repair', desc: 'Tuckpointing, crown & liner repair' },
              { name: 'Chimney Crown Repair', href: '/chimney-crown-repair', desc: 'Seal & restore your chimney crown' },
              { name: 'Chimney Liner Installation', href: '/chimney-liner-installation', desc: 'Stainless steel & cast-in-place liners' },
              { name: 'Chimney Inspection', href: '/chimney-inspection', desc: 'Level 1, 2 & 3 inspections' },
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
        heading="Call Above Services — Book Your Rebuild Today"
        subtext="Don't let structural chimney damage put your home at risk. Call today, save 10%, and get a full assessment before any work begins. Serving all of Greater Boston."
        primaryButtonText="Call Now — Save 10%"
        primaryButtonHref="tel:+17819216228"
        secondaryButtonText="Book Today & Save 10%"
        secondaryButtonHref="#contact"
        showPhone={false}
      />
    </>
  );
}
