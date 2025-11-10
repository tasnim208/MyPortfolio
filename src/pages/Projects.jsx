import { useState } from "react";
import { projects } from "../data/project"; 
import ProjectCard from "../components/ProjectCard";
import "../styles/projects.css";



export default function Projects() {
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((proj) => {
    const text = `${proj.title} ${proj.short} ${proj.description} ${proj.techno.join(" ")}`.toLowerCase();
    return text.includes(search.toLowerCase());
  });

  return (
    <div className="projects-container">
      <h1>Mes Projets</h1>
      <p className="projects-intro">Recherchez un projet par nom, technologie ou mot-clé :</p>

      <input
        type="text"
        placeholder="🔍 Rechercher un projet..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="projects-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((proj) => <ProjectCard key={proj.id} project={proj} />)
        ) : (
          <p className="no-results">Aucun projet trouvé pour “{search}”</p>
        )}
      </div>
    </div>
  );
}
