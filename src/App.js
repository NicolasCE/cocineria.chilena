import React, { useEffect } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar is-dark is-fixed-top">
        <div className="navbar-brand">
          <a className="navbar-item has-text-white" href="/">
            Sabores Chilenos
          </a>
        </div>
        <div className="navbar-end">
          <a className="navbar-item has-text-white" href="#quienes-somos">
            Quiénes Somos
          </a>
          <a className="navbar-item has-text-white" href="#historia">
            Historia
          </a>
          <a className="navbar-item has-text-white" href="#recetas">
            Recetas
          </a>
          <a className="navbar-item has-text-white" href="#carta">
            Carta
          </a>
          <a className="navbar-item has-text-white" href="#presentacion">
            Presentación
          </a>
        </div>
      </nav>

      {/* Secciones */}
      <section id="quienes-somos" className="section section-image">
        <div className="section-content">
          <h2 className="title">¿Quiénes Somos?</h2>
          <p class>
            Somos un equipo de chefs apasionados por la cocina chilena y las
            tradiciones culinarias de nuestra tierra.
          </p>
        </div>
      </section>

      <section id="historia" className="section">
        <div className="container">
          <h2 className="title">Historia</h2>
          <p className="typed-text">
            Familia formada por 3 integrantes, con un placer gustoso a la comida
            chilena,a futuro se planea cocinar y seguir expandiendose a la
            cocineria chilena.
          </p>
        </div>
      </section>

      <section id="recetas" className="section-recipes">
        <div className="container">
          <h2 className="title">Nuestras Recetas</h2>
          <div className="recipe-grid">
            <div className="recipe-item">
              <img src="./img/br.jpg" alt="Barros Lucos" />
              <h3>Barros Lucos</h3>
              <p>
                El clásico sándwich chileno, con carne de res, palta y mayonesa
                entre dos panes suaves.
              </p>
            </div>

            <div className="recipe-item">
              <img
                src="./img/churrasco-chacarero.png"
                alt="Churrasco Chacarero"
              />
              <h3>Churrasco Chacarero</h3>
              <p>
                Carne de res jugosa con tomate, ají, porotos verdes y mayonesa,
                en un pan crujiente.
              </p>
            </div>

            <div className="recipe-item">
              <img src="./img/completo_ass.webp" alt="Completo Ass" />
              <h3>Completo Ass</h3>
              <p>
                Sándwich de completo con ingredientes frescos y salsa especial
                para los amantes del buen sabor.
              </p>
            </div>

            <div className="recipe-item">
              <img src="./img/completo.jpg" alt="Completo Italiano" />
              <h3>Completo Italiano</h3>
              <p>
                Un completo con palta, mayonesa, y tomate, inspirado en los
                sabores de Italia.
              </p>
            </div>

            <div className="recipe-item">
              <img
                src="./img/empanada_mechada_queso.jpg"
                alt="Empanada Mechada Queso"
              />
              <h3>Empanada Mechada Queso</h3>
              <p>
                Empanada rellena con carne mechada y un toque de queso, ¡una
                combinación irresistible!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="carta" class="section-menu">
        <div class="container">
          <h2 class="title">Nuestra Carta 📩 + Precios 💵 </h2>
          <div class="menu-grid">
            <div class="menu-item">
              <img
                src="./img/churrasco-chacarero.png"
                alt="Sandwich de Churrasco"
              />
              <div class="menu-details">
                <h3>Sandwich de Churrasco</h3>
                <p>
                  Disfruta de nuestro delicioso sandwich de churrasco, servido
                  con ingredientes frescos.
                </p>
                <span class="price">$4500 CLP</span>
              </div>
            </div>

            <div class="menu-item">
              <img src="./img/completo.jpg" alt="Completo" />
              <div class="menu-details">
                <h3>Completo</h3>
                <p>
                  Un clásico de la comida rápida chilena, con todos los
                  ingredientes tradicionales.
                </p>
                <span class="price">$2500 CLP</span>
              </div>
            </div>

            <div class="menu-item">
              <img src="./img/br.jpg" alt="Barros Loco" />
              <div class="menu-details">
                <h3>Barros Loco</h3>
                <p>
                  Un sandwich grande con mayo, palta y carne jugosa, ideal para
                  cualquier hora.
                </p>
                <span class="price">$3800 CLP</span>
              </div>
            </div>

            <div class="menu-item">
              <img src="./img/completo_ass.webp" alt="Completo Ass"></img>
              <div class="menu-details">
                <h3>Completo Ass</h3>
                <p>
                  Un clásico de la comida rápida chilena, con todos los
                  ingredientes tradicionales, en vez de vianesa se reemplaza por
                  carne
                </p>
                <span class="price">$4000 CLP</span>
              </div>
            </div>
            
            <div class="menu-item">
              <img src="./img/empanada_mechada_queso.jpg" alt="Empanada Mechada Queso"></img>
              <div class="menu-details">
                <h3>Empanada Mechada Queso</h3>
                <p>
                Empanada rellena con carne mechada y un toque de queso, ¡una
                combinación irresistible!
                </p>
                <span class="price">$4300 CLP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="presentacion" className="section">
        <div className="container">
          <h2 className="title">Presentación</h2>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi.
          </p>
        </div>
      </section>

      {/* Llamado a WhatsApp */}
      <a
        href="https://wa.me/973851366"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <i className="fa fa-whatsapp"></i>
        <span className="whatsapp-tooltip">
          Pedidos disponibles vía WhatsApp 📩
        </span>{" "}
        {/* Mensaje de consulta */}
      </a>

      <footer className="footer">
        <div className="content has-text-centered">
          <p className="title is-5">Encuéntranos</p>
          <p className="subtitle is-6">
            📍 Dirección: Avenida Santa Maria #1140, Constitucion, Chile
          </p>
          <div className="links">
            <a href="#quienes-somos">Quiénes Somos</a> |
            <a href="#recetas">Recetas</a> |<a href="#carta">Carta</a> |
            <a href="#historia">Historia</a>
          </div>
          <p className="copyright">
            © 2025 Sabores Chilenos. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
