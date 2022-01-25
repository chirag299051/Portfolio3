import angular from "./assets/angular.svg";
import react from "./assets/react.svg";
import html from "./assets/html.svg";
import css from "./assets/css.svg";
import bootstrap from "./assets/bootstrap.svg";
import js from "./assets/js.svg";
import es6 from "./assets/es6.svg";
import ts from "./assets/ts.svg";
import jquery from "./assets/jquery.png";
import github from "./assets/github.png";
import mysql from "./assets/mysql.svg";
import mongodb from "./assets/mongodb.svg";
import wp from "./assets/wp.png";
import php from "./assets/php.png";
import node from "./assets/node.png";
import rest from "./assets/rest.png";
import ionic from "./assets/ionic.png";
import fire from "./assets/fire.png";
import google from "./assets/google.png";

import movieDBv2 from "./assets/movieDB-v2.png";
import budget from "./assets/budget.PNG";
import movie from "./assets/movie.PNG";
import drum from "./assets/drum.PNG";
import gmart from "./assets/gmart.PNG";
import got from "./assets/got.jpg";
// import countries from "./assets/countries.jpg";
import calc from "./assets/calc.PNG";
import clock from "./assets/clock.PNG";
import todo from "./assets/todo.PNG";
import weather from "./assets/weather.jpg";

export const skills = [
  { id: 0, name: "React", img: react },
  { id: 1, name: "Angular", img: angular },
  { id: 2, name: "HTML", img: html },
  { id: 3, name: "CSS", img: css },
  { id: 4, name: "Bootstrap", img: bootstrap },
  { id: 5, name: "Javascript", img: js },
  { id: 6, name: "ES6", img: es6 },
  { id: 7, name: "Typescript", img: ts },
  { id: 8, name: "jQuery", img: jquery },
  { id: 9, name: "Node js", img: node },
  { id: 10, name: "Ionic", img: ionic },
  { id: 11, name: "REST API", img: rest },
  { id: 12, name: "Github", img: github },
  { id: 12, name: "Firebase", img: fire },
  { id: 12, name: "Google Cloud Platform", img: google },
  { id: 13, name: "MySQL", img: mysql },
  { id: 14, name: "MongoDB", img: mongodb },
  { id: 15, name: "WordPress", img: wp },
  { id: 16, name: "PHP", img: php },
];

export const projects = [
  {
    id: 0,
    title: "MovieDB-v2",
    img: movieDBv2,
    url: "https://chirag299051.github.io/movieDB-v2/",
    type: "project",
    desc: "Movie database app. Tech: Angular 8, Firebase, rxjs, Google OAuth",
  },

  {
    id: 1,
    title: "Weather App",
    img: weather,
    url: "https://chirag299051.github.io/weather-app/",
    type: "project-sm",
    desc: "Get weather, news and covid data all around the world. Tech: React, Google Cloud Platform",
  },
  {
    id: 2,
    title: "JS Drum Kit",
    img: drum,
    url: "https://chirag299051.github.io/JS-Drum-Kit/",
    type: "project-sm",
    desc: "Use keyboard/touch to play drum. Tech: Javascript",
  },
  {
    id: 3,
    title: "movieDB",
    img: movie,
    url: "https://chirag299051.github.io/movieDb/",
    type: "project-sm",
    desc: "Simple Movie info app. Tech: Ionic 4, Angular 7, cordova, rxjs",
  },
  {
    id: 4,
    title: "Budget App",
    img: budget,
    url: "https://chirag299051.github.io/The-Budget-App/",
    type: "project",
    desc: "App to calculate yearly budget. Tech: Javascript, ES6",
  },
  {
    id: 5,
    title: "Gmart",
    img: gmart,
    url: "https://gmart-c.firebaseapp.com/",
    type: "project",
    desc: "Ecommerce app - Grocery Mart. Tech: Angular 7, Firebase, rxjs, Bootstrap",
  },
  {
    id: 6,
    title: "Ice And Fire",
    img: got,
    url: "https://chirag299051.github.io/got/",
    type: "project",
    desc: "Get all the info from the book of Ice and Fire. Tech: Angular 4, Bootstrap",
  },
  // {
  //   id: 6,
  //   title: "Rest Countries",
  //   img: countries,
  //   url: "https://chirag299051.github.io/countries/",
  //   type: "project",
  //   desc: "Get Countries info from a RESTful API. Tech: Angular 4, Bootstrap",
  // },
  {
    id: 7,
    title: "JS Calculator",
    img: calc,
    url: "https://chirag299051.github.io/JS-Calculator/",
    type: "project",
    desc: "Javascript",
  },
  {
    id: 8,
    title: "JS Clock",
    img: clock,
    url: "https://chirag299051.github.io/JS-Clock/",
    type: "project",
    desc: "Javascript",
  },
  {
    id: 9,
    title: "jQuery To-Do List",
    img: todo,
    url: "https://chirag299051.github.io/To-Do-List/",
    type: "project",
    desc: "jQuery",
  },
];
