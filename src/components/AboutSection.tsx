export default function AboutSection() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get to know me</span>
          <h2 className="section-title">About Me & Technologies</h2>
          <p className="section-subtitle">
            A passionate software engineer with expertise in building scalable web applications
          </p>
        </div>

        <div className="about-content">
          {/* Left - About Text */}
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>
              I&apos;m Md. Sabbir Ahmmed, a Software Engineer at Appstick, Khulna with 3+ years
              of experience building modern web applications. I hold a Master&apos;s degree in CSE from
              Khulna University and a Bachelor&apos;s from Northern University of Business &amp; Technology Khulna.
            </p>
            <p>
              I specialize in developing and maintaining web applications using React.js, Next.js,
              Node.js, Express.js, MongoDB, PostgreSQL, and Golang. I&apos;m passionate about cloud
              services (AWS/GCP), clean code architecture, and mentoring fellow developers.
            </p>

            <div className="about-highlights">
              <div className="about-highlight-card">
                <div className="about-highlight-icon">🎓</div>
                <div className="about-highlight-title">M.Sc. in CSE</div>
                <div className="about-highlight-value">Khulna University</div>
              </div>
              <div className="about-highlight-card">
                <div className="about-highlight-icon">💼</div>
                <div className="about-highlight-title">Software Engineer</div>
                <div className="about-highlight-value">Appstick, Khulna</div>
              </div>
              <div className="about-highlight-card">
                <div className="about-highlight-icon">📄</div>
                <div className="about-highlight-title">Research Paper</div>
                <div className="about-highlight-value">ML Publication (2023)</div>
              </div>
              <div className="about-highlight-card">
                <div className="about-highlight-icon">🌐</div>
                <div className="about-highlight-title">Cloud & DevOps</div>
                <div className="about-highlight-value">AWS, GCP, Docker</div>
              </div>
            </div>
          </div>

          {/* Right - Technologies */}
          <div className="tech-grid">
            <div className="tech-category">
              <div className="tech-category-title">Languages</div>
              <div className="tech-tags">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Golang</span>
              </div>
            </div>
            <div className="tech-category">
              <div className="tech-category-title">Front-End</div>
              <div className="tech-tags">
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">Redux</span>
                <span className="tech-tag">Tailwind CSS</span>
              </div>
            </div>
            <div className="tech-category">
              <div className="tech-category-title">Back-End</div>
              <div className="tech-tags">
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Express.js</span>
                <span className="tech-tag">Go</span>
                <span className="tech-tag">REST API</span>
                <span className="tech-tag">Socket.IO</span>
              </div>
            </div>
            <div className="tech-category">
              <div className="tech-category-title">Database</div>
              <div className="tech-tags">
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">Redis</span>
                <span className="tech-tag">Prisma</span>
              </div>
            </div>
            <div className="tech-category" style={{ gridColumn: 'span 2' }}>
              <div className="tech-category-title">Cloud & DevOps</div>
              <div className="tech-tags">
                <span className="tech-tag">Git</span>
                <span className="tech-tag">Docker</span>
                <span className="tech-tag">CI/CD</span>
                <span className="tech-tag">AWS</span>
                <span className="tech-tag">GCP</span>
                <span className="tech-tag">Linux Server</span>
                <span className="tech-tag">Nginx</span>
                <span className="tech-tag">Cloudflare</span>
                <span className="tech-tag">Firebase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
