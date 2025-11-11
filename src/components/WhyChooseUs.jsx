import React from "react";
import {
	CheckBadgeIcon,
	ClockIcon,
	CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

const features = [
	{
		icon: <CheckBadgeIcon className="h-8 w-8 text-green-600" />,
		title: "Premium Quality",
		description:
			"We use high-quality detergents and softeners to ensure your clothes are clean and fresh.",
	},
	{
		icon: <ClockIcon className="h-8 w-8 text-green-600" />,
		title: "Convenience",
		description:
			"Save time with our easy scheduling and door-to-door pickup and delivery service.",
	},
	{
		icon: <CurrencyDollarIcon className="h-8 w-8 text-green-600" />,
		title: "Affordable Pricing",
		description:
			"Enjoy top-notch laundry services without breaking the bank. No hidden fees.",
	},
];

const WhyChooseUs = () => {
	return (
		<section className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-gray-800">
						Why Choose Us?
					</h2>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<div
							key={index}
							className="text-center p-6"
							data-aos="bounce"
							data-aos-delay={index * 150}
						>
							<div className="flex justify-center mb-4">
								{feature.icon}
							</div>
							<h3 className="text-2xl font-semibold text-gray-800 mb-2">
								{feature.title}
							</h3>
							<p className="text-gray-600">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
