'use client';

import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
  withPadding?: boolean;
}

export function PageWrapper({ children, className, withPadding = true }: PageWrapperProps) {
  return (
    <main
      className={cn('relative min-h-screen', className)}
      style={withPadding ? { paddingTop: 'clamp(8rem, 12vw, 12rem)' } : undefined}
    >
      {children}
    </main>
  );
}
