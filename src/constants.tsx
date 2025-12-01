// --- START OF FILE constants.tsx ---

import type { Experience, Education, Project, Skill } from './types.ts';
import { 
  Code, 
  Database, 
  Smartphone, 
  Users, 
  Clock, 
  BrainCircuit, 
  FileSpreadsheet, 
  Terminal,
  FileText
} from 'lucide-react';

// FIX: SkillTypes object for runtime use
export const SkillTypes = {
  TECHNICAL: 'Technical',
  SOFT: 'Soft Skills',
  NON_TECHNICAL: 'Non-Technical',
} as const;

type SkillTypeValue = typeof SkillTypes[keyof typeof SkillTypes];

export const PERSONAL_INFO = {
  name: "ARUNKUMAR K M",
  tagline: "Frontend Developer & Data Specialist",
  email: "arunarun022002@gmail.com",
  phone: "8925409727",
  location: "Mannivakkam, Chennai - 600048",
  profileSummary: "MCA pursuing and BCA graduate student looking for IT support role with passion. Ability to understand client requirements. Easily collaborate with team and ability to work under pressure. Major role in team support and leadership."
};

export const SKILLS: Skill[] = [
  // Technical
  { name: "React Native", type: SkillTypes.TECHNICAL as SkillTypeValue, level: 85 },
  { name: "Java", type: SkillTypes.TECHNICAL as SkillTypeValue, level: 70 },
  { name: "SpringBoot", type: SkillTypes.TECHNICAL as SkillTypeValue, level: 75 },
  { name: "Oracle SQL", type: SkillTypes.TECHNICAL as SkillTypeValue, level: 80 },
  // Non Technical
  { name: "Microsoft Excel", type: SkillTypes.NON_TECHNICAL as SkillTypeValue, level: 95 },
  { name: "Microsoft Word", type: SkillTypes.NON_TECHNICAL as SkillTypeValue, level: 90 },
  // Soft
  { name: "Problem Solving", type: SkillTypes.SOFT as SkillTypeValue, level: 85 },
  { name: "Teamwork", type: SkillTypes.SOFT as SkillTypeValue, level: 100 },
  { name: "Leadership", type: SkillTypes.SOFT as SkillTypeValue, level: 80 },
  { name: "Time Management", type: SkillTypes.SOFT as SkillTypeValue, level: 90 },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "exp-1",
    role: "Associate Data Conversion",
    company: "TNQ Tech PVT Limited",
    period: "2023 - 2025",
    type: "Work",
    description: [
      "Handling data and monitoring data integrity.",
      "Converting large volumes of data to XML format.",
      "Processing image and video content to XML format using specialized tools.",
      "Creating error logs with Excel and monitoring weekly error metrics.",
      "Publishing approved XML files to client online portals."
    ]
  },
  {
    id: "exp-2",
    role: "Frontend Developer Intern",
    company: "Parkqwik PVT Limited",
    period: "3 Months",
    type: "Internship",
    description: [
      "Worked on frontend technologies.",
      "Assisted in developing mobile interface features using React Native.",
      "Collaborated with the design team to implement UI/UX improvements."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "edu-1",
    degree: "Master of Computer Application (MCA)",
    institution: "B S Abdur Rahman Crescent Institute of Science and Technology",
    period: "2024 - Present",
    score: "CGPA: 7.0 / 10.0"
  },
  {
    id: "edu-2",
    degree: "Bachelor of Computer Application (BCA)",
    institution: "B S Abdur Rahman Crescent Institute of Science and Technology",
    period: "2019 - 2022",
    score: "CGPA: 8.4 / 10.0"
  },
  {
    id: "edu-3",
    degree: "12th (HSC)",
    institution: "Shri Natesan Vidyasala Matriculation Higher Secondary School",
    period: "2018 - 2019",
    score: "70%"
  },
  {
    id: "edu-4",
    degree: "10th (SSLC)",
    institution: "Ebenezer Matriculation School",
    period: "2016 - 2017",
    score: "88%"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "HOOOD Prompt Sharing App",
    description: "A mobile application for sharing AI prompts. Live in production on the Play Store.",
    link: "https://play.google.com/store/apps/details?id=com.hoood",
    tags: ["React Native", "Android", "Mobile App", "Production"]
  }
];

export const SKILL_ICONS: Record<string, React.ReactNode> = {
  "React Native": <Smartphone className="w-5 h-5" />,
  "Java": <Code className="w-5 h-5" />,
  "MongoDB": <Database className="w-5 h-5" />,
  "XML Processing": <Terminal className="w-5 h-5" />,
  "Microsoft Excel": <FileSpreadsheet className="w-5 h-5" />,
  "Microsoft Word": <FileText className="w-5 h-5" />,
  "Problem Solving": <BrainCircuit className="w-5 h-5" />,
  "Teamwork": <Users className="w-5 h-5" />,
  "Leadership": <Users className="w-5 h-5" />,
  "Time Management": <Clock className="w-5 h-5" />
};
// --- END OF FILE constants.tsx ---