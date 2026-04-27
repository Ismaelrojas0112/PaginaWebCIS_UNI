import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ExternalLink, Code2, Clock, CheckCircle } from 'lucide-react';
import type { Project } from '@/types/project.types';
import { STATUS_LABELS, AREA_LABELS } from '@/types/project.types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const statusIcon = project.status === 'completed' ? CheckCircle : Clock;
  const StatusIcon = statusIcon;

  return (
    <Card padding="none" className="flex flex-col h-full">
      {/* Image area */}
      <div className="relative h-56 bg-gradient-to-br from-[var(--color-bg-elevated)] to-[var(--color-bg-card)] overflow-hidden">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl opacity-10">🧠</div>
          </div>
        )}
        {/* Area badge overlay */}
        <div className="absolute top-3 left-3">
          <Badge variant="default">{AREA_LABELS[project.area]}</Badge>
        </div>
        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <Badge variant={project.status === 'completed' ? 'success' : 'warning'}>
            <StatusIcon className="w-3 h-3 mr-1" />
            {STATUS_LABELS[project.status]}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-7">
        <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2 line-clamp-2">
          {project.title}
        </h3>

        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="outline" className="text-[10px]">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
            >
              <Code2 className="w-4 h-4" />
              Repositorio
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
