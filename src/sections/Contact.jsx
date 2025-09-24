import React, { useState } from "react";

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

    // Simulate sending (replace with your backend/email service later)
    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    }, 1500);
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
                Praesent sapien massa, convallis a pellentesque nec, egestas non
                nisi. Vestibulum ante ipsum primis.
              </p>

              <div className="info-item">
                <div className="icon-box">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="content">
                  <h4>Our Location</h4>
                  <p>A108 Adam Street</p>
                  <p>New York, NY 535022</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="content">
                  <h4>Phone Number</h4>
                  <p>+1 5589 55488 55</p>
                  <p>+1 6678 254445 41</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="content">
                  <h4>Email Address</h4>
                  <p>info@example.com</p>
                  <p>contact@example.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="contact-form">
              <h3>Get In Touch</h3>
              <p>
                Praesent sapien massa, convallis a pellentesque nec, egestas non
                nisi. Vestibulum ante ipsum primis.
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

                    <button type="submit" className="btn">
                      Send Message
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
