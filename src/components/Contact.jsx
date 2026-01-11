import React, { useState } from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwib-bHoxytKmX06bi0S0d2458eivq_6AE5yNm1vpmZ4fppc0febrFgJcQFkbDbuCHX/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      }
    );

    const result = await response.json();

    if (result.success) {
      alert("Consulta enviada correctamente ✅");
      setFormData({
        name: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        guests: '2',
        message: ''
      });
    } else {
      alert("Error al enviar la consulta ❌");
    }

  } catch (error) {
    alert("Error de conexión ❌");
  }
};

  const whatsappMessage = `Hola, me interesa reservar la casa en Villarrica. 
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Check-in: ${formData.checkIn}
Check-out: ${formData.checkOut}
Huéspedes: ${formData.guests}
Mensaje: ${formData.message}`;

  const encodedMessage = encodeURIComponent(whatsappMessage);

  return (
    <section id="contacto" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Reserva tu estadía</h2>
        <p className="section-subtitle">
          Contáctanos para consultar disponibilidad y realizar tu reserva
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de contacto */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Consulta de disponibilidad</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Nombre completo *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Teléfono *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="+56 9 XXXX XXXX"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Fecha de entrada *</label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Fecha de salida *</label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Número de huéspedes *</label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="2">2 personas</option>
                  <option value="3">3 personas</option>
                  <option value="4">4 personas</option>
                  <option value="5">5 personas</option>
                  <option value="6">6 personas</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Mensaje adicional</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Información adicional, preguntas especiales, etc."
                ></textarea>
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  className="btn-primary w-full py-4 text-lg"
                >
                  Enviar consulta de disponibilidad
                </button>
              </div>
            </form>
          </div>
          
          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Contacto directo</h3>
              
              <div className="space-y-6">
                <a 
                  href="https://wa.me/56997416485?text=Hola,%20me%20interesa%20reservar%20la%20casa%20en%20Villarrica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <FaWhatsapp className="text-3xl mr-4" />
                  <div>
                    <h4 className="font-bold text-lg">WhatsApp</h4>
                    <p>+56 9 97416485</p>
                    <p className="text-sm opacity-90">Respuesta inmediata</p>
                  </div>
                </a>
                
                <a 
                  href="tel:+569XXXXXXXX"
                  className="flex items-center p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <FaPhone className="text-3xl mr-4" />
                  <div>
                    <h4 className="font-bold text-lg">Teléfono</h4>
                    <p>+56 9 97416485</p>
                    <p className="text-sm opacity-90">Llamada directa</p>
                  </div>
                </a>
                
                <a 
                  href="mailto:contacto@casavillarrica.cl"
                  className="flex items-center p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <FaEnvelope className="text-3xl mr-4" />
                  <div>
                    <h4 className="font-bold text-lg">Correo electrónico</h4>
                    <p>andespart.ar@gmail.com</p>
                    <p className="text-sm opacity-90">Respuesta en 24 horas</p>
                  </div>
                </a>
                
                <div className="flex items-center p-4 bg-white/20 rounded-lg">
                  <FaClock className="text-3xl mr-4" />
                  <div>
                    <h4 className="font-bold text-lg">Horario de atención</h4>
                    <p>Lunes a Viernes: 9:00 - 20:00 hrs</p>
                    <p>Sábados: 10:00 - 18:00 hrs</p>
                    <p>Domingos: 12:00 - 16:00 hrs</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Preguntas frecuentes</h3>
              
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-semibold text-gray-800">¿Cuál es el horario de check-in y check-out?</h4>
                  <p className="text-gray-600">Check-in: 15:00 hrs | Check-out: 12:00 hrs</p>
                </div>
                
                <div className="border-b pb-4">
                  <h4 className="font-semibold text-gray-800">¿Se permiten mascotas?</h4>
                  <p className="text-gray-600">No se permiten mascotas para mantener el espacio limpio para todos.</p>
                </div>
                
                <div className="border-b pb-4">
                  <h4 className="font-semibold text-gray-800">¿Qué métodos de pago aceptan?</h4>
                  <p className="text-gray-600">Solo se aceptan pagos con Transferencia bancaria.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800">¿Requieren depósito de garantía?</h4>
                  <p className="text-gray-600">No, no se requiere depósito de garantía.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;