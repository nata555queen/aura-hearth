import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Главная', href: '#home' },
  { label: 'Услуги', href: '#services' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Процесс', href: '#process' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-surface/95 backdrop-blur-sm shadow-card border-b border-outline-variant' : 'bg-transparent'
      }`}
    >
      <div className="container-xl">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="font-serif text-xl text-primary tracking-tight">
            Aura &amp; Hearth
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-sans text-sm font-medium text-on-surface-variant hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="hidden md:flex btn-primary">
            Записаться
          </a>

          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            <span className="material-icons">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </nav>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-outline-variant">
          <div className="container-xl py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-base text-on-surface py-2 border-b border-outline-variant last:border-0"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary mt-2" onClick={() => setMenuOpen(false)}>
              Записаться на консультацию
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
