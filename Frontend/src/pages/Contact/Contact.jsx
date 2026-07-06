import React from "react";
import "./Contact.css";
import {
  FaUser,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { MdMessage } from "react-icons/md";

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="flex flex-col justify-around">
        <div>
          <p className="section-kicker text-6xl tracking-tight text-muted mb-15">
            Contact
          </p>

          <h2 className="text-[clamp(2rem,2vw,3rem)] font-semibold mb-8">
            Have a project in mind?
          </h2>

          <p>
            Send a note and I will help shape the next step, from a fresh landing
            page to a complete product interface.
          </p>
        </div>


        <div className="flex flex-row gap-5">
          <a href="mailto:nkammar45@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
            <FaEnvelope className="size-7" />
          </a>

          <a href="https://github.com/Niranjan12777" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
            <FaGithub className="size-7" />
          </a>

          <a href="https://www.linkedin.com/in/niranjan-kammar/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
            <FaLinkedin className="size-7" />
          </a>
        </div>
      </div>

      <form className="contact-form">
        <label>
          Name
          <div className="relative mt-2">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2" />
            <input type="text" name="name" placeholder="Your name" />
          </div>
        </label>

        <label>
          Email
          <div className="relative mt-2">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2" />
            <input type="email" name="email" placeholder="you@example.com" />
          </div>
        </label>

        <label>
          Message
          <div className="relative mt-2">
            <MdMessage className="absolute left-4 top-5" />
            <textarea name="message" rows="5" placeholder="Tell me about it" />
          </div>
        </label>

        <button type="submit">Send message</button>
      </form>
    </section>
  );
}

export default Contact;