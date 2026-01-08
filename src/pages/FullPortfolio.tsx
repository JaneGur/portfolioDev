import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { cases } from '../data/cases'
import { ScrollToTop } from '../components/ScrollToTop'

export const FullPortfolio = () => {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedCase, setSelectedCase] = useState<any>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  const filters = [
    { id: 'all', name: 'Все проекты' },
    { id: 'webinar', name: 'Автовебинары' },
    { id: 'getcourse', name: 'Автоматизация GetCourse' },
    { id: 'make-com', name: 'Make.com/n8n' }
  ]

  const filteredCases = activeFilter === 'all' 
    ? cases 
    : cases.filter(c => c.filter === activeFilter)

  const openCaseModal = (caseItem: any) => {
    setSelectedCase(caseItem)
    document.body.style.overflow = 'hidden'
  }

  const closeCaseModal = () => {
    setSelectedCase(null)
    document.body.style.overflow = 'auto'
    setScrollProgress(0)
  }

  const goBack = () => {
    navigate('/')
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
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-slate-900 to-navy-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-navy-800/80 via-navy-800/60 to-navy-800/80 backdrop-blur-xl border-b border-electric-blue/30 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={goBack}
                className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-electric-blue/20 p-2 rounded-lg"
              >
                <i className="fas fa-arrow-left text-xl"></i>
              </button>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-electric-blue bg-clip-text text-transparent">Портфолио</h1>
            </div>
            <div className="text-sm text-slate-300 bg-navy-700/50 px-4 py-2 rounded-full border border-electric-blue/30">
              {filteredCases.length} проектов
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Tabs */}
        <div className="mb-8 md:mb-12">
          <div className="bg-gradient-to-r from-navy-800/90 via-navy-800/80 to-navy-800/90 backdrop-blur-xl rounded-2xl p-2 md:p-3 border border-electric-blue/30 shadow-2xl overflow-x-auto">
            <div className="flex space-x-2 min-w-max md:min-w-0 md:justify-center">
              {filters.map((filter) => (
                <button 
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-3 md:px-8 md:py-4 rounded-xl text-xs md:text-sm font-semibold transition-all duration-500 transform relative overflow-hidden whitespace-nowrap flex-shrink-0 ${
                    activeFilter === filter.id 
                      ? 'bg-gradient-to-r from-electric-blue to-blue-500 text-white shadow-lg shadow-electric-blue/50 scale-105' 
                      : 'text-slate-300 hover:text-white hover:bg-navy-700/50 hover:scale-105'
                  }`}
                >
                  <span className="relative z-10">{filter.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Enhanced Cases Grid */}
        <div className="cases-grid">
          {filteredCases.map((caseItem, index) => (
            <div 
              key={caseItem.id}
              className="group relative cursor-pointer"
              onClick={() => openCaseModal(caseItem)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Enhanced glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue via-cyan-400 to-electric-blue rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700 group-hover:duration-500"></div>
              
              {/* Main Card with enhanced glassmorphism */}
              <div className="relative bg-gradient-to-br from-slate-800/90 via-navy-900/90 to-slate-900/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-electric-blue/20 group-hover:border-electric-blue/40 transition-all duration-500 shadow-2xl group-hover:shadow-electric-blue/20 transform group-hover:-translate-y-2 group-hover:scale-[1.02]">
                {/* Gradient Header with enhanced effects */}
                <div className="relative h-32 mb-6 overflow-hidden">
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 ${caseItem.gradientClass} opacity-30 group-hover:opacity-50 transition-all duration-500`}></div>
                  
                  {/* Animated mesh gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-white/10 transition-all duration-500"></div>
                  
                  {/* Enhanced floating particles */}
                  <div className="absolute inset-0 opacity-50">
                    <div className="absolute top-4 left-8 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
                    <div className="absolute top-8 right-12 w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-6 left-16 w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                  
                  {/* Enhanced status indicator */}
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
                  
                  {/* Enhanced icon with better animation */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className={`w-16 h-16 rounded-2xl ${caseItem.categoryClass.replace('text-', 'bg-gradient-to-br from-').replace('/20', '/20').replace('/80', '/30')} backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                      <i className={`${caseItem.icon} ${caseItem.categoryClass.replace('bg-', 'text-').replace('/20', '').replace('/80', '')} text-2xl`}></i>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 pt-0">
                  {/* Enhanced title with gradient */}
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent group-hover:from-electric-blue group-hover:via-cyan-400 group-hover:to-blue-400 transition-all duration-500 leading-tight">
                    {caseItem.title}
                  </h3>
                  
                  {/* Enhanced description */}
                  <p className="text-slate-400 text-sm mb-4 line-clamp-3 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {caseItem.description}
                  </p>
                  
                  {/* Enhanced view button */}
                  <div className="flex items-center text-electric-blue text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span>Подробнее</span>
                    <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform duration-300"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
            <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-4">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent leading-tight">
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

            <div className="p-4 sm:p-6 lg:p-8">
              
              {/* Render different layouts based on case ID */}
              {selectedCase.id === 1 ? (
                // Case 1: Webinar with flexible schedule
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
                          <li>• Письма и напоминания приходят строго по выбранному времени</li>
                          <li>• Рост конверсии в просмотры и прохождение мероприятия за счёт гибкого выбора времени</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Format 2 Section */}
                  <div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-violet-400 mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-calendar-week mr-3"></i>Формат 2: автовебинар на конкретные даты
                    </h4>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-violet-200">
                        <h5 className="text-xl font-semibold text-violet-400 mb-3">Особенности:</h5>
                        <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                          <li>• Сохранение возможности выбора времени (13:00 или 19:00) и самостоятельной смены через форму</li>
                          <li>• Пользователь может зарегистрироваться после старта события, при этом письма остаются актуальными</li>
                          <li>• Исключена отправка «устаревших» писем и напоминаний о прошедших эфирах</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-violet-200">
                        <h5 className="text-xl font-semibold text-violet-400 mb-3">Механика:</h5>
                        <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                          <li>• Отдельный процесс для фиксированных дат (например, 10–12 сентября)</li>
                          <li>• Система строго подключает пользователя к актуальной части цепочки:</li>
                          <li className="ml-4">— Регистрация до старта — пользователь получает серию писем с начала</li>
                          <li className="ml-4">— Регистрация после старта — пользователь получает только актуальные сообщения вперед по расписанию</li>
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
                    
                    {/* Code Blocks */}
                    {selectedCase.codeBlocks && (
                      <div className="space-y-4 mb-8">
                        {selectedCase.codeBlocks.map((codeBlock: any, idx: number) => (
                          <div key={idx} className="bg-gray-900 rounded-xl p-3 sm:p-4 lg:p-6 border border-electric-blue/30 font-mono text-xs sm:text-sm">
                            <div className="flex items-center mb-3 sm:mb-4">
                              <div className="flex space-x-1.5 sm:space-x-2 mr-2 sm:mr-4">
                                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-amber-400"></div>
                                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-emerald-400"></div>
                              </div>
                              <span className="text-gray-400 text-xs sm:text-sm">{codeBlock.filename}</span>
                            </div>
                            <pre className="text-gray-300 whitespace-pre-wrap text-xs sm:text-sm">{codeBlock.code}</pre>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Showcase Image */}
                    {selectedCase.showcaseImage && (
                      <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-emerald-200 mb-4 sm:mb-6 lg:mb-8">
                        <h5 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 text-center">Воронка гибкой рассрочки</h5>
                        <div className="flex justify-center">
                          <img 
                            src={selectedCase.showcaseImage.url}
                            alt={selectedCase.showcaseImage.caption}
                            className="rounded-lg sm:rounded-xl shadow-lg sm:shadow-2xl border border-gray-200 sm:border-2 max-w-full h-auto hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <p className="text-center text-gray-600 text-xs sm:text-sm mt-3 sm:mt-4">{selectedCase.showcaseImage.caption}</p>
                      </div>
                    )}
                  </div>
                  
                  {/* Results Section */}
                  <div className="bg-emerald-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-emerald-200">
                    <h4 className="text-2xl font-semibold text-emerald-400 mb-4 flex items-center">
                      <i className="fas fa-check-circle mr-2 sm:mr-3 text-base sm:text-lg"></i>Результат
                    </h4>
                    <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base lg:text-lg">
                      {(selectedCase.detailedResults || selectedCase.results)?.map((result: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <i className="fas fa-star text-emerald-400 mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base"></i>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                    {selectedCase.conclusion && (
                      <div className="bg-emerald-100 rounded-lg p-3 sm:p-4 mt-4 sm:mt-6">
                        <h5 className="text-base sm:text-lg font-semibold text-emerald-600 mb-2 sm:mb-3">Вывод:</h5>
                        <p className="text-gray-700 text-sm sm:text-base font-medium">{selectedCase.conclusion}</p>
                      </div>
                    )}
                  </div>
                </div>
              ) : selectedCase.id === 3 ? (
                // Case 3: Timer automation
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  {/* Task Section */}
                  <div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-emerald-500 mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-bullseye mr-2 sm:mr-3 text-base sm:text-lg"></i>Задача
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">{selectedCase.fullDescription}</p>
                  </div>
                  
                  {/* Challenge Section */}
                  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-amber-200 sm:border-2 shadow-lg">
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-amber-600 mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-exclamation-triangle mr-2 sm:mr-3 text-base sm:text-lg"></i>Первоначальный процесс
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">{selectedCase.challenge}</p>
                  </div>
                  
                  {/* Solution Section */}
                  <div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-electric-blue mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-lightbulb mr-2 sm:mr-3 text-base sm:text-lg"></i>Решение
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">{selectedCase.solution}</p>
                    
                    {/* Showcase Image */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-blue-200 sm:border-2 mb-4 sm:mb-6 lg:mb-8 shadow-lg">
                      <h5 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 text-center">Результат реализации</h5>
                      <div className="flex justify-center">
                        <img 
                          src="https://msk.cdn-chatium.io/thumbnail/image_BGFvSucWb7.879x811.png/s/800x" 
                          alt="Интерфейс карты лояльности АртСемья с таймером и прогресс-баром"
                          className="rounded-lg sm:rounded-xl shadow-lg sm:shadow-2xl border border-white sm:border-2 max-w-full h-auto hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    
                    {/* Code Block */}
                    <div className="bg-gradient-to-br from-gray-900 to-slate-900 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-electric-blue/30 sm:border-2 font-mono text-xs sm:text-sm overflow-x-auto shadow-lg sm:shadow-2xl">
                      <div className="flex items-center mb-3 sm:mb-4">
                        <div className="flex space-x-1.5 sm:space-x-2 mr-2 sm:mr-4">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 shadow-lg"></div>
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-amber-400 shadow-lg"></div>
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-emerald-400 shadow-lg"></div>
                        </div>
                        <span className="text-gray-400 text-xs sm:text-sm">timer-automation.js</span>
                      </div>
                      <pre className="text-gray-300 whitespace-pre-wrap text-xs sm:text-sm">{selectedCase.code}</pre>
                    </div>
                  </div>
                  
                  {/* Results Section */}
                  <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-emerald-200 sm:border-2 shadow-lg">
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-emerald-600 mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-check-circle mr-2 sm:mr-3 text-base sm:text-lg"></i>Результат
                    </h4>
                    <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base lg:text-lg">
                      {selectedCase.results?.map((result: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <i className="fas fa-star text-emerald-500 mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base"></i>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mt-4 sm:mt-6 font-medium">{selectedCase.conclusion}</p>
                  </div>
                </div>
              ) : selectedCase.id === 4 ? (
                // Case 4: Contest automation
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  {/* Task Section */}
                  <div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-emerald-400 mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-bullseye mr-2 sm:mr-3 text-base sm:text-lg"></i>Задача
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">{selectedCase.task}</p>
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
                    
                    {/* Code Blocks */}
                    {selectedCase.codeBlocks && (
                      <div className="space-y-4 mb-8">
                        {selectedCase.codeBlocks.map((codeBlock: any, idx: number) => (
                          <div key={idx} className="bg-gray-900 rounded-xl p-3 sm:p-4 lg:p-6 border border-electric-blue/30 font-mono text-xs sm:text-sm">
                            <div className="flex items-center mb-3 sm:mb-4">
                              <div className="flex space-x-1.5 sm:space-x-2 mr-2 sm:mr-4">
                                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-amber-400"></div>
                                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-emerald-400"></div>
                              </div>
                              <span className="text-gray-400 text-xs sm:text-sm">{codeBlock.filename}</span>
                            </div>
                            <pre className="text-gray-300 whitespace-pre-wrap text-xs sm:text-sm">{codeBlock.code}</pre>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Results Section */}
                  <div className="bg-emerald-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-emerald-200">
                    <h4 className="text-2xl font-semibold text-emerald-400 mb-4 flex items-center">
                      <i className="fas fa-check-circle mr-2 sm:mr-3 text-base sm:text-lg"></i>Результат
                    </h4>
                    <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base lg:text-lg">
                      {selectedCase.results?.map((result: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <i className="fas fa-star text-emerald-400 mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base"></i>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                    {selectedCase.conclusion && (
                      <div className="bg-emerald-100 rounded-lg p-3 sm:p-4 mt-4 sm:mt-6">
                        <h5 className="text-base sm:text-lg font-semibold text-emerald-600 mb-2 sm:mb-3">Вывод:</h5>
                        <p className="text-gray-700 text-sm sm:text-base font-medium">{selectedCase.conclusion}</p>
                      </div>
                    )}
                  </div>
                </div>
              ) : selectedCase.id === 5 ? (
                // Case 5: Marathon automation
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  {/* Task Section */}
                  <div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-emerald-400 mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-bullseye mr-2 sm:mr-3 text-base sm:text-lg"></i>Задача
                    </h4>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">{selectedCase.task}</p>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">{selectedCase.taskDetails}</p>
                  </div>
                  
                  {/* Marathon Mechanics Section */}
                  <div className="bg-blue-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-blue-200">
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-electric-blue mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-cogs mr-2 sm:mr-3 text-base sm:text-lg"></i>Механика автомарафона
                    </h4>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="bg-white rounded-lg p-3 sm:p-4 border border-blue-100">
                        <h5 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Бесплатный формат:</h5>
                        <p className="text-gray-700 text-sm sm:text-base">{selectedCase.freeMechanics}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 sm:p-4 border border-blue-100">
                        <h5 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Платный формат (990 ₽):</h5>
                        <p className="text-gray-700 text-sm sm:text-base">{selectedCase.paidMechanics}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 sm:p-4 border border-blue-100">
                        <h5 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Особенности расписания:</h5>
                        <ul className="text-gray-700 space-y-2">
                          {selectedCase.scheduleFeatures?.map((feature: string, idx: number) => (
                            <li key={idx}>
                              <i className="fas fa-clock text-electric-blue mr-2 text-sm sm:text-base"></i>{feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Implementation Section */}
                  <div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-electric-blue mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-lightbulb mr-3"></i>Реализация
                    </h4>
                    <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base lg:text-lg">
                      {selectedCase.implementation?.map((impl: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <i className="fas fa-check-circle text-electric-blue mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base"></i>
                          <span>{impl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Results Section */}
                  <div className="bg-emerald-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-emerald-200">
                    <h4 className="text-2xl font-semibold text-emerald-400 mb-4 flex items-center">
                      <i className="fas fa-trophy mr-2 sm:mr-3 text-base sm:text-lg"></i>Результат
                    </h4>
                    <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base lg:text-lg">
                      {selectedCase.results?.map((result: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <i className="fas fa-star text-emerald-400 mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base"></i>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                    {selectedCase.conclusion && (
                      <div className="bg-emerald-100 rounded-lg p-3 sm:p-4 mt-4 sm:mt-6">
                        <h5 className="text-lg font-semibold text-emerald-600 mb-3">Итог:</h5>
                        <p className="text-gray-700 font-medium">{selectedCase.conclusion}</p>
                      </div>
                    )}
                  </div>
                </div>
              ) : selectedCase.id === 6 ? (
                // Case 6: Psychologist Make.com
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  {/* Task Section */}
                  <div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-emerald-400 mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-bullseye mr-2 sm:mr-3 text-base sm:text-lg"></i>Задача
                    </h4>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">{selectedCase.task}</p>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">{selectedCase.taskDetails}</p>
                  </div>
                  
                  {/* Technologies Section */}
                  <div className="bg-violet-50 rounded-xl p-6 border border-violet-200">
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-violet-400 mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-cogs mr-3"></i>Техническая реализация
                    </h4>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">Технологии:</h5>
                    <ul className="space-y-2 text-gray-700 mb-6">
                      {selectedCase.technologies?.map((tech: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <i className="fas fa-check text-violet-400 mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base"></i>
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Roles Section */}
                  <div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-electric-blue mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-users mr-3"></i>Основные роли
                    </h4>
                    <div className="space-y-3 sm:space-y-4">
                      {selectedCase.roles?.map((role: any, idx: number) => (
                        <div key={idx} className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                          <h5 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">{role.name}:</h5>
                          <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                            {role.features.map((feature: string, fIdx: number) => (
                              <li key={fIdx}>• {feature}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Integration Section */}
                  <div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-violet-400 mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-link mr-3"></i>Интеграция с Make.com
                    </h4>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">{selectedCase.integration}</p>
                    
                    {/* Code Block */}
                    {selectedCase.codeExample && (
                      <div className="bg-gray-900 rounded-xl p-6 border border-violet-400/30 font-mono text-sm overflow-x-auto">
                        <div className="flex items-center mb-4">
                          <div className="flex space-x-2 mr-4">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                            <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                          </div>
                          <span className="text-gray-400">{selectedCase.codeExample.filename}</span>
                        </div>
                        <pre className="text-gray-300 whitespace-pre-wrap">{selectedCase.codeExample.code}</pre>
                      </div>
                    )}
                  </div>
                  
                  {/* Screenshots Section */}
                  {selectedCase.screenshots && (
                    <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-violet-200 sm:border-2">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-violet-400 mb-4 sm:mb-6 flex items-center">
                        <i className="fas fa-images mr-2 sm:mr-3 text-base sm:text-lg"></i>Интерфейсы приложения
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
                  <div className="bg-emerald-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-emerald-200">
                    <h4 className="text-2xl font-semibold text-emerald-400 mb-4 flex items-center">
                      <i className="fas fa-check-circle mr-2 sm:mr-3 text-base sm:text-lg"></i>Результат
                    </h4>
                    <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base lg:text-lg">
                      {selectedCase.results?.map((result: string, idx: number) => (
                        <li key={idx}>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                    {selectedCase.conclusion && (
                      <div className="bg-emerald-100 rounded-lg p-3 sm:p-4 mt-4 sm:mt-6">
                        <h5 className="text-lg font-semibold text-emerald-600 mb-3">Итог:</h5>
                        <p className="text-gray-700 font-medium">{selectedCase.conclusion}</p>
                      </div>
                    )}
                  </div>
                  
                  {/* Extensions Section */}
                  {selectedCase.extensions && (
                    <div className="bg-blue-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-blue-200">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-electric-blue mb-3 sm:mb-4 flex items-center">
                        <i className="fas fa-lightbulb mr-3"></i>Возможные расширения
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        {selectedCase.extensions.map((ext: string, idx: number) => (
                          <li key={idx} className="flex items-start">
                            <i className="fas fa-arrow-right text-electric-blue mr-3 mt-1 flex-shrink-0"></i>
                            <span>{ext}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : selectedCase.id === 7 ? (
                // Case 7: CRM protection
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  {/* Task Section */}
                  <div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-emerald-400 mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-bullseye mr-2 sm:mr-3 text-base sm:text-lg"></i>Задача
                    </h4>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">{selectedCase.task}</p>
                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                      <p className="text-gray-700 font-medium italic">"{selectedCase.taskDetails}"</p>
                    </div>
                  </div>
                  
                  {/* Technologies Section */}
                  <div className="bg-blue-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-blue-200">
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-electric-blue mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-code mr-3"></i>Технологии
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      {selectedCase.technologies?.map((tech: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <i className="fas fa-check-circle text-electric-blue mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base"></i>
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Problem and Requirements Section */}
                  <div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-amber-400 mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-exclamation-triangle mr-2 sm:mr-3 text-base sm:text-lg"></i>Проблема и требования
                    </h4>
                    <div className="space-y-3 sm:space-y-4">
                      {selectedCase.roles?.map((role: any, idx: number) => (
                        <div key={idx} className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl p-4 border border-gray-200">
                          <h5 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">{role.name}:</h5>
                          <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                            {role.features.map((feature: string, fIdx: number) => (
                              <li key={fIdx} className="flex items-start">
                                <i className="fas fa-arrow-right text-amber-400 mr-3 mt-1 flex-shrink-0"></i>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Integration Section */}
                  <div>
                    <h4 className="text-2xl font-semibold text-emerald-400 mb-4 flex items-center">
                      <i className="fas fa-cogs mr-3"></i>Техническая реализация
                    </h4>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">{selectedCase.integration}</p>
                    
                    {/* Code Block */}
                    {selectedCase.codeExample && (
                      <div className="bg-gray-900 rounded-xl p-6 border border-emerald-400/30 font-mono text-sm overflow-x-auto">
                        <div className="flex items-center mb-4">
                          <div className="flex space-x-2 mr-4">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                            <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                          </div>
                          <span className="text-gray-400">{selectedCase.codeExample.filename}</span>
                        </div>
                        <pre className="text-gray-300 whitespace-pre-wrap">{selectedCase.codeExample.code}</pre>
                      </div>
                    )}
                  </div>
                  
                  {/* Screenshots/Reviews Section */}
                  {selectedCase.screenshots && (
                    <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-pink-200 sm:border-2">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-pink-400 mb-4 sm:mb-6 flex items-center">
                        <i className="fas fa-heart mr-2 sm:mr-3 text-base sm:text-lg"></i>Отзывы клиента
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
                  <div className="bg-emerald-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-emerald-200">
                    <h4 className="text-2xl font-semibold text-emerald-400 mb-4 flex items-center">
                      <i className="fas fa-trophy mr-2 sm:mr-3 text-base sm:text-lg"></i>Результаты
                    </h4>
                    <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base lg:text-lg">
                      {selectedCase.results?.map((result: string, idx: number) => (
                        <li key={idx}>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Extensions/Iterations Section */}
                  {selectedCase.extensions && (
                    <div className="bg-violet-50 rounded-xl p-6 border border-violet-200">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-violet-400 mb-3 sm:mb-4 flex items-center">
                        <i className="fas fa-rocket mr-3"></i>Этапы разработки
                      </h4>
                      <div className="space-y-3 sm:space-y-4">
                        {selectedCase.extensions.map((extension: string, idx: number) => (
                          <div key={idx} className="bg-white rounded-lg p-4 border border-violet-100">
                            <div className="flex items-start">
                              <span className="bg-violet-100 text-violet-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">{idx + 1}</span>
                              <p className="text-gray-700 text-sm sm:text-base">{extension}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Conclusion Section */}
                  {selectedCase.conclusion && (
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-blue-200">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-electric-blue mb-3 sm:mb-4 flex items-center">
                        <i className="fas fa-lightbulb mr-2 sm:mr-3 text-base sm:text-lg"></i>Вывод
                      </h4>
                      <p className="text-gray-700 text-sm sm:text-base lg:text-lg font-medium leading-relaxed">{selectedCase.conclusion}</p>
                    </div>
                  )}
                </div>
              ) : selectedCase.id === 8 ? (
                // Case 8: Flexible webinar schedule
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  {/* Task Section */}
                  <div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-emerald-400 mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-bullseye mr-2 sm:mr-3 text-base sm:text-lg"></i>Задача
                    </h4>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">{selectedCase.task}</p>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">{selectedCase.taskDetails}</p>
                  </div>
                  
                  {/* Time Slots Section */}
                  <div className="bg-gradient-to-br from-electric-blue/10 to-cyan-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-electric-blue/30 sm:border-2 shadow-lg">
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-electric-blue mb-4 sm:mb-6 flex items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-electric-blue/20 flex items-center justify-center mr-2 sm:mr-3">
                        <i className="fas fa-calendar-alt text-electric-blue"></i>
                      </div>
                      Механика выбора времени
                    </h4>
                    
                    {/* Time Ranges Grid */}
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-4 text-white shadow-lg">
                        <div className="flex items-center mb-2">
                          <i className="fas fa-sun text-yellow-200 mr-2"></i>
                          <span className="font-bold text-sm">00:00 – 13:00 МСК</span>
                        </div>
                        <div className="text-xs space-y-1 opacity-90">
                          <div>• Сегодня 15:00</div>
                          <div>• Сегодня 20:00</div>
                          <div>• Завтра 10:00</div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl p-4 text-white shadow-lg">
                        <div className="flex items-center mb-2">
                          <i className="fas fa-cloud-sun text-yellow-100 mr-2"></i>
                          <span className="font-bold text-sm">13:00 – 18:00 МСК</span>
                        </div>
                        <div className="text-xs space-y-1 opacity-90">
                          <div>• Сегодня 20:00</div>
                          <div>• Завтра 10:00</div>
                          <div>• Завтра 15:00</div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl p-4 text-white shadow-lg">
                        <div className="flex items-center mb-2">
                          <i className="fas fa-moon text-yellow-100 mr-2"></i>
                          <span className="font-bold text-sm">18:00 – 23:59 МСК</span>
                        </div>
                        <div className="text-xs space-y-1 opacity-90">
                          <div>• Завтра 10:00</div>
                          <div>• Завтра 15:00</div>
                          <div>• Завтра 20:00</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Email Sequence Timeline */}
                    <div className="bg-white rounded-xl p-6 border-2 border-electric-blue/20 shadow-md">
                      <h5 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <i className="fas fa-envelope text-electric-blue mr-2"></i>
                        Автоматическая цепочка писем
                      </h5>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="bg-emerald-100 text-emerald-600 rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                            <i className="fas fa-check"></i>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">Сразу после регистрации</p>
                            <p className="text-gray-600 text-sm">Подтверждающее письмо с выбранной датой и временем</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                            1h
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">Через 1 час</p>
                            <p className="text-gray-600 text-sm">Письмо-знакомство с экспертом</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-amber-100 text-amber-600 rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                            -1h
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">За 1 час до начала</p>
                            <p className="text-gray-600 text-sm">Напоминание о вебинаре</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-orange-100 text-orange-600 rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                            -15m
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">За 15 минут до начала</p>
                            <p className="text-gray-600 text-sm">Финальное напоминание</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                            +15m
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">Через 15 минут после старта</p>
                            <p className="text-gray-600 text-sm">Приглашение для не пришедших</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                            +1d
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">На следующий день</p>
                            <p className="text-gray-600 text-sm">Повторное приглашение на то же время</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Implementation Section */}
                  <div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-violet-400 mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-cogs mr-3"></i>Техническая реализация
                    </h4>
                    <div className="space-y-3">
                      {selectedCase.implementation?.map((impl: string, idx: number) => (
                        <div key={idx} className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg p-4 border border-violet-200">
                          <div className="flex items-start">
                            <span className="bg-violet-100 text-violet-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">{idx + 1}</span>
                            <p className="text-gray-700 text-sm sm:text-base">{impl}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Results Section */}
                  <div className="bg-emerald-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-emerald-200">
                    <h4 className="text-2xl font-semibold text-emerald-400 mb-4 flex items-center">
                      <i className="fas fa-trophy mr-2 sm:mr-3 text-base sm:text-lg"></i>Результаты
                    </h4>
                    <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base lg:text-lg">
                      {selectedCase.results?.map((result: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <i className="fas fa-star text-emerald-400 mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base"></i>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
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
              ) : selectedCase.id === 9 ? (
                // Case 9: Marathon gamification
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  {/* Task Section */}
                  <div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-emerald-400 mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-bullseye mr-2 sm:mr-3 text-base sm:text-lg"></i>Задача
                    </h4>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">{selectedCase.task}</p>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">{selectedCase.taskDetails}</p>
                  </div>
                  
                  {/* Marathon Mechanics Section */}
                  {selectedCase.marathonMechanics && (
                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-emerald-200 sm:border-2 shadow-lg">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-emerald-400 mb-4 sm:mb-6 flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-400/20 flex items-center justify-center mr-2 sm:mr-3">
                          <i className="fas fa-cogs text-emerald-400"></i>
                        </div>
                        Механика марафона
                      </h4>
                      
                      <div className="space-y-6">
                        {/* Registration */}
                        <div className="bg-white rounded-xl p-4 border border-emerald-200">
                          <h5 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                            <i className="fas fa-user-plus text-emerald-400 mr-2"></i>
                            Регистрация:
                          </h5>
                          <p className="text-gray-700 text-sm sm:text-base">{selectedCase.marathonMechanics.registration}</p>
                        </div>
                        
                        {/* Channels */}
                        <div className="bg-white rounded-xl p-4 border border-emerald-200">
                          <h5 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                            <i className="fas fa-broadcast-tower text-emerald-400 mr-2"></i>
                            Каналы коммуникации:
                          </h5>
                          <ul className="space-y-2">
                            {selectedCase.marathonMechanics.channels.map((channel: string, idx: number) => (
                              <li key={idx} className="text-gray-700 text-sm sm:text-base flex items-start">
                                <i className="fas fa-check-circle text-emerald-400 mr-2 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base"></i>
                                <span>{channel}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Gamification */}
                        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-4 border-2 border-amber-200">
                          <h5 className="text-lg font-semibold text-amber-600 mb-3 flex items-center">
                            <i className="fas fa-gamepad mr-2"></i>
                            Элементы геймификации:
                          </h5>
                          <ul className="space-y-2">
                            {selectedCase.marathonMechanics.gamification.map((game: string, idx: number) => (
                              <li key={idx} className="text-gray-700 text-sm sm:text-base flex items-start">
                                <i className="fas fa-star text-amber-400 mr-2 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base"></i>
                                <span>{game}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Email Sequence Timeline */}
                  {selectedCase.emailSequence && (
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-blue-200 sm:border-2 shadow-lg">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-electric-blue mb-4 sm:mb-6 flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-electric-blue/20 flex items-center justify-center mr-2 sm:mr-3">
                          <i className="fas fa-envelope text-electric-blue"></i>
                        </div>
                        Цепочка писем
                      </h4>
                      
                      <div className="space-y-3">
                        {selectedCase.emailSequence.map((email: any, idx: number) => {
                          const colorClasses: Record<string, string> = {
                            welcome: 'bg-emerald-50 border-emerald-200',
                            content: 'bg-blue-50 border-blue-200',
                            reminder: 'bg-amber-50 border-amber-200',
                            urgent: 'bg-orange-50 border-orange-200',
                            live: 'bg-red-50 border-red-200',
                            sales: 'bg-purple-50 border-purple-200',
                            replay: 'bg-indigo-50 border-indigo-200'
                          };
                          const badgeClasses: Record<string, string> = {
                            welcome: 'bg-emerald-100 text-emerald-600',
                            content: 'bg-blue-100 text-blue-600',
                            reminder: 'bg-amber-100 text-amber-600',
                            urgent: 'bg-orange-100 text-orange-600',
                            live: 'bg-red-100 text-red-600',
                            sales: 'bg-purple-100 text-purple-600',
                            replay: 'bg-indigo-100 text-indigo-600'
                          };
                          
                          return (
                            <div
                              key={idx}
                              className={`rounded-lg p-4 border-2 flex items-start ${colorClasses[email.type] || 'bg-gray-50 border-gray-200'}`}
                            >
                              <div className={`rounded-full w-10 h-10 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0 ${badgeClasses[email.type] || 'bg-gray-100 text-gray-600'}`}>
                                {idx + 1}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                  <p className="font-semibold text-gray-900">{email.stage}</p>
                                  <span className="text-xs font-medium text-gray-500 bg-white px-2 py-1 rounded-full">{email.timing}</span>
                                </div>
                                <p className="text-gray-600 text-sm">{email.content}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  
                  {/* Interactive Features */}
                  {selectedCase.interactiveFeatures && (
                    <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-violet-200 sm:border-2 shadow-lg">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-violet-400 mb-3 sm:mb-4 flex items-center">
                        <i className="fas fa-hand-pointer mr-3"></i>
                        Интерактивные элементы
                      </h4>
                      <ul className="space-y-3">
                        {selectedCase.interactiveFeatures.map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-start text-sm sm:text-base">
                            <i className="fas fa-mouse-pointer text-violet-400 mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base"></i>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Adaptive Logic */}
                  {selectedCase.adaptiveLogic && (
                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border-2 border-cyan-200 shadow-lg">
                      <h4 className="text-2xl font-semibold text-cyan-500 mb-4 flex items-center">
                        <i className="fas fa-brain mr-3"></i>
                        Адаптивная логика
                      </h4>
                      <ul className="space-y-3">
                        {selectedCase.adaptiveLogic.map((logic: string, idx: number) => (
                          <li key={idx} className="flex items-start text-sm sm:text-base">
                            <i className="fas fa-check-circle text-cyan-500 mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base"></i>
                            <span className="text-gray-700">{logic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Implementation Section */}
                  {selectedCase.implementation && (
                    <div>
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-electric-blue mb-3 sm:mb-4 flex items-center">
                        <i className="fas fa-tools mr-3"></i>
                        Техническая реализация
                      </h4>
                      <div className="space-y-3">
                        {selectedCase.implementation.map((impl: string, idx: number) => (
                          <div key={idx} className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg p-4 border border-gray-200">
                            <div className="flex items-start">
                              <span className="bg-electric-blue/10 text-electric-blue rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">{idx + 1}</span>
                              <p className="text-gray-700 text-sm sm:text-base">{impl}</p>
                            </div>
                          </div>
                        ))}
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
                      <ul className="space-y-2 text-gray-700">
                        {selectedCase.technologies.map((tech: string, idx: number) => (
                          <li key={idx} className="flex items-start">
                            <i className="fas fa-check-circle text-electric-blue mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base"></i>
                            <span>{tech}</span>
                          </li>
                        ))}
                      </ul>
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
              ) : selectedCase.id === 10 ? (
                // Case 10: Drawing webinar
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  {/* Task Section */}
                  <div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-emerald-400 mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-bullseye mr-2 sm:mr-3 text-base sm:text-lg"></i>Задача
                    </h4>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">{selectedCase.task}</p>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">{selectedCase.taskDetails}</p>
                  </div>
                  
                  {/* Marathon Schedule Section */}
                  {selectedCase.marathonSchedule && (
                    <div className="bg-gradient-to-br from-electric-blue/10 to-cyan-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-electric-blue/30 sm:border-2 shadow-lg">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-electric-blue mb-4 sm:mb-6 flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-electric-blue/20 flex items-center justify-center mr-2 sm:mr-3">
                          <i className="fas fa-calendar-alt text-electric-blue"></i>
                        </div>
                        Расписание марафона
                      </h4>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-xl p-4 border border-electric-blue/20">
                          <div className="flex items-center mb-2">
                            <i className="fas fa-sync text-electric-blue mr-2"></i>
                            <span className="font-semibold text-gray-900">Частота:</span>
                          </div>
                          <p className="text-gray-700">{selectedCase.marathonSchedule.frequency}</p>
                        </div>
                        
                        <div className="bg-white rounded-xl p-4 border border-electric-blue/20">
                          <div className="flex items-center mb-2">
                            <i className="fas fa-calendar-day text-electric-blue mr-2"></i>
                            <span className="font-semibold text-gray-900">День старта:</span>
                          </div>
                          <p className="text-gray-700">{selectedCase.marathonSchedule.startDay}</p>
                        </div>
                        
                        <div className="bg-white rounded-xl p-4 border border-electric-blue/20">
                          <div className="flex items-center mb-2">
                            <i className="fas fa-users text-electric-blue mr-2"></i>
                            <span className="font-semibold text-gray-900">Платформа:</span>
                          </div>
                          <p className="text-gray-700">{selectedCase.marathonSchedule.platform}</p>
                        </div>
                        
                        <div className="bg-white rounded-xl p-4 border border-electric-blue/20">
                          <div className="flex items-center mb-2">
                            <i className="fas fa-clock text-electric-blue mr-2"></i>
                            <span className="font-semibold text-gray-900">Длительность:</span>
                          </div>
                          <p className="text-gray-700">{selectedCase.marathonSchedule.duration}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Warmup Phase Section */}
                  {selectedCase.warmupPhase && (
                    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-amber-200 sm:border-2 shadow-lg">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-amber-600 mb-3 sm:mb-4 flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-400/20 flex items-center justify-center mr-2 sm:mr-3">
                          <i className="fas fa-fire text-amber-600"></i>
                        </div>
                        {selectedCase.warmupPhase.title}
                      </h4>
                      
                      <div className="bg-white rounded-xl p-4 mb-4 border border-amber-200">
                        <p className="text-gray-700 text-sm sm:text-base mb-2">
                          <strong>Время:</strong> {selectedCase.warmupPhase.timing}
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base">{selectedCase.warmupPhase.description}</p>
                      </div>
                      
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">Цели прогрева:</h5>
                      <ul className="space-y-2">
                        {selectedCase.warmupPhase.goals.map((goal: string, idx: number) => (
                          <li key={idx} className="flex items-start text-sm sm:text-base">
                            <i className="fas fa-check-circle text-amber-500 mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base"></i>
                            <span className="text-gray-700">{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Marathon Phase Section */}
                  {selectedCase.marathonPhase && (
                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-emerald-200 sm:border-2 shadow-lg">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-emerald-400 mb-3 sm:mb-4 flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-400/20 flex items-center justify-center mr-2 sm:mr-3">
                          <i className="fas fa-play text-emerald-400"></i>
                        </div>
                        {selectedCase.marathonPhase.title}
                      </h4>
                      
                      <div className="bg-white rounded-xl p-4 mb-4 border border-emerald-200">
                        <p className="font-semibold text-gray-900 mb-2">День старта: {selectedCase.marathonPhase.startDay}</p>
                      </div>
                      
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">Адаптивная логика:</h5>
                      <ul className="space-y-2">
                        {selectedCase.marathonPhase.adaptiveLogic.map((logic: string, idx: number) => (
                          <li key={idx} className="flex items-start text-sm sm:text-base">
                            <i className="fas fa-brain text-emerald-400 mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base"></i>
                            <span className="text-gray-700">{logic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Daily Schedule Timeline */}
                  {selectedCase.dailySchedule && (
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-blue-200 sm:border-2 shadow-lg">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-electric-blue mb-4 sm:mb-6 flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-electric-blue/20 flex items-center justify-center mr-2 sm:mr-3">
                          <i className="fas fa-calendar-week text-electric-blue"></i>
                        </div>
                        Расписание по дням
                      </h4>
                      
                      <div className="space-y-3">
                        {selectedCase.dailySchedule.map((day: any, idx: number) => {
                          const dayColors: Record<number, string> = {
                            1: 'bg-blue-50 border-blue-200',
                            2: 'bg-indigo-50 border-indigo-200',
                            3: 'bg-violet-50 border-violet-200',
                            4: 'bg-purple-50 border-purple-200',
                            5: 'bg-pink-50 border-pink-200'
                          };
                          const badgeColors: Record<number, string> = {
                            1: 'bg-blue-100 text-blue-600',
                            2: 'bg-indigo-100 text-indigo-600',
                            3: 'bg-violet-100 text-violet-600',
                            4: 'bg-purple-100 text-purple-600',
                            5: 'bg-pink-100 text-pink-600'
                          };
                          
                          return (
                            <div
                              key={idx}
                              className={`rounded-lg p-4 border-2 flex items-start ${dayColors[day.dayNumber] || 'bg-gray-50 border-gray-200'}`}
                            >
                              <div className={`rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 ${badgeColors[day.dayNumber] || 'bg-gray-100 text-gray-600'}`}>
                                День<br/>{day.dayNumber}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                  <p className="font-semibold text-gray-900">{day.day}</p>
                                </div>
                                <p className="text-gray-700 text-sm mb-2">{day.content}</p>
                                <p className="text-xs text-gray-600 italic">{day.availability}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  
                  {/* Showcase Image */}
                  {selectedCase.showcaseImage && (
                    <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-violet-200 sm:border-2 mb-4 sm:mb-6 lg:mb-8">
                      <h5 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 text-center">Схема воронки</h5>
                      <div className="flex justify-center">
                        <img
                          src={selectedCase.showcaseImage.url}
                          alt={selectedCase.showcaseImage.caption}
                          className="rounded-lg sm:rounded-xl shadow-lg sm:shadow-2xl border border-gray-200 sm:border-2 max-w-full h-auto hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <p className="text-center text-gray-600 text-xs sm:text-sm mt-3 sm:mt-4">{selectedCase.showcaseImage.caption}</p>
                    </div>
                  )}
                  
                  {/* Implementation Section */}
                  {selectedCase.implementation && (
                    <div>
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-electric-blue mb-3 sm:mb-4 flex items-center">
                        <i className="fas fa-tools mr-3"></i>
                        Техническая реализация
                      </h4>
                      <div className="space-y-3">
                        {selectedCase.implementation.map((impl: string, idx: number) => (
                          <div key={idx} className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg p-4 border border-gray-200">
                            <div className="flex items-start">
                              <span className="bg-electric-blue/10 text-electric-blue rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">{idx + 1}</span>
                              <p className="text-gray-700 text-sm sm:text-base">{impl}</p>
                            </div>
                          </div>
                        ))}
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
                      <ul className="space-y-2 text-gray-700">
                        {selectedCase.technologies.map((tech: string, idx: number) => (
                          <li key={idx} className="flex items-start">
                            <i className="fas fa-check-circle text-electric-blue mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base"></i>
                            <span>{tech}</span>
                          </li>
                        ))}
                      </ul>
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
                  
                  {/* Implementation Section */}
                  {selectedCase.implementation && (
                    <div>
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-electric-blue mb-3 sm:mb-4 flex items-center">
                        <i className="fas fa-tools mr-3"></i>
                        Техническая реализация
                      </h4>
                      <div className="space-y-3">
                        {selectedCase.implementation.map((impl: string, idx: number) => (
                          <div key={idx} className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg p-4 border border-gray-200">
                            <div className="flex items-start">
                              <span className="bg-electric-blue/10 text-electric-blue rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">{idx + 1}</span>
                              <p className="text-gray-700 text-sm sm:text-base">{impl}</p>
                            </div>
                          </div>
                        ))}
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
                // Case 12: Order upgrade system
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  {/* Task Section */}
                  <div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-emerald-400 mb-3 sm:mb-4 flex items-center">
                      <i className="fas fa-bullseye mr-2 sm:mr-3 text-base sm:text-lg"></i>Задача
                    </h4>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">{selectedCase.task}</p>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">{selectedCase.taskDetails}</p>
                  </div>
                  
                  {/* System Components Grid */}
                  {selectedCase.systemComponents && (
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                      {/* Tracking Component */}
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 border border-blue-200 sm:border-2 shadow-lg">
                        <h4 className="text-lg sm:text-xl font-semibold text-electric-blue mb-3 sm:mb-4 flex items-center">
                          <div className="w-10 h-10 rounded-xl bg-electric-blue/20 flex items-center justify-center mr-3">
                            <i className="fas fa-sync-alt text-electric-blue"></i>
                          </div>
                          {selectedCase.systemComponents.tracking.title}
                        </h4>
                        <ul className="space-y-2">
                          {selectedCase.systemComponents.tracking.features.map((feature: string, idx: number) => (
                            <li key={idx} className="flex items-start text-sm sm:text-base text-gray-700">
                              <i className="fas fa-check-circle text-electric-blue mr-2 mt-0.5 sm:mt-1 flex-shrink-0 text-sm"></i>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Report Page Component */}
                      <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-4 sm:p-6 border border-emerald-200 sm:border-2 shadow-lg">
                        <h4 className="text-lg sm:text-xl font-semibold text-emerald-400 mb-3 sm:mb-4 flex items-center">
                          <div className="w-10 h-10 rounded-xl bg-emerald-400/20 flex items-center justify-center mr-3">
                            <i className="fas fa-chart-bar text-emerald-400"></i>
                          </div>
                          {selectedCase.systemComponents.reportPage.title}
                        </h4>
                        <ul className="space-y-2">
                          {selectedCase.systemComponents.reportPage.features.map((feature: string, idx: number) => (
                            <li key={idx} className="flex items-start text-sm sm:text-base text-gray-700">
                              <i className="fas fa-check-circle text-emerald-400 mr-2 mt-0.5 sm:mt-1 flex-shrink-0 text-sm"></i>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Access Control Component */}
                      <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-4 sm:p-6 border border-violet-200 sm:border-2 shadow-lg">
                        <h4 className="text-lg sm:text-xl font-semibold text-violet-400 mb-3 sm:mb-4 flex items-center">
                          <div className="w-10 h-10 rounded-xl bg-violet-400/20 flex items-center justify-center mr-3">
                            <i className="fas fa-shield-alt text-violet-400"></i>
                          </div>
                          {selectedCase.systemComponents.accessControl.title}
                        </h4>
                        <ul className="space-y-2">
                          {selectedCase.systemComponents.accessControl.features.map((feature: string, idx: number) => (
                            <li key={idx} className="flex items-start text-sm sm:text-base text-gray-700">
                              <i className="fas fa-check-circle text-violet-400 mr-2 mt-0.5 sm:mt-1 flex-shrink-0 text-sm"></i>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Automation Component */}
                      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-4 sm:p-6 border border-amber-200 sm:border-2 shadow-lg">
                        <h4 className="text-lg sm:text-xl font-semibold text-amber-400 mb-3 sm:mb-4 flex items-center">
                          <div className="w-10 h-10 rounded-xl bg-amber-400/20 flex items-center justify-center mr-3">
                            <i className="fas fa-robot text-amber-400"></i>
                          </div>
                          {selectedCase.systemComponents.automation.title}
                        </h4>
                        <ul className="space-y-2">
                          {selectedCase.systemComponents.automation.features.map((feature: string, idx: number) => (
                            <li key={idx} className="flex items-start text-sm sm:text-base text-gray-700">
                              <i className="fas fa-check-circle text-amber-400 mr-2 mt-0.5 sm:mt-1 flex-shrink-0 text-sm"></i>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  
                  {/* Workflow Visualization */}
                  {selectedCase.workflowSteps && (
                    <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 sm:border-2 shadow-lg">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gray-900/10 flex items-center justify-center mr-2 sm:mr-3">
                          <i className="fas fa-project-diagram text-gray-900"></i>
                        </div>
                        Как работает система
                      </h4>
                      
                      <div className="space-y-3">
                        {selectedCase.workflowSteps.map((workflow: any, idx: number) => (
                          <div key={idx} className="relative">
                            {/* Connecting line */}
                            {workflow.step < selectedCase.workflowSteps.length && (
                              <div className="absolute left-5 top-12 w-0.5 h-full bg-gradient-to-b from-electric-blue to-transparent"></div>
                            )}
                            
                            <div className="flex items-start bg-white rounded-lg p-4 border border-gray-200 hover:border-electric-blue transition-colors">
                              <div className="bg-gradient-to-br from-electric-blue to-cyan-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 shadow-lg relative z-10">
                                {workflow.step}
                              </div>
                              <div className="flex-1">
                                <h5 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{workflow.title}</h5>
                                <p className="text-sm sm:text-base text-gray-600">{workflow.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Code Example */}
                  {selectedCase.codeExample && (
                    <div>
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-electric-blue mb-3 sm:mb-4 flex items-center">
                        <i className="fas fa-code mr-3"></i>
                        Техническая реализация
                      </h4>
                      <p className="text-gray-700 text-base sm:text-lg mb-4">{selectedCase.codeExample.description}</p>
                      
                      {/* Code Block */}
                      <div className="bg-gray-900 rounded-xl p-4 sm:p-6 border border-electric-blue/30 sm:border-2 font-mono text-xs sm:text-sm overflow-x-auto shadow-lg sm:shadow-2xl">
                        <div className="flex items-center mb-3 sm:mb-4">
                          <div className="flex space-x-1.5 sm:space-x-2 mr-2 sm:mr-4">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-amber-400"></div>
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-emerald-400"></div>
                          </div>
                          <span className="text-gray-400 text-xs sm:text-sm">{selectedCase.codeExample.filename}</span>
                        </div>
                        <pre className="text-gray-300 whitespace-pre-wrap text-xs sm:text-sm leading-relaxed">{selectedCase.codeExample.code}</pre>
                      </div>
                    </div>
                  )}
                  
                  {/* Implementation Steps */}
                  {selectedCase.implementation && (
                    <div className="bg-blue-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-blue-200">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-electric-blue mb-3 sm:mb-4 flex items-center">
                        <i className="fas fa-tasks mr-3"></i>
                        Что было реализовано
                      </h4>
                      <div className="space-y-2 sm:space-y-3">
                        {selectedCase.implementation.map((impl: string, idx: number) => (
                          <div key={idx} className="flex items-start text-sm sm:text-base">
                            <span className="bg-electric-blue/10 text-electric-blue rounded-full w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">{idx + 1}</span>
                            <span className="text-gray-700">{impl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Technologies */}
                  {selectedCase.technologies && (
                    <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-violet-200">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-violet-400 mb-3 sm:mb-4 flex items-center">
                        <i className="fas fa-code mr-3"></i>
                        Технологии
                      </h4>
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {selectedCase.technologies.map((tech: string, idx: number) => (
                          <span key={idx} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white border border-violet-200 text-violet-600 rounded-full text-xs sm:text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Project Link */}
                  {selectedCase.projectUrl && (
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
                  )}
                  
                  {/* Client Value */}
                  {selectedCase.clientValue && (
                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-4 sm:p-6 border border-emerald-200 sm:border-2 shadow-lg">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-emerald-400 mb-3 sm:mb-4 flex items-center">
                        <i className="fas fa-gem mr-3"></i>
                        Ценность для клиента
                      </h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {selectedCase.clientValue.map((value: string, idx: number) => (
                          <li key={idx} className="flex items-start text-sm sm:text-base">
                            <i className="fas fa-star text-emerald-400 mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base"></i>
                            <span className="text-gray-700">{value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Results Section */}
                  {selectedCase.results && (
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-emerald-200">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-emerald-400 mb-4 flex items-center">
                        <i className="fas fa-trophy mr-3"></i>
                        Результаты
                      </h4>
                      <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base lg:text-lg">
                        {selectedCase.results.map((result: string, idx: number) => (
                          <li key={idx} className="flex items-start">
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Special Features */}
                  {selectedCase.specialFeatures && (
                    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-amber-200">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-amber-600 mb-3 sm:mb-4 flex items-center">
                        <i className="fas fa-sparkles mr-3"></i>
                        Особенности проекта
                      </h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {selectedCase.specialFeatures.map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-start text-sm sm:text-base">
                            <i className="fas fa-certificate text-amber-500 mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base"></i>
                            <span className="text-gray-700">{feature}</span>
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
                            <i className="fas fa-check text-emerald-500 mr-2"></i>{result}
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
      
      <ScrollToTop />
    </div>
  )
}
