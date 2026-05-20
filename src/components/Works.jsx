import "./style/Works.css";


export default function Works() {
  const works = [
    {
      className: "wide",
      bg: "w1",
      category: "Brand Identity",
      title: "EMBER SPIRITS",
      year: "2026 — Full Branding System",
      text: "EMBER",
    },
    {
      className: "",
      bg: "w2",
      category: "Typography",
      title: "ATLAS TYPEFACE",
      year: "2025 — Type Design",
      text: "Aa",
    },
    {
      className: "",
      bg: "w3",
      category: "Visual Identity",
      title: "NOVA STUDIO",
      year: "2025 — Identity System",
      text: "NOVA",
    },
    {
      className: "",
      bg: "w4",
      category: "Packaging",
      title: "VERDANT TEA CO.",
      year: "2025 — Packaging Design",
      text: "Verdant",
    },
    {
      className: "",
      bg: "w5",
      category: "Editorial",
      title: "RED SHIFT MAG",
      year: "2024 — Art Direction",
      text: "BOLD",
    },
    {
      className: "wide",
      bg: "w6",
      category: "Luxury Brand",
      title: "AURUM JEWELLERS",
      year: "2024 — Brand Identity + Campaign",
      text: "AURUM",
    },
  ];

  return (
    <section id="works">
      <div className="section-header fade-up">
        <div>
          <div className="section-label">Selected Projects</div>
          <h2 className="section-title">
            FEATURED
            <br />
            WORK
          </h2>
        </div>

        <a className="view-all" href="#">
          View All
        </a>
      </div>

      <div className="works-grid">
        {works.map((work, index) => (
          <div className={`work-item ${work.className} fade-up`} key={index}>
            <div className="work-thumb">
              <div className={`work-thumb-inner ${work.bg}`}>
                <div className="composition">
                  <span className="work-demo-text">{work.text}</span>
                </div>
              </div>

              <div className="work-overlay"></div>

              <div className="work-info">
                <div className="work-cat">{work.category}</div>
                <div className="work-title">{work.title}</div>
                <div className="work-year">{work.year}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}