import React from "react";
import Project from "./Project";

const projects = [
  {
    title: "KLEC Inc. Pokedex",
    image: "/images/pokedex.png",
    repo: "https://github.com/VAalchemist/KLEC-search-inc",
    live: "https://vaalchemist.github.io/KLEC-search-inc/",
  },
  {
    title: "Duty Call",
    image: "/images/dutycall.png",
    repo: "https://github.com/VAalchemist/CASK-inc",
    live: "https://young-thicket-71102.herokuapp.com/index",
  },
  {
    title: "forged-ensemble",
    image: "/images/forged-ensemble.png",
    repo: "https://github.com/VAalchemist/forged-ensemble",
    live: "https://forged-ensemble.herokuapp.com/login",
  }
];
function Portfolio() {
  return (
    <div>
    <section>
      <h2 className="text-white text-center pt-4">Portfolio</h2>
      <Project projects={projects} />
      </section>
    </div>
  );
}

export default Portfolio;
