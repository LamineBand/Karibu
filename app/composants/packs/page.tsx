import React from "react";

function Packs() {
  return (
    <>
      <div id="packs">
        <center>
          <h1 className="fw-bold" data-aos="fade-down" data-aos-duration="800">
            Nos Packs Ivoiriens
          </h1>

          <div className="container mt-5">
            <div className="row">
              <div
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div
                  className="card mb-3"
                  style={{
                    width: "18rem",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.6)",
                    padding: "1rem",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    height: "35rem",
                  }}
                >
                  <div className="card-body">
                    <h6
                      className="card-title fw-bold"
                      style={{
                        backgroundColor: "#2c2c2c",
                        color: "white",
                        width: "100%",
                        padding: "5px",
                        borderBottom: "solide 1px",
                      }}
                    >
                      Abobo la Joie
                    </h6>
                    <p className="card-text">
                      Pour les petits commerces, vendeuses en ligne, artisans…
                    </p>
                    <div style={{ textAlign: "left" }}>
                      <li>Logo simple</li>
                      <br />
                      <li>2 Visuels pour les réseaux</li>
                      <br /> <li>Création de page Facebook</li>
                      <br /> <li>1 Shooting rapide (10 produits max)</li>
                    </div>
                    <div style={{ marginTop: "8rem" }}>
                      <p>
                        <b>PRIX : 29.000 FCFA</b>
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div
                  className="card mb-3"
                  style={{
                    width: "18rem",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.6)",
                    padding: "1rem",
                    backgroundColor: "white",
                    borderRadius: "8px",
                  }}
                >
                  <div className="card-body">
                    <h6
                      className="card-title fw-bold"
                      style={{
                        backgroundColor: "#2c2c2c",
                        color: "white",
                        width: "100%",
                        padding: "5px",
                        borderBottom: "solide 1px",
                      }}
                    >
                      Yop Créa
                    </h6>
                    <p className="card-text">
                      Pour ceux qui veulent booster leur présence digitale.
                    </p>
                    <div style={{ textAlign: "left" }}>
                      <li>Logo pro + charte graphique</li>
                      <br />
                      <li>5 visuels + 1 flyer A5</li>
                      <br /> <li>Vidéo pub 30 sec</li>
                      <br /> <li>Page Facebook + Google Business</li>
                      <br /> <li>Conseil stratégie</li>
                    </div>
                    <p className="mt-5">
                      <b> PRIX : 75.000 FCFA</b>
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div
                  className="card mb-3"
                  style={{
                    width: "18rem",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.6)",
                    padding: "1rem",
                    backgroundColor: "white",
                    borderRadius: "8px",
                  }}
                >
                  <div className="card-body">
                    <h6
                      className="card-title fw-bold"
                      style={{
                        backgroundColor: "#2c2c2c",
                        color: "white",
                        width: "100%",
                        padding: "5px",
                        borderBottom: "solide 1px",
                      }}
                    >
                      Cocody Class
                    </h6>
                    <p className="card-text">
                      Pack premium pour entreprises, ONG, événements.
                    </p>
                    <div style={{ textAlign: "left" }}>
                      <li>Identité visuelle complète</li>
                      <br />
                      <li>10 visuels + 2 vidéos pro</li>
                      <br />{" "}
                      <li>Création de site vitrine ou page de présentation</li>
                      <br /> <li>Community management (1 mois)</li>
                      <br /> <li>Audit de communication</li>
                    </div>
                    <p className="mt-5">
                      <b>PRIX : 150.000 FCFA</b>
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div
                  className="card mb-3"
                  style={{
                    width: "18rem",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.6)",
                    padding: "1rem",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    height: "35rem",
                  }}
                >
                  <div className="card-body">
                    <h6
                      className="card-title fw-bold"
                      style={{
                        backgroundColor: "#2c2c2c",
                        color: "white",
                        width: "100%",
                        padding: "5px",
                        borderBottom: "solide 1px",
                      }}
                    >
                      Gbê est mieux que drap
                    </h6>
                    <p className="card-text">
                      Projet spécial, grosse campagne, lancement de marque .
                    </p>
                    <div style={{ textAlign: "left" }}>
                      <li>Campagne complète et personnalisée</li>
                      <br />
                      <li>Plan stratégique sur 3 mois</li>
                      <br /> <li>Audit de communication</li>
                    </div>
                    <div style={{ marginTop: "9rem" }}>
                      <p className="mt-5">
                        <b>Sur devis</b>
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>
    </>
  );
}

export default Packs;
