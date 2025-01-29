import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const Section = () => {
  const [showPlatos, setShowPlatos] = useState(false);
  const platosRef = useRef(null);

  const handleClick = () => {
    setShowPlatos(true);
    if (platosRef.current) {
      platosRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const horario = () => {
    Swal.fire({
      title: "Horario de Atención",
      text: "De lunes a viernes: 9:00 AM - 9:00 PM\nSábados y domingos: 10:00 AM - 8:00 PM",
      icon: "info",
      confirmButtonText: "Entendido",
      customClass: {
        popup: "custom-swal-popup",
        title: "custom-swal-title",
        htmlContainer: "custom-swal-text",
        confirmButton: "custom-swal-confirm",
      },
    });
  };

   // Opiniones ficticias
   const opiniones = [
    {
      texto: "¡La comida es excelente! El mejor churrasco que he probado.",
      estrellas: 5,
      autor:"Juan Pérez",
    },
    {
      texto: "El servicio fue rápido y la comida llegó caliente. ¡Recomendado!",
      estrellas: 4,
      autor: "María González",
    },
    {
      texto: "Los ingredientes frescos hacen toda la diferencia. ¡Increíble sabor!",
      estrellas: 5,
      autor: "Carlos López",
    },
  ];

  // Función para renderizar estrellas
  const renderizarEstrellas = (estrellas) => {
    const llenas = "★".repeat(estrellas);
    const vacías = "☆".repeat(5 - estrellas);
    return (
      <span className="text-yellow-500 text-lg">
        {llenas}
        {vacías}
      </span>
    );
  };

  return (
    <>
      <section id="quienes-somos" className="section section-image">
        <div className="section-content">
          <h2 className="title animated fadeIn">¿Quiénes Somos?</h2>
          <p className="description fadeIn">
            Somos un equipo de chefs apasionados por la cocina chilena...
          </p>
          <div className="image-gallery">
            <img src="../img/plato1.png" alt="Plato 1" className="image-item" />
            <img src="../img/plato2.png" alt="Plato 2" className="image-item" />
            <img src="../img/plato3.png" alt="Plato 3" className="image-item" />
          </div>
          <button className="cta-button" onClick={handleClick}>
            ¡Descubre Más!
          </button>
          <button className="cta-button horario-button" onClick={horario}>
            Ver Horario de Atención
          </button>
        </div>
      </section>

      <section id="historia" className="section historia-section">
        <div className="section-content">
          <h2 className="title">Nuestra Historia</h2>
          <p className="description">
            Aquí podrás conocer más sobre nuestra historia, la pasión detrás de
            cada plato y cómo hemos llegado a ofrecerte lo mejor de la cocina
            chilena.
          </p>
        </div>
      </section>

      {showPlatos && (
        <section ref={platosRef} id="platos" className="section platos-section">
          <div className="section-content">
            <h2 className="section-title">Nuestros Platos Destacados</h2>
            <div className="platos-gallery">
              <div className="plato-item">
                <img
                  src="../img/plato1.png"
                  alt="Plato 1"
                  className="image-item"
                />
                <h3 className="plato-title">
                  Salmón Glaseado con Miel y Jengibre sobre Cama de Quinoa
                </h3>
                <p className="plato-description">
                  Un filete de salmón fresco, glaseado con una mezcla dulce y
                  picante de miel y jengibre, acompañado de una cama de quinoa
                  esponjosa y vegetales al vapor.
                </p>
              </div>
              <div className="plato-item">
                <img
                  src="../img/plato2.png"
                  alt="Plato 2"
                  className="image-item"
                />
                <h3 className="plato-title">
                  Raviolis de Trufa Negra con Mantequilla de Salvia
                </h3>
                <p className="plato-description">
                  Delicados raviolis rellenos de una mezcla exquisita de ricotta
                  y trufa negra, servidos en una sedosa salsa de mantequilla de
                  salvia.
                </p>
              </div>
              <div className="plato-item">
                <img
                  src="../img/plato3.png"
                  alt="Plato 3"
                  className="image-item"
                />
                <h3 className="plato-title">
                  Tarta Tatin de Manzana Caramelizada con Helado de Vainilla
                </h3>
                <p className="plato-description">
                  Una reinterpretación del clásico postre francés, esta tarta
                  Tatin presenta manzanas caramelizadas perfectamente doradas
                  sobre una base crujiente.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section id="opiniones" className="section opiniones-section">
        <div className="section-content">
          <h2 className="title">Opiniones de nuestros clientes</h2>
          <div className="review-container">
            {opiniones.map((opinion, index) => (
              <div key={index} className="review-card">
                <p className="client-comment">"{opinion.texto}"</p>
                <div className="stars">
                  {renderizarEstrellas(opinion.estrellas)}
                </div>
                <h4 className="client-name">{opinion.autor}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
