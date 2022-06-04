import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";

function Footer() {
    return(
        <>
        <footer className="contact mt-auto">
        <a
          href="https://github.com/kcastil7"
          className="contactEl"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={25} />
        </a>
        <a className="contactEl" href="mailto: kcas51@yahoo.com">
          <AiOutlineMail size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/kevin-castillo-b061a2159/"
          className="contactEl"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin size={25} />
        </a>
        <a
          className="contactEl"
          href={process.env.PUBLIC_URL + "/Kevin Castillo Resume.pdf"}
          target="_blank"
          rel="noreferrer"
        >
          <IoIosPaper size={25} />
        </a>
      </footer>
        </>

    );
}

export default Footer;