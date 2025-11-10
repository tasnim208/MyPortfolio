import { useParams, Link } from "react-router-dom"; 
import { projects } from "../data/project"; 
import "../styles/projectDetail.css";



export default function ProjectDetail() {
  const { id } = useParams();

  
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="page">
        <h2>Projet introuvable 😕</h2>
        <Link to="/projects" className="back-btn">
          Retour aux projets
        </Link>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      <div className="project-image-container">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
      </div>

      <div className="project-info">
        <h1>{project.title}</h1>
        <p className="project-description">{project.description}</p>

        <h3>🛠 Technologies utilisées</h3>
        <ul className="tech-list">
          {project.techno.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="project-links">
          {project.source && (
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              💻 Code source
            </a>
          )}
        </div>

        <Link to="/projects" className="back-btn">
          ← Retour aux projets
        </Link>
      </div>
    </div>
  );
}