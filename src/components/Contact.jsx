import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-20 md:py-xl bg-primary">
      <div className="container-xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <span className="section-label text-inverse-primary mb-4 block">Записаться</span>
            <h2 className="font-serif text-headline-md md:text-headline-lg text-on-primary mb-6">
              Готовы преобразить ваше пространство?
            </h2>
            <p className="font-sans text-body-lg text-inverse-primary mb-8">
              Запишитесь на консультацию, и мы привнесем «Искусство жизни» в ваш дом.
            </p>

            <div className="space-y-4">
              {[
                { icon: 'phone', text: '+7 (999) 000-00-00' },
                { icon: 'mail', text: 'hello@aura-hearth.ru' },
                { icon: 'location_on', text: 'Москва и Подмосковье' },
              ].map((c) => (
                <div key={c.icon} className="flex items-center gap-3">
                  <span className="material-icons text-inverse-primary">{c.icon}</span>
                  <span className="font-sans text-body-md text-on-primary">{c.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface rounded-xl p-8 shadow-card-hover">
            {sent ? (
              <div className="text-center py-8">
                <span className="material-icons text-5xl text-secondary mb-4 block">check_circle</span>
                <h3 className="font-serif text-headline-sm text-primary mb-2">Заявка отправлена!</h3>
                <p className="font-sans text-body-md text-on-surface-variant">
                  Мы свяжемся с вами в течение 2 часов.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-sans text-sm font-medium text-on-surface-variant mb-1.5 block">
                    Имя
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ваше имя"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg font-sans text-body-md text-on-surface placeholder-outline focus:outline-none focus:border-primary transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="font-sans text-sm font-medium text-on-surface-variant mb-1.5 block">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (___) ___-__-__"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg font-sans text-body-md text-on-surface placeholder-outline focus:outline-none focus:border-primary transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="font-sans text-sm font-medium text-on-surface-variant mb-1.5 block">
                    Услуга
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg font-sans text-body-md text-on-surface focus:outline-none focus:border-primary transition-colors duration-200 appearance-none"
                  >
                    <option value="">Выберите услугу</option>
                    <option>Консультация — 15 000 ₽</option>
                    <option>Полный хоумстейджинг — от 80 000 ₽</option>
                    <option>Редизайн для жизни — от 45 000 ₽</option>
                  </select>
                </div>

                <div>
                  <label className="font-sans text-sm font-medium text-on-surface-variant mb-1.5 block">
                    Сообщение
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Расскажите о вашем объекте..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg font-sans text-body-md text-on-surface placeholder-outline focus:outline-none focus:border-primary transition-colors duration-200 resize-none"
                  />
                </div>

                <button type="submit" className="w-full btn-primary justify-center py-4">
                  Отправить заявку
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
