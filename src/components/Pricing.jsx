import React from 'react';
import { FaCalendarAlt, FaMoneyBillWave } from 'react-icons/fa';

const Pricing = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-primary-50 to-wood-50 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center p-3 bg-primary-100 rounded-full mb-6">
                <FaMoneyBillWave className="text-4xl text-primary-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Precio por noche desde <span className="text-primary-700">$65.000 CLP</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Valores especiales para estadías largas. Consulta por promociones de temporada baja.
              </p>
              
              <div className="flex items-center justify-center lg:justify-start text-gray-700">
                <FaCalendarAlt className="mr-2 text-primary-600" />
                <span>Mínimo 2 noches de estadía</span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">¿Qué incluye el precio?</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>Uso completo de la casa y todas sus instalaciones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>Televisión</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>Estacionamiento privado gratuito</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>Ropa de cama</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>Servicios básicos (agua, luz, gas)</span>
                </li>
              </ul>
              
              <div className="text-center p-4 bg-primary-50 rounded-lg mb-6">
                <p className="font-semibold text-gray-800">¡Oferta especial temporada baja!</p>
                <p className="text-primary-700 font-bold">15% de descuento en estadías de 7+ noches</p>
              </div>
              
              <a 
                href="#contacto" 
                className="btn-primary w-full text-center block py-4 text-lg"
              >
                Consultar disponibilidad y precio exacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;