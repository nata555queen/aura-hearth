export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-surface">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-surface/30 via-surface/10 to-surface/60" />

      <div className="container-xl relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-2xl">
          <span className="section-label mb-6 block">Premium Home Staging</span>

          <h1 className="font-serif font-normal text-primary text-balance mb-6
            text-headline-mobile leading-tight
            md:text-headline-lg
            lg:text-display-lg">
            Превращаем квартиры<br />в объекты мечты
          </h1>

          <p className="font-sans text-body-lg text-on-surface-variant mb-10 max-w-lg text-balance">
            Создаем пространства, которые продают себя сами — через эстетику, уют и безупречный стиль.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary">
              Узнать стоимость
            </a>
            <a href="#portfolio" className="btn-secondary">
              Смотреть проекты
            </a>
          </div>
        </div>

        <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-outline-variant pt-10">
          {[
            { value: '150+', label: 'Объектов готово' },
            { value: '12', label: 'Дней на продажу' },
            { value: '12%', label: 'Прирост цены' },
            { value: '4.9', label: 'Рейтинг клиентов' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-headline-md text-primary mb-1">{stat.value}</p>
              <p className="font-sans text-sm text-on-surface-variant">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
