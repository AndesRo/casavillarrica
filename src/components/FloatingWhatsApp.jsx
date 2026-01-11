import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
  const whatsappUrl = "https://wa.me/56997416485?text=Hola,%20me%20interesa%20reservar%20la%20casa%20en%20Villarrica";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-green-600 text-white rounded-full w-16 h-16 shadow-lg hover:bg-green-700 hover:shadow-xl transition-all duration-300 animate-bounce"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;