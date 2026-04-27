'use client';

import { Lightbulb, Users, Cpu, Brain, Rocket, Target } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';
import { cn } from '@/lib/utils';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovación',
    description: 'Exploramos las fronteras de la IA con proyectos reales que resuelven problemas del mundo actual.',
  },
  {
    icon: Users,
    title: 'Comunidad',
    description: 'Construcción colectiva del conocimiento en un ambiente colaborativo e inclusivo.',
  },
  {
    icon: Cpu,
    title: 'IA Aplicada',
    description: 'Del paper a la producción. Implementamos soluciones con impacto real para Perú y el mundo.',
  },
];

function StatCard({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { ref, displayValue, isVisible } = useCountUp({ end, suffix });

  return (
    <div
      ref={ref}
      className={cn(
        'text-center p-8 md:p-10 rounded-[var(--radius-xl)]',
        'bg-[rgba(0,168,232,0.04)] border border-[var(--color-border)]',
        'transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      )}
    >
      <div className="text-4xl md:text-5xl font-bold gradient-text">{displayValue}</div>
      <div className="mt-2 text-sm text-[var(--color-text-secondary)]">{label}</div>
    </div>
  );
}

export function AboutSection() {
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();

  return (
    <section id="about" className="relative section-spacing neural-bg">
      <div className="section-container">
        <SectionTitle
          title="¿Quiénes Somos?"
          subtitle="Somos un grupo de estudiantes de la UNI apasionados por la Inteligencia Artificial. Investigamos, aprendemos y creamos juntos."
        />

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 grid-gap-lg group-spacing">
          <Card variant="featured" padding="lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-[var(--radius-md)] bg-[rgba(0,168,232,0.1)]">
                <Target className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text)]">Misión</h3>
            </div>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Fomentar el estudio, la investigación y la aplicación de la Inteligencia Computacional
              entre los estudiantes de la UNI, generando un espacio de aprendizaje colaborativo y
              desarrollo de proyectos con impacto real.
            </p>
          </Card>

          <Card variant="featured" padding="lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-[var(--radius-md)] bg-[rgba(0,168,232,0.1)]">
                <Rocket className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text)]">Visión</h3>
            </div>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Ser el capítulo estudiantil líder en IA en Latinoamérica, reconocido por la calidad
              de sus proyectos, eventos y la comunidad de talento que forma.
            </p>
          </Card>
        </div>

        {/* Values */}
        <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-3 grid-gap-lg group-spacing">
          {values.map((value, index) => (
            <Card
              key={value.title}
              padding="lg"
              className={cn(
                'transition-all duration-700',
                valuesVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8',
              )}
              style={{ transitionDelay: `${index * 150}ms` } as React.CSSProperties}
            >
              <div className="p-3 rounded-[var(--radius-lg)] bg-[rgba(0,168,232,0.08)] w-fit mb-4">
                <value.icon className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-gap-lg">
          <StatCard end={30} suffix="+" label="Miembros Activos" />
          <StatCard end={6} suffix="" label="Proyectos de IA" />
          <StatCard end={15} suffix="+" label="Eventos Realizados" />
          <StatCard end={4} suffix="" label="Áreas de Investigación" />
        </div>
      </div>
    </section>
  );
}
