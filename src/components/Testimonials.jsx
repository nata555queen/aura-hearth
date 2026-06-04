import { useState } from 'react'

const testimonials = [
  {
    text: 'Aura & Hearth превратили нашу пустую квартиру в дом, который ощущается жилым и глубоко продуманным. Результаты были мгновенными — мы продали объект выше запрашиваемой цены.',
    author: 'Елена Соколова',
    role: 'Девелопер',
    rating: 5,
  },
  {
    text: 'Внимание к деталям потрясающее. Каждая ваза, каждая книга, каждая тень были намеренными. Это не просто стейджинг — это высокое искусство для дома.',
    author: 'Марк Волков',
    role: 'Частный домовладелец',
    rating: 5,
  },
  {
    text: 'Квартира простояла 8 месяцев без покупателей. После работы Aura & Hearth мы продали её за 2 недели и на 12% дороже первоначальной цены.',
    author: 'Анастасия Морозова',
    role: 'Риэлтор',
    rating: 5,
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const t = testimonials[active]

  return (
    <section className="py-20 md:py-xl bg-surface-container-high">
      <div className="container-xl">
        <div className="max-w-xl mb-12">
          <span className="section-label mb-4 block">Отзывы клиентов</span>
          <h2 className="font-serif text-headline-md md:text-headline-lg text-primary">
            Говорят наши клиенты
          </h2>
        </div>

        <div className="max-w-3xl">
          <div className="flex gap-1 mb-6">
            {Array.from({ length: t.rating }).map((_, i) => (
              <span key={i} className="material-icons text-secondary text-xl">star</span>
            ))}
          </div>

          <blockquote className="font-serif text-headline-sm md:text-headline-md text-primary mb-8 leading-relaxed">
            &ldquo;{t.text}&rdquo;
          </blockquote>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-sans font-medium text-primary">{t.author}</p>
              <p className="font-sans text-sm text-on-surface-variant">{t.role}</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors duration-200"
                aria-label="Предыдущий"
              >
                <span className="material-icons text-base">arrow_back</span>
              </button>
              <button
                onClick={() => setActive((active + 1) % testimonials.length)}
                className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors duration-200"
                aria-label="Следующий"
              >
                <span className="material-icons text-base">arrow_forward</span>
              </button>
            </div>
          </div>

          <div className="flex gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-0.5 transition-all duration-300 rounded-full ${
                  i === active ? 'w-8 bg-primary' : 'w-4 bg-outline-variant'
                }`}
                aria-label={`Отзыв ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
