import React from 'react';
import SectionTitle from '../common/SectionTitle';

const leadershipTeam = [
  {
    id: 1,
    name: 'Dr. Rajendra Prasad',
    position: 'Director',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1600',
    bio: 'Dr. Prasad has over 25 years of experience in the field of education. He holds a Ph.D. in Education from Patna University and has been instrumental in shaping the vision and growth of Takshashila Vidyapith since its inception.',
  },
  {
    id: 2,
    name: 'Mrs. Sunita Sharma',
    position: 'Principal (Bakhri Campus)',
    image: 'https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=1600',
    bio: 'Mrs. Sharma has been with Takshasila Vidyapeeth for 15 years. With her Master\'s in English Literature and B.Ed., she has implemented innovative teaching methodologies and curricular reforms that have significantly enhanced the academic standards.',
  },
  {
    id: 3,
    name: 'Mr. Vikram Singh',
    position: 'Principal (Begusarai Campus)',
    image: 'https://images.pexels.com/photos/5212695/pexels-photo-5212695.jpeg?auto=compress&cs=tinysrgb&w=1600',
    bio: 'Mr. Singh brings 18 years of educational leadership to our Begusarai campus. His expertise in mathematics and science education has helped develop our STEM programs, preparing students for future challenges in these fields.',
  },
  {
    id: 4,
    name: 'Mrs. Priya Gupta',
    position: 'Academic Coordinator',
    image: 'https://images.pexels.com/photos/5212653/pexels-photo-5212653.jpeg?auto=compress&cs=tinysrgb&w=1600',
    bio: 'Mrs. Gupta oversees curriculum development and academic affairs across both campuses. Her focus on integrating traditional learning with modern pedagogical approaches has resulted in a balanced and effective educational system.',
  }
];

const Leadership: React.FC = () => {
  return (
    <section className="section pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white relative" id="leadership">
      <div className="container-custom">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle 
            title="LEADERSHIP TEAM" 
            subtitle="Meet the dedicated leaders who guide our institution with vision, expertise, and commitment."
            id="leadership"
          />
          
          <div className="bg-white rounded-xl shadow-lg pt-20 pb-12 sm:pb-16 px-5 sm:px-8 md:px-10 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leadershipTeam.map(leader => (
                <div key={leader.id} className="card overflow-hidden flex flex-col md:flex-row">
                  <div className="md:w-2/5">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <h3 className="text-xl font-semibold">{leader.name}</h3>
                    <p className="text-primary mb-4">{leader.position}</p>
                    <p className="text-gray-600">{leader.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;