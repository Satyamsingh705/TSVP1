import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  id?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, id }) => {
  return (
    <div className="relative z-10 mb-20">
      {/* Blue title box */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-10 sm:-top-12 z-10">
        <div className="relative">
          {/* Main blue title box */}
          <div className="bg-gradient-to-r from-[#4a9cec] to-[#59a5dd] px-10 sm:px-16 md:px-28 py-5 sm:py-7 rounded-3xl shadow-lg">
            <h2 id={id} className="text-3xl sm:text-4xl font-medium text-white tracking-wide whitespace-nowrap">
              {title}
            </h2>
          </div>

          {/* Hide arms on mobile, show on larger screens */}
          <div className="hidden sm:block absolute -bottom-5 left-0 w-10 sm:w-14 h-10 sm:h-12 bg-[#59a5dd] rounded-bl-2xl"></div>
          <div className="hidden sm:block absolute -bottom-5 right-0 w-10 sm:w-14 h-10 sm:h-12 bg-[#59a5dd] rounded-br-2xl"></div>
        </div>
      </div>
      
      {/* Only render subtitle if provided */}
      {subtitle && (
        <div className="text-center pt-20">
          <div className="w-16 sm:w-24 h-1 bg-[#59a5dd] mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
