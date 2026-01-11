import React from 'react';
import { FaHome, FaWhatsapp, FaCalendarAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 md:pt-0">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/volcan.jpg" 
          alt="Casa en Villarrica" 
          className="w-full h-full object-cover"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/40 md:from-black/60 md:via-black/40 md:to-black/30"></div>
      </div>
      
      {/* Contenido */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto w-full py-8">
        {/* Letrero "Se Arrienda" - Versión Mobile */}
        <div className="mb-6 md:mb-8 transform md:-translate-y-4 animate-float">
          <div className="inline-flex flex-col items-center w-full px-2">
            {/* Hilo del letrero - Solo visible en desktop */}
            <div className="hidden md:block w-1 h-16 bg-gradient-to-b from-yellow-300 via-yellow-500 to-transparent mb-2"></div>
            
            {/* Cartel "Se Arrienda" */}
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-none">
              {/* Sombra del cartel */}
              <div className="absolute inset-0 bg-black/20 md:bg-black/30 blur-md md:blur-lg rounded-xl md:rounded-2xl transform translate-y-2 md:translate-y-4"></div>
              
              {/* Cartel principal */}
              <div className="relative bg-gradient-to-r from-wood-600 via-wood-500 to-wood-600 text-white px-4 py-3 sm:px-6 sm:py-4 md:px-10 md:py-6 rounded-lg md:rounded-xl shadow-xl md:shadow-2xl border-2 md:border-4 border-wood-800 transform md:rotate-[-1.5deg] hover:md:rotate-0 transition-transform duration-500">
                {/* Gancho del cartel - Solo desktop */}
                <div className="absolute -top-2 md:-top-4 left-1/2 transform -translate-x-1/2 w-8 md:w-12 h-1 md:h-2 bg-wood-800 rounded-t-lg"></div>
                
                <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
                  <FaHome className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-yellow-200 animate-pulse" />
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide md:tracking-wider">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-100">
                      SE ARRIENDA
                    </span>
                  </h1>
                  <FaHome className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-yellow-200 animate-pulse" />
                </div>
                
                <div className="mt-1 md:mt-2 flex items-center justify-center gap-1 md:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full animate-bounce"></div>
                  <p className="text-xs sm:text-sm md:text-lg font-semibold text-yellow-100">¡Reserva ahora!</p>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
              
              {/* Decoración de esquinas - Solo desktop */}
              <div className="hidden md:block absolute -top-2 -left-2 w-6 h-6 lg:w-8 lg:h-8 border-t-4 border-l-4 border-yellow-400 rounded-tl-lg"></div>
              <div className="hidden md:block absolute -top-2 -right-2 w-6 h-6 lg:w-8 lg:h-8 border-t-4 border-r-4 border-yellow-400 rounded-tr-lg"></div>
              <div className="hidden md:block absolute -bottom-2 -left-2 w-6 h-6 lg:w-8 lg:h-8 border-b-4 border-l-4 border-yellow-400 rounded-bl-lg"></div>
              <div className="hidden md:block absolute -bottom-2 -right-2 w-6 h-6 lg:w-8 lg:h-8 border-b-4 border-r-4 border-yellow-400 rounded-br-lg"></div>
            </div>
          </div>
        </div>

        {/* Título principal */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-3 md:mb-4 drop-shadow-xl md:drop-shadow-2xl px-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
            Casa en Villarrica
          </span>
        </h1>
        
        {/* Subtítulo */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4 md:mb-6 max-w-2xl md:max-w-3xl mx-auto font-light px-2">
          <span className="bg-black/30 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2 rounded-lg inline-block">
            Cómoda casa familiar, en el Sur de Chile
          </span>
        </p>
        
        {/* Info destacada */}
        <div className="bg-white/20 backdrop-blur-md p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl inline-block mb-6 md:mb-8 border border-white/30 shadow-lg md:shadow-2xl max-w-xs sm:max-w-md md:max-w-none mx-2">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 lg:gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold whitespace-nowrap">A 15 min del centro de la Ciudad</p>
            </div>
            
            <div className="hidden md:block w-px h-6 lg:h-8 bg-white/40"></div>
            <div className="md:hidden w-full h-px bg-white/30 my-1"></div>
            
       
            
            <div className="hidden md:block w-px h-6 lg:h-8 bg-white/40"></div>
            <div className="md:hidden w-full h-px bg-white/30 my-1"></div>
            
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold whitespace-nowrap">Estacionamiento Privado</p>
            </div>
          </div>
        </div>
        
        {/* Botones CTA */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 md:mb-8 px-2">
          <a 
            href="https://wa.me/56997416485?text=Hola,%20me%20interesa%20reservar%20la%20casa%20en%20Villarrica"
            target="_blank"
            rel="noopener noreferrer"
            className="group btn-whatsapp flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl hover:scale-105 transition-all duration-300 shadow-lg md:shadow-2xl"
          >
            <FaWhatsapp className="text-lg sm:text-xl md:text-2xl group-hover:animate-bounce" />
            <span className="font-bold">Reservar por WhatsApp</span>
          </a>
          
          <a 
            href="#contacto" 
            className="group btn-primary flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl hover:scale-105 transition-all duration-300 shadow-lg md:shadow-2xl"
          >
            <FaCalendarAlt className="text-base sm:text-lg md:text-xl group-hover:animate-pulse" />
            <span className="font-bold">Consultar disponibilidad</span>
          </a>
        </div>
        
    
      </div>
      
      {/* Flecha para desplazarse */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2">
        <a href="#galeria" className="text-white animate-bounce flex flex-col items-center">
          <span className="text-xs sm:text-sm mb-1 md:mb-2 opacity-80">Ver más</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;