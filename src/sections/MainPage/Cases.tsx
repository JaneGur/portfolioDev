import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { cases } from '../../data/cases'

export const Cases = () => {
  const navigate = useNavigate()
  const [selectedCase, setSelectedCase] = useState<any>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Выбираем 4 избранных проекта (кейсы 1, 2, 11, 12)
  const featuredCases = cases.filter(c => [1, 2, 11, 12].includes(c.id))

  const openCaseModal = (caseItem: any) => {
    setSelectedCase(caseItem)
    document.body.style.overflow = 'hidden'
  }

  const closeCaseModal = () => {
    setSelectedCase(null)
    document.body.style.overflow = 'auto'
    setScrollProgress(0)
  }

  const goToPortfolio = () => {
    navigate('/portfolio')
  }

  // Handle scroll progress in modal
  const handleModalScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const element = e.currentTarget
    const scrollTop = element.scrollTop
    const scrollHeight = element.scrollHeight - element.clientHeight
    const progress = (scrollTop / scrollHeight) * 100
    setScrollProgress(progress)
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <section id="cases" className="section-padding bg-navy-900 relative overflow-hidden py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-electric-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="text-sm font-medium text-slate-300 uppercase tracking-wide mb-4 md:mb-6">Портфолио</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white/30 mb-6 md:mb-8 leading-tight md:leading-none">
            ИЗБРАННЫЕ ПРОЕКТЫ
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mt-4 md:mt-8">
            Автовебинарные воронки и автоматизация для роста конверсии
          </p>
        </div>
        
        {/* Featured Cases Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredCases.map((caseItem, index) => (
            <div 
              key={index}
              className="group cursor-pointer relative"
              onClick={() => openCaseModal(caseItem)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue via-cyan-400 to-electric-blue rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700 group-hover:duration-500"></div>
              
              {/* Main card with glassmorphism */}
              <div className="relative bg-gradient-to-br from-slate-800/90 via-navy-900/90 to-slate-900/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-electric-blue/20 group-hover:border-electric-blue/40 transition-all duration-500 shadow-2xl group-hover:shadow-electric-blue/20 transform group-hover:-translate-y-2 group-hover:scale-[1.02]">
                {/* Gradient Header with enhanced effects */}
                <div className="relative h-32 mb-6 overflow-hidden">
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 ${caseItem.gradientClass} opacity-30 group-hover:opacity-50 transition-all duration-500`}></div>
                  
                  {/* Animated mesh gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-white/10 transition-all duration-500"></div>
                  
                  {/* Floating particles */}
                  <div className="absolute inset-0 opacity-50">
                    <div className="absolute top-4 left-8 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
                    <div className="absolute top-8 right-12 w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-6 left-16 w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                  
                  {/* Status indicator with enhanced pulse */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="relative">
                      <div className={`w-4 h-4 rounded-full ${caseItem.status === 'completed' ? 'bg-emerald-400' : 'bg-amber-400'} shadow-lg`}></div>
                      <div className={`absolute inset-0 rounded-full ${caseItem.status === 'completed' ? 'bg-emerald-400' : 'bg-amber-400'} animate-ping opacity-75`}></div>
                    </div>
                  </div>
                  
                  {/* Enhanced category badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${caseItem.categoryClass} backdrop-blur-sm border border-white/20 shadow-lg hover:scale-105 transition-transform`}>
                      {caseItem.category}
                    </span>
                  </div>
                  
                  {/* Large Icon with enhanced animation */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className={`w-16 h-16 rounded-2xl ${caseItem.categoryClass.replace('text-', 'bg-gradient-to-br from-').replace('/20', '/20').replace('/80', '/30')} backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                      <i className={`${caseItem.icon} ${caseItem.categoryClass.replace('bg-', 'text-').replace('/20', '')} text-2xl`}></i>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 pt-0">
                  {/* Title with enhanced gradient */}
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent group-hover:from-electric-blue group-hover:via-cyan-400 group-hover:to-blue-400 transition-all duration-500 leading-tight">
                    {caseItem.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-400 text-sm mb-4 line-clamp-3 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {caseItem.description}
                  </p>
                  
                  {/* View button with ripple effect */}
                  <div className="flex items-center text-electric-blue text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span>Подробнее</span>
                    <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform duration-300"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View Portfolio Button */}
        <div className="text-center">
          <button 
            onClick={goToPortfolio}
            className="inline-flex items-center px-8 py-4 bg-electric-blue hover:bg-electric-blue/90 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <i className="fas fa-eye mr-3"></i>
            Смотреть полное портфолио
            <i className="fas fa-arrow-right ml-3"></i>
          </button>
        </div>
      </div>
      
      {/* Enhanced Case Modal */}
      {selectedCase && (
        <div 
          onClick={closeCaseModal}
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn"
        >
          {/* Progress bar */}
          <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200/20 z-[60]">
            <div 
              className="h-full bg-gradient-to-r from-electric-blue via-cyan-400 to-electric-blue transition-all duration-300 ease-out"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>

          <div 
            onClick={(e) => e.stopPropagation()}
            onScroll={handleModalScroll}
            className="relative bg-gradient-to-br from-white via-slate-50 to-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-gray-100 animate-slideUp"
          >
            {/* Sticky header with glassmorphism */}
            <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 px-6 sm:px-8 py-4 sm:py-6">
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-4">
                  <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent leading-tight">
                    {selectedCase.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${selectedCase.categoryClass}`}>
                      {selectedCase.category}
                    </span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-600 font-medium">{selectedCase.duration}</span>
                  </div>
                </div>
                <button 
                  onClick={closeCaseModal}
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-all duration-300 hover:rotate-90 hover:scale-110"
                >
                  <i className="fas fa-times text-lg"></i>
                </button>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              
              {/* Modal content based on case ID */}
              {selectedCase.id === 1 ? (
                // Case 1: 3-day flexible webinar
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  {/* Overview Section */}
                  <div>
                    <h4 className="text-2xl font-semibold text-emerald-400 mb-4 flex items-center">
                      <i className="fas fa-bullseye mr-3"></i>Общее описание
                    </h4>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">{selectedCase.overview}</p>
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                      <p className="text-gray-700 font-medium flex items-center">
                        <i className="fas fa-external-link-alt mr-2 text-electric-blue"></i>
                        <span>Кратко настройку лендинга для данного автовебинара можно посмотреть <a href="https://disk.yandex.ru/i/wXgN68irTphfgg" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800">по ссылке</a></span>
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-1 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Результаты</h4>
                      <ul className="space-y-2 text-gray-700">
                        {selectedCase.results?.map((result: string, idx: number) => (
                          <li key={idx}>
                            <i className="fas fa-check text-emerald-400 mr-2"></i>{result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Problems Section */}
                  <div className="bg-amber-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-amber-200">
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-amber-400 mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-exclamation-triangle mr-2 sm:mr-3 text-base sm:text-lg"></i>Проблемы, которые необходимо было учесть
                    </h4>
                    <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base lg:text-lg">
                      {selectedCase.problems?.map((problem: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <i className="fas fa-times text-amber-400 mr-3 mt-1 flex-shrink-0"></i>
                          <span>{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Format 1 Section */}
                  <div>
                    <h4 className="text-2xl font-semibold text-emerald-400 mb-4 flex items-center">
                      <i className="fas fa-calendar-day mr-3"></i>Формат 1: ежедневный автовебинар
                    </h4>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-emerald-200">
                        <h5 className="text-xl font-semibold text-emerald-400 mb-3">Механика:</h5>
                        <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                          <li>• Регистрация сегодня — старт завтра</li>
                          <li>• Выбор времени просмотра: 13:00 или 19:00</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-emerald-200">
                        <h5 className="text-xl font-semibold text-emerald-400 mb-3">Самообслуживание:</h5>
                        <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                          <li>• На сайте размещена форма, где пользователь может сам изменить выбранное время</li>
                          <li>• После изменения времени никаких действий сотрудников не требуется — система автоматически перестраивает цепочку писем</li>
                          <li>• Добавлена форма на лендинге, в которой пользователь видит дату и время, на которые зарегистрирован</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-emerald-200">
                        <h5 className="text-xl font-semibold text-emerald-400 mb-3">Результат:</h5>
                        <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                          {selectedCase.format1Results?.map((result: string, idx: number) => (
                            <li key={idx}>• {result}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Final Results Section */}
                  <div className="bg-blue-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-blue-200">
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-electric-blue mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-trophy mr-2 sm:mr-3 text-base sm:text-lg"></i>Итоговые эффекты
                    </h4>
                    <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base lg:text-lg">
                      {selectedCase.finalEffects?.map((effect: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <i className="fas fa-star text-electric-blue mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base"></i>
                          <span>{effect}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-700 text-lg mt-6 font-medium">{selectedCase.technicalNote}</p>
                  </div>
                </div>
              ) : selectedCase.id === 2 ? (
                // Case 2: Installment automation
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  {/* Task Section */}
                  <div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-emerald-400 mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-bullseye mr-2 sm:mr-3 text-base sm:text-lg"></i>Задача
                    </h4>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">{selectedCase.task}</p>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">{selectedCase.taskDetails}</p>
                  </div>

                  {/* Initial Process Section */}
                  <div className="bg-amber-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-amber-200">
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-amber-400 mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-exclamation-triangle mr-2 sm:mr-3 text-base sm:text-lg"></i>Первоначальный процесс
                    </h4>
                    <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base lg:text-lg">
                      {selectedCase.initialProcess?.map((step: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <span className="bg-amber-100 text-amber-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">{idx + 1}</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-700 text-lg leading-relaxed mt-6 font-medium">{selectedCase.initialProcessNote}</p>
                  </div>

                  {/* Solution Section */}
                  <div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-electric-blue mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-lightbulb mr-2 sm:mr-3 text-base sm:text-lg"></i>Решение
                    </h4>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">{selectedCase.solutionOverview}</p>

                    {/* Showcase Image */}
                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-emerald-200 mb-4 sm:mb-6 lg:mb-8">
                      <h5 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 text-center">Воронка гибкой рассрочки</h5>
                      <div className="flex justify-center">
                        <img
                          src="https://msk.cdn-chatium.io/thumbnail/image_J6iYFDUke0.1337x657.jpeg/s/1024x"
                          alt="Схема воронки автоматизации гибкой рассрочки в модуле GetCourse"
                          className="rounded-lg sm:rounded-xl shadow-lg sm:shadow-2xl border border-gray-200 sm:border-2 max-w-full h-auto hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <p className="text-center text-gray-600 text-xs sm:text-sm mt-3 sm:mt-4">Схема автоматизированной воронки рассрочки с диапазонами платежей</p>
                    </div>
                  </div>

                  {/* Results Section */}
                  <div className="bg-emerald-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-emerald-200">
                    <h4 className="text-2xl font-semibold text-emerald-400 mb-4 flex items-center">
                      <i className="fas fa-check-circle mr-2 sm:mr-3 text-base sm:text-lg"></i>Результат
                    </h4>
                    <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base lg:text-lg">
                      {selectedCase.detailedResults?.map((result: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <i className="fas fa-star text-emerald-400 mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base"></i>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-emerald-100 rounded-lg p-3 sm:p-4 mt-4 sm:mt-6">
                      <h5 className="text-base sm:text-lg font-semibold text-emerald-600 mb-2 sm:mb-3">Вывод:</h5>
                      <p className="text-gray-700 text-sm sm:text-base font-medium">{selectedCase.conclusion}</p>
                    </div>
                  </div>
                </div>
              ) : selectedCase.id === 11 ? (
                // Case 11: Gift certificate
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  {/* Task Section */}
                  <div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-emerald-400 mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-bullseye mr-2 sm:mr-3 text-base sm:text-lg"></i>Задача
                    </h4>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">{selectedCase.task}</p>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">{selectedCase.taskDetails}</p>
                  </div>
                  
                  {/* Gift Mechanics Section */}
                  {selectedCase.giftMechanics && (
                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-emerald-200 sm:border-2 shadow-lg">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-emerald-400 mb-4 sm:mb-6 flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-400/20 flex items-center justify-center mr-2 sm:mr-3">
                          <i className="fas fa-gift text-emerald-400"></i>
                        </div>
                        Механика подарочного сертификата
                      </h4>
                      
                      <div className="space-y-4">
                        {/* Input */}
                        <div className="bg-white rounded-xl p-4 border border-emerald-200">
                          <h5 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                            <i className="fas fa-edit text-emerald-400 mr-2"></i>
                            Ввод текста:
                          </h5>
                          <p className="text-gray-700 text-sm sm:text-base">{selectedCase.giftMechanics.input}</p>
                        </div>
                        
                        {/* Platform */}
                        <div className="bg-white rounded-xl p-4 border border-emerald-200">
                          <h5 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                            <i className="fas fa-server text-emerald-400 mr-2"></i>
                            Платформа:
                          </h5>
                          <p className="text-gray-700 text-sm sm:text-base">{selectedCase.giftMechanics.platform}</p>
                        </div>
                        
                        {/* Automation */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border-2 border-blue-200">
                          <h5 className="text-lg font-semibold text-electric-blue mb-3 flex items-center">
                            <i className="fas fa-magic mr-2"></i>
                            Автоматизация процесса:
                          </h5>
                          <ul className="space-y-2">
                            {selectedCase.giftMechanics.automation.map((step: string, idx: number) => (
                              <li key={idx} className="flex items-start text-sm sm:text-base">
                                <i className="fas fa-check-circle text-electric-blue mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base"></i>
                                <span className="text-gray-700">{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Technologies */}
                  {selectedCase.technologies && (
                    <div className="bg-blue-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-blue-200">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-electric-blue mb-3 sm:mb-4 flex items-center">
                        <i className="fas fa-code mr-3"></i>
                        Технологии
                      </h4>
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {selectedCase.technologies.map((tech: string, idx: number) => (
                          <span key={idx} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white border border-blue-200 text-electric-blue rounded-full text-xs sm:text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Screenshots */}
                  {selectedCase.screenshots && (
                    <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-violet-200 sm:border-2">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-violet-400 mb-4 sm:mb-6 flex items-center">
                        <i className="fas fa-images mr-2 sm:mr-3 text-base sm:text-lg"></i>
                        Запрос и отзыв клиента
                      </h4>
                      <div className="space-y-4 sm:space-y-6">
                        {selectedCase.screenshots.map((screenshot: any, idx: number) => (
                          <div key={idx} className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg">
                            <img
                              src={screenshot.url}
                              alt={screenshot.caption}
                              className="rounded-lg shadow-md border border-gray-200 max-w-full h-auto hover:scale-105 transition-transform duration-300 mb-2 sm:mb-3"
                            />
                            <p className="text-center text-gray-600 text-xs sm:text-sm">{screenshot.caption}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Results Section */}
                  {selectedCase.results && (
                    <div className="bg-emerald-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-emerald-200">
                      <h4 className="text-2xl font-semibold text-emerald-400 mb-4 flex items-center">
                        <i className="fas fa-trophy mr-3"></i>
                        Результаты
                      </h4>
                      <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base lg:text-lg">
                        {selectedCase.results.map((result: string, idx: number) => (
                          <li key={idx}>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Conclusion Section */}
                  {selectedCase.conclusion && (
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-blue-200">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-electric-blue mb-3 sm:mb-4 flex items-center">
                        <i className="fas fa-lightbulb mr-3"></i>
                        Итог
                      </h4>
                      <p className="text-gray-700 text-sm sm:text-base lg:text-lg font-medium leading-relaxed">{selectedCase.conclusion}</p>
                    </div>
                  )}
                </div>
              ) : selectedCase.id === 12 ? (
                // Case 12: Order upgrade system (simplified for modal)
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  {/* Task Section */}
                  <div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-emerald-400 mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-bullseye mr-2 sm:mr-3 text-base sm:text-lg"></i>Задача
                    </h4>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">{selectedCase.task}</p>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">{selectedCase.taskDetails}</p>
                  </div>

                  {/* Technologies */}
                  {selectedCase.technologies && (
                    <div className="bg-blue-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-blue-200">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-electric-blue mb-3 sm:mb-4 flex items-center">
                        <i className="fas fa-code mr-3"></i>
                        Технологии
                      </h4>
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {selectedCase.technologies.map((tech: string, idx: number) => (
                          <span key={idx} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white border border-blue-200 text-electric-blue rounded-full text-xs sm:text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Project Link */}
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-4 sm:p-6 border border-cyan-200 sm:border-2 shadow-lg">
                    <h4 className="text-lg sm:text-xl font-semibold text-electric-blue mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-book mr-3"></i>
                      Интерактивная документация
                    </h4>
                    <p className="text-gray-700 mb-4 text-sm sm:text-base">Для этого проекта создана подробная интерактивная инструкция с пошаговым руководством, примерами кода и видео-объяснениями:</p>
                    <a href={selectedCase.projectUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-electric-blue to-cyan-500 text-white font-semibold rounded-lg hover:from-electric-blue/90 hover:to-cyan-500/90 transition-all shadow-md hover:shadow-lg text-sm sm:text-base">
                      <i className="fas fa-external-link-alt mr-2"></i>
                      Открыть документацию
                    </a>
                  </div>

                  {/* Results Section */}
                  {selectedCase.results && (
                    <div className="bg-emerald-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-emerald-200">
                      <h4 className="text-2xl font-semibold text-emerald-400 mb-4 flex items-center">
                        <i className="fas fa-trophy mr-3"></i>
                        Результаты
                      </h4>
                      <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base lg:text-lg">
                        {selectedCase.results.map((result: string, idx: number) => (
                          <li key={idx}>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Conclusion Section */}
                  {selectedCase.conclusion && (
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-blue-200">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-electric-blue mb-3 sm:mb-4 flex items-center">
                        <i className="fas fa-lightbulb mr-3"></i>
                        Итог
                      </h4>
                      <p className="text-gray-700 text-sm sm:text-base lg:text-lg font-medium leading-relaxed">{selectedCase.conclusion}</p>
                    </div>
                  )}
                </div>
              ) : (
                // Default layout for other cases
                <div>
                  <p className="text-gray-800 text-lg mb-6 leading-relaxed">{selectedCase.fullDescription || selectedCase.description}</p>
                  
                  {selectedCase.results && (
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Результаты</h4>
                      <ul className="space-y-2 text-gray-700">
                        {selectedCase.results.map((result: string, idx: number) => (
                          <li key={idx}>
                            <i className="fas fa-check text-emerald-400 mr-2"></i>{result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
