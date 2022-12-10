import { useContext } from "react";
import { Context } from "../context/ContextProvider";
import ProjectThumbnail from "../components/ProjectThumbnail";

function Projects() {
  const { state } = useContext(Context);

  return (
    <main
      className="main"
      role="main"
      aria-label="Projects page"
      aria-live="polite"
    >
      {state.map((project, idx) => (
        <ProjectThumbnail key={idx} images={project.images} id={project.id} />
      ))}
    </main>
  );
}

export default Projects;
