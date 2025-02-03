import React from "react";
import { Link } from "react-router-dom";
import GroupIcon from "@mui/icons-material/Group";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Nuevo ícono para el usuario

const Navbar = ({ user }) => (
  <nav className="navbar is-dark is-fixed-top"> {/* Fondo oscuro y fijo en la parte superior */}
    <div className="navbar-brand">
      <Link className="navbar-item brand-name" to="/">
        <LunchDiningIcon fontSize="large" /> <span>Sabores Chilenos</span>
      </Link>
    </div>
    <div className="navbar-menu">
      <div className="navbar-end">
        <Link className="navbar-item" to="/quienes-somos">
          <EmojiPeopleRoundedIcon fontSize="large" /> <span>Quiénes Somos</span>
        </Link>
        <Link className="navbar-item" to="/seccion-cocineros">
          <GroupIcon fontSize="large" /> <span>Nuestro Equipo</span>
        </Link>
        <Link className="navbar-item" to="/carta">
          <MenuBookIcon fontSize="large" /> <span>Carta</span>
        </Link>
        <Link className="navbar-item" to="/ubicacion">
          <LocationOnIcon fontSize="large" /> <span>Ubicación</span>
        </Link>
        {user && ( 
          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-link">
              <AccountCircleIcon fontSize="large" /> 
              <span className="ml-2">{user.displayName}</span> 
            </div>
            <div className="navbar-dropdown is-right">
              <Link to="/perfil" className="navbar-item">
                Perfil
              </Link>
              <Link to="/configuracion" className="navbar-item">
                Configuración
              </Link>
              <hr className="navbar-divider" />
              <Link to="/" className="navbar-item">
                Cierra tu sesion aqui!
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  </nav>
);

export default Navbar;
