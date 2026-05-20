import "./style/ProjectGallery.css";

export default function ProjectGallery() {
  const projects = [
    { className: "pw-wide", tag: "Image Slot 01 — Wide", cat: "Brand Identity" },
    { className: "pw-tall", tag: "Image Slot 02 — Tall", cat: "Typography" },
    { className: "", tag: "Image Slot 03", cat: "Packaging" },
    { className: "", tag: "Image Slot 04", cat: "Social Media" },
    { className: "pw-wide", tag: "Image Slot 05 — Wide", cat: "Editorial" },
    { className: "", tag: "Image Slot 06", cat: "Illustration" },
    { className: "", tag: "Image Slot 07", cat: "Art Direction" },
    { className: "", tag: "Image Slot 08", cat: "Print Design" },
  ];

  return (
    <section id="project-work" className="project-work-section">
      <div className="section-header fade-up" style={{ padding: 0 }}>
        <div>
          <div className="section-label">Design Work</div>
          <h2 className="section-title">
            PROJECT
            <br />
            GALLERY
          </h2>
        </div>

        <a className="view-all" href="#">
          View All Work
        </a>
      </div>

      <div className="project-work-grid fade-up">
        {projects.map((project, index) => (
          <div className={`pw-item ${project.className}`} key={index}>
            <div className="pw-slot">
              <div className="pw-placeholder">
                <div className="pw-placeholder-frame">▧</div>
                <span className="pw-placeholder-hint">
                  Add your work image here
                  <br />
                  Recommended size
                </span>
              </div>

              <span className="pw-tag">{project.tag}</span>

              <div className="pw-overlay"></div>

              <div className="pw-meta">
                <div className="pw-cat">{project.cat}</div>
                <div className="pw-title">PROJECT TITLE</div>
                <div className="pw-desc">Short description of this project</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}