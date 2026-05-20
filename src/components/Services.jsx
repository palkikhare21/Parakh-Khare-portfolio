import "./style/Services.css";


export default function Services() {
  const services = [
    {
      title: "Brand Identity",
      desc: "Complete visual identity systems — logo, color, typography, guidelines — built to scale across every touchpoint.",
    },
    {
      title: "Print & Editorial",
      desc: "Magazines, books, annual reports, and print collateral with careful attention to layout, hierarchy, and rhythm.",
    },
    {
      title: "Packaging Design",
      desc: "Structural and surface design for product packaging that commands shelf presence and tells your brand story.",
    },
    {
      title: "Typography",
      desc: "Custom type systems and bespoke lettering that give brands a voice no competitor can copy.",
    },
    {
      title: "Social Media",
      desc: "Cohesive visual systems for digital channels — templates, content strategy, and brand-consistent creative.",
    },
    {
      title: "Art Direction",
      desc: "Creative direction for campaigns, photography, and brand moments — ensuring every output speaks one language.",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="section-header" style={{ padding: 0 }}>
        <div>
          <div className="section-label">What I Do</div>
          <h2 className="section-title">SERVICES</h2>
        </div>
      </div>

      <div className="services-grid fade-up">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <span className="service-num">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
            <div className="service-line"></div>
          </div>
        ))}
      </div>
    </section>
  );
}