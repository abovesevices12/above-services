import type { Metadata } from 'next';
import ServiceHero from '@/components/ServiceHero';
import ReviewCard from '@/components/ReviewCard';
import FAQItem from '@/components/FAQItem';
import CTABanner from '@/components/CTABanner';
import Link from 'next/link';
import { faqSchema, breadcrumbSchema, serviceSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Tuckpointing Boston MA | Chimney Repointing & Mortar Repair | (781) 921-6228',
  description:
    'Professional chimney tuckpointing and repointing in Boston, MA. Restore deteriorated mortar joints, stop water infiltration, and extend chimney life. CSIA-certified masons. Call (781) 921-6228.',
  keywords: [
    'tuckpointing Boston MA',
    'chimney repointing Boston',
    'mortar repair chimney Boston',
    'brick repointing Boston MA',
    'chimney tuckpointing Cambridge MA',
    'chimney mortar repair Newton MA',
    'tuckpointing Brookline MA',
    'chimney repointing Somerville MA',
    'brick mortar repair Boston',
    'chimney tuckpointing NH',
    'chimney pointing Boston MA',
    'masonry repair chimney Boston',
  ],
  alternates: {
    canonical: 'https://www.aboveservicesboston.com/tuckpointing',
  },
  openGraph: {
    title: 'Tuckpointing Boston MA | Chimney Repointing | Above Services | (781) 921-6228',
    description:
      'Expert chimney tuckpointing and mortar repointing in Greater Boston and Southern NH. Stop water infiltration and restore your chimney\'s structural integrity. Call (781) 921-6228.',
    url: 'https://www.aboveservicesboston.com/tuckpointing',
  },
};

const reviews = [
  {
    name: 'Michael R.',
    location: 'Somerville, MA',
    date: 'June 2024',
    review:
      'Our 1920s chimney had mortar joints that were crumbling and falling out. Above Services matched the original mortar color perfectly and did beautiful, clean repointing work. You can barely tell where the old mortar ended and the new begins. Excellent craftsmanship.',
  },
  {
    name: 'Karen L.',
    location: 'Waltham, MA',
    date: 'August 2024',
    review:
      'Had tuckpointing done on the entire chimney and part of the front brick facade. The crew was meticulous — they ground out all the old mortar carefully, cleaned the joints, and applied new mortar in layers. The chimney looks brand new and the water staining inside is gone.',
  },
  {
    name: 'Frank D.',
    location: 'Manchester, NH',
    date: 'May 2024',
    review:
      'Called Above Services after noticing gaps in the mortar joints on our chimney. They came out quickly, assessed the full extent of the damage, and completed the repointing in one visit. Fair price, great results. The chimney looks solid again.',
  },
];

const faqs = [
  {
    question: 'What is tuckpointing?',
    answer:
      "Tuckpointing (also called repointing or pointing) is the process of removing deteriorated mortar from the joints between masonry units — brick, stone, or concrete block — and replacing it with fresh mortar. The old mortar is ground or chiseled out to a depth of about 3/4 inch, and new mortar is packed in layers and tooled to match the original profile. The result is restored structural integrity and a weathertight joint.",
  },
  {
    question: 'How do I know if my chimney needs tuckpointing?',
    answer:
      "Signs that tuckpointing is needed include: mortar that is crumbling, recessed, or falling out of joints; gaps between bricks that you can see or fit a key into; white staining (efflorescence) on the brick face; water infiltration inside the firebox; or a chimney that is visibly leaning. A good rule of thumb: if mortar joints are recessed more than 1/4 inch, the chimney should be repointed.",
  },
  {
    question: 'How long does tuckpointing last?',
    answer:
      "Quality tuckpointing with properly mixed, correctly applied mortar should last 25–30 years under normal conditions. Boston's freeze-thaw cycles can shorten this on exposed chimneys, but proper mortar mix selection (not too hard for the brick) and a waterproofing coat after repointing significantly extend the life of the repair.",
  },
  {
    question: 'Does the new mortar color match the old?',
    answer:
      "Yes — mortar color matching is an important part of professional tuckpointing, especially on historic Boston homes. We mix custom mortar to match the existing joints as closely as possible before starting work. We always show a sample patch and get your approval before proceeding on visible areas.",
  },
  {
    question: 'Can I wait on tuckpointing?',
    answer:
      "Waiting is costly. Once mortar joints fail, water enters the masonry — and every freeze-thaw cycle expands that water, widening the gap and dislodging bricks. What is a simple repointing job today can become a full chimney rebuild if left for two or three more winters. We recommend addressing deteriorated joints as soon as they are noticed.",
  },
  {
    question: 'How much does tuckpointing cost in Boston?',
    answer:
      'Cost depends on the extent of the mortar deterioration and the size of the chimney. We provide a clear, itemized quote before starting any work. Call (781) 921-6228 or book an inspection online.',
  },
];

const schemas = [
  serviceSchema({
    name: 'Tuckpointing',
    description: 'Professional chimney tuckpointing and mortar repointing in Boston, MA. Restore deteriorated joints, prevent water infiltration, and extend chimney life.',
    slug: 'tuckpointing',
  }),
  faqSchema(faqs),
  breadcrumbSchema([{ name: 'Tuckpointing', href: '/tuckpointing' }]),
];

export default function TuckpointingPage() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <ServiceHero
        title="Tuckpointing in Boston, MA — Expert Chimney Repointing"
        subtitle="Deteriorated mortar joints are one of the leading causes of chimney water damage and structural failure. Our CSIA-certified masons restore your chimney's joints with color-matched mortar and lasting results."
        breadcrumbs={[{ label: 'Tuckpointing', href: '/tuckpointing' }]}
        badge="Call Today & Save 10%"
      />

      {/* Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mt-2 mb-4">
              Chimney Tuckpointing & Repointing
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'Mortar Joint Removal & Preparation',
                desc: 'Proper tuckpointing starts with thorough preparation. We grind or chisel out deteriorated mortar to a minimum 3/4-inch depth, clean all joints of dust and loose material, and dampen the brick to ensure the new mortar bonds correctly. Shortcuts here cause early failure.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: 'Color-Matched Mortar Application',
                desc: 'New mortar is mixed to match the original joint color and texture as closely as possible — critical for historic Boston homes. We pack mortar in layers to prevent shrinkage cracking, then tool each joint to match the original profile. The result is a seamless, professional finish.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                ),
              },
              {
                title: 'Full Chimney Repointing',
                desc: 'For chimneys where mortar deterioration is widespread, we carry out a full repoint of all joints from the roofline up. This is the most comprehensive protection against water infiltration and typically provides 25–30 years of service when done correctly.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
              },
              {
                title: 'Post-Repointing Waterproofing',
                desc: 'After tuckpointing is complete, we recommend applying a penetrating masonry waterproofer to the entire chimney exterior. This seals the new mortar and brick against water infiltration while allowing the masonry to breathe — dramatically extending the life of the repointing work.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
            ].map((service) => (
              <div key={service.title} className="flex items-start gap-5 bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-bold text-navy-950 text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Section */}
      <section className="py-16 md:py-20 bg-amber-50 border-y border-amber-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center flex-shrink-0 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy-950 mb-4">
                  Why Tuckpointing Matters for Boston Chimneys
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Boston's 100+ freeze-thaw cycles per year crack mortar faster than almost anywhere in the US",
                    'Water entering through open joints expands as it freezes, widening gaps and dislodging brick',
                    'Failed mortar joints account for a significant portion of all chimney leaks in New England',
                    'Repointing a chimney costs a fraction of rebuilding one — early action saves thousands',
                    'Soft lime mortar was standard before 1940 — using modern Portland cement on old brick can cause spalling',
                    'Historic Boston homes require historically appropriate mortar mixes to prevent brick damage',
                    'After repointing, waterproofing should always be applied to protect the new joints',
                    'A properly repointed chimney can add 25–30 years before the next repointing is needed',
                  ].map((fact) => (
                    <div key={fact} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-700 text-sm">{fact}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy-950 mb-2">Customer Reviews</h2>
            <p className="text-gray-600">What homeowners say about our tuckpointing and repointing work.</p>
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
            <h2 className="text-3xl font-bold text-navy-950 mb-2">Tuckpointing FAQ</h2>
            <p className="text-gray-600">Common questions about chimney repointing in Boston.</p>
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
              { name: 'Chimney Repair', href: '/chimney-repair', desc: 'Full masonry restoration' },
              { name: 'Chimney Leak Repair', href: '/chimney-leak-repair', desc: 'Flashing, crown & waterproofing' },
              { name: 'Chimney Rebuilds', href: '/chimney-rebuilds', desc: 'Full & partial reconstruction' },
              { name: 'Chimney Crown Repair', href: '/chimney-crown-repair', desc: 'Stop water at the top' },
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
        heading="Protect Your Chimney With Expert Tuckpointing"
        subtext="Don't let crumbling mortar joints become a costly rebuild. Above Services provides professional chimney tuckpointing throughout Greater Boston and Southern NH. CSIA-certified masons."
        primaryButtonText="Call Now — Save 10%"
        primaryButtonHref="tel:+17819216228"
        secondaryButtonText="Book Today & Save 10%"
        secondaryButtonHref="#contact"
        showPhone={false}
      />
    </>
  );
}
