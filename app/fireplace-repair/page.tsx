import type { Metadata } from 'next';
import ServiceHero from '@/components/ServiceHero';
import ReviewCard from '@/components/ReviewCard';
import FAQItem from '@/components/FAQItem';
import CTABanner from '@/components/CTABanner';
import Link from 'next/link';
import { faqSchema, breadcrumbSchema, serviceSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Fireplace Repair Boston MA | Damper, Firebox & Gas Fireplace Service | (781) 921-6228',
  description:
    'Professional fireplace repair across New England. Damper repair, firebox restoration, gas fireplace service & insert installation. Licensed & insured. Call (781) 921-6228 today.',
  keywords: [
    'fireplace repair Boston MA',
    'damper repair Boston',
    'firebox repair Boston MA',
    'gas fireplace repair Boston',
    'fireplace insert installation Boston',
    'fireplace repair Cambridge MA',
    'fireplace repair Brookline MA',
    'fireplace repair Newton MA',
    'fireplace repair Somerville MA',
    'fireplace inspection Boston MA',
    'cracked firebox repair Boston',
    'fireplace restoration Boston MA',
  ],
  alternates: {
    canonical: 'https://www.aboveservicesboston.com/fireplace-repair',
  },
  openGraph: {
    title: 'Fireplace Repair Boston MA | Above Services | (781) 921-6228',
    description:
      'Professional fireplace repair across New England. Damper repair, firebox restoration, gas fireplace service & insert installation. Serving MA & Southern NH. Call (781) 921-6228.',
    url: 'https://www.aboveservicesboston.com/fireplace-repair',
  },
};


const reviews = [
  {
    name: 'Catherine F.',
    location: 'Brookline, MA',
    date: 'January 2024',
    review:
      'Our gas fireplace stopped working right at the start of a cold snap. Above Services came out the next morning, diagnosed a faulty thermocouple, and had it running within the hour. Very knowledgeable about gas systems and explained everything clearly. Great service.',
  },
  {
    name: 'James M.',
    location: 'Boston, MA',
    date: 'February 2024',
    review:
      'We had cracks in our firebox refractory panels that we\'d been ignoring for too long. Above Services replaced all the panels and relined the firebox. It now radiates heat much better and we have peace of mind knowing it\'s structurally sound. Excellent craftsmanship.',
  },
  {
    name: 'Maria L.',
    location: 'Cambridge, MA',
    date: 'October 2023',
    review:
      'Had a fireplace insert installed to improve the efficiency of our drafty old fireplace. Above Services handled everything — the insert selection, installation, and liner connection. The difference in heat output is remarkable. Our living room is actually warm now!',
  },
];

const faqs = [
  {
    question: 'Is it safe to use a fireplace with a cracked firebox?',
    answer:
      'No — a cracked firebox is a serious fire hazard and should not be used until repaired. The refractory panels inside the firebox are designed to contain intense heat. Cracks allow that heat to reach the surrounding structure, which can cause a house fire even without visible flames in the chimney. Stop using the fireplace and call us for an inspection.',
  },
  {
    question: 'Why won\'t my fireplace damper open or close?',
    answer:
      'Damper problems are usually caused by rust and corrosion (from water infiltration), warping from heat exposure, or accumulated creosote and debris locking the mechanism. In some cases, the damper throat seal fails, allowing cold drafts into your home even when "closed." We can repair most dampers or install a top-mount replacement damper.',
  },
  {
    question: 'Can you repair a gas fireplace?',
    answer:
      'Yes, our technicians are trained and certified to service all types of gas fireplaces — including direct-vent, natural vent, and vent-free models. Common gas fireplace issues we repair include ignition problems, thermocouple or thermopile failure, pilot light issues, burner problems, and gas valve faults. We also service gas log sets.',
  },
  {
    question: 'What is a fireplace insert and should I get one?',
    answer:
      'A fireplace insert is an efficient heating unit that slides into an existing open fireplace, converting it into a high-efficiency heating appliance. Inserts are available in wood-burning, gas, electric, and pellet versions. If your existing fireplace is drafty and inefficient, an insert can dramatically reduce heat loss and improve comfort. We can help you choose and install the right unit.',
  },
  {
    question: 'How do I know if my fireplace is safe to use?',
    answer:
      'Have it inspected annually by a CSIA-certified technician before each heating season. Signs of an unsafe fireplace include cracks in the firebox or flue tiles, a damaged or missing damper, excessive creosote buildup, debris blockages, or structural damage to the chimney. Don\'t use your fireplace if you\'re unsure — call us for a safety inspection first.',
  },
  {
    question: 'What does fireplace repair cost in Massachusetts?',
    answer:
      'Costs depend on the type and extent of repair needed — pricing varies based on the scope of work. We confirm all pricing before any work begins — no surprises. Call us for a quote.',
  },
];

const schemas = [
  serviceSchema({ name: 'Fireplace Repair', description: 'Professional fireplace repair across New England. Damper repair, firebox restoration, gas fireplace service and insert installation by certified technicians.', slug: 'fireplace-repair' }),
  faqSchema(faqs),
  breadcrumbSchema([{ name: 'Fireplace Repair', href: '/fireplace-repair' }]),
];

export default function FireplaceRepairPage() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <ServiceHero
        title="Fireplace Repair Across New England — All Types, All Brands"
        subtitle="We repair all types of fireplaces — wood-burning, gas, and insert systems. If yours isn't working the way it should, or hasn't been checked in years, we can sort it out."
        breadcrumbs={[{ label: 'Fireplace Repair', href: '/fireplace-repair' }]}
        badge="Call Today & Save 10%"
      />

      {/* Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mt-2 mb-4">
              Fireplace Repair & Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'Damper Repair & Replacement',
                desc: 'A properly functioning damper is critical for both fire safety and energy efficiency. We repair stuck, rusted, or warped dampers and install top-mount damper upgrades that create an airtight seal when not in use — eliminating cold drafts.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: 'Firebox Repair & Restoration',
                desc: 'Cracked refractory panels and damaged firebox masonry are fire hazards. We replace cracked panels with code-compliant refractory material and restore deteriorated mortar joints in the firebox and smoke chamber for safe, long-term use.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                ),
              },
              {
                title: 'Gas Fireplace Service',
                desc: 'We service all gas fireplace models including direct-vent, natural-vent, and vent-free units. Services include ignition system repair, thermocouple/thermopile replacement, burner cleaning, pilot light service, and annual safety inspections for gas systems.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: 'Fireplace Insert Installation',
                desc: 'Convert your drafty, inefficient open fireplace into a high-output heating appliance. We supply and install EPA-certified wood, gas, and pellet fireplace inserts with proper liner connections, surround trim, and blower installation for maximum warmth.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
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

      {/* Safety Section */}
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
                  Fireplace Safety: What Every New England Homeowner Should Know
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Never use a fireplace with a cracked firebox — heat can reach combustible materials',
                    'Always open the damper before lighting a fire and close it when the fireplace is not in use',
                    'Install a carbon monoxide detector within 15 feet of all gas fireplaces',
                    'Have your fireplace inspected annually before the heating season begins',
                    'Use only dry, seasoned hardwood in wood-burning fireplaces — wet wood creates more creosote',
                    'Keep a glass or metal screen in front of the firebox to prevent sparks',
                    'Never leave a fire unattended or go to sleep with a fire burning',
                    'Keep the area around the fireplace clear of combustible materials',
                  ].map((tip) => (
                    <div key={tip} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-700 text-sm">{tip}</p>
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
            <p className="text-gray-600">What New England homeowners say about our fireplace repair service.</p>
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
            <h2 className="text-3xl font-bold text-navy-950 mb-2">Fireplace Repair FAQ</h2>
            <p className="text-gray-600">Common questions about fireplace repair and service across New England.</p>
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
              { name: 'Chimney Cleaning', href: '/chimney-cleaning', desc: 'Annual sweeping & inspection' },
              { name: 'Smoke Chamber Repair', href: '/smoke-chamber-repair', desc: 'Parging & crack repair' },
              { name: 'Chimney Inspection', href: '/chimney-inspection', desc: 'Level 1, 2 & 3 CSIA-certified inspections' },
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
        heading="Restore Your Fireplace to Perfect Condition"
        subtext="Don't let a malfunctioning fireplace spoil your winter. Above Services provides expert fireplace repair throughout New England. Call today for same-day service."
        primaryButtonText="Call Now — Save 10%"
        primaryButtonHref="tel:+17819216228"
        secondaryButtonText="Book Today & Save 10%"
        secondaryButtonHref="#contact"
        showPhone={false}
      />
    </>
  );
}
