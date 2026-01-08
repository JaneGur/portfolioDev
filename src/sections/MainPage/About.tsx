export const About = () => {
  return (
    <section id="about" className="section-padding bg-navy-950 relative overflow-hidden py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      <div className="floating-element absolute top-10 left-10 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl"></div>
      <div className="floating-element absolute bottom-10 right-10 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="text-sm font-medium text-slate-300 uppercase tracking-wide mb-4 md:mb-6">Обо мне</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white/30 mb-6 md:mb-8 leading-tight md:leading-none">
            ОБО МНЕ
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mt-4 md:mt-8">
            Специалист по автоматизации бизнеса
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Photo and Greeting Row */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Photo */}
            <div className="lg:col-span-4 slide-in-left">
              <div className="relative">
                <div className="card-tech rounded-3xl overflow-hidden p-2 group hover:scale-[1.02] transition-all duration-500">
                  <img 
                    src="https://msk.cdn-chatium.io/thumbnail/image_jg2ZevfYOl.1799x1713.jpeg/s/600x"
                    alt="Евгения - специалист по автоматизации"
                    className="w-full rounded-2xl"
                  />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-emerald-400/20 rounded-full flex items-center justify-center floating-element">
                  <i className="fas fa-cogs text-lg text-emerald-400"></i>
                </div>
                <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-electric-blue/20 rounded-full flex items-center justify-center floating-element">
                  <i className="fas fa-code text-sm text-electric-blue"></i>
                </div>
              </div>
            </div>

            {/* Greeting Card */}
            <div className="lg:col-span-8 slide-in-right">
              <div className="card-tech p-8 rounded-2xl h-full flex flex-col justify-center">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-electric-blue rounded-full animate-pulse mr-4"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Привет! Меня зовут Евгения</h3>
                </div>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  Я специалист по автоматизации бизнес-процессов с <strong className="text-electric-blue">5-летним опытом</strong>. 
                  Моя специализация — создание и автоматизация процессов на платформах 
                  <strong className="text-red-400"> GetCourse</strong>, <strong className="text-orange-400"> Make.com</strong> и <strong className="text-purple-400"> Salebot</strong>, 
                  которые помогают компаниям <strong className="text-emerald-400">расти и масштабироваться</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* What I Do Section */}
          <div className="mt-24">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">Что я делаю</h3>
              <p className="text-base sm:text-lg text-slate-400">Комплексные решения для бизнеса</p>
            </div>

            <div className="grid lg:grid-cols-12 gap-6">
              {/* Main Card: Full Cycle */}
              <div className="lg:col-span-5 card-tech p-8 rounded-2xl hover:scale-[1.02] transition-all duration-500 border-2 border-amber-500/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                    <i className="fas fa-rocket text-2xl text-amber-400"></i>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white">GetCourse эксперт</h4>
                </div>
                <p className="text-sm sm:text-base text-slate-400 mb-4 md:mb-6">5+ лет с платформой</p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm sm:text-base text-slate-300">
                    <i className="fas fa-check-circle text-emerald-400 mr-2 sm:mr-3 text-sm"></i>
                    Настройка воронок
                  </li>
                  <li className="flex items-center text-sm sm:text-base text-slate-300">
                    <i className="fas fa-check-circle text-emerald-400 mr-2 sm:mr-3 text-sm"></i>
                    Интеграции платежей
                  </li>
                  <li className="flex items-center text-sm sm:text-base text-slate-300">
                    <i className="fas fa-check-circle text-emerald-400 mr-2 sm:mr-3 text-sm"></i>
                    Верстка лендингов
                  </li>
                  <li className="flex items-center text-sm sm:text-base text-slate-300">
                    <i className="fas fa-check-circle text-emerald-400 mr-2 sm:mr-3 text-sm"></i>
                    API-интеграции
                  </li>
                </ul>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-700">
                  <div>
                    <div className="text-3xl font-bold text-amber-400">5+</div>
                    <div className="text-sm text-slate-400">Лет с GetCourse</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-amber-400">100+</div>
                    <div className="text-sm text-slate-400">воронок и автоворонок</div>
                  </div>
                </div>
              </div>

              {/* Right Column: 3 Cards */}
              <div className="lg:col-span-7 grid gap-6">
                {/* Frontend Card */}
                <div className="card-tech p-6 rounded-2xl hover:scale-[1.02] transition-all duration-500 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-electric-blue/20 rounded-lg flex items-center justify-center group-hover:bg-electric-blue/30 transition-colors">
                        <i className="fas fa-laptop-code text-xl text-electric-blue"></i>
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-white">Frontend разработка</h4>
                    </div>
                    <i className="fas fa-arrow-right text-slate-500 group-hover:text-electric-blue group-hover:translate-x-1 transition-all"></i>
                  </div>
                  <p className="text-sm sm:text-base text-slate-400 mb-3 md:mb-4">Веб-приложения и интерфейсы</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center text-slate-300">
                      <i className="fas fa-check text-emerald-400 mr-2 text-xs"></i>
                      React & SPA
                    </div>
                    <div className="flex items-center text-slate-300">
                      <i className="fas fa-check text-emerald-400 mr-2 text-xs"></i>
                      Адаптивная верстка
                    </div>
                    <div className="flex items-center text-slate-300">
                      <i className="fas fa-check text-emerald-400 mr-2 text-xs"></i>
                      REST API
                    </div>
                    <div className="flex items-center text-slate-300">
                      <i className="fas fa-check text-emerald-400 mr-2 text-xs"></i>
                      HTML/CSS/JS
                    </div>
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">React</span>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium">Tailwind</span>
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-medium">JavaScript</span>
                  </div>
                </div>

                {/* AI Automation Card */}
                <div className="card-tech p-6 rounded-2xl hover:scale-[1.02] transition-all duration-500 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center group-hover:bg-amber-500/30 transition-colors">
                        <i className="fas fa-robot text-xl text-amber-400"></i>
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-white">AI автоматизация</h4>
                    </div>
                    <i className="fas fa-arrow-right text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all"></i>
                  </div>
                  <p className="text-sm sm:text-base text-slate-400 mb-3 md:mb-4">ИИ-решения для бизнеса</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center text-slate-300">
                      <i className="fas fa-check text-emerald-400 mr-2 text-xs"></i>
                      Чат-боты Telegram
                    </div>
                    <div className="flex items-center text-slate-300">
                      <i className="fas fa-check text-emerald-400 mr-2 text-xs"></i>
                      Автоматизация уведомлений
                    </div>
                    <div className="flex items-center text-slate-300">
                      <i className="fas fa-check text-emerald-400 mr-2 text-xs"></i>
                      Обработка данных
                    </div>
                    <div className="flex items-center text-slate-300">
                      <i className="fas fa-check text-emerald-400 mr-2 text-xs"></i>
                      Интеграция ИИ
                    </div>
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">Telegram API</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-medium">Python</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">OpenAI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
