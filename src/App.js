import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cocina from "./components/Cocina";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Ubicacion from "./components/Ubicacion";
import WhatsAppButton from "./components/WhatsAppButton";
import Login from "./components/Login";
import Perfil from "./components/Perfil";
import { auth, provider } from "./firebase/firebaseConfig";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

const App = () => {
  const [user, setUser] = useState(null);

  // Efecto para verificar el estado de autenticación del usuario
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Si el usuario está logueado, actualiza el estado
      } else {
        setUser(null); // Si no hay usuario, limpia el estado
      }
    });

    return () => unsubscribe(); // Limpia el listener al desmontar el componente
  }, []);

  // Función para iniciar sesión con Google
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user); // Actualiza el estado con los datos del usuario
    } catch (error) {
      console.error("Error al iniciar sesión", error);
    }
  };

  // Función para cerrar sesión
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Limpia el estado del usuario
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
  };

  return (
    <Router>
      <Navbar user={user} handleLogout={handleLogout} /> {/* Pasa user y handleLogout al Navbar */}
      <Routes>
        <Route
          path="/"
          element={<Hero user={user} handleLogin={handleLogin} handleLogout={handleLogout} />}
        />
        <Route path="/quienes-somos" element={<Section />} />
        <Route path="/carta" element={<Menu />} />
        <Route path="/ubicacion" element={<Ubicacion />} />
        <Route path="/perfil" element={<Perfil/>} />
        <Route path="/seccion-cocineros" element={<Cocina />} />
        <Route path="/login" element={<Login />} />
        <Route path="/historia" element={<Section />} />
      </Routes>
      <WhatsAppButton />
    </Router>
  );
};

export default App;