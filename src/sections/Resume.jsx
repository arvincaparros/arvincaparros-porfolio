import React from "react";

function Resume() {
  return (
    <section id="resume" className="resume section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>
          Full-stack developer delivering efficient, scalable, and user-focused applications.
        </p>
      </div>
      {/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {/* Left column */}
          <div className="col-lg-4">
            <div
              className="resume-side"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h3>Professional Summary</h3>
              <p>
               Full-Stack Software Developer with a total of 4 years of experience building and maintaining internal business systems, with a strong foundation in desktop application development (C# / WinForms) and 1.5 years of full-stack web development using ASP.NET Core, SQL databases, and modern frontend technologies. Experienced in end-to-end development—from requirements gathering and backend logic to frontend implementation, deployment, and system support. Strong focus on process automation, data integrity, and scalable system design.
              </p>

              <h3 className="mt-4">Contact Information</h3>
              <ul className="contact-info list-unstyled">
                <li>
                  <i className="bi bi-geo-alt"></i> Santa Maria, Santo Tomas,
                  Batangas
                </li>
                <li>
                  <i className="bi bi-envelope"></i> arvinmcaparros@gmail.com
                </li>
                <li>
                  <i className="bi bi-phone"></i> +639487998831
                </li>
                <li>
                  <i className="bi bi-linkedin"></i>{" "}
                  <a
                    href="https://www.linkedin.com/in/arvin-caparros"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/arvin-caparros
                  </a>
                </li>
              </ul>

              <div className="skills-animation mt-4">
                <h3>Technical Skills</h3>
                <ul className="list-group list-group-flush border rounded">
                  <li className="list-group-item">
                    <strong>Front-End:</strong> HTML, CSS, JavaScript, jQuery,
                    Bootstrap, React.js
                  </li>
                  <li className="list-group-item">
                    <strong>Back-End:</strong> C# ASP.NET Core MVC, PHP
                  </li>
                  <li className="list-group-item">
                    <strong>API Development & Integration:</strong> REST APIs,
                    JSON, Postman
                  </li>
                  <li className="list-group-item">
                    <strong>Database & Data Visualization:</strong> SQL Server, PostgreSQL, MySQL, Tableau
                  </li>
                  <li className="list-group-item">
                    <strong>Testing:</strong> Unit Testing, API Testing with
                    Postman, Debugging
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="col-lg-8 ps-4 ps-lg-5">
            {/* Experience Section */}
            <div className="resume-section" data-aos="fade-up">
              <h3>
                <i className="bi bi-briefcase me-2"></i>Professional Experience
              </h3>

              <div className="resume-item">
                <h4>SOFTWARE DEVELOPER</h4>
                <h5>January 2022 - Present</h5>
                <p className="company">
                  <i className="bi bi-building"></i> Brother Industries
                  (Philippines) Inc.
                </p>
                <ul>
                  <li>
                    Design software solutions based on user requirements and
                    business objectives.
                  </li>
                  <li>
                    Participate in the full software development lifecycle,
                    including requirements analysis, design, implementation,
                    testing, deployment, and maintenance.
                  </li>
                  <li>
                    Troubleshoot, debug, and resolve software issues to ensure
                    optimal system performance.
                  </li>
                  <li>
                    Contribute to the enhancement and maintenance of existing
                    applications, including tasks such as database migration and
                    performance optimization.
                  </li>
                  <li>
                    Develop and manage reliable, well-structured databases that
                    align with system and application requirements.
                  </li>
                  <li>
                    Support and participate in additional projects such as
                    Tableau dashboard development.
                  </li>
                </ul>
              </div>

              <div className="resume-item">
                <h4>Graphic Designer</h4>
                <h5>March 2021 - September 2021</h5>
                <p className="company">
                  <i className="bi bi-building"></i> Arneth Agrimarts Inc.
                </p>
                <ul>
                  <li>Enhance image details</li>
                  <li>
                    Create graphic designs (banners, posters, etc.) for online
                    product advertisements
                  </li>
                  <li>Gather and organize product details</li>
                  <li>Handle product listing and posting</li>
                </ul>
              </div>
            </div>

            {/* Education Section */}
            <div
              className="resume-section"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>
                <i className="bi bi-mortarboard me-2"></i>Education
              </h3>

              <div className="resume-item">
                <h4>
                  Bachelor of Science in Industrial Technology Major in Computer
                  Technology
                </h4>
                <h5>2014 - 2018</h5>
                <p className="company">
                  <i className="bi bi-building"></i> Southern Luzon State
                  University
                </p>
              </div>
            </div>

            {/* Certifications Section */}
            <div
              className="resume-section"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3>
                <i className="bi bi-award me-2"></i>Training & Certifications
              </h3>

              <div className="resume-item">
                <h4>Responsive Web Design</h4>
                <h5>freeCodeCamp</h5>
              </div>

              <div className="resume-item">
                <h4>Microsoft SQL Server</h4>
                <h5>Phoenix One Knowledge Solutions, Inc.</h5>
              </div>

              <div className="resume-item">
                <h4>Tableau Desktop Training</h4>
                <h5>The Knowledge Academy</h5>
              </div>

              <div className="resume-item">
                <h4>PHP / Laravel Training</h4>
                <h5>Zuitt - Coding Bootcamp</h5>
              </div>

              <div className="resume-item">
                <h4>ASP.NET Core MVC</h4>
                <h5>Zuitt - Coding Bootcamp</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
