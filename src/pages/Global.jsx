import React from "react";
import { Link } from "react-router-dom";

// import waves from '../Assets/images/video.mp4';
import "bootstrap/dist/css/bootstrap.min.css";
import "../Assets/Styles/background.css"

function Global() {
  return (
    <section>
      <div className="stars"></div>
      <div className="twinkling"></div>
      {/* <div class="clouds"></div> */}

      <header>




        <nav className="navbar navbar-dark bg-black nav-pills justify-content-end  px-2">
          <Link className="navTop text-white px-2" to="/">
            Home
          </Link>
          <Link className="navTop text-white px-2" to="/about">
            About
          </Link>
          <Link className="navTop text-white px-2" to="/project">
            Projects
          </Link>
          <Link className="navTop text-white px-2" to="/contact">
            Contact
          </Link>
        </nav>
      </header>


      

    </section>
  );
}

export default Global;
