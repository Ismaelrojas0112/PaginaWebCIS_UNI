export type ProjectStatus = 'in-progress' | 'completed' | 'archived';
export type AIArea = 'nlp' | 'computer-vision' | 'rl' | 'mlops' | 'generative-ai' | 'other';

export const STATUS_LABELS: Record<ProjectStatus, string> = {
  'in-progress': 'En Progreso',
  'completed': 'Completado',
  'archived': 'Archivado',
};

export const AREA_LABELS: Record<AIArea, string> = {
  'nlp': 'NLP',
  'computer-vision': 'Computer Vision',
  'rl': 'Reinforcement Learning',
  'mlops': 'MLOps',
  'generative-ai': 'IA Generativa',
  'other': 'Otro',
};

export interface Project {
  id: string;
  title: string;
  description: string;
  area: AIArea;
  technologies: string[];
  status: ProjectStatus;
  imageUrl?: string;
  repoUrl?: string;
  demoUrl?: string;
  publishedAt: string;
}
