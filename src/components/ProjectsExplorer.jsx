import { useState } from "react"
import projects from "../data/projects"
import Folder from "./Folder"

export default function ProjectsExplorer() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="explorer">
      {!selectedProject ? (
        <div className="folders">
          {projects.map(project => (
            <Folder
              key={project.id}
              name={project.name}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>
      ) : (
        <div className="project-details">
          <button onClick={() => setSelectedProject(null)}>
            ⬅ Voltar
          </button>

          <h3>{selectedProject.name}</h3>
          <p>{selectedProject.description}</p>

          <strong>Tecnologias:</strong>
          <ul>
            {selectedProject.techs.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
