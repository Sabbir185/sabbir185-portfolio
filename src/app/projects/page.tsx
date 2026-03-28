import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Projects | Sabbir Ahmmed',
  description: 'Explore my portfolio of projects — from ride-sharing platforms to e-commerce systems.',
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section" style={{ paddingTop: '140px', minHeight: '60vh' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-label">Portfolio</span>
              <h1 className="section-title">All Projects</h1>
              <p className="section-subtitle">
                A comprehensive list of projects I&apos;ve built and contributed to
              </p>
            </div>
            <div style={{
              textAlign: 'center',
              padding: '60px 24px',
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--border-subtle)',
            }}>
              <p style={{ fontSize: '3rem', marginBottom: '16px' }}>🚧</p>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '8px' }}>Coming Soon</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                This page is under construction. Check back soon for a full project showcase!
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
