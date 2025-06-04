import React from 'react';
import { Target, Eye, BookOpen } from 'lucide-react';
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
                <div className="bg-primary/10 p-4 rounded-full inline-flex justify-center items-center mb-6">
                  <Target size={40} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide quality education that nurtures critical thinking, creativity, and character in a supportive and inclusive environment, empowering students to become lifelong learners and responsible citizens.
                </p>
              </div>
              
              <div className="card p-8 text-center">
                <div className="bg-primary/10 p-4 rounded-full inline-flex justify-center items-center mb-6">
                  <Eye size={40} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be a leading educational institution that inspires excellence, fosters innovation, and develops well-rounded individuals who will contribute positively to society and lead meaningful lives.
                </p>
              </div>
              
              <div className="card p-8 text-center">
                <div className="bg-primary/10 p-4 rounded-full inline-flex justify-center items-center mb-6">
                  <BookOpen size={40} className="text-primary" />
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