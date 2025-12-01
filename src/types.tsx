// --- START OF FILE types.ts ---

// NOTE: SkillType enum has been MOVED to constants.tsx

// Define the SkillType as a string literal type based on where it's used
export type SkillType = 'Technical' | 'Soft Skills' | 'Non-Technical';

// Interfaces remain pure types
export interface Skill {
  name: string;
  type: SkillType;
  level: number;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  type: 'Work' | 'Internship';
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
}

// --- END OF FILE types.ts ---