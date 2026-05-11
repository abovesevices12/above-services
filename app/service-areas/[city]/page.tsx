import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import FAQItem from '@/components/FAQItem';
import ReviewCard from '@/components/ReviewCard';

const BASE_URL = 'https://www.aboveservicesboston.com';
const GBP_URL = 'https://maps.app.goo.gl/m6JmBt8W75SP118S8';

interface CityData {
  city: string;
  slug: string;
  state: 'MA' | 'NH';
  h1?: string;
  description: string;
  chimneyProblems?: string;
  neighborhoods: string[];
  responseTime: string;
  homeType: string;
  metaTitle?: string;
  metaDescription: string;
  nearbyLinks?: { city: string; slug: string }[];
  faqs: { question: string; answer: string }[];
}

const cityData: Record<string, CityData> = {
  boston: {
    city: 'Boston',
    slug: 'boston',
    state: 'MA',
    description:
      "From Back Bay brownstones to Charlestown rowhouses and South End Victorians, Boston's historic housing stock demands expert chimney and fireplace care. Many of these homes were built in the 1800s — their chimneys have seen over a century of use and Boston's brutal freeze-thaw winters. We serve all Boston neighborhoods with the same CSIA-certified crew and same-day availability.",
    neighborhoods: ['Back Bay', 'South End', 'Beacon Hill', 'North End', 'Jamaica Plain', 'Dorchester', 'Charlestown', 'Roxbury', 'Roslindale', 'West Roxbury'],
    responseTime: '1–2 hours',
    homeType: 'historic brownstones, rowhouses, and triple-deckers',
    metaDescription:
      'Expert chimney cleaning, inspection & repair in Boston, MA. CSIA-certified. Same-day available. Serving Back Bay, South End, Beacon Hill, Dorchester & all Boston neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'Do you serve all Boston neighborhoods?',
        answer:
          'Yes — we cover all of Boston including Back Bay, South End, Beacon Hill, North End, Jamaica Plain, Dorchester, Charlestown, Roxbury, Roslindale, and West Roxbury. Same crew, same CSIA-certified standards throughout.',
      },
      {
        question: 'How often do Boston brownstones need chimney cleaning?',
        answer:
          "Annual chimney cleaning is strongly recommended for Boston's historic homes. Older masonry chimneys tend to develop creosote faster and are more prone to cracks and water infiltration due to their age. We recommend a Level 2 inspection for any home over 40 years old.",
      },
      {
        question: 'Can you work on historic Boston homes without damaging the masonry?',
        answer:
          "Absolutely. Our crew specializes in historic Boston masonry. We use period-appropriate mortar mixes and non-invasive inspection tools so we don't disturb original brick or plaster while getting a complete picture of the chimney's condition.",
      },
      {
        question: 'Do you offer same-day chimney service in Boston?',
        answer:
          "Yes — we offer same-day availability throughout Boston most days of the week. Call (781) 921-6228 and we'll do our best to get a technician to you the same day.",
      },
    ],
  },
  cambridge: {
    city: 'Cambridge',
    slug: 'cambridge',
    state: 'MA',
    description:
      "Cambridge has a dense mix of Victorian triple-deckers, historic single-family homes, and modern condos — many with aging chimneys that haven't been serviced in years. The city's older housing stock (much of it built between 1880 and 1930) means clay tile liners are common, and many are overdue for inspection or replacement. We cover all Cambridge neighborhoods with the same CSIA-certified crew.",
    neighborhoods: ['Harvard Square', 'Central Square', 'Inman Square', 'Porter Square', 'East Cambridge', 'Cambridgeport', 'Mid-Cambridge', 'Agassiz'],
    responseTime: '1–2 hours',
    homeType: 'Victorian triple-deckers and historic single-family homes',
    metaDescription:
      'Chimney cleaning, inspection & repair in Cambridge, MA. CSIA-certified technicians. Serving Harvard Square, Central Square, Inman Square & all Cambridge neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'Do you serve Cambridge condos and multi-family homes?',
        answer:
          "Yes — we work in everything from single-family homes to multi-unit triple-deckers and modern condominiums. For multi-unit buildings we can coordinate with HOAs and provide documentation for each unit's chimney.",
      },
      {
        question: "What's the most common chimney problem in Cambridge homes?",
        answer:
          "In Cambridge's older housing stock, the most common issues are cracked or deteriorated clay tile liners (especially in homes built before 1960), failing mortar joints, and creosote buildup in wood-burning fireplaces. Annual cleaning and a Level 2 inspection every few years keeps these in check.",
      },
      {
        question: 'How much does chimney cleaning cost in Cambridge?',
        answer:
          'We provide flat-rate pricing over the phone. Call (781) 921-6228 and we can give you a complete price before booking. Book today and save 10% on your first service.',
      },
    ],
  },
  somerville: {
    city: 'Somerville',
    slug: 'somerville',
    state: 'MA',
    description:
      "Somerville's dense urban neighborhoods are full of classic New England triple-deckers with chimneys and fireplaces that need regular maintenance. Many of these homes were built in the early 1900s and their masonry systems have weathered decades of Boston winters. We service all Somerville neighborhoods — from Davis Square to Assembly Row — with same-day availability and CSIA-certified technicians.",
    neighborhoods: ['Davis Square', 'Union Square', 'Ball Square', 'Assembly Row', 'Winter Hill', 'Magoun Square', 'Powder House', 'East Somerville'],
    responseTime: '1–2 hours',
    homeType: 'classic New England triple-deckers',
    metaDescription:
      'Chimney cleaning, inspection & repair in Somerville, MA. CSIA-certified. Serving Davis Square, Union Square, Winter Hill & all Somerville neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'Do you service triple-deckers in Somerville?',
        answer:
          "Yes — triple-deckers are some of our most common jobs in Somerville. We work with owners and tenants, can coordinate access between floors, and provide per-unit documentation when needed.",
      },
      {
        question: "My Somerville triple-decker hasn't been cleaned in 5+ years. Is that a problem?",
        answer:
          "It's a significant safety concern. Creosote buildup — the byproduct of wood burning — is highly flammable and the leading cause of chimney fires. After 5 or more years without cleaning, you should get a Level 2 inspection and cleaning before using the fireplace again.",
      },
      {
        question: 'Do you offer chimney inspections for home purchases in Somerville?',
        answer:
          "Absolutely. We offer Level 2 chimney inspections specifically for real estate transactions. We provide a detailed written report that satisfies lenders and attorneys. Call to schedule before or after your home inspection.",
      },
    ],
  },
  brookline: {
    city: 'Brookline',
    slug: 'brookline',
    state: 'MA',
    description:
      "Brookline's prestigious neighborhoods feature large single-family homes and upscale condos, many with multiple fireplaces and oversized chimneys. We serve all of Brookline and routinely work on historic estates and multi-fireplace properties. Our CSIA-certified crew brings the same expertise to Brookline's large Victorians and Tudors as to any other home in Greater Boston.",
    neighborhoods: ['Coolidge Corner', 'Washington Square', 'Chestnut Hill', 'South Brookline', 'Brookline Village', 'Longwood', 'Fisher Hill'],
    responseTime: '1–2 hours',
    homeType: 'large Victorians, Tudors, and multi-fireplace estates',
    metaDescription:
      'Chimney cleaning, inspection & repair in Brookline, MA. CSIA-certified. Serving Coolidge Corner, Chestnut Hill, Washington Square & all Brookline neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'Do you handle multi-fireplace homes in Brookline?',
        answer:
          "Yes — we regularly work on Brookline properties with two, three, or even four fireplaces. We can service all flues in a single visit and provide comprehensive documentation for each one.",
      },
      {
        question: 'What chimney services are most common in Brookline?',
        answer:
          "In Brookline's larger, older homes, we commonly perform Level 2 inspections, chimney relining (replacing deteriorated clay tile liners with stainless steel), crown repair, and tuckpointing. Annual cleaning is the most requested recurring service.",
      },
      {
        question: 'Do you work on gas fireplaces in Brookline?',
        answer:
          "Yes — we service gas fireplaces and gas log inserts throughout Brookline. Gas fireplaces still require periodic inspection and cleaning of the flue to ensure safe venting.",
      },
    ],
  },
  newton: {
    city: 'Newton',
    slug: 'newton',
    state: 'MA',
    description:
      "Newton's expansive suburban neighborhoods include some of the largest homes in Greater Boston — and some of the most complex chimney systems. We specialize in multi-flue chimneys and large wood-burning fireplace systems throughout Newton's 13 villages. Our CSIA-certified masons have worked on properties ranging from charming Colonials to large custom estates.",
    neighborhoods: ['Newton Centre', 'Newton Highlands', 'Chestnut Hill', 'West Newton', 'Auburndale', 'Newtonville', 'Newton Upper Falls', 'Newton Corner'],
    responseTime: '1–3 hours',
    homeType: 'large Colonials, Tudors, and custom estates',
    metaDescription:
      'Chimney cleaning, inspection & repair in Newton, MA. CSIA-certified. Serving Newton Centre, Newton Highlands, Chestnut Hill & all 13 Newton villages. Call (781) 921-6228.',
    faqs: [
      {
        question: 'Do you serve all 13 Newton villages?',
        answer:
          "Yes — we cover all of Newton's villages including Newton Centre, Newton Highlands, Chestnut Hill, West Newton, Auburndale, Newtonville, Newton Upper Falls, Newton Corner, Nonantum, Waban, and more.",
      },
      {
        question: 'Our Newton home has a very large chimney with two flues. Can you handle that?',
        answer:
          "Absolutely. Multi-flue chimneys are common in Newton's larger homes and we service them regularly. We can inspect, clean, and repair both flues in a single visit and provide a written report for each.",
      },
      {
        question: 'What does chimney liner installation cost in Newton?',
        answer:
          'Liner installation pricing depends on flue length, diameter, and liner type (stainless steel vs. cast-in-place). We provide detailed estimates after a camera inspection. Call (781) 921-6228 and we can give you a ballpark before the visit.',
      },
    ],
  },
  quincy: {
    city: 'Quincy',
    slug: 'quincy',
    state: 'MA',
    description:
      "Quincy's growing residential communities include everything from postwar ranch homes to new construction townhouses, along with classic New England colonials. We provide expert chimney cleaning, inspection, and repair throughout Quincy and surrounding areas. Same-day service is available most days.",
    neighborhoods: ['Quincy Center', 'Wollaston', 'North Quincy', 'Germantown', 'Squantum', 'South Quincy', 'Merrymount', 'Adams Shore'],
    responseTime: '1–2 hours',
    homeType: 'postwar colonials, ranch homes, and newer townhouses',
    metaDescription:
      'Chimney cleaning, inspection & repair in Quincy, MA. CSIA-certified. Serving Quincy Center, Wollaston, North Quincy & all Quincy neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'Do you serve all Quincy neighborhoods?',
        answer:
          "Yes — we cover Quincy Center, Wollaston, North Quincy, Germantown, Squantum, South Quincy, Merrymount, Adams Shore, and all surrounding Quincy neighborhoods.",
      },
      {
        question: "We just bought a Quincy home — should we get a chimney inspection?",
        answer:
          "Yes, strongly recommended. Even if the home passed a general inspection, chimney systems require a dedicated Level 2 inspection from a CSIA-certified specialist. We catch issues that general inspectors routinely miss, including cracked liners, damaged smoke chambers, and deteriorated mortar.",
      },
      {
        question: 'How soon can you come to Quincy?',
        answer:
          "Same-day service is available most days. Call (781) 921-6228 and we'll do our best to get a technician to you the same day.",
      },
    ],
  },
  medford: {
    city: 'Medford',
    slug: 'medford',
    state: 'MA',
    description:
      "Medford's solid New England homes are known for their well-built chimneys and classic fireplace designs. Many of the city's homes were built between 1920 and 1960 and feature traditional masonry chimneys with clay tile liners. We serve all of Medford with expert chimney sweeping, repair, and maintenance services.",
    neighborhoods: ['Medford Square', 'West Medford', 'North Medford', 'Wellington', 'Lawrence Estates', 'Tufts', 'South Medford'],
    responseTime: '1–2 hours',
    homeType: 'solid New England colonials and cape cods built 1920–1960',
    metaDescription:
      'Chimney cleaning, inspection & repair in Medford, MA. CSIA-certified. Serving Medford Square, West Medford, Wellington & all Medford neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'What chimney issues are most common in Medford homes?',
        answer:
          "In Medford's homes — most built between 1920 and 1960 — the most common issues are deteriorated clay tile liners, failed chimney crowns from freeze-thaw cycles, and creosote buildup in fireplaces that haven't been cleaned regularly.",
      },
      {
        question: 'Do you handle chimney repair in Medford or just cleaning?',
        answer:
          "We handle everything — cleaning, inspection, repair, liner installation, crown repair, cap installation, and full rebuilds if needed. Our CSIA-certified masons are equipped for all types of masonry work in Medford.",
      },
      {
        question: 'How quickly can you respond to a chimney emergency in Medford?',
        answer:
          "For urgent situations — suspected blockages, carbon monoxide concerns, or visible chimney damage — call (781) 921-6228 immediately. We prioritize emergency calls and aim to respond within 1–2 hours throughout Medford.",
      },
    ],
  },
  waltham: {
    city: 'Waltham',
    slug: 'waltham',
    state: 'MA',
    description:
      "Waltham's growing suburban neighborhoods include both older homes with traditional chimneys and newer construction requiring modern fireplace and chimney liner installations. The city's mix of housing stock — from early 1900s colonials to 1990s-era new builds — means we see a wide range of chimney issues. We serve all of Waltham with fast, professional chimney service.",
    neighborhoods: ['Waltham Center', 'Cedarwood', 'Piety Corner', 'Watch City', 'South Waltham', 'Stonehurst Hills', 'Warrendale'],
    responseTime: '1–2 hours',
    homeType: 'colonials, cape cods, and newer suburban construction',
    metaDescription:
      'Chimney cleaning, inspection & repair in Waltham, MA. CSIA-certified. Serving Waltham Center, Cedarwood, Watch City & all Waltham neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'Do you service newer Waltham homes with prefab fireplaces?',
        answer:
          "Yes — we service both traditional masonry chimneys and factory-built (prefab) fireplaces and their metal chimneys. Prefab systems still require annual inspection and cleaning.",
      },
      {
        question: 'What is chimney relining and does my Waltham home need it?',
        answer:
          "Chimney relining means installing a new stainless steel liner inside your existing chimney. It's needed when the original clay tile liner has cracked, collapsed, or deteriorated. This is common in Waltham homes built before 1980. A camera inspection will confirm whether you need it.",
      },
      {
        question: 'How do I book a chimney service in Waltham?',
        answer:
          "Call (781) 921-6228 — we'll book you in and give you a flat-rate price over the phone. Same-day service is available most days in Waltham.",
      },
    ],
  },
  arlington: {
    city: 'Arlington',
    slug: 'arlington',
    state: 'MA',
    description:
      "Arlington's classic New England streetscapes are dotted with charming older homes, many with original fireplaces and aging chimney systems. Built primarily between 1900 and 1950, Arlington's homes often have clay tile liners that are decades past their design life. We provide comprehensive chimney cleaning, inspection, repair, and fireplace restoration throughout Arlington.",
    neighborhoods: ['Arlington Center', 'East Arlington', 'Arlington Heights', 'Morningside', 'Peirce-Wheeler', 'Brattle', 'Mill Brook'],
    responseTime: '1–2 hours',
    homeType: 'charming cape cods, colonials, and Craftsman homes built 1900–1950',
    metaDescription:
      'Chimney cleaning, inspection & repair in Arlington, MA. CSIA-certified. Serving Arlington Center, East Arlington, Arlington Heights & all Arlington neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'Are chimney issues common in Arlington homes?',
        answer:
          "Yes — Arlington's housing stock is primarily from 1900–1950, and chimney issues in this era of construction are very common. Clay tile liners deteriorate over decades, mortar joints erode, and crowns crack from freeze-thaw cycles. Annual inspection catches problems before they become expensive.",
      },
      {
        question: 'Can you restore an original fireplace in our Arlington colonial?',
        answer:
          "Absolutely. Fireplace restoration is one of our specialties — from damper repair and firebox rebuilding to full decorative surround restoration. We preserve original craftsmanship wherever possible.",
      },
      {
        question: 'Do you offer chimney waterproofing in Arlington?',
        answer:
          "Yes. Chimney waterproofing is especially important in Arlington given the age of the masonry and the region's freeze-thaw cycles. We apply professional-grade breathable sealant that prevents water infiltration without trapping moisture inside the masonry.",
      },
    ],
  },
  'salem-ma': {
    city: 'Salem',
    slug: 'salem-ma',
    state: 'MA',
    description:
      "Salem is one of New England's most historically significant cities, with a housing stock rich in 18th- and 19th-century architecture. Many of Salem's homes — from Federal-style properties in the McIntire Historic District to Victorian triple-deckers throughout the city — have chimneys that have seen two centuries of New England winters. We specialize in historic masonry and serve all of Salem with CSIA-certified chimney care.",
    neighborhoods: ['McIntire District', 'South Salem', 'North Salem', 'Point Neighborhood', 'Derby Street', 'Highland Avenue'],
    responseTime: '1–2 hours',
    homeType: 'historic Federal and Victorian homes, triple-deckers, and colonial-era properties',
    metaDescription:
      'Chimney cleaning, inspection & repair in Salem, MA. CSIA-certified. Historic home specialists. Serving McIntire District, South Salem & all Salem neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: "Can you work on Salem's historic homes without damaging the original masonry?",
        answer:
          "Absolutely — historic masonry is our specialty. We use period-appropriate mortar mixes, non-invasive inspection cameras, and careful hand tools to preserve original brick and stonework. We understand the requirements for work in Salem's historic districts.",
      },
      {
        question: 'How often should a historic Salem home have its chimney inspected?',
        answer:
          "For homes built before 1900, we strongly recommend annual Level 2 inspections. Very old chimneys are more susceptible to hidden liner deterioration, mortar joint erosion, and structural movement that can only be assessed with camera inspection.",
      },
      {
        question: 'Do you offer chimney service in Salem, MA (not Salem, NH)?',
        answer:
          "Yes — we serve Salem, Massachusetts specifically. We're local to the North Shore and know Salem's historic neighborhoods and building stock well. Call (781) 921-6228 to schedule.",
      },
    ],
  },
  reading: {
    city: 'Reading',
    slug: 'reading',
    state: 'MA',
    description:
      "Reading is a charming residential town with tree-lined streets and a strong mix of colonial, cape cod, and craftsman homes. Most of Reading's housing was built between the 1920s and 1960s, and many of these properties have original masonry fireplaces and chimneys that are well past their maintenance schedule. We serve all of Reading with fast, professional chimney care.",
    neighborhoods: ['Reading Center', 'South Reading', 'West Reading', 'Birch Meadow', 'Haven Street'],
    responseTime: '1–2 hours',
    homeType: 'colonials, cape cods, and craftsman homes from the 1920s–1960s',
    metaDescription:
      'Chimney cleaning, inspection & repair in Reading, MA. CSIA-certified. Serving Reading Center, South Reading & all Reading neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'How often should Reading homeowners service their chimneys?',
        answer:
          "Annual chimney cleaning and inspection is recommended for any fireplace in active use. For Reading's older homes with original masonry systems, a Level 2 inspection every 3–5 years is also advisable to catch liner deterioration early.",
      },
      {
        question: 'Do you handle chimney cap installation in Reading?',
        answer:
          "Yes — chimney cap installation is one of our most common jobs. A properly fitted stainless steel cap keeps water, animals, and debris out of the flue. We install caps same-day in most cases.",
      },
      {
        question: 'Do you serve Reading and nearby towns together?',
        answer:
          "Yes — we serve Reading along with Wilmington, Woburn, Wakefield, Stoneham, and North Reading. If you have neighbors who also need service, let us know and we can often combine trips.",
      },
    ],
  },
  woburn: {
    city: 'Woburn',
    slug: 'woburn',
    state: 'MA',
    description:
      "Woburn's residential neighborhoods include a mix of older multi-family homes near the city center and larger single-family properties in its quieter north and west sections. The city's varied housing stock — from early 1900s two-families to 1970s colonials — means a wide range of chimney conditions. Many Woburn chimneys are overdue for cleaning and have never had a camera inspection.",
    neighborhoods: ['Woburn Center', 'North Woburn', 'West Woburn', 'Cummings Park', 'Horn Pond', 'Rag Rock'],
    responseTime: '1–2 hours',
    homeType: 'two-family homes, older colonials, and mid-century single-family properties',
    metaDescription:
      'Chimney cleaning, inspection & repair in Woburn, MA. CSIA-certified. Serving Woburn Center, North Woburn, West Woburn & all Woburn neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'Do you service multi-family homes in Woburn?',
        answer:
          "Yes — we serve two-families, three-deckers, and larger multi-unit buildings throughout Woburn. We coordinate access between units and can provide per-unit documentation for landlords.",
      },
      {
        question: 'What is the most common chimney problem in Woburn homes?',
        answer:
          "In Woburn's older housing stock, we most often find deteriorated clay tile liners, failed chimney crowns, and heavy creosote buildup from fireplaces that see heavy winter use. Many Woburn homes also have furnace flues that need annual inspection.",
      },
      {
        question: 'How quickly can you come to Woburn?',
        answer:
          "Woburn is a core service area for us — typically same-day or next-day availability. Call (781) 921-6228 and we'll book you in.",
      },
    ],
  },
  burlington: {
    city: 'Burlington',
    slug: 'burlington',
    state: 'MA',
    description:
      "Burlington is a growing suburban community with a mix of ranch homes, split-levels, and newer construction. Many of Burlington's homes were built in the 1960s and 70s, when wood-burning fireplaces were common in new construction. These systems now need liner inspection, cap upgrades, and periodic cleaning. We serve all of Burlington with the same professional standards as our Greater Boston service areas.",
    neighborhoods: ['Burlington Center', 'South Burlington', 'Mill Pond', 'Winn Street', 'Northwest Burlington'],
    responseTime: '1–2 hours',
    homeType: 'ranch homes, split-levels, and colonials from the 1960s–1980s',
    metaDescription:
      'Chimney cleaning, inspection & repair in Burlington, MA. CSIA-certified. Serving Burlington Center, South Burlington & all Burlington neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'Are ranch home fireplaces in Burlington different to service?',
        answer:
          "Ranch homes typically have shorter chimneys with less complex flue runs, which can actually make access easier. However, shorter chimneys are more susceptible to downdraft issues. We assess and correct draft problems as part of every service.",
      },
      {
        question: 'Do you handle prefab fireplace service in Burlington?',
        answer:
          "Yes — many Burlington homes from the 1970s–1990s have factory-built fireplaces rather than traditional masonry. We service both types: cleaning, inspection, component replacement, and liner assessment.",
      },
      {
        question: 'Do you offer same-day chimney service in Burlington?',
        answer:
          "Yes — Burlington is well within our same-day service zone. Call (781) 921-6228 and we'll do our best to schedule you same-day.",
      },
    ],
  },
  stoneham: {
    city: 'Stoneham',
    slug: 'stoneham',
    state: 'MA',
    description:
      "Stoneham is a compact suburban town between Medford and Wakefield, with a predominantly residential character and a solid mix of colonial, cape cod, and craftsman homes. Many of Stoneham's homes were built between 1900 and 1960 and have traditional masonry chimneys with clay tile liners. We serve all of Stoneham with the same CSIA-certified crew that services neighboring Medford and Malden.",
    neighborhoods: ['Stoneham Center', 'South Stoneham', 'North Stoneham', 'Bear Hill', 'Spot Pond'],
    responseTime: '1–2 hours',
    homeType: 'colonial, cape cod, and craftsman homes built 1900–1960',
    metaDescription:
      'Chimney cleaning, inspection & repair in Stoneham, MA. CSIA-certified. Serving Stoneham Center, Bear Hill, Spot Pond & all Stoneham neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'Do you serve Stoneham along with surrounding towns?',
        answer:
          "Yes — we serve Stoneham together with Medford, Malden, Melrose, and Wakefield. If you have neighbors in any of these towns who need chimney service, we can often combine trips to offer scheduling flexibility.",
      },
      {
        question: 'What is the typical cost of chimney cleaning in Stoneham?',
        answer:
          "We quote flat-rate prices over the phone before booking. Call (781) 921-6228 and we'll give you a complete price with no surprises. First-time customers save 10%.",
      },
      {
        question: 'Do you service oil furnace flues in Stoneham?',
        answer:
          "Yes — oil furnace flues are common in Stoneham's older homes and require annual inspection to ensure safe venting. A blocked or deteriorated oil flue is a serious carbon monoxide hazard.",
      },
    ],
  },
  melrose: {
    city: 'Melrose',
    slug: 'melrose',
    state: 'MA',
    description:
      "Melrose is a dense suburban city with a beautiful stock of Victorian and late-colonial homes, many with original fireplaces and masonry chimneys that are a century or more old. The city's hilly terrain and classic neighborhoods — from the downtown area to the highlands — feature homes that see heavy fireplace use through New England winters. We serve all of Melrose with CSIA-certified chimney care.",
    neighborhoods: ['Melrose Center', 'Wyoming', 'Cedar Park', 'Fells', 'Highlands', 'East Side'],
    responseTime: '1–2 hours',
    homeType: 'Victorian-era and colonial homes, many with original fireplaces',
    metaDescription:
      'Chimney cleaning, inspection & repair in Melrose, MA. CSIA-certified. Serving Melrose Center, Wyoming, Highlands & all Melrose neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'What chimney issues are most common in Melrose homes?',
        answer:
          "Melrose's Victorian and colonial homes frequently have original clay tile liners showing age-related deterioration, eroded mortar joints, and crowns cracked by decades of freeze-thaw cycles. Heavy creosote buildup is also common in homes that have relied on wood fires through cold New England winters.",
      },
      {
        question: 'Do you restore original Victorian fireplaces in Melrose?',
        answer:
          "Yes — fireplace restoration is one of our core services. We repair original dampers, rebuild deteriorated fireboxes, restore smoke chambers, and clean decades of buildup while preserving the original decorative elements of Victorian-era fireplaces.",
      },
      {
        question: 'How soon can you come to Melrose?',
        answer:
          "Melrose is a core service area — same-day availability most weekdays. Call (781) 921-6228 and we'll schedule you in.",
      },
    ],
  },
  lexington: {
    city: 'Lexington',
    slug: 'lexington',
    state: 'MA',
    description:
      "Lexington is one of Greater Boston's most historic and affluent towns, home to large colonial, Tudor, and craftsman homes — many with substantial wood-burning fireplaces and complex multi-flue chimney systems. As the site of the first battle of the American Revolution, Lexington's oldest homes predate the country itself. We serve all of Lexington with CSIA-certified chimney care tailored to the town's mix of historic and upscale modern homes.",
    neighborhoods: ['Lexington Center', 'East Lexington', 'North Lexington', 'Hastings', 'Fiske', 'Munroe'],
    responseTime: '1–2 hours',
    homeType: 'large colonials, Tudors, and craftsman homes — many historic',
    metaDescription:
      'Chimney cleaning, inspection & repair in Lexington, MA. CSIA-certified. Serving Lexington Center, East Lexington & all Lexington neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'Do you service large multi-fireplace homes in Lexington?',
        answer:
          "Yes — multi-fireplace properties are common in Lexington's larger homes and we handle them regularly. We service all flues in a single visit and provide full written documentation for each.",
      },
      {
        question: 'What is a Level 2 chimney inspection and does my Lexington home need one?',
        answer:
          "A Level 2 inspection includes a video camera scan of the entire flue interior and a written report. It's required for real estate transactions and strongly recommended for any home where the chimney history is unknown. Given the age of many Lexington homes, Level 2 is our standard recommendation.",
      },
      {
        question: 'Do you service Lexington and neighboring Arlington?',
        answer:
          "Yes — we serve both Lexington and Arlington (and Winchester, Burlington, and Woburn) with the same crew. Scheduling is flexible for customers in adjacent towns.",
      },
    ],
  },
  winchester: {
    city: 'Winchester',
    slug: 'winchester',
    state: 'MA',
    description:
      "Winchester is an upscale residential town known for its beautiful large homes — Tudors, colonials, and craftsman-style houses set on tree-lined streets around Horn Pond and the Aberjona River valley. Many Winchester homes are large, multi-story properties with sizeable fireplaces and oversized chimneys. We provide comprehensive chimney service to all of Winchester's homeowners.",
    neighborhoods: ['Winchester Center', 'East Winchester', 'Symmes Corner', 'Wedgemere', 'Rangeley', 'Muraco'],
    responseTime: '1–2 hours',
    homeType: 'large Tudors, colonials, and craftsman-style homes',
    metaDescription:
      'Chimney cleaning, inspection & repair in Winchester, MA. CSIA-certified. Serving Winchester Center, Wedgemere & all Winchester neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'What chimney services are most common in Winchester homes?',
        answer:
          "Winchester's larger older homes frequently need Level 2 camera inspections, stainless steel liner installation (replacing original clay tiles), crown repair, and tuckpointing. Annual cleaning is the most common recurring service. We also service gas fireplaces and inserts.",
      },
      {
        question: 'My Winchester Tudor has a very large, old chimney. Can you handle that?',
        answer:
          "Absolutely — large, complex chimney systems are our specialty. We're experienced with oversized masonry chimneys in Winchester's historic homes and have the equipment to inspect and service any configuration.",
      },
      {
        question: 'Do you serve Winchester and nearby Woburn and Arlington?',
        answer:
          "Yes — we cover all three towns and frequently schedule multi-town service days. Call (781) 921-6228 to book your Winchester appointment.",
      },
    ],
  },
  saugus: {
    city: 'Saugus',
    slug: 'saugus',
    state: 'MA',
    description:
      "Saugus is a residential town north of Lynn with a mix of ranch homes, colonials, and older cape cods spread across its neighborhoods. Many Saugus homes were built in the 1950s and 60s during the post-war suburban expansion and have original masonry chimneys that are now several decades old. We serve all of Saugus with the same fast, professional chimney service.",
    neighborhoods: ['Saugus Center', 'East Saugus', 'Cliftondale', 'Lynnhurst', 'North Saugus', 'Oaklandvale'],
    responseTime: '1–2 hours',
    homeType: 'ranch homes, cape cods, and post-war colonials from the 1950s–1970s',
    metaDescription:
      'Chimney cleaning, inspection & repair in Saugus, MA. CSIA-certified. Serving Saugus Center, Cliftondale, East Saugus & all Saugus neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'Do you service post-war ranch homes in Saugus?',
        answer:
          "Yes — ranch homes from the 1950s–1970s are very common in Saugus. These homes typically have short masonry chimneys and single-flue fireplace systems. We clean, inspect, and repair them regularly.",
      },
      {
        question: 'What are the signs I need chimney service in Saugus?',
        answer:
          "Warning signs include visible mortar or brick damage, white staining (efflorescence) on the exterior, smoke entering the room when using the fireplace, water stains inside near the fireplace, and unusual odors. If you notice any of these, call us for an inspection.",
      },
      {
        question: 'Can you come to Saugus same-day?',
        answer:
          "Yes — same-day availability most days. Call (781) 921-6228 and we'll get you scheduled.",
      },
    ],
  },
  beverly: {
    city: 'Beverly',
    slug: 'beverly',
    state: 'MA',
    description:
      "Beverly is a coastal city on the North Shore with a rich mix of housing — from historic downtown properties and Victorian homes in established neighborhoods to mid-century colonials in its suburban sections. Beverly's coastal location means chimneys face salt air exposure in addition to the usual freeze-thaw stress. We serve all of Beverly with CSIA-certified chimney cleaning, inspection, and repair.",
    neighborhoods: ['Beverly Center', 'Beverly Farms', 'Prides Crossing', 'Ryal Side', 'Montserrat', 'North Beverly'],
    responseTime: '1–2 hours',
    homeType: 'Victorian homes, colonials, and coastal properties',
    metaDescription:
      'Chimney cleaning, inspection & repair in Beverly, MA. CSIA-certified. Serving Beverly Center, Beverly Farms, Prides Crossing & all Beverly neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'Does salt air from the coast affect Beverly chimneys?',
        answer:
          "Yes — coastal salt air accelerates mortar joint erosion and brick spalling, particularly on chimneys directly exposed to ocean-facing winds. Beverly Farms and Prides Crossing properties especially benefit from regular inspection and waterproofing to counteract salt air effects.",
      },
      {
        question: 'Do you service Beverly Farms and Prides Crossing?',
        answer:
          "Yes — we cover all of Beverly including Beverly Farms, Prides Crossing, and Ryal Side. Same crew, same pricing throughout.",
      },
      {
        question: 'How do I book a chimney inspection in Beverly?',
        answer:
          "Call (781) 921-6228 for a flat-rate quote and to book your appointment. Same-day availability most days throughout Beverly.",
      },
    ],
  },
  andover: {
    city: 'Andover',
    slug: 'andover',
    state: 'MA',
    description:
      "Andover is a historic and affluent Massachusetts town known for its prestigious Phillips Academy and its beautiful collection of colonial, Federal, and Victorian homes. The town's housing stock ranges from genuinely antique properties near the town center to large newer homes in its residential neighborhoods. Many Andover homes have substantial wood-burning fireplaces that require expert annual maintenance.",
    neighborhoods: ['Andover Center', 'Shawsheen Village', 'West Andover', 'South Andover', 'Ballardvale'],
    responseTime: '1–2 hours',
    homeType: 'historic colonial, Federal, and Victorian homes alongside larger newer properties',
    metaDescription:
      'Chimney cleaning, inspection & repair in Andover, MA. CSIA-certified. Serving Andover Center, Shawsheen Village & all Andover neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'Do you handle older historic chimneys in Andover?',
        answer:
          "Yes — historic masonry is one of our specialties. Andover has some of the oldest homes in the region and we have extensive experience working with period-appropriate materials and techniques that preserve original craftsmanship.",
      },
      {
        question: 'What is chimney tuckpointing and does my Andover home need it?',
        answer:
          "Tuckpointing is the process of removing deteriorated mortar from chimney joints and replacing it with fresh mortar. It's needed when you can see gaps, crumbling, or missing mortar between bricks. Untreated mortar failure allows water infiltration that rapidly accelerates chimney damage, especially through New England winters.",
      },
      {
        question: 'How quickly can you come to Andover?',
        answer:
          "Andover is well within our service zone — same-day or next-day in most cases. Call (781) 921-6228 to schedule.",
      },
    ],
  },
  billerica: {
    city: 'Billerica',
    slug: 'billerica',
    state: 'MA',
    description:
      "Billerica is a growing suburban community with a mix of older homes in its historic core and newer construction in its outlying neighborhoods. The town's housing spans from early 20th-century properties near Billerica Center to 1980s and 1990s colonials in newer subdivisions. We serve all of Billerica with expert chimney cleaning, inspection, and repair.",
    neighborhoods: ['Billerica Center', 'South Billerica', 'North Billerica', 'Pinehurst', 'Talbot Mills'],
    responseTime: '1–2 hours',
    homeType: 'older colonials near the center and newer 1980s–1990s suburban homes',
    metaDescription:
      'Chimney cleaning, inspection & repair in Billerica, MA. CSIA-certified. Serving Billerica Center, South Billerica & all Billerica neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'What types of chimney issues are common in Billerica?',
        answer:
          "In Billerica's older homes, deteriorated clay tile liners and eroded mortar joints are the most common issues. In newer construction from the 80s and 90s, prefab fireplaces and metal chimneys are common — these still need annual inspection and cleaning.",
      },
      {
        question: 'Do you offer same-day chimney service in Billerica?',
        answer:
          "Yes — same-day availability most days. Call (781) 921-6228 for flat-rate pricing and to schedule.",
      },
      {
        question: 'Do you cover Billerica and nearby Wilmington and Burlington?',
        answer:
          "Yes — we serve all three towns and neighboring Woburn and Chelmsford. Flexible scheduling for customers in adjacent communities.",
      },
    ],
  },
  wilmington: {
    city: 'Wilmington',
    slug: 'wilmington',
    state: 'MA',
    description:
      "Wilmington is a growing suburban town at the intersection of several major routes, with a housing mix ranging from mid-century ranches and split-levels to newer colonials in more recent subdivisions. The town's growth has brought many new residents to older homes with chimneys and fireplaces that haven't been serviced in years. We serve all of Wilmington with professional chimney care.",
    neighborhoods: ['Wilmington Center', 'Silver Lake', 'North Wilmington', 'Glen Road', 'Shawsheen Heights'],
    responseTime: '1–2 hours',
    homeType: 'mid-century ranches, split-levels, and newer colonial subdivisions',
    metaDescription:
      'Chimney cleaning, inspection & repair in Wilmington, MA. CSIA-certified. Serving Wilmington Center, Silver Lake & all Wilmington neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'Should I have my Wilmington chimney inspected before using it this season?',
        answer:
          "Yes — especially if you've moved into a home where the chimney history is unknown, or if it hasn't been cleaned in the past year. An inspection before the first fire of the season is the safest approach. Call (781) 921-6228 to schedule.",
      },
      {
        question: 'What does a chimney cleaning include in Wilmington?',
        answer:
          "Our chimney cleaning includes removal of creosote and soot buildup from the firebox and entire flue, a visual inspection of accessible components, and a report on any issues found. We use professional HEPA-filtered vacuums to keep your home clean.",
      },
      {
        question: 'Do you serve Wilmington along with Reading and Woburn?',
        answer:
          "Yes — we cover Wilmington, Reading, Woburn, Burlington, and Billerica with the same crew. Call (781) 921-6228 to book your Wilmington appointment.",
      },
    ],
  },
  needham: {
    city: 'Needham',
    slug: 'needham',
    state: 'MA',
    metaTitle: 'Chimney Service in Needham, MA | Above Services | (781) 921-6228',
    h1: 'Chimney Care Built for <span class="text-amber-500">Needham\'s</span> Grand Colonials and Tudors',
    description:
      "Needham's housing stock is dominated by substantial Colonials, Tudors, and center-entrance antiques — many with multi-flue chimneys that serve both a fireplace and an oil or gas furnace. Sitting within the Charles River watershed, Needham homes face consistent moisture exposure that accelerates mortar erosion and crown cracking. We've serviced hundreds of Needham chimneys and understand the specific demands these homes place on their flues.",
    neighborhoods: ['Needham Center', 'Needham Heights', 'South Needham', 'Chestnut Street', 'Bird Hill', 'Four Corners'],
    responseTime: '1–2 hours',
    homeType: 'large Colonials, Tudors, and antique center-entrance homes with multi-flue chimneys',
    chimneyProblems:
      "Multi-flue chimneys in Needham's older Colonials are especially vulnerable to crown cracking and spalling brick caused by moisture cycling through the Charles River watershed's humid winters. We routinely find deteriorated mortar joints, failed chimney crowns, and missing or undersized caps on these homes. Waterproofing and crown repair are two of our most requested services in this area.",
    nearbyLinks: [
      { city: 'Newton', slug: 'newton' },
      { city: 'Dedham', slug: 'dedham' },
      { city: 'Norwood', slug: 'norwood' },
      { city: 'Waltham', slug: 'waltham' },
      { city: 'Wellesley', slug: 'wellesley' },
    ],
    metaDescription:
      'Chimney cleaning, inspection & repair in Needham, MA. CSIA-certified. Specializing in multi-flue Colonials and Tudors. Serving all Needham neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'Do you service multi-flue chimneys in Needham?',
        answer:
          "Yes — multi-flue chimneys are very common in Needham's larger Colonials and Tudors. We inspect and clean each flue separately, check the dividing walls between flues, and ensure each liner is intact. Many of these homes also have a furnace flue that requires its own liner assessment.",
      },
      {
        question: 'What chimney problems are most common in Needham, MA?',
        answer:
          "Crown cracking and spalling brick are the most frequent issues we see in Needham, largely due to the area's moisture exposure and freeze-thaw cycles. Failed flashing and mortar joint erosion are also very common in the older home stock. A full inspection before each heating season catches these issues early.",
      },
      {
        question: 'Do you offer chimney waterproofing in Needham?',
        answer:
          "Yes — chimney waterproofing is one of our most-requested services in Needham. After repointing and crown repair, we apply a vapor-permeable masonry sealant that keeps water out while allowing the chimney to breathe. Call (781) 921-6228 to schedule.",
      },
    ],
  },
  milton: {
    city: 'Milton',
    slug: 'milton',
    state: 'MA',
    metaTitle: 'Chimney Service in Milton, MA | Above Services | (781) 921-6228',
    h1: '<span class="text-amber-500">Milton\'s</span> Historic Chimneys Deserve More Than a Quick Sweep',
    description:
      "Milton's historic neighborhoods are filled with Georgian colonials, Federal-style brick homes, and pre-war Capes — many of them sitting at elevation where the Blue Hills funnel wind and weather directly into exposed chimney crowns and flashings. We've worked throughout Milton from Brush Hill Road to East Milton Square, and we know these chimneys require careful attention, not a rushed sweep-and-go service.",
    neighborhoods: ['East Milton', 'Milton Village', 'Brush Hill', 'Blue Hills', 'Cunningham Park', 'Central Avenue'],
    responseTime: '1–2 hours',
    homeType: 'Georgian colonials, Federal brick homes, and pre-war Cape Cods at elevation',
    chimneyProblems:
      "Milton's elevated position near the Blue Hills means chimneys here are exposed to more wind-driven rain and freeze-thaw cycles than most of eastern Massachusetts. We regularly find failed flashing, spalled brick faces, and cracked crowns on homes near Brush Hill and Canton Avenue. Georgian and Federal-era chimneys often have original clay tile liners that are 80+ years old and well past their service life.",
    nearbyLinks: [
      { city: 'Quincy', slug: 'quincy' },
      { city: 'Canton', slug: 'canton' },
      { city: 'Norwood', slug: 'norwood' },
      { city: 'Braintree', slug: 'braintree' },
      { city: 'Boston', slug: 'boston' },
    ],
    metaDescription:
      'Chimney cleaning, inspection & repair in Milton, MA. CSIA-certified. Serving Georgian colonials and historic homes throughout Milton. Call (781) 921-6228.',
    faqs: [
      {
        question: 'Why do chimneys in Milton need more than a basic cleaning?',
        answer:
          "Milton's elevation and proximity to the Blue Hills create more aggressive weather exposure than lower-elevation towns. Wind-driven rain, heavy frost, and icing can accelerate flashing failures and mortar erosion significantly. A cleaning without a full inspection misses the issues that actually put your home at risk.",
      },
      {
        question: 'Do you work on older brick chimneys in Milton?',
        answer:
          "Yes — older brick and Federal-era chimneys are our specialty. We assess original lime mortar, evaluate aged clay tile liners, and recommend the right repair approach without over-selling unnecessary rebuilds. Call (781) 921-6228 to book.",
      },
      {
        question: 'Can you repair chimney flashing in Milton?',
        answer:
          "Yes — flashing repair is one of our most common services in Milton. We repoint step flashing at the roofline, replace or reseal counter flashing, and apply flexible sealant to stop water infiltration. Properly sealed flashing prevents most chimney-related water damage.",
      },
    ],
  },
  norwood: {
    city: 'Norwood',
    slug: 'norwood',
    state: 'MA',
    metaTitle: 'Chimney Service in Norwood, MA | Above Services | (781) 921-6228',
    h1: 'Straight-Talking Chimney Service for <span class="text-amber-500">Norwood</span> Homeowners',
    description:
      "Norwood is a working-class suburb built around post-WWII ranches, cape cods, and small colonials — practical homes that have been heating with fireplaces and oil-to-gas conversions for decades. We give Norwood homeowners straight answers and flat-rate pricing. No upsells, no scare tactics — just honest inspections, clean sweeps, and repairs done right the first time.",
    neighborhoods: ['Norwood Center', 'South Norwood', 'East Norwood', 'Norwood Highlands', 'Guild Street', 'Washington Street'],
    responseTime: '1–2 hours',
    homeType: 'post-WWII ranches, cape cods, and small colonials with older fireplace systems',
    chimneyProblems:
      "Post-war ranches and capes in Norwood commonly have low-profile chimneys that are prone to water entry and downdraft issues. Many have gone years without cleaning, resulting in moderate to heavy creosote buildup. Converted oil-to-gas systems often leave abandoned flue liners that need proper assessment or capping.",
    nearbyLinks: [
      { city: 'Dedham', slug: 'dedham' },
      { city: 'Canton', slug: 'canton' },
      { city: 'Milton', slug: 'milton' },
      { city: 'Needham', slug: 'needham' },
      { city: 'Walpole', slug: 'walpole' },
    ],
    metaDescription:
      'Chimney cleaning, inspection & repair in Norwood, MA. CSIA-certified. Flat-rate pricing. Serving all Norwood neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'How much does a chimney cleaning cost in Norwood?',
        answer:
          "We charge flat rates — no hidden fees or surprise upsells after we arrive. Call (781) 921-6228 for a quote over the phone based on your fireplace type. Most standard cleaning and inspection appointments are completed in under 90 minutes.",
      },
      {
        question: 'My Norwood home has an old oil furnace flue — do I need it inspected?',
        answer:
          "Yes — especially if the furnace was converted to gas. Abandoned oil flues should be capped or relined depending on whether they're still venting. An open or deteriorated flue can allow moisture, pests, and carbon monoxide pathways into your home.",
      },
      {
        question: 'Do you service ranch-style homes with short chimneys in Norwood?',
        answer:
          "Yes — low-profile ranch chimneys are common in Norwood and come with their own set of issues including downdraft, water entry, and cap sizing problems. We handle these regularly and know what to look for. Call (781) 921-6228 to schedule.",
      },
    ],
  },
  framingham: {
    city: 'Framingham',
    slug: 'framingham',
    state: 'MA',
    metaTitle: 'Chimney Service in Framingham, MA | Above Services | (781) 921-6228',
    h1: '<span class="text-amber-500">Framingham\'s</span> Diverse Homes, One Expert Chimney Crew',
    description:
      "Framingham is one of MetroWest's largest and most diverse communities — home to everything from mid-century colonials near the commuter rail to prefab fireplaces in 1990s subdivisions to true masonry chimneys on older properties near Downtown. Sitting adjacent to Lake Cochituate, many Framingham homes experience elevated moisture exposure that accelerates chimney deterioration. We service the full range of Framingham housing with CSIA-certified technicians.",
    neighborhoods: ['Downtown Framingham', 'Saxonville', 'Nobscot', 'South Framingham', 'Framingham Centre', 'Edgell Grove'],
    responseTime: '1–2 hours',
    homeType: 'mid-century colonials, 1990s prefab fireplaces, and masonry chimneys on older downtown properties',
    chimneyProblems:
      "Framingham's housing diversity means we encounter nearly every type of chimney issue in a single day. Homes near Lake Cochituate often have elevated moisture damage including efflorescence, spalling, and failed crown sealant. Prefab metal fireplaces from the 1980s–1990s subdivisions frequently have cracked refractory panels and deteriorated gaskets that are invisible until you look inside. We assess both masonry and prefab systems accurately.",
    nearbyLinks: [
      { city: 'Natick', slug: 'natick' },
      { city: 'Marlborough', slug: 'marlborough' },
      { city: 'Ashland', slug: 'ashland' },
      { city: 'Maynard', slug: 'maynard' },
      { city: 'Acton', slug: 'acton' },
    ],
    metaDescription:
      'Chimney cleaning, inspection & repair in Framingham, MA. CSIA-certified. Serving masonry and prefab chimneys across all Framingham neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'Do you service prefab fireplaces in Framingham?',
        answer:
          "Yes — prefab or factory-built fireplaces are very common in Framingham's 1980s–1990s subdivisions. We inspect refractory panels, check the firebox liner for cracks, assess the damper and gasket, and clean the metal flue pipe. Many of these systems need panel replacement by the time we see them.",
      },
      {
        question: 'Is moisture damage a big issue for Framingham chimneys?',
        answer:
          "Yes — homes near Lake Cochituate and the Sudbury River basin experience higher ambient moisture than inland towns. This accelerates mortar joint erosion, crown cracking, and efflorescence (white salt staining on brick). Early waterproofing and crown repair prevent much more expensive damage.",
      },
      {
        question: 'Do you cover both masonry and gas fireplace service in Framingham?',
        answer:
          "Yes — we clean and inspect wood-burning masonry fireplaces, prefab wood-burning systems, and gas fireplace inserts. For gas systems, we inspect the burner, pilot, thermocouple, and venting. Call (781) 921-6228 for flat-rate pricing.",
      },
    ],
  },
  maynard: {
    city: 'Maynard',
    slug: 'maynard',
    state: 'MA',
    metaTitle: 'Chimney Service in Maynard, MA | Above Services | (781) 921-6228',
    h1: 'Old Mill Town Homes Need a Chimney Company That Knows <span class="text-amber-500">Old Chimneys</span>',
    description:
      "Maynard is a compact mill town built along the Assabet River, full of 19th and early 20th-century worker cottages, triple-deckers, and Victorian-era homes. Many of these properties have original masonry chimneys that have never been fully relined — and in a town where wood stoves are common heat supplements, creosote buildup is a real concern. We know how to work on old chimneys and give you honest assessments, not a push toward an unnecessary rebuild.",
    neighborhoods: ['Maynard Center', 'Clock Tower Place', 'Mill Pond', 'Summer Hill', 'Assabet Village', 'Ben Smith Dam'],
    responseTime: '1–2 hours',
    homeType: 'Victorian-era homes, worker cottages, and triple-deckers with original masonry chimneys',
    chimneyProblems:
      "Maynard's aging housing stock means we frequently encounter original clay tile liners that are cracked, offset, or missing sections entirely. Wood stove connections — common in this area — are a significant creosote risk, especially in chimneys sized for open fireplaces rather than the higher flue temperatures of a stove. We see second- and third-degree creosote buildup regularly in Maynard and the surrounding mill towns.",
    nearbyLinks: [
      { city: 'Acton', slug: 'acton' },
      { city: 'Stow', slug: 'stow' },
      { city: 'Framingham', slug: 'framingham' },
      { city: 'Marlborough', slug: 'marlborough' },
      { city: 'Concord', slug: 'concord' },
    ],
    metaDescription:
      'Chimney cleaning, inspection & repair in Maynard, MA. CSIA-certified. Specializing in original masonry chimneys and wood stove systems. Call (781) 921-6228.',
    faqs: [
      {
        question: 'My Maynard home has a wood stove connected to an old chimney — is that safe?',
        answer:
          "It may not be. Wood stoves burn hotter than open fireplaces and produce different creosote at different chimney temperatures. If the flue is oversized or the liner is cracked, you have real fire risk. A Level 2 inspection with camera shows exactly what's inside. Call (781) 921-6228 — this is worth doing before the next burn season.",
      },
      {
        question: 'Do you handle third-degree creosote removal in Maynard?',
        answer:
          "Yes — we use rotary cleaning systems and chemical treatments to break down and remove glazed or hardened third-degree creosote deposits. This is a more involved process than standard cleaning, priced accordingly. We'll assess the degree of buildup before quoting.",
      },
      {
        question: 'What happens if my Maynard chimney liner is cracked?',
        answer:
          "A cracked liner can allow combustion gases including carbon monoxide to migrate into your living space. Depending on the severity and location of the crack, options include a stainless steel liner insert, HeatShield resurfacing, or in some cases, tuckpointing around the affected section. We show you with photos before recommending any repair.",
      },
    ],
  },
  acton: {
    city: 'Acton',
    slug: 'acton',
    state: 'MA',
    metaTitle: 'Chimney Service in Acton, MA | Above Services | (781) 921-6228',
    h1: '<span class="text-amber-500">Acton</span> Homes Built for Comfort Deserve Chimneys Built to Last',
    description:
      "Acton is one of MetroWest's most desirable residential towns — a mix of large colonials, custom-built contemporaries, and older antiques along Great Road and Nagog Hill. Many of the larger homes in Acton were built with oversized fireplace openings that draw poorly without proper damper adjustment or smoke guard installation. We service the full range of Acton chimneys with CSIA-certified technicians who specialize in both new construction and historic homes.",
    neighborhoods: ['West Acton', 'South Acton', 'Acton Center', 'North Acton', 'Nagog Hill', 'Great Road Corridor'],
    responseTime: '1–2 hours',
    homeType: 'large colonials, custom contemporaries, and older antiques with varying fireplace systems',
    chimneyProblems:
      "Oversized fireplace openings are the most common problem we find in Acton's larger custom homes — they allow cold air to pour down the chimney and cause smoking issues. Many were built without smoke guards and have marginal draft performance. On the opposite end, older antique homes in Acton often have undersized clay tile liners that don't meet current safety standards for wood-burning use.",
    nearbyLinks: [
      { city: 'Maynard', slug: 'maynard' },
      { city: 'Concord', slug: 'concord' },
      { city: 'Chelmsford', slug: 'chelmsford' },
      { city: 'Littleton', slug: 'littleton' },
      { city: 'Framingham', slug: 'framingham' },
    ],
    metaDescription:
      'Chimney cleaning, inspection & repair in Acton, MA. CSIA-certified. Serving large colonials and antique homes throughout Acton. Call (781) 921-6228.',
    faqs: [
      {
        question: 'Why does my Acton fireplace smoke into the room?',
        answer:
          "Smoking fireplaces in Acton are usually caused by an oversized firebox opening relative to the flue diameter, negative house pressure in tightly insulated homes, or a cold flue that hasn't warmed up. We diagnose the exact cause before recommending any fix — smoke guards, top-sealing dampers, or draft repair — so you're not spending money on the wrong solution.",
      },
      {
        question: 'Do you install smoke guards for Acton fireplaces?',
        answer:
          "Yes — smoke guard installation is one of our most common solutions for oversized fireplace openings in Acton. A properly sized smoke guard reduces the opening height, increases draft velocity, and eliminates the majority of smoke spillage without changing the fireplace's appearance significantly.",
      },
      {
        question: 'Do you service both new and historic chimneys in Acton?',
        answer:
          "Yes — we work on everything from contemporary gas inserts in new construction to 18th-century field stone chimneys on Acton's historic properties. Each gets an honest assessment from our CSIA-certified technicians. Call (781) 921-6228 for flat-rate pricing.",
      },
    ],
  },
  chelmsford: {
    city: 'Chelmsford',
    slug: 'chelmsford',
    state: 'MA',
    metaTitle: 'Chimney Service in Chelmsford, MA | Above Services | (781) 921-6228',
    h1: 'Growing Fast, But Your <span class="text-amber-500">Chelmsford</span> Chimney Still Needs Annual Attention',
    description:
      "Chelmsford has grown rapidly over the past two decades, adding newer subdivisions alongside its older colonial and cape cod neighborhoods. That mix means our Chelmsford calls range from refractory panel cracks in 2000s-era prefab fireplaces to original masonry chimneys on homes dating to the 1950s and earlier. We cover all of Chelmsford with the same CSIA-certified crew that handles our Greater Boston territory.",
    neighborhoods: ['Chelmsford Center', 'North Chelmsford', 'South Chelmsford', 'West Chelmsford', 'Westlands', 'Vinal Square'],
    responseTime: '1–2 hours',
    homeType: 'newer prefab fireplaces in subdivision homes and older masonry on mid-century colonials and capes',
    chimneyProblems:
      "Chelmsford's newer subdivision homes frequently have prefab fireplace systems with cracked refractory panels — the ceramic fiber or cast refractory sides and backs that protect the metal firebox. These cracks are invisible to homeowners but allow dangerously high temperatures to contact the metal shell. We inspect every panel during our cleaning visits and document what we find with photos.",
    nearbyLinks: [
      { city: 'Lowell', slug: 'lowell' },
      { city: 'Billerica', slug: 'billerica' },
      { city: 'Acton', slug: 'acton' },
      { city: 'Tewksbury', slug: 'tewksbury' },
      { city: 'Dracut', slug: 'dracut' },
    ],
    metaDescription:
      'Chimney cleaning, inspection & repair in Chelmsford, MA. CSIA-certified. Serving prefab and masonry chimneys across all Chelmsford neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'How do I know if my Chelmsford prefab fireplace needs panel replacement?',
        answer:
          "Refractory panels often crack along the back wall or sides of the firebox. You can sometimes see hairline cracks visually, but deeper damage requires a flashlight inspection. Any crack wider than 1/8 inch or panels that are shifting out of position should be replaced before the next fire. We document everything with photos.",
      },
      {
        question: 'Do you serve Chelmsford and nearby Lowell and Billerica?',
        answer:
          "Yes — Chelmsford, Lowell, Billerica, and Tewksbury are all part of our regular northern MA route. We schedule multiple stops in the area on the same day, so availability is good. Call (781) 921-6228 to book.",
      },
      {
        question: 'Do you offer Level 2 chimney inspections in Chelmsford?',
        answer:
          "Yes — Level 2 inspections include a camera scan of the full flue interior. This is required for home sales and recommended any time you've had a chimney fire or are adding a new insert. We provide a written report you can share with a real estate agent or buyer.",
      },
    ],
  },
  pepperell: {
    city: 'Pepperell',
    slug: 'pepperell',
    state: 'MA',
    metaTitle: 'Chimney Service in Pepperell, MA | Above Services | (781) 921-6228',
    h1: '<span class="text-amber-500">Pepperell</span> Homeowners Burn More Wood — Their Chimneys Need More Care',
    description:
      "Pepperell sits at the northern edge of Massachusetts near the New Hampshire border — a rural mill town where wood stoves and fireplace inserts do real work all winter long. Homes here burn significantly more wood than suburban towns, and that means faster creosote accumulation, more frequent cleaning needs, and greater risk from glazed or third-degree deposits. We make the drive to Pepperell and serve the surrounding area with CSIA-certified chimney care.",
    neighborhoods: ['Pepperell Center', 'West Pepperell', 'Pepperell Village', 'South Pepperell', 'Nashua Road Corridor'],
    responseTime: '2–3 hours',
    homeType: 'wood stove and insert-equipped colonials, capes, and antique farmhouses on large lots',
    chimneyProblems:
      "Heavy wood burning in Pepperell means we find second- and third-degree creosote more often here than in any suburban town we serve. Glazed creosote coats flue walls, reduces effective flue diameter, and becomes extremely flammable. We also see many Pepperell chimneys with inadequate clearances from wood stove connectors — an installation problem that creates fire risk regardless of how clean the flue is.",
    nearbyLinks: [
      { city: 'Groton', slug: 'groton' },
      { city: 'Dunstable', slug: 'dunstable' },
      { city: 'Townsend', slug: 'townsend' },
      { city: 'Nashua', slug: 'nashua' },
      { city: 'Chelmsford', slug: 'chelmsford' },
    ],
    metaDescription:
      'Chimney cleaning, inspection & repair in Pepperell, MA. CSIA-certified. Specializing in heavy-use wood stove systems and creosote removal. Call (781) 921-6228.',
    faqs: [
      {
        question: 'How often should I clean my chimney if I burn wood all winter in Pepperell?',
        answer:
          "If you're burning regularly — more than two to three cords per season — you should have your chimney inspected and cleaned at minimum twice a year. Once in fall before burning season and once in spring after. High-use wood stoves accumulate creosote rapidly and the glazed third-degree variety requires rotary cleaning tools, not a standard brush.",
      },
      {
        question: 'Do you handle dangerous creosote removal in Pepperell?',
        answer:
          "Yes — third-degree or glazed creosote removal is one of our core services for Pepperell and the surrounding rural communities. We use rotary cleaning systems and apply chemical cracking agents to break down hardened deposits. We photograph the before and after so you can see exactly what was removed.",
      },
      {
        question: 'Is it worth the drive for you to come out to Pepperell?',
        answer:
          "Absolutely. We schedule regular runs to Pepperell, Groton, Townsend, and the surrounding towns. You get the same CSIA-certified service as our Boston-area customers — flat-rate pricing, written inspection report, and same-day availability when schedule allows. Call (781) 921-6228 to book.",
      },
    ],
  },
  newburyport: {
    city: 'Newburyport',
    slug: 'newburyport',
    state: 'MA',
    metaTitle: 'Chimney Service in Newburyport, MA | Above Services | (781) 921-6228',
    h1: '<span class="text-amber-500">Newburyport\'s</span> Federal Mansions and Victorian Streets Deserve Expert Chimney Care',
    description:
      "Newburyport is one of New England's best-preserved Federal-era cities, with block after block of late 18th and early 19th-century brick mansions and merchant homes overlooking the Merrimack River. Salt air off the ocean accelerates mortar deterioration and brick face spalling in ways that landlocked towns never see. These chimneys require technicians who understand historic masonry — not just chimney cleaning basics — and that's exactly the level of care we bring to Newburyport.",
    neighborhoods: ['Downtown Newburyport', 'Joppa Flats', 'Plum Island', 'South End', 'High Street Hill', 'Market Square'],
    responseTime: '2–3 hours',
    homeType: 'Federal-era brick mansions, Greek Revival homes, and Victorian-era residential streets with tall masonry chimneys',
    chimneyProblems:
      "Salt air and coastal humidity are the primary enemies of Newburyport's historic brick chimneys. We regularly find accelerated mortar joint erosion, efflorescence (white salt crystallization on brick), spalled brick faces, and deteriorated lime-based original mortar throughout the historic district. Repointing these chimneys requires lime-based mortar matched to the original — not Portland cement, which is too rigid and causes further brick damage.",
    nearbyLinks: [
      { city: 'Gloucester', slug: 'gloucester' },
      { city: 'Amesbury', slug: 'amesbury' },
      { city: 'Haverhill', slug: 'haverhill' },
      { city: 'Salisbury', slug: 'salisbury' },
      { city: 'Rowley', slug: 'rowley' },
    ],
    metaDescription:
      'Chimney cleaning, inspection & repair in Newburyport, MA. CSIA-certified. Specializing in Federal-era masonry chimneys and salt-air damage. Call (781) 921-6228.',
    faqs: [
      {
        question: 'Does salt air really damage Newburyport chimneys faster than inland towns?',
        answer:
          "Yes — significantly. Salt crystals from sea air penetrate brick and mortar pores, then expand and contract with temperature swings. This mechanical stress accelerates spalling and joint erosion at roughly two to three times the rate of inland chimneys at similar elevations. Annual inspection is essential in Newburyport, especially for homes within a mile of the water.",
      },
      {
        question: 'Can you repoint historic lime mortar chimneys in Newburyport?',
        answer:
          "Yes — and we use the right mortar for the job. Historic Federal and Victorian chimneys were built with soft lime-based mortars. Repointing with modern Portland cement creates a joint harder than the brick itself, which forces moisture and freeze-thaw damage into the brick face. We match mortar hardness and color to the original to protect both the chimney and the historic integrity of the home.",
      },
      {
        question: 'Do you service Newburyport chimneys year-round?',
        answer:
          "Yes — we schedule Newburyport appointments through the full year, though late spring and early fall are our busiest windows in this area. Call (781) 921-6228 to get on the schedule. We provide written inspection reports for historic preservation or home sale purposes.",
      },
    ],
  },
  gloucester: {
    city: 'Gloucester',
    slug: 'gloucester',
    state: 'MA',
    metaTitle: 'Chimney Service in Gloucester, MA | Above Services | (781) 921-6228',
    h1: 'America\'s Oldest Seaport Deserves Chimney Service That Respects Its <span class="text-amber-500">History</span>',
    description:
      "Gloucester is one of the oldest continuously inhabited cities in America, with a housing stock that spans from 17th-century sea captain homes to post-war fishing community capes to modern new construction on Rocky Neck. The marine environment here is among the harshest in eastern Massachusetts — salt-laden air, extreme freeze-thaw cycles, and direct Atlantic exposure combine to accelerate chimney deterioration dramatically. We service Gloucester with CSIA-certified technicians who understand coastal masonry.",
    neighborhoods: ['Downtown Gloucester', 'Rocky Neck', 'East Gloucester', 'West Gloucester', 'Langsford Street', 'Bass Rocks', 'Annisquam'],
    responseTime: '2–3 hours',
    homeType: '17th–20th century masonry homes, fishing community capes, and sea captain houses with tall exposed chimneys',
    chimneyProblems:
      "Gloucester chimneys face the full range of coastal deterioration: accelerated mortar erosion from salt spray, brick face spalling on ocean-exposed elevations, heavily corroded metal chimney caps and dampers, and in many historic homes, original clay tile liners that have been compromised by 100+ years of service. We use marine-grade stainless steel for all liner and cap work in Gloucester to ensure longevity in the salt air environment.",
    nearbyLinks: [
      { city: 'Newburyport', slug: 'newburyport' },
      { city: 'Beverly', slug: 'beverly' },
      { city: 'Salem', slug: 'salem-ma' },
      { city: 'Rockport', slug: 'rockport' },
      { city: 'Ipswich', slug: 'ipswich' },
    ],
    metaDescription:
      'Chimney cleaning, inspection & repair in Gloucester, MA. CSIA-certified. Marine-grade stainless for coastal chimney work. Serving all Gloucester neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'Why does my Gloucester chimney deteriorate so much faster than others?',
        answer:
          "Salt-laden marine air attacks masonry continuously. Sodium chloride crystals penetrate brick and mortar pores, then expand with moisture and temperature changes — a process called subflorescence. In Gloucester's direct Atlantic exposure, this cycle repeats far more aggressively than inland towns, and the damage compounds over each winter. Annual inspection catches it early.",
      },
      {
        question: 'What materials do you use for chimney liner work in Gloucester?',
        answer:
          "We specify marine-grade stainless steel (316L alloy) for all liner and cap work in Gloucester. Standard 304-grade stainless corrodes in prolonged salt air exposure. The marine alloy resists chloride-induced oxidation and holds up through the full coastal environment without rusting through in just a few seasons.",
      },
      {
        question: 'Do you work on 200-year-old chimneys in Gloucester?',
        answer:
          "Yes — historic masonry is something we approach carefully. We assess structural integrity, evaluate original lime mortar condition, identify any previous amateur repairs that may have caused further damage, and recommend the minimum necessary intervention to make the chimney safe and functional without altering its historic character. Call (781) 921-6228 to schedule.",
      },
    ],
  },
  nashua: {
    city: 'Nashua',
    slug: 'nashua',
    state: 'NH',
    description:
      "Nashua is New Hampshire's second-largest city and one of our busiest service areas. From the historic colonial homes near the downtown to the newer subdivisions in the north end, we service all types of chimneys and fireplaces throughout Nashua. Our CSIA-certified crew crosses the border regularly — same team, same standards.",
    neighborhoods: ['Downtown Nashua', 'Crown Hill', 'Ledge Street', 'Harbor Ave', 'Birch Hill', 'Millpond', 'Salmon Brook'],
    responseTime: '1–2 hours',
    homeType: 'colonial homes, cape cods, and newer suburban construction',
    metaDescription:
      'Chimney cleaning, inspection & repair in Nashua, NH. CSIA-certified. Same-day available. Serving all Nashua neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'Do you serve Nashua, NH from Greater Boston?',
        answer:
          'Yes — Nashua is one of our most active NH service areas. Our crew regularly covers Nashua and the surrounding communities. Same CSIA-certified technicians, same pricing, same-day availability.',
      },
      {
        question: 'Are chimney regulations different in New Hampshire vs Massachusetts?',
        answer:
          'The core safety standards (NFPA 211, CSIA guidelines) are the same in both states. Our technicians are trained to CSIA standards which apply nationwide. We carry full insurance coverage in NH.',
      },
      {
        question: 'How quickly can you come to Nashua?',
        answer:
          'Typically within 1–2 hours for most of Nashua. Call (781) 921-6228 and we\'ll schedule you in — same-day availability most days of the week.',
      },
    ],
  },
  salem: {
    city: 'Salem',
    slug: 'salem',
    state: 'NH',
    description:
      "Salem, NH sits right on the Massachusetts border, making it one of our most convenient NH service areas. The town has a mix of ranch-style homes, colonials, and newer construction — many with chimneys that need annual maintenance or are overdue for inspection. We serve all of Salem and surrounding areas.",
    neighborhoods: ['Salem Center', 'North Salem', 'South Salem', 'Kelley Corner', 'Millville', 'Canobie Lake'],
    responseTime: '1–2 hours',
    homeType: 'ranch homes, colonials, and newer construction',
    metaDescription:
      'Chimney cleaning, inspection & repair in Salem, NH. CSIA-certified. Same-day available. Serving all Salem neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'Do you service Salem, NH homes?',
        answer:
          'Yes — Salem is one of our most frequently visited NH towns due to its proximity to the Massachusetts border. Same-day service is available and we cover all of Salem.',
      },
      {
        question: 'What chimney services do you offer in Salem, NH?',
        answer:
          'The full range — cleaning, Level 1/2/3 inspections, liner installation, cap and crown repair, smoke chamber repair, tuckpointing, full rebuilds, and fireplace service. Same services as our Massachusetts locations.',
      },
      {
        question: 'How do I schedule a chimney service in Salem, NH?',
        answer:
          'Call (781) 921-6228. We\'ll book you in, give you a flat-rate price over the phone, and confirm your appointment. Same-day availability most days.',
      },
    ],
  },
  manchester: {
    city: 'Manchester',
    slug: 'manchester',
    state: 'NH',
    description:
      "Manchester is New Hampshire's largest city and a major service area for us. The city's diverse housing stock — from triple-deckers in the South End to large single-family homes in the West Side — means a wide range of chimney systems. We service all Manchester neighborhoods with the same CSIA-certified crew.",
    neighborhoods: ['West Side', 'South End', 'North End', 'Youngsville', 'Beech Hill', 'Bakersville', 'Rimmon Heights'],
    responseTime: '1–2 hours',
    homeType: 'triple-deckers, single-family colonials, and historic mill-era homes',
    metaDescription:
      'Chimney cleaning, inspection & repair in Manchester, NH. CSIA-certified. Same-day available. Serving all Manchester neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'Do you service all Manchester, NH neighborhoods?',
        answer:
          'Yes — we cover all of Manchester including the West Side, South End, North End, Youngsville, Beech Hill, Bakersville, and surrounding areas.',
      },
      {
        question: 'What is the most common chimney problem in Manchester homes?',
        answer:
          "In Manchester's older housing stock — especially the triple-deckers and mill-era homes — the most common issues are deteriorated clay tile liners, failed chimney crowns from NH's harsh winters, and creosote buildup in wood-burning systems. Annual inspection keeps these in check.",
      },
      {
        question: 'Do you offer chimney relining in Manchester, NH?',
        answer:
          'Yes — stainless steel liner installation is one of our most common jobs in Manchester. We also offer cast-in-place liners for older, irregularly shaped flues. Call for a camera inspection and quote.',
      },
    ],
  },
  derry: {
    city: 'Derry',
    slug: 'derry',
    state: 'NH',
    description:
      "Derry, NH is a growing suburban community with a mix of classic New England colonials and newer construction. Many homes have wood-burning fireplaces that see heavy use in NH winters and need annual attention. We cover all of Derry with the same CSIA-certified technicians who serve the Greater Boston area.",
    neighborhoods: ['Derry Village', 'East Derry', 'North Derry', 'West Derry', 'Hoodkroft', 'Beaver Lake'],
    responseTime: '1–2 hours',
    homeType: 'New England colonials and newer suburban homes',
    metaDescription:
      'Chimney cleaning, inspection & repair in Derry, NH. CSIA-certified. Same-day available. Serving Derry Village, East Derry & all Derry neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'Do you serve Derry, NH?',
        answer:
          'Yes — we regularly service homes throughout Derry and can typically schedule within 1–2 days. Same-day availability is often possible. Call (781) 921-6228.',
      },
      {
        question: 'How often should a Derry, NH chimney be cleaned?',
        answer:
          "Annual cleaning is strongly recommended, especially for wood-burning fireplaces in New Hampshire where the heating season runs longer than in Massachusetts. NH's colder winters mean more wood burned and more creosote deposited.",
      },
      {
        question: 'Do you handle both chimney cleaning and repairs in Derry?',
        answer:
          'Yes — we handle everything from annual sweepings to full chimney rebuilds. If we find a problem during cleaning, we\'ll show you and quote on the repair before doing any additional work.',
      },
    ],
  },
  londonderry: {
    city: 'Londonderry',
    slug: 'londonderry',
    state: 'NH',
    description:
      "Londonderry, NH is a well-established suburban community between Manchester and Derry. The town's housing stock is primarily single-family colonials and cape cods built from the 1970s through the 1990s — a generation of homes where original clay tile liners are approaching end of life. We serve all of Londonderry with expert chimney service.",
    neighborhoods: ['Londonderry Center', 'Pillsbury Road', 'Mammoth Road', 'South Londonderry', 'Adams Road area'],
    responseTime: '1–2 hours',
    homeType: 'single-family colonials and cape cods built 1970s–1990s',
    metaDescription:
      'Chimney cleaning, inspection & repair in Londonderry, NH. CSIA-certified. Same-day available. Serving all Londonderry neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'Do you service Londonderry, NH?',
        answer:
          'Yes — we serve all of Londonderry, typically within a 1–2 day window. Same-day availability is sometimes possible. Call (781) 921-6228 to check.',
      },
      {
        question: 'My Londonderry home was built in the 1980s — does the chimney need inspection?',
        answer:
          "Very likely yes. Homes built in the 1970s–1990s typically have clay tile liners that are now 40–50 years old. NH's freeze-thaw cycles accelerate deterioration. A Level 2 camera inspection will show exactly what condition the liner is in.",
      },
    ],
  },
  hudson: {
    city: 'Hudson',
    slug: 'hudson',
    state: 'NH',
    description:
      "Hudson, NH borders Nashua directly and is a densely populated suburban community with a mix of ranch homes, split-levels, and colonials. Many of Hudson's homes have single-flue chimneys serving wood-burning fireplaces or oil/gas furnaces — both of which benefit from annual inspection and cleaning. We serve all of Hudson.",
    neighborhoods: ['Hudson Center', 'Derry Street', 'Bush Hill', 'Robinson Road area', 'Ferry Street area'],
    responseTime: '1–2 hours',
    homeType: 'ranch homes, split-levels, and colonials',
    metaDescription:
      'Chimney cleaning, inspection & repair in Hudson, NH. CSIA-certified. Same-day available. Serving all Hudson neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'Do you service Hudson, NH?',
        answer:
          "Yes — Hudson is adjacent to Nashua and one of our regular NH stops. We cover all of Hudson with the same CSIA-certified technicians.",
      },
      {
        question: 'I have an oil furnace vented through my chimney in Hudson — does it need cleaning?',
        answer:
          "Yes. Oil-fired appliances deposit soot and acidic residue in the flue that can corrode the liner over time. Annual inspection is recommended, and cleaning every 1–2 years depending on usage.",
      },
    ],
  },
  windham: {
    city: 'Windham',
    slug: 'windham',
    state: 'NH',
    description:
      "Windham, NH is one of southern New Hampshire's most desirable communities, with larger single-family homes and a strong tradition of wood-burning fireplaces. We service all of Windham with the same CSIA-certified crew and provide detailed written reports on every job.",
    neighborhoods: ['Windham Center', 'Range Road area', 'Cobbetts Pond', 'Griffin Park', 'North Windham'],
    responseTime: '1–2 hours',
    homeType: 'larger single-family homes and estates',
    metaDescription:
      'Chimney cleaning, inspection & repair in Windham, NH. CSIA-certified. Same-day available. Serving all Windham neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'Do you serve Windham, NH?',
        answer:
          'Yes — we service Windham regularly. Call (781) 921-6228 to schedule.',
      },
      {
        question: 'Do you handle larger homes with multiple fireplaces in Windham?',
        answer:
          "Absolutely. We regularly service Windham homes with two or three fireplaces. We can inspect and clean all flues in a single visit and provide comprehensive documentation for each.",
      },
    ],
  },
  merrimack: {
    city: 'Merrimack',
    slug: 'merrimack',
    state: 'NH',
    description:
      "Merrimack, NH is a large suburban town between Nashua and Manchester with a mix of colonials, ranch homes, and newer construction. We service all of Merrimack with the same prompt, professional chimney service as our Massachusetts locations.",
    neighborhoods: ['Merrimack Center', 'Naticook', 'Reeds Ferry', 'Continental Drive area', 'Baboosic Lake'],
    responseTime: '1–2 hours',
    homeType: 'colonials, ranch homes, and newer construction',
    metaDescription:
      'Chimney cleaning, inspection & repair in Merrimack, NH. CSIA-certified. Same-day available. Serving all Merrimack neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'Do you service Merrimack, NH?',
        answer:
          'Yes — Merrimack is in our regular NH service route. Call (781) 921-6228 to schedule. Same-day availability is often possible.',
      },
      {
        question: 'What chimney services do you offer in Merrimack, NH?',
        answer:
          'The complete range — cleaning, inspection, liner installation, crown and cap repair, smoke chamber repair, tuckpointing, and full rebuilds if needed. Same services as our Massachusetts coverage.',
      },
    ],
  },
  bedford: {
    city: 'Bedford',
    slug: 'bedford',
    state: 'NH',
    description:
      "Bedford, NH is one of the most affluent communities in New Hampshire, with large single-family homes and estates featuring multiple fireplaces. We service Bedford with the same expert crew that handles complex, multi-fireplace properties in Newton and Brookline, MA.",
    neighborhoods: ['Bedford Center', 'Jenkins Road area', 'Back River Road', 'Meetinghouse Road area', 'New Boston Road area'],
    responseTime: '1–2 hours',
    homeType: 'large single-family homes and estates with multiple fireplaces',
    metaDescription:
      'Chimney cleaning, inspection & repair in Bedford, NH. CSIA-certified. Same-day available. Serving all Bedford neighborhoods. Call (781) 921-6228.',
    faqs: [
      {
        question: 'Do you service Bedford, NH?',
        answer:
          'Yes — Bedford is one of our NH service areas. We handle everything from annual cleaning to full chimney rebuilds. Call (781) 921-6228 to schedule.',
      },
      {
        question: 'We have a large home with three fireplaces in Bedford — can you service all of them?',
        answer:
          "Absolutely. Multi-fireplace properties are common in Bedford and something we handle regularly. We can inspect, clean, and service all flues in a single visit.",
      },
    ],
  },
};

const services = [
  { name: 'Chimney Inspection', href: '/chimney-inspection', desc: 'Level 1, 2 & 3 CSIA-certified safety inspections with camera scan' },
  { name: 'Chimney Cleaning', href: '/chimney-cleaning', desc: 'Annual sweeping removes dangerous creosote & debris buildup' },
  { name: 'Chimney Repair', href: '/chimney-repair', desc: 'Liner replacement, flashing repair & full structural restoration' },
  { name: 'Chimney Rebuilds', href: '/chimney-rebuilds', desc: 'Full & partial reconstruction with permit-pulled, matching brick' },
  { name: 'Chimney Liner Installation', href: '/chimney-liner-installation', desc: 'Stainless steel & cast-in-place liners, 20-year warranty available' },
  { name: 'Chimney Cap Installation', href: '/chimney-cap-installation', desc: 'Premium caps block water, animals & downdrafts, same-day install' },
  { name: 'Chimney Crown Repair', href: '/chimney-crown-repair', desc: 'Seal cracks before freeze-thaw cycles spread water damage' },
  { name: 'Smoke Chamber Repair', href: '/smoke-chamber-repair', desc: 'Parging & crack repair for better draft and CO safety' },
  { name: 'Fireplace Repair', href: '/fireplace-repair', desc: 'Damper, firebox restoration & fireplace insert installation' },
  { name: 'Gas Fireplace Services', href: '/gas-fireplace-services', desc: 'Tune-ups, ignition repair & annual gas safety inspections' },
  { name: 'Chimney Leak Repair', href: '/chimney-leak-repair', desc: 'Flashing, crown sealing, brick waterproofing & cap installation' },
  { name: 'Tuckpointing', href: '/tuckpointing', desc: 'Color-matched mortar repointing — lasts 25–30 years' },
];

export async function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: { city: string };
}): Promise<Metadata> {
  const data = cityData[params.city];
  if (!data) return {};

  return {
    title: data.metaTitle ?? `Chimney Services in ${data.city}, ${data.state} | Above Services | (781) 921-6228`,
    description: data.metaDescription,
    alternates: {
      canonical: `${BASE_URL}/service-areas/${data.slug}`,
    },
    openGraph: {
      title: `Chimney Services in ${data.city}, ${data.state} | Above Services`,
      description: data.metaDescription,
      url: `${BASE_URL}/service-areas/${data.slug}`,
    },
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const data = cityData[params.city];
  if (!data) notFound();

  const stateName = data.state === 'NH' ? 'New Hampshire' : 'Massachusetts';

  const cityReviews = [
    {
      name: 'R.K.',
      location: `${data.city}, ${data.state}`,
      date: 'October 2024',
      review: `Called Above Services after noticing smoke backing up into our living room in ${data.city}. They came out the next day, found a cracked flue tile, and had it repaired within the week. Really professional — explained everything clearly and didn't try to upsell us on work we didn't need.`,
    },
    {
      name: 'M.T.',
      location: `${data.city}, ${data.state}`,
      date: 'November 2024',
      review: `Used Above Services for our annual chimney cleaning. Showed up on time, did thorough work, and left the place spotless. The technician knew exactly what to look for in our older home and flagged a small liner crack to monitor. Honest and skilled — will book again.`,
    },
    {
      name: 'D.P.',
      location: `${data.city}, ${data.state}`,
      date: 'April 2024',
      review: `Had water coming into our fireplace after heavy rain. Above Services came out quickly, found failing step flashing, and repaired it the same week. Fair price, clean work, no surprises on the invoice. Exactly what you want from a local contractor.`,
    },
  ];

  const citySchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${BASE_URL}/#business`,
    name: 'Above Services',
    description: `Professional chimney cleaning, inspection, repair, and fireplace services in ${data.city}, ${data.state}.`,
    url: BASE_URL,
    telephone: '+17819216228',
    email: 'aboveservicesllc@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Boston',
      addressRegion: 'MA',
      postalCode: '02101',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.3601,
      longitude: -71.0589,
    },
    hasMap: GBP_URL,
    areaServed: {
      '@type': 'City',
      name: data.city,
      containedInPlace: { '@type': 'State', name: data.state === 'NH' ? 'New Hampshire' : 'Massachusetts' },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '512',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      GBP_URL,
      'https://facebook.com/aboveservicesboston',
      'https://instagram.com/aboveservicesboston',
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${BASE_URL}/service-areas` },
      { '@type': 'ListItem', position: 3, name: `${data.city}, ${data.state}`, item: `${BASE_URL}/service-areas/${data.slug}` },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  const phoneIcon = (
    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );

  const googleLogo = (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );


  return (
    <>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ─────────────────────────────────────────
          HERO — full-viewport dark section
      ───────────────────────────────────────── */}
      <section className="relative bg-[#07111f] min-h-[88vh] flex flex-col justify-center overflow-hidden">
        {/* Background texture / gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#07111f] via-[#0b1929] to-[#0f2545]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        <div className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[100px] pointer-events-none" />

        <div className="relative w-full max-w-[1560px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-blue-400 mb-10" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span className="text-blue-700">/</span>
            <Link href="/service-areas" className="hover:text-amber-400 transition-colors">Service Areas</Link>
            <span className="text-blue-700">/</span>
            <span className="text-white font-medium">{data.city}, {data.state}</span>
          </nav>

          <div className="grid grid-cols-1 xl:grid-cols-[1fr_420px] gap-12 xl:gap-20 items-start">
            {/* Left — main headline */}
            <div>
              <div className="inline-flex items-center gap-2.5 bg-amber-500/15 border border-amber-500/30 text-amber-400 text-sm font-bold px-5 py-2 rounded-full mb-8 tracking-wide">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse flex-shrink-0" />
                Same-Day Service Available in {data.city}
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-black text-white leading-[1.05] mb-7 tracking-tight">
                {data.h1 ? (
                  <span dangerouslySetInnerHTML={{ __html: data.h1.replace(data.city, `<span class="text-amber-400">${data.city}</span>`) }} />
                ) : (
                  <>Chimney Services<br /><span className="text-amber-400">in {data.city},</span><br /><span className="text-amber-400">{data.state}</span></>
                )}
              </h1>

              <p className="text-blue-200 text-xl lg:text-2xl leading-relaxed mb-10 max-w-2xl">
                CSIA-certified chimney cleaning, inspection, repair &amp; fireplace restoration.
                Typical response <strong className="text-white font-bold">{data.responseTime}</strong> — upfront flat-rate pricing, no subcontractors.
              </p>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-3 mb-10">
                {['★ 4.9 / 5 · 500+ Reviews', 'CSIA Certified', 'Licensed & Insured', 'No Subcontractors', 'Upfront Pricing'].map((p) => (
                  <span key={p} className="bg-white/8 border border-white/15 text-white text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm">
                    {p}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+17819216228"
                  className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 active:scale-[0.98] text-white font-black py-5 px-10 rounded-2xl text-lg transition-all duration-150 shadow-[0_8px_32px_rgba(245,158,11,0.35)] hover:shadow-[0_8px_40px_rgba(245,158,11,0.5)]"
                >
                  {phoneIcon}
                  Call (781) 921-6228
                </a>
                <a
                  href={GBP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/18 border border-white/20 hover:border-amber-400/50 text-white font-semibold py-5 px-8 rounded-2xl text-base transition-all duration-150 backdrop-blur-sm"
                >
                  {googleLogo}
                  Read Our Reviews
                </a>
              </div>
            </div>

            {/* Right — booking card */}
            <div className="xl:sticky xl:top-8 bg-white/6 border border-white/12 rounded-3xl p-8 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  {phoneIcon}
                </div>
                <div>
                  <p className="text-amber-400 text-xs font-bold uppercase tracking-widest">Book Today</p>
                  <p className="text-white font-black text-xl leading-none">(781) 921-6228</p>
                </div>
              </div>
              <p className="text-blue-300 text-sm mb-6 leading-relaxed">Available Mon–Sat. Same-day slots in {data.city}. Save 10% when you book today.</p>

              <a
                href="tel:+17819216228"
                className="flex items-center justify-center gap-2.5 w-full bg-amber-500 hover:bg-amber-400 text-white font-black py-4 rounded-xl text-base transition-all duration-150 shadow-lg shadow-amber-500/25 mb-3 active:scale-[0.98]"
              >
                {phoneIcon}
                Call Now — Free Quote
              </a>
              <a
                href={GBP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full bg-white/10 hover:bg-white/15 border border-white/18 text-white font-semibold py-3.5 rounded-xl text-sm transition-all duration-150 mb-7"
              >
                {googleLogo}
                View 500+ Google Reviews
              </a>

              <div className="space-y-3">
                {['CSIA-Certified Technicians', 'No Subcontractors — Ever', 'Upfront Flat-Rate Pricing', 'Licensed, Bonded & Insured', `Serving ${data.city} Since 2013`].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-blue-200">
                    <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          TRUST / STATS BAR — amber background
      ───────────────────────────────────────── */}
      <section className="bg-amber-500 py-5">
        <div className="w-full max-w-[1560px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 divide-x divide-amber-400/40">
            {[
              { val: '500+', label: 'Google Reviews' },
              { val: '4.9 ★', label: 'Average Rating' },
              { val: '12+', label: 'Years in Region' },
              { val: 'CSIA', label: 'Certified' },
              { val: '100%', label: 'Satisfaction Guaranteed' },
            ].map((s) => (
              <div key={s.label} className="text-center px-4 first:pl-0 last:pr-0">
                <p className="text-white font-black text-2xl leading-none">{s.val}</p>
                <p className="text-amber-100 text-xs mt-1 font-semibold uppercase tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          ABOUT + NEIGHBORHOODS — white, 2-col
      ───────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="w-full max-w-[1560px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-start">
            {/* Left */}
            <div>
              <p className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-4">Local Expertise</p>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-[#07111f] leading-tight mb-8">
                Chimney &amp; Fireplace<br />Experts in {data.city}
              </h2>
              <p className="text-gray-600 text-lg lg:text-xl leading-relaxed mb-6">{data.description}</p>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                We specialize in <strong className="text-[#07111f]">{data.homeType}</strong> — the homes that define {data.city}.
                Whether you need a routine annual cleaning or a complete chimney rebuild, our CSIA-certified crew handles it all in-house with no subcontractors and upfront pricing.
              </p>

              {/* 4 metrics */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Typical Response', val: data.responseTime },
                  { label: 'Service State', val: stateName },
                  { label: 'Crew Type', val: 'Direct employees' },
                  { label: 'Certification', val: 'CSIA Certified' },
                ].map((item) => (
                  <div key={item.label} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">{item.label}</p>
                    <p className="font-black text-[#07111f] text-xl">{item.val}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — neighborhood list + mini booking card */}
            <div className="space-y-6">
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8">
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-black text-[#07111f] text-lg">Neighborhoods We Cover</h3>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {data.neighborhoods.map((n) => (
                    <div key={n} className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                      <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                      {n}
                    </div>
                  ))}
                </div>
                <p className="text-gray-400 text-xs mt-5 pt-5 border-t border-gray-200">Don't see your area? Call — we likely cover it.</p>
              </div>

              <div className="bg-[#07111f] rounded-3xl p-8 text-white">
                <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">Book Today</p>
                <p className="font-black text-2xl mb-2">Save 10% on Any Service</p>
                <p className="text-blue-300 text-sm mb-5">Same-day availability most days in {data.city}. Upfront pricing, no surprises.</p>
                <a
                  href="tel:+17819216228"
                  className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-400 text-white font-black py-4 rounded-xl text-sm transition-all duration-150 active:scale-[0.98] shadow-lg shadow-amber-500/25"
                >
                  {phoneIcon}
                  Call (781) 921-6228
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          CHIMNEY PROBLEMS — city-specific (optional)
      ───────────────────────────────────────── */}
      {data.chimneyProblems && (
        <section className="bg-amber-50 border-y border-amber-100 py-14">
          <div className="w-full max-w-[1560px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-black text-[#07111f] mb-3">Common Chimney Problems in {data.city} Homes</h2>
                <p className="text-gray-700 text-base leading-relaxed max-w-4xl">{data.chimneyProblems}</p>
                <div className="flex flex-wrap gap-3 mt-5">
                  {['Chimney Inspection', 'Chimney Cleaning', 'Liner Replacement', 'Crown Repair', 'Waterproofing', 'Tuckpointing'].map((s) => (
                    <span key={s} className="bg-white border border-amber-200 text-amber-800 text-xs font-semibold px-3 py-1.5 rounded-full">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────
          SERVICES — dark background, full-width grid
      ───────────────────────────────────────── */}
      <section className="bg-[#07111f] py-24 lg:py-32">
        <div className="w-full max-w-[1560px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-amber-400 font-bold text-sm uppercase tracking-widest mb-4">Complete Service Menu</p>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-5">
              Every Chimney Service<br />Available in {data.city}
            </h2>
            <p className="text-blue-300 text-lg max-w-2xl mx-auto">
              One CSIA-certified crew handles all 12 services — no referrals, no middlemen, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-12">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-white/5 hover:bg-white/10 border border-white/8 hover:border-amber-500/50 rounded-2xl p-6 transition-all duration-200"
              >
                <div className="w-10 h-10 bg-amber-500/15 group-hover:bg-amber-500/25 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="font-bold text-white text-base mb-2 group-hover:text-amber-400 transition-colors">{s.name}</p>
                <p className="text-blue-300/80 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <a
              href="tel:+17819216228"
              className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-white font-black py-5 px-12 rounded-2xl text-lg transition-all duration-150 shadow-[0_8px_32px_rgba(245,158,11,0.3)] active:scale-[0.98]"
            >
              {phoneIcon}
              Schedule in {data.city} — Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          HOW IT WORKS — white, 4-step process
      ───────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="w-full max-w-[1560px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-4">Simple 4-Step Process</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#07111f] leading-tight">
              How Service Works in {data.city}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                step: '01',
                title: 'Call or Book Online',
                body: `Call (781) 921-6228 or book online. We confirm same-day or next-day availability in ${data.city} immediately.`,
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
              },
              {
                step: '02',
                title: 'We Arrive On Time',
                body: `A CSIA-certified technician arrives at your ${data.city} home in a marked company vehicle — no surprises.`,
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
              },
              {
                step: '03',
                title: 'Inspect & Quote',
                body: 'We inspect with a camera, show you exactly what we find, and give you a flat-rate price before any work begins.',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />,
              },
              {
                step: '04',
                title: 'Work & Written Report',
                body: 'You approve, we complete the work cleanly, and you receive a full written service report the same day.',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
              },
            ].map((item, i) => (
              <div key={item.step} className="relative bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:border-amber-200 hover:shadow-lg transition-all duration-200">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30">
                  <span className="text-white font-black text-sm">{item.step}</span>
                </div>
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-5 mt-3">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="font-black text-[#07111f] text-xl mb-3">{item.title}</h3>
                <p className="text-gray-500 text-base leading-relaxed">{item.body}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-amber-200 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          REVIEWS — dark section
      ───────────────────────────────────────── */}
      <section className="bg-[#0b1929] py-24 lg:py-32">
        <div className="w-full max-w-[1560px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-amber-400 font-bold text-sm uppercase tracking-widest mb-4">Real Homeowners</p>
              <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                What {data.city}<br />Customers Say
              </h2>
            </div>
            <a
              href={GBP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-white/8 hover:bg-white/12 border border-white/15 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-150 self-start lg:self-auto"
            >
              {googleLogo}
              View all 500+ reviews on Google
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {cityReviews.map((r) => (
              <div key={r.name} className="bg-white/6 border border-white/10 rounded-3xl p-8 flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-blue-100 text-base leading-relaxed flex-1 mb-6">&ldquo;{r.review}&rdquo;</p>
                <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-400 font-black text-sm">{r.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{r.name}</p>
                    <p className="text-blue-400 text-xs">{r.location} · {r.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          EMERGENCY CTA STRIP
      ───────────────────────────────────────── */}
      <section className="bg-amber-500 py-10">
        <div className="w-full max-w-[1560px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <p className="text-amber-900 font-bold text-sm uppercase tracking-widest mb-1">Emergency Chimney Service</p>
              <h3 className="text-white font-black text-3xl lg:text-4xl">
                Smoke backing up? Call immediately.
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="tel:+17819216228"
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-gray-50 text-amber-600 font-black py-4 px-10 rounded-xl text-lg transition-all duration-150 active:scale-[0.98] shadow-lg"
              >
                {phoneIcon}
                (781) 921-6228
              </a>
              <Link
                href="/chimney-inspection"
                className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-8 rounded-xl text-base transition-all duration-150"
              >
                Learn About Inspections →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          LOCAL TRUST + PROPERTY CONTEXT — dark gradient
      ───────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#07111f] to-[#0f2545] py-24 lg:py-32">
        <div className="w-full max-w-[1560px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-amber-400 font-bold text-sm uppercase tracking-widest mb-4">Built for {data.city} Homes</p>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-8">
                We Know {data.city}&apos;s<br />Housing Stock
              </h2>
              <p className="text-blue-200 text-lg leading-relaxed mb-8">
                {data.city} homes — especially {data.homeType} — have chimney systems that require
                specific expertise. Our crew has serviced hundreds of homes in {data.city} and the surrounding {stateName} area.
                We know the common failure points, the right mortar mixes for older masonry, and how New England winters affect each type of chimney system.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {data.neighborhoods.slice(0, 5).map((n) => (
                  <span key={n} className="bg-white/8 border border-white/15 text-blue-200 text-sm px-4 py-1.5 rounded-full">{n}</span>
                ))}
                {data.neighborhoods.length > 5 && (
                  <span className="bg-white/8 border border-white/15 text-blue-300 text-sm px-4 py-1.5 rounded-full">+{data.neighborhoods.length - 5} more</span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { val: data.responseTime, label: 'Response Time', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> },
                { val: '12+', label: 'Years in Region', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /> },
                { val: '500+', label: 'Jobs Nearby', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /> },
                { val: '4.9★', label: 'Google Rating', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /> },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/6 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-amber-500/15 rounded-2xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      {stat.icon}
                    </svg>
                  </div>
                  <p className="text-4xl font-black text-amber-400 mb-2">{stat.val}</p>
                  <p className="text-blue-300 text-sm font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          WHY CHOOSE US — white, 3-col feature grid
      ───────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="w-full max-w-[1560px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-4">Why Above Services</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#07111f] leading-tight">
              Why {data.city} Homeowners<br />Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
                title: 'CSIA-Certified',
                body: 'Every technician holds an active CSIA certification — the gold standard in chimney safety and the credential insurers and lenders require.',
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
                title: 'No Subcontractors',
                body: `We never hand your job off. The same certified crew that quotes the work in ${data.city} is the one that completes it.`,
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />,
                title: 'Upfront Flat-Rate Pricing',
                body: 'We give you a complete price before touching anything. No scope creep, no surprise charges on the invoice.',
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
                title: 'Licensed, Bonded & Insured',
                body: "Full general liability and workers' compensation insurance on every job. We provide proof of insurance upon request.",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
                title: 'Same-Day Service',
                body: `Same-day appointment slots available most days throughout ${data.city}. Call before noon for the best chances.`,
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />,
                title: '4.9 ★ on Google',
                body: 'Over 500 verified reviews from homeowners across Greater Boston and Southern New Hampshire.',
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-5 bg-gray-50 border border-gray-100 hover:border-amber-200 hover:shadow-md rounded-3xl p-8 transition-all duration-200">
                <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <p className="font-black text-[#07111f] text-lg mb-2">{item.title}</p>
                  <p className="text-gray-500 text-base leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          FAQ — gray-50 background, 2-col layout
      ───────────────────────────────────────── */}
      <section className="bg-gray-50 py-24 lg:py-32">
        <div className="w-full max-w-[1560px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-start">
            {/* Questions */}
            <div>
              <p className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-4">Frequently Asked</p>
              <h2 className="text-4xl lg:text-5xl font-black text-[#07111f] leading-tight mb-4">
                {data.city} Chimney FAQ
              </h2>
              <p className="text-gray-500 text-lg mb-10">
                Questions from {data.city} homeowners. Don't see yours?{' '}
                <a href="tel:+17819216228" className="text-amber-600 hover:text-amber-700 font-bold">Just call us.</a>
              </p>
              <div className="space-y-4">
                {data.faqs.map((faq) => (
                  <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>

            {/* Sticky booking card */}
            <div className="lg:sticky lg:top-8">
              <div className="bg-[#07111f] rounded-3xl p-8 text-white mb-5">
                <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">Ready to Book?</p>
                <p className="text-white font-black text-2xl mb-2">Get a Free Quote</p>
                <p className="text-blue-300 text-sm mb-7 leading-relaxed">
                  A CSIA-certified technician will give you a flat-rate price before touching anything. No obligation.
                </p>
                <a
                  href="tel:+17819216228"
                  className="flex items-center justify-center gap-2.5 w-full bg-amber-500 hover:bg-amber-400 text-white font-black py-4 rounded-xl text-base transition-all duration-150 mb-3 shadow-lg shadow-amber-500/25 active:scale-[0.98]"
                >
                  {phoneIcon}
                  (781) 921-6228
                </a>
                <p className="text-center text-blue-400 text-xs mb-6">Save 10% · Same-day available in {data.city}</p>
                <div className="space-y-3 border-t border-white/10 pt-6">
                  {['Free upfront quote', 'CSIA-certified crew', 'No hidden fees', 'Written service report'].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-blue-200">
                      <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              {/* Related services mini-list */}
              <div className="bg-white border border-gray-100 rounded-3xl p-6">
                <p className="font-black text-[#07111f] text-sm uppercase tracking-wider mb-4">Top Services in {data.city}</p>
                <div className="space-y-2">
                  {[
                    { name: 'Chimney Inspection', href: '/chimney-inspection' },
                    { name: 'Chimney Cleaning', href: '/chimney-cleaning' },
                    { name: 'Chimney Repair', href: '/chimney-repair' },
                    { name: 'Chimney Leak Repair', href: '/chimney-leak-repair' },
                    { name: 'Tuckpointing', href: '/tuckpointing' },
                  ].map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0 group"
                    >
                      <span className="text-gray-700 font-medium text-sm group-hover:text-amber-600 transition-colors">{s.name}</span>
                      <svg className="w-4 h-4 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          OTHER CITIES — white, wide pill grid
      ───────────────────────────────────────── */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="w-full max-w-[1560px] mx-auto px-6 lg:px-12">
          {/* Nearby cities */}
          {data.nearbyLinks && data.nearbyLinks.length > 0 && (
            <div className="mb-12">
              <p className="text-xs font-black text-amber-600 uppercase tracking-[0.2em] mb-5">Serving Nearby Communities</p>
              <div className="flex flex-wrap gap-3">
                {data.nearbyLinks.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/service-areas/${c.slug}`}
                    className="bg-amber-50 border border-amber-200 hover:border-amber-400 hover:bg-amber-100 text-amber-800 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-150"
                  >
                    {c.city} →
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* All service areas */}
          <div>
            <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-5">All Service Areas</p>
            <div className="flex flex-wrap gap-2.5">
              {Object.values(cityData)
                .filter((c) => c.slug !== data.slug)
                .map((c) => (
                  <Link
                    key={c.slug}
                    href={`/service-areas/${c.slug}`}
                    className="bg-gray-50 border border-gray-200 hover:border-amber-400 hover:bg-amber-50 hover:text-amber-700 text-gray-600 text-xs font-semibold px-4 py-2 rounded-full transition-all duration-150"
                  >
                    {c.city}, {c.state}
                  </Link>
                ))}
            </div>
          </div>

          {/* Internal service links */}
          <div className="mt-10 pt-8 border-t border-gray-100">
            <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-5">Our Services in {data.city}</p>
            <div className="flex flex-wrap gap-2.5">
              {[
                { name: 'Chimney Cleaning', href: '/chimney-cleaning' },
                { name: 'Chimney Inspection', href: '/chimney-inspection' },
                { name: 'Chimney Repair', href: '/chimney-repair' },
                { name: 'Chimney Liner Installation', href: '/chimney-liner-installation' },
                { name: 'Chimney Crown Repair', href: '/chimney-crown-repair' },
                { name: 'Chimney Rebuilds', href: '/chimney-rebuilds' },
                { name: 'Tuckpointing', href: '/tuckpointing' },
                { name: 'Fireplace Repair', href: '/fireplace-repair' },
                { name: 'Chimney Cap Installation', href: '/chimney-cap-installation' },
                { name: 'Chimney Leak Repair', href: '/chimney-leak-repair' },
                { name: 'Gas Fireplace Services', href: '/gas-fireplace-services' },
              ].map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="bg-gray-50 border border-gray-200 hover:border-amber-400 hover:bg-amber-50 hover:text-amber-700 text-gray-600 text-xs font-semibold px-4 py-2 rounded-full transition-all duration-150"
                >
                  {s.name} in {data.city}
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/service-areas" className="text-amber-600 font-bold text-sm hover:text-amber-700 transition-colors">
              View all service areas →
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          FINAL CTA BANNER
      ───────────────────────────────────────── */}
      <CTABanner
        heading={`Book Your ${data.city} Chimney Service Today`}
        subtext={`CSIA-certified chimney specialists serving ${data.city}, ${stateName} since 2013. Same-day availability. Upfront pricing. Call now and save 10% on any service.`}
        primaryButtonText="Call Now — Save 10%"
        primaryButtonHref="tel:+17819216228"
        secondaryButtonText="Book Online & Save 10%"
        showPhone={true}
      />
    </>
  );
}
