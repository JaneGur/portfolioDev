import { useState, useEffect } from 'react'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Scroll to top"
        >
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue via-cyan-400 to-electric-blue rounded-full opacity-0 group-hover:opacity-75 blur-lg transition-opacity duration-500"></div>
          
          {/* Button */}
          <div className="relative w-14 h-14 bg-gradient-to-br from-electric-blue to-cyan-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-electric-blue/50 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 animate-fadeIn">
            {/* Rotating border */}
            <div className="absolute inset-0 rounded-full border-2 border-white/20 group-hover:rotate-180 transition-transform duration-700"></div>
            
            {/* Arrow icon */}
            <i className="fas fa-arrow-up text-white text-xl transform group-hover:scale-110 transition-transform duration-300"></i>
            
            {/* Pulse effect */}
            <div className="absolute inset-0 rounded-full bg-electric-blue animate-ping opacity-25"></div>
          </div>
        </button>
      )}
    </>
  )
}

