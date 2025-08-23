import { Metadata } from 'next';

export const metadata: Metadata = {
  // Title Tag: The most important SEO tag.
  title: {
    default: 'Website & App Development Company in Nepal - App Plex',
    template: '%s - App Plex Nepal',
  },
  // Description: The snippet shown in Google search results.
  description: 'App Plex is a top-rated website and mobile app development company in Nepal. We build high-performance web, mobile, and e-commerce solutions with world-class design for businesses in Kathmandu and beyond.',
  // Keywords: While less important now, it's still good practice.
  keywords: [
    'website development company in Nepal',
    'app development Nepal',
    'web design Kathmandu',
    'ecommerce website Nepal',
    'software company in Nepal',
    'IT company in Nepal',
    'mobile app price in Nepal',
  ],
  // Canonical URL and Open Graph for social sharing
  metadataBase: new URL('https://www.your-app-plex-domain.com'), // <-- IMPORTANT: Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Top Website & App Development Company in Nepal - App Plex',
    description: 'Expert web, mobile, and e-commerce solutions from App Plex, a leading software company in Kathmandu, Nepal.',
    url: '/',
    siteName: 'App Plex Nepal',
    images: [
      {
        url: '/og-image.jpg', // Create an engaging image (1200x630px) and place it in your /public folder
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};