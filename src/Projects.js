import React, { useState, useEffect } from "react";
import { projects } from "./data";
import Project from "./Project";

const Projects = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(projects);
    console.log(projects);
  }, []);
  return (
    <section className="projects" id="projects">
      <h1>Projects</h1>
      {projects.map((p) => {
        return <Project key={p.id} {...p} />;
      })}
    </section>
  );
};

export default Projects;
