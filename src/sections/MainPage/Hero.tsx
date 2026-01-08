export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800"></div>
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        <div className="particle w-2 h-2 left-10 animation-delay-0"></div>
        <div className="particle w-1 h-1 left-20 animation-delay-2"></div>
        <div className="particle w-3 h-3 left-40 animation-delay-4"></div>
        <div className="particle w-1 h-1 right-10 animation-delay-1"></div>
        <div className="particle w-2 h-2 right-30 animation-delay-3"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="text-center lg:text-left slide-in-left space-y-8">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-electric-blue/10 border border-electric-blue/20 rounded-full text-electric-blue text-sm font-mono mb-6">
                <i className="fas fa-cogs mr-2"></i>
                Automation Specialist
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-8 md:mb-12">
              <span className="text-white">Автоматизирую</span>
              <span className="block text-gradient mt-2">бизнес-процессы</span>
            </h1>
            
            <div className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-12 md:mb-16 leading-relaxed space-y-4">
              <p>
                <strong className="text-electric-blue">GetCourse</strong> • <strong className="text-cyan-400">Salebot</strong> • <strong className="text-violet-400">Make.com</strong>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-16">
              <a href="#cases" className="btn-primary group">
                <i className="fas fa-cogs mr-3 transition-transform group-hover:rotate-90"></i>
                Мои проекты
              </a>
              <a href="#contact" className="btn-secondary group">
                <i className="fas fa-paper-plane mr-3 transition-transform group-hover:scale-110"></i>
                Связаться
              </a>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              <div className="text-center card-tech p-3 sm:p-4 rounded-xl hover:scale-105 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-electric-blue mb-1 sm:mb-2">100+</div>
                <div className="text-slate-300 text-xs sm:text-sm">Воронок</div>
              </div>
              <div className="text-center card-tech p-3 sm:p-4 rounded-xl hover:scale-105 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1 sm:mb-2">5</div>
                <div className="text-slate-300 text-xs sm:text-sm">Лет опыта</div>
              </div>
              <div className="text-center card-tech p-3 sm:p-4 rounded-xl hover:scale-105 transition-all duration-300">
                <div className="text-xl sm:text-2xl font-bold text-violet-400 mb-1 sm:mb-2">15млн</div>
                <div className="text-slate-300 text-xs sm:text-sm">Оборот</div>
              </div>
            </div>
          </div>
          
          {/* Interactive Code Block */}
          <div className="relative slide-in-right">
            <div className="card-tech rounded-2xl p-8 floating-element">
              {/* Window Header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-slate-400 text-sm font-mono ml-4">automation.js</div>
              </div>
              
              {/* Code Content */}
              <div className="font-mono text-sm space-y-3">
                <div className="text-slate-500">// Автоматизация бизнес-процессов</div>
                <div>
                  <span className="text-violet-400">const</span>
                  <span className="text-white"> automation</span>
                  <span className="text-slate-400"> = {'{'}</span>
                </div>
                <div className="pl-4">
                  <span className="text-emerald-400">опыт</span><span className="text-slate-400">:</span>
                  <span className="text-amber-400"> '5 лет'</span><span className="text-slate-400">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-emerald-400">воронок</span><span className="text-slate-400">:</span>
                  <span className="text-cyan-400"> 100+</span><span className="text-slate-400">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-emerald-400">оборот</span><span className="text-slate-400">:</span>
                  <span className="text-amber-400"> '15 млн'</span><span className="text-slate-400">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-emerald-400">платформы</span><span className="text-slate-400">: [</span>
                </div>
                <div className="pl-8">
                  <span className="text-cyan-400">'GetCourse'</span><span className="text-slate-400">,</span>
                </div>
                <div className="pl-8">
                  <span className="text-cyan-400">'Salebot'</span><span className="text-slate-400">,</span>
                </div>
                <div className="pl-8">
                  <span className="text-violet-400">'Make.com'</span>
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">]</span>
                </div>
                <div>
                  <span className="text-slate-400">{'}'}</span>
                </div>
                
                <div className="pt-3 border-t border-slate-700">
                  <span className="text-slate-500">// Автоматизирую бизнес-процессы</span>
                  <div className="typing-cursor"></div>
                </div>
              </div>
            </div>
            
            {/* Floating Tech Icons */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center floating-element glow-blue">
              <i className="fas fa-project-diagram text-2xl text-electric-blue"></i>
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center floating-element glow-violet">
              <i className="fas fa-layer-group text-lg text-cyan-400"></i>
            </div>
            <div className="absolute top-1/2 -left-6 w-10 h-10 bg-violet-400/20 rounded-full flex items-center justify-center floating-element">
              <i className="fas fa-bolt text-sm text-violet-400"></i>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <a href="#cases" className="text-electric-blue hover:text-cyan-400 transition-colors">
          <div className="animate-bounce">
            <i className="fas fa-chevron-down text-2xl"></i>
          </div>
        </a>
      </div>
    </section>
  )
}
