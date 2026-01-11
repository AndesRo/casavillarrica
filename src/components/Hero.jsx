import React from 'react';
import { FaHome, FaWhatsapp, FaCalendarAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/volcan.jpg" 
          alt="Casa en Villarrica" 
          className="w-full h-full object-cover"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
      </div>
      
      {/* Contenido */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        {/* Letrero "Se Arrienda" */}
        <div className="mb-8 transform -translate-y-4 animate-float">
          <div className="inline-flex flex-col items-center">
            {/* Hilo del letrero */}
            <div className="w-1 h-16 bg-gradient-to-b from-yellow-300 via-yellow-500 to-transparent mb-2"></div>
            
            {/* Cartel "Se Arrienda" */}
            <div className="relative">
              {/* Sombra del cartel */}
              <div className="absolute inset-0 bg-black/30 blur-lg rounded-2xl transform translate-y-4"></div>
              
              {/* Cartel principal */}
              <div className="relative bg-gradient-to-r from-wood-600 via-wood-500 to-wood-600 text-white px-10 py-6 rounded-xl shadow-2xl border-4 border-wood-800 transform rotate-[-1.5deg] hover:rotate-0 transition-transform duration-500">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-wood-800 rounded-t-lg"></div>
                
                <div className="flex items-center justify-center gap-4">
                  <FaHome className="text-3xl md:text-4xl text-yellow-200 animate-pulse" />
                  <h1 className="text-4xl md:text-5xl font-bold tracking-wider">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-100">
                      SE ARRIENDA
                    </span>
                  </h1>
                  <FaHome className="text-3xl md:text-4xl text-yellow-200 animate-pulse" />
                </div>
                
                <div className="mt-2 flex items-center justify-center gap-2">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
                  <p className="text-lg font-semibold text-yellow-100">¡Reserva ahora!</p>
                  <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
              
              {/* Decoración de esquinas */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-yellow-400 rounded-tl-lg"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-yellow-400 rounded-tr-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-yellow-400 rounded-bl-lg"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-yellow-400 rounded-br-lg"></div>
            </div>
          </div>
        </div>

        {/* Título principal */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-2xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
            Casa en Villarrica
          </span>
        </h1>
        
        {/* Subtítulo */}
        <p className="text-xl md:text-2xl lg:text-3xl mb-6 max-w-3xl mx-auto font-light">
          <span className="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg">
            Cómoda casa familiar, tranquila en el Sur de Chile
          </span>
        </p>
        
        {/* Info destacada */}
        <div className="bg-white/20 backdrop-blur-md p-4 md:p-6 rounded-2xl inline-block mb-8 border border-white/30 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-lg md:text-xl font-semibold">A solo 15 minutos del centro</p>
            </div>
            
            <div className="hidden md:block w-px h-8 bg-white/40"></div>
            
    
            <div className="hidden md:block w-px h-8 bg-white/40"></div>
            
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
              <p className="text-lg md:text-xl font-semibold">Estacionamiento privado</p>
            </div>
          </div>
        </div>
        
        {/* Botones CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a 
            href="https://wa.me/56997416485?text=Hola,%20me%20interesa%20reservar%20la%20casa%20en%20Villarrica"
            target="_blank"
            rel="noopener noreferrer"
            className="group btn-whatsapp flex items-center justify-center gap-3 text-lg px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            <FaWhatsapp className="text-2xl group-hover:animate-bounce" />
            <span className="font-bold">Reservar por WhatsApp</span>
          </a>
          
          <a 
            href="#contacto" 
            className="group btn-primary flex items-center justify-center gap-3 text-lg px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            <FaCalendarAlt className="text-xl group-hover:animate-pulse" />
            <span className="font-bold">Consultar disponibilidad</span>
          </a>
        </div>
      
      </div>
      
      {/* Flecha para desplazarse */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a href="#galeria" className="text-white animate-bounce flex flex-col items-center">
          <span className="text-sm mb-2 opacity-80">Ver más</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;