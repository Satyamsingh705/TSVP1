import React from 'react';
import SectionTitle from '../common/SectionTitle';

const MissionVision: React.FC = () => {
  return (
    <section className="section pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white relative" id="mission-vision">
      <div className="container-custom">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle 
            title="MISSION & VISION" 
            subtitle="At Takshashila Vidyapith, we are guided by a clear mission and vision that shapes everything we do."
            id="mission-vision"
          />
          
          <div className="bg-white rounded-xl shadow-lg pt-20 pb-12 sm:pb-16 px-5 sm:px-8 md:px-10 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-8 text-center">
                {/* Replace with more realistic mission icon */}
                <div className="bg-primary/10 p-4 rounded-full inline-flex justify-center items-center mb-6">
                  <svg viewBox="0 0 24 24" className="h-10 w-10 text-primary">
                    <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide quality education that nurtures critical thinking, creativity, and character in a supportive and inclusive environment, empowering students to become lifelong learners and responsible citizens.
                </p>
              </div>
              
              <div className="card p-8 text-center">
                {/* Replace with more realistic vision icon */}
                <div className="bg-primary/10 p-4 rounded-full inline-flex justify-center items-center mb-6">
                  <svg viewBox="0 0 24 24" className="h-10 w-10 text-primary">
                    <path fill="currentColor" d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be a leading educational institution that inspires excellence, fosters innovation, and develops well-rounded individuals who will contribute positively to society and lead meaningful lives.
                </p>
              </div>
              
              <div className="card p-8 text-center">
                {/* Replace with more realistic values icon */}
                <div className="bg-primary/10 p-4 rounded-full inline-flex justify-center items-center mb-6">
                  <svg viewBox="0 0 24 24" className="h-10 w-10 text-primary">
                    <path fill="currentColor" d="M21,5C19.89,4.65 18.67,4.5 17.5,4.5C15.55,4.5 13.45,4.9 12,6C10.55,4.9 8.45,4.5 6.5,4.5C4.55,4.5 2.45,4.9 1,6V20.65C1,20.9 1.25,21.15 1.5,21.15C1.6,21.15 1.65,21.1 1.75,21.1C3.1,20.45 5.05,20 6.5,20C8.45,20 10.55,20.4 12,21.5C13.35,20.65 15.8,20 17.5,20C19.15,20 20.85,20.3 22.25,21.05C22.35,21.1 22.4,21.1 22.5,21.1C22.75,21.1 23,20.85 23,20.6V6C22.4,5.55 21.75,5.25 21,5M21,18.5C19.9,18.15 18.7,18 17.5,18C15.8,18 13.35,18.65 12,19.5V8C13.35,7.15 15.8,6.5 17.5,6.5C18.7,6.5 19.9,6.65 21,7V18.5Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
                <p className="text-gray-600">
                  Excellence, Integrity, Respect, Responsibility, Compassion, and Innovation form the foundation of our educational philosophy and guide our approach to teaching and learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;