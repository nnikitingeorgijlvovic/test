import { NavLink } from "react-router-dom";
import LightsSwitch from "../components/Switch";
import {
  FaGithub,
  FaXingSquare,
  FaLinkedin,
  FaEnvelopeSquare,
} from "react-icons/fa";

function Header() {
  return (
    <header className="header" data-testid="header-test">
      <div className="magical-line-position">
        <div className="magical-line">
          <LightsSwitch />
        </div>
        <div className="social">
          <ul>
            <li>
              <a
                tabIndex="1"
                href="https://github.com/olicoding"
                target="_blank"
                name="github-icon"
                aria-hidden="false"
                title="Visit olicoding, my GitHub account"
                rel="noreferrer"
              >
                <FaGithub className="icon" />
              </a>
            </li>
            <li>
              <a
                tabIndex="1"
                href="https://www.linkedin.com/in/rafaelbenchimoldeoliveira"
                target="_blank"
                name="linkedin-icon"
                aria-hidden="false"
                title="Visit my LinkedIn profile"
                rel="noreferrer"
              >
                <FaLinkedin className="icon" />
              </a>
            </li>
            <li>
              <a
                tabIndex="1"
                href="https://www.xing.com/profile/Rafael_BenchimoldeOliveira/cv"
                target="_blank"
                name="xing-icon"
                aria-hidden="false"
                title="Visit my Xing profile"
                rel="noreferrer"
              >
                <FaXingSquare className="icon" />
              </a>
            </li>
            <li>
              <a
                tabIndex="1"
                href="mailto: oliveira.sein@gmail.com?subject=Message from Rafael's Personal Portfolio "
                target="_blank"
                name="mail-icon"
                aria-hidden="false"
                title="Send me an e-mail"
                rel="noreferrer"
              >
                <FaEnvelopeSquare className="icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <nav role="navigation">
        <ul>
          <NavLink
            tabIndex="1"
            className={({ isActive }) =>
              isActive
                ? "menu-link btn-projects active"
                : "menu-link btn-projects"
            }
            activeclassname="active"
            aria-label="navigate to projects"
            aria-current={({ isActive }) => (isActive ? "page" : undefined)}
            to="/projects"
          >
            projects
          </NavLink>

          <NavLink
            tabIndex="1"
            className={({ isActive }) =>
              isActive ? "menu-link btn-whoami active" : "menu-link btn-whoami"
            }
            activeclassname="active"
            aria-label="navigate to whoami"
            aria-current={({ isActive }) => (isActive ? "whoami" : undefined)}
            to="/whoami"
          >
            whoami
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
