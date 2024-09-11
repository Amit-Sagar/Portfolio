import React, { useRef, useState } from "react";
import { MdOutlineDrafts } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current, "form");
    const template_params = {
      fr0m_name: name,
      from_email: email,
      to_name: "Amit Sagar",
      message: message,
    };
    emailjs
      .send(
        "service_kuhzjeh",
        "template_wku9xil",
        template_params,
        "FSHOxlLPaLETj6S4P"
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
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineDrafts />
            <h4>Email</h4>
            <h5>s.amitsagar99@gmail.com</h5>
            <a href="mailto:s.amitsagar99@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>+91 7551188506</h5>
            <a href="https://api.whatsapp.com/send?phone+91-7551188506">
              Send a message
            </a>
          </article>
        </div>
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name="message"
            row="7"
            placeholder="Your Message"
            required
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
