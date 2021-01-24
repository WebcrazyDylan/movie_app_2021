//import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__row">
      <div className="about__container">
        <span>
          “Freedom is the freedom to say that two plus two make four. If that is
          granted, all else follows.”
        </span>
        <span>− George Orwell, 1984</span>
        <hr />
        <p>
          <a
            href="https://jonghyunpark.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Dylan's Portfolio
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
