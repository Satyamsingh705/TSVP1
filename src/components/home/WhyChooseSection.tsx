import React from 'react';
import { Award, BookOpen, Users, GraduationCap, Star, Heart } from 'lucide-react';

const reasons = [
	{
		id: 1,
		title: 'Academic Excellence',
		description:
			'Consistently high academic results with comprehensive curriculum and experienced faculty.',
		icon: <GraduationCap size={40} className="text-white" />,
	},
	{
		id: 2,
		title: 'Holistic Development',
		description:
			'Focus on all-round development including sports, arts, and character building activities.',
		icon: <Star size={40} className="text-white" />,
	},
	{
		id: 3,
		title: 'Modern Infrastructure',
		description:
			'State-of-the-art facilities including labs, library, sports grounds, and smart classrooms.',
		icon: <BookOpen size={40} className="text-white" />,
	},
	{
		id: 4,
		title: 'Individual Attention',
		description:
			'Optimal student-teacher ratio ensuring personalized attention to each student.',
		icon: <Users size={40} className="text-white" />,
	},
	{
		id: 5,
		title: 'Value-Based Education',
		description:
			'Strong emphasis on moral values, ethics, and cultural heritage.',
		icon: <Heart size={40} className="text-white" />,
	},
	{
		id: 6,
		title: 'Safe Environment',
		description:
			'Secure campus with trained staff, CCTV surveillance, and strict safety protocols.',
		icon: <Award size={40} className="text-white" />,
	},
];

const WhyChooseSection: React.FC = () => {
	return (
		<section className="section pt-20 sm:pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white relative">
			{/* Blue box title design with responsive adjustments */}
			<div className="relative mx-auto max-w-6xl px-4 sm:px-6">
				{/* Blue box with responsive sizing */}
				<div className="absolute left-1/2 transform -translate-x-1/2 -top-10 sm:-top-12 z-10">
					<div className="relative">
						{/* Main blue title box */}
						<div className="bg-gradient-to-r from-[#4a9cec] to-[#59a5dd] px-10 sm:px-16 md:px-28 py-5 sm:py-7 rounded-3xl shadow-lg">
							<h2 className="text-3xl sm:text-4xl font-medium text-white tracking-wide whitespace-nowrap">
								WHY CHOOSE US
							</h2>
						</div>

						{/* Arms that appear to hold the content */}
						<div className="hidden sm:block absolute -bottom-5 left-0 w-10 sm:w-14 h-10 sm:h-12 bg-[#59a5dd] rounded-bl-2xl"></div>
						<div className="hidden sm:block absolute -bottom-5 right-0 w-10 sm:w-14 h-10 sm:h-12 bg-[#59a5dd] rounded-br-2xl"></div>
					</div>
				</div>

				{/* Content area styled to look like it's being held */}
				<div className="bg-white rounded-xl shadow-lg pt-16 sm:pt-20 pb-12 sm:pb-16 px-5 sm:px-8 md:px-10 border border-gray-100">
					<div className="text-center mb-12 sm:mb-16">
						<div className="w-16 sm:w-24 h-1 bg-[#59a5dd] mx-auto mb-6 sm:mb-8"></div>
						<p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
							At Takshasila Vidyapith, we're committed to providing an
							exceptional educational experience that nurtures the whole child.
						</p>
					</div>

					{/* Responsive grid layout */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
						{reasons.map((reason) => (
							<div
								key={reason.id}
								className="bg-white rounded-xl p-8 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 flex flex-col items-center text-center"
							>
								{/* Enhanced icon display */}
								<div className="mb-6 text-white bg-gradient-to-br from-[#4a9cec] to-[#6678c5] p-5 rounded-full">
									{reason.icon}
								</div>
								<h3 className="text-2xl font-bold mb-4 text-gray-800">
									{reason.title}
								</h3>
								<p className="text-gray-600">{reason.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseSection;
