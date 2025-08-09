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
        fontFamily: "'Poppins', sans-serif",
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
                fontWeight: "700",
                fontSize: "1.4rem",
                marginBottom: "1.2rem",
              }}
            >
              Karibu Digital Agency
            </h4>
            <p
              style={{ lineHeight: 1.6, marginBottom: "1.5rem", color: "#ccc" }}
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
              }}
            >
              <Phone size={20} />
              <a
                href="tel:+22500000000"
                style={{ color: "#f8f9fa", textDecoration: "none" }}
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
              }}
            >
              <Mail size={20} />
              <a
                href="mailto:contact@karibuagency.ci"
                style={{ color: "#f8f9fa", textDecoration: "none" }}
              >
                contact@karibuagency.ci
              </a>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}
            >
              <MapPin size={20} />
              <span>Abidjan, Côte d'Ivoire</span>
            </div>
          </div>

          {/* Section Liens utiles */}
          <div style={{ flex: "1 1 180px", minWidth: 180 }}>
            <h5
              style={{
                fontWeight: "600",
                fontSize: "1.2rem",
                marginBottom: "1rem",
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
              }}
            >
              {" "}
              <li>
                <a
                  href="#hero"
                  style={{ color: "#f8f9fa", textDecoration: "none" }}
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  style={{ color: "#f8f9fa", textDecoration: "none" }}
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  style={{ color: "#f8f9fa", textDecoration: "none" }}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#packs"
                  style={{ color: "#f8f9fa", textDecoration: "none" }}
                >
                  Packs
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  style={{ color: "#f8f9fa", textDecoration: "none" }}
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
                fontWeight: "600",
                fontSize: "1.2rem",
                marginBottom: "1rem",
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
                  fontSize: "1.5rem",
                  transition: "color 0.3s ease",
                }}
              >
                <Instagram size={28} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                style={{
                  color: "#f8f9fa",
                  fontSize: "1.5rem",
                  transition: "color 0.3s ease",
                }}
              >
                <Facebook size={28} />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                style={{
                  color: "#f8f9fa",
                  fontSize: "1.5rem",
                  transition: "color 0.3s ease",
                }}
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
          }}
        >
          &copy; {new Date().getFullYear()} Karibu Digital Agency. Tous droits
          réservés.
        </p>
        <center>
          {" "}
          <p
            style={{
              textAlign: "center",
              fontSize: "0.9rem",
              color: "#999",
              margin: 0,
              userSelect: "none",
            }}
          >
            Développé par{" "}
            <a
              href="https://portfolio-lamters-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#999" }}
            >
              Bandaogo Lamine
            </a>
          </p>
        </center>
      </div>
    </footer>
  );
}
