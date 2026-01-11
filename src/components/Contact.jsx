import React, { useState } from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope, FaClock, FaSpinner } from 'react-icons/fa';

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

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
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
    setFormStatus({ loading: true, success: false, error: false, message: '' });

    try {
      // URL de tu Google Apps Script (deberás crear este script - ver instrucciones abajo)
      const scriptURL = 'https://script.google.com/macros/s/AKfycbzn85k_wM_apFlg1DHifA6FFRXLYE04O_0z5im-1sdD37R-gw-utGzFs2Fhde2m3sPfHg/exec';
      
      // Datos a enviar
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('checkIn', formData.checkIn);
      formDataToSend.append('checkOut', formData.checkOut);
      formDataToSend.append('guests', formData.guests);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('timestamp', new Date().toISOString());
      formDataToSend.append('source', 'landing-villarrica');

      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors' // Importante para Google Apps Script
      });

      // Como usamos 'no-cors', no podemos leer la respuesta directamente
      // Pero si llega aquí, asumimos éxito
      
      setFormStatus({
        loading: false,
        success: true,
        error: false,
        message: '¡Consulta enviada con éxito! Te contactaremos pronto.'
      });

      // También enviamos por email como respaldo
      sendEmailBackup(formData);

      // Resetear formulario
      setFormData({
        name: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        guests: '2',
        message: ''
      });

      // Resetear mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, success: false, message: '' }));
      }, 5000);

    } catch (error) {
      console.error('Error al enviar formulario:', error);
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Error al enviar la consulta. Por favor, intenta nuevamente o contáctanos directamente por WhatsApp.'
      });
    }
  };

  // Función para enviar email de respaldo (opcional)
  const sendEmailBackup = (data) => {
    const emailBody = `
Nueva consulta desde la landing page de Villarrica:

Nombre: ${data.name}
Email: ${data.email}
Teléfono: ${data.phone}
Fecha de entrada: ${data.checkIn}
Fecha de salida: ${data.checkOut}
Número de huéspedes: ${data.guests}
Mensaje: ${data.message}

Fecha y hora: ${new Date().toLocaleString('es-CL')}
    `;

    // Puedes usar un servicio como EmailJS o simplemente el mailto
    // Esta es una implementación básica con mailto
    const emailSubject = `Nueva consulta - ${data.name}`;
    const mailtoLink = `mailto:andespart.ar@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Abrir cliente de email (opcional)
    // window.open(mailtoLink, '_blank');
  };

  const whatsappMessage = `Hola, me interesa reservar la casa en Villarrica. 

Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Check-in: ${formData.checkIn}
Check-out: ${formData.checkOut}
Huéspedes: ${formData.guests}
Mensaje: ${formData.message}

¡Por favor contáctenme!`;

  const encodedMessage = encodeURIComponent(whatsappMessage);

  return (
    <section id="contacto" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Reserva tu estadía</h2>
        <p className="section-subtitle">
          Contáctanos para consultar disponibilidad y realizar tu reserva
        </p>
        
        {/* Mensajes de estado del formulario */}
        {formStatus.success && (
          <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-green-800">¡Consulta enviada con éxito!</h3>
                <div className="mt-2 text-green-700">
                  <p>{formStatus.message}</p>
                  <p className="mt-1 text-sm">Te contactaremos en las próximas 24 horas.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {formStatus.error && (
          <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-xl">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.73 0L4.196 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-red-800">Error al enviar</h3>
                <div className="mt-2 text-red-700">
                  <p>{formStatus.message}</p>
                  <p className="mt-2">
                    Puedes contactarnos directamente por:{' '}
                    <a href="https://wa.me/569XXXXXXXX" className="font-semibold underline">WhatsApp</a>{' '}
                    o{' '}
                    <a href="tel:+569XXXXXXXX" className="font-semibold underline">Teléfono</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

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
                    disabled={formStatus.loading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Tu nombre completo"
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
                    disabled={formStatus.loading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="ejemplo@email.com"
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
                  disabled={formStatus.loading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                    disabled={formStatus.loading}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                    disabled={formStatus.loading}
                    min={formData.checkIn || new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Número de huéspedes *</label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  disabled={formStatus.loading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  <option value="1">1 persona</option>
                  <option value="2">2 personas</option>
                  <option value="3">3 personas</option>
                  <option value="4">4 personas</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Mensaje adicional</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={formStatus.loading}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Información adicional, preguntas especiales, necesidades específicas, etc."
                ></textarea>
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={formStatus.loading}
                  className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus.loading ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Enviando consulta...
                    </>
                  ) : (
                    'Enviar consulta de disponibilidad'
                  )}
                </button>
                
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Al enviar este formulario, aceptas nuestra{' '}
                  <a href="#" className="text-primary-600 hover:underline">política de privacidad</a>.
                </p>
              </div>
            </form>

            {/* Botón de WhatsApp alternativo */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-600 mb-4">¿Prefieres contactarnos directamente?</p>
              <a 
                href={`https://wa.me/56997416485?text=${encodedMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full flex items-center justify-center gap-3 py-4 text-lg"
              >
                <FaWhatsapp className="text-xl" />
                Enviar mensaje por WhatsApp
              </a>
            </div>
          </div>
          
          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Contacto directo</h3>
              
              <div className="space-y-6">
                <a 
                  href="https://wa.me/56997416485"
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
                  href="tel:+56997416485"
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
                  href="mailto:andespart.ar@gmail.com"
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
                  <p className="text-gray-600">Se acepta solo transferencia bancaria.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800">¿Requieren depósito de garantía?</h4>
                  <p className="text-gray-600">No, el depósito de garantía es opcional.</p>
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