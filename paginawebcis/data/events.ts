import type { Event, InstagramPost } from '@/types/event.types';

export const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Workshop: Introducción a LangChain y RAG',
    description:
      'Taller práctico de 3 horas sobre Retrieval Augmented Generation con LangChain. Construye tu propio chatbot que responde preguntas sobre documentos PDF.',
    date: '2026-05-15',
    location: 'Auditorio FIIS — UNI',
    registrationUrl: 'https://linktr.ee/ieeecisuni',
    isUpcoming: true,
  },
  {
    id: '2',
    title: 'Hackathon: AI for Social Good 2026',
    description:
      'Hackathon de 24 horas donde equipos multidisciplinarios desarrollan soluciones de IA para problemas sociales en Perú. Premios para los 3 mejores proyectos.',
    date: '2026-06-08',
    location: 'Campus UNI — Rímac',
    registrationUrl: 'https://linktr.ee/ieeecisuni',
    isUpcoming: true,
  },
  {
    id: '3',
    title: 'Conferencia: El Futuro de la IA en Latinoamérica',
    description:
      'Panel con expertos de Google, Meta y startups locales discutiendo oportunidades y desafíos de la IA en la región. Ponentes internacionales.',
    date: '2026-07-20',
    location: 'Auditorio Central — UNI',
    registrationUrl: 'https://linktr.ee/ieeecisuni',
    isUpcoming: true,
  },
  {
    id: '4',
    title: 'Workshop: Computer Vision con PyTorch',
    description:
      'Sesión práctica de clasificación y detección de objetos usando PyTorch y transfer learning. Incluye proyecto final con datos propios.',
    date: '2026-03-20',
    location: 'Lab. Cómputo FIIS — UNI',
    instagramPostUrl: 'https://instagram.com/p/example1',
    isUpcoming: false,
  },
  {
    id: '5',
    title: 'Seminario: MLOps — Del Notebook a Producción',
    description:
      'Charla sobre buenas prácticas para llevar modelos de ML a producción: Docker, CI/CD, monitoreo y versionado de modelos.',
    date: '2026-02-10',
    location: 'Virtual — Zoom',
    instagramPostUrl: 'https://instagram.com/p/example2',
    isUpcoming: false,
  },
  {
    id: '6',
    title: 'Meetup: AI Paper Reading Club — Sesión 5',
    description:
      'Lectura y discusión grupal del paper "Attention Is All You Need". Análisis de la arquitectura Transformer y su impacto en el campo.',
    date: '2026-01-25',
    location: 'Biblioteca Central — UNI',
    isUpcoming: false,
  },
];

export const MOCK_INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig1',
    imageUrl: '/assets/ig-placeholder-1.jpg',
    caption: '🔥 Increíble sesión de nuestro Workshop de Computer Vision con PyTorch. ¡Más de 40 asistentes! #IEEECISUNI #AI',
    postUrl: 'https://instagram.com/p/example1',
    publishedAt: '2026-03-21',
  },
  {
    id: 'ig2',
    imageUrl: '/assets/ig-placeholder-2.jpg',
    caption: '🚀 Nuestro equipo presentó NeuroVision en la feria de proyectos de la UNI. ¡Detección de plagas con drones! #ComputerVision',
    postUrl: 'https://instagram.com/p/example2',
    publishedAt: '2026-03-10',
  },
  {
    id: 'ig3',
    imageUrl: '/assets/ig-placeholder-3.jpg',
    caption: '📚 Paper Reading Club — Sesión sobre Transformers. Grandes debates sobre el futuro de la atención multi-cabeza. #DeepLearning',
    postUrl: 'https://instagram.com/p/example3',
    publishedAt: '2026-02-26',
  },
];
