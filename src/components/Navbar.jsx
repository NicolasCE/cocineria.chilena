import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Navbar = () => (
  <nav className="navbar is-dark is-fixed-top">
    <div className="navbar-brand">
      <Link className="navbar-item has-text-white" to="/">
        <HomeIcon /> Sabores Chilenos
      </Link>
    </div>
    <div className="navbar-end">
      <Link className="navbar-item has-text-white" to="/quienes-somos">
        <GroupIcon /> Quiénes Somos
      </Link>
      <Link className="navbar-item has-text-white" to="/seccion-cocineros">
        <i className="fas fa-chef-hat"></i> Nuestro Equipo
      </Link>
      <Link className="navbar-item has-text-white" to="/carta">
        <MenuBookIcon /> Carta
      </Link>
      <Link className="navbar-item has-text-white" to="/ubicacion">
        <LocationOnIcon /> Ubicación
      </Link>
    </div>
  </nav>
);

export default Navbar;
