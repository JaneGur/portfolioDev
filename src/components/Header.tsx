import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <header className="fixed top-0 w-full bg-[#0a0d1a]/95 backdrop-blur-sm border-b border-[#1e293b] z-40">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gradient flex items-center hover:opacity-80 transition-opacity">
              <i className="fas fa-code mr-2" style={{ color: 'var(--electric-blue)' }}></i>
              Technical Specialist
            </Link>
          </div>

          {/* Desktop Navigation */}
          {isHomePage && (
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#hero" className="nav-link">Главная</a>
                <a href="#tech" className="nav-link">Технологии</a>
                <a href="#cases" className="nav-link">Кейсы</a>
                <a href="#about" className="nav-link">Обо мне</a>
                <a href="#contact" className="nav-link">Связаться</a>
              </div>
            </div>
          )}

          {/* Mobile menu button */}
          {isHomePage && (
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-slate-300 hover:text-white"
              >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
              </button>
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && isHomePage && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0f1629] border-t border-[#1e293b]">
              <a href="#hero" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">Главная</a>
              <a href="#tech" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">Технологии</a>
              <a href="#cases" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">Кейсы</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">Обо мне</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">Связаться</a>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        .nav-link {
          position: relative;
          color: #cbd5e1;
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s;
        }

        .nav-link:hover {
          color: var(--electric-blue);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 50%;
          background: linear-gradient(90deg, var(--electric-blue), var(--cyan-400));
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-nav-link {
          display: block;
          color: #cbd5e1;
          padding: 0.5rem 0.75rem;
          font-size: 1rem;
          font-weight: 500;
          transition: color 0.2s;
        }

        .mobile-nav-link:hover {
          color: var(--electric-blue);
        }
      `}</style>
    </header>
  )
}