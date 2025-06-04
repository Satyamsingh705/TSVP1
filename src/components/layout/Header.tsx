import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Plus, Minus } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMegaMenus, setOpenMegaMenus] = useState<string[]>([]);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Less aggressive pull-to-refresh prevention that doesn't interfere with normal touch events
    const preventPullToRefresh = (e: TouchEvent) => {
      // Only prevent pull-to-refresh when at the top of the page and pulling down significantly
      if (window.scrollY === 0 && e.touches[0].clientY > 70) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchstart', preventPullToRefresh, { passive: true });

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('touchstart', preventPullToRefresh);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isMenuOpen]);

  // Update the header height effect to be more aggressive about preventing gaps
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        document.body.style.paddingTop = `${headerHeight}px`;
        
        // Force the fixed position to be exact
        headerRef.current.style.top = '0';
        headerRef.current.style.left = '0';
        headerRef.current.style.right = '0';
      }
    };

    // Update immediately and after a short delay to catch any layout shifts
    updateHeaderHeight();
    const timeoutId = setTimeout(updateHeaderHeight, 100);
    
    window.addEventListener('resize', updateHeaderHeight);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  // Add effect to update header height when scroll state changes
  useEffect(() => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      document.body.style.paddingTop = `${headerHeight}px`;
    }
  }, [isScrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenMegaMenus([]);
  };

  const toggleMegaMenu = (menu: string) => {
    if (openMegaMenus.includes(menu)) {
      setOpenMegaMenus(openMegaMenus.filter(m => m !== menu));
    } else {
      setOpenMegaMenus([...openMegaMenus, menu]);
    }
  };

  const handleAnchorClick = (hash: string) => {
    closeMenu();
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <header 
      ref={headerRef}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-soft' : ''
      } bg-[#333399]`}
    >
    
      {/* Main Navigation */}
      <nav className="py-3 bg-[#333399]">
        <div className="container-custom flex justify-between items-center px-3">
          <Link to="/" className="flex-shrink-0 transform hover:scale-105 transition-transform mr-0 sm:mr-4 flex items-center" onClick={closeMenu}>
            <img 
              src="https://blogger.googleusercontent.com/img/a/AVvXsEi1D2zKUlLNeELwcdxB_DXTu7xVfat_D3nRU-TIFjG64k74R_ZBG54ODM_wrkxzKxtPf8BunQMGfLMKFGEvsSqWhgMwLEmnHqhJ4f2I4lZOE3J84JZT2JWMWZmF3J57in0kGUZMAApLX5aK9sS425_W0qIRrYYQM1g2fD8ycupr4qYura4VCouc7N1v85Ou" 
              alt="Takshasila Vidyapith Logo"
              className="h-12 w-auto sm:h-14 rounded-lg"
            />
            <span className="ml-3 sm:ml-5 text-white text-base font-bold sm:font-normal sm:text-sm md:text-base lg:text-xl uppercase">Takshasila Vidyapith</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-5">
            <NavLink to="/" className={({isActive}) => `text-white text-[15px] font-body px-1.5 ${isActive ? 'font-medium' : ''}`}>
              Home
            </NavLink>
            
            <div className="relative group px-1.5">
              <button 
                className="text-white text-[15px] font-body flex items-center group"
              >
                About
              </button>
              
              <div className="absolute left-0 mt-2 w-64 bg-[#434398EB] shadow-md p-3 space-y-1 transition-all duration-300 transform opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 divide-y divide-white/20">
                <Link 
                  to="/about" 
                  className="block px-[10px] py-[8px] text-white hover:bg-[#4c58b5] transition-colors font-helveticaNeue text-[15px]"
                  onClick={closeMenu}
                  style={{ fontFamily: "HelveticaNeue, Helvetica, Arial, sans-serif !important" }}
                >
                  Overview
                </Link>
                <Link 
                  to="/about#mission-vision" 
                  className="block px-[10px] py-[8px] text-white hover:bg-[#4c58b5] transition-colors font-helveticaNeue text-[15px]"
                  onClick={() => handleAnchorClick('#mission-vision')}
                  style={{ fontFamily: "HelveticaNeue, Helvetica, Arial, sans-serif !important" }}
                >
                  Mission & Vision
                </Link>
                <Link 
                  to="/about#leadership" 
                  className="block px-[10px] py-[8px] text-white hover:bg-[#4c58b5] transition-colors font-helveticaNeue text-[15px]"
                  onClick={() => handleAnchorClick('#leadership')}
                  style={{ fontFamily: "HelveticaNeue, Helvetica, Arial, sans-serif !important" }}
                >
                  Leadership
                </Link>
              </div>
            </div>
            
            <NavLink to="/academics" className={({isActive}) => `text-white text-[15px] font-body px-1.5 ${isActive ? 'font-medium' : ''}`}>
              Academics
            </NavLink>
            
            <NavLink to="/admissions" className={({isActive}) => `text-white text-[15px] font-body px-1.5 ${isActive ? 'font-medium' : ''}`}>
              Admissions
            </NavLink>
            
            <NavLink to="/campus" className={({isActive}) => `text-white text-[15px] font-body px-1.5 ${isActive ? 'font-medium' : ''}`}>
              Campus
            </NavLink>
            
            <div className="relative group px-1.5">
              <button 
                className="text-white text-[15px] font-body flex items-center group"
              >
                Branches
              </button>
              
              <div className="absolute left-0 mt-2 w-56 bg-[#434398EB] shadow-md p-3 space-y-1 transition-all duration-300 transform opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 divide-y divide-white/20">
                <NavLink 
                  to="/branches/bakhri" 
                  className="block px-[10px] py-[8px] text-white hover:bg-[#4c58b5] transition-colors font-helveticaNeue text-[15px]"
                  onClick={closeMenu}
                  style={{ fontFamily: "HelveticaNeue, Helvetica, Arial, sans-serif !important" }}
                >
                  Bakhri (Main)
                </NavLink>
                <NavLink 
                  to="/branches/begusarai" 
                  className="block px-[10px] py-[8px] text-white hover:bg-[#4c58b5] transition-colors font-helveticaNeue text-[15px]"
                  onClick={closeMenu}
                  style={{ fontFamily: "HelveticaNeue, Helvetica, Arial, sans-serif !important" }}
                >
                  Begusarai
                </NavLink>
              </div>
            </div>
            
            <NavLink to="/news-events" className={({isActive}) => `text-white text-[15px] font-body px-1.5 ${isActive ? 'font-medium' : ''}`}>
              News & Events
            </NavLink>
            
            <NavLink to="/contact" className={({isActive}) => `text-white text-[15px] font-body px-1.5 ${isActive ? 'font-medium' : ''}`}>
              Contact
            </NavLink>
          </div>

          <Link to="/admission-inquiry.html" className="hidden lg:inline-flex btn bg-white text-[#333399] font-medium shadow-soft hover:shadow-lg text-sm px-4 py-2 ml-4">
            Apply Now
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg text-white hover:bg-[#4c58b5] focus:outline-none transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      >
        <div 
          className={`absolute top-0 left-0 h-screen w-[65%] max-w-[300px] bg-[#333399] overflow-y-auto transform transition-transform duration-500 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-[-100%]'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-4 pt-6 pb-6 space-y-4">
            <NavLink 
              to="/" 
              className={({isActive}) => `block py-[10px] px-0 text-[17px] font-body border-b border-[#3f4aa3] ${isActive ? 'text-white font-medium' : 'text-white'}`}
              onClick={closeMenu}
            >
              Home
            </NavLink>
            
            <div>
              <button
                className="flex items-center justify-between w-full py-[10px] px-0 text-[17px] font-body border-b border-[#3f4aa3] text-white"
                onClick={() => toggleMegaMenu('about-mobile')}
              >
                <span>About</span>
                {openMegaMenus.includes('about-mobile') ? 
                  <Minus size={16} className="text-white" /> : 
                  <Plus size={16} className="text-white" />
                }
              </button>
              
              <div className={`pl-4 space-y-2 mt-2 bg-[#434398EB] rounded-md p-2 ${openMegaMenus.includes('about-mobile') ? 'block' : 'hidden'} divide-y divide-gray-500/30`}>
                <Link 
                  to="/about" 
                  className="block px-[10px] py-[10px] text-white hover:bg-[#4c58b5] transition-colors font-body text-[17px]"
                  onClick={closeMenu}
                >
                  Overview
                </Link>
                <Link 
                  to="/about#mission-vision" 
                  className="block px-[10px] py-[10px] text-white hover:bg-[#4c58b5] transition-colors font-body text-[17px]"
                  onClick={() => handleAnchorClick('#mission-vision')}
                >
                  Mission & Vision
                </Link>
                <Link 
                  to="/about#leadership" 
                  className="block px-[10px] py-[10px] text-white hover:bg-[#4c58b5] transition-colors font-body text-[17px]"
                  onClick={() => handleAnchorClick('#leadership')}
                >
                  Leadership
                </Link>
              </div>
            </div>
            
            <NavLink 
              to="/academics" 
              className={({isActive}) => `block py-[10px] px-0 text-[16px] font-body border-b border-[#3f4aa3] ${isActive ? 'text-white font-medium' : 'text-white'}`}
              onClick={closeMenu}
            >
              Academics
            </NavLink>
            
            <NavLink 
              to="/admissions" 
              className={({isActive}) => `block py-[10px] px-0 text-[16px] font-body border-b border-[#3f4aa3] ${isActive ? 'text-white font-medium' : 'text-white'}`}
              onClick={closeMenu}
            >
              Admissions
            </NavLink>
            
            <NavLink 
              to="/campus" 
              className={({isActive}) => `block py-[10px] px-0 text-[17px] font-body border-b border-[#3f4aa3] ${isActive ? 'text-white font-medium' : 'text-white'}`}
              onClick={closeMenu}
            >
              Campus
            </NavLink>
            
            <div>
              <button
                className="flex items-center justify-between w-full py-[10px] px-0 text-[17px] font-body border-b border-[#3f4aa3] text-white"
                onClick={() => toggleMegaMenu('branches-mobile')}
              >
                <span>Branches</span>
                {openMegaMenus.includes('branches-mobile') ? 
                  <Minus size={16} className="text-white" /> : 
                  <Plus size={16} className="text-white" />
                }
              </button>
              
              <div className={`pl-4 space-y-2 mt-2 bg-[#434398EB] rounded-md p-2 ${openMegaMenus.includes('branches-mobile') ? 'block' : 'hidden'} divide-y divide-gray-500/30`}>
                <NavLink 
                  to="/branches/bakhri" 
                  className="block px-[10px] py-[10px] text-white hover:bg-[#4c58b5] transition-colors font-body text-[17px]"
                  onClick={closeMenu}
                >
                  Bakhri (Main)
                </NavLink>
                <NavLink 
                  to="/branches/begusarai" 
                  className="block px-[10px] py-[10px] text-white hover:bg-[#4c58b5] transition-colors font-body text-[17px]"
                  onClick={closeMenu}
                >
                  Begusarai
                </NavLink>
              </div>
            </div>
            
            <NavLink 
              to="/news-events" 
              className={({isActive}) => `block py-[10px] px-0 text-[17px] font-body border-b border-[#3f4aa3] ${isActive ? 'text-white font-medium' : 'text-white'}`}
              onClick={closeMenu}
            >
              News & Events
            </NavLink>
            
            <NavLink 
              to="/contact" 
              className={({isActive}) => `block py-[10px] px-0 text-[17px] font-body border-b border-[#3f4aa3] ${isActive ? 'text-white font-medium' : 'text-white'}`}
              onClick={closeMenu}
            >
              Contact
            </NavLink>
            
            <div className="mt-6">
              <Link to="/admission-inquiry.html" className="w-full btn bg-white text-[#333399] block text-center text-lg" onClick={closeMenu}>
                Apply Now
              </Link>
            </div>
            
            {/* School Logo in Mobile Menu */}
            <div className="mt-8 flex justify-center">
              <img 
                src="https://blogger.googleusercontent.com/img/a/AVvXsEi1D2zKUlLNeELwcdxB_DXTu7xVfat_D3nRU-TIFjG64k74R_ZBG54ODM_wrkxzKxtPf8BunQMGfLMKFGEvsSqWhgMwLEmnHqhJ4f2I4lZOE3J84JZT2JWMWZmF3J57in0kGUZMAApLX5aK9sS425_W0qIRrYYQM1g2fD8ycupr4qYura4VCouc7N1v85Ou" 
                alt="Takshasila Vidyapith Logo"
                className="h-24 w-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;