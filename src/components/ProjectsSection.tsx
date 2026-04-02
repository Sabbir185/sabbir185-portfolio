'use client';

import { useState } from 'react';
import Image from 'next/image';
import { projectsData } from '@/data';

export default function ProjectsSection() {
  const { sectionLabel, sectionTitle, sectionSubtitle, projects } = projectsData;
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{sectionLabel}</span>
          <h2 className="section-title">{sectionTitle}</h2>
          <p className="section-subtitle">{sectionSubtitle}</p>
        </div>

        <div className="projects-carousel">
          <div className="carousel-viewport">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="project-card">
                    <div className="project-card-image">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={900}
                        height={240}
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      />
                      <div className="project-card-overlay"></div>
                      <span className="project-card-badge">{project.badge}</span>
                    </div>
                    <div className="project-card-body">
                      <h3 className="project-card-title">{project.title}</h3>
                      <p className="project-card-subtitle">{project.subtitle}</p>
                      <p className="project-card-desc">{project.description}</p>
                      <div className="project-card-techs">
                        {project.techs.map((tech, i) => (
                          <span className="project-tech-tag" key={i}>{tech}</span>
                        ))}
                      </div>
                      <div className="project-card-actions">
                        <a href={project.liveUrl} className="project-card-link" target="_blank" rel="noopener noreferrer">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                          Live Demo
                        </a>
                        {project?.githubUrl && <a href={project.githubUrl} className="project-card-link" target="_blank" rel="noopener noreferrer">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                          Source Code
                        </a>}
                        {project?.playStoreUrl && <a href={project.playStoreUrl} className="project-card-link" target="_blank" rel="noopener noreferrer">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.38l2.545 1.474c.308.178.5.508.5.866s-.192.688-.5.866l-2.545 1.474-2.545-2.84 2.545-2.84zM5.864 3.458L16.8 9.79l-2.302 2.302-8.635-8.635z"/></svg>
                          Play Store
                        </a>}
                        {project?.appStoreUrl && <a href={project.appStoreUrl} className="project-card-link" target="_blank" rel="noopener noreferrer">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                          App Store
                        </a>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-controls">
            <button className="carousel-btn" onClick={prevSlide} aria-label="Previous project" id="carousel-prev">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <div className="carousel-dots">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
            <button className="carousel-btn" onClick={nextSlide} aria-label="Next project" id="carousel-next">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
