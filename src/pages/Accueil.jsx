import { Link } from 'react-router-dom'
import { ArrowRight, Star, Utensils, Bed, Mountain } from 'lucide-react'

const features = [
  {
    icon: Bed,
    title: '12 Chambres',
    desc: "De 2 a 4 personnes, decoration provencale, salle d'eau privative",
  },
  {
    icon: Utensils,
    title: 'Restaurant',
    desc: 'Cuisine locale et produits frais, demi-pension disponible',
  },
  {
    icon: Mountain,
    title: 'Nature',
    desc: "A 15 min de la Caverne du Pont d'Arc, depart des Gorges",
  },
  {
    icon: Star,
    title: 'Convivialite',
    desc: 'Marie-Odile et Thierry vous accueillent comme chez vous',
  },
]

const tourismHighlights = [
  {
    image: 'tourisme-gorges-ardeche.jpg',
    alt: "Vue panoramique sur les Gorges de l'Ardeche",
    title: "Les Gorges de l'Ardeche",
    description: "A quelques minutes de l'hotel, profitez de panoramas spectaculaires, de routes mythiques et de belvederes au-dessus de la riviere.",
  },
  {
    image: 'tourisme-village-riviere.jpg',
    alt: 'Village en bord de riviere en Ardeche',
    title: 'Villages de caractere',
    description: "Baladez-vous dans les villages de pierre, entre ruelles anciennes, terrasses ombragees et berges paisibles.",
  },
  {
    image: 'tourisme-viaduc-riviere.jpg',
    alt: 'Viaduc au-dessus de la riviere',
    title: 'Patrimoine & paysages',
    description: "Entre ponts, rivieres et reliefs calcaires, la region offre des haltes photo tres fortes tout au long du sejour.",
  },
  {
    image: 'tourisme-chevres-rochers.jpg',
    alt: 'Chevres sur des rochers',
    title: 'Nature vivante',
    description: "Randonnees, faune locale et grands espaces composent un decor ideal pour un sejour tourne vers la nature.",
  },
]

export default function Accueil() {
  const imagePath = (fileName) => `${import.meta.env.BASE_URL}images/${fileName}`
  const marketingPath = (fileName) => `${import.meta.env.BASE_URL}marketing/${fileName}`

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={marketingPath('Hotel.png')}
            alt="Hotel des Sites - Facade"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-noir/70 via-noir/40 to-noir" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-12 h-px bg-or" />
            <span className="text-or text-xs tracking-[0.4em] uppercase font-light">
              Salavas &middot; Ardeche
            </span>
            <span className="w-12 h-px bg-or" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-creme mb-6 leading-tight text-balance">
            Hotel des Sites
          </h1>
          <p className="text-creme/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            {"Un hotel de charme au coeur du village de Salavas, porte d'entree des Gorges de l'Ardeche"}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/chambres"
              className="px-10 py-4 bg-or text-noir text-xs tracking-[0.25em] uppercase font-medium hover:bg-or-light transition-colors duration-300"
            >
              Decouvrir nos chambres
            </Link>
            <Link
              to="/restaurant"
              className="px-10 py-4 border border-creme/30 text-creme text-xs tracking-[0.25em] uppercase hover:border-or hover:text-or transition-all duration-300"
            >
              Le Restaurant
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-creme/30 text-[10px] tracking-[0.3em] uppercase">Defiler</span>
          <div className="w-px h-8 bg-gradient-to-b from-or/60 to-transparent" />
        </div>
      </section>

      {/* INTRO */}
      <section className="py-28 lg:py-36">
        <div className="site-shell">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="text-center lg:text-left">
              <span className="text-or text-xs tracking-[0.4em] uppercase block mb-6">
                Bienvenue
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-creme mb-8 leading-snug text-balance">
                {"Un havre de paix en Ardeche"}
              </h2>
              <p className="text-creme/60 leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
                {"A Salavas, petit village de caractere, a 15 minutes de la Caverne du Pont d'Arc, proche de la riviere et de Vallon Pont d'Arc, a 5 km environ du Pont d'Arc, depart des Gorges de l'Ardeche."}
              </p>
              <p className="text-creme/60 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                {"Marie-Odile et Thierry vous accueillent avec convivialite, dans une ambiance familiale, pour un sejour memorable au coeur de la nature ardechoise."}
              </p>
              <Link
                to="/hotel"
                className="inline-flex items-center gap-3 text-or text-sm tracking-[0.15em] uppercase group"
              >
                <span className="group-hover:translate-x-1 transition-transform">{"Decouvrir l'hotel"}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border border-or/20" />
              <img
                src={marketingPath('terrasse-privative-soleil.png')}
                alt="Terrasse privative de l'hotel"
                className="relative w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-32 lg:py-40 bg-noir-light">
        <div className="site-shell">
          <div className="text-center mb-20">
            <span className="text-or text-xs tracking-[0.4em] uppercase block mb-4">
              Nos Services
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-creme text-balance">
              {"Tout pour un sejour inoubliable"}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {features.map((f, i) => (
              <div
                key={i}
                className="group p-10 lg:p-12 border border-gris-border hover:border-or/40 transition-all duration-500 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-6 border border-or/30 flex items-center justify-center group-hover:bg-or/10 transition-colors">
                  <f.icon size={22} className="text-or" />
                </div>
                <h3 className="font-serif text-lg text-creme mb-3">{f.title}</h3>
                <p className="text-creme/50 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOURISM */}
      <section className="py-28 lg:py-36 bg-noir-light">
        <div className="site-shell">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <span className="text-or text-xs tracking-[0.4em] uppercase block mb-4">
                Autour de Salavas
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-creme mb-6 text-balance">
                {"Des visites et activites a deux pas de l'hotel"}
              </h2>
              <p className="text-creme/60 leading-relaxed">
                {"Sejourner ici, c'est aussi profiter des paysages ardechois, des villages de caractere et des sorties nature accessibles tres rapidement depuis Salavas."}
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 text-or text-sm tracking-[0.15em] uppercase group"
            >
              <span className="group-hover:translate-x-1 transition-transform">Organiser votre sejour</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {tourismHighlights.map((item) => (
              <article
                key={item.title}
                className="group border border-gris-border bg-noir-card overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img
                    src={imagePath(item.image)}
                    alt={item.alt}
                    className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-creme mb-3">{item.title}</h3>
                  <p className="text-creme/55 text-sm leading-relaxed">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ROOMS PREVIEW */}
      <section className="py-28 lg:py-36">
        <div className="site-shell">
          <div className="mb-20 text-center">
            <div>
              <span className="text-or text-xs tracking-[0.4em] uppercase block mb-4">
                Nos Chambres
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-creme text-balance">
                {"Confort & caractere provencal"}
              </h2>
            </div>
            <Link
              to="/chambres"
              className="inline-flex items-center gap-3 text-or text-sm tracking-[0.15em] uppercase group mt-6"
            >
              <span>Voir toutes les chambres</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: marketingPath('chambre.png'), title: 'Chambre Double', price: 'Des 75' },
              { img: marketingPath('chambre.png'), title: 'Chambre Terrasse', price: 'Des 90' },
              { img: marketingPath('chambre.png'), title: 'Chambre Familiale', price: 'Des 110' },
            ].map((room, i) => (
              <Link to="/chambres" key={i} className="group cursor-pointer text-center">
                <div className="overflow-hidden mb-4">
                  <img
                    src={room.img}
                    alt={room.title}
                    className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <h3 className="font-serif text-lg text-creme group-hover:text-or transition-colors">{room.title}</h3>
                  <span className="text-or text-sm">{room.price}{"€"}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RESTAURANT TEASER */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={marketingPath('cuisine-mijote-ardechois.png')}
            alt="Cuisine regionale de l'Hotel des Sites"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-noir/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-or text-xs tracking-[0.4em] uppercase block mb-6">
            Gastronomie
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-creme mb-8 text-balance">
            {"Notre Restaurant"}
          </h2>
          <p className="text-creme/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            {"Decouvrez notre cuisine raffinee, preparee avec des produits locaux et de saison. Une experience culinaire au coeur de l'Ardeche."}
          </p>
          <Link
            to="/restaurant"
            className="inline-block px-10 py-4 bg-or text-noir text-xs tracking-[0.25em] uppercase font-medium hover:bg-or-light transition-colors duration-300"
          >
            Decouvrir la carte
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-creme mb-6 text-balance">
            {"Pret pour l'aventure ardechoise ?"}
          </h2>
          <p className="text-creme/50 mb-10 max-w-xl mx-auto">
            {"Reservez votre sejour et profitez de la nature, de la gastronomie et du charme de Salavas."}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-10 py-4 bg-or text-noir text-xs tracking-[0.25em] uppercase font-medium hover:bg-or-light transition-colors"
            >
              Nous contacter
            </Link>
            <a
              href="tel:+33475880085"
              className="px-10 py-4 border border-gris-border text-creme/70 text-xs tracking-[0.25em] uppercase hover:border-or hover:text-or transition-all"
            >
              Appeler directement
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
