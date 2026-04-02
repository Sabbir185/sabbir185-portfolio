import { aboutData } from '@/data';

export default function AboutSection() {
  const { sectionLabel, sectionTitle, sectionSubtitle, whoIAmTitle, paragraphs, highlights, technologies } = aboutData;

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{sectionLabel}</span>
          <h2 className="section-title">{sectionTitle}</h2>
          <p className="section-subtitle">{sectionSubtitle}</p>
        </div>

        <div className="about-content">
          {/* Left - About Text */}
          <div className="about-text">
            <h3>{whoIAmTitle}</h3>
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="about-highlights">
              {highlights.map((highlight, index) => (
                <div className="about-highlight-card" key={index}>
                  <div className="about-highlight-icon">{highlight.icon}</div>
                  <div className="about-highlight-title">{highlight.title}</div>
                  <div className="about-highlight-value">{highlight.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Technologies */}
          <div className="tech-grid">
            {technologies.map((category, index) => (
              <div
                className="tech-category"
                key={index}
                style={category.fullWidth ? { gridColumn: 'span 2' } : undefined}
              >
                <div className="tech-category-title">{category.name}</div>
                <div className="tech-tags">
                  {category.tags.map((tag, i) => (
                    <span className="tech-tag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
