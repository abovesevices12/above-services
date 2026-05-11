import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Chimney Services in Greater Boston MA | Above Services | (781) 921-6228',
  description:
    'Above Services provides expert chimney cleaning, inspection, repair, rebuilds, liner installation & fireplace repair throughout Greater Boston. Serving 10+ cities. Call (781) 921-6228.',
  keywords: [
    'chimney services Greater Boston MA',
    'chimney cleaning Cambridge MA',
    'chimney repair Brookline MA',
    'chimney inspection Newton MA',
    'chimney sweep Somerville MA',
    'fireplace repair Quincy MA',
    'chimney specialist Boston MA',
  ],
  alternates: {
    canonical: 'https://www.aboveservicesboston.com/service-areas',
  },
  openGraph: {
    title: 'Chimney Services in Greater Boston | Above Services',
    description:
      'Above Services serves Boston, Cambridge, Somerville, Brookline, Newton, Quincy, Medford, Malden, Waltham, and Arlington with expert chimney and fireplace services.',
    url: 'https://www.aboveservicesboston.com/service-areas',
  },
};

const serviceAreaSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Chimney Services in Greater Boston',
  description: 'Professional chimney cleaning, inspection, repair, rebuilds, liner installation, and fireplace services throughout Greater Boston, MA.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Above Services',
    telephone: '+17819216228',
  },
  areaServed: [
    { '@type': 'City', name: 'Boston', containedInPlace: { '@type': 'State', name: 'Massachusetts' } },
    { '@type': 'City', name: 'Cambridge', containedInPlace: { '@type': 'State', name: 'Massachusetts' } },
    { '@type': 'City', name: 'Somerville', containedInPlace: { '@type': 'State', name: 'Massachusetts' } },
    { '@type': 'City', name: 'Brookline', containedInPlace: { '@type': 'State', name: 'Massachusetts' } },
    { '@type': 'City', name: 'Newton', containedInPlace: { '@type': 'State', name: 'Massachusetts' } },
    { '@type': 'City', name: 'Quincy', containedInPlace: { '@type': 'State', name: 'Massachusetts' } },
    { '@type': 'City', name: 'Medford', containedInPlace: { '@type': 'State', name: 'Massachusetts' } },
    { '@type': 'City', name: 'Waltham', containedInPlace: { '@type': 'State', name: 'Massachusetts' } },
    { '@type': 'City', name: 'Arlington', containedInPlace: { '@type': 'State', name: 'Massachusetts' } },
  ],
};

const areas = [
  { city: 'Boston', slug: 'boston', description: 'From Back Bay brownstones to Charlestown rowhouses and South End Victorians, Boston\'s historic housing stock demands expert chimney and fireplace care. We serve all Boston neighborhoods.', neighborhoods: ['Back Bay', 'South End', 'Beacon Hill', 'North End', 'Jamaica Plain', 'Dorchester'], responseTime: '1–2 hours' },
  { city: 'Cambridge', slug: 'cambridge', description: 'Cambridge has a dense mix of Victorian triple-deckers, historic single-family homes, and modern condos — many with aging chimneys that haven\'t been serviced in years.', neighborhoods: ['Harvard Square', 'Central Square', 'Inman Square', 'Porter Square', 'East Cambridge'], responseTime: '1–2 hours' },
  { city: 'Somerville', slug: 'somerville', description: 'Somerville\'s dense urban neighborhoods are full of classic New England triple-deckers with chimneys and fireplaces that need regular maintenance.', neighborhoods: ['Davis Square', 'Union Square', 'Ball Square', 'Assembly Row', 'Winter Hill'], responseTime: '1–2 hours' },
  { city: 'Brookline', slug: 'brookline', description: 'Brookline\'s prestigious neighborhoods feature large single-family homes and upscale condos, many with multiple fireplaces and oversized chimneys.', neighborhoods: ['Coolidge Corner', 'Washington Square', 'Chestnut Hill', 'South Brookline'], responseTime: '1–2 hours' },
  { city: 'Newton', slug: 'newton', description: 'Newton\'s expansive neighborhoods include some of the largest homes in New England — and some of the most complex chimney systems. We specialize in multi-flue systems throughout Newton\'s 13 villages.', neighborhoods: ['Newton Centre', 'Newton Highlands', 'Chestnut Hill', 'West Newton', 'Auburndale'], responseTime: '1–3 hours' },
  { city: 'Quincy', slug: 'quincy', description: 'Quincy\'s growing residential communities include everything from postwar ranch homes to new construction townhouses. Same-day service available.', neighborhoods: ['Quincy Center', 'Wollaston', 'North Quincy', 'Germantown', 'Squantum'], responseTime: '1–2 hours' },
  { city: 'Medford', slug: 'medford', description: 'Medford\'s solid New England homes are known for their well-built chimneys and classic fireplace designs. Full-service chimney care throughout Medford.', neighborhoods: ['Medford Square', 'West Medford', 'North Medford', 'Wellington', 'Lawrence Estates'], responseTime: '1–2 hours' },
  { city: 'Waltham', slug: 'waltham', description: 'Waltham\'s neighborhoods include both older homes with traditional chimneys and newer construction. Full-service chimney care throughout Waltham.', neighborhoods: ['Waltham Center', 'Cedarwood', 'Piety Corner', 'Watch City', 'South Waltham'], responseTime: '1–2 hours' },
  { city: 'Arlington', slug: 'arlington', description: 'Arlington\'s classic New England streetscapes feature charming older homes with original fireplaces and aging chimney systems. Comprehensive chimney care throughout Arlington.', neighborhoods: ['Arlington Center', 'East Arlington', 'Arlington Heights', 'Morningside', 'Peirce-Wheeler'], responseTime: '1–2 hours' },
  { city: 'Salem', slug: 'salem-ma', description: 'Salem is one of New England\'s most historic cities with 18th- and 19th-century homes and complex original chimneys. We specialize in historic masonry throughout Salem, MA.', neighborhoods: ['McIntire District', 'South Salem', 'North Salem', 'Point Neighborhood'], responseTime: '1–2 hours' },
  { city: 'Reading', slug: 'reading', description: 'Reading\'s charming colonials and craftsman homes from the 1920s–1960s have traditional masonry fireplaces that benefit from regular professional chimney care.', neighborhoods: ['Reading Center', 'South Reading', 'West Reading', 'Birch Meadow'], responseTime: '1–2 hours' },
  { city: 'Woburn', slug: 'woburn', description: 'Woburn\'s mix of older two-families and mid-century homes includes many chimneys overdue for cleaning, inspection, and liner assessment.', neighborhoods: ['Woburn Center', 'North Woburn', 'West Woburn', 'Horn Pond'], responseTime: '1–2 hours' },
  { city: 'Burlington', slug: 'burlington', description: 'Burlington\'s ranch homes and split-levels from the 1960s–80s often have original wood-burning fireplaces that need liner inspection, cap upgrades, and cleaning.', neighborhoods: ['Burlington Center', 'South Burlington', 'Mill Pond', 'Northwest Burlington'], responseTime: '1–2 hours' },
  { city: 'Stoneham', slug: 'stoneham', description: 'Stoneham\'s colonial and cape cod homes from 1900–1960 have traditional masonry chimneys that need regular cleaning, inspection, and upkeep.', neighborhoods: ['Stoneham Center', 'South Stoneham', 'Bear Hill', 'Spot Pond'], responseTime: '1–2 hours' },
  { city: 'Melrose', slug: 'melrose', description: 'Melrose\'s beautiful Victorian and late-colonial homes — many with original fireplaces — need expert annual chimney care through New England winters.', neighborhoods: ['Melrose Center', 'Wyoming', 'Cedar Park', 'Highlands'], responseTime: '1–2 hours' },
  { city: 'Lexington', slug: 'lexington', description: 'Lexington\'s large historic colonials and Tudors often have complex multi-flue chimney systems. CSIA-certified chimney care tailored to Lexington\'s prestigious homes.', neighborhoods: ['Lexington Center', 'East Lexington', 'North Lexington', 'Hastings'], responseTime: '1–2 hours' },
  { city: 'Winchester', slug: 'winchester', description: 'Winchester\'s upscale Tudors and large colonials around Horn Pond feature sizeable fireplaces and substantial chimneys requiring expert service.', neighborhoods: ['Winchester Center', 'East Winchester', 'Wedgemere', 'Rangeley'], responseTime: '1–2 hours' },
  { city: 'Saugus', slug: 'saugus', description: 'Saugus\'s post-war ranch homes and cape cods have original masonry chimneys from the 1950s–70s that need regular inspection, cleaning, and maintenance.', neighborhoods: ['Saugus Center', 'Cliftondale', 'East Saugus', 'Lynnhurst'], responseTime: '1–2 hours' },
  { city: 'Beverly', slug: 'beverly', description: 'Beverly\'s coastal Victorian homes and colonials face both New England freeze-thaw cycles and salt air exposure — making regular chimney inspection and waterproofing essential.', neighborhoods: ['Beverly Center', 'Beverly Farms', 'Prides Crossing', 'Ryal Side'], responseTime: '1–2 hours' },
  { city: 'Andover', slug: 'andover', description: 'Andover\'s historic Federal and Victorian homes, alongside large newer colonials, need expert chimney cleaning, tuckpointing, liner service, and inspection.', neighborhoods: ['Andover Center', 'Shawsheen Village', 'West Andover', 'Ballardvale'], responseTime: '1–2 hours' },
  { city: 'Billerica', slug: 'billerica', description: 'Billerica\'s mix of older colonials and 1980s–90s suburban homes includes both traditional masonry chimneys and prefab fireplace systems — we service both types.', neighborhoods: ['Billerica Center', 'South Billerica', 'North Billerica', 'Pinehurst'], responseTime: '1–2 hours' },
  { city: 'Wilmington', slug: 'wilmington', description: 'Wilmington\'s mid-century ranches and newer colonial subdivisions include many chimneys and fireplaces that haven\'t been serviced since the home was built.', neighborhoods: ['Wilmington Center', 'Silver Lake', 'North Wilmington', 'Shawsheen Heights'], responseTime: '1–2 hours' },
  { city: 'Needham', slug: 'needham', description: 'Needham\'s large colonial and Tudor homes — many bordering Newton along the Charles River — feature substantial fireplaces and masonry chimneys that need expert annual care.', neighborhoods: ['Needham Center', 'Needham Heights', 'South Needham', 'Needham Junction'], responseTime: '1–2 hours' },
  { city: 'Milton', slug: 'milton', description: 'Milton\'s upscale historic colonials and Victorians, set against the Blue Hills Reservation, often have original masonry chimneys and fireplaces requiring careful annual maintenance.', neighborhoods: ['Milton Village', 'East Milton', 'Milton Hill', 'Cunningham Park'], responseTime: '1–2 hours' },
  { city: 'Norwood', slug: 'norwood', description: 'Norwood\'s solid mix of post-war ranches and colonials south of Boston includes many chimneys that have seen decades of New England winters without professional service.', neighborhoods: ['Norwood Center', 'East Norwood', 'Guild Street', 'Washington Street'], responseTime: '1–2 hours' },
  { city: 'Framingham', slug: 'framingham', description: 'Framingham\'s diverse housing stock — from older New England colonials near downtown to newer construction around Lake Cochituate — spans a wide range of chimney types and conditions.', neighborhoods: ['Framingham Center', 'Saxonville', 'Nobscot', 'South Framingham', 'Wayland Line'], responseTime: '1–2 hours' },
  { city: 'Maynard', slug: 'maynard', description: 'Maynard\'s compact historic mill town along the Assabet River features older New England homes with aging masonry chimneys that see heavy use through cold winters.', neighborhoods: ['Maynard Center', 'Summer Hill', 'Acton Line', 'Powder Mill'], responseTime: '1–2 hours' },
  { city: 'Acton', slug: 'acton', description: 'Acton\'s large newer colonials and historic homes in the Concord-area tech corridor often have wood-burning fireplaces built for New England winters that need annual expert care.', neighborhoods: ['Acton Center', 'South Acton', 'West Acton', 'North Acton', 'East Acton'], responseTime: '1–2 hours' },
  { city: 'Chelmsford', slug: 'chelmsford', description: 'Chelmsford\'s growing suburban neighborhoods north of Boston include a mix of older colonial and newer construction homes with fireplaces and chimneys across all eras.', neighborhoods: ['Chelmsford Center', 'North Chelmsford', 'East Chelmsford', 'West Chelmsford', 'South Chelmsford'], responseTime: '1–2 hours' },
  { city: 'Pepperell', slug: 'pepperell', description: 'Pepperell\'s rural-suburban character near the NH border means homes rely heavily on wood-burning fireplaces through long winters — making expert annual chimney care essential.', neighborhoods: ['Pepperell Center', 'East Pepperell', 'North Pepperell', 'Nashua River Area'], responseTime: '1–2 hours' },
  { city: 'Newburyport', slug: 'newburyport', description: 'Newburyport\'s stunning Federal and Victorian architecture along the Merrimack River means centuries-old chimneys, salt air exposure, and some of the most complex historic masonry in New England.', neighborhoods: ['Newburyport Downtown', 'Joppa Flats', 'South End', 'Plum Island Gateway'], responseTime: '1–2 hours' },
  { city: 'Gloucester', slug: 'gloucester', description: 'America\'s oldest seaport has a housing stock defined by age and salt air — Victorian and colonial-era homes with chimneys that face constant exposure to ocean weather and moisture.', neighborhoods: ['Gloucester Center', 'East Gloucester', 'Annisquam', 'Lanesville', 'Bass Rocks'], responseTime: '1–2 hours' },
];

const nhAreas = [
  {
    city: 'Nashua',
    slug: 'nashua',
    description:
      "Nashua is New Hampshire's second-largest city with a mix of historic downtown homes and growing suburban neighborhoods. We provide expert chimney cleaning, inspection, and repair throughout Nashua and the surrounding Hillsborough County area.",
    neighborhoods: ['Downtown Nashua', 'North Nashua', 'South Nashua', 'Millyard', 'West Hollis'],
    responseTime: '1–2 hours',
  },
  {
    city: 'Salem',
    slug: 'salem',
    description:
      'Salem, NH sits just over the Massachusetts border and is home to many classic New England properties with aging chimneys. We serve all of Salem with comprehensive chimney sweeping, inspection, and masonry repair.',
    neighborhoods: ['Salem Center', 'North Salem', 'East Salem', 'Canobie Lake'],
    responseTime: '1–2 hours',
  },
  {
    city: 'Manchester',
    slug: 'manchester',
    description:
      "Manchester is New Hampshire's largest city, filled with historic mill-era homes and classic triple-deckers that demand regular chimney maintenance. Our Manchester service area covers all neighborhoods from the West Side to Pinardville.",
    neighborhoods: ['Downtown Manchester', 'West Side', 'North End', 'South Elm', 'Pinardville'],
    responseTime: '1–2 hours',
  },
  {
    city: 'Derry',
    slug: 'derry',
    description:
      'Derry, NH is a growing suburb with a blend of older colonial homes and newer construction, many with wood-burning fireplaces requiring regular chimney service. We cover all of Derry township.',
    neighborhoods: ['Derry Village', 'East Derry', 'West Derry', 'Hood', 'Hoodkroft'],
    responseTime: '1–2 hours',
  },
  {
    city: 'Londonderry',
    slug: 'londonderry',
    description:
      'Londonderry is a fast-growing suburban town with many newer homes featuring gas and wood-burning fireplaces. We serve all of Londonderry with chimney inspections, liner installations, and full masonry repair.',
    neighborhoods: ['Londonderry Center', 'North Londonderry', 'South Londonderry', 'Pillsbury'],
    responseTime: '1–2 hours',
  },
  {
    city: 'Hudson',
    slug: 'hudson',
    description:
      'Hudson, NH borders Nashua and features a variety of residential properties with traditional chimneys. We provide reliable chimney cleaning, inspection, and repair throughout Hudson and neighboring Pelham.',
    neighborhoods: ['Hudson Center', 'North Hudson', 'Albuquerque Lake', 'Dracut Road'],
    responseTime: '1–2 hours',
  },
  {
    city: 'Windham',
    slug: 'windham',
    description:
      "Windham is one of New Hampshire's most upscale residential towns, with many large single-family homes featuring multi-flue chimney systems. We specialize in premium chimney service for Windham's high-end housing stock.",
    neighborhoods: ['Windham Center', 'North Windham', 'Golden Brook', 'Canobie Lake area'],
    responseTime: '1–2 hours',
  },
  {
    city: 'Merrimack',
    slug: 'merrimack',
    description:
      'Merrimack is a thriving suburb with a strong mix of established neighborhoods and new developments. Our chimney team serves all of Merrimack with the same fast, professional standards as our Boston-area coverage.',
    neighborhoods: ['Merrimack Village', 'North Merrimack', 'Horseshoe Pond', 'Pennichuck'],
    responseTime: '1–2 hours',
  },
  {
    city: 'Bedford',
    slug: 'bedford',
    description:
      "Bedford is one of New Hampshire's most affluent towns, known for its large estate homes and executive properties — many with oversized chimneys and premium fireplace systems. We provide expert multi-flue and custom chimney services throughout Bedford.",
    neighborhoods: ['Bedford Center', 'North Bedford', 'South Bedford', 'Meetinghouse Road'],
    responseTime: '1–2 hours',
  },
];

const services = [
  { name: 'Chimney Inspection', href: '/chimney-inspection' },
  { name: 'Chimney Cleaning', href: '/chimney-cleaning' },
  { name: 'Chimney Repair', href: '/chimney-repair' },
  { name: 'Chimney Rebuilds', href: '/chimney-rebuilds' },
  { name: 'Chimney Liner Installation', href: '/chimney-liner-installation' },
  { name: 'Chimney Cap Installation', href: '/chimney-cap-installation' },
  { name: 'Chimney Crown Repair', href: '/chimney-crown-repair' },
  { name: 'Smoke Chamber Repair', href: '/smoke-chamber-repair' },
  { name: 'Fireplace Repair', href: '/fireplace-repair' },
  { name: 'Gas Fireplace Services', href: '/gas-fireplace-services' },
  { name: 'Chimney Leak Repair', href: '/chimney-leak-repair' },
  { name: 'Tuckpointing', href: '/tuckpointing' },
];

export default function ServiceAreasPage() {
  const phoneIcon = (
    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreaSchema) }} />

      {/* ── HERO ── */}
      <section className="relative bg-[#07111f] min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#07111f] via-[#0b1929] to-[#0f2545]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-600/5 blur-[80px] pointer-events-none" />

        <div className="relative w-full max-w-[1560px] mx-auto px-6 lg:px-12 py-24">
          <nav className="flex items-center gap-2 text-sm text-blue-400 mb-10" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span className="text-blue-700">/</span>
            <span className="text-white font-medium">Service Areas</span>
          </nav>

          <div className="grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-12 xl:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 bg-amber-500/15 border border-amber-500/30 text-amber-400 text-sm font-bold px-5 py-2 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                41 Cities Covered — MA &amp; NH
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-7">
                Chimney Services<br />
                <span className="text-amber-400">Across Greater</span><br />
                <span className="text-amber-400">Boston &amp; Southern NH</span>
              </h1>
              <p className="text-blue-200 text-xl leading-relaxed mb-10 max-w-2xl">
                One CSIA-certified crew covers 41 cities across Massachusetts and Southern New Hampshire. Same standards, same upfront pricing, same-day availability — wherever you are.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+17819216228"
                  className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-white font-black py-5 px-10 rounded-2xl text-lg transition-all duration-150 shadow-[0_8px_32px_rgba(245,158,11,0.3)] active:scale-[0.98]"
                >
                  {phoneIcon}
                  Call (781) 921-6228
                </a>
                <a
                  href="https://maps.app.goo.gl/m6JmBt8W75SP118S8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold py-5 px-8 rounded-2xl text-base transition-all duration-150"
                >
                  View on Google Maps
                </a>
              </div>
            </div>

            {/* Right: city count card */}
            <div className="bg-white/6 border border-white/12 rounded-3xl p-8">
              <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">Coverage at a Glance</p>
              <div className="space-y-4 mb-8">
                {[
                  { label: 'Massachusetts', count: '32 cities', color: 'bg-amber-500' },
                  { label: 'Southern New Hampshire', count: '9 cities', color: 'bg-blue-500' },
                ].map((r) => (
                  <div key={r.label} className="flex items-center justify-between bg-white/5 rounded-2xl px-5 py-4">
                    <div className="flex items-center gap-3">
                      <span className={`w-3 h-3 rounded-full ${r.color}`} />
                      <span className="text-white font-semibold text-sm">{r.label}</span>
                    </div>
                    <span className="text-amber-400 font-black text-sm">{r.count}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-6">
                {[
                  { val: '4.9 ★', label: 'Google Rating' },
                  { val: '500+', label: 'Reviews' },
                  { val: 'CSIA', label: 'Certified' },
                  { val: 'Same-Day', label: 'Available' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-white font-black text-xl">{s.val}</p>
                    <p className="text-blue-400 text-xs mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-amber-500 py-5">
        <div className="w-full max-w-[1560px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-amber-400/40 gap-0">
            {[
              { val: '41', label: 'Cities Served' },
              { val: 'Same-Day', label: 'Availability' },
              { val: 'CSIA', label: 'Certified Crew' },
              { val: '10% Off', label: 'Book Today' },
            ].map((s) => (
              <div key={s.label} className="text-center px-4 py-1">
                <p className="text-white font-black text-2xl leading-none">{s.val}</p>
                <p className="text-amber-100 text-xs mt-1 font-semibold uppercase tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MA CITY GRID ── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="w-full max-w-[1560px] mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-xs font-bold px-4 py-2 rounded-full mb-5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Massachusetts — 32 Cities
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-[#07111f] leading-tight mb-5">
              Greater Boston<br />Service Areas
            </h2>
            <p className="text-gray-500 text-xl max-w-2xl">
              Same CSIA-certified crew across all 32 Massachusetts cities — no subcontractors, upfront pricing, same-day available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {areas.map((area) => (
              <Link
                key={area.city}
                href={`/service-areas/${area.slug}`}
                id={area.slug}
                className="group bg-gray-50 hover:bg-[#07111f] border border-gray-100 hover:border-[#07111f] rounded-3xl p-8 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 bg-amber-100 group-hover:bg-amber-500/20 rounded-2xl flex items-center justify-center transition-colors">
                    <svg className="w-6 h-6 text-amber-600 group-hover:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-amber-600 group-hover:text-amber-400 bg-amber-50 group-hover:bg-amber-500/10 px-3 py-1.5 rounded-full transition-colors">
                    {area.responseTime}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#07111f] group-hover:text-white mb-3 transition-colors">
                  {area.city}, MA
                </h3>
                <p className="text-gray-500 group-hover:text-blue-300 text-sm leading-relaxed mb-5 flex-1 transition-colors">
                  {area.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {area.neighborhoods.slice(0, 4).map((n) => (
                    <span key={n} className="text-xs font-medium text-gray-600 group-hover:text-blue-200 bg-white group-hover:bg-white/10 border border-gray-200 group-hover:border-white/10 px-3 py-1 rounded-full transition-colors">
                      {n}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200 group-hover:border-white/10 transition-colors">
                  <span className="text-sm font-bold text-amber-600 group-hover:text-amber-400 transition-colors">
                    View {area.city} page →
                  </span>
                  <svg className="w-5 h-5 text-amber-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMERGENCY CTA STRIP ── */}
      <section className="bg-amber-500 py-10">
        <div className="w-full max-w-[1560px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <p className="text-amber-900 font-bold text-sm uppercase tracking-widest mb-1">Same-Day Service Available</p>
              <h3 className="text-white font-black text-3xl lg:text-4xl">Not sure if we cover your area? Call us.</h3>
            </div>
            <a
              href="tel:+17819216228"
              className="flex-shrink-0 inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-amber-600 font-black py-4 px-10 rounded-2xl text-xl transition-all duration-150 active:scale-[0.98] shadow-lg"
            >
              {phoneIcon}
              (781) 921-6228
            </a>
          </div>
        </div>
      </section>

      {/* ── NH CITY GRID ── */}
      <section className="bg-[#07111f] py-24 lg:py-32">
        <div className="w-full max-w-[1560px] mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 text-xs font-bold px-4 py-2 rounded-full mb-5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              New Hampshire — 9 Cities
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-5">
              Southern New Hampshire<br />Service Areas
            </h2>
            <p className="text-blue-300 text-xl max-w-2xl">
              The same Boston-standard CSIA-certified crew crosses the border — same upfront pricing, same-day availability, same quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {nhAreas.map((area) => (
              <Link
                key={area.city}
                href={`/service-areas/${area.slug}`}
                id={area.slug}
                className="group bg-white/5 hover:bg-white/10 border border-white/8 hover:border-amber-500/40 rounded-3xl p-8 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 bg-blue-500/20 group-hover:bg-amber-500/20 rounded-2xl flex items-center justify-center transition-colors">
                    <svg className="w-6 h-6 text-blue-400 group-hover:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-blue-400 group-hover:text-amber-400 bg-blue-500/10 group-hover:bg-amber-500/10 px-3 py-1.5 rounded-full transition-colors">
                    {area.responseTime}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {area.city}, NH
                </h3>
                <p className="text-blue-300/80 text-sm leading-relaxed mb-5 flex-1">
                  {area.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {area.neighborhoods.slice(0, 4).map((n) => (
                    <span key={n} className="text-xs font-medium text-blue-300 bg-white/8 border border-white/10 px-3 py-1 rounded-full">
                      {n}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-sm font-bold text-amber-400 group-hover:text-amber-300 transition-colors">
                    View {area.city} page →
                  </span>
                  <svg className="w-5 h-5 text-amber-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL SERVICES ── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="w-full max-w-[1560px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-4">Everything Under One Roof</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#07111f] leading-tight mb-5">
              12 Services. Every City.
            </h2>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto">
              The full service menu is available in all 41 cities — no referrals, no subcontractors.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-gray-50 hover:bg-[#07111f] border border-gray-100 hover:border-[#07111f] rounded-2xl p-5 text-center transition-all duration-200"
              >
                <div className="w-10 h-10 bg-amber-100 group-hover:bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 transition-colors">
                  <svg className="w-5 h-5 text-amber-600 group-hover:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="font-bold text-[#07111f] group-hover:text-white text-sm leading-tight transition-colors">{s.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY TRUST US ── */}
      <section className="bg-gray-50 py-24 lg:py-32">
        <div className="w-full max-w-[1560px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-5">Why Homeowners Choose Us</p>
              <h2 className="text-4xl lg:text-5xl font-black text-[#07111f] leading-tight mb-8">
                One Crew.<br />41 Cities.<br />Zero Subcontractors.
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed mb-10">
                Whether you are in Back Bay or Bedford, NH, you get the same CSIA-certified technician, the same upfront pricing, and the same written service report on every job.
              </p>
              <a
                href="tel:+17819216228"
                className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-white font-black py-5 px-10 rounded-2xl text-lg transition-all duration-150 shadow-[0_8px_32px_rgba(245,158,11,0.3)] active:scale-[0.98]"
              >
                {phoneIcon}
                Call Now — Save 10%
              </a>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { val: '4.9 ★', sub: 'Google Rating', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /> },
                { val: '500+', sub: 'Google Reviews', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /> },
                { val: 'CSIA', sub: 'Certified Techs', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> },
                { val: '12+', sub: 'Years in Region', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /> },
              ].map((stat) => (
                <div key={stat.sub} className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col items-center text-center shadow-sm">
                  <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">{stat.icon}</svg>
                  </div>
                  <p className="text-4xl font-black text-[#07111f] mb-1">{stat.val}</p>
                  <p className="text-gray-500 text-sm font-semibold">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <CTABanner
        heading="Call Above Services Now"
        subtext="Don&apos;t see your city? Give us a call — we cover more of Greater Boston than listed and are always expanding. CSIA-certified chimney specialists ready to help."
        primaryButtonText="Call Now For 10% Off"
        primaryButtonHref="tel:+17819216228"
        secondaryButtonText="Book Today & Save 10%"
        secondaryButtonHref="tel:+17819216228"
        showPhone={true}
      />
    </>
  );
}
