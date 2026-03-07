import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/hotel', label: "L'Hotel" },
  { to: '/chambres', label: 'Chambres' },
  { to: '/restaurant', label: 'Restaurant' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-noir/95 backdrop-blur-md border-b border-gris-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="site-shell">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start group">
            <span className="font-serif text-xl lg:text-2xl font-semibold text-or tracking-wide group-hover:text-or-light transition-colors">
              Hotel des Sites
            </span>
            <span className="text-[10px] lg:text-xs tracking-[0.3em] uppercase text-gris font-light">
              Salavas &middot; Ardeche
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm tracking-[0.15em] uppercase transition-colors duration-300 ${
                  location.pathname === link.to
                    ? 'text-or'
                    : 'text-creme/70 hover:text-or-light'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+33475880085"
              className="flex items-center gap-2 text-creme/60 hover:text-or transition-colors text-sm"
            >
              <Phone size={14} />
              <span>04 75 88 00 85</span>
            </a>
            <Link
              to="/contact"
              className="px-6 py-2.5 border border-or text-or text-xs tracking-[0.2em] uppercase hover:bg-or hover:text-noir transition-all duration-300"
            >
              Reserver
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-creme hover:text-or transition-colors"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-noir/98 backdrop-blur-md border-t border-gris-border px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm tracking-[0.2em] uppercase transition-colors ${
                location.pathname === link.to
                  ? 'text-or'
                  : 'text-creme/70 hover:text-or-light'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-gris-border flex flex-col gap-4">
            <a
              href="tel:+33475880085"
              className="flex items-center gap-2 text-creme/60 text-sm"
            >
              <Phone size={14} />
              <span>04 75 88 00 85</span>
            </a>
            <Link
              to="/contact"
              className="text-center px-6 py-3 border border-or text-or text-xs tracking-[0.2em] uppercase hover:bg-or hover:text-noir transition-all"
            >
              Reserver
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
