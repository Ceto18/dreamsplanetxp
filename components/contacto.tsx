'use client'

import { useState } from 'react'
import { Mail, MessageCircle, Clock, Share2, Heart, Globe, MessageSquare } from 'lucide-react'

const misionOptions = [
  'Marruecos',
  'Vietnam',
  'Tailandia',
  'Japón',
  'Nepal',
  'Misión Sorpresa',
  'No sé, quiero asesoramiento',
]

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mision: '',
    viajeros: '',
    mensaje: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        mision: '',
        viajeros: '',
        mensaje: '',
      })
    }, 3000)
  }

  return (
    <section id="contacto" className="py-24 bg-dark-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -mr-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left side - Contact info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl sm:text-6xl font-heading font-bold text-warm-white">
                Contacto &{' '}
                <span className="text-gold">Reserva</span>
              </h2>
              <p className="text-lg text-muted-text">
                ¿Listo para tu próxima aventura? Conecta con nuestro equipo hoy.
              </p>
            </div>

            {/* Contact methods */}
            <div className="space-y-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/1234567890"
                className="glass-card p-4 flex items-center gap-4 hover:border-gold/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                  <Share2 className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-warm-white font-semibold">WhatsApp</p>
                  <p className="text-gold text-sm">+34 912 345 678</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@dreamsplanetap.com"
                className="glass-card p-4 flex items-center gap-4 hover:border-gold/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-warm-white font-semibold">Email</p>
                  <p className="text-gold text-sm">info@dreamsplanetap.com</p>
                </div>
              </a>

              {/* Response time */}
              <div className="glass-card p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-warm-white font-semibold">Tiempo de respuesta</p>
                  <p className="text-muted-text text-sm">Menos de 24 horas</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              <p className="text-sm text-muted-text uppercase tracking-widest font-semibold">
                Síguenos
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gold/50 text-gold hover:bg-gold/10 hover:border-gold transition-all duration-300 flex items-center justify-center"
                >
                  <Share2 className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gold/50 text-gold hover:bg-gold/10 hover:border-gold transition-all duration-300 flex items-center justify-center"
                >
                  <Heart className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gold/50 text-gold hover:bg-gold/10 hover:border-gold transition-all duration-300 flex items-center justify-center"
                >
                  <Globe className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gold/50 text-gold hover:bg-gold/10 hover:border-gold transition-all duration-300 flex items-center justify-center"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8 space-y-6">
              <h3 className="text-2xl font-heading font-bold text-warm-white">
                Envía tu solicitud
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nombre */}
                <div>
                  <label className="block text-warm-white font-semibold mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full bg-gold/10 border border-gold/30 rounded-lg px-4 py-3 text-warm-white placeholder-muted-text/50 focus:border-gold focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-warm-white font-semibold mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gold/10 border border-gold/30 rounded-lg px-4 py-3 text-warm-white placeholder-muted-text/50 focus:border-gold focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Grid for 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Teléfono */}
                  <div>
                    <label className="block text-warm-white font-semibold mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                      className="w-full bg-gold/10 border border-gold/30 rounded-lg px-4 py-3 text-warm-white placeholder-muted-text/50 focus:border-gold focus:outline-none transition-colors"
                      placeholder="+34 912 345 678"
                    />
                  </div>

                  {/* Número de viajeros */}
                  <div>
                    <label className="block text-warm-white font-semibold mb-2">
                      Número de viajeros
                    </label>
                    <select
                      name="viajeros"
                      value={formData.viajeros}
                      onChange={handleChange}
                      required
                      className="w-full bg-gold/10 border border-gold/30 rounded-lg px-4 py-3 text-warm-white focus:border-gold focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Selecciona</option>
                      <option value="1">1 viajero</option>
                      <option value="2">2 viajeros</option>
                      <option value="3-5">3-5 viajeros</option>
                      <option value="6-10">6-10 viajeros</option>
                      <option value="11+">11+ viajeros</option>
                    </select>
                  </div>
                </div>

                {/* Misión */}
                <div>
                  <label className="block text-warm-white font-semibold mb-2">
                    Misión de interés
                  </label>
                  <select
                    name="mision"
                    value={formData.mision}
                    onChange={handleChange}
                    required
                    className="w-full bg-gold/10 border border-gold/30 rounded-lg px-4 py-3 text-warm-white focus:border-gold focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Selecciona una misión</option>
                    {misionOptions.map((mision) => (
                      <option key={mision} value={mision}>
                        {mision}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-warm-white font-semibold mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-gold/10 border border-gold/30 rounded-lg px-4 py-3 text-warm-white placeholder-muted-text/50 focus:border-gold focus:outline-none transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu viaje soñado..."
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full btn-gold py-4 font-semibold text-lg hover:shadow-lg hover:shadow-gold/20 transition-all duration-300"
                >
                  {submitted ? 'Solicitud enviada' : 'Enviar solicitud'}
                </button>

                {submitted && (
                  <p className="text-gold text-center text-sm font-semibold animate-slide-up">
                    ¡Gracias! Nos pondremos en contacto pronto.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
