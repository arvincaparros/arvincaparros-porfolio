import React, { useEffect } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";

function Portfolio() {
  useEffect(() => {
    GLightbox({ selector: ".glightbox" });
  }, []);

  return (
    <section id="portfolio" className="portfolio section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>Here are some of my projects and work samples.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <div className="row">
            {/* Sidebar Filters */}
            <div className="col-lg-3 filter-sidebar">
              <div className="filters-wrapper" data-aos="fade-right" data-aos-delay="150">
                <ul className="portfolio-filters isotope-filters">
                  <li data-filter="*" className="filter-active">All Projects</li>
                  <li data-filter=".filter-photography">Photography</li>
                  <li data-filter=".filter-design">Design</li>
                  <li data-filter=".filter-automotive">Automotive</li>
                  <li data-filter=".filter-nature">Nature</li>
                </ul>
              </div>
            </div>

            {/* Portfolio Items */}
            <div className="col-lg-9">
              <div
                className="row gy-4 portfolio-container isotope-container"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {/* Item 1 */}
                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-photography">
                  <div className="portfolio-wrap">
                    <img
                      src="/public/img/portfolio/portfolio-portrait-1.webp"
                      className="img-fluid"
                      alt="Capturing Moments"
                      loading="lazy"
                    />
                    <div className="portfolio-info">
                      <div className="content">
                        <span className="category">Photography</span>
                        <h4>Capturing Moments</h4>
                        <div className="portfolio-links">
                          <a
                            href="/public/img/portfolio/portfolio-portrait-1.webp"
                            className="glightbox"
                            title="Capturing Moments"
                          >
                            <i className="bi bi-plus-lg"></i>
                          </a>
                          <a href="../PortfolioPage.jsx" title="More Details">
                            <i className="bi bi-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-design">
                  <div className="portfolio-wrap">
                    <img
                      src="/public/img/portfolio/portfolio-2.webp"
                      className="img-fluid"
                      alt="Woodcraft Design"
                      loading="lazy"
                    />
                    <div className="portfolio-info">
                      <div className="content">
                        <span className="category">Web Design</span>
                        <h4>Woodcraft Design</h4>
                        <div className="portfolio-links">
                          <a
                            href="./public/img/portfolio/portfolio-2.webp"
                            className="glightbox"
                            title="Woodcraft Design"
                          >
                            <i className="bi bi-plus-lg"></i>
                          </a>
                          <a href="portfolio-details.html" title="More Details">
                            <i className="bi bi-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add other portfolio items the same way */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
