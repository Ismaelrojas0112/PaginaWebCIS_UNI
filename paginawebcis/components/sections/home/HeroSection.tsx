'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SOCIAL_LINKS } from '@/constants/links';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Animated Background ── */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg)] via-[#081830] to-[var(--color-bg)]" />

        {/* Neural mesh orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--color-primary)] opacity-[0.07] blur-[120px] animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[var(--color-accent)] opacity-[0.05] blur-[100px] animate-[float_10s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--color-accent-glow)] opacity-[0.03] blur-[150px] animate-[float_12s_ease-in-out_infinite_4s]" />

        {/* Grid overlay */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        {/* Noise */}
        <div className="absolute inset-0 noise-overlay" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 section-container text-center py-20">
        {/* Overline badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border)] bg-[rgba(0,168,232,0.06)] text-xs font-medium text-[var(--color-accent)] tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-[glow-pulse_2s_ease-in-out_infinite]" />
            IEEE Computational Intelligence Society
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-[var(--color-text)]">Impulsando la </span>
          <br />
          <span className="gradient-text">Inteligencia Artificial</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-6 text-lg sm:text-xl md:text-2xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          Capítulo estudiantil de la{' '}
          <span className="text-[var(--color-accent)]">Universidad Nacional de Ingeniería</span>.
          Investigamos, aprendemos y creamos el futuro de la IA.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <Button
            variant="primary"
            size="lg"
            href={SOCIAL_LINKS.linktree}
            external
            icon={<ExternalLink className="w-4 h-4" />}
            iconPosition="right"
          >
            Únete ahora
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href="#about"
            icon={<ChevronRight className="w-4 h-4" />}
            iconPosition="right"
          >
            Conoce más
          </Button>
        </motion.div>

        {/* Stats preview */}
        <motion.div
          className="mt-20 flex items-center justify-center gap-12 sm:gap-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          {[
            { value: '30+', label: 'Miembros' },
            { value: '6', label: 'Proyectos IA' },
            { value: '15+', label: 'Eventos' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[var(--color-accent)]">
                {stat.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-[var(--color-text-muted)]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
