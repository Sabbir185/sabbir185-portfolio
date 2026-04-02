// ============================================================
// Centralized TypeScript types for all portfolio data.
// When the backend API is connected, these types will serve as
// the contract between frontend and backend responses.
// ============================================================

// ---- Hero Section ----
export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroBadge {
  text: string;
  dotColor: 'green' | 'blue' | 'purple';
}

export interface HeroData {
  greeting: string;
  firstName: string;
  lastName: string;
  title: string;
  location: string;
  description: string;
  avatarUrl: string;
  backgroundUrl: string;
  resumeUrl: string;
  stats: HeroStat[];
  badges: HeroBadge[];
}

// ---- About Section ----
export interface AboutHighlight {
  icon: string;
  title: string;
  value: string;
}

export interface TechCategory {
  name: string;
  tags: string[];
  /** If true, the category spans full width (e.g. Cloud & DevOps) */
  fullWidth?: boolean;
}

export interface AboutData {
  sectionLabel: string;
  sectionTitle: string;
  sectionSubtitle: string;
  whoIAmTitle: string;
  paragraphs: string[];
  highlights: AboutHighlight[];
  technologies: TechCategory[];
}

// ---- Projects Section ----
export interface Project {
  title: string;
  subtitle: string;
  description: string;
  techs: string[];
  image: string;
  badge: string;
  liveUrl: string;
  githubUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
}

export interface ProjectsSectionData {
  sectionLabel: string;
  sectionTitle: string;
  sectionSubtitle: string;
  projects: Project[];
}

// ---- Blogs Section ----
export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  gradient: string;
  slug?: string;
}

export interface BlogsSectionData {
  sectionLabel: string;
  sectionTitle: string;
  sectionSubtitle: string;
  blogs: BlogPost[];
}

// ---- Contact Section ----
export interface ContactMethod {
  icon: string;
  label: string;
  value: string;
  href: string;
  id: string;
  external?: boolean;
}

export interface ContactData {
  sectionLabel: string;
  sectionTitle: string;
  sectionSubtitle: string;
  infoHeading: string;
  infoDescription: string;
  methods: ContactMethod[];
}

// ---- Navigation ----
export interface NavLink {
  label: string;
  href: string;
  /** true for internal Next.js Link, false for anchor scroll */
  isRoute: boolean;
}

export interface NavigationData {
  logo: string;
  logoAccent: string;
  links: NavLink[];
  authLinks: {
    login: { label: string; href: string };
    signup: { label: string; href: string };
  };
}

// ---- Footer ----
export interface SocialLink {
  label: string;
  href: string;
  id: string;
  /** SVG path data for the icon */
  svgContent: string;
  /** true if the icon uses fill, false if it uses stroke */
  usesFill: boolean;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string; external?: boolean; isRoute?: boolean }[];
}

export interface FooterData {
  brandDescription: string;
  socials: SocialLink[];
  columns: FooterColumn[];
  copyrightName: string;
  copyrightNote: string;
}

// ---- Subscription Section ----
export interface SubscriptionData {
  icon: string;
  title: string;
  description: string;
  placeholder: string;
  buttonText: string;
  successMessage: string;
}

// ---- Site Config ----
export interface SiteConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  ogTitle: string;
  ogDescription: string;
}
