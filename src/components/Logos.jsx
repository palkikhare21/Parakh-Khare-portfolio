import "./style/Logos.css";


export default function Logos() {
  const logos = Array.from({ length: 8 }, (_, index) => index + 1);

  return (
    <section id="logos" className="logos-section">
      <div className="section-header fade-up" style={{ padding: 0 }}>
        <div>
          <div className="section-label">Logo Design</div>
          <h2 className="section-title">
            LOGO
            <br />
            SHOWCASE
          </h2>
        </div>

        <div style={{ textAlign: "right" }}>
          <p className="logos-intro">
            A collection of mark-making — symbols, wordmarks, and monograms
            crafted for brands across every industry.
          </p>
        </div>
      </div>

      <div className="logos-grid fade-up">
        {logos.map((logo) => (
          <div className="logo-slot" key={logo}>
            <div className="logo-placeholder">
              <div className="logo-placeholder-icon">✦</div>
              <span className="logo-placeholder-label">Your Logo Here</span>
            </div>

            <div className="logo-slot-name">Client Name 0{logo}</div>
          </div>
        ))}
      </div>
    </section>
  );
}