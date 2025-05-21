import React, { useState, useRef, useEffect } from 'react';
import { X, Plus, Minus, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompetenciesExpanded, setIsCompetenciesExpanded] = useState(false);
  const menuContentRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsCompetenciesExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClose = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsOpen(false);
    setIsCompetenciesExpanded(false);
  };

  const toggleCompetencies = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsCompetenciesExpanded(!isCompetenciesExpanded);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsCompetenciesExpanded(false);
  };

  return (
    <div className="fixed top-safe-top right-safe-right z-50 p-4 xs:p-6 sm:p-8" ref={menuRef}>
      <div className="relative group">
        {/* Menu Button */}
        <button 
          className="w-[44px] h-[44px] rounded-full border-2 border-current flex flex-col items-center justify-center gap-1.5 hover:bg-white hover:[&>div]:bg-black transition-colors group"
          onClick={() => setIsOpen(true)}
          aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={isOpen}
          aria-controls="menu-content"
        >
          <div className="w-5 h-0.5 bg-current transition-colors" />
          <div className="w-5 h-0.5 bg-current transition-colors" />
        </button>
        
        {/* Menu Container */}
        <div 
          className={`
            fixed md:absolute inset-0 md:inset-auto md:top-full md:right-0
            pointer-events-none
            ${isOpen ? 'visible' : 'invisible md:group-hover:visible'}
          `}
        >
          {/* Backdrop - Mobile only */}
          <div 
            className={`
              absolute inset-0 bg-black/20 backdrop-blur-sm
              transition-opacity duration-300 z-[45]
              md:hidden
              ${isOpen ? 'opacity-100' : 'opacity-0'}
            `}
            onClick={handleClose}
          />

          {/* Menu Content */}
          <div 
            className={`
              w-full md:w-[304px]
              max-h-[100vh] md:max-h-[calc(100vh-120px)]
              ${isAboutPage ? 'bg-black text-white' : 'bg-white text-black'}
              fixed md:relative right-0 top-0
              transition-all duration-300
              rounded-b-2xl md:rounded-2xl
              shadow-2xl
              overflow-y-auto
              pointer-events-auto z-[46]
              md:mt-4
              ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full md:translate-x-0 opacity-0 md:group-hover:opacity-100'}
            `}
            onClick={(e) => e.stopPropagation()}
            id="menu-content"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            {/* Close Button - Mobile only */}
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 hover:opacity-70 transition-opacity touch-target md:hidden"
            >
              <X size={24} />
            </button>
            
            {/* Menu Content */}
            <div ref={menuContentRef} className="flex flex-col p-8 pt-20 md:pt-8">
              {/* Main Navigation */}
              <nav className="flex flex-col space-y-1">
                {/* Services Menu */}
                <div>
                  <button
                    onClick={toggleCompetencies}
                    className={`flex items-center justify-between w-full text-xl tracking-tight leading-none hover:opacity-70 transition-opacity ${isAboutPage ? 'text-white' : ''}`}
                  >
                    <span>Kompetenzen</span>
                    {isCompetenciesExpanded ? <Minus size={20} /> : <Plus size={20} />}
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    isCompetenciesExpanded ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pl-4 flex flex-col space-y-2">
                      <Link
                        to="/webdesign"
                        onClick={handleLinkClick}
                        className={`text-lg py-1 transition-colors ${isAboutPage ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-black'}`}
                      >
                        Webdesign & Development
                      </Link>

                      <Link
                        to="/digital-marketing"
                        onClick={handleLinkClick}
                        className={`text-lg py-1 transition-colors ${isAboutPage ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-black'}`}
                      >
                        Digital Marketing
                      </Link>

                      <Link
                        to="/branding-identity"
                        onClick={handleLinkClick}
                        className={`text-lg py-1 transition-colors ${isAboutPage ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-black'}`}
                      >
                        Branding & Identity
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Projekte */}
                <Link 
                  to="/projekte" 
                  onClick={handleLinkClick} 
                  className={`text-xl tracking-tight py-1 hover:opacity-70 transition-opacity ${isAboutPage ? 'text-white' : ''}`}
                >
                  Projekte
                </Link>

                {/* About */}
                <Link 
                  to="/about" 
                  onClick={handleLinkClick} 
                  className={`text-xl tracking-tight py-1 hover:opacity-70 transition-opacity ${isAboutPage ? 'text-white' : ''}`}
                >
                  About
                </Link>

                {/* Blog */}
                <Link 
                  to="/blog" 
                  onClick={handleLinkClick} 
                  className={`text-xl tracking-tight py-1 hover:opacity-70 transition-opacity ${isAboutPage ? 'text-white' : ''}`}
                >
                  Blog
                </Link>

                {/* Kontakt */}
                <Link 
                  to="/kontakt" 
                  onClick={handleLinkClick} 
                  className={`text-xl tracking-tight py-1 hover:opacity-70 transition-opacity ${isAboutPage ? 'text-white' : ''}`}
                >
                  Kontakt
                </Link>
              </nav>

              {/* Projekt starten button */}
              <Link 
                to="/kontakt" 
                onClick={handleLinkClick} 
                className={`inline-flex items-center justify-center w-full h-[44px] border-2 rounded-full transition-colors tracking-tight whitespace-nowrap mt-6 ${
                  isAboutPage 
                    ? 'border-white text-white hover:bg-white hover:text-black' 
                    : 'border-black text-black hover:bg-black hover:text-white'
                }`}
              >
                Projekt starten <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;