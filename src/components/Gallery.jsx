import React, { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight, FaExpand, FaTimes, FaCompress } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const images = [
    { id: 1, src: '/images/casa_frontal.jpg', alt: 'Fachada de la casa', title: 'Fachada Principal' },
    { id: 2, src: '/images/comedor.jpg', alt: 'Comedor amplio y luminoso', title: 'Comedor' },
    { id: 3, src: '/images/cocina_completa.jpg', alt: 'Cocina equipada moderna', title: 'Cocina Equipada' },
    { id: 4, src: '/images/habitacion_principal.jpg', alt: 'Dormitorio matrimonial con vista', title: 'Dormitorio Matrimonial' },
    { id: 5, src: '/images/habitacion_secundaria.jpg', alt: 'Dormitorio compartido', title: 'Dormitorio Secundario' },
    { id: 6, src: '/images/bano_principal.jpg', alt: 'Baño completo moderno', title: 'Baño Principal' },
    { id: 7, src: '/images/sala_principal.jpg', alt: 'Sala de estar acogedora', title: 'Sala de Estar' },
    { id: 8, src: '/images/costanera.jpg', alt: 'Vista de la costanera de Villarrica', title: 'Vista Costanera' },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevenir scroll
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsFullscreen(false);
    document.body.style.overflow = 'auto'; // Restaurar scroll
  };

  const navigateImage = useCallback((direction) => {
    if (!selectedImage) return;
    
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    }
    
    setSelectedImage(images[newIndex]);
  }, [selectedImage, images]);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Manejar navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      switch(e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          navigateImage('prev');
          break;
        case 'ArrowRight':
          navigateImage('next');
          break;
        case 'f':
        case 'F':
          toggleFullscreen();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, navigateImage]);

  // Prevenir scroll en el modal
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  return (
    <section id="galeria" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Conoce nuestra casa</h2>
        <p className="section-subtitle mb-12">Explora los espacios acogedores de nuestra propiedad en Villarrica</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              onClick={() => openModal(image)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white w-full">
                    <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm opacity-90">Haz clic para ampliar</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/95 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                  <FaExpand className="text-gray-800 text-sm md:text-base" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para vista ampliada */}
      {selectedImage && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center ${
            isFullscreen ? 'bg-black' : 'bg-black/95'
          } p-2 md:p-4 transition-all duration-300`}
          onClick={(e) => {
            // Cerrar al hacer clic fuera de la imagen
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >
          <div className={`relative ${isFullscreen ? 'w-full h-full' : 'max-w-7xl max-h-[95vh]'}`}>
            {/* Botón cerrar */}
            <button 
              onClick={closeModal}
              className="absolute top-2 md:top-4 right-2 md:right-4 text-white text-3xl md:text-4xl z-50 hover:text-primary-300 transition-colors bg-black/50 rounded-full p-2 backdrop-blur-sm"
              aria-label="Cerrar"
            >
              <IoClose />
            </button>

            {/* Botón pantalla completa */}
            <button 
              onClick={toggleFullscreen}
              className="absolute top-2 md:top-4 right-14 md:right-20 text-white text-2xl md:text-3xl z-50 hover:text-primary-300 transition-colors bg-black/50 rounded-full p-2 backdrop-blur-sm"
              aria-label={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
            >
              {isFullscreen ? <FaCompress /> : <FaExpand />}
            </button>

            {/* Contador de imágenes */}
            <div className="absolute top-2 md:top-4 left-2 md:left-4 text-white text-sm md:text-base z-50 bg-black/50 rounded-full px-3 py-2 backdrop-blur-sm">
              {images.findIndex(img => img.id === selectedImage.id) + 1} / {images.length}
            </div>
            
            {/* Navegación */}
            <div className="absolute inset-0 flex items-center justify-between p-2 md:p-4">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                className="text-white text-2xl md:text-4xl hover:text-primary-300 transition-colors bg-black/50 rounded-full p-3 md:p-4 backdrop-blur-sm transform hover:scale-110"
                aria-label="Imagen anterior"
              >
                <FaChevronLeft />
              </button>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                className="text-white text-2xl md:text-4xl hover:text-primary-300 transition-colors bg-black/50 rounded-full p-3 md:p-4 backdrop-blur-sm transform hover:scale-110"
                aria-label="Siguiente imagen"
              >
                <FaChevronRight />
              </button>
            </div>
            
            {/* Imagen principal */}
            <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className={`${
                  isFullscreen 
                    ? 'max-w-full max-h-full object-contain' 
                    : 'max-w-full max-h-[80vh] md:max-h-[85vh] object-contain'
                } rounded-lg shadow-2xl`}
              />
            </div>

            {/* Información de la imagen */}
            <div className={`absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 ${
              isFullscreen ? 'hidden' : 'block'
            }`}>
              <div className="bg-black/70 backdrop-blur-sm text-white px-4 md:px-6 py-2 md:py-3 rounded-xl text-center max-w-md">
                <h3 className="font-bold text-base md:text-lg mb-1">{selectedImage.title}</h3>
                <p className="text-sm opacity-90 hidden md:block">{selectedImage.alt}</p>
              </div>
            </div>

            {/* Indicadores de imágenes (dots) */}
            <div className={`absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 ${
              isFullscreen ? 'hidden' : 'block'
            }`}>
              {images.map((img) => (
                <button
                  key={img.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(img);
                  }}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    selectedImage.id === img.id 
                      ? 'bg-primary-500 scale-125' 
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Ver imagen ${img.title}`}
                />
              ))}
            </div>

            {/* Instrucciones de navegación */}
            <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 text-white/70 text-xs md:text-sm bg-black/30 rounded-lg px-3 py-2 backdrop-blur-sm hidden md:block">
              <p>← → Navegar • Esc Salir • F Pantalla completa</p>
            </div>
          </div>
        </div>
      )}

      {/* Galería alternativa para móviles - Carrusel táctil */}
      <div className="md:hidden mt-8 overflow-x-auto pb-4">
        <div className="flex space-x-4 px-4">
          {images.map((image) => (
            <div 
              key={`mobile-${image.id}`}
              className="flex-none w-64 rounded-xl overflow-hidden shadow-lg"
              onClick={() => openModal(image)}
            >
              <div className="relative aspect-square">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;