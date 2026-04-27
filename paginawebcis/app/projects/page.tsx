import type { Metadata } from 'next';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ProjectsGrid } from '@/components/sections/projects/ProjectsGrid';
import { MOCK_PROJECTS } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Descubre los proyectos de Inteligencia Artificial desarrollados por el capítulo IEEE CIS UNI.',
};

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <section className="section-spacing neural-bg">
        <div className="section-container">
          <SectionTitle
            title="Nuestros Proyectos"
            subtitle="Investigación y desarrollo en las fronteras de la Inteligencia Artificial. Del paper a la implementación."
          />
          <ProjectsGrid projects={MOCK_PROJECTS} />
        </div>
      </section>
    </PageWrapper>
  );
}
