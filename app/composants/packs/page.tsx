"use client";
import React from "react";

function Packs() {
  const cards = [
    {
      title: "Abobo la Joie",
      desc: "Pour les petits commerces, vendeuses en ligne, artisans…",
      features: [
        "Logo simple",
        "2 Visuels pour les réseaux",
        "Création de page Facebook",
        "1 Shooting rapide (10 produits max)",
      ],
      price: "29.000 FCFA",
      delay: 100,
    },
    {
      title: "Yop Créa",
      desc: "Pour ceux qui veulent booster leur présence digitale.",
      features: [
        "Logo pro + charte graphique",
        "5 visuels + 1 flyer A5",
        "Vidéo pub 30 sec",
        "Page Facebook + Google Business",
        "Conseil stratégie",
      ],
      price: "75.000 FCFA",
      delay: 200,
    },
    {
      title: "Cocody Class",
      desc: "Pack premium pour entreprises, ONG, événements.",
      features: [
        "Identité visuelle complète",
        "10 visuels + 2 vidéos pro",
        "Création de site vitrine ou page de présentation",
        "Community management (1 mois)",
        "Audit de communication",
      ],
      price: "150.000 FCFA",
      delay: 300,
    },
    {
      title: "Gbê est mieux que drap",
      desc: "Projet spécial, grosse campagne, lancement de marque.",
      features: [
        "Campagne complète et personnalisée",
        "Plan stratégique sur 3 mois",
        "Audit de communication",
      ],
      price: "Sur devis",
      delay: 400,
    },
  ];

  return (
    <>
      <div id="packs">
        <center>
          <h1 className=" mb-4">Nos Packs</h1>
        </center>
        <div className="row justify-content-center mx-2">
          {cards.map((card, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6 d-flex"
              data-aos="fade-up"
              data-aos-delay={card.delay}
            >
              <div
                className="card mb-4 flex-fill"
                style={{
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                  borderRadius: "10px",
                  border: "none",
                  overflow: "hidden",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-8px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <h6
                  className="fw-bold m-0"
                  style={{
                    backgroundColor: "#2c2c2c",
                    color: "white",
                    padding: "10px",
                    textAlign: "center",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {card.title}
                </h6>
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <p
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "0.95rem",
                        color: "#444",
                      }}
                    >
                      {card.desc}
                    </p>
                    <ul
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "0.9rem",
                        paddingLeft: "18px",
                        marginBottom: "1rem",
                      }}
                    >
                      {card.features.map((feat, i) => (
                        <li key={i} style={{ marginBottom: "0.5rem" }}>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "bold",
                        fontSize: "1rem",
                      }}
                    >
                      PRIX : {card.price}
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary w-100"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        borderRadius: "6px",
                      }}
                    >
                      Commander
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Packs;
