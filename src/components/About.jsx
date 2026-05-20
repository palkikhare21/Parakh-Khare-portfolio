import "./style/About.css";


export default function About() {
  const tools = [
    { name: "Figma", className: "tool-figma", label: "Fi" },
    { name: "Photoshop", className: "tool-ps", label: "Ps" },
    { name: "Illustrator", className: "tool-ai", label: "Ai" },
    { name: "After Effects", className: "tool-ae", label: "Ae" },
    { name: "Adobe XD", className: "tool-xd", label: "Xd" },
    { name: "InDesign", className: "tool-id", label: "Id" },
    { name: "Premiere Pro", className: "tool-pr", label: "Pr" },
    { name: "Lightroom", className: "tool-lr", label: "Lr" },
    { name: "Canva", className: "tool-canva", label: "Ca" },
    { name: "Blender", className: "tool-blender", label: "Bl" },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-visual fade-up">
        <div className="about-art">
          <div className="about-circle"></div>
          <div className="about-triangle"></div>
          <div className="about-dot"></div>
        </div>

        <div className="about-accent">Graphic Designer · 2026</div>
        <div className="canvas-label">— Creative Universe —</div>
      </div>

      <div className="about-content fade-up">
        <div className="section-label">About Me</div>

        <div className="about-subtitle">
          Design is how I speak when words aren't enough.
        </div>

        <p className="about-text">
          I'm Alex Mercer, a graphic designer with over 8 years of experience
          building brands that resonate. My work lives at the intersection of
          bold typography, strategic thinking, and meticulous craft — from
          early-stage startups to global luxury labels.
        </p>

        <p className="about-text">
          Based in New York. Open to remote collaborations worldwide. I believe
          every visual decision is a communication decision.
        </p>

        <p className="tools-label">Tools & Software</p>

        <div className="tools-grid">
          {tools.map((tool) => (
            <div
              className={`tool-icon ${tool.className}`}
              data-name={tool.name}
              key={tool.name}
            >
              <span>{tool.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}