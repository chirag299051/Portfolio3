import React from "react";
import { IoArrowRedoCircle } from "react-icons/io5";

const Repo = ({ name, html_url }) => {
  return (
    <article className="repo">
      <h4>{name}</h4>
      <a href={html_url} className="arrow">
        <IoArrowRedoCircle size={50} className="arrow-icon" />
      </a>
    </article>
  );
};

export default Repo;
