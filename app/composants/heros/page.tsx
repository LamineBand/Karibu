"use client";
import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <div className="container mt-5" id="hero">
      <div className="row align-items-center" id="container_heros">
        <div className="col-lg-6 ">
          <div id="textHeros">
            <center>
              <h1>
                {" "}
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
                <span>On gère ton image, tu gères ton business.</span>
                <br />
                <span style={{ color: "#2c2c2c", fontSize: "1.2rem" }}>
                  Votre partenaire digital de confiance.
                </span>
              </h1>
            </center>
          </div>
        </div>
        <div className="col-lg-6 ">
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
