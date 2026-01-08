import { useEffect, useState, useRef } from 'react'
import { Header } from '../components/Header'
import { Hero } from '../sections/MainPage/Hero'
import { Technologies } from '../sections/MainPage/Technologies'
import { Cases } from '../sections/MainPage/Cases'
import { About } from '../sections/MainPage/About'
import { Contact } from '../sections/MainPage/Contact'

export const MainPage = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const observerRef = useRef<IntersectionObserver | null>(null)

  const sections = [
    { id: 'hero', title: 'Главная' },
    { id: 'cases', title: 'Кейсы' },
    { id: 'about', title: 'О себе' },
    { id: 'tech', title: 'Технологии' },
    { id: 'contact', title: 'Контакты' }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    // Intersection Observer для активной секции
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element && observerRef.current) {
        observerRef.current.observe(element)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  // Генерируем случайные параметры для частиц один раз
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    width: Math.random() * 4 + 2,
    height: Math.random() * 4 + 2,
    delay: Math.random() * 10
  }))

  return (
    <>
      {/* Интерактивные частицы фона */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle opacity-20"
            style={{
              left: `${particle.left}%`,
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Сайдбар навигация */}
      <nav className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 ml-6 space-y-4 hidden lg:block">
        {sections.map((section) => (
          <div
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`w-3 h-3 rounded-full border-2 border-sky-400 cursor-pointer transition-all duration-300 hover:scale-150 ${
              activeSection === section.id
                ? 'bg-sky-400 glow-blue'
                : 'bg-transparent'
            }`}
            title={section.title}
          />
        ))}
      </nav>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Cases />
          <About />
          <Technologies />
          <Contact />
        </main>
        <footer className="border-t border-[#1e293b] py-8 px-4 sm:px-6 lg:px-8 bg-[#0f1629]/50">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-slate-400 mb-4 md:mb-0">
                © 2026 Евгения Гурциева
              </div>
              <div className="flex space-x-6">
                <a href="https://t.me/gurtsievae" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0ea5e9] transition-colors">
                  <i className="fab fa-telegram text-2xl"></i>
                </a>
                <a href="mailto:evgeniyagursieva@gmail.com" className="text-slate-400 hover:text-[#0ea5e9] transition-colors">
                  <i className="fas fa-envelope text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

