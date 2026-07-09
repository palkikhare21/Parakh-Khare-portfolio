import "../styles/projectcard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">

      <div className="project-number">
        {project.id}
      </div>

      <div className="project-image">

        <img
          src={project.image}
          alt={project.title}
        />

      </div>

      <div className="project-content">

        <div>

          <p className="project-category">
            {project.category}
          </p>

          <h2>
            {project.title}
          </h2>

          <p className="project-description">
            {project.description}
          </p>

        </div>

        <button>
          View Project →
        </button>

      </div>

    </div>
  );
};

export default ProjectCard;