import { BlogsSectionData } from './types';

export const blogsData: BlogsSectionData = {
  sectionLabel: 'Insights & Articles',
  sectionTitle: 'Latest Blog Posts',
  sectionSubtitle:
    'Sharing knowledge about software engineering, cloud architecture, and machine learning',
  blogs: [
    {
      title: 'Building Scalable Ride-Sharing Platforms with Geofencing',
      excerpt:
        'Learn how to implement dynamic fare calculations and geofence-based pricing models for transportation apps. A deep dive into real-time tracking and spatial algorithms.',
      category: 'System Design',
      date: 'Mar 15, 2026',
      readTime: '8 min read',
      gradient: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
    },
    {
      title: 'Machine Learning for Breast Tumor Prediction',
      excerpt:
        'Exploring feature importance scores and ML algorithms for medical diagnosis. Insights from my published research on classification techniques and model evaluation.',
      category: 'Machine Learning',
      date: 'Dec 10, 2023',
      readTime: '12 min read',
      gradient: 'linear-gradient(135deg, #06b6d4, #22c55e)',
    },
    {
      title: 'Multi-Vendor E-Commerce Architecture with Node.js',
      excerpt:
        'A comprehensive guide to building scalable multi-vendor systems with role-based auth, vendor dashboards, integrated delivery, and real-time bidding features.',
      category: 'Backend',
      date: 'Feb 28, 2026',
      readTime: '10 min read',
      gradient: 'linear-gradient(135deg, #f472b6, #7c3aed)',
    },
  ],
};
