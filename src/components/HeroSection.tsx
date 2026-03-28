import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="hero" id="hero">
      {/* Background */}
      <div className="hero-bg">
        <Image
          src="/hero-bg.png"
          alt="Hero background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* Floating Orbs */}
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <div className="hero-orb hero-orb-3"></div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I&apos;m</p>
          <h1 className="hero-name">
            Md. Sabbir<br />
            <span className="hero-name-gradient">Ahmmed</span>
          </h1>
          <p className="hero-title">
            <span>Software Engineer</span> based in Bangladesh
          </p>
          <p className="hero-description">
            Building scalable web applications with React, Next.js, Node.js, and Go.
            Passionate about clean architecture, cloud-native solutions, and crafting
            exceptional digital experiences.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary" id="hero-cta">
              <span>Get in Touch</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </a>
            <a href="/resume.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer" id="hero-resume">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              <span>Download CV</span>
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <div className="hero-stat-number">3+</div>
              <div className="hero-stat-label">Years Exp.</div>
            </div>
            <div>
              <div className="hero-stat-number">10+</div>
              <div className="hero-stat-label">Projects</div>
            </div>
            <div>
              <div className="hero-stat-number">1</div>
              <div className="hero-stat-label">Publication</div>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-wrapper">
            <div className="hero-image-ring"></div>
            <div className="hero-image-ring hero-image-ring-2"></div>
            <Image
              src="/sabbir.png"
              alt="Sabbir Ahmmed"
              width={380}
              height={380}
              className="hero-avatar"
              priority
            />

            {/* Floating Badges */}
            <div className="hero-floating-badge hero-badge-1">
              <span className="badge-dot badge-dot-green"></span>
              Available for Work
            </div>
            <div className="hero-floating-badge hero-badge-2">
              <span className="badge-dot badge-dot-blue"></span>
              Full-Stack Dev
            </div>
            <div className="hero-floating-badge hero-badge-3">
              <span className="badge-dot badge-dot-purple"></span>
              Cloud & DevOps
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
