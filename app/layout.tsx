// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { ThemeProvider } from '@/components/ThemeProvider';
import SplashScreen from '@/components/SplashScreen'; // <-- Splash loader

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
});

// Replace with your real canonical domain (no trailing slash)
const SITE_URL = 'https://www.appplex.vercel.app';

// Ordered, SEO-focused Nepal keywords
const KEYWORDS: string[] = [
  // High-priority, Nepal + service intent
  'website development company in nepal',
  'website making company nepal',
  'web design company nepal',
  'best website development company nepal',
  'web design kathmandu',
  'website development kathmandu',
  'software company in nepal',
  'it company in nepal',
  'app development company nepal',
  'mobile app development nepal',
  'mobile app development kathmandu',
  'ecommerce website development nepal',
  'ecommerce developer nepal',
  'custom website nepal',
  'business website nepal',
  'wordpress developer nepal',
  'react developer nepal',
  'nextjs developer nepal',
  'ui ux design nepal',
  'seo company nepal',
  'digital marketing nepal',
  'website design price in nepal',
  'website cost in nepal',
  'ecommerce website price nepal',
  'app development cost nepal',
  'website maintenance nepal',
  'website redesign nepal',
  'web hosting nepal',
  'domain registration nepal',
  'nepali language website development',
  'english nepali bilingual website',
  'multilingual website nepal',
  'payment gateway integration nepal',
  'esewa integration website nepal',
  'khalti integration website nepal',
  'fonepay integration nepal',
  'connectips integration nepal',
  'online store nepal',
  'headless ecommerce nepal',
  'shopify developer nepal',
  'woocommerce developer nepal',
  'magento developer nepal',
  'api integration nepal',
  'booking website nepal',
  'news portal website nepal',
  'travel agency website nepal',
  'hotel website nepal',
  'restaurant website nepal',
  'education website nepal',
  'ngo website nepal',
  'healthcare website nepal',
  'real estate website nepal',
  'personal portfolio website nepal',

  // Kathmandu Valley + major cities
  'web design lalitpur',
  'website development lalitpur',
  'web design bhaktapur',
  'website development bhaktapur',
  'web design pokhara',
  'website development pokhara',
  'web design biratnagar',
  'website development biratnagar',
  'web design butwal',
  'website development butwal',
  'web design chitwan',
  'website development bharatpur',
  'web design hetauda',
  'website development hetauda',
  'web design dharan',
  'website development dharan',
  'web design birgunj',
  'website development birgunj',
  'web design nepalgunj',
  'website development nepalgunj',
  'web design janakpur',
  'website development janakpur',
  'web design dang',
  'website development dang',
  'web design dhangadhi',
  'website development dhangadhi',
  'web design itahari',
  'website development itahari',
  'web design lumbini',
  'website development lumbini',

  // Long‑tail service + benefits
  'responsive web design nepal',
  'fast website nepal',
  'seo friendly website nepal',
  'core web vitals optimization nepal',
  'lighthouse performance optimization nepal',
  'progressive web app nepal',
  'pwa developer nepal',
  'accessible website nepal',
  'wcag accessibility nepal',
  'b2b website development nepal',
  'b2c website development nepal',
  'cms website nepal',
  'headless cms nepal',
  'strapi developer nepal',
  'sanity cms developer nepal',
  'contentful developer nepal',
  'wordpress woocommerce nepal',
  'elementor website nepal',
  'custom theme wordpress nepal',
  'custom plugin wordpress nepal',
  'nextjs ecommerce nepal',
  'react ecommerce nepal',
  'nodejs developer nepal',
  'nestjs developer nepal',
  'python django developer nepal',
  'laravel developer nepal',
  'golang developer nepal',
  'php developer nepal',
  'api development nepal',
  'graphql api nepal',
  'rest api nepal',
  'trpc developer nepal',
  'postgres developer nepal',
  'mysql developer nepal',
  'mongodb developer nepal',
  'prisma orm nepal',
  'drizzle orm nepal',
  'redis caching nepal',
  'edge functions nepal',
  'vercel deployment nepal',
  'aws hosting nepal',
  'cloudfront cdn nepal',
  'digitalocean droplet nepal',
  'docker devops nepal',
  'kubernetes devops nepal',
  'ci cd pipeline nepal',
  'github actions nepal',
  'monitoring and logging nepal',
  'sentry integration nepal',
  'ga4 setup nepal',
  'google tag manager nepal',
  'search console setup nepal',
  'hotjar analytics nepal',

  // Ecommerce specifics for Nepal
  'multi vendor marketplace nepal',
  'online payment nepal esewa khalti',
  'cod cash on delivery nepal',
  'logistics integration nepal',
  'daraz like website nepal',
  'pos integration nepal',
  'inventory management website nepal',
  'invoice billing nepali vat pan',
  'sms gateway nepal',
  'email marketing integration nepal',
  'subscription website nepal',
  'membership website nepal',
  'course lms website nepal',
  'job portal website nepal',
  'classifieds website nepal',

  // Brand + trust
  'app plex nepal',
  'appplex website company',
  'appplex software company nepal',
  'app plex kathmandu web design',
  'app plex ecommerce nepal',
  'app plex app development nepal',

  // Price intent + conversion
  'affordable website nepal',
  'cheap website nepal',
  'best price website nepal',
  'website package nepal',
  'custom quote website nepal',
  'free consultation website nepal',
  'hire web developer nepal',
  'hire app developer nepal',

  // Content & SEO services
  'technical seo audit nepal',
  'on page seo nepal',
  'local seo nepal',
  'google business profile nepal',
  'schema markup nepal',
  'content writing nepal',
  'blog writing nepal',
  'landing page design nepal',
  'conversion rate optimization nepal',
  'cro nepal',

  // Performance + security
  'website speed optimization nepal',
  'image optimization nepal',
  'cdn caching nepal',
  'ssl https setup nepal',
  'security hardening nepal',
  'waf ddos protection nepal',
  'backup and disaster recovery nepal',
  'maintenance amc nepal',
  'bug fixing website nepal',
  'migration to nextjs nepal',
  'wordpress to headless nepal',

  // Mobile
  'ios app development nepal',
  'android app development nepal',
  'react native developer nepal',
  'flutter developer nepal',
  'mobile ui ux design nepal',
  'app store launch support nepal',
  'play store launch support nepal',

  // Industries (Nepal-focused)
  'tourism website nepal',
  'trekking agency website nepal',
  'hotel booking website nepal',
  'restaurant online menu nepal',
  'retail ecommerce nepal',
  'fashion ecommerce nepal',
  'grocery delivery app nepal',
  'pharmacy ecommerce nepal',
  'health clinic website nepal',
  'education institute website nepal',
  'college website nepal',
  'school website nepal',
  'ngo ingo website nepal',
  'finance fintech app nepal',
  'cooperative website nepal',
  'banking portal nepal',
  'real estate listing nepal',
  'construction company website nepal',
  'event tickets website nepal',

  // Localization + content
  'nepali font website',
  'unicode nepali website',
  'bilingual nepali english website',
  'translation nepali website',
  'localization i18n nepal',

  // Marketing enablement
  'facebook pixel integration nepal',
  'tiktok pixel integration nepal',
  'remarketing tags nepal',
  'utm tracking nepal',

  // More long‑tail + supporting topics
  'headless wordpress nepal',
  'shopify headless nepal',
  'woocommerce performance nepal',
  'magento migration nepal',
  'cms migration nepal',
  'website audit nepal',
  'sitemap robots setup nepal',
  'structured data nepal',
  'rich results nepal',
  'open graph tags nepal',
  'twitter cards nepal',
  'newsletter integration nepal',
  'crm integration nepal',
  'erp integration nepal',
  'chatbot website nepal',
  'live chat website nepal',
  'whatsapp widget website nepal',
  'booking engine integration nepal',
  'map integration nepal',
  'google maps api nepal',
  'analytics dashboard nepal',
  'admin panel dashboard nepal',
  'role based access control nepal',
  'rbac nepal',
  'sso oauth nepal',
  'jwt auth nepal',
  'two factor authentication nepal',
  'gdpr compliant website nepal',
  'cookie consent nepal',
  'email smtp setup nepal',
  'server hardening nepal',
  'uptime monitoring nepal',
  'error tracking nepal',
  'api documentation nepal',
  'swagger openapi nepal',
  'microservices nepal',
  'monorepo turborepo nepal',
  'nx worksspace nepal',
  'tailwind css developer nepal',
  'typescript developer nepal',
  'storybook ui nepal',
  'component library nepal',
  'design system nepal',
  'brand identity nepal',
  'logo design nepal',
  'graphic design nepal',
  'brochure design nepal',
  'corporate website nepal',
  'startup website nepal',
  'enterprise software nepal',
  'saas product development nepal',
  'mvp development nepal',
  'prototype design nepal',
  'usability testing nepal',
  'a b testing nepal',
  'heatmaps analysis nepal',
  'keyword research nepal',
  'competitor analysis nepal',
  'backlink strategy nepal',
  'local citations nepal',
  'google reviews strategy nepal',
  'content strategy nepal',
  'editorial calendar nepal',
  'pillar page content nepal',
  'cluster content strategy nepal',
  'internal linking strategy nepal',
  'hreflang setup nepal',
];

export const metadata: Metadata = {
  title: {
    default: 'Website & App Development Company in Nepal - App Plex',
    template: '%s - App Plex Nepal',
  },
  description:
    'App Plex is a leading website, mobile app, and eCommerce development company in Nepal. We build fast, SEO-first, bilingual (English/Nepali) digital experiences with modern stacks like Next.js, React, Node, and WordPress. Based in Kathmandu, serving all of Nepal.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  applicationName: 'App Plex Nepal',
  category: 'technology',
  keywords: KEYWORDS,
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Top Website & App Development Company in Nepal - App Plex',
    description:
      'Web, app, and eCommerce solutions engineered for speed, SEO, and growth. Kathmandu-based, Nepal-focused.',
    url: '/',
    siteName: 'App Plex Nepal',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'App Plex Nepal' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website & App Development Company in Nepal - App Plex',
    description:
      'Nepal’s trusted partner for high-performance websites, apps, and eCommerce platforms.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'GOOGLE_SEARCH_CONSOLE_VERIFICATION_TOKEN', // replace with your token
    yandex: 'YANDEX_VERIFICATION',
    other: { 'facebook-domain-verification': 'FACEBOOK_VERIFICATION' },
  },
};

const LOCAL_BUSINESS_JSON = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'App Plex',
  image: `${SITE_URL}/appplexlogo.jpg`,
  url: `${SITE_URL}/`,
  telephone: '+977-98XXXXXXXX', // replace with your phone
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Your Address', // replace
    addressLocality: 'Kathmandu',
    postalCode: '44600',
    addressCountry: 'NP',
  },
  priceRange: 'NPR',
  areaServed: [
    'Nepal',
    'Kathmandu',
    'Lalitpur',
    'Bhaktapur',
    'Pokhara',
    'Biratnagar',
    'Butwal',
    'Chitwan',
    'Bharatpur',
  ],
  sameAs: [
    'https://www.facebook.com/yourpage',
    'https://www.linkedin.com/company/yourcompany',
    'https://www.instagram.com/yourhandle',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* LocalBusiness JSON-LD for Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON) }}
        />

        {/* Hide splash if JS is disabled */}
        <noscript>
          <style>{`#appplex-splash{display:none !important}`}</style>
        </noscript>

        {/* Fonts and Icons */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,500,0,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${roboto.variable} bg-gsurface-light dark:bg-gsurface-dark text-gray-900 dark:text-gray-100 font-sans antialiased selection:bg-gblue/20`}
      >
        <ThemeProvider>
          {/* Splash loader (first page load) */}
          <SplashScreen />

          <Header />
          <main className="pt-[64px] md:pt-[76px]">{children}</main>
          <Footer />
          <WhatsAppWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}