import React, { useRef } from "react";
import contact from "../Assets/Styles/contact.css";
import { AiOutlineMail } from "react-icons/ai";

import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

// lets user know message was sent
  const feedbackEl = document.querySelector(".feedback");
    feedbackEl.setAttribute("class", "feedback");
  setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 4000);

    emailjs
      .sendForm(
        "service_ykqsb9c",
        "template_054gz1d",
        form.current,
        "_UTL02P57CJ5ncOCB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section className={contact}>
      <h2 className="text-white pt-4">Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact_option-icon " />
            <h4>Email</h4>
            <a href="mailto: kcas51@yahoo.com">Send Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="send btn btn-primary text-white">
            Send Message
          </button>
          <div className="feedback hide"><h4 clasName='text-white'>Message sent</h4></div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
