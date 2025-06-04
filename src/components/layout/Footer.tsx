import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import Logo from '../common/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  // Updated with actual brand logos as SVGs for more realistic icons
  const socialIcons = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full text-[#4267B2]">
          <path 
            fill="currentColor" 
            d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
          />
        </svg>
      ),
      link: 'https://www.facebook.com/',
      label: 'Facebook'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full text-[#FF0000]">
          <path 
            fill="currentColor" 
            d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"
          />
        </svg>
      ),
      link: 'https://www.youtube.com/',
      label: 'Youtube'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full text-[#25D366]">
          <path 
            fill="currentColor" 
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
          />
        </svg>
      ),
      link: 'https://wa.me/910000000000',
      label: 'WhatsApp'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full text-[#0088cc]">
          <path 
            fill="currentColor" 
            d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
          />
        </svg>
      ),
      link: 'https://t.me/takshasilavidyapith',
      label: 'Telegram'
    }
  ];
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - School Information */}
          <div>
            <div className="mb-4">
              <Logo color="white" />
            </div>
            <p className="text-gray-400 mb-6">
              Takshashila Vidyapith is committed to providing quality education that fosters academic excellence, character development, and lifelong learning.
            </p>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-accent after:left-0 after:bottom-0 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-accent transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-gray-400 hover:text-accent transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-gray-400 hover:text-accent transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/campus" className="text-gray-400 hover:text-accent transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Campus Life
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="text-gray-400 hover:text-accent transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Faculty
                </Link>
              </li>
              <li>
                <Link to="/news-events" className="text-gray-400 hover:text-accent transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  News & Events
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-accent transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Branches */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-accent after:left-0 after:bottom-0 pb-2">
              Our Branches
            </h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium text-white mb-2">Bakhri (Main Campus)</h5>
                <address className="text-gray-400 not-italic">
                  <div className="flex items-start mb-2">
                    <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                    <span>Takshasila Vidyapeeth, Near Railway Station, Bakhri, Bihar - 851201</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Phone size={16} className="mr-2 flex-shrink-0" />
                    <span>+91 00000 00000</span>
                  </div>
                </address>
              </div>
              
              <div>
                <h5 className="font-medium text-white mb-2">Begusarai Branch</h5>
                <address className="text-gray-400 not-italic">
                  <div className="flex items-start mb-2">
                    <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                    <span>Takshasila Vidyapeeth, College Road, Begusarai, Bihar - 851101</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Phone size={16} className="mr-2 flex-shrink-0" />
                    <span>+91 00000 00000</span>
                  </div>
                </address>
              </div>
            </div>
          </div>
          
          {/* Column 4 - Contact & Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-accent after:left-0 after:bottom-0 pb-2">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail size={20} className="mr-3 text-accent" />
                <a href="mailto:info@takshasilavidyapeeth.edu" className="text-gray-400 hover:text-accent transition-colors">
                  info@takshasilavidyapeeth.edu
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-3 text-accent" />
                <a href="tel:+910000000000" className="text-gray-400 hover:text-accent transition-colors">
                  +91 00000 00000
                </a>
              </div>
            </div>
            
            <h4 className="text-lg font-semibold mt-8 mb-4">School Hours</h4>
            <div className="space-y-2">
              <div className="flex items-start">
                <Clock size={16} className="mr-3 text-accent mt-1" />
                <div>
                  <p className="text-white">Monday - Saturday</p>
                  <p className="text-gray-400">8:00 AM - 3:00 PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock size={16} className="mr-3 text-accent mt-1" />
                <div>
                  <p className="text-white">Admin Office</p>
                  <p className="text-gray-400">8:00 AM - 4:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Media Section - repositioned and restyled */}
        <div className="flex flex-col items-center justify-center mt-8 mb-8">
          <h4 className="text-white text-lg font-semibold mb-4 text-center">Connect With Us</h4>
          <div className="flex justify-center items-center space-x-4">
            {socialIcons.map((item, index) => (
              <a 
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-0 w-10 h-10 rounded-full shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center overflow-hidden"
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-2">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Takshasila Vidyapeeth. All rights reserved.
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;