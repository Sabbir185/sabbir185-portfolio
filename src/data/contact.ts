import { ContactData } from './types';

export const contactData: ContactData = {
  sectionLabel: "Let's Connect",
  sectionTitle: 'Get In Touch',
  sectionSubtitle:
    "Have a project in mind or want to discuss opportunities? I'd love to hear from you",
  infoHeading: "Let's build something amazing together",
  infoDescription:
    "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!",
  methods: [
    {
      icon: '📧',
      label: 'Email',
      value: 'sabbir.py@gmail.com',
      href: 'mailto:sabbir.py@gmail.com',
      id: 'contact-email',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+880 1725 151578',
      href: 'tel:+8801725151578',
      id: 'contact-phone',
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: 'github.com/sabbir185',
      href: 'https://github.com/sabbir185',
      id: 'contact-github',
      external: true,
    },
    {
      icon: '🔗',
      label: 'LinkedIn',
      value: 'linkedin.com/in/sabbir185',
      href: 'https://linkedin.com/in/sabbir185',
      id: 'contact-linkedin',
      external: true,
    },
  ],
};
