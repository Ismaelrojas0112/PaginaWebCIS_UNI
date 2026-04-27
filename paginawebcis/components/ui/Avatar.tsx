import { cn, getInitials } from '@/lib/utils';

type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

interface AvatarProps {
  src?: string;
  alt: string;
  size?: AvatarSize;
  className?: string;
}

const sizeStyles: Record<AvatarSize, { container: string; text: string }> = {
  sm: { container: 'w-10 h-10', text: 'text-sm' },
  md: { container: 'w-14 h-14', text: 'text-base' },
  lg: { container: 'w-20 h-20', text: 'text-xl' },
  xl: { container: 'w-28 h-28', text: 'text-2xl' },
};

export function Avatar({ src, alt, size = 'md', className }: AvatarProps) {
  const initials = getInitials(alt);

  return (
    <div
      className={cn(
        'relative rounded-full overflow-hidden flex-shrink-0',
        'ring-2 ring-[var(--color-border)]',
        'transition-all duration-[var(--transition-base)]',
        'hover:ring-[var(--color-accent)] hover:shadow-[0_0_20px_rgba(0,168,232,0.2)]',
        sizeStyles[size].container,
        className
      )}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      ) : (
        <div
          className={cn(
            'w-full h-full flex items-center justify-center',
            'bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]',
            'text-white font-semibold',
            sizeStyles[size].text
          )}
        >
          {initials}
        </div>
      )}
    </div>
  );
}
