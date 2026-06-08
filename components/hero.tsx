'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, MapPin, Calendar, Users } from 'lucide-react'
import { Countdown } from './countdown'

export default function Hero() {
  const stats = [
    { label: 'Destinos', value: '25+' },
    { label: 'Viajeros', value: '1.2k' },
    { label: 'Experiencias', value: '80+' },
    { label: 'Continentes', value: '5' },
  ]

  return (
    <section
      className="relative min-h-screen pt-20 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(5, 5, 5, 0.85) 0%, rgba(11, 11, 10, 0.75) 100%), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=900&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-gold/3 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left side - Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-warm-white leading-tight">
                Pon tu vida en modo{' '}
                <span className="text-gold">avión</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-text leading-relaxed max-w-lg">
                Expediciones exclusivas diseñadas para quienes quieren vivir algo diferente. Destinos extraordinarios, coordinadores expertos y momentos que cambiarán tu perspectiva del mundo.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-gold flex items-center justify-center space-x-2 group">
                <span>Descubrir misiones</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-outline-gold flex items-center justify-center space-x-2">
                <span>Ver momentos</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gold/20">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-gold">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-text">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Next Departure Card */}
          <div className="hidden lg:flex justify-end animate-slide-down animation-delay-300">
            <div className="w-full max-w-sm glass-card p-8 space-y-6 relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-2xl rounded-full -mr-16 -mt-16"></div>

              <div className="relative z-10">
                <p className="text-muted-text text-sm uppercase tracking-widest">
                  Próxima Salida
                </p>
                <h3 className="text-3xl font-heading font-bold text-warm-white mt-2">
                  Misión Marruecos
                </h3>

                {/* Countdown */}
                <Countdown departureDate="2024-07-15" />

                {/* Available spots */}
                <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 my-6">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-gold" />
                    <span className="text-warm-white font-medium">
                      Plazas disponibles: <span className="text-gold">12/18</span>
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full btn-gold py-3">
                  Solicitar información
                </button>

                {/* Small text */}
                <p className="text-xs text-muted-text text-center mt-4">
                  Confirmación en 24 horas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
