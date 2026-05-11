import type { Metadata } from 'next';
import ServiceHero from '@/components/ServiceHero';
import ReviewCard from '@/components/ReviewCard';
import FAQItem from '@/components/FAQItem';
import CTABanner from '@/components/CTABanner';
import Link from 'next/link';
import { faqSchema, breadcrumbSchema, serviceSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Chimney Cleaning Boston MA | Above Services | (781) 921-6228',
  description:
    'Professional chimney cleaning & sweeping in Boston, MA. Remove dangerous creosote buildup, prevent chimney fires. CSIA-certified sweeps serving Cambridge, Brookline, Newton & Greater Boston. Call (781) 921-6228.',
  keywords: [
    'chimney cleaning Boston MA',
    'chimney sweep Boston',
    'chimney cleaning cost Boston',
    'chimney sweeping service Boston MA',
    'CSIA certified chimney sweep Boston',
    'chimney cleaning Cambridge MA',
    'chimney cleaning Brookline MA',
    'chimney cleaning Newton MA',
    'chimney cleaning Somerville MA',
    'chimney cleaning near me Boston',
    'annual chimney cleaning Boston',
    'creosote removal Boston MA',
  ],
  alternates: {
    canonical: 'https://www.aboveservicesboston.com/chimney-cleaning',
  },
  openGraph: {
    title: 'Chimney Cleaning Boston MA | Above Services | (781) 921-6228',
    description:
      'Professional chimney cleaning & sweeping in Boston, MA. CSIA-certified technicians. Same-day service available.',
    url: 'https://www.aboveservicesboston.com/chimney-cleaning',
  },
};


const reviews = [
  {
    name: 'Patricia W.',
    location: 'Boston, MA',
    date: 'October 2023',
    review:
      'Above Services cleaned our 1890s brownstone chimney — it hadn\'t been touched in years. The tech spent nearly two hours and pulled out an alarming amount of buildup. He was thorough, neat, and walked me through everything he found. Worth every penny for the peace of mind.',
  },
  {
    name: 'Thomas H.',
    location: 'Arlington, MA',
    date: 'September 2023',
    review:
      'Had my annual chimney cleaning done and they found a bird\'s nest blocking the flue. Couldn\'t have known without the inspection. They cleared it out, checked everything top to bottom, and had us good to go before the cold hit. Very professional.',
  },
  {
    name: 'Lisa G.',
    location: 'Medford, MA',
    date: 'November 2023',
    review:
      'I was nervous about chimney cleaning because I\'d heard stories about companies making up repairs. Above Services was completely transparent — showed me photos of the flue before and after, explained exactly what they were doing, and didn\'t try to upsell anything unnecessary. Honest and professional.',
  },
];

const faqs = [
  {
    question: 'How often should I have my chimney cleaned?',
    answer:
      'The NFPA recommends at least an annual inspection, and cleaning whenever there is creosote buildup or debris. If you burn more than a cord of wood per year, annual cleaning is essential. Light users can often go every 2 years, but we recommend at least an annual inspection to catch issues early.',
  },
  {
    question: 'What is creosote and why is it dangerous?',
    answer:
      'Creosote is a byproduct of burning wood that condenses on chimney walls. It comes in three stages: Stage 1 (flaky/dusty), Stage 2 (tar-like), and Stage 3 (glazed). Stages 2 and 3 are highly flammable and are the primary cause of chimney fires. Professional cleaning removes creosote before it can accumulate to dangerous levels.',
  },
  {
    question: 'How long does chimney cleaning take?',
    answer:
      'A standard chimney cleaning typically takes 45–90 minutes, depending on the size of the chimney, amount of buildup, and whether additional repairs or inspections are needed. We\'ll give you an accurate time estimate when we arrive.',
  },
  {
    question: 'Will chimney cleaning make a mess in my home?',
    answer:
      'Our technicians use professional-grade HEPA vacuum equipment and drop cloths to contain all dust and debris. We\'ll leave your home as clean as we found it. We\'ve been doing this for over 10 years and take cleanliness very seriously.',
  },
  {
    question: 'What does a Level 1 chimney inspection include?',
    answer:
      'A Level 1 inspection — which is included with every cleaning — covers the accessible portions of the chimney exterior, interior, and accessible flue. We check for proper clearances, construction, and the absence of deposits and obstructions. We\'ll document any issues found and explain your options.',
  },
  {
    question: 'Can you clean a gas fireplace chimney?',
    answer:
      'Yes. While gas fireplaces produce much less creosote than wood-burning fireplaces, their chimneys and vents still need annual inspection and occasional cleaning to remove debris, check for blockages, and ensure the system is venting properly. Carbon monoxide safety makes this inspection especially important.',
  },
];

const schemas = [
  serviceSchema({ name: 'Chimney Cleaning', description: 'Professional chimney cleaning and sweeping in Boston, MA. Removes creosote, debris, and blockages to prevent chimney fires and carbon monoxide hazards.', slug: 'chimney-cleaning' }),
  faqSchema(faqs),
  breadcrumbSchema([{ name: 'Chimney Cleaning', href: '/chimney-cleaning' }]),
];

export default function ChimneyCleaningPage() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <ServiceHero
        title="Professional Chimney Cleaning in Boston, MA"
        subtitle="Our CSIA-certified crew sweeps chimneys across Greater Boston. We remove creosote, clear any blockages, and do a full safety check — then walk you through exactly what we found."
        breadcrumbs={[{ label: 'Chimney Cleaning', href: '/chimney-cleaning' }]}
        badge="Includes Level 1 Inspection"
      />

      {/* What's Included */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">What's Included</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mt-2 mb-6">
                A Complete Chimney Cleaning Service
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Every cleaning includes a Level 1 safety inspection. You get photos and a written report
                before we leave — no guessing about what condition your chimney is in.
              </p>
              <ul className="space-y-4">
                {[
                  { title: 'Visual Inspection', desc: 'Full top-to-bottom assessment of chimney structure, mortar, crown, and cap' },
                  { title: 'Creosote Removal', desc: 'Complete removal of all creosote deposits from the flue liner — all three stages' },
                  { title: 'Debris Clearing', desc: 'Removal of leaves, animal nests, blockages, and other obstructions from the flue' },
                  { title: 'Firebox Cleaning', desc: 'Ash removal and cleaning of the firebox and smoke chamber' },
                  { title: 'Damper Inspection', desc: 'Check that your damper opens, closes, and seals properly' },
                  { title: 'Written Report', desc: 'Detailed documentation of findings with photos, plus recommended next steps' },
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
              <h3 className="text-xl font-bold text-navy-950 mb-6">Ready to Book?</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Call us to schedule your cleaning. Every service includes a Level 1 safety inspection. We confirm pricing before any work begins — no hidden fees, no surprises.
              </p>
              <a
                href="tel:+17819216228"
                className="mt-2 w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-200 active:scale-95"
              >
                Book Your Cleaning Today
              </a>
              <p className="text-center text-xs text-gray-500 mt-3">No hidden fees. Price confirmed before we start.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Annual Cleaning Matters */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Safety First</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mt-2 mb-4">
              Why Annual Chimney Cleaning Matters
            </h2>
            <p className="text-gray-600 text-lg">
              Most chimney fires happen quietly. They burn fast inside the flue — sometimes with no visible flames — and homeowners often don't know until an inspector finds the damage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                stat: '25,000+',
                label: 'Chimney fires per year',
                desc: 'The NFPA estimates over 25,000 chimney fires annually in the US, causing hundreds of millions in property damage.',
              },
              {
                stat: '90%',
                label: 'Are preventable',
                desc: 'Nearly all chimney fires are caused by creosote buildup that could have been removed with annual professional cleaning.',
              },
              {
                stat: '$25K+',
                label: 'Average repair cost',
                desc: 'A chimney fire can cause structural damage costing $25,000 or more to repair — far more than years of preventive cleanings.',
              },
            ].map((item) => (
              <div key={item.stat} className="bg-white rounded-2xl p-6 text-center shadow-md border border-gray-100">
                <div className="text-4xl font-bold text-amber-500 mb-2">{item.stat}</div>
                <div className="text-navy-950 font-semibold mb-3">{item.label}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mt-2 mb-4">
              Our Chimney Cleaning Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: '1', title: 'Arrival & Setup', desc: 'Our technician arrives in a marked vehicle, introduces themselves, and sets up drop cloths and HEPA vacuum equipment to protect your home.' },
              { step: '2', title: 'Top-Down Inspection', desc: 'We inspect the chimney from the top — checking the cap, crown, flashing, and exterior masonry — before descending to the firebox.' },
              { step: '3', title: 'Professional Sweep', desc: 'Using professional brushes and powerful HEPA vacuums, we remove all creosote, debris, and ash from the flue, smoke chamber, and firebox.' },
              { step: '4', title: 'Report & Debrief', desc: 'We review findings with you, show you photos, and provide a written report. Any recommended repairs are explained clearly with no pressure.' },
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
            <p className="text-gray-600">Real reviews from Boston homeowners about our chimney cleaning service.</p>
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
            <h2 className="text-3xl font-bold text-navy-950 mb-2">Chimney Cleaning FAQ</h2>
            <p className="text-gray-600">Answers to common questions about chimney cleaning in Boston, MA.</p>
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
              { name: 'Chimney Inspection', href: '/chimney-inspection', desc: 'Level 1, 2 & 3 CSIA-certified inspections' },
              { name: 'Chimney Repair', href: '/chimney-repair', desc: 'Tuckpointing, crown & liner repair' },
              { name: 'Chimney Crown Repair', href: '/chimney-crown-repair', desc: 'Seal & restore your chimney crown' },
              { name: 'Smoke Chamber Repair', href: '/smoke-chamber-repair', desc: 'Parging & crack repair' },
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
        heading="Call Above Services — Book Your Cleaning Today"
        subtext="Every chimney cleaning includes a full Level 1 inspection. Call now and save 10%. Same-day service available across Greater Boston."
        primaryButtonText="Call Now For 10% Off"
        primaryButtonHref="tel:+17819216228"
        secondaryButtonText="Book Today & Save 10%"
        secondaryButtonHref="#contact"
        showPhone={true}
        urgencyNote="Same-day spots available — call now"
      />
    </>
  );
}
