import Image from "next/image";
import React from "react";

function Services() {
  return (
    <>
      <center>
        {" "}
        <h1
          className="mt-5 "
          id="servicesListe"
          style={{ color: "#2c2c2c", fontWeight: "bold" }}
        >
          Nos services
        </h1>
      </center>
      <center>
        <div className="container-fluide mt-5  mb-5 " id="services">
          <div className="row  g-4">
            <div className="col" id="imgservice">
              <div className="card " style={{ width: "18rem" }}>
                <img
                  style={{ height: "13rem", objectFit: "cover" }}
                  src="/imgss/s.jpg"
                  className="card-img-top img-fluid"
                  alt="Graphisme & Desig"
                />
                <div className="card-body">
                  <h5 className="card-title">Graphisme & Design</h5>

                  <a href="#" className="btn btn-primary">
                    Plus d'infos
                  </a>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  style={{ height: "13rem", objectFit: "cover" }}
                  src="/imgss/dea.jpg"
                  className="card-img-top img-fluid"
                  alt="Graphisme & Desig"
                />
                <div className="card-body">
                  <h5 className="card-title">Vidéo & Animation</h5>
                  <a href="#" className="btn btn-primary">
                    Plus d'infos
                  </a>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  style={{ height: "13rem", objectFit: "cover" }}
                  src="/imgss/w.jpg"
                  className="card-img-top img-fluid"
                  alt="Graphisme & Desig"
                />
                <div className="card-body">
                  <h5 className="card-title"> Digitalisation & Web</h5>
                  <a href="#" className="btn btn-primary">
                    Plus d'infos
                  </a>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="card h-100" style={{ width: "18rem" }}>
                <img
                  style={{ height: "13rem", objectFit: "cover" }}
                  src="/imgss/s3.jpg"
                  className="card-img-top img-fluid"
                  alt="..."
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
