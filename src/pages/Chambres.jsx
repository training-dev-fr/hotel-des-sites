import { Link } from 'react-router-dom'
import { Users, Maximize, Wifi, Droplets, ArrowRight } from 'lucide-react'

const rooms = [
  {
    title: 'Chambre Double',
    desc: 'Chambre intime pour 2 personnes avec decoration provencale, salle d\'eau privative et Wi-Fi gratuit.',
    img: 'chambre.png',
    capacity: '2 personnes',
    size: '18 m²',
    price: '75',
    features: ['Salle d\'eau privative', 'Wi-Fi gratuit', 'Decoration provencale'],
  },
  {
    title: 'Chambre Terrasse',
    desc: 'Profitez d\'une terrasse privee avec vue sur le village. Ideale pour se detendre sous le soleil ardechois.',
    img: 'chambre.png',
    capacity: '2 personnes',
    size: '22 m²',
    price: '90',
    features: ['Terrasse privee', 'Vue village', 'Salle d\'eau privative', 'Wi-Fi gratuit'],
  },
  {
    title: 'Chambre Triple',
    desc: 'Chambre spacieuse pour 3 personnes, parfaite pour un sejour entre amis ou en famille.',
    img: 'chambre.png',
    capacity: '3 personnes',
    size: '24 m²',
    price: '95',
    features: ['Salle d\'eau privative', 'Wi-Fi gratuit', 'Espace genereux'],
  },
  {
    title: 'Chambre Familiale',
    desc: 'Notre chambre la plus spacieuse, pour 4 personnes. Tout le confort pour un sejour en famille.',
    img: 'chambre.png',
    capacity: '4 personnes',
    size: '28 m²',
    price: '110',
    features: ['Salle d\'eau privative', 'Wi-Fi gratuit', 'Spacieuse', 'Ideale famille'],
  },
]

export default function Chambres() {
  const imagePath = (fileName) => `${import.meta.env.BASE_URL}images/${fileName}`
  const marketingPath = (fileName) => `${import.meta.env.BASE_URL}marketing/${fileName}`

  return (
    <>
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={marketingPath('chambre.png')}
            alt="Chambre de l'Hotel des Sites"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/60 to-noir/20" />
        </div>
        <div className="relative z-10 site-shell pb-16 w-full">
          <span className="text-or text-xs tracking-[0.4em] uppercase block mb-4">
            Sejour
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-creme text-balance">
            Nos Chambres
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="site-shell-narrow text-center">
          <p className="text-creme/60 text-lg leading-relaxed text-pretty">
            {"Nos 12 chambres de 2, 3 ou 4 personnes, avec salle d'eau et toilettes, decoration de style provencal, vous offriront un sejour agreable. Certaines chambres possedent une terrasse qui vous permettra de vous relaxer sous le soleil ardechois."}
          </p>
        </div>
      </section>

      {/* ROOMS LIST */}
      <section className="pb-24">
        <div className="site-shell">
          <div className="flex flex-col gap-20">
            {rooms.map((room, i) => (
              <div
                key={i}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={marketingPath(room.img)}
                    alt={room.title}
                    className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Details */}
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl text-creme mb-4">
                    {room.title}
                  </h2>
                  <p className="text-creme/60 leading-relaxed mb-8">{room.desc}</p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-6 mb-8">
                    <div className="flex items-center gap-2 text-creme/50 text-sm">
                      <Users size={16} className="text-or" />
                      <span>{room.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2 text-creme/50 text-sm">
                      <Maximize size={16} className="text-or" />
                      <span>{room.size}</span>
                    </div>
                    <div className="flex items-center gap-2 text-creme/50 text-sm">
                      <Wifi size={16} className="text-or" />
                      <span>Wi-Fi</span>
                    </div>
                    <div className="flex items-center gap-2 text-creme/50 text-sm">
                      <Droplets size={16} className="text-or" />
                      <span>{"Salle d'eau"}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {room.features.map((f, fi) => (
                      <span
                        key={fi}
                        className="px-4 py-1.5 border border-gris-border text-creme/60 text-xs tracking-wider"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-creme/40 text-xs tracking-wider uppercase">A partir de</span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif text-4xl text-or">{room.price}</span>
                        <span className="text-or text-lg">{"€"}</span>
                        <span className="text-creme/40 text-sm ml-1">/ nuit</span>
                      </div>
                    </div>
                    <Link
                      to="/contact"
                      className="px-8 py-3 bg-or text-noir text-xs tracking-[0.2em] uppercase font-medium hover:bg-or-light transition-colors"
                    >
                      Reserver
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXTRA INFO */}
      <section className="py-20 bg-noir-light">
        <div className="site-shell-narrow text-center">
          <h3 className="font-serif text-2xl text-creme mb-6 text-balance">
            {"Informations complementaires"}
          </h3>
          <p className="text-creme/50 leading-relaxed mb-6">
            {"Au second etage, une petite terrasse avec vue panoramique sur le vieux village est a disposition de nos hotes. Un salon avec une bibliotheque et des jeux de societe est a votre disposition. Un garage ferme pourra abriter vos motos et velos."}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 text-or text-sm tracking-[0.15em] uppercase group"
          >
            <span>Nous contacter pour reserver</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  )
}
