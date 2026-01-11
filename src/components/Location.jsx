import React from 'react';
import { FaMapMarkerAlt, FaParking, FaShoppingCart, FaRoute } from 'react-icons/fa';

const Location = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Ubicación privilegiada</h2>
        <p className="section-subtitle">
          Disfruta de la tranquilidad de un sector residencial con fácil acceso a todos los servicios y atracciones
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start mb-6">
                <FaMapMarkerAlt className="text-3xl text-primary-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Sector residencial tranquilo</h3>
                  <p className="text-gray-600">
                    Ubicada en una zona segura y tranquila, ideal para descansar después de un día de exploración.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaShoppingCart className="text-xl text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Cercana a supermercados y comercios</h4>
                    <p className="text-gray-600">A menos de 10 minutos en auto encontrarás todo lo necesario.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaParking className="text-xl text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Excelente conectividad</h4>
                    <p className="text-gray-600">Fácil acceso a las rutas principales hacia Pucón y Lican Ray.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaRoute className="text-xl text-wood-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Cerca de atracciones turísticas</h4>
                    <p className="text-gray-600">A pocos minutos del lago, volcán Villarrica y centros de ski.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primary-500 to-primary-700 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">¿Qué hacer en Villarrica?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Visitar el lago Villarrica y sus playas</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Excursiones al volcán Villarrica</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Deportes acuáticos en el lago</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Centros termales cercanos</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Esquí en centros invernales</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Degustación de gastronomía local</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Ubicación aproximada</h3>
            <div className="h-96 rounded-lg overflow-hidden">
              <iframe
                title="Ubicación de la propiedad en Villarrica"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48931.68370985935!2d-72.2482332!3d-39.2867813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96110e743605d0a7%3A0x4a4c2c1b5c8b8b0!2sVillarrica%2C%20Araucan%C3%ADa%2C%20Chile!5e0!3m2!1sen!2s!4v1645567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="text-center text-gray-600 mt-4">
              La dirección exacta se proporciona después de la reserva confirmada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;