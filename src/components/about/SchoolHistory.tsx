import React from 'react';
import SectionTitle from '../common/SectionTitle';

const SchoolHistory: React.FC = () => {
  return (
    <section className="section pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="container-custom">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle title="OUR HISTORY" />
          
          <div className="bg-white rounded-xl shadow-lg pt-20 pb-12 sm:pb-16 px-5 sm:px-8 md:px-10 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6 text-gray-700">
                  <p>
                    Takshashila Vidyapith was established in 2005 with a vision to provide quality education to students in Bakhri and surrounding areas. Named after the ancient university of Takshashila, our institution was founded by a group of dedicated educators who believed in the transformative power of education.
                  </p>
                  
                  <p>
                    Starting with just a handful of students and teachers, the school quickly gained recognition for its academic excellence and holistic approach to education. The demand for quality education led to the opening of our second branch in Begusarai in 2015.
                  </p>
                  
                  <p>
                    Over the years, we have grown substantially in terms of infrastructure, faculty, and student strength. Today, Takshasila Vidyapeeth stands as a beacon of educational excellence in the region, with state-of-the-art facilities and a reputation for nurturing well-rounded individuals.
                  </p>
                  
                  <p>
                    Throughout our journey, we have remained committed to our founding principles of academic excellence, character development, and social responsibility. We continue to evolve and innovate while staying true to our core values and mission.
                  </p>
                </div>
              </div>
              
              <div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <img 
                      src="https://images.pexels.com/photos/8471984/pexels-photo-8471984.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                      alt="School history" 
                      className="rounded-lg shadow-md h-48 w-full object-cover"
                    />
                    <img 
                      src="https://images.pexels.com/photos/8472044/pexels-photo-8472044.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                      alt="School expansion" 
                      className="rounded-lg shadow-md h-64 w-full object-cover"
                    />
                  </div>
                  <div className="space-y-4 mt-8">
                    <img 
                      src="https://images.pexels.com/photos/8471982/pexels-photo-8471982.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                      alt="School campus" 
                      className="rounded-lg shadow-md h-64 w-full object-cover"
                    />
                    <img 
                      src="https://images.pexels.com/photos/8977148/pexels-photo-8977148.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                      alt="School activities" 
                      className="rounded-lg shadow-md h-48 w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolHistory;