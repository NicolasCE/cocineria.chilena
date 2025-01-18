import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Cocina from "./components/Cocina";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Ubicacion from "./components/Ubicacion";
import WhatsAppButton from "./components/WhatsAppButton";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Ruta principal con el componente Hero */}
        <Route path="/" element={<Hero />} />

        {/* Rutas adicionales para otras secciones */}
        <Route path="/quienes-somos" element={<Section />} />
        <Route path="/carta" element={<Menu />} />
        <Route path="/ubicacion" element={<Ubicacion />} />
        <Route path="/seccion-cocineros" element={<Cocina />} />
        <Route path="/historia" element={<Section />} />

      </Routes>

      {/* Botón flotante de WhatsApp visible en todas las rutas */}
      <WhatsAppButton />
    </Router>
  );
};

export default App;
