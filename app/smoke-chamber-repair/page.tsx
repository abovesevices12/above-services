import type { Metadata } from 'next';
import ServiceHero from '@/components/ServiceHero';
import ReviewCard from '@/components/ReviewCard';
import FAQItem from '@/components/FAQItem';
import CTABanner from '@/components/CTABanner';
import Link from 'next/link';
import { faqSchema, breadcrumbSchema, serviceSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Smoke Chamber Repair & Parging Boston MA | Above Services | (781) 921-6228',
  description:
    'Expert smoke chamber repair & parging across New England. Seal cracks, smooth surfaces & improve draft. Prevents CO intrusion & chimney fires. Call (781) 921-6228 today.',
  keywords: [
    'smoke chamber repair Boston MA',
    'smoke chamber parging Boston',
    'chimney smoke chamber Boston MA',
    'parging chimney Boston',
    'smoke chamber repair Cambridge MA',
    'smoke chamber repair Brookline MA',
    'smoke chamber repair Newton MA',
    'smoking fireplace repair Boston MA',
    'smoke chamber crack repair Boston',
    'refractory repair Boston MA',
    'smoke rollback Boston chimney',
    'smoke chamber inspection Boston',
  ],
  alternates: {
    canonical: 'https://www.aboveservicesboston.com/smoke-chamber-repair',
  },
  openGraph: {
    title: 'Smoke Chamber Repair & Parging Boston MA | Above Services | (781) 921-6228',
    description:
      'Expert smoke chamber repair & parging across New England. Seal cracks, smooth surfaces & improve draft. Prevents CO intrusion & chimney fires.',
    url: 'https://www.aboveservicesboston.com/smoke-chamber-repair',
  },
};


const reviews = [
  {
    name: 'Laura B.',
    location: 'Boston, MA',
    date: 'December 2023',
    review:
      'We had smoke rolling back into our living room every time we used the fireplace. Above Services did a camera inspection, found a heavily corbeled and cracked smoke chamber, and performed full parging in one visit. The difference was immediate — the fireplace now draws perfectly and there is no more smoke in the house.',
  },
  {
    name: 'Steven W.',
    location: 'Arlington, MA',
    date: 'January 2024',
    review:
      'Our annual inspection revealed significant cracking in the smoke chamber — something that was invisible without a camera. Above Services explained exactly what parging would do and why it mattered for CO safety. The work was done quickly and the technician walked me through the before-and-after footage. Very professional.',
  },
  {
    name: 'Nicole R.',
    location: 'Waltham, MA',
    date: 'October 2023',
    review:
      'We had a persistent smell of smoke in our house when the fireplace wasn\'t being used. Turned out there were cracks in the smoke chamber allowing gases to seep in. Above Services repaired and parged the chamber and the smell is completely gone. Great diagnosis and great workmanship.',
  },
];

const faqs = [
  {
    question: 'What is the difference between a smoke chamber and a firebox?',
    answer:
      'The firebox is the lower section of the fireplace where the fire burns — the space you see when you look into the fireplace. The smoke chamber sits directly above the firebox, above the throat damper, and below where the flue begins. Its job is to compress the volume of smoke and direct it up into the narrower flue. Because it is hidden from view, homeowners rarely know what condition it\'s in without a camera inspection.',
  },
  {
    question: 'Is smoke chamber parging required by code?',
    answer:
      'The National Fire Protection Association (NFPA 211) requires that smoke chamber walls be smooth to reduce creosote accumulation and eliminate crevices where flammable deposits can collect. Most older corbeled smoke chambers do not meet this standard. While code enforcement varies by municipality, parging is considered a best practice by every major chimney safety organization and is frequently required when selling a home.',
  },
  {
    question: 'How long does smoke chamber parging take to cure?',
    answer:
      'The refractory mortar used for parging requires a minimum of 24 hours of drying time before the fireplace can be used. For best results, we recommend a 48–72 hour wait and then a small, gentle break-in fire before returning to full use. We provide clear instructions for the curing process at the time of every parging job.',
  },
  {
    question: 'Can I use my fireplace with a damaged smoke chamber?',
    answer:
      'No. A cracked or severely deteriorated smoke chamber is a serious safety issue. Cracks allow superheated gases — including carbon monoxide — to seep through the chimney walls and into your home\'s structure or living spaces. The rough surface of a corbeled chamber also accumulates creosote much faster, increasing chimney fire risk. We recommend stopping use as soon as smoke chamber damage is identified.',
  },
  {
    question: 'Will smoke chamber parging fix my smoking fireplace?',
    answer:
      'Parging smooths the smoke chamber walls and seals cracks, which improves draft efficiency and is often a contributing factor in smoking fireplaces. However, there can be other causes of smoke rollback — including negative house pressure, inadequate air supply, a cold flue, or an improperly sized firebox opening relative to the flue. We perform a complete diagnosis before recommending parging to make sure it addresses the actual cause of your problem.',
  },
  {
    question: 'How often does smoke chamber parging need to be redone?',
    answer:
      'A properly applied parge coat can last 10–20 years or more. Parging does not need to be redone on any fixed schedule. We check the smoke chamber as part of every Level 2 inspection and will let you know if there are any developing cracks or areas of concern. Homes with very heavy fireplace use may see parging wear faster than occasional users.',
  },
];

const schemas = [
  serviceSchema({ name: 'Smoke Chamber Repair & Parging', description: 'Expert smoke chamber repair and parging across New England. Seal cracks, smooth chamber walls, improve draft and prevent carbon monoxide intrusion.', slug: 'smoke-chamber-repair' }),
  faqSchema(faqs),
  breadcrumbSchema([{ name: 'Smoke Chamber Repair', href: '/smoke-chamber-repair' }]),
];

export default function SmokeChamberRepairPage() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <ServiceHero
        title="Smoke Chamber Repair & Parging Across New England"
        subtitle="Most homeowners have never heard of their smoke chamber — until smoke starts backing into the room. We inspect, repair, and parge smoke chambers to stop smoke rollback, seal cracks, and keep combustion gases where they belong."
        breadcrumbs={[{ label: 'Smoke Chamber Repair', href: '/smoke-chamber-repair' }]}
        badge="Includes Free Camera Inspection"
      />

      {/* What Is a Smoke Chamber */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div>
              <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Understanding Your Fireplace</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mt-2 mb-6">
                What Is a Smoke Chamber?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The smoke chamber is the inverted funnel-shaped space that sits directly above the firebox and throat damper, below where the flue begins. Its critical function is to compress the large volume of smoke and combustion gases produced in the firebox and direct them into the much narrower flue above.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                In older homes, smoke chambers were built using a corbeled brick technique — bricks were stepped inward course by course to form the funnel shape. While this worked structurally, corbeled brickwork creates rough, irregular ledges that collect creosote, accumulate cracking, and are very difficult to clean.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Modern standards and NFPA 211 require smoke chamber walls to be smooth. Parging — applying a coat of heat-resistant refractory mortar over the corbeled surface — achieves a smooth, code-compliant smoke chamber while sealing any existing cracks.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-navy-950 mb-5">Anatomy of a Fireplace System</h3>
              <div className="space-y-3">
                {[
                  { part: 'Chimney Cap', desc: 'Top of the system — keeps rain and animals out' },
                  { part: 'Flue Liner', desc: 'Conducts smoke from smoke chamber to outside' },
                  { part: 'Chimney Crown', desc: 'Concrete slab sealing the masonry at the top' },
                  { part: 'Smoke Chamber', desc: 'Compresses smoke and directs it into the flue — often corbeled in older homes' },
                  { part: 'Throat Damper', desc: 'Plate that opens/closes between firebox and smoke chamber' },
                  { part: 'Firebox', desc: 'Where the fire burns — what you see from inside' },
                ].map((item, i) => (
                  <div key={item.part} className={`flex items-start gap-3 pb-3 ${i !== 5 ? 'border-b border-gray-200' : ''}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white ${item.part === 'Smoke Chamber' ? 'bg-amber-500' : 'bg-navy-950'}`}>
                      {i + 1}
                    </div>
                    <div>
                      <span className={`font-semibold text-sm ${item.part === 'Smoke Chamber' ? 'text-amber-600' : 'text-navy-950'}`}>{item.part}</span>
                      <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parging Section */}
      <section className="py-16 md:py-20 bg-amber-50 border-y border-amber-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">The Solution</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mt-2 mb-4">
                Parging: The Smoke Chamber Solution
              </h2>
              <p className="text-gray-700 text-lg">
                Parging is the process of applying a layer of heat-resistant refractory mortar to the walls of the smoke chamber, creating a smooth, continuous surface that meets modern safety standards.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Improves Draft',
                  desc: 'A smooth smoke chamber allows gases to flow evenly and efficiently up into the flue, reducing turbulence and improving draft. Many homeowners notice a significant improvement in fireplace performance after parging.',
                },
                {
                  title: 'Seals Cracks & Prevents CO Seepage',
                  desc: 'Parging fills and seals cracks in the smoke chamber walls, eliminating pathways for carbon monoxide and other combustion gases to infiltrate your home\'s structure or living spaces.',
                },
                {
                  title: 'Reduces Creosote Accumulation',
                  desc: 'The rough ledges of corbeled brick collect creosote at a much higher rate than smooth surfaces. A parged smoke chamber is significantly easier to clean and accumulates creosote more slowly.',
                },
                {
                  title: 'Extends Fireplace Life',
                  desc: 'By sealing existing cracks and creating a resilient, monolithic surface, parging slows the rate of further deterioration and can add years to the life of your firebox and smoke chamber.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-5 border border-amber-100 shadow-sm">
                  <h3 className="font-bold text-navy-950 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Don't Ignore These</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mt-2 mb-4">
              Signs Your Smoke Chamber Needs Repair
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Many smoke chamber problems are invisible to the naked eye — but they show up as symptoms elsewhere. Here are six signs that your smoke chamber may need attention.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { sign: 'Smoke Backing Into the Room', desc: 'If smoke from a fire rolls out of the firebox into your living space, the smoke chamber or flue system is not directing gases properly. A damaged or corbeled smoke chamber is a common cause.' },
              { sign: 'Strong Smoke Smell When Not in Use', desc: 'A persistent smoky odor in the house even when you haven\'t had a fire can indicate that combustion gases are infiltrating through cracks in the smoke chamber or chimney walls.' },
              { sign: 'Visible Cracks Above the Damper', desc: 'If you look up through the open damper with a flashlight, visible cracking in the walls above the throat is a direct sign of smoke chamber deterioration.' },
              { sign: 'Spalling Brick Inside the Firebox', desc: 'Brick faces flaking off inside the firebox can indicate that heat is not being properly directed upward, which can be related to smoke chamber defects or a failed damper.' },
              { sign: 'Camera Inspection Reveals Damage', desc: 'Many smoke chamber problems are only visible with a flue camera inspection. This is why we include a free camera inspection with every smoke chamber repair estimate.' },
              { sign: 'Level 2 Inspection Recommended It', desc: 'If a home inspection or chimney inspection report has flagged the smoke chamber for repair, don\'t delay — it is a safety issue that should be addressed before the next heating season.' },
            ].map((item) => (
              <div key={item.sign} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="font-bold text-navy-950 text-sm mb-2">{item.sign}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Get a Quote</span>
            <h2 className="text-3xl font-bold text-navy-950 mt-2 mb-4">Ready to Schedule?</h2>
            <p className="text-gray-600 mb-8">Camera inspection is included free with every confirmed smoke chamber repair. Call us to discuss your situation and we'll give you a clear quote before any work begins.</p>
            <a
              href="tel:+17819216228"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-200"
            >
              Call (781) 921-6228
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy-950 mb-2">What Our Customers Say</h2>
            <p className="text-gray-600">Real reviews from New England homeowners about our smoke chamber repair work.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy-950 mb-2">Smoke Chamber Repair FAQ</h2>
            <p className="text-gray-600">Common questions about smoke chamber repair and parging in Massachusetts and Southern NH.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy-950 mb-6 text-center">Related Chimney Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { name: 'Chimney Cleaning', href: '/chimney-cleaning', desc: 'Annual sweeping & inspection' },
              { name: 'Fireplace Repair', href: '/fireplace-repair', desc: 'Damper, firebox & gas fireplace service' },
              { name: 'Chimney Inspection', href: '/chimney-inspection', desc: 'Level 1, 2 & 3 inspections' },
              { name: 'Chimney Liner Installation', href: '/chimney-liner-installation', desc: 'Stainless steel & cast-in-place liners' },
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
        heading="Schedule Your Smoke Chamber Inspection Today"
        subtext="Camera inspection included free with every smoke chamber repair. Above Services serves all of New England. Don't wait — a damaged smoke chamber is a serious safety hazard."
        primaryButtonText="Call Now — Save 10%"
        primaryButtonHref="tel:+17819216228"
        secondaryButtonText="Book Today & Save 10%"
        secondaryButtonHref="#contact"
        showPhone={false}
      />
    </>
  );
}
