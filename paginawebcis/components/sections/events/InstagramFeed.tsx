'use client';

import { Camera } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn, truncate } from '@/lib/utils';
import { SOCIAL_LINKS } from '@/constants/links';
import type { InstagramPost } from '@/types/event.types';

interface InstagramFeedProps {
  posts: InstagramPost[];
}

export function InstagramFeed({ posts }: InstagramFeedProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref}>
      <div className="grid grid-cols-1 sm:grid-cols-3 grid-gap-lg" style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
        {posts.map((post, index) => (
          <a
            key={post.id}
            href={post.postUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'group block',
              'transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            )}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <Card padding="none" className="overflow-hidden">
              {/* Image */}
              <div className="relative aspect-square bg-gradient-to-br from-[var(--color-bg-elevated)] to-[var(--color-bg-card)] overflow-hidden">
                {post.imageUrl ? (
                  <img
                    src={post.imageUrl}
                    alt={post.caption || 'Instagram post'}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center neural-bg">
                    <Camera className="w-12 h-12 text-[var(--color-text-muted)] opacity-30" />
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,11,24,0.9)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex items-center gap-2 text-sm text-white">
                    <Camera className="w-4 h-4" />
                    Ver en Instagram
                  </div>
                </div>
              </div>

              {/* Caption */}
              {post.caption && (
                <div className="p-5">
                  <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2">
                    {truncate(post.caption, 120)}
                  </p>
                </div>
              )}
            </Card>
          </a>
        ))}
      </div>

      <div className="text-center">
        <Button
          variant="secondary"
          size="md"
          href={SOCIAL_LINKS.instagram}
          external
          icon={<Camera className="w-4 h-4" />}
        >
          Ver todo en Instagram
        </Button>
      </div>
    </div>
  );
}
