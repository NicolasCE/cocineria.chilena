import React, { useState, useRef } from "react";

const Section = () => {
  // Estado para mostrar u ocultar la sección de los platos
  const [showPlatos, setShowPlatos] = useState(false);

  // Crear referencia para la sección de platos
  const platosRef = useRef(null);

  const handleClick = () => {
    setShowPlatos(true);
    // Desplazamiento suave hacia la sección de los platos
    if (platosRef.current) {
      platosRef.current.scrollIntoView({ behavior: "smooth" });
    }
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

      {/* Nueva sección sobre los platos */}
      {showPlatos && (
        <section ref={platosRef} id="platos" className="section platos-section">
          <div className="section-content">
            <h2 className="title">Nuestros Platos</h2>
            <div className="platos-gallery">
              <div className="plato-item">
                <img src="../img/plato1.png" alt="Plato 1" className="image-item" />
                <h3 className="plato-title">Salmón Glaseado con Miel y Jengibre sobre Cama de Quinoa</h3>
                <p className="plato-description">
                Un filete de salmón fresco, glaseado con una mezcla dulce y picante de miel y jengibre, acompañado de una cama de quinoa esponjosa y vegetales al vapor. Este plato no solo es visualmente atractivo, sino que también ofrece un equilibrio perfecto entre sabores dulces y salados, ideal para los amantes de la cocina saludable.
                </p>
              </div>
              <div className="plato-item">
                <img src="../img/plato2.png" alt="Plato 2" className="image-item" />
                <h3 className="plato-title">Raviolis de Trufa Negra con Mantequilla de Salvia</h3>
                <p className="plato-description">
                Delicados raviolis rellenos de una mezcla exquisita de ricotta y trufa negra, servidos en una sedosa salsa de mantequilla de salvia. Este plato combina la riqueza terrosa de la trufa con la suavidad de la mantequilla, creando una experiencia gastronómica que deleitará los sentidos.
                </p>
              </div>
              <div className="plato-item">
                <img src="../img/plato3.png" alt="Plato 3" className="image-item" />
                <h3 className="plato-title">Tarta Tatin de Manzana Caramelizada con Helado de Vainilla</h3>
                <p className="plato-description">
                Una reinterpretación del clásico postre francés, esta tarta Tatin presenta manzanas caramelizadas perfectamente doradas sobre una base crujiente. Servida caliente y acompañada de una bola de helado de vainilla cremoso, cada bocado es un viaje al corazón de la repostería francesa, donde lo dulce se encuentra con lo sofisticado.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Section;

