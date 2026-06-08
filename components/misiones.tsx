'use client'

import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'

const misiones = [
  {
    id: 1,
    name: 'Vietnam',
    location: 'Sudeste Asiático',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=700&fit=crop',
    daysLeft: 45,
  },
  {
    id: 2,
    name: 'Tailandia',
    location: 'Tierra del Sonrisa',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=700&fit=crop',
    daysLeft: 60,
  },
  {
    id: 3,
    name: 'Marruecos',
    location: 'Norte de África',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=700&fit=crop',
    daysLeft: 30,
  },
  {
    id: 4,
    name: 'Japón',
    location: 'Tierra del Sol Naciente',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=700&fit=crop',
    daysLeft: 75,
  },
  {
    id: 5,
    name: 'Nepal',
    location: 'Himalayas',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=700&fit=crop',
    daysLeft: 90,
  },
  {
    id: 6,
    name: 'Misión Sorpresa',
    location: '¿A DÓNDE IREMOS?',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=700&fit=crop',
    daysLeft: 0,
    isSpecial: true,
  },
]

const experiences = [
  'Aventura auténtica',
  'Cultura inmersiva',
  'Conexiones reales',
  'Alojamientos exclusivos',
  'Gastronomía local',
  'Momentos inolvidables',
]

export default function Misiones() {
  const swiperRef = useRef<any>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="misiones" className="py-24 bg-dark-main relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -mr-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header - Centered */}
        <div className="mb-16 space-y-6 text-center">
          <h2 className="text-5xl sm:text-6xl font-heading font-bold text-warm-white">
            Misiones
          </h2>
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          </div>
          <p className="text-lg text-muted-text max-w-2xl mx-auto">
            Explora nuestras expediciones exclusivas diseñadas para viajeros que buscan experiencias transformadoras.
          </p>
        </div>

        {/* Mission Cards Carousel */}
        <div className="relative mb-16">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 6 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="!pb-4"
          >
            {misiones.map((mision, index) => (
              <SwiperSlide key={mision.id}>
                <div
                  className={`relative h-96 rounded-lg overflow-hidden group transition-all duration-700 ${
                    index === activeIndex
                      ? 'ring-2 ring-gold shadow-2xl shadow-gold/40 scale-105'
                      : 'ring-1 ring-gold/20 opacity-75 scale-95 hover:ring-gold/40 hover:opacity-100 hover:scale-100'
                  }`}
                >
                  {/* Background Image */}
                  <img
                    src={mision.image}
                    alt={mision.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-main via-dark-main/30 to-transparent"></div>

                  {/* Special Badge */}
                  {mision.isSpecial && (
                    <div className="absolute top-4 right-4 bg-gold text-dark-main px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      Sorpresa
                    </div>
                  )}

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 space-y-3">
                    <div>
                      <p className="text-gold text-xs uppercase tracking-widest font-semibold">
                        MISIÓN
                      </p>
                      <h3 className="text-xl font-heading font-bold text-warm-white mt-1">
                        {mision.name}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-text">
                      <MapPin className="w-4 h-4 text-gold" />
                      <span>{mision.location}</span>
                    </div>

                    {mision.daysLeft > 0 && (
                      <div className="text-xs text-gold font-semibold">
                        {mision.daysLeft} días para partir
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            className="absolute -left-16 top-1/3 z-20 w-11 h-11 rounded-full border border-gold/50 text-gold hover:bg-gold/10 hover:border-gold transition-all duration-300 flex items-center justify-center group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={() => swiperRef.current?.swiper.slideNext()}
            className="absolute -right-16 top-1/3 z-20 w-11 h-11 rounded-full border border-gold/50 text-gold hover:bg-gold/10 hover:border-gold transition-all duration-300 flex items-center justify-center group"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Experiences Row */}
        <div className="mb-20 space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-3xl font-heading font-bold text-warm-white">
              EXPERIENCIAS QUE SE QUEDAN CONTIGO
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-lg text-center hover:border-gold/50 transition-all duration-300 group"
              >
                <p className="text-warm-white font-semibold group-hover:text-gold transition-colors">
                  {exp}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="text-center border-t border-gold/20 pt-16">
          <p className="text-2xl sm:text-3xl font-heading font-bold text-transparent bg-gradient-to-r from-warm-white to-muted-text bg-clip-text italic max-w-3xl mx-auto">
            "No se trata de ver lugares, se trata de vivirlos."
          </p>
        </div>
      </div>
    </section>
  )
}
