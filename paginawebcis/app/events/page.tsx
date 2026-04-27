import type { Metadata } from 'next';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { EventsSection } from '@/components/sections/events/EventsSection';
import { InstagramFeed } from '@/components/sections/events/InstagramFeed';
import { MOCK_EVENTS, MOCK_INSTAGRAM_POSTS } from '@/data/events';

export const metadata: Metadata = {
  title: 'Eventos',
  description: 'Workshops, hackathons, charlas y más. Descubre los eventos de IEEE CIS UNI.',
};

export default function EventsPage() {
  const upcomingEvents = MOCK_EVENTS.filter((e) => e.isUpcoming);
  const pastEvents = MOCK_EVENTS.filter((e) => !e.isUpcoming);

  return (
    <PageWrapper>
      <section className="section-spacing neural-bg">
        <div className="section-container">
          <SectionTitle
            title="Eventos"
            subtitle="Workshops, hackathons, conferencias y sesiones de lectura de papers. Siempre aprendiendo juntos."
          />

          {/* Upcoming Events */}
          <EventsSection
            events={upcomingEvents}
            title="🚀 Próximos Eventos"
            subtitle="No te los pierdas — regístrate ahora"
          />

          {/* Instagram Feed */}
          <div className="group-spacing">
            <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
              <h3 className="text-2xl font-semibold text-[var(--color-text)]">📸 Últimas Publicaciones</h3>
              <p className="text-sm text-[var(--color-text-muted)] mt-2">Lo más reciente de nuestro Instagram</p>
            </div>
            <InstagramFeed posts={MOCK_INSTAGRAM_POSTS} />
          </div>

          {/* Past Events */}
          <EventsSection
            events={pastEvents}
            title="📋 Eventos Pasados"
            subtitle="Revive nuestras actividades anteriores"
          />
        </div>
      </section>
    </PageWrapper>
  );
}
