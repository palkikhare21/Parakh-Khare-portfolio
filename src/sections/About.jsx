import "../styles/about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-header">
        <p>About the Designer</p>
        <h2>
          Strategy-first visuals for brands, screens and campaigns.
        </h2>
      </div>

      <div className="about-content">
        <div className="about-stats">
          <div className="stat">
            <h3>Branding</h3>
            <p>Identity systems, logos, stationery and mockups.</p>
          </div>
          <div className="stat">
            <h3>UI UX</h3>
            <p>App screens, web layouts, user flows and components.</p>
          </div>
          <div className="stat">
            <h3>Campaigns</h3>
            <p>Social creatives, posters, launches and content systems.</p>
          </div>
        </div>

        <div className="about-text">
          <p>
            Parakh creates visual work that balances taste with practical
            outcomes: memorable identities, polished digital interfaces and
            marketing assets that feel consistent across every touchpoint.
          </p>

          <div className="tool-list">
            <span>Figma</span>
            <span>Photoshop</span>
            <span>Illustrator</span>
            <span>Canva</span>
            <span>Brand Systems</span>
            <span>Motion Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
