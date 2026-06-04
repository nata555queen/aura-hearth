const steps = [
  {
    number: '01',
    title: 'Знакомство',
    description: 'Обсуждаем ваши цели и осматриваем объект. Определяем нужное настроение интерьера.',
  },
  {
    number: '02',
    title: 'Концепция',
    description: 'Создаем визуальный мудборд и смету. Цвет и текстура становятся главными инструментами.',
  },
  {
    number: '03',
    title: 'Реализация',
    description: 'Привозим мебель, декор и наводим уют. Расставляем цветовые акценты для идеального кадра.',
  },
  {
    number: '04',
    title: 'Результат',
    description: 'Профессиональные фото и ключи от нового дома, наполненного жизнью и гармонией.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-xl bg-surface">
      <div className="container-xl">
        <div className="max-w-xl mb-12 md:mb-16">
          <span className="section-label mb-4 block">Как мы работаем</span>
          <h2 className="font-serif text-headline-md md:text-headline-lg text-primary">
            Четыре шага к идеальному пространству
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 md:gap-6 relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-outline-variant" style={{ left: '12%', right: '12%' }} />

          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              <div className="flex items-center gap-4 md:flex-col md:items-start mb-4 md:mb-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 relative z-10">
                  <span className="font-sans text-sm font-medium text-on-primary">{step.number}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="md:hidden flex-1 h-px bg-outline-variant" />
                )}
              </div>
              <h3 className="font-serif text-headline-sm text-primary mb-2">{step.title}</h3>
              <p className="font-sans text-body-md text-on-surface-variant">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
