import "../styles/projectcard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-basic">
        <span>{project.id}</span>
        <p>{project.category}</p>
        <h3>{project.title}</h3>
      </div>

      <div className="project-reveal">
        <div>
          <span>{project.year}</span>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>

        <dl>
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Tools</dt>
            <dd>{project.tools.join(" / ")}</dd>
          </div>
        </dl>

        <button type="button">View Details</button>
      </div>
    </div>
  );
};

export default ProjectCard;
