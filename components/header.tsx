'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Misiones', href: '#misiones' },
  { name: 'Momentos', href: '#momentos' },
  { name: 'Equipo', href: '#equipo' },
  { name: 'Reseñas', href: '#resenas' },
  { name: 'Quiénes somos', href: '#somos' },
  { name: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setActiveLink(href)
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-main/80 backdrop-blur-md border-b border-gold/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/40 to-gold/20 flex items-center justify-center">
              <div className="text-gold font-heading font-bold text-lg">D</div>
            </div>
            <span className="text-warm-white font-heading font-bold text-lg hidden sm:inline">
              Dreams <span className="text-gold">Planetap</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-colors duration-300 relative ${
                  activeLink === item.href
                    ? 'text-gold'
                    : 'text-warm-white/70 hover:text-warm-white'
                } after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all after:duration-300 ${
                  activeLink === item.href ? 'after:w-full' : 'hover:after:w-full'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="btn-gold text-sm px-5 py-2 hidden sm:block">
              Reservar ahora
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-warm-white/70 hover:text-warm-white transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden bg-dark-secondary/95 backdrop-blur-md border-b border-gold/10 rounded-b-lg overflow-hidden animate-fade-in">
            <div className="px-4 py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeLink === item.href
                      ? 'bg-gold/20 text-gold border-l-2 border-gold'
                      : 'text-warm-white/70 hover:bg-gold/10 border-l-2 border-transparent'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button className="w-full btn-gold mt-4 text-sm py-2">
                Reservar ahora
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
