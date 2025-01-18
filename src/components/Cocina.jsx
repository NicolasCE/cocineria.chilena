import React from "react";

const Cocina = () => (
    <section id="seccion-cocineros" class="seccion-cocineros">
        <div class="contenedor-cocineros">
          <h2 class="titulo-cocineros has-text-centered">
            Conoce a Nuestro Equipo de Cocineros
          </h2>
          <div class="columnas-cocineros is-multiline">
            <div class="columna-cocinero">
              <div class="tarjeta-cocinero">
                <div class="imagen-cocinero">
                  <img src="./img/logo.chef.png" alt="" />
                </div>
                <div class="contenido-cocinero">
                  <p class="rol-cocinero">Maestro de Cocina</p>
                  <p class="nombre-cocinero">Juan Contreras</p>
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

            <div class="columna-cocinero">
              <div class="tarjeta-cocinero">
                <div class="imagen-cocinero">
                  <img src="./img/ayudante.png" alt="" />
                </div>
                <div class="contenido-cocinero">
                  <p class="rol-cocinero">Ayudante de Cocina</p>
                  <p class="nombre-cocinero">Nicolás Contreras</p>

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

            <div class="columna-cocinero">
              <div class="tarjeta-cocinero">
                <div class="imagen-cocinero">
                  <img src="./img/cocinama.png" alt="" />
                </div>
                <div class="contenido-cocinero">
                  <p class="rol-cocinero">Chef Ejecutivo</p>
                  <p class="nombre-cocinero">Yohanna Elgueta</p>
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
);

export default Cocina;