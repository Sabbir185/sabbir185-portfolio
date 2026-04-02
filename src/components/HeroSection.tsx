import Image from 'next/image';
import { heroData } from '@/data';

export default function HeroSection() {
  const { greeting, firstName, lastName, title, location, description, avatarUrl, backgroundUrl, resumeUrl, stats, badges } = heroData;

  return (
    <section className="hero" id="hero">
      {/* Background */}
      <div className="hero-bg">
        <Image
          src={backgroundUrl}
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
          <p className="hero-greeting">{greeting}</p>
          <h1 className="hero-name">
            {/* {firstName}<br /> */}
            <span className="hero-name-gradient">{firstName + ' ' + lastName}</span>
          </h1>
          <p className="hero-title">
            <span>{title}</span> | {location}
          </p>
          <p className="hero-description">{description}</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary" id="hero-cta">
              <span>Get in Touch</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
            </a>
            <a href={resumeUrl} className="btn btn-outline" target="_blank" rel="noopener noreferrer" id="hero-resume">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              <span>Download CV</span>
            </a>
          </div>

          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="hero-stat-number">{stat.value}</div>
                <div className="hero-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-wrapper">
            <div className="hero-image-ring"></div>
            <div className="hero-image-ring hero-image-ring-2"></div>
            <Image
              src={avatarUrl}
              alt={`${firstName} ${lastName}`}
              width={380}
              height={380}
              className="hero-avatar"
              priority
            />

            {/* Floating Badges */}
            {badges.map((badge, index) => (
              <div className={`hero-floating-badge hero-badge-${index + 1}`} key={index}>
                <span className={`badge-dot badge-dot-${badge.dotColor}`}></span>
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
