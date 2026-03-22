import { MapPin, Phone, Mail, Clock, Navigation, CreditCard, PawPrint, Wifi, Accessibility } from 'lucide-react'

export default function Contact() {
  const imagePath = (fileName) => `${import.meta.env.BASE_URL}images/${fileName}`

  return (
    <>
      {/* HERO */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={imagePath('tourisme-village-riviere.jpg')}
            alt="Vue des environs de Salavas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/60 to-noir/20" />
        </div>
        <div className="relative z-10 site-shell pb-16 w-full">
          <span className="text-or text-xs tracking-[0.4em] uppercase block mb-4">
            Nous trouver
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-creme text-balance">
            Contact
          </h1>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-24 lg:py-32">
        <div className="site-shell">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Info */}
            <div>
              <span className="text-or text-xs tracking-[0.4em] uppercase block mb-6">
                Nos coordonnees
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-creme mb-10 leading-snug text-balance">
                {"Nous sommes a votre disposition"}
              </h2>

              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 shrink-0 border border-or/30 flex items-center justify-center">
                    <MapPin size={20} className="text-or" />
                  </div>
                  <div>
                    <h3 className="text-creme font-medium mb-1">Adresse</h3>
                    <p className="text-creme/50 text-sm leading-relaxed">
                      {"Hotel des Sites"}
                      <br />
                      {"Salavas, 07150"}
                      <br />
                      {"Ardeche, France"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 shrink-0 border border-or/30 flex items-center justify-center">
                    <Phone size={20} className="text-or" />
                  </div>
                  <div>
                    <h3 className="text-creme font-medium mb-1">{"Telephone"}</h3>
                    <a
                      href="tel:+33475880085"
                      className="text-or hover:text-or-light transition-colors text-lg"
                    >
                      +33 4 75 88 00 85
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 shrink-0 border border-or/30 flex items-center justify-center">
                    <Mail size={20} className="text-or" />
                  </div>
                  <div>
                    <h3 className="text-creme font-medium mb-1">Email</h3>
                    <a
                      href="mailto:contact@hoteldessites.com"
                      className="text-or hover:text-or-light transition-colors"
                    >
                      contact@hoteldessites.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 shrink-0 border border-or/30 flex items-center justify-center">
                    <Clock size={20} className="text-or" />
                  </div>
                  <div>
                    <h3 className="text-creme font-medium mb-1">{"Periodes d'ouverture"}</h3>
                    <p className="text-creme/50 text-sm leading-relaxed">
                      {"Ouvert d'avril a novembre"}
                      <br />
                      {"Fermeture annuelle de novembre a mars"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation links */}
              <div className="mt-12 pt-8 border-t border-gris-border">
                <h3 className="text-xs tracking-[0.3em] uppercase text-or mb-6">{"Itineraire"}</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://www.google.com/maps/search/Hotel+des+Sites+Salavas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 border border-gris-border hover:border-or text-creme/70 hover:text-or text-sm transition-all"
                  >
                    <Navigation size={16} />
                    Google Maps
                  </a>
                  <a
                    href="https://waze.com/ul?q=Hotel+des+Sites+Salavas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 border border-gris-border hover:border-or text-creme/70 hover:text-or text-sm transition-all"
                  >
                    <Navigation size={16} />
                    Waze
                  </a>
                </div>
              </div>
            </div>

            {/* Contact form (non-functional, display only) */}
            <div>
              <div className="bg-noir-card border border-gris-border p-8 lg:p-10">
                <h3 className="font-serif text-2xl text-creme mb-2">{"Formulaire de contact"}</h3>
                <p className="text-creme/40 text-sm mb-8">{"Envoyez-nous un message, nous vous repondrons dans les plus brefs delais."}</p>

                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-creme/60 text-xs tracking-wider uppercase">Nom</label>
                      <input
                        type="text"
                        placeholder="Votre nom"
                        className="bg-noir border border-gris-border px-4 py-3 text-creme text-sm placeholder:text-creme/20 focus:outline-none focus:border-or transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-creme/60 text-xs tracking-wider uppercase">{"Prenom"}</label>
                      <input
                        type="text"
                        placeholder="Votre prenom"
                        className="bg-noir border border-gris-border px-4 py-3 text-creme text-sm placeholder:text-creme/20 focus:outline-none focus:border-or transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-creme/60 text-xs tracking-wider uppercase">Email</label>
                    <input
                      type="email"
                      placeholder="votre@email.com"
                      className="bg-noir border border-gris-border px-4 py-3 text-creme text-sm placeholder:text-creme/20 focus:outline-none focus:border-or transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-creme/60 text-xs tracking-wider uppercase">{"Telephone"}</label>
                    <input
                      type="tel"
                      placeholder="Votre numero"
                      className="bg-noir border border-gris-border px-4 py-3 text-creme text-sm placeholder:text-creme/20 focus:outline-none focus:border-or transition-colors"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-creme/60 text-xs tracking-wider uppercase">{"Arrivee"}</label>
                      <input
                        type="date"
                        className="bg-noir border border-gris-border px-4 py-3 text-creme text-sm focus:outline-none focus:border-or transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-creme/60 text-xs tracking-wider uppercase">{"Depart"}</label>
                      <input
                        type="date"
                        className="bg-noir border border-gris-border px-4 py-3 text-creme text-sm focus:outline-none focus:border-or transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-creme/60 text-xs tracking-wider uppercase">Message</label>
                    <textarea
                      rows="4"
                      placeholder="Votre message..."
                      className="bg-noir border border-gris-border px-4 py-3 text-creme text-sm placeholder:text-creme/20 focus:outline-none focus:border-or transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-or text-noir text-xs tracking-[0.25em] uppercase font-medium hover:bg-or-light transition-colors"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="border-t border-gris-border">
        <div className="relative h-[420px] lg:h-[520px] bg-noir-card">
          <iframe
            title="Carte - Hotel des Sites, Salavas"
            src="https://www.google.com/maps?q=Hotel+des+Sites+Salavas&output=embed"
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir/38 via-transparent to-noir/20 pointer-events-none" />
          <div className="absolute bottom-4 right-4">
            <a
              href="https://www.google.com/maps/search/Hotel+des+Sites+Salavas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-noir/80 border border-or/40 text-or text-xs tracking-wider uppercase hover:bg-noir transition-colors"
            >
              <MapPin size={14} />
              Ouvrir dans Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* PRACTICAL INFO */}
      <section className="py-20 bg-noir-light">
        <div className="site-shell-narrow">
          <h3 className="font-serif text-2xl text-creme mb-10 text-center text-balance">
            {"Informations pratiques"}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Paiements', info: 'CB, cheques vacances, cheques, especes', icon: CreditCard },
              { title: 'Animaux', info: 'Les animaux sont acceptes dans l\'hotel', icon: PawPrint },
              { title: 'Wi-Fi', info: 'Acces Wi-Fi gratuit dans toutes les chambres', icon: Wifi },
              { title: 'Accessibilite', info: 'Pas de chambre accessible PMR actuellement', icon: Accessibility },
            ].map((item, i) => (
              <div key={i} className="p-6 border border-gris-border text-center">
                <item.icon size={20} className="text-or mx-auto mb-4" />
                <h4 className="text-or text-sm tracking-wider uppercase mb-3">{item.title}</h4>
                <p className="text-creme/50 text-sm">{item.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
