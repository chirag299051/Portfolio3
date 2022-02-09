import React, { useState, useRef } from "react";
import { Overlay, Tooltip } from "react-bootstrap";

const Skill = ({ id, img, name }) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <article
      ref={target}
      key={id}
      style={{
        // border: "10px",
        display: "inline-block",
        margin: "40px 20px",
        position: "relative",
      }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <img
        src={img}
        className="skillImg"
        style={{ width: "100px" }}
        alt={name}
      />
      <Overlay
        // style={{ position: "absolute" }}
        target={target.current}
        show={show}
        placement="bottom"
      >
        {(props) => (
          <Tooltip positionBottom={10} id="tooltip" {...props}>
            {name}
          </Tooltip>
        )}
      </Overlay>
    </article>
  );
};

export default Skill;
