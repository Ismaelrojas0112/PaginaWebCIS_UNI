import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'outline';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-[rgba(0,168,232,0.1)] text-[var(--color-accent)] border-[rgba(0,168,232,0.2)]',
  primary: 'bg-[rgba(0,98,155,0.2)] text-[var(--color-primary-light)] border-[rgba(0,134,214,0.3)]',
  success: 'bg-[rgba(0,229,160,0.1)] text-[var(--color-success)] border-[rgba(0,229,160,0.2)]',
  warning: 'bg-[rgba(255,181,71,0.1)] text-[var(--color-warning)] border-[rgba(255,181,71,0.2)]',
  outline: 'bg-transparent text-[var(--color-text-secondary)] border-[var(--color-border)]',
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-[var(--radius-full)]',
        'text-xs font-medium border',
        'transition-colors duration-[var(--transition-fast)]',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
