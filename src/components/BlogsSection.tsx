const blogs = [
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
];

export default function BlogsSection() {
  return (
    <section className="section blogs" id="blogs">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Insights & Articles</span>
          <h2 className="section-title">Latest Blog Posts</h2>
          <p className="section-subtitle">
            Sharing knowledge about software engineering, cloud architecture, and machine learning
          </p>
        </div>

        <div className="blogs-grid">
          {blogs.map((blog, index) => (
            <a href="#" className="blog-card blog-card-gradient" key={index} id={`blog-card-${index}`}>
              <div className="blog-card-image">
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    background: blog.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Decorative pattern */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.15,
                    backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%),
                                      radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 40%),
                                      radial-gradient(circle at 60% 80%, rgba(255,255,255,0.2) 0%, transparent 40%)`,
                  }} />
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                    <line x1="8" y1="7" x2="16" y2="7"/>
                    <line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </div>
                <span className="blog-card-category">{blog.category}</span>
              </div>
              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    {blog.date}
                  </span>
                  <span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {blog.readTime}
                  </span>
                </div>
                <h3 className="blog-card-title">{blog.title}</h3>
                <p className="blog-card-excerpt">{blog.excerpt}</p>
                <div className="blog-card-read">
                  Read More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
