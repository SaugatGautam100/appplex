import './globals.css';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget'; // <-- 1. IMPORT THE WIDGET

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
});

export const metadata = {
  title: 'App Plex — Classy Google-style',
  description: 'Building digital experiences that inspire. Web, mobile, and eCommerce development with world-class design.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* ... <head> section ... */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,500,0,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${roboto.variable} bg-gsurface-light dark:bg-gsurface-dark text-gray-900 dark:text-gray-100 font-sans antialiased selection:bg-gblue/20`}>
        <ThemeProvider>
          <Header />
          <main className="pt-[64px] md:pt-[76px]">
            {children}
          </main>
          <Footer />
          <WhatsAppWidget /> {/* <-- 2. ADD THE WIDGET COMPONENT HERE */}
        </ThemeProvider>
      </body>
    </html>
  );
}