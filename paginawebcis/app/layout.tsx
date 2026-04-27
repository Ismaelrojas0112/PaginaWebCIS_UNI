import type { Metadata } from 'next';
import { Outfit, IBM_Plex_Sans } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'IEEE CIS UNI — Computational Intelligence Society',
    template: '%s | IEEE CIS UNI',
  },
  description:
    'Capítulo estudiantil de la IEEE Computational Intelligence Society en la Universidad Nacional de Ingeniería. Inteligencia Artificial, Machine Learning y más.',
  keywords: [
    'IEEE', 'CIS', 'UNI', 'Inteligencia Artificial', 'Machine Learning',
    'Deep Learning', 'NLP', 'Computer Vision', 'Universidad Nacional de Ingeniería',
  ],
};

import { ThemeProvider } from '@/components/theme/ThemeProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${ibmPlexSans.variable} antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-500 ease-out"
        style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}
      >
        <ThemeProvider>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
