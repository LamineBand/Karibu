import Image from "next/image";
import React from "react";

function Services() {
  return (
    <>
      <center>
        <h1
          className="mt-5"
          id="servicesListe"
          style={{ color: "#2c2c2c", fontWeight: "bold" }}
          data-aos="fade-up"
        >
          Nos services
        </h1>
      </center>
      <center>
        <div className="container-fluide mb-5" id="services">
          <div className="row m-0">
            <div
              className="col mb-3"
              id="imgservice"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="card" style={{ width: "18rem" }}>
                <img
                  style={{ height: "13rem", objectFit: "cover" }}
                  src="/imgss/s.jpg"
                  className="card-img-top img-fluid"
                  alt="Graphisme & Design"
                />
                <div className="card-body">
                  <h5 className="card-title">Graphisme & Design</h5>
                  <a href="#" className="btn btn-primary">
                    Plus d'infos
                  </a>
                </div>
              </div>
            </div>

            <div className="col mb-3" data-aos="zoom-in" data-aos-delay="200">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  style={{ height: "13rem", objectFit: "cover" }}
                  src="/imgss/dea.jpg"
                  className="card-img-top img-fluid"
                  alt="Vidéo & Animation"
                />
                <div className="card-body">
                  <h5 className="card-title">Vidéo & Animation</h5>
                  <a href="#" className="btn btn-primary">
                    Plus d'infos
                  </a>
                </div>
              </div>
            </div>

            <div className="col mb-3" data-aos="zoom-in" data-aos-delay="300">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  style={{ height: "13rem", objectFit: "cover" }}
                  src="/imgss/w.jpg"
                  className="card-img-top img-fluid"
                  alt="Digitalisation & Web"
                />
                <div className="card-body">
                  <h5 className="card-title">Digitalisation & Web</h5>
                  <a href="#" className="btn btn-primary">
                    Plus d'infos
                  </a>
                </div>
              </div>
            </div>

            <div className="col mb-3" data-aos="zoom-in" data-aos-delay="400">
              <div className="card h-100" style={{ width: "18rem" }}>
                <img
                  style={{ height: "13rem", objectFit: "cover" }}
                  src="/imgss/s3.jpg"
                  className="card-img-top img-fluid"
                  alt="Publicité & Contenu"
                />
                <div className="card-body">
                  <h5 className="card-title">Publicité & Contenu</h5>
                  <a href="#" className="btn btn-primary">
                    Plus d'infos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}

export default Services;
