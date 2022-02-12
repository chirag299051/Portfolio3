import React, { useState, useRef } from "react";
import { Overlay, Tooltip } from "react-bootstrap";

import { Image } from "react-bootstrap";

const Project = ({ id, title, img, url, type, desc }) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <>
      <article
        ref={target}
        className={
          id < 11 && id > 7
            ? type + " btn-project js-project"
            : type + " btn-project"
        }
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <a href={url}>
          <Image src={img} alt={title} />
          <h1>{title}</h1>
          <Overlay target={target.current} show={show} placement="bottom">
            {(props) => (
              <Tooltip positionBottom={10} id="tooltip-p" {...props}>
                {desc}
              </Tooltip>
            )}
          </Overlay>
        </a>
      </article>
    </>
  );
};

export default Project;
