import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/8617831/pexels-photo-8617831.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Welcome to Takshasila Vidyapeeth',
    subtitle: 'Excellence in Education Since 2005',
    cta: 'Discover Our School',
    link: '/about'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/8423697/pexels-photo-8423697.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Holistic Education',
    subtitle: 'Nurturing Minds, Building Character',
    cta: 'Our Approach',
    link: '/academics'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/8471825/pexels-photo-8471825.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Join Our Learning Community',
    subtitle: 'Admissions Open for 2025-26',
    cta: 'Apply Now',
    link: '/admissions#application-form'
  }
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  return (
    <section className="relative h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slide.image})`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
          </div>
          
          <div className="relative z-20 h-full flex items-center">
            <div className="container-custom">
              <div 
                className={`max-w-2xl text-white transition-all duration-1000 ${
                  index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">{slide.subtitle}</p>
                <Link 
                  to={slide.link} 
                  className="btn btn-accent text-lg px-8 py-4 hover:shadow-glow"
                >
                  {slide.cta} <ChevronRight size={24} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>
      
      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-accent w-8' : 'bg-white/50 hover:bg-white/80'
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;