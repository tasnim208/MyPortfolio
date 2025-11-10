import { Link } from "react-router-dom";


export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-thumbnail" />
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.short}</p>
        <Link to={`/project/${project.id}`} className="btn">
          Voir détails →
        </Link>
      </div>
    </div>
  );
}
