import React from "react";
import "../styles/hero.css";


const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div classname="hero-top">
        <p classname="hero-subtitle">
 Graphic Designer
        </p>
       
      </div>
      <h1>Crafting
        <br />
        Memorable
<br />
Brands.
      </h1>
       <div className="hero-info">

          <p>Visual Identity</p>
          <p>Logo Design</p>
          <p>Packaging</p>
          <p>Social Media</p>

        </div>
        

      <div className="scroll-text">
        Scroll to Explore ↓
      </div>
    </section>
  );
}

export default Hero;