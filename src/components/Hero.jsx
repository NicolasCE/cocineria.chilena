import React from "react";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <h1 className="hero-title">
        Bienvenidos a <span>Sabores Chilenos</span>
      </h1>
      <p className="hero-subtitle">
        Donde las recetas tradicionales se encuentran con la innovación culinaria.
      </p>
      <div className="cta-buttons">
        <Link to="/carta" className="cta-button">
          Explorar Menú
        </Link>
        <Link to="/ubicacion" className="cta-button secondary">
          Dirección & Ubicación 🌭
        </Link>
      </div>
    </div>
  </section>
);

export default Hero;
