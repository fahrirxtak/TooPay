import { useState, useEffect, useRef } from "react"
import { Menu, X, ChevronDown, Zap, ArrowRight, Sparkles, Globe, Code, Palette } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuItems = [
    { name: "Home", href: "#", active: true },
    { 
      name: "Services", 
      href: "#", 
      hasDropdown: true,
      dropdownItems: [
        { name: "Web Development", href: "#", icon: Globe, description: "Modern web solutions" },
        { name: "Assignment Help", href: "#", icon: Code, description: "Academic assistance" },
        { name: "UI/UX Design", href: "#", icon: Palette, description: "Beautiful interfaces" }
      ]
    },
    { name: "Portfolio", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ]

  const SquirrelIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      {/* Tubuh tupai */}
      <ellipse cx="12" cy="14" rx="3" ry="4" opacity="0.9" />
      
      {/* Kepala tupai */}
      <circle cx="12" cy="8" r="3.5" />
      
      {/* Telinga tupai */}
      <ellipse cx="9.5" cy="5.5" rx="1" ry="1.5" />
      <ellipse cx="14.5" cy="5.5" rx="1" ry="1.5" />
      
      {/* Mata tupai */}
      <circle cx="10.5" cy="7.5" r="0.8" fill="white" />
      <circle cx="13.5" cy="7.5" r="0.8" fill="white" />
      <circle cx="10.5" cy="7.3" r="0.4" fill="black" />
      <circle cx="13.5" cy="7.3" r="0.4" fill="black" />
      
      {/* Hidung tupai */}
      <circle cx="12" cy="8.8" r="0.3" fill="black" />
      
      {/* Ekor tupai yang besar dan berbulu */}
      <path d="M15 16c2-1 4-2 5.5-4.5 1.5-2.5 1-5 0-6.5-1 0.5-2 1.5-3 2.5-1 1-1.5 2-1.5 3 0 1.5 0.5 3 1 4.5 0.3 1 0.5 2 0.8 3-0.8-0.8-1.8-1.5-2.8-2z" opacity="0.8" />
      
      {/* Detail ekor tambahan untuk efek berbulu */}
      <path d="M16 14c1.5-0.5 3-1.5 4-3 0.8-1.2 0.8-2.5 0.3-3.5-0.5 0.3-1 0.8-1.5 1.3-0.8 0.8-1.3 1.5-1.3 2.2 0 1 0.3 2 0.5 3z" opacity="0.6" />
      
      {/* Kaki tupai */}
      <ellipse cx="10" cy="17.5" rx="0.8" ry="1.2" opacity="0.7" />
      <ellipse cx="14" cy="17.5" rx="0.8" ry="1.2" opacity="0.7" />
      
      {/* Tangan tupai */}
      <ellipse cx="9" cy="12" rx="0.6" ry="1" opacity="0.7" />
      <ellipse cx="15" cy="12" rx="0.6" ry="1" opacity="0.7" />
    </svg>
  )

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/20 backdrop-blur-2xl border-b border-white/30 shadow-2xl" 
          : "bg-gradient-to-b from-black/10 to-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              {/* Main logo container */}
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-xl shadow-amber-500/30 group-hover:shadow-2xl group-hover:shadow-amber-500/50 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                <SquirrelIcon className="w-7 h-7 text-white group-hover:animate-pulse" />
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full shadow-lg shadow-purple-500/40">
                <div className="w-full h-full rounded-full animate-ping bg-purple-400/60"></div>
              </div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full shadow-md shadow-emerald-500/40 animate-bounce"></div>
              
              {/* Sparkle effect */}
              <Sparkles className="absolute -top-1 -left-1 w-4 h-4 text-yellow-400 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 group-hover:scale-105 transform transition-transform duration-300">
                TooPay
              </h1>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 font-medium tracking-wide">
                Design Without Limits
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    item.active
                      ? "text-white bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg shadow-amber-500/30"
                      : "text-neutral-700 dark:text-neutral-300 hover:text-amber-500 hover:bg-white/20 backdrop-blur-sm"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === index ? "rotate-180" : ""
                    }`} />
                  )}
                </a>
                
                {/* Subtle Dropdown */}
                {item.hasDropdown && (
                  <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 transition-all duration-300 ${
                    activeDropdown === index 
                      ? "opacity-100 visible translate-y-0" 
                      : "opacity-0 invisible translate-y-2"
                  }`}>
                    <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg p-2 overflow-hidden">
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <a 
                          key={dropdownIndex}
                          href={dropdownItem.href} 
                          className="relative flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-200 group/item"
                        >
                          <div className="w-8 h-8 bg-neutral-200/20 dark:bg-neutral-700/30 rounded-lg flex items-center justify-center group-hover/item:bg-white/20 transition-all duration-200">
                            <dropdownItem.icon className="w-4 h-4 text-neutral-600 dark:text-neutral-300 group-hover/item:text-amber-500" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-200 group-hover/item:text-amber-600 transition-colors duration-200">
                              {dropdownItem.name}
                            </h3>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400">
                              {dropdownItem.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Enhanced CTA Button */}
            <button className="hidden lg:flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white rounded-2xl shadow-xl shadow-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/60 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              
              <Zap className="w-5 h-5 group-hover:animate-pulse relative z-10" />
              <span className="font-semibold relative z-10">Hubungi Kami</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-3 text-neutral-700 dark:text-white hover:bg-white/20 rounded-2xl transition-all duration-300 hover:scale-110" 
              onClick={toggleMenu}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full transition-all duration-500 ${
        isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
      }`}>
        <div className="bg-white/30 backdrop-blur-2xl border-b border-white/30 shadow-2xl">
          <div className="flex flex-col p-6 space-y-2">
            {menuItems.map((item, index) => (
              <a 
                key={index} 
                href={item.href} 
                className={`flex items-center justify-between p-4 rounded-2xl font-medium transition-all duration-300 hover:scale-[1.02] ${
                  item.active 
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30"
                    : "text-neutral-700 dark:text-neutral-200 hover:bg-white/20 hover:text-amber-500"
                }`}
              >
                <span>{item.name}</span>
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
            
            {/* Mobile CTA */}
            <button className="flex items-center justify-center space-x-3 p-4 mt-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/50 transition-all duration-300">
              <Zap className="w-5 h-5" />
              <span className="font-semibold">Hubungi Kami </span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar