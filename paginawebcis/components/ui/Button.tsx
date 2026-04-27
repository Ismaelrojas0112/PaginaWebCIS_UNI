'use client';

import { cn } from '@/lib/utils';
import type { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    'bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-accent)]',
    'text-white font-semibold',
    'shadow-[0_0_20px_rgba(0,168,232,0.2)]',
    'hover:shadow-[0_0_30px_rgba(0,168,232,0.4)]',
    'hover:brightness-110',
    'active:scale-[0.97]',
  ].join(' '),
  secondary: [
    'bg-transparent',
    'border border-[var(--color-border)]',
    'text-[var(--color-text)]',
    'hover:border-[var(--color-accent)]',
    'hover:text-[var(--color-accent)]',
    'hover:shadow-[0_0_20px_rgba(0,168,232,0.1)]',
    'active:scale-[0.97]',
  ].join(' '),
  ghost: [
    'bg-transparent',
    'text-[var(--color-text-secondary)]',
    'hover:text-[var(--color-accent)]',
    'hover:bg-[rgba(0,168,232,0.05)]',
  ].join(' '),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-base gap-2',
  lg: 'px-8 py-4 text-lg gap-2.5',
};

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'left',
  href,
  external,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-[var(--radius-lg)] font-medium',
    'transition-all duration-[var(--transition-base)] cursor-pointer',
    'focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
