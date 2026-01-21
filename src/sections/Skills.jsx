import React from "react";

function Skills() {
  return (
    <section id="skills" className="skills section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>
          Developing solid foundations in front-end and back-end technologies,
          continuously growing skills to move towards a mid-level role.
        </p>
      </div>
      {/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4">
          {/* Frontend */}
          <div className="col-lg-6">
            <h3 className="mb-3 text-center text-white">
              <i className="bi bi-window-sidebar me-2"></i> Front-end Development
            </h3>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="card text-center shadow-sm border-0 p-3 h-100">
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src="/icons/html.png"
                      alt="HTML"
                      width="50"
                    />
                    <img
                      src="/icons/css-3.png"
                      alt="CSS"
                      width="50"
                    />
                  </div>
                  <h5 className="text-dark mt-2">HTML/CSS</h5>
                  <p className="small text-muted">
                    Semantic markup & responsive layouts
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card text-center shadow-sm border-0 p-3 h-100">
                  <img
                    src="/icons/js.png"
                    alt="JavaScript"
                    className="mb-2 d-block mx-auto"
                    width="50"
                  />
                  <h5 className="text-dark">JavaScript</h5>
                  <p className="small text-muted">
                    ES6+, DOM manipulation, async basics
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card text-center shadow-sm border-0 p-3 h-100">
                  <img
                    src="/icons/jquery.png"
                    alt="jQuery"
                    className="mb-2 d-block mx-auto"
                    width="50"
                  />
                  <h5 className="text-dark">jQuery</h5>
                  <p className="small text-muted">
                    Simplified DOM, AJAX, UI interactions
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card text-center shadow-sm border-0 p-3 h-100">
                  <img
                    src="/icons/bootstrap.png"
                    alt="Bootstrap"
                    className="mb-2 d-block mx-auto"
                    width="50"
                  />
                  <h5 className="text-dark">Bootstrap</h5>
                  <p className="small text-muted">
                    Responsive design & rapid UI prototyping
                  </p>
                </div>
              </div>

              <div className="col-md-12">
                <div className="card text-center shadow-sm border-0 p-3 h-100">
                  <img
                    src="/icons/reactjs.png"
                    alt="React"
                    className="mb-2 d-block mx-auto"
                    width="50"
                  />
                  <h5 className="text-dark">React (Familiar)</h5>
                  <p className="small text-muted">
                    Components, props, hooks — still learning
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="col-lg-6">
            <h3 className="mb-3 text-center text-white">
              <i className="bi bi-server me-2"></i> Back-end Development
            </h3>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="card text-center shadow-sm border-0 p-3 h-100">
                  <img
                    src="/icons/c-sharp.png"
                    alt="C# ASP.NET Core MVC"
                    className="mb-2 d-block mx-auto"
                    width="50"
                  />
                  <h5 className="text-dark">C# ASP.NET Core MVC</h5>
                  <p className="small text-muted">
                    MVC apps, REST APIs, SQL integration
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card text-center shadow-sm border-0 p-3 h-100">
                  <img
                    src="/icons/efcore.png"
                    alt="Entity Framework Core"
                    className="mb-2 d-block mx-auto"
                    width="50"
                  />
                  <h5 className="text-dark">Entity Framework Core</h5>
                  <p className="small text-muted">
                    ORM, migrations, LINQ queries
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card text-center shadow-sm border-0 p-3 h-100">
                  <img
                    src="/icons/sql.png"
                    alt="SQL"
                    className="mb-2 d-block mx-auto"
                    width="50"
                  />
                  <h5 className="text-dark">SQL</h5>
                  <p className="small text-muted">
                    Queries, joins, performance optimization
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card text-center shadow-sm border-0 p-3 h-100">
                  <img
                    src="/icons/api.png"
                    alt="REST API"
                    className="mb-2 d-block mx-auto"
                    width="50"
                  />
                  <h5 className="text-dark">REST API Development</h5>
                  <p className="small text-muted">
                    Authentication & data exchange
                  </p>
                </div>
              </div>

              <div className="col-md-12">
                <div className="card text-center shadow-sm border-0 p-3 h-100">
                  <img
                    src="/icons/php.png"
                    alt="PHP"
                    className="mb-2 d-block mx-auto"
                    width="50"
                  />
                  <h5 className="text-dark">PHP (Basic)</h5>
                  <p className="small text-muted">CRUD & simple scripting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
