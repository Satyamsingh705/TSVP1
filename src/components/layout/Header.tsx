import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Plus, Minus } from 'lucide-react';
import Logo from '../common/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMegaMenus, setOpenMegaMenus] = useState<string[]>([]);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Prevent default touchmove behavior on document to stop overscroll
    const preventPullToRefresh = (e: TouchEvent) => {
      if (window.scrollY === 0 && e.touches[0].clientY > 0) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchstart', preventPullToRefresh, { passive: false });

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
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
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
      } bg-[#2f3a87]`}
    >
      {/* Top Bar */}
      <div className="bg-[#2f3a87] text-white py-2 text-sm">
        <div className="container-custom flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="tel:+910000000000" className="flex items-center hover:text-accent transition-colors">
              <Phone size={14} className="mr-1" />
              <span>+91 00000 00000</span>
            </a>
          </div>
          <div className="flex items-center">
            <div className="flex items-center hover:text-accent transition-colors">
              <MapPin size={14} className="mr-1" />
              <span>Bakhri (Main) | Begusarai</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className="py-4 bg-[#2f3a87]">
        <div className="container-custom flex justify-between items-center">
          <Link to="/" className="flex-shrink-0 transform hover:scale-105 transition-transform" onClick={closeMenu}>
            <Logo color="white" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink to="/" className={({isActive}) => `text-white text-[18px] font-body ${isActive ? 'font-medium' : ''}`}>
              Home
            </NavLink>
            
            <div className="relative group">
              <button 
                className="text-white text-[18px] font-body flex items-center group"
              >
                About
              </button>
              
              <div className="absolute left-0 mt-2 w-64 bg-[#333399] shadow-md p-3 space-y-1 transition-all duration-300 transform opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 divide-y divide-white/20">
                <Link 
                  to="/about" 
                  className="block px-[10px] py-[10px] text-white hover:bg-[#4c58b5] transition-colors font-helveticaNeue text-[17px]"
                  onClick={closeMenu}
                >
                  Overview
                </Link>
                <Link 
                  to="/about#mission-vision" 
                  className="block px-[10px] py-[10px] text-white hover:bg-[#4c58b5] transition-colors font-helveticaNeue text-[17px]"
                  onClick={() => handleAnchorClick('#mission-vision')}
                >
                  Mission & Vision
                </Link>
                <Link 
                  to="/about#leadership" 
                  className="block px-[10px] py-[10px] text-white hover:bg-[#4c58b5] transition-colors font-helveticaNeue text-[17px]"
                  onClick={() => handleAnchorClick('#leadership')}
                >
                  Leadership
                </Link>
              </div>
            </div>
            
            <NavLink to="/academics" className={({isActive}) => `text-white text-[18px] font-body ${isActive ? 'font-medium' : ''}`}>
              Academics
            </NavLink>
            
            <NavLink to="/admissions" className={({isActive}) => `text-white text-[18px] font-body ${isActive ? 'font-medium' : ''}`}>
              Admissions
            </NavLink>
            
            <NavLink to="/campus" className={({isActive}) => `text-white text-[18px] font-body ${isActive ? 'font-medium' : ''}`}>
              Campus
            </NavLink>
            
            <div className="relative group">
              <button 
                className="text-white text-[18px] font-body flex items-center group"
              >
                Branches
              </button>
              
              <div className="absolute left-0 mt-2 w-56 bg-[#333399] shadow-md p-3 space-y-1 transition-all duration-300 transform opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 divide-y divide-white/20">
                <NavLink 
                  to="/branches/bakhri" 
                  className="block px-[10px] py-[10px] text-white hover:bg-[#4c58b5] transition-colors font-helveticaNeue text-[17px]"
                  onClick={closeMenu}
                >
                  Bakhri (Main)
                </NavLink>
                <NavLink 
                  to="/branches/begusarai" 
                  className="block px-[10px] py-[10px] text-white hover:bg-[#4c58b5] transition-colors font-helveticaNeue text-[17px]"
                  onClick={closeMenu}
                >
                  Begusarai
                </NavLink>
              </div>
            </div>
            
            <NavLink to="/news-events" className={({isActive}) => `text-white text-[18px] font-body ${isActive ? 'font-medium' : ''}`}>
              News & Events
            </NavLink>
            
            <NavLink to="/contact" className={({isActive}) => `text-white text-[18px] font-body ${isActive ? 'font-medium' : ''}`}>
              Contact
            </NavLink>
          </div>

          <Link to="/admission-inquiry.html" className="hidden lg:inline-flex btn bg-white text-[#2f3a87] font-medium shadow-soft hover:shadow-lg">
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
          className={`absolute top-0 right-0 h-screen w-[80%] max-w-md bg-[#2f3a87] overflow-y-auto transform transition-transform duration-500 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end p-4">
            <button 
              className="p-2 rounded-lg text-white hover:bg-[#4c58b5] transition-colors"
              onClick={closeMenu}
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="px-4 pb-6 space-y-4">
            <NavLink 
              to="/" 
              className={({isActive}) => `block py-[12px] px-0 text-[18px] font-body border-b border-[#3f4aa3] ${isActive ? 'text-white font-medium' : 'text-white'}`}
              onClick={closeMenu}
            >
              Home
            </NavLink>
            
            <div>
              <button
                className="flex items-center justify-between w-full py-[12px] px-0 text-[18px] font-body border-b border-[#3f4aa3] text-white"
                onClick={() => toggleMegaMenu('about-mobile')}
              >
                <span>About</span>
                {openMegaMenus.includes('about-mobile') ? 
                  <Minus size={16} className="text-white" /> : 
                  <Plus size={16} className="text-white" />
                }
              </button>
              
              <div className={`pl-4 space-y-2 mt-2 bg-[#333399] rounded-md p-2 ${openMegaMenus.includes('about-mobile') ? 'block' : 'hidden'} divide-y divide-gray-500/30`}>
                <Link 
                  to="/about" 
                  className="block px-[10px] py-[10px] text-white hover:bg-[#4c58b5] transition-colors font-helveticaNeue text-[17px]"
                  onClick={closeMenu}
                >
                  Overview
                </Link>
                <Link 
                  to="/about#mission-vision" 
                  className="block px-[10px] py-[10px] text-white hover:bg-[#4c58b5] transition-colors font-helveticaNeue text-[17px]"
                  onClick={() => handleAnchorClick('#mission-vision')}
                >
                  Mission & Vision
                </Link>
                <Link 
                  to="/about#leadership" 
                  className="block px-[10px] py-[10px] text-white hover:bg-[#4c58b5] transition-colors font-helveticaNeue text-[17px]"
                  onClick={() => handleAnchorClick('#leadership')}
                >
                  Leadership
                </Link>
              </div>
            </div>
            
            <NavLink 
              to="/academics" 
              className={({isActive}) => `block py-[12px] px-0 text-[18px] font-body border-b border-[#3f4aa3] ${isActive ? 'text-white font-medium' : 'text-white'}`}
              onClick={closeMenu}
            >
              Academics
            </NavLink>
            
            <NavLink 
              to="/admissions" 
              className={({isActive}) => `block py-[12px] px-0 text-[18px] font-body border-b border-[#3f4aa3] ${isActive ? 'text-white font-medium' : 'text-white'}`}
              onClick={closeMenu}
            >
              Admissions
            </NavLink>
            
            <NavLink 
              to="/campus" 
              className={({isActive}) => `block py-[12px] px-0 text-[18px] font-body border-b border-[#3f4aa3] ${isActive ? 'text-white font-medium' : 'text-white'}`}
              onClick={closeMenu}
            >
              Campus
            </NavLink>
            
            <div>
              <button
                className="flex items-center justify-between w-full py-[12px] px-0 text-[18px] font-body border-b border-[#3f4aa3] text-white"
                onClick={() => toggleMegaMenu('branches-mobile')}
              >
                <span>Branches</span>
                {openMegaMenus.includes('branches-mobile') ? 
                  <Minus size={16} className="text-white" /> : 
                  <Plus size={16} className="text-white" />
                }
              </button>
              
              <div className={`pl-4 space-y-2 mt-2 bg-[#333399] rounded-md p-2 ${openMegaMenus.includes('branches-mobile') ? 'block' : 'hidden'} divide-y divide-gray-500/30`}>
                <NavLink 
                  to="/branches/bakhri" 
                  className="block px-[10px] py-[10px] text-white hover:bg-[#4c58b5] transition-colors font-helveticaNeue text-[17px]"
                  onClick={closeMenu}
                >
                  Bakhri (Main)
                </NavLink>
                <NavLink 
                  to="/branches/begusarai" 
                  className="block px-[10px] py-[10px] text-white hover:bg-[#4c58b5] transition-colors font-helveticaNeue text-[17px]"
                  onClick={closeMenu}
                >
                  Begusarai
                </NavLink>
              </div>
            </div>
            
            <NavLink 
              to="/news-events" 
              className={({isActive}) => `block py-[12px] px-0 text-[18px] font-body border-b border-[#3f4aa3] ${isActive ? 'text-white font-medium' : 'text-white'}`}
              onClick={closeMenu}
            >
              News & Events
            </NavLink>
            
            <NavLink 
              to="/contact" 
              className={({isActive}) => `block py-[12px] px-0 text-[18px] font-body border-b border-[#3f4aa3] ${isActive ? 'text-white font-medium' : 'text-white'}`}
              onClick={closeMenu}
            >
              Contact
            </NavLink>
            
            <div className="mt-6">
              <Link to="/admission-inquiry.html" className="w-full btn bg-white text-[#2f3a87] block text-center text-lg" onClick={closeMenu}>
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;