import "./style/CTA.css";

export default function CTA() {
  return (
    <section id="contact" className="cta-section">
      <div className="cta-bg"></div>

      <div style={{ position: "relative", zIndex: 2 }}>
        <div className="cta-label">Have a project in mind?</div>

        <h2 className="cta-title">
          LET'S CREATE
          <br />
          SOMETHING <span className="em">ICONIC</span>
        </h2>

        <div className="cta-buttons">
          <a href="mailto:hello@example.com" className="btn-primary">
            Start a Project
          </a>

          <a href="#works" className="btn-secondary">
            View Work
          </a>
        </div>
      </div>
    </section>
  );
}