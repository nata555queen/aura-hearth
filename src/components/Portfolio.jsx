import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'Апартаменты Riverside',
    tag: 'СТЕЙДЖИНГ',
    description: 'Полный хоумстейджинг и озеленение для люксовых апартаментов.',
    before: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
  {
    id: 2,
    title: 'Загородный дом в Котсуолде',
    tag: 'РЕДИЗАЙН',
    description: 'Традиционное очарование в сочетании с современным минимализмом.',
    before: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  },
  {
    id: 3,
    title: 'Городской оазис',
    tag: 'КОНСУЛЬТАЦИЯ',
    description: 'Реновация жилого пространства с акцентом на чувственное спокойствие.',
    before: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
  },
  {
    id: 4,
    title: 'Творческая студия',
    tag: 'СТЕЙДЖИНГ',
    description: 'Индивидуальное рабочее пространство для вдохновения.',
    before: 'https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
  },
]

function BeforeAfterSlider({ before, after, title }) {
  const [sliderPos, setSliderPos] = useState(50)
  const [dragging, setDragging] = useState(false)

  const handleMove = (clientX, rect) => {
    const x = clientX - rect.left
    const pct = Math.min(Math.max((x / rect.width) * 100, 0), 100)
    setSliderPos(pct)
  }

  const onMouseMove = (e) => {
    if (!dragging) return
    handleMove(e.clientX, e.currentTarget.getBoundingClientRect())
  }

  const onTouchMove = (e) => {
    handleMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect())
  }

  return (
    <div
      className="relative w-full h-56 sm:h-64 md:h-72 select-none overflow-hidden rounded-t-lg cursor-col-resize"
      onMouseMove={onMouseMove}
      onMouseDown={(e) => {
        setDragging(true)
        handleMove(e.clientX, e.currentTarget.getBoundingClientRect())
      }}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
      onTouchMove={onTouchMove}
      onTouchStart={(e) => handleMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect())}
    >
      <img src={before} alt={`До — ${title}`} className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img src={after} alt={`После — ${title}`} className="absolute inset-0 w-full h-full object-cover" />
      </div>

      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <span className="material-icons text-primary text-base">unfold_more</span>
        </div>
      </div>

      <span className="absolute top-3 left-3 chip bg-primary/80 text-on-primary text-xs">До</span>
      <span className="absolute top-3 right-3 chip bg-primary/80 text-on-primary text-xs">После</span>
    </div>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-xl bg-surface-container-low">
      <div className="container-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <span className="section-label mb-4 block">Portfolio Piece</span>
            <h2 className="font-serif text-headline-md md:text-headline-lg text-primary">
              Магия трансформации
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-serif text-headline-md text-secondary">34+</span>
            <p className="font-sans text-sm text-on-surface-variant max-w-xs">
              проектов реализовано в этом году
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p) => (
            <div key={p.id} className="bg-surface rounded-lg shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden group">
              <BeforeAfterSlider before={p.before} after={p.after} title={p.title} />
              <div className="p-6">
                <span className="chip bg-tertiary-fixed text-tertiary mb-3">{p.tag}</span>
                <h3 className="font-serif text-headline-sm text-primary mb-2">{p.title}</h3>
                <p className="font-sans text-body-md text-on-surface-variant">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
