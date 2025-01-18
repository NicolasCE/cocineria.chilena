import React from "react";

const Menu = () => (
    <section id="carta" className="section-menu">
    <div className="container">
      <h2 className="title">Nuestra Carta 📩 + Precios 💵 </h2>
      <div className="menu-grid">
        <div className="menu-item">
          <img
            src="./img/churrasco-chacarero.png"
            alt="Sandwich de Churrasco"
          />
          <div className="menu-details">
            <h3>Sandwich de Churrasco</h3>
            <p>
              Disfruta de nuestro delicioso sandwich de churrasco, servido
              con ingredientes frescos.
            </p>
            <span className="price">$4500 CLP</span>
          </div>
        </div>

        <div className="menu-item">
          <img src="./img/completo.jpg" alt="Completo" />
          <div className="menu-details">
            <h3>Completo</h3>
            <p>
              Un clásico de la comida rápida chilena, con todos los
              ingredientes tradicionales.
            </p>
            <span className="price">$2500 CLP</span>
          </div>
        </div>

        <div className="menu-item">
          <img src="./img/br.jpg" alt="Barros Loco" />
          <div className="menu-details">
            <h3>Barros Loco</h3>
            <p>
              Un sandwich grande con mayo, palta y carne jugosa, ideal para
              cualquier hora.
            </p>
            <span className="price">$3800 CLP</span>
          </div>
        </div>

        <div className="menu-item">
          <img src="./img/completo_ass.webp" alt="Completo Ass" />
          <div className="menu-details">
            <h3>Completo Ass</h3>
            <p>
              Un clásico de la comida rápida chilena, con todos los
              ingredientes tradicionales, en vez de vienesa se reemplaza por
              carne.
            </p>
            <span className="price">$4000 CLP</span>
          </div>
        </div>

        <div className="menu-item">
          <img
            src="./img/empanada_mechada_queso.jpg"
            alt="Empanada Mechada Queso"
          />
          <div className="menu-details">
            <h3>Empanada Mechada Queso</h3>
            <p>
              Empanada rellena con carne mechada y un toque de queso, ¡una
              combinación irresistible!
            </p>
            <span className="price">$4300 CLP</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Menu;