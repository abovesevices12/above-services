import type { Metadata } from 'next';
import ServiceHero from '@/components/ServiceHero';
import ReviewCard from '@/components/ReviewCard';
import FAQItem from '@/components/FAQItem';
import CTABanner from '@/components/CTABanner';
import Link from 'next/link';
import { faqSchema, breadcrumbSchema, serviceSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Chimney Leak Repair Boston MA | Water Damage & Waterproofing | (781) 921-6228',
  description:
    'Expert chimney leak repair and waterproofing in Boston, MA. Flashing repair, crown sealing, brick waterproofing & cap installation. Stop water damage before it spreads. Call (781) 921-6228.',
  keywords: [
    'chimney leak repair Boston MA',
    'chimney water damage Boston',
    'chimney waterproofing Boston MA',
    'chimney flashing repair Boston',
    'leaking chimney Boston',
    'chimney leak repair Cambridge MA',
    'chimney waterproofing Newton MA',
    'chimney flashing replacement Boston',
    'water coming into fireplace Boston',
    'chimney leak repair Brookline MA',
    'chimney sealing Boston MA',
    'chimney leak repair NH',
  ],
  alternates: {
    canonical: 'https://www.aboveservicesboston.com/chimney-leak-repair',
  },
  openGraph: {
    title: 'Chimney Leak Repair Boston MA | Above Services | (781) 921-6228',
    description:
      'Stop chimney leaks before they become costly water damage. Flashing repair, crown sealing, waterproofing & cap installation throughout Greater Boston and Southern NH. Call (781) 921-6228.',
    url: 'https://www.aboveservicesboston.com/chimney-leak-repair',
  },
};

const reviews = [
  {
    name: 'Robert A.',
    location: 'Boston, MA',
    date: 'April 2024',
    review:
      'Had water coming into our living room from the chimney every time it rained. Above Services found the problem immediately — failed flashing and a cracked crown. They repaired the flashing, resealed the crown, and waterproofed the brick. No leaks since. Fast and professional.',
  },
  {
    name: 'Linda M.',
    location: 'Quincy, MA',
    date: 'May 2024',
    review:
      "We noticed staining on our ceiling near the fireplace after a heavy rain. Above Services came out, did a full inspection, and found multiple entry points — bad flashing, deteriorated mortar, and no cap. They fixed everything in one visit. Couldn't ask for more.",
  },
  {
    name: 'Thomas B.',
    location: 'Nashua, NH',
    date: 'March 2024',
    review:
      'Chimney leak was getting worse every winter. Above Services waterproofed the exterior brick, repaired the step flashing along the roofline, and installed a stainless steel cap. The job was done cleanly and they cleaned up completely afterward. Excellent service.',
  },
];

const faqs = [
  {
    question: 'What causes a chimney to leak?',
    answer:
      "Chimney leaks have several common causes: damaged or improperly installed flashing (the metal seal where the chimney meets the roof), a cracked or missing chimney crown, deteriorated mortar joints, spalling brick that absorbs water, a missing or damaged chimney cap, or a cracked flue liner. Often multiple entry points are present at once. Boston's freeze-thaw winters accelerate all of these.",
  },
  {
    question: 'Can a leaking chimney cause structural damage?',
    answer:
      "Yes — and quickly. Water entering through a chimney can saturate the surrounding masonry, rot roof framing and sheathing, damage interior walls and ceilings, corrode the damper and liner, and cause mold growth inside the wall cavity. What starts as a small leak can become major structural damage within a single winter. Early repair is always far less expensive than letting it go.",
  },
  {
    question: 'How do you find where a chimney is leaking?',
    answer:
      'We conduct a thorough visual inspection of the flashing, crown, mortar joints, brick face, chimney cap, and flue from both the roof level and inside the firebox. For difficult-to-locate leaks, we use a camera system to inspect the flue liner and can perform a water test with a garden hose to isolate the exact entry point.',
  },
  {
    question: 'What is chimney waterproofing and does it really work?',
    answer:
      "Chimney waterproofing involves applying a penetrating water repellent to the exterior masonry that blocks liquid water from soaking in while still allowing the masonry to breathe and release trapped moisture. High-quality waterproofing products (we use professional-grade formulas) can prevent water infiltration for 10+ years and significantly extend the life of the masonry.",
  },
  {
    question: 'How much does chimney leak repair cost in Boston?',
    answer:
      'Cost depends on what is causing the leak. A minor crown seal costs significantly less than replacing full step flashing, which requires working with roofers. We inspect and identify all causes before starting work and give you a clear quote. Call (781) 921-6228 to schedule an inspection.',
  },
  {
    question: 'My chimney is leaking in heavy rain only — do I still need to fix it?',
    answer:
      "Yes. A leak that only appears in heavy rain still indicates a real entry point. The only reason it doesn't leak in light rain is that the volume of water hitting the chimney isn't high enough to overwhelm the partially-failing seal. That threshold will decrease as the damage progresses, and every freeze-thaw cycle makes it worse. Early repair is always cheaper.",
  },
];

const schemas = [
  serviceSchema({
    name: 'Chimney Leak Repair',
    description: 'Expert chimney leak repair and waterproofing in Boston, MA. Flashing repair, crown sealing, brick waterproofing, and cap installation.',
    slug: 'chimney-leak-repair',
  }),
  faqSchema(faqs),
  breadcrumbSchema([{ name: 'Chimney Leak Repair', href: '/chimney-leak-repair' }]),
];

export default function ChimneyLeakRepairPage() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <ServiceHero
        title="Chimney Leak Repair in Boston, MA — Find It, Fix It, Stop It"
        subtitle="Water is a chimney's worst enemy. We find every entry point — flashing, crown, brick, or liner — and fix it properly so you're not dealing with the same leak next season."
        breadcrumbs={[{ label: 'Chimney Leak Repair', href: '/chimney-leak-repair' }]}
        badge="Call Today & Save 10%"
      />

      {/* Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mt-2 mb-4">
              Chimney Leak Repair & Waterproofing
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'Chimney Flashing Repair & Replacement',
                desc: "Flashing is the most common source of chimney leaks. We repair and replace step flashing, counter flashing, and saddle flashing along the roofline. We work directly with roofers or handle the full repair ourselves — properly installed flashing with quality sealant lasts decades.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
              },
              {
                title: 'Crown Repair & Sealing',
                desc: "The chimney crown protects the top of the masonry from rain and snow. Boston's freeze-thaw cycles crack crowns quickly. We repair and reseal cracked crowns with flexible, waterproof crown coating that bonds to the masonry and expands/contracts with temperature changes.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
              },
              {
                title: 'Brick & Mortar Waterproofing',
                desc: "Spalling or porous brick and deteriorated mortar joints allow water to soak directly into the chimney structure. We apply professional-grade penetrating waterproofer to the exterior masonry — sealing water out while letting the masonry breathe. Lasts 10+ years.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: 'Chimney Cap Installation',
                desc: 'A missing or damaged chimney cap is an open invitation for rain to pour directly into the flue. We supply and install premium stainless steel chimney caps that seal out water, block animals, and prevent downdrafts — one of the best investments for chimney longevity.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
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

      {/* Warning Signs Section */}
      <section className="py-16 md:py-20 bg-amber-50 border-y border-amber-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center flex-shrink-0 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy-950 mb-4">
                  Warning Signs Your Chimney Has a Water Problem
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Water or dampness inside the firebox after rain',
                    'Staining on the ceiling or walls near the chimney',
                    'White staining (efflorescence) on exterior brick',
                    'Spalling or flaking brick on the chimney exterior',
                    'Musty smell coming from the fireplace',
                    'Rust stains on the damper or firebox',
                    'Mortar crumbling or missing between brick joints',
                    'Visible cracks in the chimney crown',
                  ].map((sign) => (
                    <div key={sign} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-700 text-sm">{sign}</p>
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
            <p className="text-gray-600">What homeowners say about our chimney leak repair service.</p>
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
            <h2 className="text-3xl font-bold text-navy-950 mb-2">Chimney Leak Repair FAQ</h2>
            <p className="text-gray-600">Common questions about chimney water problems in Boston.</p>
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
              { name: 'Chimney Crown Repair', href: '/chimney-crown-repair', desc: 'Stop water at the top' },
              { name: 'Chimney Cap Installation', href: '/chimney-cap-installation', desc: 'Block rain & animals' },
              { name: 'Tuckpointing', href: '/tuckpointing', desc: 'Mortar joint restoration' },
              { name: 'Chimney Repair', href: '/chimney-repair', desc: 'Full masonry restoration' },
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
        heading="Stop Your Chimney Leak Before Winter"
        subtext="Every rain cycle and freeze-thaw makes chimney water damage worse. Above Services provides fast, thorough chimney leak repair throughout Greater Boston and Southern NH."
        primaryButtonText="Call Now — Save 10%"
        primaryButtonHref="tel:+17819216228"
        secondaryButtonText="Book Today & Save 10%"
        secondaryButtonHref="#contact"
        showPhone={false}
      />
    </>
  );
}
