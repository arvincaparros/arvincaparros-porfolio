import React from "react";
import {
  BsCheckCircleFill,
  BsEnvelope,
  BsTelephone,
  BsGeoAlt,
  BsDownload,
} from "react-icons/bs";


function About() {
  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          {/* Left Column - Profile Card */}
          <div className="col-lg-5" data-aos="zoom-in" data-aos-delay="200">
            <div className="profile-card">
              <div className="profile-header">
                <div className="profile-image">
                  <img
                    src="/img/2x2arvs.png"
                    alt="Profile"
                    className="img-fluid"
                  />
                </div>
                <div className="profile-badge">
                  <BsCheckCircleFill />
                </div>
              </div>

              <div className="profile-content">
                <h3>Arvin Caparros</h3>
                <p className="profession">Software Developer</p>

                <div className="contact-links">
                  <a href="mailto:arvinmcaparros@gmail.com" className="contact-item">
                    <BsEnvelope className="me-2" />
                    arvinmcaparros@gmail.com
                  </a>
                  <a href="tel:+639487998831" className="contact-item">
                    <BsTelephone className="me-2" />
                    +639487998831
                  </a>
                  <a href="#" className="contact-item">
                    <BsGeoAlt className="me-2" />
                    Santo Tomas, Batangas
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - About Content */}
          <div className="col-lg-7" data-aos="fade-left" data-aos-delay="300">
            <div className="about-content">
              <div className="section-header">
                <span className="badge-text">Get to Know Me</span>
              </div>

              <div className="description">
                <p>
                  I am a dedicated <strong>Software Developer</strong> experienced in building reliable, user-focused business applications.
                  I specialize in <strong>C#, ASP.NET, SQL, and modern front-end technologies</strong>, creating systems that improve workflows,
                  automate processes, and deliver practical, maintainable solutions.
                </p>

                <p>
                  Beyond coding, I value collaboration, continuous learning, and turning ideas into real-world solutions
                  across enterprise systems, research projects, and capstone applications.
                </p>
              </div>

              <div className="details-grid">
                <div className="detail-row">
                  <div className="detail-item">
                    <span className="detail-label">Specialization</span>
                    <span className="detail-value">UI/UX Design &amp; Development</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Experience Level</span>
                    <span className="detail-value">Junior - Mid Professional</span>
                  </div>
                </div>
                <div className="detail-row">
                  <div className="detail-item">
                    <span className="detail-label">Education</span>
                    <span className="detail-value">BS-IT Computer Technology</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Languages</span>
                    <span className="detail-value">Filipino, English</span>
                  </div>
                </div>
              </div>
              <div className="cta-section">
                <a href="/resume/CV_ARVIN_CAPARROS.pdf" className="btn btn-primary">
                  <BsDownload className="me-2" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
