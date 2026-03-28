import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Blog | Sabbir Ahmmed',
  description: 'Read my latest articles about software engineering, cloud architecture, and machine learning.',
};

export default function BlogsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section" style={{ paddingTop: '140px', minHeight: '60vh' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-label">Articles</span>
              <h1 className="section-title">Blog Posts</h1>
              <p className="section-subtitle">
                Sharing insights about software engineering, cloud, and emerging technologies
              </p>
            </div>
            <div style={{
              textAlign: 'center',
              padding: '60px 24px',
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--border-subtle)',
            }}>
              <p style={{ fontSize: '3rem', marginBottom: '16px' }}>📝</p>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '8px' }}>Coming Soon</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Blog posts are on the way. Subscribe to my newsletter to get notified!
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
