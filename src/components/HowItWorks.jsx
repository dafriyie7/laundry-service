import React from "react";
import {
	ArrowDownTrayIcon,
	ArrowUturnUpIcon,
	TruckIcon,
} from "@heroicons/react/24/outline";

const steps = [
	{
		icon: <ArrowDownTrayIcon className="h-12 w-12 text-green-600" />,
		title: "1. Bag Up Your Laundry",
		description: "Place your clothes, towels, and bedding in any bag.",
	},
	{
		icon: <TruckIcon className="h-12 w-12 text-green-600" />,
		title: "2. We Pick It Up",
		description:
			"Schedule a pickup and we’ll grab your laundry from your doorstep.",
	},
	{
		icon: <ArrowUturnUpIcon className="h-12 w-12 text-green-600" />,
		title: "3. Clean Clothes Returned",
		description:
			"We deliver your freshly cleaned, folded, and sorted laundry back to you.",
	},
];

const HowItWorks = () => {
	return (
		<section className="py-20 bg-gray-50">
			<div className="container mx-auto px-4 text-center">
				<h2 className="text-4xl font-bold text-gray-800 mb-2">
					How It Works
				</h2>
				<p className="text-lg text-gray-600 mb-12">
					Laundry and dry cleaning in 3 easy steps.
				</p>
				<div
					className="grid grid-cols-1 md:grid-cols-3 gap-12"
					data-aos="bounce"
				>
					{steps.map((step, index) => (
						<div key={index} className="flex flex-col items-center">
							<div className="bg-green-100 rounded-full p-4 mb-4">
								{step.icon}
							</div>
							<h3 className="text-2xl font-semibold text-gray-800 mb-2">
								{step.title}
							</h3>
							<p className="text-gray-600">{step.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
