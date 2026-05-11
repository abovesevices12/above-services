import type { Metadata } from 'next';
import ServiceHero from '@/components/ServiceHero';
import ReviewCard from '@/components/ReviewCard';
import FAQItem from '@/components/FAQItem';
import CTABanner from '@/components/CTABanner';
import Link from 'next/link';
import { faqSchema, breadcrumbSchema, serviceSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Chimney Crown Repair Boston MA | Above Services | (781) 921-6228',
  description:
    'Chimney crown repair & replacement in Boston, MA. Prevent water infiltration & freeze-thaw damage. Expert masons. Call (781) 921-6228.',
  keywords: [
    'chimney crown repair Boston MA',
    'chimney crown replacement Boston',
    'cracked chimney crown Boston',
    'chimney crown cost Boston MA',
    'chimney crown sealer Boston',
    'chimney crown repair Cambridge MA',
    'chimney crown repair Brookline MA',
    'chimney crown repair Newton MA',
    'chimney crown repair Somerville MA',
    'chimney water damage Boston MA',
    'freeze thaw chimney damage Boston',
    'concrete chimney crown Boston',
  ],
  alternates: {
    canonical: 'https://www.aboveservicesboston.com/chimney-crown-repair',
  },
  openGraph: {
    title: 'Chimney Crown Repair Boston MA | Above Services | (781) 921-6228',
    description:
      'Chimney crown repair & replacement in Boston, MA. Prevent water infiltration & freeze-thaw damage. Expert masons.',
    url: 'https://www.aboveservicesboston.com/chimney-crown-repair',
  },
};


const reviews = [
  {
    name: 'Christine L.',
    location: 'Newton, MA',
    date: 'April 2024',
    review:
      'Had a Level 2 inspection when selling our house and it flagged a cracked chimney crown. Above Services came out within days, assessed the damage, and repaired the crown before the closing date. The buyer\'s inspector re-checked and approved it. Efficient, professional, and reasonably priced.',
  },
  {
    name: 'Frank O.',
    location: 'Malden, MA',
    date: 'March 2024',
    review:
      'Our chimney crown had large cracks running clear through it — had been that way for years. Above Services replaced it completely with a new reinforced concrete pour, properly sloped to shed water. They also waterproofed the whole chimney while they were up there. Very thorough crew.',
  },
  {
    name: 'Susan T.',
    location: 'Cambridge, MA',
    date: 'May 2024',
    review:
      'I called about water appearing in our firebox after every rain. Above Services found a severely cracked crown on inspection and replaced the whole thing. No more water. The tech explained everything clearly and the price was exactly as quoted. Highly recommend for any chimney water problems.',
  },
];

const faqs = [
  {
    question: 'What is the difference between a chimney crown and a chimney cap?',
    answer:
      'These are two different components that work together to protect your chimney from above. The chimney crown is the concrete or mortar slab that covers the top of the chimney, sealing the masonry around the flue opening. It sits directly on top of the brickwork. The chimney cap is the metal cover that sits over the flue opening itself (attached to the crown or the flue tile), protecting the interior of the flue from rain and animals. A chimney can have a good cap but a cracked crown — both need to be in good condition.',
  },
  {
    question: 'How do I know if my chimney crown is damaged?',
    answer:
      'The most reliable way is a professional inspection, as the crown is not visible from inside the home and difficult to see clearly from the ground. Visible signs of crown damage include water in the firebox after rain, efflorescence (white staining) on the chimney exterior, rust staining below the crown, and visible cracking if you can see the top of the chimney. Any chimney inspection we perform includes a visual assessment of the crown.',
  },
  {
    question: 'Can I see the crown from the ground?',
    answer:
      'Sometimes, if you have a clear angle of view to the top of the chimney, you can see obvious damage — large cracks, missing sections, or significant deterioration. However, hairline cracks and subtle damage are not visible from the ground. A technician on the roof (or a camera inspection) is the only way to properly assess crown condition. We never quote crown repair without physically getting to the top of the chimney.',
  },
  {
    question: 'How long does a new chimney crown last?',
    answer:
      'A properly constructed chimney crown — made from a strong concrete mix with the correct slope and adequate overhang — can last 25–50 years or more. The most common reason crowns fail prematurely is poor original construction (using plain mortar instead of concrete, inadequate thickness, or insufficient drip edge) combined with Boston\'s harsh freeze-thaw cycles. Our replacement crowns are built to proper specifications and carry a 10-year warranty.',
  },
  {
    question: 'Is chimney crown repair a DIY job?',
    answer:
      'We strongly advise against DIY crown repair. Working on the crown requires working at the top of the chimney, which involves significant roof access safety risks. Additionally, using the wrong materials (many DIYers use hydraulic cement or standard mortar, which are not appropriate for crown construction) can result in a repair that fails within one or two winters. A proper crown requires the right concrete mix, the right slope, and adequate overhang past the brick face — all things that require training and experience to get right.',
  },
  {
    question: 'Will repairing the crown stop water in my fireplace?',
    answer:
      'Crown repair addresses one of the most common sources of water entry into chimneys, so yes — in many cases, a crown repair does stop the water. However, water can also enter through deteriorated mortar joints, cracked brick, failed flashing, or a missing cap. We diagnose all potential water entry points as part of our assessment, so you can be confident that the repair addresses the actual source of your problem.',
  },
];

const schemas = [
  serviceSchema({ name: 'Chimney Crown Repair', description: 'Expert chimney crown repair and replacement in Boston, MA. Prevent water infiltration and freeze-thaw damage with professional crown restoration.', slug: 'chimney-crown-repair' }),
  faqSchema(faqs),
  breadcrumbSchema([{ name: 'Chimney Crown Repair', href: '/chimney-crown-repair' }]),
];

export default function ChimneyCrownRepairPage() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <ServiceHero
        title="Chimney Crown Repair in Boston, MA"
        subtitle="Boston winters are rough on chimney crowns. Water gets into small cracks, freezes overnight, and opens them wider each cycle. A crown repair today can prevent a costly rebuild later. We fix crowns before that happens."
        breadcrumbs={[{ label: 'Chimney Crown Repair', href: '/chimney-crown-repair' }]}
        badge="CSIA-Certified Crown Repair"
      />

      {/* What Is a Crown */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">The Basics</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mt-2 mb-6">
                What Is a Chimney Crown?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The chimney crown is the concrete or mortar slab that forms the top surface of your chimney. It covers the entire chimney top — from the outside edge of the masonry to the flue liner — sealing the masonry below from direct exposure to rain and snow.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                A properly built chimney crown overhangs the brick face by at least 2 inches, is sloped to shed water away from the flue, and is made from a proper concrete mix rather than soft mortar. It is the first line of defense against water entering the chimney system.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Despite its critical role, the crown is often built incorrectly during original construction — using basic mortar instead of concrete, without adequate thickness or overhang. These inferior crowns crack quickly and allow water to infiltrate the masonry, causing progressive damage that becomes increasingly expensive to repair.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
                <h3 className="font-bold text-navy-950 mb-3">Crown vs. Cap — Know the Difference</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-amber-500 rounded-full flex-shrink-0 mt-1.5"></div>
                    <div>
                      <span className="font-semibold text-navy-950 text-sm">Crown: </span>
                      <span className="text-gray-600 text-sm">The concrete slab covering the masonry at the top of the chimney. Seals the brick and mortar from the elements.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-navy-950 rounded-full flex-shrink-0 mt-1.5"></div>
                    <div>
                      <span className="font-semibold text-navy-950 text-sm">Cap: </span>
                      <span className="text-gray-600 text-sm">The metal cover over the flue opening. Keeps rain, animals, and debris out of the flue interior.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-navy-950 rounded-2xl p-6 text-white">
                <h3 className="font-semibold text-amber-400 mb-2">A Properly Built Crown Includes:</h3>
                <ul className="space-y-2 text-sm text-blue-200">
                  {[
                    'Concrete mix (not plain mortar)',
                    'Minimum 2" overhang past brick face',
                    'Sloped surface to shed water',
                    'Drip edge to prevent water tracking back',
                    'Adequate thickness (minimum 2" at the edge)',
                  ].map((pt) => (
                    <li key={pt} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Boston Climate Impact */}
      <section className="py-16 md:py-20 bg-navy-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">The Local Challenge</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                Boston's Climate Is Brutal on Chimney Crowns
              </h2>
              <p className="text-blue-300 text-lg">
                Greater Boston experiences some of the harshest freeze-thaw conditions in the country — and chimney crowns bear the brunt of it.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">43&quot;</div>
                <div className="text-white font-semibold mb-2">Annual Rainfall</div>
                <p className="text-blue-300 text-sm">Boston averages 43 inches of rain per year — every drop a potential source of crown infiltration.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">48&quot;</div>
                <div className="text-white font-semibold mb-2">Annual Snowfall</div>
                <p className="text-blue-300 text-sm">Snow sitting on a cracked crown melts slowly and penetrates deeply into existing fractures.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">80+</div>
                <div className="text-white font-semibold mb-2">Freeze-Thaw Cycles / Year</div>
                <p className="text-blue-300 text-sm">Each cycle expands cracks by up to 9% — turning hairline fractures into structural failures over time.</p>
              </div>
            </div>
            <p className="text-blue-300 text-center text-sm">
              Water infiltrating a cracked crown freezes overnight and expands with tremendous force. This process repeats dozens of times each winter, progressively widening cracks and destroying the masonry below. What starts as a minor crown repair can become a major rebuild if left unaddressed.
            </p>
          </div>
        </div>
      </section>

      {/* Repair vs Replacement */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Know Your Options</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mt-2 mb-4">
              Crown Repair vs. Crown Replacement
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The right approach depends on the extent of the damage. We assess every crown before recommending a solution — never up-selling when repair will do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy-950">When Repair Is Enough</h3>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  'Hairline cracks with no through-penetration',
                  'Minor surface chipping around edges',
                  'Early-stage deterioration caught before water infiltration',
                  'Sound crown structure overall',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="bg-white rounded-xl p-4">
                <div className="text-amber-600 font-bold">Crown sealer</div>
                <div className="text-gray-500 text-xs mt-0.5">Crack repair + elastomeric sealer application</div>
                <div className="text-amber-600 font-bold mt-2">Crown repair</div>
                <div className="text-gray-500 text-xs mt-0.5">More extensive crack repair and resurfacing</div>
              </div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy-950">When Full Replacement Is Needed</h3>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  'Large cracks that run completely through the crown',
                  'Missing sections of crown material',
                  'Crown built with plain mortar (no concrete)',
                  'Multiple freeze-thaw winters of accumulated damage',
                  'Water infiltration already causing masonry damage below',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="bg-white rounded-xl p-4">
                <div className="text-amber-600 font-bold">Full crown replacement</div>
                <div className="text-gray-500 text-xs mt-0.5">Complete demolition, new concrete pour, 10-year warranty</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy-950 mb-2">What Our Customers Say</h2>
            <p className="text-gray-600">Real reviews from Boston homeowners about our chimney crown repair work.</p>
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
            <h2 className="text-3xl font-bold text-navy-950 mb-2">Chimney Crown Repair FAQ</h2>
            <p className="text-gray-600">Common questions about chimney crown repair in Boston, MA.</p>
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
              { name: 'Chimney Cap Installation', href: '/chimney-cap-installation', desc: 'Same-day cap installation' },
              { name: 'Chimney Repair', href: '/chimney-repair', desc: 'Tuckpointing & masonry repair' },
              { name: 'Chimney Rebuilds', href: '/chimney-rebuilds', desc: 'Full & partial reconstruction' },
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
        heading="Fix Your Chimney Crown Before Winter"
        subtext="A cracked crown today is a costly chimney repair tomorrow. Above Services provides expert crown repair and replacement throughout Greater Boston. Call now."
        primaryButtonText="Call Now — Save 10%"
        primaryButtonHref="tel:+17819216228"
        secondaryButtonText="Book Today & Save 10%"
        secondaryButtonHref="#contact"
        showPhone={false}
      />
    </>
  );
}
