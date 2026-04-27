import type { Metadata } from 'next';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { MembersGrid } from '@/components/sections/members/MembersGrid';
import { MOCK_MEMBERS } from '@/data/members';

export const metadata: Metadata = {
  title: 'Miembros',
  description: 'Conoce al equipo del capítulo IEEE CIS UNI. Investigadores, desarrolladores y entusiastas de la Inteligencia Artificial.',
};

export default function MembersPage() {
  return (
    <PageWrapper>
      <section className="section-spacing neural-bg">
        <div className="section-container">
          <SectionTitle
            title="Nuestro Equipo"
            subtitle="Conoce a las personas que impulsan la Inteligencia Artificial en la UNI. Un equipo diverso y apasionado."
          />
          <MembersGrid members={MOCK_MEMBERS} />
        </div>
      </section>
    </PageWrapper>
  );
}
