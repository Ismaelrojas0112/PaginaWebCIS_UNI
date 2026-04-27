'use client';

import { EventCard } from './EventCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import type { Event } from '@/types/event.types';

interface EventsSectionProps {
  events: Event[];
  title: string;
  subtitle?: string;
}

export function EventsSection({ events, title, subtitle }: EventsSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className="group-spacing">
      <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
        <h3 className="text-2xl font-semibold text-[var(--color-text)]">{title}</h3>
        {subtitle && (
          <p className="text-sm text-[var(--color-text-muted)] mt-2">{subtitle}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-gap-lg">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={cn(
              'transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <EventCard event={event} />
          </div>
        ))}
      </div>

      {events.length === 0 && (
        <div className="text-center py-12">
          <p className="text-[var(--color-text-muted)]">No hay eventos disponibles.</p>
        </div>
      )}
    </div>
  );
}
