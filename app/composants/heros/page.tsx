"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <div className="container mt-5" id="hero">
      <div className="row align-items-center" id="container_heros">
        <div className="col-lg-6 " data-aos="fade-right" data-aos-delay="100">
          <div id="textHeros">
            <center>
              <h1 style={{ fontFamily: "'Poppins', sans-serif" }}>
                <b>
                  <Typewriter
                    words={["Karibu Digital Agency."]}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </b>
                <br />
                <span style={{ fontFamily: "'Roboto', sans-serif" }}>
                  On gère ton image, tu gères ton business.
                </span>
                <br />
                <span
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    color: "#2c2c2c",
                    fontSize: "1.2rem",
                  }}
                >
                  Votre partenaire digital de confiance.
                </span>
              </h1>
            </center>
          </div>
        </div>
        <div className="col-lg-6 " data-aos="zoom-in" data-aos-delay="300">
          <center>
            <Image
              className="img-fluid d-inline-block"
              src="/img/h2.jpg"
              alt="Photo de démonstration"
              width={500}
              height={400}
              style={{
                objectFit: "cover",
                borderRadius: "2rem",
              }}
            />
          </center>
        </div>
      </div>
    </div>
  );
}

export default Hero;
