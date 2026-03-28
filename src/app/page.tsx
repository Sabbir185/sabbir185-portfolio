import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import BlogsSection from '@/components/BlogsSection';
import ContactSection from '@/components/ContactSection';
import SubscriptionSection from '@/components/SubscriptionSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <BlogsSection />
        <ContactSection />
        <SubscriptionSection />
      </main>
      <Footer />
    </>
  );
}
