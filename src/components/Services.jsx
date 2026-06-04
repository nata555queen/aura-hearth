const services = [
  {
    tag: '1.5 ЧАСА',
    title: 'Консультация',
    description:
      'Профессиональный аудит вашего пространства. Мы найдем скрытый потенциал, дадим рекомендации по расстановке мебели, освещению и декору.',
    price: '15 000 ₽',
    features: ['Аудит пространства', 'Рекомендации по расстановке', 'Советы по освещению и декору'],
  },
  {
    tag: 'ПОД КЛЮЧ',
    title: 'Полный хоумстейджинг',
    description:
      'Комплексная подготовка объекта для продажи или аренды. Включает закупку декора, аренду мебели и финальную фотосъемку для объявлений.',
    price: 'от 80 000 ₽',
    featured: true,
    features: ['Закупка декора', 'Аренда мебели', 'Финальная фотосъемка', 'Полная подготовка к показу'],
  },
  {
    tag: 'ОБНОВЛЕНИЕ',
    title: 'Редизайн для жизни',
    description:
      'Обновление вашего текущего интерьера без пыли и стройки. Работаем с тем, что есть, добавляя нужные акценты для вашего комфорта.',
    price: 'от 45 000 ₽',
    features: ['Работа с имеющейся мебелью', 'Обновление декора и текстиля', 'Персональная цветовая палитра'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-xl bg-surface">
      <div className="container-xl">
        <div className="max-w-xl mb-12 md:mb-16">
          <span className="section-label mb-4 block">Наши услуги</span>
          <h2 className="font-serif text-headline-md md:text-headline-lg text-primary mb-4">
            Искусство жить
          </h2>
          <p className="font-sans text-body-lg text-on-surface-variant">
            Мы создаем пространства, которые вызывают чувства. От быстрой консультации до полного преображения вашего дома.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className={`relative rounded-xl p-8 flex flex-col transition-shadow duration-300 hover:shadow-card-hover ${
                s.featured
                  ? 'bg-primary-container text-on-primary shadow-card-hover'
                  : 'bg-surface-container shadow-card border border-outline-variant'
              }`}
            >
              {s.featured && (
                <span className="absolute -top-3 left-8 bg-secondary-container text-on-secondary-container text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full">
                  Популярное
                </span>
              )}

              <div className="mb-6">
                <span
                  className={`chip text-xs mb-4 ${
                    s.featured
                      ? 'bg-white/10 text-inverse-primary'
                      : 'bg-tertiary-fixed text-tertiary'
                  }`}
                >
                  {s.tag}
                </span>
                <h3
                  className={`font-serif text-headline-sm mb-3 ${
                    s.featured ? 'text-on-primary' : 'text-primary'
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`font-sans text-body-md ${
                    s.featured ? 'text-inverse-primary' : 'text-on-surface-variant'
                  }`}
                >
                  {s.description}
                </p>
              </div>

              <ul className="flex-1 space-y-2 mb-8">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span
                      className={`material-icons text-base mt-0.5 flex-shrink-0 ${
                        s.featured ? 'text-inverse-primary' : 'text-secondary'
                      }`}
                    >
                      check_circle
                    </span>
                    <span
                      className={`font-sans text-sm ${
                        s.featured ? 'text-inverse-primary' : 'text-on-surface-variant'
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex items-end justify-between gap-4 pt-6 border-t border-white/10">
                <p
                  className={`font-serif text-headline-sm ${
                    s.featured ? 'text-on-primary' : 'text-primary'
                  }`}
                >
                  {s.price}
                </p>
                <a
                  href="#contact"
                  className={`btn-secondary text-xs px-4 py-2 ${
                    s.featured
                      ? 'border-white/30 text-on-primary hover:bg-white/10'
                      : ''
                  }`}
                >
                  Заказать
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
