import Link from 'next/link';
import { Brain, Camera, Link2, Code2, Mail, Heart } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS, CONTACT } from '@/constants/links';

const socialItems = [
  { href: SOCIAL_LINKS.instagram, icon: Camera, label: 'Instagram' },
  { href: SOCIAL_LINKS.linkedin, icon: Link2, label: 'LinkedIn' },
  { href: SOCIAL_LINKS.github, icon: Code2, label: 'GitHub' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-40" />

      <div className="section-container" style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <Brain className="w-7 h-7 text-[var(--color-accent)]" />
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold text-[var(--color-text)]">IEEE CIS</span>
                <span className="text-[10px] font-medium text-[var(--color-text-muted)] tracking-widest uppercase">
                  UNI Chapter
                </span>
              </div>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] max-w-xs leading-relaxed">
              Capítulo estudiantil de la IEEE Computational Intelligence Society en la Universidad Nacional de Ingeniería. Investigamos, aprendemos y creamos IA.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text)] uppercase tracking-wider mb-4">
              Navegación
            </h3>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors animated-underline w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text)] uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <div className="space-y-3 mb-6">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              >
                <Mail className="w-4 h-4" />
                {CONTACT.email}
              </a>
              <p className="text-sm text-[var(--color-text-muted)]">
                {CONTACT.university}
                <br />
                {CONTACT.location}
              </p>
            </div>

            <div className="flex gap-3">
              {socialItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="p-2.5 rounded-[var(--radius-md)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] hover:shadow-[0_0_15px_rgba(0,168,232,0.15)] transition-all duration-[var(--transition-base)]"
                >
                  <item.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            © {currentYear} IEEE CIS UNI. Todos los derechos reservados.
          </p>
          <p className="text-xs text-[var(--color-text-muted)] flex items-center gap-1">
            Hecho con <Heart className="w-3 h-3 text-[var(--color-accent)] fill-current" /> por el equipo IEEE CIS UNI
          </p>
        </div>
      </div>
    </footer>
  );
}
