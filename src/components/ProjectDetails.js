function ProjectDetails({ project }) {
  return (
    <>
      <div
        className="project-details-container"
        id={project.id}
        aria-labelledby="project-details"
      >
        {project.title && (
          <div className="project-details-title" aria-label="Project title:">
            {project.title}
          </div>
        )}
        {project.description && (
          <div className="project-details-description">
            <span
              className="project-description-labels"
              aria-label="Project description:"
            >
              Description:
            </span>{" "}
            {project.description}
          </div>
        )}
        {project.stack && (
          <div className="project-details-stack">
            <span
              className="project-description-labels"
              aria-label="Tech-stack:"
            >
              Tech-stack:
            </span>{" "}
            {project.stack}
          </div>
        )}
        {project.killerFeature && (
          <div className="project-details-feature">
            <span
              className="project-description-labels"
              aria-label="Killer feature:"
            >
              Killer feature:
            </span>{" "}
            {project.killerFeature}
          </div>
        )}
      </div>
    </>
  );
}

export default ProjectDetails;
