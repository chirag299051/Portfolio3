import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import MainNavbar from "./MainNavbar";
import pic from "./assets/pic.jpg";
import GithubSearch from "./GithubSearch";
import GithubModal from "./GithubModal";

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const Net = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          THREE: THREE,
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 900.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div style={{ position: "relative", width: "100%" }} ref={myRef}>
      <MainNavbar />
      <GithubSearch style={{ position: "absolute" }} />
      <GithubModal />
      <div className="title">
        <b>CHIRAG SINGH</b>
        <div style={{ fontSize: ".65em", color: "red" }}>
          FRONT-END DEVELOPER
        </div>
      </div>
      <div className="dp-div">
        <img src={pic} className="dp" />
      </div>
    </div>
  );
};

export default Net;
