import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const images = [
    { id: 1, src: '/images/casa_frontal.jpg', alt: 'Fachada de la casa', title: 'Fachada' },
    { id: 2, src: '/images/comedor.jpg', alt: 'comedor', title: 'Comedor' },
    { id: 3, src: '/images/cocina_completa.jpg', alt: 'Cocina equipada', title: 'Cocina Equipada' },
    { id: 4, src: '/images/habitacion_principal.jpg', alt: 'Dormitorio matrimonial', title: 'Dormitorio Matrimonial' },
    { id: 5, src: '/images/habitacion_secundaria.jpg', alt: 'Dormitorio compartido', title: 'Dormitorio Compartido' },
    { id: 6, src: '/images/bano_principal.jpg', alt: 'Baño completo', title: 'Baño Completo' },
    { id: 7, src: '/images/sala_principal.jpg', alt: 'living', title: 'living' },
    { id: 8, src: '/images/costanera.jpg', alt: 'costanera de Villarrica', title: 'portada' },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    }
    
    setSelectedImage(images[newIndex]);
  };

  return (
    <section id="galeria" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Conoce nuestra casa</h2>
        <p className="section-subtitle">Explora los espacios acogedores de nuestra propiedad en Villarrica</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
              onClick={() => openModal(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-semibold">{image.title}</h3>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaExpand className="text-gray-700" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para vista ampliada */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-[90vh]">
            <button 
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-primary-300 transition-colors"
            >
              ✕ Cerrar
            </button>
            
            <div className="flex items-center">
              <button 
                onClick={() => navigateImage('prev')}
                className="text-white text-3xl p-2 hover:text-primary-300 transition-colors"
              >
                <FaChevronLeft />
              </button>
              
              <div className="relative">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                  className="max-h-[70vh] max-w-full object-contain rounded-lg"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg">
                  {selectedImage.title}
                </div>
              </div>
              
              <button 
                onClick={() => navigateImage('next')}
                className="text-white text-3xl p-2 hover:text-primary-300 transition-colors"
              >
                <FaChevronRight />
              </button>
            </div>
            
            <div className="flex justify-center mt-4 space-x-2">
              {images.map((img) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(img)}
                  className={`w-3 h-3 rounded-full ${selectedImage.id === img.id ? 'bg-primary-500' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;