import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

function PortfolioDetails() {
  return (
    <>
      {/* Page Title */}
      <div className="page-title dark-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Portfolio Details</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li className="current">Portfolio Details</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Portfolio Details Section */}
      <section id="portfolio-details" className="portfolio-details section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-8">
              <div className="portfolio-details-slider">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  loop={true}
                  speed={600}
                  autoplay={{ delay: 5000 }}
                  pagination={{ clickable: true }}
                >
                  <SwiperSlide>
                    <img
                      src="/assets/img/portfolio/portfolio-1.webp"
                      alt="Portfolio 1"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <img
                      src="/assets/img/portfolio/portfolio-10.webp"
                      alt="Portfolio 10"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <img
                      src="/assets/img/portfolio/portfolio-7.webp"
                      alt="Portfolio 7"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info" data-aos="fade-left" data-aos-delay="200">
                <h3>Project Information</h3>
                <ul>
                  <li>
                    <strong>Category</strong>: Web Development
                  </li>
                  <li>
                    <strong>Client</strong>: Victoria Technologies
                  </li>
                  <li>
                    <strong>Project date</strong>: 01 March, 2024
                  </li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <a href="https://www.example.com" target="_blank" rel="noreferrer">
                      www.example.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="portfolio-description" data-aos="fade-up" data-aos-delay="300">
                <h2>Project Overview</h2>
                <p>
                  Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore
                  commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non
                  officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis
                  tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                </p>
                <p>
                  Amet consequatur qui dolore veniam voluptatem voluptatem sit. Non aspernatur atque
                  natus ut cum nam et. Praesentium error dolores rerum minus sequi quia veritatis
                  eum. Eos et doloribus doloremque nesciunt molestiae laboriosam.
                </p>

                {/* Features */}
                <div className="features mt-4">
                  <h3>Key Features</h3>
                  <div className="row gy-3">
                    <div className="col-md-6">
                      <div className="feature-item" data-aos="fade-up" data-aos-delay="400">
                        <i className="bi bi-check-circle-fill"></i>
                        <h4>Responsive Design</h4>
                        <p>
                          Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
                          sint occaecati cupiditate non provident
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="feature-item" data-aos="fade-up" data-aos-delay="500">
                        <i className="bi bi-shield-check"></i>
                        <h4>Advanced Security</h4>
                        <p>
                          Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                          ea commodo consequat tarad limino ata
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="feature-item" data-aos="fade-up" data-aos-delay="600">
                        <i className="bi bi-graph-up"></i>
                        <h4>Performance Optimization</h4>
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                          dolore eu fugiat nulla pariatur
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="feature-item" data-aos="fade-up" data-aos-delay="700">
                        <i className="bi bi-gear"></i>
                        <h4>Easy Integration</h4>
                        <p>
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Features */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PortfolioDetails;
