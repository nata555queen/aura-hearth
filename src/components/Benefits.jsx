const benefits = [
  {
    icon: 'speed',
    title: 'Быстрая продажа',
    description:
      'Объекты с нашим стейджингом продаются в 2.5 раза быстрее, чем пустые или захламленные квартиры.',
  },
  {
    icon: 'trending_up',
    title: 'Выше стоимость',
    description:
      'Профессиональная упаковка интерьера позволяет повысить рыночную цену объекта на 10–15%.',
  },
  {
    icon: 'auto_awesome',
    title: 'Эстетика жизни',
    description:
      'Мы создаем не просто картинку, а атмосферу дома, в который хочется переехать сразу после просмотра.',
  },
]

export default function Benefits() {
  return (
    <section className="bg-surface-container-low py-20 md:py-xl">
      <div className="container-xl">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-surface rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary-container flex items-center justify-center mb-6 group-hover:bg-primary-container transition-colors duration-300">
                <span className="material-icons text-secondary group-hover:text-on-primary transition-colors duration-300">
                  {b.icon}
                </span>
              </div>
              <h3 className="font-serif text-headline-sm text-primary mb-3">{b.title}</h3>
              <p className="font-sans text-body-md text-on-surface-variant">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
