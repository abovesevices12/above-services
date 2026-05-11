import type { Metadata } from 'next';
import ServiceHero from '@/components/ServiceHero';
import ReviewCard from '@/components/ReviewCard';
import FAQItem from '@/components/FAQItem';
import CTABanner from '@/components/CTABanner';
import Link from 'next/link';
import { faqSchema, breadcrumbSchema, serviceSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Gas Fireplace Services Boston MA | Repair, Tune-Up & Inspection | (781) 921-6228',
  description:
    'Professional gas fireplace repair, tune-up & annual service across New England. Ignition repair, thermocouple replacement, pilot light service & safety inspections. All brands. Call (781) 921-6228.',
  keywords: [
    'gas fireplace service Boston MA',
    'gas fireplace repair Boston',
    'gas fireplace tune-up Boston',
    'gas fireplace inspection Boston MA',
    'pilot light repair Boston',
    'thermocouple replacement Boston MA',
    'gas log service Boston',
    'direct vent fireplace repair Boston',
    'gas fireplace not working Boston',
    'gas fireplace service Cambridge MA',
    'gas fireplace repair Brookline MA',
    'gas fireplace service Newton MA',
  ],
  alternates: {
    canonical: 'https://www.aboveservicesboston.com/gas-fireplace-services',
  },
  openGraph: {
    title: 'Gas Fireplace Services Boston MA | Above Services | (781) 921-6228',
    description:
      'Expert gas fireplace repair, tune-up & inspection across New England. Serving Massachusetts and Southern NH. CSIA-certified. Call (781) 921-6228.',
    url: 'https://www.aboveservicesboston.com/gas-fireplace-services',
  },
};

const reviews = [
  {
    name: 'Patricia H.',
    location: 'Newton, MA',
    date: 'November 2024',
    review:
      'Our gas fireplace had not been serviced in years and the pilot light kept going out. Above Services came out the next morning, cleaned the burner assembly, replaced the thermocouple, and recalibrated the whole unit. Works perfectly now. Technician was knowledgeable and explained everything.',
  },
  {
    name: 'David K.',
    location: 'Brookline, MA',
    date: 'January 2025',
    review:
      'Called because our direct-vent gas fireplace had weak flame and an odd smell. Above Services diagnosed a partially blocked flue and a dirty burner. Cleaned and serviced it within two hours. The difference in heat output is remarkable. Great crew.',
  },
  {
    name: 'Susan T.',
    location: 'Cambridge, MA',
    date: 'October 2024',
    review:
      'Annual tune-up for our gas log set — quick, professional, and thorough. The technician inspected the venting, checked gas connections, cleaned the logs and burner, and tested the remote. Peace of mind going into the heating season. Will book again next year.',
  },
];

const faqs = [
  {
    question: 'Does a gas fireplace need annual service?',
    answer:
      'Yes. Gas fireplaces should be inspected and serviced annually before each heating season. Over time, burner ports become clogged with dust and debris, thermocouples and thermopiles degrade, and venting can develop blockages or leaks. Annual service keeps the unit running safely and efficiently and catches problems before they become costly repairs.',
  },
  {
    question: 'What are signs my gas fireplace needs service?',
    answer:
      "Common warning signs include: pilot light that won't stay lit, weak or uneven flame, yellow or orange flame (should be blue), strange smell when running, fireplace won't ignite, remote or wall switch not working, soot deposits on the glass or surrounding area, or unusual sounds like popping or hissing. Any of these warrant a professional service call.",
  },
  {
    question: 'Can you service all brands of gas fireplaces?',
    answer:
      'Yes — our technicians are trained to service all major gas fireplace brands including Heat & Glo, Majestic, Napoleon, Regency, Valor, Monessen, Empire, and others. We service direct-vent, natural-vent, and vent-free gas fireplaces as well as gas log sets and gas inserts.',
  },
  {
    question: 'What does a gas fireplace tune-up include?',
    answer:
      'Our standard gas fireplace tune-up includes: inspection of the burner assembly and pilot system, thermocouple and thermopile testing, cleaning of the burner ports and logs, glass cleaning and gasket inspection, venting inspection for blockages or leaks, ignition system test, safety shut-off valve check, and a written safety report.',
  },
  {
    question: 'Is it safe to use a gas fireplace that has not been serviced?',
    answer:
      "Using an unserviced gas fireplace carries real risks: carbon monoxide leaks from blocked venting, gas leaks from deteriorated connections, and fire hazards from accumulated dust and debris near the burner. We strongly recommend annual service, especially if the unit hasn't been inspected in more than a year.",
  },
  {
    question: 'How much does gas fireplace service cost in Massachusetts?',
    answer:
      'Pricing varies based on the type of service and unit. We confirm all pricing before any work begins — no surprises. Call (781) 921-6228 for a quote or to schedule an appointment.',
  },
];

const schemas = [
  serviceSchema({
    name: 'Gas Fireplace Services',
    description: 'Professional gas fireplace repair, tune-up, and annual inspection across New England. Serving Massachusetts and Southern NH.',
    slug: 'gas-fireplace-services',
  }),
  faqSchema(faqs),
  breadcrumbSchema([{ name: 'Gas Fireplace Services', href: '/gas-fireplace-services' }]),
];

export default function GasFireplaceServicesPage() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <ServiceHero
        title="Gas Fireplace Services Across New England — All Brands, All Models"
        subtitle="Tune-ups, ignition repair, thermocouple replacement, and annual safety inspections for gas fireplaces throughout New England. CSIA-certified technicians."
        breadcrumbs={[{ label: 'Gas Fireplace Services', href: '/gas-fireplace-services' }]}
        badge="Call Today & Save 10%"
      />

      {/* Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mt-2 mb-4">
              Gas Fireplace Repair & Maintenance
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'Annual Inspection & Tune-Up',
                desc: 'A full pre-season service including burner cleaning, venting inspection, safety shut-off test, glass cleaning, and a written safety report. Recommended every year before the heating season starts.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
              },
              {
                title: 'Ignition System Repair',
                desc: "A fireplace that won't ignite is often caused by a faulty igniter, bad wiring, or a failed control module. We diagnose and repair all ignition system types — standing pilot, intermittent pilot (IPI), and hot-surface ignition.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: 'Thermocouple & Thermopile Replacement',
                desc: 'A failing thermocouple or thermopile is the most common cause of a pilot light that keeps going out or a fireplace that shuts off unexpectedly. We stock replacement parts for all major brands and can typically complete the repair same-day.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: 'Burner, Log Set & Venting Service',
                desc: 'Clogged burner ports cause weak, uneven, or discolored flames. We clean burner assemblies, inspect and reposition ceramic logs, check gas valve operation, and inspect venting for blockages, deterioration, or improper draft — critical for carbon monoxide safety.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
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
                  Gas Fireplace Safety: What New England Homeowners Need to Know
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Have your gas fireplace professionally serviced every year before the heating season',
                    'Install a carbon monoxide detector within 15 feet of all gas appliances',
                    'Never use a gas fireplace that produces a yellow or orange flame — this signals incomplete combustion',
                    'Keep glass doors and venting clean — blockages can cause dangerous CO buildup',
                    'Do not attempt to repair gas lines, valves, or gas connections yourself',
                    'If you smell gas near the fireplace, leave immediately and call the gas company',
                    'Keep the area around the fireplace clear of combustible materials',
                    'Test the automatic safety shut-off annually — this is part of our tune-up service',
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
            <p className="text-gray-600">What New England homeowners say about our gas fireplace service.</p>
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
            <h2 className="text-3xl font-bold text-navy-950 mb-2">Gas Fireplace Service FAQ</h2>
            <p className="text-gray-600">Common questions about gas fireplace service and repair across New England.</p>
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
          <h2 className="text-2xl font-bold text-navy-950 mb-6 text-center">Related Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { name: 'Fireplace Repair', href: '/fireplace-repair', desc: 'Damper, firebox & insert service' },
              { name: 'Chimney Inspection', href: '/chimney-inspection', desc: 'Level 1, 2 & 3 CSIA-certified' },
              { name: 'Chimney Liner Installation', href: '/chimney-liner-installation', desc: 'Safe venting for gas appliances' },
              { name: 'Chimney Cleaning', href: '/chimney-cleaning', desc: 'Annual sweeping & safety check' },
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
        heading="Book Your Gas Fireplace Service Today"
        subtext="Don't wait until the first cold night to find out your gas fireplace has a problem. Above Services provides expert gas fireplace tune-ups and repair throughout New England."
        primaryButtonText="Call Now — Save 10%"
        primaryButtonHref="tel:+17819216228"
        secondaryButtonText="Book Today & Save 10%"
        secondaryButtonHref="#contact"
        showPhone={false}
      />
    </>
  );
}
