import "../styles/featured.css";

import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: "01",
    title: "Cafe Aura",
    category: "Brand Identity",
    role: "Logo, menu system, packaging, social kit",
    year: "2026",
    tools: ["Illustrator", "Photoshop", "Figma"],
    description:
      "A warm but premium identity system built for a modern cafe launch.",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1000&q=85",
  },
  {
    id: "02",
    title: "Mode Streetwear",
    category: "Campaign Design",
    role: "Creative direction, posters, social media",
    year: "2026",
    tools: ["Photoshop", "Canva", "Figma"],
    description:
      "A bold fashion campaign with high-contrast layouts and expressive type.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000&q=85",
  },
  {
    id: "03",
    title: "Fintech App Concept",
    category: "UI UX Design",
    role: "Product screens, flow, design system",
    year: "2026",
    tools: ["Figma", "Prototype", "Wireframe"],
    description:
      "A clean mobile experience designed for trust, speed and conversion.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1000&q=85",
  },
  {
    id: "04",
    title: "Luxe Pack",
    category: "Packaging",
    role: "Label design, box mockups, visual language",
    year: "2025",
    tools: ["Illustrator", "Photoshop"],
    description:
      "Premium packaging direction with elegant typography and tactile details.",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1000&q=85",
  },
];

const FeaturedWork = () => {
  return (
    <section className="featured-work" id="featured">
      <div className="featured-title">
        <p>Selected Projects</p>
        <h2>Work that shows range, taste and problem solving.</h2>
      </div>

      <div className="projects">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;
