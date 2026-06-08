import Header from '@/components/header'
import Hero from '@/components/hero'
import Misiones from '@/components/misiones'
import Momentos from '@/components/momentos'
import Equipo from '@/components/equipo'
import Resenas from '@/components/resenas'
import QuienesSomos from '@/components/quienes-somos'
import Contacto from '@/components/contacto'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <Misiones />
      <Momentos />
      <Equipo />
      <Resenas />
      <QuienesSomos />
      <Contacto />
      <Footer />
    </main>
  )
}
