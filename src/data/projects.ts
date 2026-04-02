import { ProjectsSectionData } from './types';

export const projectsData: ProjectsSectionData = {
  sectionLabel: 'My Work',
  sectionTitle: 'Featured Projects',
  sectionSubtitle: "A selection of projects I've built and contributed to",
  projects: [
    {
      title: 'Msar-Amen',
      subtitle: 'Comprehensive Ride-Sharing Platform',
      description:
        'Led development of a robust ride-service platform in Saudi Arabia with queue management for Haramain train stations, on-demand/scheduled rides, carpooling, and integrated delivery service with dynamic fare calculations using geofence concepts.',
      techs: ['Node.js', 'GCP', 'RabbitMQ', 'Redis', 'Websocket', 'Docker', 'React.js', 'SwiftUI', 'Kotlin'],
      image: '/project-bg.png',
      badge: 'Featured',
      liveUrl: 'https://msaramen.com',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.msaramen.msarcaptain&pcampaignid=web_share',
      appStoreUrl: 'https://apps.apple.com/sa/app/msar-amen-%D9%85%D8%B3%D8%A7%D8%B1-%D8%A2%D9%85%D9%86/id1639771181',
    },
    {
      title: '01Supplies',
      subtitle: 'Multi-Vendor E-Commerce with Delivery',
      description: 'Built a full-featured multi-vendor e-commerce system with role-based authentication, admin panel, vendor dashboard, user profiles, pickup stations, and an integrated delivery system with bidding options for customer engagement.',
      techs: ['Next.js', 'Express.js', 'PostgreSQL', 'Prisma', 'Redux', 'Docker'],
      image: '/project-bg.png',
      badge: 'E-Commerce',
      liveUrl: 'https://01supplies.com',
      // githubUrl: '#',
    },
    {
      title: 'Taxstick',
      subtitle: 'Hassle-Free Tax Filing Solution',
      description:
        'Developed a comprehensive tax filing management system enabling users to securely submit tax-related information, efficiently managed by administrators and accountants to ensure optimal tax solutions for all clients.',
      techs: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'AWS'],
      image: '/project-bg.png',
      badge: 'SaaS',
      liveUrl: 'https://codecanyon.net/item/taxstick-tax-filing-management-system/41455834?s_rank=14',
      // githubUrl: '#',
    },
  ],
};
