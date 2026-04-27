'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatch by not rendering anything theme-specific until mounted
  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'relative flex items-center justify-center w-9 h-9 rounded-full overflow-hidden',
        'border transition-all duration-300 ease-out',
        theme === 'dark'
          ? 'bg-[var(--color-bg-card)] border-[var(--color-border)] text-yellow-400 hover:border-yellow-400/50 hover:bg-yellow-400/10'
          : 'bg-white border-[var(--color-border)] text-[var(--color-primary)] hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-primary)]/10'
      )}
      aria-label="Alternar modo de tema"
    >
      <div className={cn(
        'transition-transform duration-500 flex items-center justify-center absolute',
        theme === 'dark' ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
      )}>
        <Moon className="w-4 h-4 fill-current" />
      </div>
      <div className={cn(
        'transition-transform duration-500 flex items-center justify-center absolute',
        theme === 'light' ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      )}>
        <Sun className="w-5 h-5 fill-current" />
      </div>
    </button>
  );
}
