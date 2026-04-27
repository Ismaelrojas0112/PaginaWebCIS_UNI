'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MemberCard } from './MemberCard';
import { cn } from '@/lib/utils';
import type { Member } from '@/types/member.types';

interface MembersGridProps {
  members: Member[];
}

export function MembersGrid({ members }: MembersGridProps) {
  const directive = members.filter((m) => m.role === 'president' || m.role === 'vice-president');
  const directors = members.filter((m) => m.role === 'area-director');
  const volunteers = members.filter((m) => m.role === 'volunteer');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4rem, 8vw, 6rem)' }}>
      {/* Directive */}
      {directive.length > 0 && (
        <MemberGroup
          title="Directiva"
          subtitle="Liderazgo del capítulo"
          members={directive}
          featured
          columns="md:grid-cols-2"
        />
      )}

      {/* Area Directors */}
      {directors.length > 0 && (
        <MemberGroup
          title="Directores de Área"
          subtitle="Líderes de cada área de investigación"
          members={directors}
          columns="md:grid-cols-2 lg:grid-cols-4"
        />
      )}

      {/* Volunteers */}
      {volunteers.length > 0 && (
        <MemberGroup
          title="Voluntarios"
          subtitle="El motor de nuestra comunidad"
          members={volunteers}
          columns="md:grid-cols-2 lg:grid-cols-4"
        />
      )}
    </div>
  );
}

function MemberGroup({
  title,
  subtitle,
  members,
  featured = false,
  columns,
}: {
  title: string;
  subtitle: string;
  members: Member[];
  featured?: boolean;
  columns: string;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref}>
      <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
        <h3 className="text-2xl font-semibold text-[var(--color-text)]">{title}</h3>
        <p className="text-sm text-[var(--color-text-muted)]" style={{ marginTop: '0.75rem' }}>{subtitle}</p>
      </div>
      <div className={cn('grid grid-cols-1 grid-gap-lg', columns)}>
        {members.map((member, index) => (
          <div
            key={member.id}
            className={cn(
              'transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <MemberCard member={member} featured={featured} />
          </div>
        ))}
      </div>
    </div>
  );
}
