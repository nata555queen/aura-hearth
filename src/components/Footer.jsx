const socials = [
  { name: 'Instagram', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'Pinterest', href: '#' },
]

const links = [
  { label: 'Услуги', href: '#services' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Процесс', href: '#process' },
  { label: 'Контакты', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-outline-variant py-12 md:py-16">
      <div className="container-xl">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-10">
          <div>
            <a href="#home" className="font-serif text-xl text-primary mb-3 block">
              Aura &amp; Hearth
            </a>
            <p className="font-sans text-sm text-on-surface-variant max-w-xs">
              Профессиональный хоумстейджинг и интерьерный стайлинг в премиальных объектах.
            </p>
          </div>

          <div>
            <p className="section-label mb-4">Навигация</p>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-label mb-4">Соцсети</p>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors duration-200 border-b border-outline-variant pb-0.5 hover:border-primary"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-outline-variant">
          <p className="font-sans text-sm text-on-surface-variant">
            © 2025 Aura &amp; Hearth. The Art of Living.
          </p>
          <a
            href="#"
            className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors duration-200"
          >
            Условия использования
          </a>
        </div>
      </div>
    </footer>
  )
}
