# 📘 Documentación Técnica — Sitio Web IEEE CIS UNI

> **Versión:** 1.0.0
> **Fecha:** Abril 2026
> **Organización:** IEEE Computational Intelligence Society — Capítulo Estudiantil UNI
> **Autor:** Equipo de Desarrollo IEEE CIS UNI

---

## Tabla de Contenidos

1. [Visión General del Proyecto](#1-visión-general-del-proyecto)
2. [Stack Tecnológico](#2-stack-tecnológico)
3. [Arquitectura del Proyecto](#3-arquitectura-del-proyecto)
4. [Estructura de Carpetas](#4-estructura-de-carpetas)
5. [Secciones y Páginas](#5-secciones-y-páginas)
6. [Integración con Payload CMS](#6-integración-con-payload-cms)
7. [Sistema de Diseño](#7-sistema-de-diseño)
8. [Convenciones y Buenas Prácticas](#8-convenciones-y-buenas-prácticas)
9. [Variables de Entorno](#9-variables-de-entorno)
10. [Scripts y Comandos](#10-scripts-y-comandos)
11. [Guía de Deployment](#11-guía-de-deployment)
12. [Roadmap](#12-roadmap)

---

## 1. Visión General del Proyecto

### Descripción

Sitio web oficial del **IEEE Computational Intelligence Society — Capítulo Estudiantil UNI**, una organización estudiantil orientada a la aplicación, difusión y estudio de la Inteligencia Artificial. El sitio busca ser una vitrina digital moderna, interactiva e innovadora que refleje la identidad tecnológica del grupo.

### Objetivos

- Presentar el grupo ante la comunidad académica y tech de forma profesional.
- Mostrar los proyectos de IA desarrollados por el capítulo.
- Publicar eventos y redirigir a las publicaciones de Instagram.
- Permitir que nuevos interesados conozcan al equipo y se unan fácilmente.
- Administrar contenido dinámico (miembros, proyectos, eventos) sin tocar código, usando un CMS headless.

### Audiencia Objetivo

- Estudiantes de la UNI y otras universidades interesados en IA.
- Profesionales del sector tecnológico.
- Potenciales patrocinadores y colaboradores institucionales.
- Comunidad IEEE local e internacional.

---

## 2. Stack Tecnológico

| Categoría               | Tecnología                        | Versión Recomendada | Justificación                                                                 |
|-------------------------|-----------------------------------|----------------------|-------------------------------------------------------------------------------|
| Framework               | **Next.js** (Page Router)         | `^14.x`              | SSR/SSG, SEO optimizado, routing robusto, gran ecosistema                    |
| Lenguaje                | **TypeScript**                    | `^5.x`               | Tipado estático, mejor DX, detección temprana de errores                      |
| Estilos                 | **Tailwind CSS**                  | `^3.x`               | Utility-first, altamente customizable, perfecto con shadcn/ui                 |
| Componentes UI          | **shadcn/ui** (sobre Radix UI)    | Latest               | Componentes accesibles, sin opinión de estilos, totalmente customizables      |
| CMS Headless            | **Payload CMS**                   | `^2.x`               | CMS autohospedado, API REST + GraphQL, admin UI auto-generado, tipado con TS  |
| Base de Datos           | **MongoDB**                       | `^7.x`               | Compatible nativo con Payload CMS, flexible para contenido dinámico           |
| ORM / DB Adapter        | **Mongoose** (via Payload)        | —                    | Incluido en Payload CMS                                                       |
| Animaciones             | **Framer Motion**                 | `^11.x`              | Animaciones declarativas en React, scroll-triggered, gestures                 |
| Iconos                  | **Lucide React**                  | Latest               | Set de iconos moderno y coherente, tree-shakeable                             |
| Fuentes                 | **next/font** + Google Fonts      | —                    | Optimización automática de fuentes, zero layout shift                         |
| Linting                 | **ESLint** + `eslint-config-next` | Latest               | Reglas específicas para Next.js                                               |
| Formateo                | **Prettier**                      | `^3.x`               | Formato consistente en todo el proyecto                                       |
| Control de versiones    | **Git** + GitHub                  | —                    | Flujo estándar con ramas por feature                                          |
| Deployment              | **Vercel** (frontend)             | —                    | Deploy automático desde GitHub, edge network, preview deployments             |
| Deployment CMS          | **Railway** o **Render**          | —                    | Payload CMS + MongoDB en servidor propio                                      |

---

## 3. Arquitectura del Proyecto

### Patrón: Clean Architecture adaptado a Next.js (Page Router)

Se aplica una separación clara de responsabilidades inspirada en Clean Architecture y los principios SOLID, adaptada al paradigma de Next.js con Page Router.

```
┌─────────────────────────────────────────────┐
│              PRESENTATION LAYER             │
│  pages/ · components/ui/ · components/      │
│  layout/ · hooks/                           │
├─────────────────────────────────────────────┤
│             APPLICATION LAYER               │
│  services/ · lib/ · utils/                  │
│  (lógica de negocio, fetch, transformación) │
├─────────────────────────────────────────────┤
│              DOMAIN LAYER                   │
│  types/ · constants/ · config/              │
│  (entidades, interfaces, contratos)         │
├─────────────────────────────────────────────┤
│           INFRASTRUCTURE LAYER              │
│  Payload CMS API · MongoDB · Instagram API  │
│  (acceso a datos externos)                  │
└─────────────────────────────────────────────┘
```

### Principios aplicados

- **Single Responsibility**: Cada componente hace una sola cosa.
- **Separation of Concerns**: UI separada de lógica de negocio y acceso a datos.
- **DRY (Don't Repeat Yourself)**: Hooks personalizados para lógica reutilizable.
- **Composición sobre herencia**: Componentes compuestos, no monolíticos.
- **Tipado estricto**: Interfaces TypeScript para todas las entidades del dominio.

---

## 4. Estructura de Carpetas

```
ieee-cis-uni/
├── .env.local                    # Variables de entorno locales (no commitear)
├── .env.example                  # Plantilla de variables de entorno
├── .eslintrc.json
├── .prettierrc
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
│
├── public/
│   ├── assets/
│   │   ├── images/               # Imágenes estáticas (logo, og-image, etc.)
│   │   └── icons/                # SVGs del capítulo
│   └── favicon.ico
│
├── src/
│   ├── pages/                    # Page Router de Next.js
│   │   ├── _app.tsx              # Provider global, layout principal
│   │   ├── _document.tsx         # HTML base, fuentes, meta
│   │   ├── index.tsx             # Home: Hero + About + Contact
│   │   ├── members.tsx           # Página de Miembros
│   │   ├── projects.tsx          # Página de Proyectos de IA
│   │   ├── events.tsx            # Página de Eventos
│   │   └── api/                  # API Routes de Next.js (si se necesitan)
│   │       └── revalidate.ts     # Webhook para ISR desde Payload CMS
│   │
│   ├── components/
│   │   ├── layout/               # Estructura global
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── PageWrapper.tsx
│   │   │
│   │   ├── sections/             # Secciones completas de cada página
│   │   │   ├── home/
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   ├── AboutSection.tsx
│   │   │   │   └── ContactSection.tsx
│   │   │   ├── members/
│   │   │   │   ├── MembersGrid.tsx
│   │   │   │   └── MemberCard.tsx
│   │   │   ├── projects/
│   │   │   │   ├── ProjectsGrid.tsx
│   │   │   │   └── ProjectCard.tsx
│   │   │   └── events/
│   │   │       ├── EventsSection.tsx
│   │   │       └── InstagramFeed.tsx
│   │   │
│   │   └── ui/                   # Átomos reutilizables (shadcn/ui + custom)
│   │       ├── Button.tsx
│   │       ├── Badge.tsx
│   │       ├── Card.tsx
│   │       ├── Avatar.tsx
│   │       └── SectionTitle.tsx
│   │
│   ├── hooks/                    # Custom React Hooks
│   │   ├── useMembers.ts
│   │   ├── useProjects.ts
│   │   ├── useEvents.ts
│   │   └── useScrollAnimation.ts
│   │
│   ├── services/                 # Capa de acceso a datos (Payload CMS API)
│   │   ├── members.service.ts
│   │   ├── projects.service.ts
│   │   └── events.service.ts
│   │
│   ├── lib/                      # Utilidades y configuración de librerías
│   │   ├── payloadClient.ts      # Cliente HTTP para Payload CMS
│   │   └── fonts.ts              # Configuración de next/font
│   │
│   ├── types/                    # Interfaces y tipos TypeScript (dominio)
│   │   ├── member.types.ts
│   │   ├── project.types.ts
│   │   ├── event.types.ts
│   │   └── api.types.ts
│   │
│   ├── constants/                # Constantes globales
│   │   ├── routes.ts
│   │   ├── links.ts              # URLs externas (Instagram, Linktree, etc.)
│   │   └── seo.ts                # Metadatos por defecto
│   │
│   └── styles/
│       └── globals.css           # Tailwind directives + CSS variables
│
└── payload/                      # Payload CMS (puede ser repo separado)
    ├── payload.config.ts
    └── collections/
        ├── Members.ts
        ├── Projects.ts
        └── Events.ts
```

---

## 5. Secciones y Páginas

### 5.1 Página de Inicio — `/`

Ruta: `src/pages/index.tsx`

Contiene tres secciones principales renderizadas en secuencia:

#### `HeroSection`
- Nombre completo del capítulo con animación de entrada.
- Tagline de IA / identidad del grupo.
- CTA principal: **"Únete ahora"** → redirige al Linktree (abre en nueva pestaña).
- Fondo con efecto visual (partículas, gradiente animado o noise texture).

#### `AboutSection`
- Misión y visión del capítulo.
- Valores clave (Innovación, Comunidad, IA aplicada).
- Estadísticas numéricas animadas (número de miembros, proyectos, eventos realizados).
- Imagen/ilustración representativa del grupo.

#### `ContactSection`
- Formulario de contacto funcional (nombre, email, mensaje).
- Información de contacto: correo oficial IEEE CIS UNI.
- Links a redes sociales con íconos (Instagram, LinkedIn, GitHub, etc.).
- Mapa o ubicación de la UNI (opcional).

---

### 5.2 Página de Miembros — `/members`

Ruta: `src/pages/members.tsx`

Datos gestionados desde **Payload CMS**.

#### Estructura
- Header de sección con título y descripción.
- Miembros destacados en cards individuales con:
  - Foto de perfil.
  - Nombre completo.
  - Rol/cargo (Presidente, Vicepresidente, Director de Área, Voluntario, etc.).
  - Área de especialización (NLP, Computer Vision, MLOps, etc.).
  - Links a LinkedIn / GitHub (opcional).
- Filtros por rol o área (futuro).
- Jerarquía visual clara: Directiva → Directores de área → Voluntarios.

#### Tipos TypeScript
```typescript
// src/types/member.types.ts
export type MemberRole =
  | 'president'
  | 'vice-president'
  | 'area-director'
  | 'volunteer';

export interface Member {
  id: string;
  fullName: string;
  role: MemberRole;
  area: string;
  bio?: string;
  photoUrl: string;
  linkedinUrl?: string;
  githubUrl?: string;
  order: number;
}
```

---

### 5.3 Página de Proyectos — `/projects`

Ruta: `src/pages/projects.tsx`

Datos gestionados desde **Payload CMS**.

#### Estructura
- Grid de cards de proyectos con:
  - Título del proyecto.
  - Descripción breve.
  - Tecnologías usadas (badges: Python, TensorFlow, OpenCV, etc.).
  - Imagen representativa.
  - Link al repositorio o demo (si aplica).
  - Estado: En progreso / Completado.
- Filtros por área de IA (NLP, CV, RL, etc.).

#### Tipos TypeScript
```typescript
// src/types/project.types.ts
export type ProjectStatus = 'in-progress' | 'completed' | 'archived';
export type AIArea = 'nlp' | 'computer-vision' | 'rl' | 'mlops' | 'generative-ai' | 'other';

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
```

---

### 5.4 Página de Eventos — `/events`

Ruta: `src/pages/events.tsx`

Integración con **Instagram** para mostrar las últimas 3 publicaciones del capítulo.

#### Estrategia de integración con Instagram
Dado que Instagram Graph API requiere autenticación OAuth y tokens de larga duración, se recomienda:

**Opción A (Recomendada — Administrada desde CMS):**  
Los links y thumbnails de los últimos 3 posts de Instagram se gestionan manualmente desde **Payload CMS**. Un admin sube la imagen y el link del post. Esto evita complejidad de OAuth y no depende de la API de Meta.

**Opción B (Automática — Avanzada):**  
Usar **Instagram Basic Display API** con un token de larga duración (60 días). Se llama desde `getStaticProps` con ISR y se revalida cada 24h.

#### Estructura de la sección
- Título: "Últimos Eventos".
- 3 cards de Instagram con:
  - Thumbnail de la publicación.
  - Caption breve.
  - Botón "Ver en Instagram" → abre post original en Instagram.
- Botón principal: "Ver todos en Instagram" → abre perfil oficial de Instagram.
- Sección de próximos eventos (administrada desde CMS): título, fecha, descripción, link.

#### Tipos TypeScript
```typescript
// src/types/event.types.ts
export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption?: string;
  postUrl: string;
  publishedAt: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location?: string;
  imageUrl?: string;
  registrationUrl?: string;
  instagramPostUrl?: string;
}
```

---

### 5.5 Header Global

Componente: `src/components/layout/Header.tsx`

- Logo del capítulo IEEE CIS UNI.
- Navegación principal: Inicio · Miembros · Proyectos · Eventos.
- **Botón "Únete ahora"** (CTA): abre Linktree en nueva pestaña.
- Comportamiento sticky con fondo semi-transparente al hacer scroll (backdrop-blur).
- Menú hamburguesa en mobile (usando shadcn/ui `Sheet`).

---

## 6. Integración con Payload CMS

### ¿Por qué Payload CMS?

- **Autohospedado**: Control total de los datos (sin vendor lock-in).
- **TypeScript nativo**: Las colecciones se definen con tipos, generando tipado automático para la API.
- **Admin UI automático**: Panel de administración sin configuración adicional.
- **API REST + GraphQL**: Consumo flexible desde Next.js.
- **ISR compatible**: Webhooks para revalidar páginas estáticas al actualizar contenido.

### Colecciones definidas

```typescript
// payload/collections/Members.ts
import { CollectionConfig } from 'payload/types';

const Members: CollectionConfig = {
  slug: 'members',
  admin: { useAsTitle: 'fullName' },
  fields: [
    { name: 'fullName', type: 'text', required: true },
    { name: 'role', type: 'select', required: true,
      options: ['president','vice-president','area-director','volunteer'] },
    { name: 'area', type: 'text', required: true },
    { name: 'bio', type: 'textarea' },
    { name: 'photo', type: 'upload', relationTo: 'media', required: true },
    { name: 'linkedinUrl', type: 'text' },
    { name: 'githubUrl', type: 'text' },
    { name: 'order', type: 'number', defaultValue: 99 },
  ],
};
export default Members;
```

```typescript
// payload/collections/Projects.ts
import { CollectionConfig } from 'payload/types';

const Projects: CollectionConfig = {
  slug: 'projects',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'textarea', required: true },
    { name: 'area', type: 'select',
      options: ['nlp','computer-vision','rl','mlops','generative-ai','other'] },
    { name: 'technologies', type: 'array',
      fields: [{ name: 'name', type: 'text' }] },
    { name: 'status', type: 'select',
      options: ['in-progress','completed','archived'] },
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'repoUrl', type: 'text' },
    { name: 'demoUrl', type: 'text' },
  ],
};
export default Projects;
```

```typescript
// payload/collections/Events.ts
import { CollectionConfig } from 'payload/types';

const Events: CollectionConfig = {
  slug: 'events',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'textarea', required: true },
    { name: 'date', type: 'date', required: true },
    { name: 'location', type: 'text' },
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'registrationUrl', type: 'text' },
    { name: 'instagramPostUrl', type: 'text' },
    // Para los últimos 3 posts de Instagram (gestionados manualmente)
    { name: 'isInstagramHighlight', type: 'checkbox', defaultValue: false },
    { name: 'instagramThumbnailUrl', type: 'text' },
  ],
};
export default Events;
```

### Servicio de acceso a datos

```typescript
// src/services/members.service.ts
import { payloadClient } from '@/lib/payloadClient';
import { Member } from '@/types/member.types';

export async function getAllMembers(): Promise<Member[]> {
  const res = await payloadClient.get('/api/members?sort=order&limit=100');
  return res.data.docs as Member[];
}
```

### Revalidación con ISR (Incremental Static Regeneration)

```typescript
// src/pages/api/revalidate.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.headers['x-revalidate-secret'] !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  const { collection } = req.body;
  const pathMap: Record<string, string> = {
    members: '/members',
    projects: '/projects',
    events: '/events',
  };

  const path = pathMap[collection];
  if (!path) return res.status(400).json({ message: 'Unknown collection' });

  await res.revalidate(path);
  return res.json({ revalidated: true });
}
```

> Este webhook se configura en Payload CMS → Settings → Webhooks, apuntando a `/api/revalidate`.

---

## 7. Sistema de Diseño

### Paleta de Colores (Tailwind + CSS Variables)

```css
/* src/styles/globals.css */
:root {
  --color-primary: #00629B;       /* IEEE Blue */
  --color-primary-light: #0086D6;
  --color-accent: #00A8E8;        /* CIS Electric Blue */
  --color-accent-glow: #00D4FF;
  --color-bg: #050B18;            /* Dark Navy */
  --color-bg-card: #0D1A2E;
  --color-text: #E8F1FF;
  --color-text-muted: #7BA3C8;
  --color-border: #1A3A5C;
}
```

### Tipografía

```typescript
// src/lib/fonts.ts
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';

export const displayFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
});

export const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
});
```

> **Nota:** Ajustar la elección de fuentes según identidad visual final del capítulo.

### Componentes shadcn/ui Utilizados

| Componente         | Uso                                              |
|--------------------|--------------------------------------------------|
| `Button`           | CTAs, formularios                                |
| `Card`             | Miembros, Proyectos, Eventos                     |
| `Badge`            | Tecnologías, roles, estados de proyectos         |
| `Avatar`           | Fotos de miembros                                |
| `Sheet`            | Menú mobile (hamburguesa)                        |
| `Separator`        | Separadores visuales entre secciones             |
| `Input` / `Textarea` | Formulario de contacto                         |
| `Tooltip`          | Info adicional en íconos                         |
| `Dialog`           | Modal de detalle de miembro o proyecto           |

### Animaciones con Framer Motion

```typescript
// Ejemplo: Aparición con stagger para grids
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
```

---

## 8. Convenciones y Buenas Prácticas

### Nomenclatura

| Elemento            | Convención             | Ejemplo                         |
|---------------------|------------------------|---------------------------------|
| Componentes React   | PascalCase             | `MemberCard.tsx`                |
| Hooks               | camelCase con `use`    | `useMembers.ts`                 |
| Servicios           | camelCase + `.service` | `members.service.ts`            |
| Tipos/Interfaces    | PascalCase             | `Member`, `Project`             |
| Constantes          | UPPER_SNAKE_CASE       | `LINKTREE_URL`                  |
| Páginas (Next.js)   | kebab-case (archivo)   | `members.tsx`, `projects.tsx`   |
| Variables CSS       | kebab-case             | `--color-primary`               |

### Reglas de Componentes React

- **Un componente = un archivo**.
- Props tipadas con `interface` TypeScript (no `type` para props de componentes).
- Usar `React.FC` o tipado explícito de retorno.
- Evitar lógica compleja dentro del JSX; extraer a funciones con nombre semántico.
- Exportaciones nombradas para componentes de UI; default export para páginas.

```typescript
// ✅ Correcto
interface MemberCardProps {
  member: Member;
  isHighlighted?: boolean;
}

export const MemberCard: React.FC<MemberCardProps> = ({ member, isHighlighted = false }) => {
  // ...
};

// ❌ Incorrecto — inline logic difícil de leer
export default ({ member }: { member: any }) => <div>{member.fullName.split(' ').map(...)}</div>;
```

### Fetching de Datos (Page Router)

- `getStaticProps` para contenido que cambia poco (miembros, proyectos).
- `revalidate: 60` (ISR) para actualizar automáticamente cada minuto.
- `getServerSideProps` solo si el dato es dinámico en tiempo real.
- Los servicios (`members.service.ts`) encapsulan el fetch; las páginas solo los llaman.

```typescript
// pages/members.tsx
export const getStaticProps: GetStaticProps<MembersPageProps> = async () => {
  const members = await getAllMembers();
  return {
    props: { members },
    revalidate: 60,
  };
};
```

### Gestión de Errores

- Envolver llamadas a API en `try/catch`.
- Páginas con `fallback: 'blocking'` si usan rutas dinámicas.
- Componentes de error boundary para secciones críticas.

---

## 9. Variables de Entorno

```bash
# .env.example

# URL del servidor de Payload CMS
PAYLOAD_CMS_URL=https://cms.ieeecisuni.com

# Secret compartido para revalidación de ISR
REVALIDATE_SECRET=tu_secret_aleatorio_aqui

# (Opcional) Instagram Basic Display API
INSTAGRAM_ACCESS_TOKEN=
INSTAGRAM_USER_ID=

# URL pública del sitio (para SEO y OG)
NEXT_PUBLIC_SITE_URL=https://ieeecisuni.com
```

---

## 10. Scripts y Comandos

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm start

# Lint
npm run lint

# Formateo con Prettier
npm run format

# Inicializar Payload CMS (primer uso)
cd payload && npm run dev
```

### Instalación de shadcn/ui

```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card badge avatar sheet separator input textarea tooltip dialog
```

---

## 11. Guía de Deployment

### Frontend — Vercel

1. Conectar repositorio de GitHub a Vercel.
2. Configurar variables de entorno en Vercel Dashboard.
3. Framework preset: **Next.js**.
4. Deploy automático en cada push a `main`.
5. Preview deployments en pull requests.

### Payload CMS — Railway

1. Crear nuevo proyecto en [Railway.app](https://railway.app).
2. Agregar servicio de **MongoDB** desde Railway templates.
3. Deploy del repositorio de Payload CMS.
4. Configurar variables de entorno: `MONGODB_URI`, `PAYLOAD_SECRET`.
5. Configurar dominio personalizado: `cms.ieeecisuni.com`.

### Flujo de Actualización de Contenido (Equipo no técnico)

```
Admin actualiza miembro/proyecto en Payload CMS admin UI
            ↓
Payload CMS dispara webhook a Vercel API Route (/api/revalidate)
            ↓
Next.js revalida la página correspondiente (ISR)
            ↓
Sitio web actualizado sin redeploy completo (< 5 segundos)
```

---

## 12. Roadmap

### v1.0 — MVP (Lanzamiento inicial)
- [x] Definición de arquitectura y tecnologías
- [ ] Setup del proyecto Next.js + TypeScript + Tailwind + shadcn/ui
- [ ] Setup de Payload CMS + colecciones base
- [ ] Página de Inicio (Hero + About + Contact)
- [ ] Página de Miembros
- [ ] Página de Proyectos
- [ ] Página de Eventos (links manuales de Instagram desde CMS)
- [ ] Header con navegación y botón "Únete ahora"
- [ ] Footer con redes sociales
- [ ] SEO básico (meta tags, OG image)
- [ ] Deploy en Vercel + Railway

### v1.1 — Mejoras Post-Lanzamiento
- [ ] Animaciones avanzadas con Framer Motion
- [ ] Modo claro/oscuro
- [ ] Formulario de contacto funcional (EmailJS o Resend)
- [ ] Filtros en Proyectos y Miembros
- [ ] PWA básico (manifest + service worker)
- [ ] Analytics (Vercel Analytics o Umami)

### v2.0 — Funcionalidades Avanzadas
- [ ] Integración automática con Instagram Graph API
- [ ] Blog/Artículos sobre IA (gestionado desde Payload CMS)
- [ ] Sistema de registro a eventos
- [ ] Internacionalización (español/inglés)
- [ ] Tests unitarios con Vitest + React Testing Library

---

## Contacto del Equipo de Desarrollo

| Rol              | Responsabilidad                                |
|------------------|------------------------------------------------|
| Tech Lead        | Arquitectura, revisión de PRs, deployment      |
| Frontend Dev     | Componentes, páginas, animaciones              |
| CMS Admin        | Configuración y mantenimiento de Payload CMS   |
| Diseño UI/UX     | Sistema de diseño, identidad visual            |

---

*Documentación generada en Abril 2026 · IEEE CIS UNI · Todos los derechos reservados*