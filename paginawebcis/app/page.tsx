import { HeroSection } from '@/components/sections/home/HeroSection';
import { AboutSection } from '@/components/sections/home/AboutSection';
import { ContactSection } from '@/components/sections/home/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
