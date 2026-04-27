import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ieeecisuni.com';

export const DEFAULT_METADATA: Metadata = {
  title: {
    default: 'IEEE CIS UNI — Computational Intelligence Society',
    template: '%s | IEEE CIS UNI',
  },
  description:
    'Capítulo estudiantil de la IEEE Computational Intelligence Society en la Universidad Nacional de Ingeniería. Inteligencia Artificial, Machine Learning y más.',
  keywords: [
    'IEEE', 'CIS', 'UNI', 'Inteligencia Artificial', 'Machine Learning',
    'Deep Learning', 'NLP', 'Computer Vision', 'Universidad Nacional de Ingeniería',
    'Lima', 'Perú', 'Estudiantes', 'IA',
  ],
  authors: [{ name: 'IEEE CIS UNI' }],
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: SITE_URL,
    siteName: 'IEEE CIS UNI',
    title: 'IEEE CIS UNI — Computational Intelligence Society',
    description:
      'Capítulo estudiantil de la IEEE Computational Intelligence Society en la Universidad Nacional de Ingeniería.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IEEE CIS UNI',
    description: 'Capítulo estudiantil IEEE CIS — Universidad Nacional de Ingeniería',
  },
  metadataBase: new URL(SITE_URL),
};
