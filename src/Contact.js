import React from "react";
import { Row } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1>
        <b>
          Let's Get <br />
          Together.
        </b>
      </h1>
      <br />

      <div style={{ padding: "10px 10px 10px 0px" }}>
        <h5>
          If you'd like to learn more about me, feel free to add me on one or
          all of the following sites.
        </h5>
        <br />
        <br />
        <a
          href="https://www.linkedin.com/in/chirag9/"
          className="hvr-sweep-to-right-white btn-lg btn-black"
        >
          <span>Linked In</span>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100018150765130"
          className="hvr-sweep-to-right-white btn-lg btn-black"
        >
          <span>Meta</span>
        </a>
        <a
          href="https://www.instagram.com/chirag299051/"
          className="hvr-sweep-to-right-white btn-lg btn-black"
        >
          <span>Instagram</span>
        </a>
      </div>

      <div className="github">
        <a href="https://github.com/chirag299051">
          {/* <i className="fab fa-github git"></i> */}
          <FaGithub size={70} className="giticon" />
        </a>
      </div>

      <div className="contact-footer">
        <p>
          Copyright © 2021 - <a href="http://chirag9.com">Chirag Singh</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
