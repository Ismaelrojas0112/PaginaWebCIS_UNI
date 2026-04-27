'use client';

import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  gradient?: boolean;
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  centered = true,
  gradient = true,
  className,
}: SectionTitleProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={cn(
        'section-title-spacing',
        centered && 'text-center',
        className
      )}
    >
      <h2
        className={cn(
          'text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight',
          'transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
          gradient ? 'gradient-text' : 'text-[var(--color-text)]'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl leading-relaxed',
            centered && 'mx-auto',
            'transition-all duration-700 delay-200',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
          )}
          style={{ marginTop: 'clamp(1.5rem, 3vw, 2.5rem)' }}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          'h-1 rounded-full',
          'bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent',
          centered ? 'mx-auto w-24' : 'w-20',
          'transition-all duration-700 delay-300',
          isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0',
        )}
        style={{ marginTop: 'clamp(2rem, 4vw, 3rem)' }}
      />
    </div>
  );
}
