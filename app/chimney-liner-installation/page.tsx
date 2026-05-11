import type { Metadata } from 'next';
import ServiceHero from '@/components/ServiceHero';
import ReviewCard from '@/components/ReviewCard';
import FAQItem from '@/components/FAQItem';
import CTABanner from '@/components/CTABanner';
import Link from 'next/link';
import { faqSchema, breadcrumbSchema, serviceSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Chimney Liner Installation Boston MA | Above Services | (781) 921-6228',
  description:
    'Professional chimney liner installation across New England. Stainless steel & cast-in-place liners. Restore safe draft & prevent CO leaks. Call (781) 921-6228.',
  keywords: [
    'chimney liner installation Boston MA',
    'chimney liner replacement Boston',
    'stainless steel chimney liner Boston',
    'clay tile liner replacement Boston MA',
    'chimney relining Boston MA',
    'chimney liner installation Cambridge MA',
    'chimney liner installation Brookline MA',
    'chimney liner installation Newton MA',
    'cast in place chimney liner Boston',
    'chimney liner cost Boston MA',
    'CO leak chimney liner Boston',
    'fireplace liner installation Boston',
  ],
  alternates: {
    canonical: 'https://www.aboveservicesboston.com/chimney-liner-installation',
  },
  openGraph: {
    title: 'Chimney Liner Installation Boston MA | Above Services | (781) 921-6228',
    description:
      'Professional chimney liner installation across New England. Stainless steel & cast-in-place liners. Restore safe draft & prevent CO leaks.',
    url: 'https://www.aboveservicesboston.com/chimney-liner-installation',
  },
};


const reviews = [
  {
    name: 'Bruce A.',
    location: 'Cambridge, MA',
    date: 'November 2024',
    review:
      'Our 1940s colonial had original clay tile liners that were badly cracked — we could see the pieces in the firebox. Above Services installed a flexible stainless steel liner in a single day. The difference in draft is remarkable, and knowing the CO risk has been eliminated is worth every dollar.',
  },
  {
    name: 'Sandra K.',
    location: 'Somerville, MA',
    date: 'October 2024',
    review:
      'We converted our wood-burning fireplace to gas and needed the liner updated. Above Services handled everything — the inspection, sizing, installation, and final test. The tech explained exactly what was needed and why. The liner came with a 20-year warranty which gave us real peace of mind.',
  },
  {
    name: 'William P.',
    location: 'Medford, MA',
    date: 'September 2024',
    review:
      'Had a cast-in-place liner installed in our old, irregular flue. The team was efficient and professional, and the finished system draws perfectly with zero smoke rollout. Camera inspection before and after was included in the price. Excellent service from start to finish.',
  },
];

const faqs = [
  {
    question: 'How do I know if I need a new chimney liner?',
    answer:
      'Common signs include chunks of clay tile in the firebox (indicating liner deterioration), poor draft or smoke backing into the room, a strong smoky smell when the fireplace is not in use, visible cracks in clay tile visible during an inspection, or any Level 2 inspection that reveals liner damage. If your home is older and has never had the liner replaced, a camera inspection is strongly recommended before each heating season.',
  },
  {
    question: 'Does every chimney need a liner?',
    answer:
      'Yes — the NFPA 211 standard and local Massachusetts building code both require that chimneys serving heating appliances have a properly sized, continuous, intact liner. The liner protects your home\'s combustible framing from heat transfer and prevents carbon monoxide and other combustion gases from seeping into your living space. An unlined or damaged chimney is a serious code violation and a fire hazard.',
  },
  {
    question: 'What size liner do I need?',
    answer:
      'Liner sizing depends on the type of appliance being vented (fireplace, wood stove, gas insert, oil furnace), the BTU output, the height of the chimney, and the number of elbows or offsets in the system. Our technicians perform a complete load calculation to specify the correct liner diameter for your system. Using an incorrectly sized liner — too large or too small — negatively impacts draft and can be unsafe.',
  },
  {
    question: 'How long does chimney liner installation take?',
    answer:
      'Most stainless steel liner installations are completed in a single day — typically 3–6 hours depending on chimney height and complexity. Cast-in-place liner systems require two visits: one for the pour and one for inspection after curing (24–48 hours). We schedule both appointments together and confirm your chimney is ready to use before we leave.',
  },
  {
    question: 'What warranty comes with a new liner?',
    answer:
      'Our stainless steel liners carry a manufacturer\'s warranty of 20 years on the liner itself, and we back our installation labor with a 2-year workmanship guarantee. Cast-in-place liners are warranted for life by the manufacturer under normal use conditions. We provide all warranty documentation in writing at the time of installation.',
  },
  {
    question: 'Can a new liner fix my draft problems?',
    answer:
      'Yes, in many cases. A damaged, deteriorated, or incorrectly sized liner is one of the most common causes of poor draft. A properly sized new liner restores the correct draft geometry, improving the draw significantly. In some cases, draft problems have other causes — such as negative house pressure, inadequate air supply, or an oversized firebox — and we diagnose all contributing factors before recommending a solution.',
  },
];

const schemas = [
  serviceSchema({ name: 'Chimney Liner Installation', description: 'Professional chimney liner installation across New England. Stainless steel and cast-in-place liners restore safe draft and prevent carbon monoxide leaks.', slug: 'chimney-liner-installation' }),
  faqSchema(faqs),
  breadcrumbSchema([{ name: 'Chimney Liner Installation', href: '/chimney-liner-installation' }]),
];

export default function ChimneyLinerInstallationPage() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <ServiceHero
        title="Chimney Liner Installation Across New England"
        subtitle="A cracked or failing liner is one of the most serious chimney problems you can have. Carbon monoxide seeps through the walls and the fire risk is real. We install code-compliant liners that actually solve the problem."
        breadcrumbs={[{ label: 'Chimney Liner Installation', href: '/chimney-liner-installation' }]}
        badge="Lifetime Warranty Available"
      />

      {/* Why Liner Matters */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Safety First</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mt-2 mb-6">
                Why Your Chimney Liner Matters
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The chimney liner is the most critical safety component of your fireplace system. Without a properly functioning liner, your home is exposed to two serious hazards: chimney fires and carbon monoxide poisoning.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  {
                    title: 'Prevents Dangerous Heat Transfer',
                    desc: 'The liner contains combustion temperatures and prevents heat from transferring to your home\'s framing. Without it, wood framing adjacent to the chimney can ignite — sometimes hours after a fire has burned out.',
                  },
                  {
                    title: 'Blocks CO From Entering Your Home',
                    desc: 'Cracks or gaps in a deteriorated liner allow carbon monoxide to seep through the chimney walls and into your living spaces. CO is odorless, colorless, and potentially fatal.',
                  },
                  {
                    title: 'Improves Draft Efficiency',
                    desc: 'A properly sized, intact liner creates the correct draft conditions for complete combustion — meaning less creosote buildup, better heat output, and a cleaner burn.',
                  },
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
            <div className="bg-navy-950 rounded-2xl p-8 text-center">
              <div className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-4">Did You Know?</div>
              <div className="text-5xl font-bold text-amber-500 mb-3">42%</div>
              <p className="text-blue-300 text-lg mb-6">of all house fires involving heating equipment are attributed to chimney defects — with cracked or missing liners as the leading cause.</p>
              <div className="border-t border-white/10 pt-6">
                <div className="text-4xl font-bold text-white mb-2">2,800°F</div>
                <p className="text-blue-300 text-sm">The temperature inside a chimney during a creosote fire. A sound liner is the only thing standing between that heat and your home's framing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Liner Types */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Your Options</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mt-2 mb-4">
              Types of Chimney Liners We Install
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The right liner depends on your chimney type, fuel type, and how the flue is shaped. We install all three major liner systems and recommend what actually fits your situation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                type: 'Clay Tile',
                label: 'Original / Repair',
                color: 'border-gray-300',
                desc: 'Clay tile liners are found in most older New England homes. When intact, they perform adequately — but they crack from heat cycling and are nearly impossible to repair properly once damaged. We replace failed clay tile systems with modern alternatives.',
                pros: ['Low original cost', 'Adequate for moderate use', 'Common in historic homes'],
                cons: ['Cracks from heat cycling', 'Cannot be easily repaired', 'Not recommended for new installs'],
                price: 'Replacement required',
              },
              {
                type: 'Stainless Steel',
                label: 'Most Popular',
                color: 'border-amber-400',
                desc: 'Stainless steel flexible and rigid liners are our most frequently installed system. They work with all fuel types (wood, gas, oil), are easily sized to the correct diameter, and carry a 20-year manufacturer warranty. Installation is typically completed in one day.',
                pros: ['Works with all fuel types', '20-year warranty', 'Flexible for offsets', 'One-day installation', 'Easy to inspect'],
                cons: ['Higher upfront cost than clay tile'],
                price: 'Call for a quote',
              },
              {
                type: 'Cast-in-Place',
                label: 'Best for Irregular Flues',
                color: 'border-blue-300',
                desc: 'Cast-in-place liners are poured as a continuous layer of refractory material inside the existing flue, conforming perfectly to any shape. They are ideal for irregular, offset, or square flues where a round flexible liner cannot be used, and they structurally reinforce the chimney at the same time.',
                pros: ['Works in any flue shape', 'Structurally reinforces chimney', 'Lifetime warranty', 'No seams or joints'],
                cons: ['2-day process (pour + cure)', 'Higher cost'],
                price: 'Call for a quote',
              },
            ].map((liner) => (
              <div key={liner.type} className={`bg-white rounded-2xl p-6 border-2 ${liner.color} shadow-md`}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-navy-950 text-xl">{liner.type}</h3>
                  <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-full">{liner.label}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{liner.desc}</p>
                <div className="space-y-1 mb-5">
                  {liner.pros.map((pro) => (
                    <div key={pro} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {pro}
                    </div>
                  ))}
                  {liner.cons.map((con) => (
                    <div key={con} className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                      {con}
                    </div>
                  ))}
                </div>
                <div className="text-amber-600 font-bold text-sm border-t border-gray-100 pt-4">{liner.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mt-2 mb-4">
              Liner Installation Process
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            {[
              { step: '1', title: 'Camera Inspection', desc: 'We begin every liner job with a full-length video inspection of the flue. This reveals the exact condition of the existing liner, identifies any offsets or obstructions, and determines the correct liner size and type for your system.' },
              { step: '2', title: 'Remove Old or Damaged Liner', desc: 'If the existing clay tile or failed liner needs to be removed prior to installation, we handle that as part of the job. All debris is vacuumed out and the flue is cleared before the new liner goes in.' },
              { step: '3', title: 'Measure & Cut New Liner', desc: 'We measure the exact run length and cut the stainless steel liner to fit. Each section is connected with stainless steel couplers and the entire assembly is wrapped in insulation to improve draft and protect the liner.' },
              { step: '4', title: 'Install Top-Down with Insulation', desc: 'The liner is fed from the top of the chimney down through the flue to the appliance connection. Insulation wrap is critical for achieving proper draft temperatures and extending liner life, and is included on every installation we perform.' },
              { step: '5', title: 'Cap and Test Draft', desc: 'The liner is terminated at the top with a stainless steel cap and secured with a top plate. We then run a test fire or draft test to confirm the system is performing correctly before we leave. You receive a written completion report and all warranty documentation.' },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-5 mb-8 last:mb-0">
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {item.step}
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-navy-950 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
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
            <h2 className="text-3xl font-bold text-navy-950 mt-2 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8">All liner installations include labor and materials. Call us to discuss your chimney and get a detailed quote before any work begins. No hidden fees.</p>
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
            <p className="text-gray-600">Real reviews from New England homeowners about our chimney liner work.</p>
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
            <h2 className="text-3xl font-bold text-navy-950 mb-2">Chimney Liner FAQ</h2>
            <p className="text-gray-600">Common questions about chimney liner installation in Massachusetts and Southern NH.</p>
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
              { name: 'Chimney Inspection', href: '/chimney-inspection', desc: 'Level 1, 2 & 3 inspections' },
              { name: 'Chimney Repair', href: '/chimney-repair', desc: 'Tuckpointing, crown & flashing repair' },
              { name: 'Chimney Rebuilds', href: '/chimney-rebuilds', desc: 'Full & partial reconstruction' },
              { name: 'Chimney Cleaning', href: '/chimney-cleaning', desc: 'Annual sweeping & inspection' },
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
        heading="Protect Your Home with a New Chimney Liner"
        subtext="Don't use a fireplace with a cracked or deteriorated liner. Above Services installs code-compliant chimney liners throughout New England. Camera inspection included. Call today."
        primaryButtonText="Call Now — Save 10%"
        primaryButtonHref="tel:+17819216228"
        secondaryButtonText="Book Today & Save 10%"
        secondaryButtonHref="#contact"
        showPhone={false}
      />
    </>
  );
}
