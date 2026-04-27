export type MemberRole =
  | 'president'
  | 'vice-president'
  | 'area-director'
  | 'volunteer';

export const ROLE_LABELS: Record<MemberRole, string> = {
  'president': 'Presidente',
  'vice-president': 'Vicepresidente',
  'area-director': 'Director de Área',
  'volunteer': 'Voluntario',
};

export const ROLE_ORDER: Record<MemberRole, number> = {
  'president': 0,
  'vice-president': 1,
  'area-director': 2,
  'volunteer': 3,
};

export interface Member {
  id: string;
  fullName: string;
  role: MemberRole;
  area: string;
  bio?: string;
  photoUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  order: number;
}
