import React from "react";


const WhatsAppButton = () => (
    <a
      href="https://wa.me/973851366?text=Hola..."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <i className="fa fa-whatsapp"></i>
      <span className="whatsapp-tooltip">
        Haz tu pedido o consulta a través de WhatsApp
      </span>
    </a>
  );
  
export default WhatsAppButton;