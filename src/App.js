import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
        <Route path="/" element={<Hero />} />
        <Route path="/quienes-somos" element={<Section />} />
        <Route path="/carta" element={<Menu />} />
        <Route path="/ubicacion" element={<Ubicacion />} />
        <Route path="/seccion-cocineros" element={<Cocina />} />
        <Route path="/historia" element={<Section />} />
      </Routes>
      <WhatsAppButton />
    </Router>
  );
};

export default App;
