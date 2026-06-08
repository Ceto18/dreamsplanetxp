'use client'

import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, PlayCircle } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: 'Maria González',
    mission: 'Misión Marruecos',
    rating: 5,
    text: 'La mejor experiencia de mi vida. El equipo fue extraordinario, cada detalle cuidado al máximo. Recomiendo Dreams Planetap sin dudarlo.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
  },
  {
    id: 2,
    name: 'Carlos Rodriguez',
    mission: 'Misión Vietnam',
    rating: 5,
    text: 'Una aventura increíble. Los coordinadores conocen cada rincón del destino y te hacen sentir seguro en todo momento. ¡Volveré pronto!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
  },
  {
    id: 3,
    name: 'Sophie Dupont',
    mission: 'Misión Tailandia',
    rating: 5,
    text: 'Simplemente perfecto. Desde el primer contacto hasta el regreso a casa, todo fue mágico. Dreams Planetap entiende lo que significa viajar bien.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
  },
  {
    id: 4,
    name: 'Marco Fontana',
    mission: 'Misión Japón',
    rating: 5,
    text: 'La organización es impecable. Experiencias auténticas, gente local, momentos genuinos. Esto es más que un viaje, es transformación.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
  },
]

export default function Resenas() {
  const [activeReview, setActiveReview] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (!autoplay) return
    
    autoplayRef.current = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length)
    }, 6000)

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current)
    }
  }, [autoplay])

  const handlePrev = () => {
    setAutoplay(false)
    setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setActiveReview((prev) => (prev + 1) % reviews.length)
  }

  const review = reviews[activeReview]

  return (
    <section id="resenas" className="py-24 bg-dark-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -ml-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header - Centered */}
        <div className="mb-16 space-y-6 text-center">
          <h2 className="text-5xl sm:text-6xl font-heading font-bold text-warm-white">
            Reseñas
          </h2>
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Featured Testimonial */}
          <div 
            className="space-y-8"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-heading font-bold text-warm-white">
                Lo que dicen nuestros viajeros
              </h3>
            </div>

            {/* Featured testimonial - Smooth transition */}
            <div key={activeReview} className="glass-card p-8 space-y-6 animate-in fade-in duration-500">
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl leading-relaxed text-warm-white italic font-light">
                "{review.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gold/20">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover border border-gold/30"
                />
                <div>
                  <h4 className="text-warm-white font-semibold">
                    {review.name}
                  </h4>
                  <p className="text-gold text-sm">{review.mission}</p>
                </div>
              </div>
            </div>

            {/* Navigation controls */}
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-gold/50 text-gold hover:bg-gold/10 hover:border-gold transition-all duration-300 flex items-center justify-center group"
              >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
              </button>
              
              <div className="flex gap-2 justify-center flex-1">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setAutoplay(false)
                      setActiveReview(idx)
                    }}
                    className={`rounded-full transition-all duration-300 ${
                      idx === activeReview
                        ? 'bg-gold w-8 h-2'
                        : 'bg-gold/30 w-2 h-2 hover:bg-gold/50'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-gold/50 text-gold hover:bg-gold/10 hover:border-gold transition-all duration-300 flex items-center justify-center group"
              >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* CTA */}
            <button className="btn-gold w-full py-3 font-semibold">
              Ver todas las reseñas
            </button>

            {/* Elegant Metrics */}
            <div className="space-y-3 pt-4 border-t border-gold/20">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-text">Valoración media</span>
                <span className="text-gold font-semibold">4.9/5</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-text">Viajeros satisfechos</span>
                <span className="text-gold font-semibold">98%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-text">Reseñas reales</span>
                <span className="text-gold font-semibold">1.200+</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-text">Experiencias únicas</span>
                <span className="text-gold font-semibold">80+</span>
              </div>
            </div>
          </div>

          {/* Right side - Phone mockup */}
          <div className="hidden lg:flex justify-center items-start pt-8">
            {/* Smartphone mockup */}
            <div className="relative w-80">
              {/* Phone frame */}
              <div className="bg-gradient-to-b from-dark-secondary to-dark-main rounded-3xl p-3 shadow-2xl border border-gold/20">
                {/* Phone bezel */}
                <div className="bg-dark-main rounded-3xl overflow-hidden">
                  {/* Notch */}
                  <div className="h-8 bg-dark-main flex justify-center items-center">
                    <div className="w-32 h-6 bg-dark-secondary rounded-b-3xl"></div>
                  </div>

                  {/* Phone content */}
                  <div className="relative w-full h-96 bg-gradient-to-br from-gold/20 to-dark-main flex flex-col items-center justify-center overflow-hidden">
                    {/* Video/Image background */}
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-main via-transparent to-transparent"></div>

                    {/* Play button */}
                    <button className="absolute inset-0 flex items-center justify-center group">
                      <div className="w-20 h-20 rounded-full bg-gold/30 backdrop-blur-sm group-hover:bg-gold/50 transition-all duration-300 flex items-center justify-center">
                        <PlayCircle className="w-12 h-12 text-gold group-hover:scale-110 transition-transform" />
                      </div>
                    </button>

                    {/* Reviewer info at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-main to-transparent">
                      <p className="text-warm-white font-semibold text-sm">
                        {review.name}
                      </p>
                      <p className="text-gold text-xs">{review.mission}</p>
                    </div>
                  </div>

                  {/* Bottom bar */}
                  <div className="h-6 bg-dark-main flex justify-center">
                    <div className="w-24 h-1 bg-warm-white/30 rounded-full mt-2"></div>
                  </div>
                </div>
              </div>

              {/* Phone shadow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gold/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
