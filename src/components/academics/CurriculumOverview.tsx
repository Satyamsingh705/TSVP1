import React from 'react';
import SectionTitle from '../common/SectionTitle';

// Replace the simple lucide icons with more detailed SVG icons
const curriculumFeatures = [
	{
		id: 1,
		icon: (
      <svg viewBox="0 0 24 24" className="text-primary h-8 w-8">
        <path fill="currentColor" d="M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M3,18.5V7c1.1-0.35,2.3-0.5,3.5-0.5c1.34,0,3.13,0.41,4.5,0.99v11.5C9.63,18.41,7.84,18,6.5,18C5.3,18,4.1,18.15,3,18.5z M21,18.5c-1.1-0.35-2.3-0.5-3.5-0.5c-1.34,0-3.13,0.41-4.5,0.99V7.49c1.37-0.59,3.16-0.99,4.5-0.99c1.2,0,2.4,0.15,3.5,0.5V18.5z"/>
        <path fill="currentColor" d="M11,7.49C9.63,6.91,7.84,6.5,6.5,6.5C5.3,6.5,4.1,6.65,3,7v11.5C4.1,18.15,5.3,18,6.5,18 c1.34,0,3.13,0.41,4.5,0.99V7.49z" opacity="0.3"/>
      </svg>
    ),
		title: 'Comprehensive Curriculum',
		description:
			'Our curriculum is aligned with CBSE guidelines while incorporating enrichment activities that foster critical thinking and creativity.',
	},
	{
		id: 2,
		icon: (
      <svg viewBox="0 0 24 24" className="text-primary h-8 w-8">
        <path fill="currentColor" d="M14,2H6C4.9,2,4.01,2.9,4.01,4L4,20c0,1.1,0.89,2,1.99,2H18c1.1,0,2-0.9,2-2V8L14,2z M18,20H6V4h7v5h5V20z M8,15.01 l1.41,1.41L11,14.84V19h2v-4.16l1.59,1.59L16,15.01L12.01,11L8,15.01z"/>
      </svg>
    ),
		title: 'Regular Assessments',
		description:
			'We conduct regular formative and summative assessments to monitor student progress and provide timely feedback and support.',
	},
	{
		id: 3,
		icon: (
      <svg viewBox="0 0 24 24" className="text-primary h-8 w-8">
        <path fill="currentColor" d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm4.71 13.29c-.39.39-1.02.39-1.41 0L12 12l-3.29 3.29c-.39.39-1.02.39-1.41 0s-.39-1.02 0-1.41L10.59 10 7.3 6.71c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0L12 8.59l3.29-3.29c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41L13.41 10l3.29 3.29c.4.39.4 1.03.01 1.42z" opacity="0.3"/>
        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <path fill="currentColor" d="M13 11.5l1.5 1.5 1.5-1.5L14.5 10 13 11.5zm-3 0L8.5 10 7 11.5 8.5 13 10 11.5zm5 3.5c-2.03 0-3.8-1.11-4.75-2.75-.19-.33.06-.75.44-.75h8.62c.38 0 .63.42.44.75-.95 1.64-2.72 2.75-4.75 2.75zm-1-8.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
      </svg>
    ),
		title: 'Conceptual Understanding',
		description:
			'We focus on developing deep conceptual understanding rather than rote learning, enabling students to apply knowledge to real-world situations.',
	},
	{
		id: 4,
		icon: (
      <svg viewBox="0 0 24 24" className="text-primary h-8 w-8">
        <path fill="currentColor" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M17,17H7v-2h10V17z M17,14H7v-2h10V14z M17,11H7V9h10V11z"/>
      </svg>
    ),
		title: 'Academic Excellence',
		description:
			'Our teaching methodologies are designed to help students achieve academic excellence and perform well in board examinations.',
	},
	{
		id: 5,
		icon: (
      <svg viewBox="0 0 24 24" className="text-primary h-8 w-8">
        <path fill="currentColor" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M15,17.3l-1.41,1.41L12,18.83l-1.59-1.59L9,17.3 l3,3l3-3L15,17.3z"/>
      </svg>
    ),
		title: 'Skill Development',
		description:
			'We integrate 21st-century skills like critical thinking, communication, collaboration, and creativity across all subject areas.',
	},
	{
		id: 6,
		icon: (
      <svg viewBox="0 0 24 24" className="text-primary h-8 w-8">
        <path fill="currentColor" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,17.27L18.18,21L17.64,14.64L22,10.27 l-6.18-0.91L12,2L10.18,9.36L4,10.27l4.36,4.36L5.82,21L12,17.27z"/>
      </svg>
    ),
		title: 'Personalized Attention',
		description:
			'We maintain optimal student-teacher ratios to ensure that each student receives personalized attention and support.',
	},
];

const CurriculumOverview: React.FC = () => {
	return (
		<section className="section pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white relative">
			<div className="container-custom">
				<div className="relative mx-auto max-w-6xl px-4 sm:px-6">
					<SectionTitle
						title="ACADEMIC APPROACH"
						subtitle="At Takshashila Vidyapith, we believe in providing a balanced education that develops intellectual, physical, emotional, and social abilities."
					/>

					<div className="bg-white rounded-xl shadow-lg pt-20 pb-12 sm:pb-16 px-5 sm:px-8 md:px-10 border border-gray-100">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{curriculumFeatures.map((feature) => (
								<div key={feature.id} className="card p-6">
									<div className="flex items-start">
										<div className="mr-4">{feature.icon}</div>
										<div>
											<h3 className="text-xl font-semibold mb-2">
												{feature.title}
											</h3>
											<p className="text-gray-600">
												{feature.description}
											</p>
										</div>
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

export default CurriculumOverview;