'use client'

import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface Photo {
    id: number
    destination: string
    title: string
    image: string
    description: string
    place: string
    experience: string
    moment: string
    emotion: string
    recommendation: string
    gallery: string[]
}

const destinations = ['Marruecos', 'Vietnam', 'Tailandia', 'Japón', 'Nepal', 'Sorpresa']

const momentosData: Record<string, Photo[]> = {
    Marruecos: [
        {
            id: 1,
            destination: 'Marruecos',
            title: 'Atardecer en el desierto',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
            description: 'Un instante entre dunas, silencio y cielo dorado. Una experiencia pensada para viajeros que buscan conectar con el destino más allá de lo turístico.',
            place: 'Desierto de Marruecos',
            experience: 'Atardecer y campamento',
            moment: 'Últimas horas del día',
            emotion: 'Calma, asombro y conexión',
            recommendation: 'Permite que el silencio del desierto toque tu alma. Este es un momento para desconectar del ruido del mundo.',
            gallery: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1494391828871-e56bde99b51b?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
            ]
        },
        {
            id: 2,
            destination: 'Marruecos',
            title: 'Mercados de Marrakech',
            image: 'https://images.unsplash.com/photo-1495368143848-9f21ffa880ce?w=600&h=600&fit=crop',
            description: 'La esencia de Marruecos vibra en sus mercados. Colores, aromas y voces que te transportan a siglos de historia.',
            place: 'Medina de Marrakech',
            experience: 'Exploración de zocos tradicionales',
            moment: 'Mañana temprana',
            emotion: 'Fascinación, energía y curiosidad',
            recommendation: 'Sumérgete en los sentidos, prueba cada aroma y sabor que encuentres.',
            gallery: [
                'https://images.unsplash.com/photo-1495368143848-9f21ffa880ce?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1494391828871-e56bde99b51b?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=600&fit=crop',
            ]
        },
        {
            id: 3,
            destination: 'Marruecos',
            title: 'Kasbah azul',
            image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=600&fit=crop',
            description: 'Chefchaouen, la ciudad azul que parece sacada de un sueño. Calles pintadas en tonos de azul que crean una atmósfera mágica.',
            place: 'Chefchaouen',
            experience: 'Recorrido por la medina',
            moment: 'Atardecer',
            emotion: 'Magia, serenidad y asombro',
            recommendation: 'Camina sin rumbo, deja que las calles azules te guíen hacia descubrimientos inesperados.',
            gallery: [
                'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1494391828871-e56bde99b51b?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1495368143848-9f21ffa880ce?w=600&h=600&fit=crop',
            ]
        },
        {
            id: 4,
            destination: 'Marruecos',
            title: 'Montañas del Atlas',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
            description: 'Cumbres nevadas, pueblos bereberes y vistas infinitas. Las montañas majestuosas que guardan secretos ancestrales.',
            place: 'Atlas Central',
            experience: 'Trekking y encuentros culturales',
            moment: 'Madrugada',
            emotion: 'Grandiosidad y humildad',
            recommendation: 'Respira el aire puro de las montañas y reflexiona sobre tu lugar en el mundo.',
            gallery: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1494391828871-e56bde99b51b?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1495368143848-9f21ffa880ce?w=600&h=600&fit=crop',
            ]
        },
        {
            id: 5,
            destination: 'Marruecos',
            title: 'Playa de Essaouira',
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=600&fit=crop',
            description: 'Costas salvajes bañadas por vientos atlánticos. Un contraste perfecto entre el descanso y la aventura.',
            place: 'Puerto de Essaouira',
            experience: 'Paseo costero y gastronomía',
            moment: 'Medio día',
            emotion: 'Libertad y paz',
            recommendation: 'Prueba el pescado fresco en el puerto y deja que el mar renueve tu espíritu.',
            gallery: [
                'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1494391828871-e56bde99b51b?w=600&h=600&fit=crop',
            ]
        },
        {
            id: 6,
            destination: 'Marruecos',
            title: 'Riad tradicional',
            image: 'https://images.unsplash.com/photo-1495368143848-9f21ffa880ce?w=600&h=600&fit=crop',
            description: 'Interior de lujo en armonía con la tradición. Un refugio secreto detrás de puertas azules.',
            place: 'Medina de Fez',
            experience: 'Hospedaje de lujo',
            moment: 'Noche',
            emotion: 'Comodidad y autenticidad',
            recommendation: 'Recarga tus energías en un lugar donde la arquitectura cuenta historias milenarias.',
            gallery: [
                'https://images.unsplash.com/photo-1495368143848-9f21ffa880ce?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1494391828871-e56bde99b51b?w=600&h=600&fit=crop',
            ]
        },
        {
            id: 7,
            destination: 'Marruecos',
            title: 'Oasis de Ait Benhaddou',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
            description: 'Un pueblo de adobe que se eleva como una fortaleza dorada. Patrimonio de la humanidad congelado en el tiempo.',
            place: 'Ait Benhaddou',
            experience: 'Recorrido histórico',
            moment: 'Puesta de sol',
            emotion: 'Nostalgia e inspiración',
            recommendation: 'Imagina las historias que estas paredes podrían contar si pudieran hablar.',
            gallery: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1495368143848-9f21ffa880ce?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1494391828871-e56bde99b51b?w=600&h=600&fit=crop',
            ]
        },
        {
            id: 8,
            destination: 'Marruecos',
            title: 'Noche estrellada',
            image: 'https://images.unsplash.com/photo-1494391828871-e56bde99b51b?w=600&h=600&fit=crop',
            description: 'Bajo un cielo infinito de estrellas. Un momento de conexión cósmica en el corazón del Sahara.',
            place: 'Desierto profundo',
            experience: 'Noche bajo las estrellas',
            moment: 'Noche profunda',
            emotion: 'Asombro y trascendencia',
            recommendation: 'Apaga tu teléfono y mira hacia arriba. Aquí descubrirás tu verdadero tamaño en el universo.',
            gallery: [
                'https://images.unsplash.com/photo-1494391828871-e56bde99b51b?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1495368143848-9f21ffa880ce?w=600&h=600&fit=crop',
            ]
        },
    ],
    Vietnam: Array.from({ length: 8 }, (_, i) => ({
        id: i + 1,
        destination: 'Vietnam',
        title: `Momento en Vietnam ${i + 1}`,
        image: 'https://images.unsplash.com/photo-1528127269029-c4b9e67ad96f?w=600&h=600&fit=crop',
        description: 'Una experiencia mágica en tierras vietnamitas que transformará tu perspectiva.',
        place: 'Vietnam',
        experience: 'Exploración cultural',
        moment: 'Cualquier hora',
        emotion: 'Fascinación',
        recommendation: 'Vive cada momento plenamente.',
        gallery: [
            'https://images.unsplash.com/photo-1528127269029-c4b9e67ad96f?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
        ]
    })),
    Tailandia: Array.from({ length: 8 }, (_, i) => ({
        id: i + 1,
        destination: 'Tailandia',
        title: `Momento en Tailandia ${i + 1}`,
        image: 'https://images.unsplash.com/photo-1506457925148-2affa5f27f70?w=600&h=600&fit=crop',
        description: 'La magia de Tailandia espera en cada esquina para sorprenderte.',
        place: 'Tailandia',
        experience: 'Aventura tailandesa',
        moment: 'Cualquier hora',
        emotion: 'Aventura',
        recommendation: 'Atrévete a descubrir lo desconocido.',
        gallery: [
            'https://images.unsplash.com/photo-1506457925148-2affa5f27f70?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
        ]
    })),
    Japón: Array.from({ length: 8 }, (_, i) => ({
        id: i + 1,
        destination: 'Japón',
        title: `Momento en Japón ${i + 1}`,
        image: 'https://images.unsplash.com/photo-1522383150241-6c85cf17422b?w=600&h=600&fit=crop',
        description: 'Japón, donde la tradición y modernidad conviven en perfecta armonía.',
        place: 'Japón',
        experience: 'Inmersión japonesa',
        moment: 'Cualquier hora',
        emotion: 'Armonía',
        recommendation: 'Aprende la filosofía del equilibrio.',
        gallery: [
            'https://images.unsplash.com/photo-1522383150241-6c85cf17422b?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1494391828871-e56bde99b51b?w=600&h=600&fit=crop',
        ]
    })),
    Nepal: Array.from({ length: 8 }, (_, i) => ({
        id: i + 1,
        destination: 'Nepal',
        title: `Momento en Nepal ${i + 1}`,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
        description: 'Nepal, donde las montañas sagradas hablan a tu alma.',
        place: 'Nepal',
        experience: 'Conexión espiritual',
        moment: 'Cualquier hora',
        emotion: 'Espiritualidad',
        recommendation: 'Escucha tu corazón en silencio.',
        gallery: [
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1494391828871-e56bde99b51b?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1495368143848-9f21ffa880ce?w=600&h=600&fit=crop',
        ]
    })),
    Sorpresa: Array.from({ length: 8 }, (_, i) => ({
        id: i + 1,
        destination: 'Sorpresa',
        title: `Momento Sorpresa ${i + 1}`,
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=600&fit=crop',
        description: 'Un destino misterioso que desafiará tus expectativas y redefinirá tus límites.',
        place: 'Destino Secreto',
        experience: 'Lo inesperado',
        moment: 'Siempre el momento exacto',
        emotion: 'Intriga y emoción',
        recommendation: 'Confía en el proceso y prepárate para lo extraordinario.',
        gallery: [
            'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1494391828871-e56bde99b51b?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1495368143848-9f21ffa880ce?w=600&h=600&fit=crop',
        ]
    })),
}

export default function Momentos() {
    const [activeDestination, setActiveDestination] = useState<string>(destinations[0])
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const filteredPhotos = momentosData[activeDestination] || []

    const handleNextImage = () => {
        if (selectedPhoto?.gallery) {
            setCurrentImageIndex((prev) => (prev + 1) % selectedPhoto.gallery.length)
        }
    }

    const handlePrevImage = () => {
        if (selectedPhoto?.gallery) {
            setCurrentImageIndex(
                (prev) => (prev - 1 + selectedPhoto.gallery.length) % selectedPhoto.gallery.length
            )
        }
    }

    return (
        <section id="momentos" className="py-24 bg-dark-secondary relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -ml-48 -mt-48"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section header - Centered */}
                <div className="mb-16 space-y-6 text-center">
                    <h2 className="text-5xl sm:text-6xl font-heading font-bold text-warm-white">
                        Momentos
                    </h2>
                    <div className="flex justify-center">
                        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
                    </div>
                    <p className="text-lg text-muted-text max-w-2xl mx-auto">
                        Cada foto es un recuerdo eterno. Cada imagen cuenta la historia de una transformación personal.
                    </p>
                </div>

                {/* Destination tabs */}
                {/* Destination tabs */}
                <div className="mb-12 flex justify-center">
                    <div className="flex max-w-4xl flex-wrap justify-center gap-3">
                        {destinations.map((destination) => (
                            <button
                                key={destination}
                                onClick={() => {
                                    setActiveDestination(destination)
                                    setCurrentImageIndex(0)
                                    setSelectedPhoto(null)
                                }}
                                className={`px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${activeDestination === destination
                                        ? "bg-gold text-dark-main"
                                        : "border border-gold/50 text-warm-white hover:border-gold"
                                    }`}
                            >
                                {destination}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Gallery grid - 8 images */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
                    {filteredPhotos.map((photo) => (
                        <button
                            key={photo.id}
                            onClick={() => {
                                setSelectedPhoto(photo)
                                setCurrentImageIndex(0)
                            }}
                            className="group relative aspect-square rounded-lg overflow-hidden glass-card hover:border-gold/50 transition-all duration-300 cursor-pointer"
                        >
                            <img
                                src={photo.image}
                                alt={photo.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-main via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                                <h3 className="text-warm-white font-semibold text-sm line-clamp-2">{photo.title}</h3>
                            </div>
                            <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/50 rounded-lg transition-colors duration-300"></div>
                        </button>
                    ))}
                </div>

                {/* Ver más button */}
                <div className="text-center">
                    <button className="btn-outline-gold px-8 py-3">
                        Ver más momentos
                    </button>
                </div>
            </div>

            {/* Premium Modal */}
            {selectedPhoto && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-main/85 backdrop-blur-md">
                    <div className="bg-dark-secondary rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto glass-card p-8 space-y-6 animate-in fade-in zoom-in duration-300">
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedPhoto(null)}
                            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gold/20 hover:bg-gold/40 text-gold transition-colors flex items-center justify-center z-10"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Image carousel */}
                            <div className="lg:col-span-2 space-y-4">
                                <div className="relative h-96 lg:h-[400px] rounded-lg overflow-hidden">
                                    <img
                                        src={selectedPhoto.gallery[currentImageIndex]}
                                        alt={selectedPhoto.title}
                                        className="w-full h-full object-cover"
                                    />
                                    {selectedPhoto.gallery.length > 1 && (
                                        <>
                                            <button
                                                onClick={handlePrevImage}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-gold/20 hover:bg-gold/40 text-gold p-2 rounded-full transition-colors z-10"
                                            >
                                                <ChevronLeft className="w-6 h-6" />
                                            </button>
                                            <button
                                                onClick={handleNextImage}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-gold/20 hover:bg-gold/40 text-gold p-2 rounded-full transition-colors z-10"
                                            >
                                                <ChevronRight className="w-6 h-6" />
                                            </button>
                                        </>
                                    )}
                                </div>

                                {/* Thumbnails */}
                                {selectedPhoto.gallery.length > 1 && (
                                    <div className="flex gap-2 overflow-x-auto pb-2">
                                        {selectedPhoto.gallery.map((img, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentImageIndex(idx)}
                                                className={`w-20 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${idx === currentImageIndex
                                                        ? 'border-gold ring-2 ring-gold/50'
                                                        : 'border-gold/20 hover:border-gold/50'
                                                    }`}
                                            >
                                                <img
                                                    src={img}
                                                    alt={`thumbnail-${idx}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <p className="text-gold text-sm uppercase tracking-widest font-semibold">
                                        {selectedPhoto.destination}
                                    </p>
                                    <h3 className="text-3xl font-heading font-bold text-warm-white">
                                        {selectedPhoto.title}
                                    </h3>
                                    <p className="text-lg text-muted-text leading-relaxed">
                                        {selectedPhoto.description}
                                    </p>
                                </div>

                                {/* Details */}
                                <div className="space-y-3 border-t border-gold/20 pt-6">
                                    <div className="space-y-2">
                                        <p className="text-gold text-xs uppercase tracking-widest font-semibold">Detalles</p>
                                        <div className="space-y-2">
                                            <p className="text-warm-white">
                                                <span className="text-muted-text">Lugar:</span> {selectedPhoto.place}
                                            </p>
                                            <p className="text-warm-white">
                                                <span className="text-muted-text">Experiencia:</span> {selectedPhoto.experience}
                                            </p>
                                            <p className="text-warm-white">
                                                <span className="text-muted-text">Momento ideal:</span> {selectedPhoto.moment}
                                            </p>
                                            <p className="text-warm-white">
                                                <span className="text-muted-text">Sensación:</span> {selectedPhoto.emotion}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Recommendation */}
                                    <div className="bg-gold/10 border border-gold/30 rounded-lg p-4">
                                        <p className="text-warm-white italic">
                                            "{selectedPhoto.recommendation}"
                                        </p>
                                    </div>
                                </div>

                                {/* CTA */}
                                <button className="btn-gold w-full py-3 text-base">
                                    Explorar misión
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
