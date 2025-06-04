import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, ChevronRight } from 'lucide-react';

const programmes = [
	{
		id: 1,
		title: 'Primary School',
		grades: 'Grades 1-5',
		description:
			'Building strong foundations through engaging, activity-based learning.',
		icon: <BookOpen size={40} className="text-accent" />,
		link: '/academics#primary',
	},
	{
		id: 2,
		title: 'Middle School',
		grades: 'Grades 6-8',
		description: 'Fostering critical thinking and comprehensive development.',
		icon: <Users size={40} className="text-accent" />,
		link: '/academics#middle',
	},
	{
		id: 3,
		title: 'High School',
		grades: 'Grades 9-10',
		description: 'Preparing students for academic excellence and future success.',
		icon: <Award size={40} className="text-accent" />,
		link: '/academics#high',
	},
];

const ProgrammesSection: React.FC = () => {
	return (
		<section className="section pt-20 sm:pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white relative">
			{/* Enhanced blue box design with responsive adjustments for mobile */}
			<div className="relative mx-auto max-w-6xl px-4 sm:px-6">
				{/* Improved blue box with responsive sizing */}
				<div className="absolute left-1/2 transform -translate-x-1/2 -top-10 sm:-top-12 z-10">
					<div className="relative">
						{/* Responsive main blue title box */}
						<div className="bg-gradient-to-r from-[#4a9cec] to-[#59a5dd] px-10 sm:px-16 md:px-28 py-5 sm:py-7 rounded-3xl shadow-lg">
							<h2 className="text-3xl sm:text-4xl font-medium text-white tracking-wide whitespace-nowrap">
								PROGRAMMES
							</h2>
						</div>

						{/* Hide arms on mobile, show on larger screens */}
						<div className="hidden sm:block absolute -bottom-5 left-0 w-10 sm:w-14 h-10 sm:h-12 bg-[#59a5dd] rounded-bl-2xl"></div>
						<div className="hidden sm:block absolute -bottom-5 right-0 w-10 sm:w-14 h-10 sm:h-12 bg-[#59a5dd] rounded-br-2xl"></div>
					</div>
				</div>

				{/* Enhanced content area with responsive padding */}
				<div className="bg-white rounded-xl shadow-lg pt-16 sm:pt-20 pb-12 sm:pb-16 px-5 sm:px-8 md:px-10 border border-gray-100">
					<div className="text-center mb-12 sm:mb-16">
						<div className="w-16 sm:w-24 h-1 bg-[#59a5dd] mx-auto mb-6 sm:mb-8"></div>
						<p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
							Our comprehensive academic programmes are designed to nurture
							intellectual curiosity, creativity, and character development at
							every stage of learning.
						</p>
					</div>

					{/* Responsive grid layout */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
						{programmes.map((program) => (
							<div
								key={program.id}
								className="bg-white rounded-xl p-8 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 flex flex-col items-center text-center"
							>
								{/* Enhanced icon display */}
								<div className="mb-6 text-white bg-gradient-to-br from-[#4a9cec] to-[#6678c5] p-5 rounded-full">
									{React.cloneElement(program.icon, {
										size: 40,
										className: 'text-white',
									})}
								</div>
								<h3 className="text-2xl font-bold mb-2 text-gray-800">
									{program.title}
								</h3>
								<p className="text-[#59a5dd] font-medium mb-4">
									{program.grades}
								</p>
								<p className="text-gray-600 mb-8">{program.description}</p>
								<div className="mt-auto">
									<Link
										to={program.link}
										className="inline-flex items-center bg-[#59a5dd]/10 text-[#4a9cec] font-medium hover:bg-[#59a5dd]/20 transition-colors px-4 py-2 rounded-full"
									>
										Learn More <ChevronRight size={18} className="ml-1" />
									</Link>
								</div>
							</div>
						))}
					</div>

					<div className="text-center mt-12 sm:mt-16">
						<Link
							to="/academics"
							className="inline-flex items-center text-white bg-gradient-to-r from-[#4a9cec] to-[#59a5dd] hover:from-[#4590d8] hover:to-[#5098cc] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-base sm:text-lg"
						>
							Explore All Programmes <ChevronRight size={20} className="ml-2" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProgrammesSection;