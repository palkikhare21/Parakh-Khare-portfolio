import "./VisualIdentity.css";


const projects = [
  {
    id: 1,
    title: "Coffee Brand",
    category: "Visual Identity",
    image: "https://placehold.co/600x400?text=Project+1",
  },
  {
    id: 2,
    title: "Fashion Studio",
    category: "Brand Guidelines",
    image: "https://placehold.co/600x400?text=Project+2",
  },
  {
    id: 3,
    title: "Luxury Perfume",
    category: "Complete Identity",
    image: "https://placehold.co/600x400?text=Project+3",
  },
];

export default function VisualIdentity() {
  return (
    <section className="identity" id="identity">

      <div className="identity-header">

        <span>03</span>

        <div>

          <h2>Visual Identity</h2>

          <p>
            Brand Identity • Guidelines • Typography • Color System
          </p>

        </div>

      </div>

      <div className="identity-projects">

        {projects.map((project, index) => (

          <div
            className={`identity-card ${index % 2 !== 0 ? "reverse" : ""}`}
            key={project.id}
          >

            <div className="identity-image">

              <img src={project.image} alt={project.title} />

            </div>

            <div className="identity-content">

              <span>{project.category}</span>

              <h3>{project.title}</h3>

              <p>
                A complete branding system including logo,
                typography, colors, stationery and digital
                applications designed to create a memorable
                brand experience.
              </p>

              <button>View Project →</button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}