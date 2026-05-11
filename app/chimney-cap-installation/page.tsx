import type { Metadata } from 'next';
import ServiceHero from '@/components/ServiceHero';
import ReviewCard from '@/components/ReviewCard';
import FAQItem from '@/components/FAQItem';
import CTABanner from '@/components/CTABanner';
import Link from 'next/link';
import { faqSchema, breadcrumbSchema, serviceSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Chimney Cap Installation Boston MA | Above Services | (781) 921-6228',
  description:
    'Chimney cap installation & replacement in Boston, MA. Prevent water damage, animal intrusion & downdrafts. Stainless steel caps installed same day. Call (781) 921-6228.',
  keywords: [
    'chimney cap installation Boston MA',
    'chimney cap replacement Boston',
    'stainless steel chimney cap Boston',
    'chimney cap cost Boston MA',
    'animal guard chimney Boston',
    'chimney cap installation Cambridge MA',
    'chimney cap installation Brookline MA',
    'chimney cap Newton MA',
    'chimney cap Somerville MA',
    'top mount damper Boston MA',
    'chimney cap near me Boston',
    'draft improving chimney cap Boston',
  ],
  alternates: {
    canonical: 'https://www.aboveservicesboston.com/chimney-cap-installation',
  },
  openGraph: {
    title: 'Chimney Cap Installation Boston MA | Above Services | (781) 921-6228',
    description:
      'Chimney cap installation & replacement in Boston, MA. Prevent water damage, animal intrusion & downdrafts. Stainless steel caps installed same day.',
    url: 'https://www.aboveservicesboston.com/chimney-cap-installation',
  },
};


const reviews = [
  {
    name: 'Dorothy M.',
    location: 'Newton, MA',
    date: 'March 2024',
    review:
      'We had squirrels nesting in our chimney for the second consecutive winter. Above Services installed a heavy-duty stainless steel cap with a fine mesh screen — problem solved permanently. The tech was up on the roof and done in under an hour. Reasonable price and excellent work.',
  },
  {
    name: 'George F.',
    location: 'Quincy, MA',
    date: 'April 2024',
    review:
      'Our old cap had rusted through and water was getting into the firebox every rainstorm. Above Services replaced it the same day I called. They also noticed a crack in the crown while they were up there and gave me a no-pressure quote to address it. Very honest and professional.',
  },
  {
    name: 'Helen C.',
    location: 'Brookline, MA',
    date: 'February 2024',
    review:
      'We had persistent downdraft problems — cold air and odors coming into the house through the fireplace. Above Services diagnosed it as a pressure imbalance and installed a draft-increasing cap that fixed the issue completely. I wish we had done this years ago.',
  },
];

const faqs = [
  {
    question: 'How long do chimney caps last?',
    answer:
      'The lifespan depends heavily on material. Galvanized steel caps typically last 5–10 years before rust becomes a problem. Aluminum caps last 10–15 years. Stainless steel caps — which we install on every job — are rated for 20+ years and often outlast the chimneys they sit on. We recommend stainless steel for all Boston homes given our harsh coastal climate.',
  },
  {
    question: 'What cap material is best?',
    answer:
      'For Boston\'s climate, stainless steel (specifically 304 or 316 grade) is the clear best choice. It resists rust and corrosion from both rain and the acidic combustion byproducts vented through the flue. Copper caps are also excellent and add a classic look to historic homes, though they cost significantly more. We do not install galvanized or aluminum caps due to their shorter lifespan.',
  },
  {
    question: 'Can a chimney cap improve draft?',
    answer:
      'Yes — certain cap designs actively improve draft. Standard caps simply cover the flue opening. Draft-increasing caps (sometimes called "wind-resistant" caps) use the Bernoulli effect to create a slight negative pressure at the flue exit, which helps pull smoke upward even in low-draft conditions. If you have a smoking fireplace or downdraft problem, a draft-improving cap is worth considering alongside a full diagnosis.',
  },
  {
    question: 'Do I need a cap on a gas fireplace?',
    answer:
      'Yes. Gas fireplaces still vent combustion byproducts through the chimney, and the flue still needs protection from rain, debris, and animals. Some gas fireplace manufacturers actually require a specific cap to maintain their warranty. Check your fireplace documentation or call us and we can confirm the right cap for your system.',
  },
  {
    question: 'Can I install a chimney cap myself?',
    answer:
      'Technically, yes — caps for single-flue chimneys slip over the flue tile and can be installed by a homeowner comfortable on a roof. However, we strongly advise against DIY roof and chimney work due to safety risks. A professional ensures the correct size cap is used (an undersized cap restricts draft; an oversized cap lets in rain), that it is properly secured, and that no other issues are missed while someone is up there.',
  },
  {
    question: 'Does a cap prevent all water entry into the chimney?',
    answer:
      'A cap prevents direct rainfall from entering the flue — which is its primary function. However, water can still enter through a cracked chimney crown, failed flashing, deteriorated mortar, or spalled bricks. A cap is the first line of defense, not the only one. We include a visual inspection of the crown and upper chimney with every cap installation, and we\'ll let you know if additional work is needed to fully weatherproof the system.',
  },
];

const schemas = [
  serviceSchema({ name: 'Chimney Cap Installation', description: 'Professional chimney cap installation and replacement in Boston, MA. Stainless steel caps prevent water damage, animal intrusion, and downdrafts.', slug: 'chimney-cap-installation' }),
  faqSchema(faqs),
  breadcrumbSchema([{ name: 'Chimney Cap Installation', href: '/chimney-cap-installation' }]),
];

export default function ChimneyCapInstallationPage() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <ServiceHero
        title="Chimney Cap Installation in Boston, MA"
        subtitle="A chimney cap is the simplest, cheapest protection you can add. If yours is missing, rusted out, or your chimney never had one — we can usually install a new stainless steel cap the same day you call."
        breadcrumbs={[{ label: 'Chimney Cap Installation', href: '/chimney-cap-installation' }]}
        badge="Caps Installed Same Day"
      />

      {/* Why You Need a Cap */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Protection Your Chimney Needs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mt-2 mb-4">
              Why Every Boston Chimney Needs a Cap
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A chimney cap is a small investment that prevents big problems. Here are four reasons every chimney needs one — whether you use the fireplace every night or once a year.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                ),
                title: 'Prevents Water Damage',
                desc: 'Rainwater entering an uncapped flue saturates the liner, corrodes the damper, and causes spalling brick and mortar deterioration. In winter, pooled water freezes and expands, causing serious structural damage. A cap is the simplest and most cost-effective waterproofing measure you can take.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
                title: 'Keeps Animals Out',
                desc: 'Squirrels, raccoons, and birds frequently nest inside uncapped chimneys. Animal nests are a serious fire hazard, and the animals themselves can become trapped and die inside the flue — creating odor and health problems. Our caps include stainless mesh screens to permanently block all wildlife.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  </svg>
                ),
                title: 'Blocks Downdrafts',
                desc: 'Without a cap, wind can push directly down the flue — sending cold air, smoke smells, and even live embers back into your living space. A properly designed cap deflects wind and prevents the negative pressure events that cause downdraft problems.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                ),
                title: 'Prevents Sparks & Embers',
                desc: 'The mesh screen on a chimney cap contains sparks and burning embers from wood fires, preventing them from landing on your roof or neighboring structures. This is especially important in older Boston neighborhoods where homes are close together.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-navy-950 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cap Types */}
      <section className="py-16 md:py-20 bg-navy-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Find the Right Cap</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Cap Types We Install
            </h2>
            <p className="text-blue-300 text-lg max-w-2xl mx-auto">
              Not all chimneys are the same — we carry a full selection of cap styles and sizes to fit every flue configuration and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'Standard Single-Flue Cap',
                price: 'Call for a quote',
                desc: 'The most common cap type — slides over a single clay flue tile and is secured with set screws. Includes stainless steel mesh screen for animal exclusion. Available in standard sizes for all flue dimensions.',
              },
              {
                title: 'Multi-Flue Cap',
                price: 'Call for a quote',
                desc: 'For chimneys with two or more flues, a multi-flue cap covers the entire chimney crown in one piece, protecting all flues simultaneously. Also protects the crown itself from direct rainfall. Stainless steel mesh included.',
              },
              {
                title: 'Top-Mount Damper Cap',
                price: 'Call for a quote',
                desc: 'A top-mount damper replaces both your throat damper and chimney cap in one unit. It creates a fully airtight seal at the top of the chimney when the fireplace is not in use — eliminating cold air infiltration and dramatically reducing energy loss. Highly recommended for Boston winters.',
              },
              {
                title: 'Draft-Increasing Cap',
                price: 'Call for a quote',
                desc: 'Designed for chimneys with persistent downdraft problems or poor draw. Uses the Bernoulli effect to create negative pressure at the flue exit, pulling smoke upward even in adverse wind conditions. An excellent solution for short chimneys or those surrounded by taller structures.',
              },
            ].map((cap) => (
              <div key={cap.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-white text-lg">{cap.title}</h3>
                  <span className="text-amber-400 font-semibold text-sm flex-shrink-0 ml-4">{cap.price}</span>
                </div>
                <p className="text-blue-300 text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signs You Need a Cap */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div>
              <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Act Now</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mt-2 mb-6">
                Signs You Need a New Cap
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Chimney caps fail gradually from rust and physical damage — and many homeowners don't realize there's a problem until water or animals have already caused significant damage. Check for these warning signs.
              </p>
              <ul className="space-y-4">
                {[
                  { sign: 'Missing or visibly damaged cap', desc: 'If you can see the cap from the ground is bent, rusted through, or missing entirely, replace it immediately.' },
                  { sign: 'Rust staining on chimney exterior', desc: 'Orange or brown streaks running down the outside of your chimney below the flue indicate a rusting cap.' },
                  { sign: 'Water in the firebox', desc: 'Finding water, puddles, or rust stains inside the firebox after rain is a direct sign of flue exposure.' },
                  { sign: 'Animal sounds in the chimney', desc: 'Scratching, chirping, or fluttering sounds from the chimney indicate wildlife has gained access through an uncapped flue.' },
                  { sign: 'Downdraft and cold air intrusion', desc: 'If you feel cold air coming from your fireplace when it\'s not in use, a new cap — or top-mount damper cap — will solve the problem.' },
                ].map((item) => (
                  <li key={item.sign} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-navy-950 text-sm">{item.sign}: </span>
                      <span className="text-gray-600 text-sm">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-navy-950 mb-4">Same-Day Cap Service</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                In most cases, we can measure, supply, and install the correct cap for your chimney on the same day you call. We carry a full inventory of standard cap sizes and can source specialty or custom caps within 2–3 days.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  'Free visual assessment with every cap install',
                  'Stainless steel caps — no rust, no return trips',
                  'All cap hardware included in the quoted price',
                  'We check the crown and flashing while up there',
                ].map((pt) => (
                  <div key={pt} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {pt}
                  </div>
                ))}
              </div>
              <a
                href="tel:+17819216228"
                className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-200"
              >
                Call (781) 921-6228
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
            <p className="text-gray-600">Real reviews from Boston homeowners about our chimney cap service.</p>
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
            <h2 className="text-3xl font-bold text-navy-950 mb-2">Chimney Cap FAQ</h2>
            <p className="text-gray-600">Common questions about chimney cap installation in Boston, MA.</p>
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
              { name: 'Chimney Crown Repair', href: '/chimney-crown-repair', desc: 'Seal & restore your chimney crown' },
              { name: 'Chimney Cleaning', href: '/chimney-cleaning', desc: 'Annual sweeping & inspection' },
              { name: 'Chimney Inspection', href: '/chimney-inspection', desc: 'Level 1, 2 & 3 inspections' },
              { name: 'Chimney Repair', href: '/chimney-repair', desc: 'Tuckpointing & masonry repair' },
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
        heading="Get Your Chimney Cap Installed Today"
        subtext="Same-day cap installation throughout Greater Boston. Stainless steel, built to last. Call Above Services now."
        primaryButtonText="Call Now — Save 10%"
        primaryButtonHref="tel:+17819216228"
        secondaryButtonText="Book Today & Save 10%"
        secondaryButtonHref="#contact"
        showPhone={false}
      />
    </>
  );
}
