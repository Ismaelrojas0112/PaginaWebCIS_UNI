'use client';

import { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import type { Project, AIArea } from '@/types/project.types';
import { AREA_LABELS } from '@/types/project.types';

interface ProjectsGridProps {
  projects: Project[];
}

const ALL_AREAS: Array<{ key: AIArea | 'all'; label: string }> = [
  { key: 'all', label: 'Todos' },
  { key: 'nlp', label: 'NLP' },
  { key: 'computer-vision', label: 'Computer Vision' },
  { key: 'rl', label: 'Reinforcement Learning' },
  { key: 'mlops', label: 'MLOps' },
  { key: 'generative-ai', label: 'IA Generativa' },
];

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState<AIArea | 'all'>('all');
  const { ref, isVisible } = useScrollAnimation();

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.area === activeFilter);

  return (
    <div>
      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center" style={{ gap: '0.75rem', marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
        {ALL_AREAS.map((area) => (
          <button
            key={area.key}
            onClick={() => setActiveFilter(area.key)}
            className={cn(
              'px-5 py-2.5 rounded-[var(--radius-full)] text-sm font-medium',
              'border transition-all duration-[var(--transition-fast)] cursor-pointer',
              activeFilter === area.key
                ? 'bg-[var(--color-accent)] border-[var(--color-accent)] text-[var(--color-bg)] shadow-[0_0_20px_rgba(0,168,232,0.3)]'
                : 'bg-transparent border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
            )}
          >
            {area.label}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-gap-lg">
        {filtered.map((project, index) => (
          <div
            key={project.id}
            className={cn(
              'transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-[var(--color-text-muted)] text-lg">
            No hay proyectos en esta categoría aún.
          </p>
        </div>
      )}
    </div>
  );
}
