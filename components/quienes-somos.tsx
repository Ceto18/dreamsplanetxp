import { Heart, Compass, Users, Zap } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Autenticidad',
    description:
      'Creemos en experiencias genuinas. Cada viaje es diseñado para conectarte con la esencia real de los destinos.',
  },
  {
    icon: Compass,
    title: 'Aventura Transformadora',
    description:
      'Nuestras expediciones no son simples tours. Son viajes que expanden tu perspectiva y cambian tu vida.',
  },
  {
    icon: Users,
    title: 'Comunidad Global',
    description:
      'Dreams Planetap conecta viajeros de todo el mundo que comparten la pasión por explorar y aprender.',
  },
  {
    icon: Zap,
    title: 'Excelencia',
    description:
      'Cada detalle importa. Desde coordinadores expertos hasta logística impecable, excelencia en todo.',
  },
]

export default function QuienesSomos() {
  return (
    <section id="somos" className="py-24 bg-dark-main relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -mr-48"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold/3 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header - Centered */}
        <div className="mb-16 space-y-6 text-center">
          <h2 className="text-5xl sm:text-6xl font-heading font-bold text-warm-white">
            Quiénes Somos
          </h2>
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6 text-lg text-muted-text leading-relaxed">
              <p>
                Dreams Planetap es más que una agencia de viajes. Somos una comunidad de soñadores,
                exploradores y viajeros apasionados que creen que el mundo es un lugar
                extraordinario esperando ser descubierto.
              </p>

              <p>
                Fundada con la visión de transformar la forma en que viajamos, creemos que cada
                expedición debe ser una oportunidad para crecer, conectar con nuevas culturas y
                vivir momentos que cambien nuestras perspectivas.
              </p>

              <p>
                Nuestro equipo de expertos en cada destino garantiza que no solo visitarás lugares,
                sino que vivirás experiencias auténticas, seguras y profundamente significativas que
                permanecerán en tu corazón para siempre.
              </p>
            </div>

            <button className="btn-gold py-4 px-8 text-lg">
              Conocer nuestra historia completa
            </button>
          </div>

          {/* Right side - Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="glass-card p-6 space-y-4 hover:border-gold/50 transition-all duration-300 group animate-slide-down"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-heading font-bold text-warm-white">
                      {value.title}
                    </h3>
                    <p className="text-muted-text leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
