export const Technologies = () => {
  const platforms = [
    { name: 'GetCourse', icon: 'fas fa-chalkboard-teacher', color: 'text-red-400' },
    { name: 'Make.com', icon: 'fas fa-project-diagram', color: 'text-purple-400' },
    { name: 'n8n', icon: 'fas fa-sitemap', color: 'text-pink-400' },
    { name: 'Senler', icon: 'fab fa-vk', color: 'text-blue-400' },
    { name: 'SaleBot', icon: 'fas fa-comments', color: 'text-green-400' },
    { name: 'Telegram', icon: 'fab fa-telegram-plane', color: 'text-sky-400' }
  ]

  const aiTools = [
    { name: 'ChatGPT', icon: 'fas fa-comments', color: 'text-emerald-400' },
    { name: 'Claude', icon: 'fas fa-lightbulb', color: 'text-slate-400' },
    { name: 'Copilot', icon: 'fas fa-gem', color: 'text-blue-400' },
    { name: 'WindSurf', icon: 'fas fa-brain', color: 'text-orange-400' }
  ]

  const frontendTools = [
    { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-400' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-400' },
    { name: 'JavaScript', icon: 'fab fa-js-square', color: 'text-yellow-400' },
    { name: 'React', icon: 'fab fa-react', color: 'text-cyan-400' },
    { name: 'TypeScript', icon: 'fab fa-js', color: 'text-blue-400' },
    { name: 'Next.js', icon: 'fas fa-layer-group', color: 'text-slate-200' },
    { name: 'REST API', icon: 'fas fa-network-wired', color: 'text-green-400' }
  ]

  const toolsList = [
    { name: 'Git', icon: 'fab fa-git-alt', color: 'text-orange-400' },
    { name: 'GitHub', icon: 'fab fa-github', color: 'text-slate-200' },
    { name: 'Figma', icon: 'fab fa-figma', color: 'text-purple-400' },
    { name: 'VSCode', icon: 'fas fa-code', color: 'text-blue-400' },
    { name: 'WebStorm', icon: 'fas fa-rocket', color: 'text-purple-400' }
  ]

  return (
    <section id="tech" className="section-padding bg-navy-900 relative overflow-hidden py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-electric-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="text-sm font-medium text-slate-300 uppercase tracking-wide mb-4 md:mb-6">Технологии</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white/30 mb-6 md:mb-8 leading-tight md:leading-none">
            СТЕК ТЕХНОЛОГИЙ
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mt-4 md:mt-8">
            Инструменты для автоматизации бизнеса
          </p>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Platforms Category */}
          <div className="card-tech rounded-2xl p-8 group cursor-pointer">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center group-hover:bg-red-500/20 transition-all duration-300">
                <i className="fas fa-graduation-cap text-red-400 text-xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Платформы</h3>
                <p className="text-slate-400 text-sm">GetCourse, Make.com, Senler</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {platforms.map((tech) => (
                <div key={tech.name} className="tech-card group/item cursor-pointer">
                  <div className="aspect-square bg-navy-800/50 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center p-4 border border-navy-700/50 hover:border-electric-blue/40 transition-all duration-300">
                    <div className={`text-4xl mb-2 ${tech.color} group-hover/item:scale-110 transition-transform duration-300`}>
                      <i className={tech.icon}></i>
                    </div>
                    <span className="text-xs font-medium text-slate-300 text-center group-hover/item:text-white transition-colors">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Category */}
          <div className="card-tech rounded-2xl p-8 group cursor-pointer">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-300">
                <i className="fas fa-robot text-cyan-400 text-xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">AI</h3>
                <p className="text-slate-400 text-sm">ChatGPT, Claude, Copilot, Windsurf</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {aiTools.map((tech) => (
                <div key={tech.name} className="tech-card group/item cursor-pointer">
                  <div className="aspect-square bg-navy-800/50 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center p-4 border border-navy-700/50 hover:border-electric-blue/40 transition-all duration-300">
                    <div className={`text-4xl mb-2 ${tech.color} group-hover/item:scale-110 transition-transform duration-300`}>
                      <i className={tech.icon}></i>
                    </div>
                    <span className="text-xs font-medium text-slate-300 text-center group-hover/item:text-white transition-colors">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Full Width Frontend Category */}
        <div className="card-tech rounded-2xl p-8 mb-8 group cursor-pointer">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center group-hover:bg-yellow-500/20 transition-all duration-300">
              <i className="fas fa-code text-yellow-400 text-xl"></i>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Frontend</h3>
              <p className="text-slate-400 text-sm">HTML, CSS, JavaScript, React, TypeScript, Next.js, REST API</p>
            </div>
          </div>
          
          <div className="grid grid-cols-4 md:grid-cols-7 gap-4">
            {frontendTools.map((tech) => (
              <div key={tech.name} className="tech-card group/item cursor-pointer">
                <div className="aspect-square bg-navy-800/50 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center p-4 border border-navy-700/50 hover:border-electric-blue/40 transition-all duration-300">
                  <div className={`text-3xl mb-2 ${tech.color} group-hover/item:scale-110 transition-transform duration-300`}>
                    <i className={tech.icon}></i>
                  </div>
                  <span className="text-xs font-medium text-slate-300 text-center group-hover/item:text-white transition-colors leading-tight">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="card-tech rounded-2xl p-8 mb-8 group cursor-pointer">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center group-hover:bg-purple-500/20 transition-all duration-300">
              <i className="fas fa-tools text-purple-400 text-xl"></i>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Инструменты</h3>
              <p className="text-slate-400 text-sm">Git, GitHub, Figma, VSCode, WebStorm</p>
            </div>
          </div>
          
          <div className="grid grid-cols-5 gap-4">
            {toolsList.map((tech) => (
              <div key={tech.name} className="tech-card group/item cursor-pointer">
                <div className="aspect-square bg-navy-800/50 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center p-4 border border-navy-700/50 hover:border-electric-blue/40 transition-all duration-300">
                  <div className={`text-3xl mb-2 ${tech.color} group-hover/item:scale-110 transition-transform duration-300`}>
                    <i className={tech.icon}></i>
                  </div>
                  <span className="text-xs font-medium text-slate-300 text-center group-hover/item:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
