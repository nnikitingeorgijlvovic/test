import { useState, useContext } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { Context } from "../context/ContextProvider";
import ProjectDetails from "./ProjectDetails";

function ProjectThumbnail({ images, id }) {
  const { state, selectedProject, setSelectedProject } = useContext(Context);
  const [srcPath, setSrcPath] = useState("img/underwater-surface-photo.jpeg");
  const [currentIdx, setCurrentIdx] = useState(0);

  let currentProject = state.filter((item) => item.id === id)[0];
  let ghLink = currentProject.gh;
  let liveLink = currentProject.live;
  let techStack = currentProject.stack;

  const handleCarousel = (e) => {
    setSelectedProject(id);
    if (e.target.className === "left") {
      setCurrentIdx((prevState) => prevState - 1);
      if (currentIdx <= 0) {
        setCurrentIdx(images.length - 1);
        setSrcPath(images[images.length - 1]);
      } else {
        setSrcPath(images[currentIdx === 0 ? currentIdx : currentIdx - 1]);
      }
    }
    if (e.target.className === "right") {
      setCurrentIdx((prevState) => prevState + 1);
      if (currentIdx < images.length - 1) {
        setSrcPath(images[currentIdx + 1]);
      } else {
        setCurrentIdx(0);
        setSrcPath(images[0]);
      }
    }
  };

  const handleFade = (e) => {
    setSelectedProject(id);

    let items = e.target.closest(".main").children;

    [...items].forEach((item) => {
      item.classList.add("fade");

      if (item.classList.contains("display-project-details")) {
        const currentItem = item.querySelector(id);
        currentItem?.classList.add("hide-details");
        item.classList.remove("fade");
      }

      let image = item.querySelector("img");
      image?.setAttribute("src", "img/underwater-surface-photo.jpeg");
    });

    e.target?.closest(".thumbnail-container").classList.remove("fade");
  };

  return (
    <div className="thumbnail-container">
      <div
        id={id}
        className="project-item thumbnail thumbnail-1"
        onClick={handleFade}
      >
        <button onClick={handleCarousel} className="left" tabIndex="1">
          &lt;
        </button>
        <img
          className="project-thumbnail"
          src={srcPath}
          alt="project-thumbnail"
        />
        <button onClick={handleCarousel} className="right" tabIndex="1">
          &gt;
        </button>
        <div className="flex">
          <p className="caption">{techStack}</p>
          <div>
            <a
              href={ghLink}
              target="_blank"
              name="github-icon"
              aria-hidden="true"
              title="Visit olicoding, my GitHub account."
              rel="noreferrer"
              tabIndex="1"
              className="thumbnail-git"
            >
              <FaGithub />
            </a>
          </div>
          <div>
            <a
              href={liveLink}
              target="_blank"
              name="live-version-link-icon"
              aria-hidden="true"
              title="Visit olicoding, my GitHub account."
              rel="noreferrer"
              tabIndex="1"
              className="thumbnail-link-rings"
            >
              <FaLink />
            </a>
          </div>
        </div>
      </div>

      {selectedProject === id && (
        <div className="display-project-details">
          <ProjectDetails
            project={state.find((el) => el.id === selectedProject)}
          />
        </div>
      )}
    </div>
  );
}

export default ProjectThumbnail;
