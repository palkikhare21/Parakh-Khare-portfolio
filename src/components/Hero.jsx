import React from "react";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-eyebrow">
        <span>Graphic Designer</span>
        <span>UI UX Designer</span>
        <span>Brand Systems</span>
      </div>

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">Parakh Khare Portfolio</p>

          <h1>
            Designing brands that feel sharp, useful and impossible to ignore.
          </h1>

          <p className="hero-description">
            A graphic and UI/UX designer crafting identities, campaign visuals,
            interfaces, logos, packaging and social-first design systems.
          </p>

          <div className="hero-actions">
            <a href="#featured">View Work</a>
            <a href="#contact">Start a Project</a>
          </div>
        </div>

        <div className="hero-showcase" aria-label="Featured design preview">
          <div className="showcase-card showcase-card-large">
            <img
              src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=900&q=85"
              alt="Abstract colorful graphic design artwork"
            />
            <div>
              <span>Featured</span>
              <strong>Visual Identity</strong>
            </div>
          </div>

          <div className="showcase-stack">
            <div className="showcase-chip">Figma</div>
            <div className="showcase-card showcase-card-small">
              <img
                src="https://images.unsplash.com/photo-1613909207039-6b173b755cc1?w=600&q=85"
                alt="Creative moodboard and design details"
              />
            </div>
            <div className="showcase-metric">
              <strong>35+</strong>
              <span>design directions explored</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-marquee">
        <span>Branding</span>
        <span>Logo Design</span>
        <span>UI UX</span>
        <span>Social Media</span>
        <span>Packaging</span>
      </div>
    </section>
  );
};

export default Hero;
