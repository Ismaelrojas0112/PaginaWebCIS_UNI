import { cn } from '@/lib/utils';
import { Avatar } from '@/components/ui/Avatar';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Link2, Code2 } from 'lucide-react';
import type { Member } from '@/types/member.types';
import { ROLE_LABELS } from '@/types/member.types';

interface MemberCardProps {
  member: Member;
  featured?: boolean;
}

const roleBadgeVariant: Record<string, 'primary' | 'success' | 'default' | 'outline'> = {
  'president': 'primary',
  'vice-president': 'primary',
  'area-director': 'success',
  'volunteer': 'default',
};

export function MemberCard({ member, featured = false }: MemberCardProps) {
  return (
    <Card
      variant={featured ? 'featured' : 'default'}
      padding="lg"
      className={cn(featured && 'md:col-span-1')}
    >
      <div className="flex flex-col items-center text-center">
        <Avatar
          src={member.photoUrl}
          alt={member.fullName}
          size={featured ? 'xl' : 'lg'}
        />

        <h3 className="mt-4 text-lg font-semibold text-[var(--color-text)]">
          {member.fullName}
        </h3>

        <Badge variant={roleBadgeVariant[member.role] || 'outline'} className="mt-2">
          {ROLE_LABELS[member.role]}
        </Badge>

        <p className="mt-2 text-sm text-[var(--color-accent)]">
          {member.area}
        </p>

        {member.bio && (
          <p className="mt-3 text-xs text-[var(--color-text-muted)] leading-relaxed line-clamp-3">
            {member.bio}
          </p>
        )}

        {/* Social Links */}
        {(member.linkedinUrl || member.githubUrl) && (
          <div className="mt-4 flex items-center gap-2">
            {member.linkedinUrl && (
              <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn de ${member.fullName}`}
                className="p-2 rounded-[var(--radius-md)] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:bg-[rgba(0,168,232,0.08)] transition-colors"
              >
                <Link2 className="w-4 h-4" />
              </a>
            )}
            {member.githubUrl && (
              <a
                href={member.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub de ${member.fullName}`}
                className="p-2 rounded-[var(--radius-md)] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:bg-[rgba(0,168,232,0.08)] transition-colors"
              >
                <Code2 className="w-4 h-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}
