import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-noir-light border-t border-gris-border">
      <div className="site-shell py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl text-or mb-2">Hotel des Sites</h3>
            <p className="text-xs tracking-[0.3em] uppercase text-gris mb-6">
              Salavas &middot; Ardeche
            </p>
            <p className="text-creme/50 text-sm leading-relaxed">
              {"Un hotel de charme au coeur du village de Salavas, porte d'entree des Gorges de l'Ardeche."}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-or mb-6">Navigation</h4>
            <div className="flex flex-col gap-3">
              {[
                { to: '/', label: 'Accueil' },
                { to: '/hotel', label: "L'Hotel" },
                { to: '/chambres', label: 'Chambres' },
                { to: '/restaurant', label: 'Restaurant' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-creme/50 hover:text-or text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-or mb-6">Contact</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-creme/50 text-sm">
                <MapPin size={16} className="text-or mt-0.5 shrink-0" />
                <span>Salavas, 07150 Ardeche, France</span>
              </div>
              <a href="tel:+33475880085" className="flex items-center gap-3 text-creme/50 hover:text-or text-sm transition-colors">
                <Phone size={16} className="text-or shrink-0" />
                <span>+33 4 75 88 00 85</span>
              </a>
              <a href="mailto:contact@hoteldessites.com" className="flex items-center gap-3 text-creme/50 hover:text-or text-sm transition-colors">
                <Mail size={16} className="text-or shrink-0" />
                <span>contact@hoteldessites.com</span>
              </a>
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-or mb-6">Informations</h4>
            <div className="flex flex-col gap-3 text-creme/50 text-sm">
              <p>{"Cheques vacances acceptes"}</p>
              <p>{"Cartes bancaires & especes"}</p>
              <p>{"Animaux acceptes"}</p>
              <p>Wi-Fi gratuit</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gris-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-creme/30 text-xs tracking-wider">
            {"© 2026 Hotel des Sites. Tous droits reserves."}
          </p>
          <div className="flex items-center gap-1 text-creme/30 text-xs">
            <span className="w-8 h-px bg-or/30" />
            <span className="tracking-[0.3em] uppercase text-or/40">Ardeche</span>
            <span className="w-8 h-px bg-or/30" />
          </div>
        </div>
      </div>
    </footer>
  )
}
