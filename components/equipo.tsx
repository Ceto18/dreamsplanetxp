'use client'

import { useState } from 'react'
import { Globe, Sparkles } from 'lucide-react'

const destinations = ['Marruecos', 'Vietnam', 'Tailandia', 'Japón', 'Nepal', 'Sorpresa']

interface TeamMember {
    id: number
    name: string
    role: 'Coordinador' | 'Colaborador' | 'Influencer' | 'Coordinadora' | 'Colaboradora'
    experience: string
    languages: string[]
    specialty: string
    image: string
}

const teamMembers: Record<string, TeamMember[]> = {
    Marruecos: [
        {
            id: 1,
            name: 'Hassan Al-Mansouri',
            role: 'Coordinador',
            experience: '12 años',
            languages: ['Árabe', 'Francés', 'Inglés', 'Español'],
            specialty: 'Expediciones en desierto',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        },
        {
            id: 2,
            name: 'Fatima Zara',
            role: 'Coordinador',
            experience: '8 años',
            languages: ['Árabe', 'Francés', 'Inglés'],
            specialty: 'Cultura Marroquí',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
        },
        {
            id: 3,
            name: 'Ali Boutchiche',
            role: 'Coordinador',
            experience: '15 años',
            languages: ['Árabe', 'Francés', 'Inglés', 'Italiano'],
            specialty: 'Trekking y montaña',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
        },
        {
            id: 4,
            name: 'Noureddine Sif',
            role: 'Coordinador',
            experience: '10 años',
            languages: ['Árabe', 'Francés', 'Inglés'],
            specialty: 'Viajes urbanos',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        },
        {
            id: 5,
            name: 'Leila Tazi',
            role: 'Colaborador',
            experience: '6 años',
            languages: ['Árabe', 'Francés', 'Inglés'],
            specialty: 'Gastronomía local',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
        },
        {
            id: 6,
            name: 'Mohammed Aziz',
            role: 'Colaborador',
            experience: '7 años',
            languages: ['Árabe', 'Francés', 'Inglés'],
            specialty: 'Fotografía',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
        },
        {
            id: 7,
            name: 'Amira Ben',
            role: 'Colaborador',
            experience: '5 años',
            languages: ['Árabe', 'Francés', 'Inglés'],
            specialty: 'Logística',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        },
        {
            id: 8,
            name: 'Karim Osman',
            role: 'Colaborador',
            experience: '4 años',
            languages: ['Árabe', 'Francés', 'Inglés'],
            specialty: 'Seguridad',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
        },
        {
            id: 9,
            name: 'Sofia Marchal',
            role: 'Influencer',
            experience: '8 años',
            languages: ['Francés', 'Inglés', 'Español'],
            specialty: 'Travel content',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        },
        {
            id: 10,
            name: 'Marcus Rivera',
            role: 'Influencer',
            experience: '9 años',
            languages: ['Inglés', 'Español', 'Francés'],
            specialty: 'Adventure vlogging',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
        },
        {
            id: 11,
            name: 'Elena Petra',
            role: 'Influencer',
            experience: '6 años',
            languages: ['Italiano', 'Inglés', 'Francés'],
            specialty: 'Lifestyle',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
        },
        {
            id: 12,
            name: 'Diego Santos',
            role: 'Influencer',
            experience: '7 años',
            languages: ['Español', 'Inglés', 'Portugués'],
            specialty: 'Fotografía de viaje',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        },
    ],
    Vietnam: [
        {
            id: 20,
            name: 'Linh Pham',
            role: 'Coordinador',
            experience: '11 años',
            languages: ['Vietnamita', 'Inglés', 'Francés'],
            specialty: 'Cultura vietnamita',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        },
        {
            id: 21,
            name: 'Hoa Nguyen',
            role: 'Coordinador',
            experience: '9 años',
            languages: ['Vietnamita', 'Inglés'],
            specialty: 'Cruceros',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
        },
        {
            id: 22,
            name: 'Hung Do',
            role: 'Coordinador',
            experience: '13 años',
            languages: ['Vietnamita', 'Inglés', 'Chino'],
            specialty: 'Trekking y naturaleza',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
        },
        {
            id: 23,
            name: 'Trang Huynh',
            role: 'Coordinador',
            experience: '8 años',
            languages: ['Vietnamita', 'Inglés', 'Francés'],
            specialty: 'Viajes rurales',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        },
        {
            id: 24,
            name: 'Vy Tran',
            role: 'Colaborador',
            experience: '5 años',
            languages: ['Vietnamita', 'Inglés'],
            specialty: 'Comida local',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
        },
        {
            id: 25,
            name: 'Minh Le',
            role: 'Colaborador',
            experience: '6 años',
            languages: ['Vietnamita', 'Inglés'],
            specialty: 'Fotografía',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
        },
        {
            id: 26,
            name: 'Nhu Pham',
            role: 'Colaborador',
            experience: '4 años',
            languages: ['Vietnamita', 'Inglés'],
            specialty: 'Traducción',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        },
        {
            id: 27,
            name: 'Khanh Dang',
            role: 'Colaborador',
            experience: '3 años',
            languages: ['Vietnamita', 'Inglés'],
            specialty: 'Eventos',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
        },
    ],
}

// Fill remaining destinations with similar data
Object.keys(teamMembers).length < destinations.length &&
    destinations.forEach((dest) => {
        if (!teamMembers[dest]) {
            teamMembers[dest] = teamMembers['Marruecos'].map((member, i) => ({
                ...member,
                id: member.id + i * 100,
                name: `${member.name} - ${dest}`,
            }))
        }
    })

export default function Equipo() {
    const [activeDestination, setActiveDestination] = useState(destinations[0])
    const [showMoreCoordinators, setShowMoreCoordinators] = useState(false)
    const [showMoreCollaborators, setShowMoreCollaborators] = useState(false)
    const [showMoreInfluencers, setShowMoreInfluencers] = useState(false)

    const destTeam = teamMembers[activeDestination] || teamMembers['Marruecos']
    const coordinators = destTeam.filter((m) => m.role === 'Coordinador')
    const collaborators = destTeam.filter((m) => m.role === 'Colaborador')
    const influencers = destTeam.filter((m) => m.role === 'Influencer')

    const CoordinatorsShown = showMoreCoordinators ? coordinators : coordinators.slice(0, 4)
    const CollaboratorsShown = showMoreCollaborators ? collaborators : collaborators.slice(0, 4)
    const InfluencersShown = showMoreInfluencers ? influencers : influencers.slice(0, 4)

    const TeamCard = ({ member }: { member: TeamMember }) => (
        <div className="glass-card p-6 space-y-4 hover:border-gold/50 transition-all duration-300 group">
            {/* Image */}
            <div className="relative h-48 rounded-lg overflow-hidden">
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-main via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="space-y-3">
                <div>
                    <h3 className="text-lg font-heading font-bold text-warm-white">
                        {member.name}
                    </h3>
                    <p className="text-gold text-sm font-semibold">{member.role}</p>
                </div>

                <div className="space-y-2 text-sm border-t border-gold/20 pt-3">
                    <div>
                        <p className="text-muted-text text-xs uppercase tracking-widest">
                            Experiencia
                        </p>
                        <p className="text-warm-white">{member.experience}</p>
                    </div>

                    <div>
                        <p className="text-muted-text text-xs uppercase tracking-widest">
                            Idiomas
                        </p>
                        <p className="text-warm-white">{member.languages.join(', ')}</p>
                    </div>

                    <div>
                        <p className="text-muted-text text-xs uppercase tracking-widest">
                            Especialidad
                        </p>
                        <p className="text-warm-white">{member.specialty}</p>
                    </div>
                </div>
            </div>
        </div>
    )

    const renderTeamSection = (
        title: string,
        members: TeamMember[],
        shown: TeamMember[],
        showMore: boolean,
        setShowMore: (val: boolean) => void
    ) => (
        <div className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-warm-white flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-gold" />
                {title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {shown.map((member) => (
                    <TeamCard key={member.id} member={member} />
                ))}
            </div>
            {members.length > 4 && (
                <button
                    onClick={() => setShowMore(!showMore)}
                    className="btn-outline-gold w-full py-3"
                >
                    {showMore ? 'Ver menos' : `Ver más (${members.length - 4})`}
                </button>
            )}
        </div>
    )

    return (
        <section id="equipo" className="py-24 bg-dark-main relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -mr-48 -mb-48"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section header - Centered */}
                <div className="mb-16 space-y-6 text-center">
                    <h2 className="text-5xl sm:text-6xl font-heading font-bold text-warm-white">
                        Equipo
                    </h2>
                    <div className="flex justify-center">
                        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
                    </div>
                    <p className="text-lg text-muted-text max-w-2xl mx-auto">
                        Conoce a los expertos que harán tu viaje inolvidable. Profesionales dedicados con pasión por las aventuras.
                    </p>
                </div>

                {/* Destination tabs */}
                <div className="mb-12 flex justify-center">
                    <div className="flex max-w-5xl flex-wrap justify-center gap-3 pb-4 md:overflow-visible">
                        {destinations.map((destination) => (
                            <button
                                key={destination}
                                onClick={() => {
                                    setActiveDestination(destination)
                                    setShowMoreCoordinators(false)
                                    setShowMoreCollaborators(false)
                                    setShowMoreInfluencers(false)
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

                {/* Team sections */}
                <div className="space-y-16">
                    {renderTeamSection(
                        'Coordinadores',
                        coordinators,
                        CoordinatorsShown,
                        showMoreCoordinators,
                        setShowMoreCoordinators
                    )}
                    {renderTeamSection(
                        'Colaboradores',
                        collaborators,
                        CollaboratorsShown,
                        showMoreCollaborators,
                        setShowMoreCollaborators
                    )}
                    {renderTeamSection(
                        'Influencers',
                        influencers,
                        InfluencersShown,
                        showMoreInfluencers,
                        setShowMoreInfluencers
                    )}
                </div>
            </div>
        </section>
    )
}
