import logo from "./logo.svg";
import React, { useContext, useState, useEffect, Component } from "react";
import Net from "./Net";
import About from "./About";
import Contact from "./Contact";
import { AppProvider } from "./context";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./Projects";
import { Context } from "./context";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import emailjs, { init } from "emailjs-com";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    ReactGA.initialize("UA-208711664-1");
    const browserHistory = createBrowserHistory();
    browserHistory.listen((location) => {
      ReactGA.set({ page: location.pathname });
      ReactGA.pageview(location.pathname + location.search);
    });
  }, []);

  useEffect(() => {
    init("user_FYavOcb7Op0hKCrk09k1h");
    fetch("https://geolocation-db.com/json/")
      .then((resp) => resp.json())
      .then((result) => {
        const { city, state, country_code, IPv4, postal } = result;
        ReactGA.set({
          dimension1: IPv4,
          dimension2: city,
          dimension3: state,
          dimension4: country_code,
          dimension5: postal,
        });
        if (IPv4 !== "71.104.23.145") {
          emailjs
            .send("default_service", "template_xlbxfbj", { ...result })
            .then(
              function (response) {
                console.log("SUCCESS!", response.status, response.text);
              },
              function (error) {
                console.log("FAILED...", error);
              }
            );
        }
        ReactGA.pageview(window.location.pathname + window.location.search);
      });
  }, []);

  return (
    <AppProvider>
      <Net />
      <section style={{ marginTop: "783px" }}>
        <About />
        <Projects />
        <Contact />
      </section>
    </AppProvider>
  );
};

export default App;
