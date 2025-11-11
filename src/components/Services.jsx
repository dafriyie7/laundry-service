import React from "react";
import {
	CheckBadgeIcon,
	HomeModernIcon,
	RectangleStackIcon,
	SparklesIcon,
	StarIcon,
	SunIcon,
} from "@heroicons/react/24/outline";

const services = [
	{
		icon: <SunIcon className="h-10 w-10 text-white" />,
		title: "Wash, Dry & Fold",
		description:
			"Your everyday laundry, expertly washed, dried, and neatly folded for you.",
	},
	{
		icon: <SparklesIcon className="h-10 w-10 text-white" />,
		title: "Dry Cleaning",
		description:
			"Gentle, non-toxic dry cleaning for your delicate garments, using eco-friendly methods.",
	},
	{
		icon: <RectangleStackIcon className="h-10 w-10 text-white" />,
		title: "Ironing & Pressing",
		description:
			"Crisp, professional pressing for your shirts, trousers, and linens for a wrinkle-free finish.",
	},
];

const Services = () => {
	return (
		<section className="py-20 bg-gray-100">
			<div className="container mx-auto px-4 text-center">
				<h2 className="text-4xl font-bold text-gray-800 mb-12">
					Our Services
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
					{services.map((service, index) => (
						<div
							key={index}
							className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
							data-aos="bounce"
							data-aos-delay={index * 100}
						>
							<div className="flex justify-center mb-4">
								<div className="bg-green-600 rounded-full p-5">
									{service.icon}
								</div>
							</div>
							<h3 className="text-3xl font-bold text-green-800 mb-3">
								{service.title}
							</h3>
							<p className="text-lg text-gray-700">
								{service.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
