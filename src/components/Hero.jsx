import "./style/Hero.css";


export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-grid-lines"></div>
      <div className="hero-number">01</div>

      <div style={{ position: "relative", zIndex: 2 }}>
        <div className="hero-tag">
          Graphic Designer & Brand Strategist — 2026
        </div>

        <h1 className="hero-title">
          <span>CRAFTING</span>
          <span className="italic">Visual</span>
          <span>STORIES</span>
        </h1>

        <div className="hero-bottom">
          <p className="hero-desc">
            Brand identities, typographic systems, and visual narratives that
            leave a lasting impression. Available for freelance worldwide.
          </p>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">8+</span>
              <span className="stat-label">Years Exp</span>
            </div>

            <div className="stat">
              <span className="stat-num">120+</span>
              <span className="stat-label">Projects</span>
            </div>

            <div className="stat">
              <span className="stat-num">40+</span>
              <span className="stat-label">Clients</span>
            </div>
          </div>

          <div className="hero-scroll">
            <span className="scroll-line"></span>
            Scroll to explore
          </div>
        </div>
      </div>
    </section>
  );
}