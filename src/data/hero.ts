import { HeroData } from './types';

export const heroData: HeroData = {
  greeting: "Hello, I'm",
  firstName: 'Sabbir',
  lastName: 'Ahmmed',
  title: 'Software Engineer',
  location: 'Bangladesh 🇧🇩',
  description:
    'Building scalable web applications with React, Next.js, Node.js, and Go. Passionate about clean architecture, cloud-native solutions, and crafting exceptional digital experiences.',
  avatarUrl: '/sabbir.png',
  backgroundUrl: '/hero-bg.png',
  resumeUrl: '/resume.pdf',
  stats: [
    { value: '3+', label: 'Years Exp.' },
    { value: '10+', label: 'Projects' },
    { value: '1', label: 'Publication' },
  ],
  badges: [
    { text: 'Available for Work', dotColor: 'green' },
    { text: 'Full-Stack Dev', dotColor: 'blue' },
    { text: 'Cloud & DevOps', dotColor: 'purple' },
  ],
};
