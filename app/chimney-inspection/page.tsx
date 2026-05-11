import type { Metadata } from 'next';
import ServiceHero from '@/components/ServiceHero';
import ReviewCard from '@/components/ReviewCard';
import FAQItem from '@/components/FAQItem';
import CTABanner from '@/components/CTABanner';
import Link from 'next/link';
import { faqSchema, breadcrumbSchema, serviceSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Chimney Inspection Boston MA | CSIA-Certified | Above Services | (781) 921-6228',
  description:
    'CSIA-certified chimney inspections across New England. Level 1, 2 & 3 inspections with full camera scan. Serving Massachusetts & Southern NH. Real estate inspections available. Call (781) 921-6228.',
  keywords: [
    'chimney inspection Boston MA',
    'CSIA chimney inspection Boston',
    'Level 2 chimney inspection Boston',
    'chimney inspection cost Boston',
    'real estate chimney inspection Boston MA',
    'chimney inspection Cambridge MA',
    'chimney inspection Brookline MA',
    'chimney inspection Newton MA',
    'home inspection chimney Boston',
    'chimney camera inspection Boston',
    'annual chimney inspection Boston MA',
    'chimney inspection near me Boston',
  ],
  alternates: {
    canonical: 'https://www.aboveservicesboston.com/chimney-inspection',
  },
  openGraph: {
    title: 'Chimney Inspection Boston MA | CSIA-Certified | Above Services | (781) 921-6228',
    description:
      'CSIA-certified chimney inspections across New England. Level 1, 2 & 3 inspections. Real estate, insurance & annual safety inspections.',
    url: 'https://www.aboveservicesboston.com/chimney-inspection',
  },
};


const reviews = [
  {
    name: 'Amanda R.',
    location: 'Boston, MA',
    date: 'June 2024',
    review:
      'We were buying a home in the South End and our real estate agent insisted on a Level 2 chimney inspection before closing. Above Services came out within two days, conducted a thorough video inspection, and provided a detailed written report we could show the seller. They found a cracked liner that led to a $1,500 credit at closing. Worth every penny of the inspection fee.',
  },
  {
    name: 'Daniel H.',
    location: 'Somerville, MA',
    date: 'September 2024',
    review:
      'Called for our annual chimney inspection before lighting the fireplace for the first time this fall. The technician was punctual, knowledgeable, and explained every finding in plain language. No hard sell — just an honest report. The chimney was in good shape except for a minor crown crack they repaired the same day. Highly recommend.',
  },
  {
    name: 'Karen B.',
    location: 'Brookline, MA',
    date: 'October 2024',
    review:
      'After a significant storm last spring, we wanted the chimney checked before using it. Above Services did a Level 2 inspection and found storm-related flashing damage we hadn\'t noticed. Insurance covered the repair. The inspection report was thorough and documented everything we needed for the claim. Excellent service from start to finish.',
  },
];

const faqs = [
  {
    question: 'Do I need an inspection if I never use my fireplace?',
    answer:
      'Yes. Even unused chimneys deteriorate over time — mortar erodes, crowns crack, animals nest inside, and liners degrade. In fact, long-idle chimneys are often in worse shape than regularly used ones because no one has been checking them. Before you start using an idle fireplace, a Level 1 or Level 2 inspection is essential to confirm it is safe. We also check for animal intrusion, which is very common in uncapped or unguarded flues.',
  },
  {
    question: 'What does a camera inspection show?',
    answer:
      'A flue camera (used in Level 2 inspections) travels the full length of the flue liner, revealing cracks, missing mortar joints, deteriorated tile, structural gaps, creosote deposits, obstructions, and the condition of the liner from top to bottom. The footage is recorded and becomes part of your written inspection report. Camera inspection is the only reliable way to assess liner condition — visual inspection from the firebox or rooftop only shows a fraction of the flue.',
  },
  {
    question: 'Is a Level 2 inspection required when selling my home?',
    answer:
      'In Massachusetts, a Level 2 chimney inspection is not required by law for every real estate transaction — but it is very commonly requested by buyers, required by lenders, or flagged by home inspectors. Any home inspector who notices signs of chimney damage (cracked crown, efflorescence, missing cap) will typically note it and recommend a Level 2 chimney inspection. We provide the clear, written documentation that real estate attorneys, lenders, and buyers need.',
  },
  {
    question: 'How long does a chimney inspection take?',
    answer:
      'A Level 1 inspection typically takes 30–45 minutes. A Level 2 inspection with full flue camera takes 60–90 minutes. Level 3 inspections are highly variable depending on what components need to be removed for access. We provide a written report at the time of inspection for Level 1, and a formal written report with camera footage for Level 2, usually delivered the same day.',
  },
  {
    question: 'What happens if the inspector finds damage?',
    answer:
      'If we find a problem, we explain it clearly, show you the evidence (camera footage, photos), and give you a written assessment of the severity. We provide a no-pressure, itemized repair estimate. We never manufacture problems or exaggerate findings — our business is built on trust, and we\'ll always tell you if something can wait versus what needs immediate attention. You are never obligated to have us perform the repair.',
  },
  {
    question: 'Are your inspectors CSIA certified?',
    answer:
      'Yes. All Above Services chimney technicians hold active certifications from the Chimney Safety Institute of America (CSIA). CSIA certification requires passing a rigorous examination and meeting continuing education requirements to maintain the credential. When you hire us, you are getting inspectors who know exactly what they are looking for and how to document it accurately.',
  },
];

const schemas = [
  serviceSchema({ name: 'Chimney Inspection', description: 'CSIA-certified chimney inspections across New England. Level 1, 2 & 3 inspections including video camera scan for real estate and safety inspections.', slug: 'chimney-inspection' }),
  faqSchema(faqs),
  breadcrumbSchema([{ name: 'Chimney Inspection', href: '/chimney-inspection' }]),
];

export default function ChimneyInspectionPage() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <ServiceHero
        title="Chimney Inspections Across New England"
        subtitle="Whether it's a routine annual check, a pre-sale inspection, or a post-storm assessment — we give you a clear written report with photos. No vague notes on a clipboard."
        breadcrumbs={[{ label: 'Chimney Inspection', href: '/chimney-inspection' }]}
        badge="Level 1 Inspection Included with Every Cleaning"
      />

      {/* Three Levels */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Know What You Need</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mt-2 mb-4">
              Three Levels of Chimney Inspection
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The National Fire Protection Association (NFPA 211) defines three levels of chimney inspection. Each serves a specific purpose — and we perform all three.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                level: 'Level 1',
                subtitle: 'Annual Safety Inspection',
                price: '',
                highlight: false,
                color: 'border-gray-200',
                badge: 'Included with Cleaning',
                desc: 'A Level 1 inspection is the baseline annual inspection for a chimney that has been regularly maintained and is being used with the same type of appliance and fuel as before. It covers all accessible portions of the chimney interior and exterior.',
                includes: [
                  'Visual inspection of accessible chimney exterior',
                  'Firebox, smoke chamber & damper inspection',
                  'Basic flue condition assessment (without camera)',
                  'Cap and crown visual check',
                  'Written report with findings and recommendations',
                ],
                when: 'Annual maintenance, after routine cleaning',
              },
              {
                level: 'Level 2',
                subtitle: 'Real Estate & Post-Event',
                price: '',
                highlight: true,
                color: 'border-amber-400',
                badge: 'Most Requested',
                desc: 'A Level 2 inspection is required when a property changes hands, when a new appliance is installed, when the fuel type changes, or after any incident that may have damaged the chimney (chimney fire, severe weather, seismic event). It includes a full video scan of the flue.',
                includes: [
                  'Everything in Level 1',
                  'Full-length video camera scan of flue liner',
                  'Inspection of accessible attic, crawl space & basement',
                  'Detailed photographic documentation',
                  'Written report with camera footage',
                  'Insurance claim documentation if needed',
                ],
                when: 'Buying/selling a home, after chimney fire, appliance change',
              },
              {
                level: 'Level 3',
                subtitle: 'Invasive Investigation',
                price: '',
                highlight: false,
                color: 'border-gray-200',
                badge: 'Rare — As Needed',
                desc: 'A Level 3 inspection is performed when a Level 1 or Level 2 inspection suggests hidden structural damage that cannot be accessed non-invasively. It may require the removal of chimney components (caps, dampers, portions of masonry) to gain access to areas of suspected damage.',
                includes: [
                  'Everything in Level 1 and Level 2',
                  'Removal of components for access',
                  'Investigation of concealed areas',
                  'Structural assessment by qualified inspector',
                  'Detailed written report with documentation',
                ],
                when: 'When hidden damage is suspected after Level 2 findings',
              },
            ].map((item) => (
              <div
                key={item.level}
                className={`bg-white rounded-2xl border-2 ${item.color} ${item.highlight ? 'shadow-xl' : 'shadow-md'} p-8 flex flex-col`}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="text-5xl font-bold text-amber-500">{item.level}</div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${item.highlight ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-600'}`}>
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-navy-950 mb-1">{item.subtitle}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{item.desc}</p>
                <div className="space-y-2 mb-5 flex-grow">
                  {item.includes.map((inc) => (
                    <div key={inc} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {inc}
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-xs text-gray-500 mt-auto">
                  <span className="font-semibold text-gray-700">When required: </span>{item.when}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When You Need an Inspection */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">When to Inspect</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mt-2 mb-4">
              When You Need a Chimney Inspection
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                title: 'Annual Safety Check',
                desc: 'The NFPA recommends annual chimney inspection before each heating season. Even if no issues are found, you\'ll have documentation of the chimney\'s condition — useful for insurance and resale.',
                icon: '📅',
              },
              {
                title: 'Buying or Selling a Home',
                desc: 'A Level 2 inspection is essential during real estate transactions. Buyers gain confidence; sellers avoid surprises at closing. We provide reports accepted by all major lenders and real estate attorneys.',
                icon: '🏠',
              },
              {
                title: 'After a Chimney Fire',
                desc: 'A chimney fire — even a minor one — can cause liner cracks and structural damage that is invisible to the naked eye. A Level 2 inspection after any chimney fire is required before the chimney can be safely used.',
                icon: '🔥',
              },
              {
                title: 'After Severe Weather',
                desc: 'High winds, hail, flooding, and lightning can damage chimney caps, crowns, flashing, and masonry. After any major storm, have your chimney inspected before the next use.',
                icon: '⛈️',
              },
              {
                title: 'Long-Idle Fireplace',
                desc: 'If you\'re using a fireplace that hasn\'t been used in a season or more, inspect it first. Animals may have nested inside, the liner may have deteriorated, and creosote deposits may have hardened.',
                icon: '🕐',
              },
              {
                title: 'Switching Fuel Types',
                desc: 'Converting from wood to gas, or any other fuel type change, requires a Level 2 inspection to ensure the existing chimney system is appropriate for the new appliance.',
                icon: '🔄',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-navy-950 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Your Deliverable</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mt-2 mb-6">
                What's in Your Inspection Report
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our reports are written to be understood — not just filed away. They're accepted by real estate attorneys, insurance companies, and building inspectors throughout New England.
              </p>
              <ul className="space-y-5">
                {[
                  { title: 'Photographic Documentation', desc: 'Clear photos of all areas inspected, including close-ups of any defects found.' },
                  { title: 'Flue Camera Footage', desc: 'Full-length digital video of the flue liner (Level 2), saved and provided to you.' },
                  { title: 'Condition Rating', desc: 'An overall condition rating with component-by-component assessment.' },
                  { title: 'Prioritized Repair Recommendations', desc: 'Issues are ranked as immediate safety hazards, recommended repairs, or items to monitor — not everything is urgent, and we tell you which is which.' },
                  { title: 'Insurance Documentation', desc: 'For damage-related inspections, we provide the documentation format required by insurance companies.' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-amber-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-navy-950">{item.title}: </span>
                      <span className="text-gray-600 text-sm">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-navy-950 mb-6">Ready to Schedule?</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Call us to discuss the right inspection level for your needs. Level 1 is included with every cleaning. Level 2 is recommended for real estate transactions and post-incident assessments. Level 3 is scheduled based on scope.
              </p>
              <a
                href="tel:+17819216228"
                className="mt-2 w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-200"
              >
                Schedule Your Inspection
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy-950 mb-2">What Our Customers Say</h2>
            <p className="text-gray-600">Real reviews from New England homeowners about our chimney inspection service.</p>
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
            <h2 className="text-3xl font-bold text-navy-950 mb-2">Chimney Inspection FAQ</h2>
            <p className="text-gray-600">Common questions about chimney inspections in Massachusetts and Southern NH.</p>
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
              { name: 'Chimney Cleaning', href: '/chimney-cleaning', desc: 'Annual sweeping & Level 1 inspection' },
              { name: 'Chimney Repair', href: '/chimney-repair', desc: 'Tuckpointing, crown & liner repair' },
              { name: 'Chimney Liner Installation', href: '/chimney-liner-installation', desc: 'Stainless steel & cast-in-place liners' },
              { name: 'Chimney Rebuilds', href: '/chimney-rebuilds', desc: 'Full & partial reconstruction' },
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
        heading="Call Above Services — Book Your Inspection"
        subtext="Level 1 Inspection Included with every cleaning. Level 2 for real estate and post-incident. CSIA-certified. Call now and save 10% — same-day availability across New England."
        primaryButtonText="Call Now For 10% Off"
        primaryButtonHref="tel:+17819216228"
        secondaryButtonText="Book Today & Save 10%"
        secondaryButtonHref="#contact"
        showPhone={true}
        urgencyNote="Limited same-day spots — call now"
      />
    </>
  );
}
