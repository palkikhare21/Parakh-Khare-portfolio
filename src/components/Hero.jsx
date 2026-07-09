import React from "react";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-top">
        <p className="hero-subtitle">
          GRAPHIC DESIGNER
          <br />
          <br />
          Creative Branding Studio
        </p>
      </div>

      <div className="hero-content">
        <h1>
          Crafting
          <br />
          Memorable
          <br />
          <span>Brands</span>
        </h1>

        <div className="hero-info">
          <p>01 Visual Identity</p>
          <p>02 Logo Design</p>
          <p>03 Packaging</p>
          <p>04 Social Media</p>
        </div>
      </div>

      <div className="scroll-text">Scroll to Explore ↓</div>
    </section>
  );
};

export default Hero;