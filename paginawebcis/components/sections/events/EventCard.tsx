import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { formatDate } from '@/lib/utils';
import type { Event } from '@/types/event.types';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Card padding="none" className="flex flex-col h-full">
      {/* Image area */}
      <div className="relative h-52 bg-gradient-to-br from-[var(--color-bg-elevated)] to-[var(--color-bg-card)] overflow-hidden">
        {event.imageUrl ? (
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center neural-bg">
            <div className="text-5xl opacity-15">📅</div>
          </div>
        )}
        {/* Date overlay */}
        <div className="absolute bottom-3 left-3">
          <Badge variant={event.isUpcoming ? 'success' : 'outline'}>
            <Calendar className="w-3 h-3 mr-1" />
            {formatDate(event.date)}
          </Badge>
        </div>
        {event.isUpcoming && (
          <div className="absolute top-3 right-3">
            <Badge variant="warning">Próximo</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-7">
        <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2 line-clamp-2">
          {event.title}
        </h3>

        {event.location && (
          <div className="flex items-center gap-1.5 mb-3 text-sm text-[var(--color-text-muted)]">
            <MapPin className="w-3.5 h-3.5" />
            {event.location}
          </div>
        )}

        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 flex-1 line-clamp-3">
          {event.description}
        </p>

        {/* Actions */}
        <div className="flex gap-2">
          {event.registrationUrl && event.isUpcoming && (
            <Button
              variant="primary"
              size="sm"
              href={event.registrationUrl}
              external
              icon={<ExternalLink className="w-3.5 h-3.5" />}
              iconPosition="right"
              className="flex-1"
            >
              Registrarse
            </Button>
          )}
          {event.instagramPostUrl && (
            <Button
              variant="secondary"
              size="sm"
              href={event.instagramPostUrl}
              external
              className="flex-1"
            >
              Ver en Instagram
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
