"use client";

//import type React from "react"
import { useEffect, useState } from "react";
// Ajoute ces imports
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  function handleSubmit() {}
  return (
    <section className="contact-section mt-0" id="contact">
      <div className="container">
        <div className="row">
          {/* En-tête de section */}
          <div className="col-12 text-center mb-5" data-aos="fade-down">
            <div className="section-header">
              <h2 className="main-title">
                <span className="title-icon">{/** <Mail size={28} /> */}</span>
                CONTACTEZ-NOUS
              </h2>
              <h3 className="subtitle">Un projet ? Une idée ? Parlons-en.</h3>
              <p className="intro-text">
                Vous avez besoin d'un visuel percutant, d'une vidéo
                professionnelle ou d'un accompagnement en communication digitale
                ?<br />
                <strong>
                  L'équipe de Karibu Digital Agency est à votre écoute.
                </strong>
              </p>
            </div>
          </div>
        </div>

        <div className="row g-5 justify-content-center">
          {/* Informations de contact */}
          <div className="col-lg-6 col-xl-5" data-aos="fade-right">
            <div className="contact-info">
              <h4 className="info-title">Nos coordonnées</h4>

              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-details">
                  <h5>Téléphone / WhatsApp</h5>
                  <a href="tel:+22500000000" className="contact-link">
                    +225 XX XX XX XX XX
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-details">
                  <h5>Email</h5>
                  <a
                    href="mailto:contact@karibuagency.ci"
                    className="contact-link"
                  >
                    contact@karibuagency.ci
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-details">
                  <h5>Adresse</h5>
                  <span className="contact-text">Abidjan, Côte d'Ivoire</span>
                </div>
              </div>

              <div className="social-section">
                <h5 className="social-title">Suivez-nous</h5>
                <div className="social-links">
                  <a
                    href="#"
                    className="social-link instagram"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="social-link facebook"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="social-link tiktok"
                    aria-label="TikTok"
                  >
                    <MessageCircle size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="col-lg-6 col-xl-7" data-aos="fade-left">
            <div className="contact-form-wrapper">
              <h4 className="form-title">📬 Envoyez-nous un message</h4>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="fullName" className="form-label">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        placeholder="Votre nom complet"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Adresse email *
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="whatsapp" className="form-label">
                        Numéro WhatsApp
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="whatsapp"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        placeholder="+225 XX XX XX XX XX"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">
                        Sujet du message *
                      </label>
                      <select
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Choisissez un sujet</option>
                        <option value="design">Design graphique</option>
                        <option value="video">Production vidéo</option>
                        <option value="digital">Communication digitale</option>
                        <option value="branding">Branding</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        Message *
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Décrivez votre projet ou votre besoin..."
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-send">
                      <Send size={18} className="me-2" />
                      Envoyer
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Phrase de clôture */}
        <div className="row mt-5">
          <div className="col-12 text-center" data-aos="fade-up">
            <div className="closing-message">
              <p className="closing-text">
                <strong>
                  Karibu, c'est plus qu'une agence. C'est une équipe prête à
                  faire briller votre image.
                </strong>
                <br />
                N'hésitez pas à nous écrire. On vous répond vite vite ! ✉️
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          padding: 80px 0;
          background: transparent;
          position: relative;
          overflow: hidden;
        }

        .container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
        }

        .row.justify-content-center {
          max-width: 100%;
          margin: 0 auto;
        }

        .section-header {
          margin-bottom: 3rem;
        }

        .main-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #2c2c2c;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .title-icon {
          font-size: 2rem;
          margin-right: 0.5rem;
        }

        .subtitle {
          font-size: 1.8rem;
          font-weight: 600;
          color: #2c2c2c;
          margin-bottom: 1.5rem;
        }

        .intro-text {
          font-size: 1.1rem;
          color: #5a5a5c;
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto;
        }

        .contact-info {
          background: white;
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          height: fit-content;
          position: sticky;
          top: 2rem;
        }

        .info-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #2c2c2c;
          margin-bottom: 2rem;
          text-align: center;
        }

        .contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
          padding: 1rem;
          border-radius: 12px;
          transition: all 0.3s ease;
          flex-direction: column;
          text-align: center;
        }

        .contact-item:hover {
          background: #f8f9fa;
          transform: translateY(-2px);
        }

        .contact-icon {
          background: #2c2c2c;
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          flex-shrink: 0;
        }

        .contact-details h5 {
          font-weight: 600;
          color: #2c2c2c;
          margin-bottom: 0.5rem;
          font-size: 1rem;
          text-align: center;
        }

        .contact-link {
          color: #2c2c2c;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .contact-link:hover {
          color: #5a5a5c;
          text-decoration: underline;
        }

        .contact-text {
          color: #5a5a5c;
          font-weight: 500;
        }

        .social-section {
          margin-top: 2.5rem;
          padding-top: 2rem;
          border-top: 2px solid #e9ecef;
          text-align: center;
        }

        .social-title {
          font-weight: 600;
          color: #2c2c2c;
          margin-bottom: 1rem;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .social-link {
          width: 45px;
          height: 45px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.3s ease;
          color: white;
        }

        .social-link.instagram {
          background: #2c2c2c;
        }

        .social-link.facebook {
          background: #2c2c2c;
        }

        .social-link.tiktok {
          background: #2c2c2c;
        }

        .social-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .contact-form-wrapper {
          background: white;
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .form-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #2c2c2c;
          margin-bottom: 2rem;
          text-align: center;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          font-weight: 600;
          color: #2c2c2c;
          margin-bottom: 0.5rem;
          display: block;
        }

        .form-control {
          border: 2px solid #e9ecef;
          border-radius: 12px;
          padding: 0.75rem 1rem;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: #f8f9fa;
        }

        .form-control:focus {
          border-color: #2c2c2c;
          box-shadow: 0 0 0 0.2rem rgba(44, 44, 44, 0.25);
          background: white;
          outline: none;
        }

        .form-control::placeholder {
          color: #adb5bd;
        }

        .btn-send {
          background: #2c2c2c;
          border: none;
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 12px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          min-width: 200px;
        }

        .btn-send:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
          background: #5a5a5c;
        }

        .closing-message {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          margin-top: 3rem;
        }

        .closing-text {
          font-size: 1.1rem;
          color: #5a5a5c;
          line-height: 1.6;
          margin: 0;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .row.justify-content-center {
            flex-direction: column;
            align-items: center;
          }

          .col-lg-6 {
            max-width: 100%;
            margin-bottom: 2rem;
          }

          .contact-section {
            padding: 60px 0;
          }

          .main-title {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 1.4rem;
          }

          .intro-text {
            font-size: 1rem;
          }

          .contact-info,
          .contact-form-wrapper {
            padding: 1.5rem;
            margin-bottom: 2rem;
          }

          .contact-info {
            position: static;
          }

          .contact-item {
            padding: 0.75rem;
          }

          .contact-icon {
            width: 40px;
            height: 40px;
          }

          .social-links {
            gap: 0.75rem;
          }

          .social-link {
            width: 40px;
            height: 40px;
          }

          .btn-send {
            width: 100%;
            min-width: auto;
          }
        }

        @media (max-width: 576px) {
          .main-title {
            font-size: 1.8rem;
          }

          .title-icon {
            font-size: 1.5rem;
          }

          .contact-info,
          .contact-form-wrapper {
            padding: 1rem;
          }

          .form-control {
            padding: 0.6rem 0.8rem;
          }
        }
      `}</style>
    </section>
  );
}
