import React, {useState} from "react";
import "../assets/css/project.css";

const projects = [
  {
    image: "/img/mhms.png",
    title: "Manahour Management System",
    description: "A full-featured system with real-time management, reporting, and analytics dashboard, email notifications, and approval workflows.",
    tech: ["C#", "Winform", "MS SQL Server", "Tableau"],
    features: [
      "Interactive dashboard with manhour, MH loss, and COPQ analytics",
      "Manhour and COPQ application with multi-level approval workflow",
      "Role-based access control (PIC, Manager, Admin)",
      "Automated email notifications for submissions and approvals",
      "Excel import/export for bulk data management",
      "Management reports with filtering and export options",
      "Tableau integration for advanced data visualization"
    ],
    github: "",
    live: "",
    featured: true,
  },
  {
    image: "/img/jmrs.png",
    title: "Japanese Meal Reservation System",
    description: "System for advance meal reservations, admin management, and real-time monitoring of Japanese expats’ monthly deductions.",
    tech: ["C#", "ASP.Net Core", "Bootstrap", "PostgreSQL"],
    features: [
      "Home page with upcoming meals, announcements, and reservation reminders",
      "Weekly and monthly menu viewing with meal selection",
      "Order history with status filtering (Pending, Completed, Cancelled)",
      "Advance reservation for Japanese expats with long-term bulk booking support",
      "Advance booking for local employees without published future menus",
      "Admin management dashboard with daily order summary per menu",
      "Japanese expat meal deduction calculation",
      "Full reservation management (create, update, cancel)",
      "Menu management (upload, update, delete)"
    ],
    github: "",
    live: "",
    featured: true,
  },
  {
    image: "/img/cms.png",
    title: "Container Management System",
    description: "System for container truck parking monitoring, dashboard tracking, and process automation.",
    tech: ["C#", "ASP.Net Core", "Winform", "MS SQL Server"],
    features: [
      "Dashboard with warehouse and container truck status overview",
      "Shipping monitoring for real-time container movement tracking",
      "Reports for container and warehouse inventory management",
      "Document creation and upload for shipping and inventory",
      "Admin panel for user and trucker management",
      "Finished goods warehouse planning and record monitoring"
    ],
    github: "",
    live: "",
    featured: true,
  },
  {
    image: "/img/pcs.png",
    title: "Parts Control System",
    description: "Control system for parts tracking, dashboard, email notifications and approval processes.",
    tech: ["C#", "ASP.Net Core", "Bootstrap", "PostgreSQL"],
    features: [
      "Dashboard with overall parts status and activity summary",
      "Import and manage part files for system updates",
      "Parts download for easy data access",
      "Update per activity tracking for workflow monitoring",
      "Monitoring for quality control",
      "Transaction logs for audit and history tracking",
      "Access to all parts data with search and filter",
      "Form management for root cause analysis",
      "Comprehensive reporting for operations and quality",
      "Admin access for user management and system configuration",
      "Parts deletion and updating of key dates"
    ],
    github: "",
    live: "",
    featured: true,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
                    <div className="img-wrapper">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="card-img-top rounded-top project-img"
                      />
                    </div>
                  )}
                
                <div className="card-body d-flex flex-column">
                  {/* Featured Badge */}
                  {project.featured && (
                    <span className="badge bg-light text-dark mb-2 align-self-start">
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

                    <button
                      className="btn btn-outline-light btn-sm"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Features
                    </button>

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

      {/* Modal */}
      {selectedProject && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content bg-dark text-light border-secondary">
              <div className="modal-header border-secondary">
                <h5 className="modal-title">{selectedProject.title}</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setSelectedProject(null)}
                ></button>
              </div>

              <div className="modal-body">
                <p>{selectedProject.description}</p>

                <h6 className="mt-3">Key Features</h6>
                <ul>
                  {selectedProject.features?.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>

                <h6 className="mt-3">Tech Stack</h6>
                <div>
                  {selectedProject.tech?.map((t, i) => (
                    <span key={i} className="badge bg-primary me-1 mb-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


    </section>
  );
};

export default Projects;
