import "../styles/about.css";

const About = () => {
  return (
    <section className="about" id="about">

      <div className="about-header">

        <p>About</p>

        <h2>
          More than just
          <br />
          beautiful designs.
        </h2>

      </div>

      <div className="about-content">

        <div className="about-stats">

          <div className="stat">
            <h3>05+</h3>
            <p>Years Experience</p>
          </div>

          <div className="stat">
            <h3>120+</h3>
            <p>Projects</p>
          </div>

          <div className="stat">
            <h3>40+</h3>
            <p>Happy Clients</p>
          </div>

        </div>

        <div className="about-text">

          <p>
            I specialize in creating visual identities,
            logos, packaging and digital experiences that
            help brands stand out. Every project is built
            with strategy, creativity and attention to
            detail, ensuring every design tells a story.
          </p>

        </div>

      </div>

    </section>
  );
};

export default About;