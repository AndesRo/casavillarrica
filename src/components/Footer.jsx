import React from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Estimado Huesped</h3>
            <p className="text-gray-300 mb-6">
              Ofrecemos una alojamiento en la hermosa ciudad de Villarrica, 
              ideal para familias que buscan descanso y conexión con la naturaleza.
            </p>
     
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Contacto rápido</h4>
            <div className="space-y-4">
              <a 
                href="https://wa.me/56997416485"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <FaWhatsapp className="mr-3" />
                <span>+56 9 97416485</span>
              </a>
              <a 
                href="tel:+56997416485"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <FaPhone className="mr-3" />
                <span>+56 9 97416485</span>
              </a>
              <a 
                href="mailto:andespart.ar@gmail.com"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <FaEnvelope className="mr-3" />
                <span>andespart.ar@gmail.com</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Información legal</h4>
            <div className="space-y-2 text-gray-300">
              
              <p>Propiedad registrada y autorizada</p>
              
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} AndesRo - Arriendo turístico. Todos los derechos reservados.</p>

          <div className="mt-4 flex justify-center space-x-6">
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;