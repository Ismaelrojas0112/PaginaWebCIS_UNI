'use client';

import { useState } from 'react';
import { Send, Mail, Camera, Link2, Code2 } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { SOCIAL_LINKS, CONTACT } from '@/constants/links';

const socialLinks = [
  { icon: Camera, href: SOCIAL_LINKS.instagram, label: 'Instagram', color: '#E4405F' },
  { icon: Link2, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn', color: '#0A66C2' },
  { icon: Code2, href: SOCIAL_LINKS.github, label: 'GitHub', color: '#ffffff' },
];

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Visual only — will connect to EmailJS or Resend in v1.1
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative section-spacing">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full bg-[var(--color-primary)] opacity-[0.04] blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[300px] rounded-full bg-[var(--color-accent)] opacity-[0.03] blur-[100px]" />
      </div>

      <div className="relative z-10 section-container">
        <SectionTitle
          title="Contáctanos"
          subtitle="¿Tienes preguntas o quieres colaborar con nosotros? Escríbenos y te responderemos pronto."
        />

        <div
          ref={ref}
          className={cn(
            'grid grid-cols-1 lg:grid-cols-5 grid-gap-lg max-w-5xl mx-auto',
            'transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {/* Contact Form */}
          <Card padding="lg" hoverable={false} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5">
                  Nombre
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-[var(--radius-md)] bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_rgba(0,168,232,0.1)] outline-none transition-all"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-[var(--radius-md)] bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_rgba(0,168,232,0.1)] outline-none transition-all"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5">
                  Mensaje
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-[var(--radius-md)] bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_rgba(0,168,232,0.1)] outline-none transition-all resize-none"
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                />
              </div>
              <Button
                type="submit"
                variant="primary"
                size="md"
                icon={<Send className="w-4 h-4" />}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                Enviar mensaje
              </Button>
            </form>
          </Card>

          {/* Contact Info & Social */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Email */}
            <Card padding="md" hoverable={false}>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-[var(--radius-md)] bg-[rgba(0,168,232,0.1)] mt-0.5">
                  <Mail className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--color-text)] mb-1">Email</h3>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-sm text-[var(--color-accent)] hover:underline"
                  >
                    {CONTACT.email}
                  </a>
                  <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                    Respondemos en 24-48 horas
                  </p>
                </div>
              </div>
            </Card>

            {/* Social */}
            <Card padding="md" hoverable={false}>
              <h3 className="text-sm font-semibold text-[var(--color-text)] mb-4">Síguenos</h3>
              <div className="flex flex-col gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 rounded-[var(--radius-md)] hover:bg-[rgba(0,168,232,0.05)] transition-colors group"
                  >
                    <social.icon className="w-5 h-5 text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] transition-colors" />
                    <span className="text-sm text-[var(--color-text-secondary)] group-hover:text-[var(--color-text)] transition-colors">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </Card>

            {/* Location */}
            <Card padding="md" hoverable={false}>
              <h3 className="text-sm font-semibold text-[var(--color-text)] mb-2">{CONTACT.university}</h3>
              <p className="text-sm text-[var(--color-text-muted)]">{CONTACT.location}</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
