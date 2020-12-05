import React from "react";
import {
  faLinkedinIn,
  faMediumM,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="container">
      <h1>Harits Hendrastomo</h1>
      <p>Software Engineer - Front End</p>
      <a
        target="_blank"
        href="https://id.linkedin.com/in/m-harits-hendrastomo"
        rel="noopener noreferrer nofollow"
      >
        <FontAwesomeIcon icon={faLinkedinIn} className="m-2" />
      </a>
      <a
        target="_blank"
        href="https://medium.com/@haritshendrastomo"
        rel="noopener noreferrer nofollow"
      >
        <FontAwesomeIcon icon={faMediumM} className="m-2" />
      </a>
      <a
        target="_blank"
        href="https://github.com/haritshendrastomo"
        rel="noopener noreferrer nofollow"
      >
        <FontAwesomeIcon icon={faGithub} className="m-2" />
      </a>
      <a
        target="_blank"
        href="mailto:haritshendrastomo@gmail.com"
        rel="noopener noreferrer nofollow"
      >
        <FontAwesomeIcon icon={faEnvelope} className="m-2" />
      </a>
    </div>
  );
};

export { Home };
