import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCallBar from '@/components/MobileCallBar';
import BookingModal from '@/components/BookingModal';
import { localBusinessSchema, websiteSchema, organizationSchema } from '@/lib/seo';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0F172A' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aboveservicesboston.com'),
  title: {
    default: 'Above Services | Boston\'s Chimney Specialists | (781) 921-6228',
    template: '%s | Above Services Boston',
  },
  description:
    'Above Services is a CSIA-certified chimney company serving Greater Boston since 2013. Chimney cleaning, inspection, repair, rebuilds, liner installation, crown repair, and fireplace service across Boston, Cambridge, Brookline, and surrounding towns. Call (781) 921-6228.',
  keywords: [
    'chimney cleaning Boston MA',
    'chimney repair Boston MA',
    'chimney inspection Boston',
    'chimney sweep Boston',
    'chimney rebuilds Boston MA',
    'chimney liner installation Boston',
    'chimney cap installation Boston',
    'chimney crown repair Boston',
    'smoke chamber repair Boston',
    'fireplace repair Boston MA',
    'CSIA certified chimney Boston',
    'chimney cleaning Cambridge MA',
    'chimney repair Brookline MA',
    'chimney inspection Newton MA',
    'chimney cleaning Somerville MA',
    'above services Boston chimney',
  ],
  authors: [{ name: 'Above Services' }],
  creator: 'Above Services',
  publisher: 'Above Services',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.aboveservicesboston.com',
    siteName: 'Above Services',
    title: 'Above Services | Boston\'s Chimney Specialists | (781) 921-6228',
    description:
      'CSIA-certified chimney specialists serving Greater Boston since 2013. Chimney cleaning, inspection, repair, rebuilds, and fireplace service. Call (781) 921-6228.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Above Services — Boston Chimney Specialists',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Above Services | Boston\'s Chimney Specialists | (781) 921-6228',
    description:
      'CSIA-certified chimney cleaning, inspection, repair, and rebuilds serving Greater Boston since 2013. Call (781) 921-6228.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.svg',
  },
  alternates: {
    canonical: 'https://www.aboveservicesboston.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      <body className="font-sans pb-[82px] md:pb-0">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-amber-500 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileCallBar />
        <BookingModal />
      </body>
    </html>
  );
}
