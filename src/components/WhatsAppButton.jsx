import React from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; 

const WhatsAppButton = () => (
  <a
    href="https://wa.me/973851366?text=Hola..."
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
