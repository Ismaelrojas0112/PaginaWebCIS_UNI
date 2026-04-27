import type { Project } from '@/types/project.types';

export const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'CIS-Chat: Asistente Académico con LLMs',
    description:
      'Chatbot basado en Large Language Models fine-tuneado con datos curriculares de la UNI. Permite a los estudiantes hacer preguntas sobre cursos, horarios y trámites académicos en lenguaje natural.',
    area: 'nlp',
    technologies: ['Python', 'LangChain', 'FastAPI', 'React', 'PostgreSQL'],
    status: 'in-progress',
    repoUrl: 'https://github.com/ieee-cis-uni/cis-chat',
    demoUrl: 'https://cis-chat.demo.com',
    publishedAt: '2026-03-15',
  },
  {
    id: '2',
    title: 'NeuroVision: Detección de Plagas Agrícolas',
    description:
      'Sistema de visión por computadora para la detección temprana de plagas en cultivos peruanos usando drones con cámaras multiespectrales. Alcanza 94% de precisión en campo.',
    area: 'computer-vision',
    technologies: ['Python', 'PyTorch', 'OpenCV', 'YOLOv8', 'Docker'],
    status: 'completed',
    repoUrl: 'https://github.com/ieee-cis-uni/neurovision',
    publishedAt: '2025-11-20',
  },
  {
    id: '3',
    title: 'TrafficRL: Optimización Semafórica con RL',
    description:
      'Agente de Reinforcement Learning que aprende a optimizar el flujo vehicular en intersecciones de Lima, reduciendo tiempos de espera hasta en un 30% en simulación.',
    area: 'rl',
    technologies: ['Python', 'Stable-Baselines3', 'SUMO', 'Gymnasium', 'TensorBoard'],
    status: 'in-progress',
    repoUrl: 'https://github.com/ieee-cis-uni/traffic-rl',
    publishedAt: '2026-01-10',
  },
  {
    id: '4',
    title: 'MLPipeline: Plataforma de Entrenamiento Distribuido',
    description:
      'Infraestructura automatizada para entrenar y desplegar modelos de ML a escala. Incluye versionado de datos, experimentos y monitoreo de modelos en producción.',
    area: 'mlops',
    technologies: ['Python', 'MLflow', 'Kubernetes', 'DVC', 'GitHub Actions'],
    status: 'completed',
    repoUrl: 'https://github.com/ieee-cis-uni/mlpipeline',
    publishedAt: '2025-09-05',
  },
  {
    id: '5',
    title: 'ArtifAI: Generador de Arte Peruano con Diffusion',
    description:
      'Modelo de difusión fine-tuneado con arte y textiles peruanos tradicionales. Genera interpretaciones artísticas que fusionan patrones ancestrales con estética contemporánea.',
    area: 'generative-ai',
    technologies: ['Python', 'Stable Diffusion', 'LoRA', 'Gradio', 'HuggingFace'],
    status: 'in-progress',
    demoUrl: 'https://artifai.demo.com',
    publishedAt: '2026-02-28',
  },
  {
    id: '6',
    title: 'SentimentUNI: Análisis de Opinión Estudiantil',
    description:
      'Herramienta de análisis de sentimiento sobre comentarios y encuestas estudiantiles de la UNI. Ayuda a identificar áreas de mejora institucional mediante NLP.',
    area: 'nlp',
    technologies: ['Python', 'Transformers', 'spaCy', 'Streamlit', 'MongoDB'],
    status: 'completed',
    repoUrl: 'https://github.com/ieee-cis-uni/sentiment-uni',
    publishedAt: '2025-07-15',
  },
];
