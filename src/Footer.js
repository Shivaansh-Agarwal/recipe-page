import React from "react";
import iconLinkedin from "./images/icons/icon-linkedin.svg";
import iconGithub from "./images/icons/icon-github.svg";
import iconTwitter from "./images/icons/icon-twitter.svg";

const Footer = () => {
  return (
    <footer>
      <div>
        <a
          href="https://shivaansh-agarwal.netlify.app/index.html"
          target="_blank"
          rel="noreferrer"
        >
          Shivaansh Agarwal
        </a>
        @DevChallenges.io
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/shivaansh-agarwal/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={iconLinkedin} alt="Linkedin" className="logo" />
        </a>
        <a
          href="https://github.com/Shivaansh-Agarwal"
          target="_blank"
          rel="noreferrer"
        >
          <img src={iconGithub} alt="Github" className="logo" />
        </a>
        <a
          href="https://twitter.com/Shivansh_97"
          target="_blank"
          rel="noreferrer"
        >
          <img src={iconTwitter} alt="Twitter" className="logo" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
