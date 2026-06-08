import Link from 'next/link'
import { Share2, Heart, Globe, MessageSquare } from 'lucide-react'

const quickLinks = [
  { label: 'Misiones', href: '#misiones' },
  { label: 'Momentos', href: '#momentos' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Quiénes somos', href: '#somos' },
  { label: 'Contacto', href: '#contacto' },
]

const legalLinks = [
  { label: 'Términos y condiciones', href: '#' },
  { label: 'Política de privacidad', href: '#' },
  { label: 'Política de cookies', href: '#' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-main border-t border-gold/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -ml-48 -mt-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/40 to-gold/20 flex items-center justify-center">
                <div className="text-gold font-heading font-bold text-lg">D</div>
              </div>
              <span className="text-warm-white font-heading font-bold text-lg">
                Dreams <span className="text-gold">Planetap</span>
              </span>
            </Link>
            <p className="text-muted-text leading-relaxed">
              Expediciones exclusivas para viajeros que desean transformar sus vidas a través de experiencias extraordinarias.
            </p>
            <div className="flex gap-3 pt-4">
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

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-warm-white font-heading font-bold">Enlaces rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-text hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-warm-white font-heading font-bold">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-muted-text">
                <span className="text-warm-white font-semibold">Email:</span>
                <a
                  href="mailto:info@dreamsplanetap.com"
                  className="block hover:text-gold transition-colors duration-300"
                >
                  info@dreamsplanetap.com
                </a>
              </li>
              <li className="text-muted-text">
                <span className="text-warm-white font-semibold">Teléfono:</span>
                <a
                  href="tel:+34912345678"
                  className="block hover:text-gold transition-colors duration-300"
                >
                  +34 912 345 678
                </a>
              </li>
              <li className="text-muted-text">
                <span className="text-warm-white font-semibold">WhatsApp:</span>
                <a
                  href="https://wa.me/34912345678"
                  className="block hover:text-gold transition-colors duration-300"
                >
                  +34 912 345 678
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-warm-white font-heading font-bold">Newsletter</h3>
            <p className="text-muted-text text-sm">
              Recibe historias de viajes, consejos y ofertas exclusivas.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full bg-gold/10 border border-gold/30 rounded-lg px-4 py-2 text-warm-white placeholder-muted-text/50 focus:border-gold focus:outline-none transition-colors text-sm"
              />
              <button className="w-full btn-gold py-2 text-sm">Suscribirse</button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/20 py-8 space-y-6 md:space-y-0 md:flex md:justify-between md:items-center">
          {/* Legal Links */}
          <div className="flex flex-wrap gap-4 text-sm">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-muted-text hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-text text-sm">
            &copy; {currentYear} Dreams Planetap. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
