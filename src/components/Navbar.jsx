import React from "react";
import { Link } from "react-router-dom";
import GroupIcon from "@mui/icons-material/Group";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';
import LunchDiningIcon from '@mui/icons-material/LunchDining';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand">
      <Link className="navbar-item brand-name" to="/">
        <LunchDiningIcon fontSize="large" /> <span>Sabores Chilenos</span>
      </Link>
    </div>
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
    </div>
  </nav>
);

export default Navbar;

