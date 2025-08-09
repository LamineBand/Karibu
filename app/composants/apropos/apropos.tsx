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
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.headerSection} data-aos="fade-down">
          <div className={styles.badge}>À PROPOS DE NOUS</div>
          <h1 className={styles.mainTitle}>
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
              <p className={styles.introText}>
                <strong>Karibu Digital Agency</strong>, bien plus qu'une agence
                de communication : une énergie, une vision, une équipe prête à
                révéler votre image de marque avec excellence.
              </p>
            </div>

            {/* Expertises */}
            <div className={styles.expertiseSection}>
              <h3 className={styles.sectionTitle}>Nos expertises</h3>
              <div className={styles.expertiseGrid}>
                {expertises.map((exp, i) => (
                  <div
                    key={i}
                    className={styles.expertiseCard}
                    data-aos="fade-up"
                    data-aos-delay={i * 150}
                  >
                    <div className={styles.expertiseIcon}>{exp.icon}</div>
                    <div className={styles.expertiseContent}>
                      <h4 className={styles.expertiseTitle}>{exp.title}</h4>
                      <p className={styles.expertiseDesc}>{exp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className={styles.valuesSection} data-aos="fade-right">
              <h3 className={styles.sectionTitle}>Nos valeurs</h3>
              <div className={styles.valuesTags}>
                {values.map((value, index) => (
                  <div key={index} className={styles.valueTag}>
                    <span className={styles.valueCheck}>✓</span>
                    <span className={styles.valueText}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className={styles.missionSection} data-aos="flip-left">
          <div className={styles.missionCard}>
            <div className={styles.missionIcon}>💡</div>
            <div className={styles.missionContent}>
              <h3 className={styles.missionTitle}>Notre Mission</h3>
              <p className={styles.missionText}>
                Amplifier votre impact visuel et digital à travers des contenus
                créatifs, puissants et stratégiques qui marquent les esprits et
                génèrent des résultats concrets.
              </p>
            </div>
          </div>
        </div>

        {/* Karibu meaning */}
        <div className={styles.meaningSection} data-aos="fade-left">
          <div className={styles.meaningCard}>
            <div className={styles.meaningIcon}>
              <FaQuestionCircle size={40} className={styles.titleIcon} />
            </div>
            <div className={styles.meaningContent}>
              <h4 className={styles.meaningTitle}>Pourquoi "Karibu" ?</h4>
              <p className={styles.meaningText}>
                <strong>Karibu</strong> signifie "Bienvenue" en swahili. Un mot
                qui incarne notre ADN : accueil, créativité et ouverture sur le
                monde.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={styles.statsSection} data-aos="zoom-in-up">
          <h3 className={styles.statsTitle}>Nos réalisations en chiffres</h3>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statText}>{stat.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className={styles.closingSection} data-aos="fade-up">
          <div className={styles.closingCard}>
            <p className={styles.closingText}>
              Chez <span className={styles.brandName}>Karibu</span>, votre image
              est un levier stratégique.
              <br />
              Nous sommes là pour la transformer en véritable pouvoir
              d'influence.
            </p>
            <div className={styles.closingCta}>
              <button className={styles.ctaButton}>
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
