import React from 'react';
import { FaBed, FaBath, FaCar, FaTree, FaHome, FaUtensils } from 'react-icons/fa';
import { GiFireplace } from 'react-icons/gi';

const Description = () => {
  const features = [
    { icon: <FaHome />, title: 'Casa de 2 niveles', description: 'Distribución ideal para familias' },
    { icon: <FaBed />, title: '2 Dormitorios', description: '1 matrimonial + 1 compartido' },
    { icon: <FaBath />, title: 'Baño completo', description: 'Con calefont' },
    { icon: <GiFireplace />, title: 'Living comedor', description: 'Amplio y acogedor' },
    { icon: <FaUtensils />, title: 'Cocina equipada', description: 'Electrodomésticos completos' },
    { icon: <FaTree />, title: 'Patio y jardín', description: 'Espacio exterior privado' },
    { icon: <FaCar />, title: 'Estacionamiento', description: 'Privado para 1 vehículos' },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Descripción de la propiedad</h2>
        <p className="section-subtitle">
          Disfruta de una estadía cómoda y tranquila en nuestra casa familiar ubicada en un sector residencial de Villarrica
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-3xl text-primary-600 mb-3">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-wood-50 p-8 rounded-2xl border-l-4 border-wood-500">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Características principales</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Casa totalmente equipada para estadías cortas y largas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Electrodomesticos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Televisión</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Cocina completa con todos los utensilios</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Ropa de cama</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-primary-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Ideal para</h3>
              <div className="flex flex-wrap gap-4">
                <span className="bg-white px-4 py-2 rounded-full shadow-sm">Familias</span>
                <span className="bg-white px-4 py-2 rounded-full shadow-sm">Parejas</span>
                <span className="bg-white px-4 py-2 rounded-full shadow-sm">Grupos pequeños</span>
                <span className="bg-white px-4 py-2 rounded-full shadow-sm">Viajeros de negocios</span>
                <span className="bg-white px-4 py-2 rounded-full shadow-sm">Amantes de la naturaleza</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;