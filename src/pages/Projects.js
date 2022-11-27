import { useContext } from "react";
import { Context } from "../context/ContextProvider";
import ProjectThumbnail from "../components/ProjectThumbnail";

function Projects() {
  const { state } = useContext(Context);

  return (
    <main className="main">
      {state.map((project, idx) => (
        <ProjectThumbnail key={idx} images={project.images} id={project.id} />
      ))}
    </main>
  );
}

export default Projects;
