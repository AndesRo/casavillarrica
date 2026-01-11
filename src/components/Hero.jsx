import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/volcan.jpg" 
          alt="Casa en Villarrica" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
      </div>
      
      {/* Contenido */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Arriendo Casa Familiar Villarrica</h1>
        <p className="text-xl md:text-2xl mb-6">Cómoda casa, en arriendo en el sur de Chile</p>
        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg inline-block mb-8">
          <p className="text-lg md:text-xl font-semibold">A solo 15 minutos del centro de la ciudad</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://wa.me/569XXXXXXXX?text=Hola,%20me%20interesa%20reservar%20la%20casa%20en%20Villarrica"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp flex items-center justify-center gap-2"
          >
            <span>Reservar por WhatsApp</span>
          </a>
          <a 
            href="#contacto" 
            className="btn-primary flex items-center justify-center gap-2"
          >
            <span>Consultar disponibilidad</span>
          </a>
        </div>
      </div>
      
      {/* Flecha para desplazarse */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a href="#galeria" className="text-white animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;