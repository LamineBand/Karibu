"use client";
import styles from "./apropos.module.css";
import {
  FaPaintBrush,
  FaCameraRetro,
  FaVideo,
  FaBriefcase,
  FaQuestionCircle,
} from "react-icons/fa";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

export default function Apropos() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const values = [
    "Créativité",
    "Réactivité",
    "Qualité",
    "Vision locale et globale",
    "Résultats concrets",
  ];

  const stats = [
    { text: "+200 événements couverts", number: "200+" },
    { text: "+100 vidéos montées", number: "100+" },
    { text: "+50 marques accompagnées", number: "50+" },
    { text: "Présence en Côte d'Ivoire", number: "1" },
  ];

  const expertises = [
    {
      icon: <FaPaintBrush size={30} />,
      title: "Création graphique",
      desc: "logos, flyers, affiches",
    },
    {
      icon: <FaCameraRetro size={30} />,
      title: "Photographie événementielle",
      desc: "capturer vos moments",
    },
    {
      icon: <FaVideo size={30} />,
      title: "Montage vidéo professionnel",
      desc: "storytelling visuel",
    },
    {
      icon: <FaBriefcase size={30} />,
      title: "Conseil en communication digitale",
      desc: "stratégie & impact",
    },
  ];

  return (
    <section
      className={styles.aboutSection}
      id="about"
      style={{ fontFamily: "'Roboto', sans-serif", color: "#2c2c2c" }}
    >
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.headerSection} data-aos="fade-down">
          <div
            className={styles.badge}
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
          >
            À PROPOS DE NOUS
          </div>
          <h1
            className={styles.mainTitle}
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
          >
            Une équipe jeune,
            <br />
            créative et engagée
          </h1>
          <div className={styles.titleDecoration}></div>
        </div>

        <div className={styles.contentWrapper}>
          {/* Image Section */}
          <center>
            <div className={styles.imageSection} data-aos="zoom-in">
              <div className={styles.imageContainer}>
                <div className={styles.imageFrame}>
                  <img
                    src="/img/im.jpg"
                    alt="Équipe Karibu"
                    className={styles.teamImage}
                  />
                </div>
              </div>
            </div>
          </center>

          {/* Content Section */}
          <div className={styles.contentSection}>
            <div className={styles.introSection} data-aos="fade-up">
              <p
                className={styles.introText}
                style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
              >
                <strong
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  Karibu Digital Agency
                </strong>
                , bien plus qu'une agence de communication : une énergie, une
                vision, une équipe prête à révéler votre image de marque avec
                excellence.
              </p>
            </div>

            {/* Expertises */}
            <div className={styles.expertiseSection}>
              <h3
                className={styles.sectionTitle}
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
              >
                Nos expertises
              </h3>
              <div className={styles.expertiseGrid}>
                {expertises.map((exp, i) => (
                  <div
                    key={i}
                    className={styles.expertiseCard}
                    data-aos="fade-up"
                    data-aos-delay={i * 150}
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    <div className={styles.expertiseIcon}>{exp.icon}</div>
                    <div className={styles.expertiseContent}>
                      <h4
                        className={styles.expertiseTitle}
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 600,
                        }}
                      >
                        {exp.title}
                      </h4>
                      <p className={styles.expertiseDesc}>{exp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className={styles.valuesSection} data-aos="fade-right">
              <h3
                className={styles.sectionTitle}
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
              >
                Nos valeurs
              </h3>
              <div
                className={styles.valuesTags}
                style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
              >
                {values.map((value, index) => (
                  <div key={index} className={styles.valueTag}>
                    <span
                      className={styles.valueCheck}
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      ✓
                    </span>
                    <span className={styles.valueText}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div
          className={styles.missionSection}
          data-aos="flip-left"
          style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
        >
          <div className={styles.missionCard}>
            <div className={styles.missionIcon}>💡</div>
            <div className={styles.missionContent}>
              <h3
                className={styles.missionTitle}
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
              >
                Notre Mission
              </h3>
              <p className={styles.missionText}>
                Amplifier votre impact visuel et digital à travers des contenus
                créatifs, puissants et stratégiques qui marquent les esprits et
                génèrent des résultats concrets.
              </p>
            </div>
          </div>
        </div>

        {/* Karibu meaning */}
        <div
          className={styles.meaningSection}
          data-aos="fade-left"
          style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
        >
          <div className={styles.meaningCard}>
            <div className={styles.meaningIcon}>
              <FaQuestionCircle size={40} className={styles.titleIcon} />
            </div>
            <div className={styles.meaningContent}>
              <h4
                className={styles.meaningTitle}
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
              >
                Pourquoi "Karibu" ?
              </h4>
              <p className={styles.meaningText}>
                <strong
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  Karibu
                </strong>{" "}
                signifie "Bienvenue" en swahili. Un mot qui incarne notre ADN :
                accueil, créativité et ouverture sur le monde.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={styles.statsSection} data-aos="zoom-in-up">
          <h3
            className={styles.statsTitle}
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
          >
            Nos réalisations en chiffres
          </h3>
          <div
            className={styles.statsGrid}
            style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div
                  className={styles.statNumber}
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {stat.number}
                </div>
                <div className={styles.statText}>{stat.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div
          className={styles.closingSection}
          data-aos="fade-up"
          style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
        >
          <div className={styles.closingCard}>
            <p className={styles.closingText}>
              Chez{" "}
              <span
                className={styles.brandName}
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
              >
                Karibu
              </span>
              , votre image est un levier stratégique.
              <br />
              Nous sommes là pour la transformer en véritable pouvoir
              d'influence.
            </p>
            <div className={styles.closingCta}>
              <button
                className={styles.ctaButton}
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
              >
                Découvrir nos réalisations
                <span className={styles.ctaArrow}>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
