function ProjectDetails({ project }) {
  return (
    <>
      <div className="project-details-container" id={project.id}>
        {project.title && (
          <div className="project-details-title">{project.title}</div>
        )}
        {project.description && (
          <div className="project-details-description">
            <span className="project-description-labels">Description:</span>{" "}
            {project.description}
          </div>
        )}
        {project.stack && (
          <div className="project-details-stack">
            <span className="project-description-labels">Tech-stack:</span>{" "}
            {project.stack}
          </div>
        )}
        {project.killerFeature && (
          <div className="project-details-feature">
            <span className="project-description-labels">Killer feature:</span>{" "}
            {project.killerFeature}
          </div>
        )}
      </div>
    </>
  );
}

export default ProjectDetails;
