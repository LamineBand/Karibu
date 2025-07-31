import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg " id="navglobal">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {/**
           * 
           <Image
            src={"/img/l.jpg"}
            alt="Karibu Digital"
            height={50}
            width={100}
            objectFit="cover"
          />
          <b style={{ color: "white" }}> Karibu Digital </b>
           */}
          <img
            className="img-fluide"
            src="/img/logt.jpg"
            alt=""
            style={{
              width: "10rem",
              height: "4rem",
              objectFit: "cover",
            }}
          />
        </a>
        <button
          style={{ backgroundColor: "white" }}
          className="btn d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto me-auto">
            <a className="nav-link active mx-3" href="#hero">
              Accueil
            </a>
            <a className="nav-link mx-3" href="#servicesListe">
              Nos services
            </a>
            <a className="nav-link mx-3" href="#packs">
              Nos packs
            </a>
            <a className="nav-link mx-3" href="#about">
              A propos de nous
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
