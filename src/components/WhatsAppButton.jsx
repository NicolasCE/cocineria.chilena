import React from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; 

const WhatsAppButton = () => (
  <a
    href="https://wa.me/973851366?text=Somos Cocineria Chile, Por favor indicar su nombre y pedido, lo atenderemos a la brevedad 🧁🥰"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-button"
  >
    <WhatsAppIcon /> 
    <span className="whatsapp-tooltip">
      Haz tu pedido o consulta a través de WhatsApp
    </span>
  </a>
);

export default WhatsAppButton;
