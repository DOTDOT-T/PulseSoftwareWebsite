import React, { useState } from "react";
import "./ContactModule.css";
import Navbar from "../Modules/NavBar/Navbar";

export default function ContactModule() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="Contact-module">
      <Navbar/>
      <h2>Contact Us</h2>
      <p>Have questions? Collaborations? Reach out and let's innovate together.</p>

      <form onSubmit={handleSubmit} className="Contact-form">
        <div className="Input-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Name</label>
        </div>
        <div className="Input-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Email</label>
        </div>
        <div className="Input-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <label>Message</label>
        </div>
        <button type="submit" className="Contact-submit">
          {submitted ? "Sent!" : "Send Message"}
        </button>
      </form>
    </section>
  );
}
