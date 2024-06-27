import { Skill } from '@/types/skill';
import {
  CodeIcon,
  DatabaseIcon,
  LayoutIcon,
    CogIcon
} from 'lucide-react';

const skills: Skill[] = [
  {
    name: 'Full Stack Development',
    description: 'Building beautiful and functional websites.',
    Icon: CodeIcon
  },
  {
    name: 'Research and Analysis',
    description: 'Conducting thorough research and analysis.',
    Icon: LayoutIcon
  },
  {
    name: 'Database Management Systems',
    description: 'Storing and organizing data efficiently.',
    Icon: DatabaseIcon
  },
  {
    name: 'Algorithm Problem Solving',
    description: 'Solving complex problems with algorithms.',
    Icon: CogIcon
  }
];

export { skills };
