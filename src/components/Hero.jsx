import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ user, handleLogin, handleLogout }) => (
  <section
    className="hero"
    style={{
      backgroundImage: "url(https://plus.unsplash.com/premium_photo-1680382578860-6ebc8e527ff1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvbmRvJTIwZGUlMjBjb2NpbmF8ZW58MHx8MHx8fDA%3D)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      position: "relative",
    }}
  >
    <div className="hero-overlay" style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, 0.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div className="hero-content" style={{ color: "#fff", textAlign: "center" }}>
        <h1 className="hero-title" style={{ fontSize: "3rem", fontWeight: "bold", textTransform: "uppercase" }}>
          Bienvenidos a <span style={{ color: "#ffb347" }}>Sabores Chilenos</span>
        </h1>
        <p className="hero-subtitle" style={{ fontSize: "1.5rem", marginTop: "15px" }}>
          Donde las recetas tradicionales se encuentran con la innovación culinaria.
        </p>

        <div className="cta-buttons" style={{ marginTop: "20px" }}>
          <Link to="/carta" className="cta-button" style={{ background: "#ffb347", padding: "12px 30px", borderRadius: "5px", textDecoration: "none", color: "#000", fontWeight: "bold", transition: "0.3s" }}>
            Explorar Menú
          </Link>
          <Link to="/ubicacion" className="cta-button secondary" style={{ background: "#444", padding: "12px 30px", borderRadius: "5px", textDecoration: "none", color: "#fff", fontWeight: "bold", transition: "0.3s" }}>
            Dirección & Ubicación 🌭
          </Link>
        </div>

        <div className="auth-buttons" style={{ marginTop: "20px" }}>
          {user ? (
            <button className="logout-button" onClick={handleLogout} style={{ background: "#ff4b2b", color: "#fff", padding: "10px 20px", borderRadius: "5px", border: "none", cursor: "pointer" }}>
              Cerrar Sesión
            </button>
          ) : (
            <Link to="/login" className="login-button" style={{ background: "#007bff", color: "#fff", padding: "10px 20px", borderRadius: "5px", textDecoration: "none" }}>
              Iniciar Sesión
            </Link>
          )}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

