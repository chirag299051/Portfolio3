import React from "react";
import { skills } from "./data";
import Skill from "./Skill";

const About = () => {
  console.log(skills);
  return (
    <div className="about" id="about">
      <section>
        <h1>
          Development <br />
          For The <br />
          Digital World.
        </h1>
        <p>
          Highly skilled in Front End Technologies: React, Angular, HTML, CSS,
          Bootstrap, Javascript, ES6, Typescript, DOM, REST APIs, I have a good
          eye for detail and like to create fun, innovative, accessible, and
          fast websites.
        </p>
      </section>
      <section>
        <h1>Education</h1>
        <p>
          Pace University, NY <span> | </span>MS: Software Development &
          Engineering <span> | </span> GPA: 3.93 <span> | </span> Graduation:
          Dec 2019
        </p>
      </section>
      <section style={{ margin: "100px 0px" }}>
        <h1 style={{ color: "#d6dcff" }}>Skills</h1>
        <div className="skills">
          <div style={{ margin: "auto" }}>
            {skills.map((skill) => {
              return <Skill key={skill.id} {...skill} />;
            })}
          </div>
        </div>
      </section>
      <a href="#projects" className="hvr-sweep-to-right-white btn-lg btn-black">
        <span>My Projects</span>
      </a>
    </div>
  );
};

export default About;
