import { Link } from 'react-router-dom'
import { Wifi, Car, Dog, CreditCard, BookOpen, Sun, ArrowRight } from 'lucide-react'

const services = [
  { icon: Wifi, label: 'Wi-Fi gratuit dans tout l\'hotel' },
  { icon: Car, label: 'Garage ferme pour motos et velos' },
  { icon: Dog, label: 'Animaux acceptes' },
  { icon: CreditCard, label: 'CB, cheques vacances, especes' },
  { icon: BookOpen, label: 'Salon, bibliotheque & jeux de societe' },
  { icon: Sun, label: 'Terrasse panoramique au 2nd etage' },
]

export default function Hotel() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-hotel.jpg"
            alt="Hotel des Sites - Facade"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/50 to-transparent" />
        </div>
        <div className="relative z-10 site-shell pb-16 w-full">
          <span className="text-or text-xs tracking-[0.4em] uppercase block mb-4">
            {"Decouvrir"}
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-creme text-balance">
            {"L'Hotel"}
          </h1>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 lg:py-32">
        <div className="site-shell">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/images/terrasse.jpg"
                alt="Vue panoramique depuis la terrasse"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-or text-xs tracking-[0.4em] uppercase block mb-6">
                Notre Histoire
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-creme mb-8 leading-snug text-balance">
                {"Un hotel convivial au coeur de l'Ardeche"}
              </h2>
              <div className="flex flex-col gap-6 text-creme/60 leading-relaxed">
                <p>
                  {"A Salavas, petit village de caractere, a 15 minutes de la Caverne du Pont d'Arc, proche de la riviere et de Vallon Pont d'Arc, a 5 km environ du Pont d'Arc, depart des Gorges de l'Ardeche."}
                </p>
                <p>
                  {"A proximite, vous pourrez trouver quelques commerces et des locations de canoes kayaks. Marie-Odile et Thierry vous accueillent avec convivialite, dans une ambiance familiale."}
                </p>
                <p>
                  {"Ses 12 chambres avec acces Wi-Fi gratuit, de 2, 3 ou 4 personnes, avec salle d'eau et toilettes, decoration de style provencal, vous offriront un sejour agreable."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-noir-light">
        <div className="site-shell">
          <div className="text-center mb-16">
            <span className="text-or text-xs tracking-[0.4em] uppercase block mb-4">
              Services
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-creme text-balance">
              {"A votre disposition"}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-5 p-6 border border-gris-border hover:border-or/30 transition-colors"
              >
                <div className="w-12 h-12 shrink-0 border border-or/30 flex items-center justify-center">
                  <s.icon size={20} className="text-or" />
                </div>
                <span className="text-creme/80 text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BREAKFAST */}
      <section className="py-24 lg:py-32">
        <div className="site-shell">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <span className="text-or text-xs tracking-[0.4em] uppercase block mb-6">
                Chaque matin
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-creme mb-8 leading-snug text-balance">
                {"Petit-dejeuner copieux"}
              </h2>
              <p className="text-creme/60 leading-relaxed mb-8">
                {"Nos petits-dejeuners copieux vous permettront de debuter la journee en pleine forme : boisson chaude, jus d'orange, pain frais, beurre et confiture, miel, yaourt et crepes maison."}
              </p>
              <div className="flex flex-col gap-3">
                {['Boissons chaudes', 'Jus d\'orange frais', 'Pain, beurre & confiture', 'Miel local', 'Yaourts', 'Crepes maison'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-or rounded-full" />
                    <span className="text-creme/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-or/20" />
              <img
                src="/images/plat-2.jpg"
                alt="Petit-dejeuner"
                className="relative w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HALF-BOARD INFO */}
      <section className="py-20 bg-noir-light">
        <div className="site-shell-narrow text-center">
          <span className="text-or text-xs tracking-[0.4em] uppercase block mb-4">
            Demi-pension
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-creme mb-8 text-balance">
            {"La formule complete"}
          </h2>
          <p className="text-creme/60 leading-relaxed mb-10 max-w-2xl mx-auto">
            {"Sur reservation, possibilite de la formule demi-pension uniquement en hors saison, d'avril a juin et de septembre a novembre (chambre, repas du soir et petit-dejeuner)."}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/restaurant"
              className="inline-flex items-center gap-3 text-or text-sm tracking-[0.15em] uppercase group"
            >
              <span>Voir le restaurant</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <span className="text-gris">|</span>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 text-or text-sm tracking-[0.15em] uppercase group"
            >
              <span>Reserver</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
