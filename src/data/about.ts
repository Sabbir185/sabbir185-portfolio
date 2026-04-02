import { AboutData } from './types';

export const aboutData: AboutData = {
  sectionLabel: 'Get to know me',
  sectionTitle: 'About Me & Technologies',
  sectionSubtitle:
    'A passionate software engineer with expertise in building scalable web applications',
  whoIAmTitle: 'Who I Am',
  paragraphs: [
    "I'm Md. Sabbir Ahmmed, a Software Engineer at Appstick, Khulna with 3+ years of experience building modern web applications. I hold a Master's degree in CSE from Khulna University and a Bachelor's from Northern University of Business & Technology Khulna.",
    "I specialize in developing and maintaining web applications using React.js, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, and Golang. I'm passionate about cloud services (AWS/GCP), clean code architecture, and mentoring fellow developers.",
  ],
  highlights: [
    { icon: '🎓', title: 'M.Sc. in CSE', value: 'Khulna University' },
    { icon: '💼', title: 'Software Engineer', value: 'Appstick, Khulna' },
    { icon: '📄', title: 'Research Paper', value: 'ML Publication (2023)' },
    { icon: '🌐', title: 'Cloud & DevOps', value: 'AWS, GCP, Docker, Linux, CI/CD' },
  ],
  technologies: [
    {
      name: 'Languages',
      tags: ['Python', 'JavaScript', 'TypeScript', 'Golang'],
    },
    {
      name: 'Front-End',
      tags: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS'],
    },
    {
      name: 'Back-End',
      tags: ['Node.js', 'Express.js', 'Go', 'REST API', 'Socket.IO', 'RabbitMQ'],
    },
    {
      name: 'Database',
      tags: ['MongoDB', 'PostgreSQL', 'Redis', 'Prisma'],
    },
    {
      name: 'Cloud & DevOps',
      tags: ['Git', 'Docker', 'CI/CD', 'AWS', 'GCP', 'Linux Server', 'Nginx', 'Cloudflare', 'Firebase'],
      fullWidth: true,
    },
  ],
};
