import React from "react";
import "../assets/css/project.css";

const projects = [
  {
    image: "/img/mhms.png",
    title: "Manahour Management System",
    description: "A full-featured system with real-time management, reporting, and analytics dashboard, email notifications, and approval workflows.",
    tech: ["C#", "Winform", "MS SQL Server", "Tableau"],
    featured: true,
  },
  {
    image: "/img/jmrs.png",
    title: "Japanese Meal Reservation System",
    description: "System for advance meal reservations, admin management, and real-time monitoring of Japanese expats’ monthly deductions.",
    tech: ["C#", "ASP.Net Core", "Bootstrap", "PostgreSQL"],
    featured: true,
  },
  {
    image: "/img/cms.png",
    title: "Container Management System",
    description: "System for container truck parking monitoring, dashboard tracking, and process automation.",
    tech: ["C#", "ASP.Net Core", "Winform", "MS SQL Server"],
    featured: true,
  },
  {
    image: "/img/pcs.png",
    title: "Parts Control System",
    description: "Control system for parts tracking, workflow, email notifications and approval processes.",
    tech: ["C#", "ASP.Net Core", "Bootstrap", "PostgreSQL"],
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-dark text-light">
      <div className="container">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Projects</h2>
          <p>Here are some of my projects and work samples.</p>
        </div>

        {/* Project Cards */}
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100 bg-secondary bg-opacity-10 text-light border-secondary border-1 shadow">
                 {/* Image */}
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="card-img-top rounded-top project-img"
                    />
                  )}
                
                <div className="card-body d-flex flex-column">
                  {/* Featured Badge */}
                  {project.featured && (
                    <span className="badge bg-success mb-2 align-self-start">
                      Featured Project
                    </span>
                  )}

                  {/* Title */}
                  <h5 className="card-title fw-bold">{project.title}</h5>

                  {/* Description */}
                  <p className="card-text text-light flex-grow-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-3">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="badge bg-primary me-1 mb-1">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-auto d-flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-light btn-sm"
                      >
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
