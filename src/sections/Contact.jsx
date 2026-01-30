import React, { useState } from "react";
import emailjs from "@emailjs/browser";
console.log(emailjs);

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // loading | error | success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  setStatus("loading");

  emailjs.send(
    "service_ni3q0rr",
    "template_qr2drld",
    {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    },
    "oEe6LHzwpEhmFkF2z"
  )
  .then(() => {
    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
  })
  .catch(() => {
    setStatus("error");
  });
};


  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Get in touch for opportunities, projects, or questions.</p>
      </div>

      <div className="container">
        <div className="row g-4 g-lg-5">
          {/* Contact Info */}
          <div className="col-lg-5">
            <div className="info-box">
              <h3>Contact Info</h3>
              <p>
               Please feel free to reach out through any of the following channels.
              </p>

              <div className="info-item">
                <div className="icon-box">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="content">
                  <h4>Phone Number</h4>
                  <p>+63 948 7998 831</p>
                  <p>+63 963 0168 963</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="content">
                  <h4>Email Address</h4>
                  <p>arvinmcaparros@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="contact-form">
              <h3>Get In Touch</h3>
              <p>
                I’m always open to connecting! Please fill out the form below, and I’ll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="php-email-form">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      name="message"
                      className="form-control"
                      rows="6"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div className="col-12 text-center">
                    {status === "loading" && <div className="loading">Loading...</div>}
                    {status === "error" && (
                      <div className="error-message">
                        Something went wrong. Please try again.
                      </div>
                    )}
                    {status === "success" && (
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                    )}

                   <button type="submit" className="btn" disabled={status === "loading"}>
                      {status === "loading" ? "Sending..." : "Send Message"}
                    </button>

                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
