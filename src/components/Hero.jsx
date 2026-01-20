import React from 'react';
import { FaWhatsapp, FaCalendarAlt, FaMapMarkerAlt, FaWifi, FaCar } from 'react-icons/fa';
import { GiHouse } from 'react-icons/gi';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 md:pt-0 overflow-hidden">
      {/* Imagen de fondo con overlay mejorado */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/volcan.jpg" 
          alt="Vista del volcán Villarrica desde la propiedad" 
          className="w-full h-full object-cover object-center"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40 md:from-black/70 md:via-black/50 md:to-black/30"></div>
        {/* Efecto de granulado para textura */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc0IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')] opacity-20"></div>
      </div>
      
      {/* Efecto de partículas decorativas */}
      <div className="absolute inset-0 z-1 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Contenido principal */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto w-full py-6 md:py-12">
        
        {/* Badge de ubicación premium */}
        <div className="mb-6 md:mb-8 inline-flex items-center gap-2 bg-gradient-to-r from-primary-600/90 to-primary-800/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/20">
          <FaMapMarkerAlt className="text-yellow-300 animate-pulse" />
          <span className="text-sm md:text-base font-medium">Villarrica, Región de la Araucanía</span>
        </div>

        {/* Letrero principal mejorado */}
        <div className="mb-6 md:mb-10 relative">
          <div className="relative inline-block">
            {/* Efecto de brillo alrededor */}
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-600/30 to-orange-600/30 blur-2xl rounded-full animate-pulse"></div>
            
            {/* Contenedor del letrero */}
            <div className="relative bg-gradient-to-br from-wood-700 via-wood-600 to-wood-800 text-white px-6 py-4 md:px-10 md:py-6 rounded-2xl shadow-2xl border-2 border-wood-900 transform hover:scale-105 transition-transform duration-500">
              {/* Elementos decorativos laterales */}
              <div className="absolute -left-2 md:-left-4 top-1/2 transform -translate-y-1/2">
                <GiHouse className="text-yellow-300 text-xl md:text-3xl animate-bounce" />
              </div>
              <div className="absolute -right-2 md:-right-4 top-1/2 transform -translate-y-1/2">
                <GiHouse className="text-yellow-300 text-xl md:text-3xl animate-bounce" style={{animationDelay: '0.5s'}} />
              </div>
              
              {/* Texto principal */}
              <div className="flex flex-col items-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-3 tracking-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-100 to-white">
                    SE ARRIENDA
                  </span>
                </h1>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full animate-ping"></div>
                  <p className="text-sm md:text-lg font-semibold text-yellow-100">Casa en Villarrica</p>
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Título con efecto de destello */}
        <div className="mb-4 md:mb-6 relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            <span className="relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-50 drop-shadow-lg">
             
              </span>
              {/* Efecto de destello animado */}
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></span>
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-blue-100 max-w-2xl mx-auto">
   
          </p>
        </div>
     
        {/* Descripción */}
        <div className="mb-8 md:mb-10 max-w-2xl mx-auto">
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/10 shadow-xl">
            <p className="text-base md:text-lg leading-relaxed">
              <span className="text-yellow-200 font-semibold">Cómoda casa familiar</span> ubicada en el sur de Chile. 
              Perfecta para desconectar y disfrutar de la naturaleza.
            </p>
          </div>
        </div>

        {/* Botones CTA mejorados */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 px-2 max-w-2xl mx-auto">
          {/* Botón WhatsApp con efecto de onda */}
          <a 
            href="https://wa.me/56997416485?text=Hola,%20me%20interesa%20reservar%20la%20casa%20en%20Villarrica"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
          >
            {/* Efecto de onda */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-400/30 to-green-500/0 animate-shine"></div>
            
            <div className="relative flex items-center justify-center gap-3">
              <FaWhatsapp className="text-2xl group-hover:animate-bounce" />
              <div className="text-left">
                <div className="font-bold text-lg">Reservar por WhatsApp</div>
                <div className="text-sm opacity-90">Respuesta inmediata</div>
              </div>
            </div>
            
            {/* Indicador de disponibilidad */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
          </a>
          
          {/* Botón secundario */}
          <a 
            href="#contacto" 
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
          >
            <div className="relative flex items-center justify-center gap-3">
              <FaCalendarAlt className="text-xl group-hover:animate-pulse" />
              <div className="text-left">
                <div className="font-bold text-lg">Consultar disponibilidad</div>
                <div className="text-sm opacity-90">Formulario rápido</div>
              </div>
            </div>
          </a>
        </div>
      </div>
      
      {/* Flecha para scroll con mejor diseño */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#galeria" className="group flex flex-col items-center">
          <span className="text-sm text-white/70 mb-2 group-hover:text-white transition-colors">Explorar propiedad</span>
          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 animate-bounce">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;