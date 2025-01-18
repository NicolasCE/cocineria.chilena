import React from "react";

const Section = () => (
  <>
    <section id="quienes-somos" className="section section-image">
      <div className="section-content">
        <h2 className="title animated fadeIn">¿Quiénes Somos?</h2>
        <p className="description fadeIn">
          Somos un equipo de chefs apasionados por la cocina chilena...
        </p>
        <div className="image-gallery">
          <img src="../img/plato1.png" alt="Plato 1" />
          <img src="../img/plato2.png" alt="Plato 2" />
          <img src="../img/plato3.png" alt="Plato 3" />
        </div>
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
  </>
);

export default Section;
