import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div>
        <p className="section-kicker text-6xl tracking-tight text-muted mb-15">Contact</p>
        <h2 className="text-[clamp(2rem,2vw,3rem)] font-semibold mb-8">Have a project in mind?</h2>
        <p>
          Send a note and I will help shape the next step, from a fresh landing
          page to a complete product interface.
        </p>
      </div>
      <form className="contact-form">
        <label>
          Name
          <input type="text" name="name" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="you@example.com" />
        </label>
        <label>
          Message
          <textarea name="message" rows="5" placeholder="Tell me about it" />
        </label>
        <button type="submit">Send message</button>
      </form>
    </section>
  );
}

export default Contact;
