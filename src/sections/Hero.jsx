import React, { useEffect } from "react";
import Typed from "typed.js";

function Hero() {
  useEffect(() => {
    const typedElement = document.querySelector(".typed");
    if (!typedElement) return;

    const typedStrings = typedElement
      .getAttribute("data-typed-items")
      .split(",");

    const typed = new Typed(".typed", {
      strings: typedStrings,
      typeSpeed: 200,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    });

    // Cleanup on unmount
    return () => typed.destroy();
  }, []);

  return (
    <section id="hero" className="hero section">
      <div className="background-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
      </div>

      <div className="hero-content">
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center">

            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
              <div className="hero-text">
                <h2>Arvin Caparros</h2>
                <p className="lead">
                  I'm a{" "}
                  <span
                    className="typed"
                    data-typed-items="Software Developer, Problem Solver, UI Designer"
                  ></span>
                </p>
                <p className="description">
                  Passionate about turning ideas into useful software. I enjoy designing intuitive interfaces, automating processes, and building dependable apps that make people's work easier.
                </p>

                <div className="hero-actions">
                  <a href="#projects" className="btn btn-primary">
                    View My Work
                  </a>
                  <div className="social-links">
                    {/* <a href="#"><i className="bi bi-github"></i></a> */}
                    <a href="https://www.linkedin.com/in/arvin-caparros"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
              <div className="hero-visual">
                <div className="profile-container">
                  <div className="profile-background"></div>
                  <img
                    src="/img/profile.jpg"
                    alt="Arvin Caparros"
                    className="profile-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
