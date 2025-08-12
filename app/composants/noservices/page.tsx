"use client";
import Image from "next/image";
import React from "react";

function Services() {
  return (
    <>
      <center>
        <h1
          className="mt-5"
          id="servicesListe"
          style={{
            color: "#2c2c2c",
            fontFamily: "Playfair Display,serif",
            fontWeight: "800",
          }}
          data-aos="fade-up"
        >
          Nos services
        </h1>
      </center>
      <center>
        <div className="container-fluide mb-5" id="services">
          <div className="row m-0 justify-content-center">
            {[
              {
                img: "/imgss/s.jpg",
                title: "Graphisme & Design",
                delay: 100,
              },
              {
                img: "/imgss/dea.jpg",
                title: "Vidéo & Animation",
                delay: 200,
              },
              {
                img: "/imgss/w.jpg",
                title: "Digitalisation & Web",
                delay: 300,
              },
              {
                img: "/imgss/s3.jpg",
                title: "Publicité & Contenu",
                delay: 400,
              },
            ].map((service, i) => (
              <div
                key={i}
                className="col-lg-3 col-md-6 mb-4 d-flex"
                data-aos="zoom-in"
                data-aos-delay={service.delay}
              >
                <div
                  className="card shadow-sm border-0 flex-fill"
                  style={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 18px rgba(0, 0, 0, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <img
                    src={service.img}
                    className="card-img-top img-fluid"
                    alt={service.title}
                    style={{
                      height: "13rem",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body text-center">
                    <h5
                      className="card-title mb-3"
                      style={{
                        fontFamily: "Nunito Sans, sans-serif",
                        fontWeight: "600",
                        fontSize: "1.1rem",
                      }}
                    >
                      {service.title}
                    </h5>
                    <a
                      href="#"
                      className="btn btn-primary px-4"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        borderRadius: "6px",
                      }}
                    >
                      Plus d'infos
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </center>
    </>
  );
}

export default Services;
