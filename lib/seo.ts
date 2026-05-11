const BASE_URL = 'https://www.aboveservicesboston.com';
const PHONE = '+17819216228';
const PHONE_DISPLAY = '(781) 921-6228';
const BUSINESS_NAME = 'Above Services';
export const GBP_URL = 'https://maps.app.goo.gl/m6JmBt8W75SP118S8';

export const NEARBY_CITIES = [
  'Boston', 'Cambridge', 'Somerville', 'Brookline',
  'Newton', 'Quincy', 'Medford', 'Malden', 'Waltham', 'Arlington',
  'Nashua', 'Salem', 'Derry', 'Londonderry', 'Manchester',
  'Hudson', 'Windham', 'Merrimack', 'Bedford', 'Portsmouth',
];

interface FAQ { question: string; answer: string }

export function faqSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function breadcrumbSchema(crumbs: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      ...crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: c.name,
        item: `${BASE_URL}${c.href}`,
      })),
    ],
  };
}

export function serviceSchema({
  name,
  description,
  slug,
  price,
  priceNote,
}: {
  name: string;
  description: string;
  slug: string;
  price?: string;
  priceNote?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${BASE_URL}/${slug}`,
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS_NAME,
      telephone: PHONE,
      url: BASE_URL,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Boston',
        addressRegion: 'MA',
        addressCountry: 'US',
      },
    },
    areaServed: NEARBY_CITIES.map((city) => ({
      '@type': 'City',
      name: city,
      containedInPlace: { '@type': 'State', name: 'Massachusetts' },
    })),
    ...(price && {
      offers: {
        '@type': 'Offer',
        price,
        priceCurrency: 'USD',
        description: priceNote ?? `Starting price for ${name} in Boston, MA`,
      },
    }),
  };
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${BASE_URL}/#business`,
  name: BUSINESS_NAME,
  description:
    "Boston's premier chimney specialist. Expert chimney cleaning, inspection, repair, rebuilds, liner installation, cap installation, crown repair, smoke chamber repair, and fireplace service. CSIA-certified since 2013.",
  url: BASE_URL,
  telephone: PHONE,
  email: 'aboveservicesllc@gmail.com',
  image: `${BASE_URL}/og-image.jpg`,
  logo: `${BASE_URL}/logo.png`,
  foundingDate: '2013',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Boston',
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
  areaServed: NEARBY_CITIES.map((city) => ({
    '@type': 'City',
    name: city,
    containedInPlace: { '@type': 'State', name: 'Massachusetts' },
  })),
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '00:00', closes: '23:59' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday'], opens: '08:00', closes: '18:00' },
  ],
  priceRange: '$$',
  paymentAccepted: 'Cash, Credit Card, Check',
  currenciesAccepted: 'USD',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '512',
    bestRating: '5',
    worstRating: '1',
  },
  knowsAbout: [
    'Chimney Cleaning', 'Chimney Inspection', 'Chimney Repair', 'Chimney Rebuilds',
    'Chimney Liner Installation', 'Chimney Cap Installation', 'Chimney Crown Repair',
    'Smoke Chamber Repair', 'Fireplace Repair', 'Gas Fireplace Services',
    'Chimney Leak Repair', 'Tuckpointing', 'Creosote Removal',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Chimney Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Chimney Inspection', url: `${BASE_URL}/chimney-inspection` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Chimney Cleaning', url: `${BASE_URL}/chimney-cleaning` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Chimney Repair', url: `${BASE_URL}/chimney-repair` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Chimney Rebuilds', url: `${BASE_URL}/chimney-rebuilds` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Chimney Liner Installation', url: `${BASE_URL}/chimney-liner-installation` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Chimney Cap Installation', url: `${BASE_URL}/chimney-cap-installation` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Chimney Crown Repair', url: `${BASE_URL}/chimney-crown-repair` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Smoke Chamber Repair', url: `${BASE_URL}/smoke-chamber-repair` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fireplace Repair', url: `${BASE_URL}/fireplace-repair` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gas Fireplace Services', url: `${BASE_URL}/gas-fireplace-services` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Chimney Leak Repair', url: `${BASE_URL}/chimney-leak-repair` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tuckpointing', url: `${BASE_URL}/tuckpointing` } },
    ],
  },
  sameAs: [
    GBP_URL,
    'https://facebook.com/aboveservicesboston',
    'https://instagram.com/aboveservicesboston',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: BUSINESS_NAME,
  url: BASE_URL,
  description: "Boston's premier chimney specialist serving Greater Boston since 2013.",
  publisher: { '@id': `${BASE_URL}/#business` },
};

export function articleSchema({
  title,
  description,
  slug,
  publishDate,
}: {
  title: string;
  description: string;
  slug: string;
  publishDate: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: {
      '@type': 'Organization',
      name: BUSINESS_NAME,
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_NAME,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png` },
    },
    datePublished: publishDate,
    dateModified: publishDate,
    url: `${BASE_URL}/blog/${slug}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/blog/${slug}` },
  };
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: BUSINESS_NAME,
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/logo.png`,
    width: 200,
    height: 60,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: PHONE,
    contactType: 'customer service',
    areaServed: 'Greater Boston, MA',
    availableLanguage: 'English',
    contactOption: 'TollFree',
  },
  sameAs: [
    GBP_URL,
    'https://facebook.com/aboveservicesboston',
    'https://instagram.com/aboveservicesboston',
  ],
};
