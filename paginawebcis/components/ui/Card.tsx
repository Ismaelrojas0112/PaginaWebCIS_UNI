'use client';

import { cn } from '@/lib/utils';
import type { ReactNode, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'featured';
  hoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const paddingStyles = {
  none: '',
  sm: 'card-padding-sm',
  md: 'card-padding-md',
  lg: 'card-spacious',
};

export function Card({
  children,
  variant = 'default',
  hoverable = true,
  padding = 'md',
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'relative rounded-[var(--radius-xl)] overflow-hidden',
        'bg-[var(--color-bg-card)] border border-[var(--color-border)]',
        'transition-all duration-[var(--transition-base)]',
        hoverable && [
          'hover:bg-[var(--color-bg-card-hover)]',
          'hover:border-[rgba(0,168,232,0.3)]',
          'hover:shadow-[0_0_30px_rgba(0,168,232,0.08),0_8px_32px_rgba(0,0,0,0.3)]',
          'hover:-translate-y-1',
        ].join(' '),
        variant === 'featured' && [
          'border-[rgba(0,168,232,0.2)]',
          'shadow-[0_0_20px_rgba(0,168,232,0.06)]',
          'bg-gradient-to-br from-[var(--color-bg-card)] to-[rgba(0,98,155,0.08)]',
        ].join(' '),
        paddingStyles[padding],
        className
      )}
      {...props}
    >
      {variant === 'featured' && (
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,168,232,0.05)] to-transparent pointer-events-none" />
      )}
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
