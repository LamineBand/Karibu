"use client";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#2c2c2c",
        color: "#f8f9fa",
        padding: "40px 20px",
        fontFamily:
          "'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        lineHeight: 1.6,
        fontWeight: 400,
        fontSize: "1rem",
      }}
    >
      <div className="container" style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          {/* Section coordonnées */}
          <div style={{ flex: "1 1 250px", minWidth: 250 }}>
            <h4
              style={{
                fontWeight: 700,
                fontSize: "1.5rem",
                marginBottom: "1.2rem",
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Karibu Digital Agency
            </h4>
            <p
              style={{
                marginBottom: "1.5rem",
                color: "#ccc",
                fontSize: "1.05rem",
                fontWeight: 300,
                fontFamily: "'Open Sans', sans-serif",
              }}
            >
              Votre partenaire pour un visuel percutant, une vidéo
              professionnelle et une communication digitale réussie.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.8rem",
                marginBottom: "0.8rem",
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 500,
              }}
            >
              <Phone size={20} />
              <a
                href="tel:+22500000000"
                style={{
                  color: "#f8f9fa",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffa500")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#f8f9fa")}
              >
                +225 XX XX XX XX XX
              </a>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.8rem",
                marginBottom: "0.8rem",
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 500,
              }}
            >
              <Mail size={20} />
              <a
                href="mailto:contact@karibuagency.ci"
                style={{
                  color: "#f8f9fa",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffa500")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#f8f9fa")}
              >
                contact@karibuagency.ci
              </a>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.8rem",
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 500,
              }}
            >
              <MapPin size={20} />
              <span>Abidjan, Côte d'Ivoire</span>
            </div>
          </div>

          {/* Section Liens utiles */}
          <div style={{ flex: "1 1 180px", minWidth: 180 }}>
            <h5
              style={{
                fontWeight: 600,
                fontSize: "1.3rem",
                marginBottom: "1rem",
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: "0.03em",
                textTransform: "uppercase",
              }}
            >
              Liens utiles
            </h5>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                color: "#ccc",
                lineHeight: 2,
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 400,
                fontSize: "1rem",
              }}
            >
              <li>
                <a
                  href="#hero"
                  style={{
                    color: "#f8f9fa",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#ffa500")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#f8f9fa")
                  }
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  style={{
                    color: "#f8f9fa",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#ffa500")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#f8f9fa")
                  }
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  style={{
                    color: "#f8f9fa",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#ffa500")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#f8f9fa")
                  }
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#packs"
                  style={{
                    color: "#f8f9fa",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#ffa500")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#f8f9fa")
                  }
                >
                  Packs
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  style={{
                    color: "#f8f9fa",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#ffa500")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#f8f9fa")
                  }
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Section réseaux sociaux */}
          <div style={{ flex: "1 1 180px", minWidth: 180 }}>
            <h5
              style={{
                fontWeight: 600,
                fontSize: "1.3rem",
                marginBottom: "1rem",
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: "0.03em",
                textTransform: "uppercase",
              }}
            >
              Suivez-nous
            </h5>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a
                href="#"
                aria-label="Instagram"
                style={{
                  color: "#f8f9fa",
                  fontSize: "1.6rem",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffa500")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#f8f9fa")}
              >
                <Instagram size={28} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                style={{
                  color: "#f8f9fa",
                  fontSize: "1.6rem",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffa500")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#f8f9fa")}
              >
                <Facebook size={28} />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                style={{
                  color: "#f8f9fa",
                  fontSize: "1.6rem",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffa500")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#f8f9fa")}
              >
                <MessageCircle size={28} />
              </a>
            </div>
          </div>
        </div>

        <hr
          style={{
            margin: "2.5rem 0",
            borderColor: "#444",
            borderStyle: "solid",
            borderWidth: "0.5px 0 0 0",
          }}
        />

        <p
          style={{
            textAlign: "center",
            fontSize: "0.9rem",
            color: "#999",
            margin: 0,
            userSelect: "none",
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 400,
          }}
        >
          &copy; {new Date().getFullYear()} Karibu Digital Agency. Tous droits
          réservés.
        </p>
        <center>
          <p
            style={{
              textAlign: "center",
              fontSize: "0.9rem",
              color: "#999",
              margin: 0,
              userSelect: "none",
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 400,
            }}
          >
            Développé par{" "}
            <a
              href="https://portfolio-lamters-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#999", textDecoration: "underline" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffa500")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}
            >
              Bandaogo Lamine
            </a>
          </p>
        </center>
      </div>
    </footer>
  );
}
