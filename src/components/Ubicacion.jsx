import React from "react";

const Ubicacion = () => (
  <section id="ubicacion" className="ubicacion-section">
    <footer className="footer">
      
        <p className="title is-5">Encuéntranos</p>
        <p className="subtitle is-6">
          📍 Dirección: Avenida Santa Maria #1140, Constitución, Chile
        </p>
        
        {/* Mapa interactivo de Google */}
        <div className="map-container">
          <iframe
            title="Ubicación de Sabores Chilenos"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.931502567485!2d-73.27684848290632!3d-35.325254679662484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96688cba9b46c5d7%3A0x4ee105408254801d!2sAvenida%20Santa%20Maria%20%231140%2C%20Constituci%C3%B3n%2C%20Chile!5e0!3m2!1ses!2sus!4v1673455027064!5m2!1ses!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Enlaces de navegación */}
        <div className="links">
          <a href="/quienes-somos">Quiénes Somos</a> |
          <a href="/seccion-cocineros">Nuestro Equipo Cocinero</a> |
          <a href="/carta">Carta</a> |
          <a href="/">Historia</a>
        </div>

        {/* Redes sociales o más opciones de contacto */}
        <div className="social-media">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
        </div>      
    </footer>
  </section>
);

export default Ubicacion;

