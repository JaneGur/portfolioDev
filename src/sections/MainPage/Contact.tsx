export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-navy-900 relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="text-sm font-medium text-slate-300 uppercase tracking-wide mb-4 md:mb-6">Контакты</div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white/30 mb-4 md:mb-6 leading-tight md:leading-none px-4">
            ОБСУДИМ ВАШ ПРОЕКТ
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto mt-4 md:mt-6 px-4">
            Свяжитесь любым удобным способом. Отвечаю в течение 2 часов.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="contact-card">
            <div className="flex items-start space-x-4">
              <div className="contact-icon-wrapper bg-electric-blue/20">
                <i className="fas fa-envelope text-electric-blue"></i>
              </div>
              <div className="flex-1">
                <h3 className="contact-title">Email</h3>
                <a 
                  href="mailto:evgeniyagursieva@gmail.com"
                  className="contact-link"
                >
                  evgeniyagursieva@gmail.com
                </a>
                <p className="contact-description">Отвечаю в течение 2 часов</p>
              </div>
            </div>
          </div>
          
          <div className="contact-card">
            <div className="flex items-start space-x-4">
              <div className="contact-icon-wrapper bg-emerald-400/20">
                <i className="fab fa-telegram text-emerald-400"></i>
              </div>
              <div className="flex-1">
                <h3 className="contact-title">Telegram</h3>
                <a 
                  href="https://t.me/gurtsievae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  @gurtsievae
                </a>
                <p className="contact-description">Быстрый ответ в мессенджере</p>
              </div>
            </div>
          </div>
          
          <div className="contact-card">
            <div className="flex items-start space-x-4">
              <div className="contact-icon-wrapper bg-cyan-400/20">
                <i className="fas fa-phone text-cyan-400"></i>
              </div>
              <div className="flex-1">
                <h3 className="contact-title">Телефон</h3>
                <p className="contact-value">+7 985 167 79 35</p>
                <p className="contact-description">Звонки с 10:00 до 19:00 МСК</p>
              </div>
            </div>
          </div>
          
          <div className="contact-card">
            <div className="flex items-start space-x-4">
              <div className="contact-icon-wrapper bg-violet-400/20">
                <i className="fas fa-calendar text-violet-400"></i>
              </div>
              <div className="flex-1">
                <h3 className="contact-title">Консультация</h3>
                <p className="contact-value">Бесплатная консультация 30 минут</p>
                <p className="contact-description">Обсудим ваши задачи и способы решения</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
