'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ExternalLink, Brain } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_LINKS, SOCIAL_LINKS } from '@/constants/links';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'transition-all duration-[var(--transition-base)]',
          isScrolled
            ? 'bg-[rgba(5,11,24,0.85)] backdrop-blur-xl border-b border-[var(--color-border)] shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
            : 'bg-transparent'
        )}
      >
        <div className="section-container">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
            >
              <div className="relative">
                <Brain className="w-8 h-8 text-[var(--color-accent)] transition-all duration-300 group-hover:text-[var(--color-accent-glow)] group-hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.5)]" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold text-[var(--color-text)] tracking-tight">
                  IEEE CIS
                </span>
                <span className="text-[10px] font-medium text-[var(--color-text-muted)] tracking-widest uppercase">
                  UNI Chapter
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4 ml-auto mr-10">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'relative px-5 py-2.5 text-[15px] font-medium rounded-full',
                      'transition-all duration-300 ease-out border border-transparent overflow-hidden',
                      isActive
                        ? 'text-[var(--color-accent)] bg-[rgba(0,168,232,0.1)] shadow-[inset_0_0_10px_rgba(0,168,232,0.05)]'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-white/5 hover:backdrop-blur-xl hover:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.2)] hover:border-white/10'
                    )}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[var(--color-accent)] rounded-full shadow-[0_0_8px_rgba(0,168,232,0.6)]" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA & Theme */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <Button
                variant="primary"
                size="sm"
                href={SOCIAL_LINKS.linktree}
                external
                icon={<ExternalLink className="w-3.5 h-3.5" />}
                iconPosition="right"
              >
                Únete ahora
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 md:hidden',
          'transition-all duration-300',
          isMobileOpen ? 'visible' : 'invisible'
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            'absolute inset-0 bg-[rgba(5,11,24,0.9)] backdrop-blur-md',
            'transition-opacity duration-300',
            isMobileOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setIsMobileOpen(false)}
        />

        {/* Panel */}
        <div
          className={cn(
            'absolute top-0 right-0 w-[280px] h-full',
            'bg-[var(--color-bg-card)] border-l border-[var(--color-border)]',
            'transition-transform duration-300 ease-out',
            'flex flex-col pt-20 px-6',
            isMobileOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-3 rounded-[var(--radius-md)] text-base font-medium',
                    'transition-colors duration-[var(--transition-fast)]',
                    isActive
                      ? 'text-[var(--color-accent)] bg-[rgba(0,168,232,0.08)]'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[rgba(0,168,232,0.05)]'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
            <Button
              variant="primary"
              size="md"
              href={SOCIAL_LINKS.linktree}
              external
              icon={<ExternalLink className="w-4 h-4" />}
              iconPosition="right"
              className="w-full"
            >
              Únete ahora
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
