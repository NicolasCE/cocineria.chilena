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
          <a className="navbar-item has-text-white" href="#ubicacion">
            Ubicación
          </a>
        </div>
      </nav>

      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">
            Bienvenidos a <span> Sabores Chilenos</span>
          </h1>
          <p class="hero-subtitle">
            Donde las recetas tradicionales se encuentran con la innovación
            culinaria.
          </p>
          <div class="cta-buttons">
            <a href="#carta" class="cta-button">
              Explorar Menú
            </a>
            <a href="#ubicacion" class="cta-button secondary">
              Dirección & Ubicacion🌭
            </a>
          </div>
        </div>
      </section>

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
          <h2 className="title">Nuestras Especialidades</h2>
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
              <img
                src="./img/empanada_mechada_queso.jpg"
                alt="Empanada Mechada Queso"
              ></img>
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

      {/* Llamado a WhatsApp */}
      <a
        href="https://wa.me/973851366?text=Hola,%20bienvenido%20a%20nuestro%20emprendimiento%20familiar.%20Estamos%20encantados%20de%20tenerte%20aquí.%20¿En%20qué%20podemos%20ayudarte%20hoy%20con%20tu%20orden?"
        target="_blank"
        rel="noopener noreferrer"
        class="whatsapp-button"
      >
        <i class="fa fa-whatsapp"></i>
        <span class="whatsapp-tooltip">
          Haz tu pedido o consulta a través de WhatsApp
        </span>
      </a>

      <section id="seccion-cocineros" class="seccion-cocineros">
        <div class="contenedor-cocineros">
          <h2 class="titulo-cocineros has-text-centered">
            Conoce a Nuestro Equipo de Cocineros
          </h2>
          <div class="columnas-cocineros is-multiline">
            <div class="columna-cocinero is-12-mobile is-4-tablet is-3-desktop">
              <div class="tarjeta-cocinero">
                <div class="imagen-cocinero"></div>
                <div class="contenido-cocinero">
                  <p class="nombre-cocinero">Juan Pérez</p>
                  <p class="rol-cocinero">Maestro de Cocina</p>
                  <div class="descripcion-cocinero">
                    <p>
                      Con más de 20 años de experiencia, Juan es un experto en
                      la cocina tradicional chilena. Su pasión por la cocina lo
                      ha llevado a crear platos innovadores.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="columna-cocinero is-12-mobile is-4-tablet is-3-desktop">
              <div class="tarjeta-cocinero">
                <div class="imagen-cocinero"></div>
                <div class="contenido-cocinero">
                  <p class="nombre-cocinero">Ana López</p>
                  <p class="rol-cocinero">Ayudante de Cocina</p>
                  <div class="descripcion-cocinero">
                    <p>
                      Ana es una joven promesa en la cocina, especializada en la
                      preparación de postres y pastelería chilena. Siempre está
                      dispuesta a aprender y mejorar.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="columna-cocinero is-12-mobile is-4-tablet is-3-desktop">
              <div class="tarjeta-cocinero">
                <div class="imagen-cocinero"></div>
                <div class="contenido-cocinero">
                  <p class="nombre-cocinero">Carlos Gómez</p>
                  <p class="rol-cocinero">Chef Ejecutivo</p>
                  <div class="descripcion-cocinero">
                    <p>
                      Carlos, un chef apasionado por la cocina gourmet, lleva
                      nuestra oferta culinaria al siguiente nivel con platos
                      creativos y presentaciones impecables.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ubicacion">
        <footer className="footer">
          <div className="content has-text-centered">
            <p className="title is-5">Encuéntranos</p>
            <p className="subtitle is-6">
              📍 Dirección: Avenida Santa Maria #1140, Constitucion, Chile
            </p>
            <div className="links">
              <a href="#quienes-somos">Quiénes Somos</a> |
              <a href="#menu">Especialidades</a> |<a href="#carta">Carta</a> |
              <a href="#historia">Historia</a>
            </div>
            <p className="copyright">
              © 2025 Sabores Chilenos. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </section>

      {/* Scripts*/}

      <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
      <script src="cookie-consent.js"></script>
      <script src="animations.js"></script>
    </div>
  );
};

export default App;
