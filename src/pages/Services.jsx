import React from "react";
import {
	CheckCircleIcon,
	SparklesIcon,
	SunIcon,
	CubeIcon,
} from "@heroicons/react/24/outline";
import HowItWorks from "../components/HowItWorks"; // Re-using this component

const servicesList = [
	{
		icon: <SunIcon className="h-12 w-12 text-green-600" />,
		title: "Wash & Fold",
		description:
			"Perfect for your everyday laundry. We wash, dry, and neatly fold everything from your t-shirts and jeans to your socks and underwear.",
		features: [
			"Separation of whites and colors",
			"High-quality detergents",
			"Neatly folded and packaged",
		],
	},
	{
		icon: <SparklesIcon className="h-12 w-12 text-green-600" />,
		title: "Dry Cleaning",
		description:
			"Expert care for your delicate garments. We handle suits, dresses, blouses, and other fine fabrics with the utmost attention to detail.",
		features: [
			"Eco-friendly cleaning process",
			"Stain and spot treatment",
			"Pressed and hung for a crisp finish",
		],
	},
	{
		icon: <CubeIcon className="h-12 w-12 text-green-600" />,
		title: "Bedding & Linens",
		description:
			"From comforters and duvets to sheets and pillowcases, we'll return your bedding fresh, clean, and ready for a good night's sleep.",
		features: [
			"Specialized machines for large items",
			"Hypoallergenic options available",
			"Crisp and clean results",
		],
	},
];

const Services = () => {
	return (
		<>
			{/* Page Header */}
			<div className="bg-green-600 text-white">
				<div className="container mx-auto text-center py-16 px-4">
					<h1 className="text-5xl font-bold">Our Services</h1>
					<p className="text-xl mt-4 text-green-100">
						Professional care for your clothes, so you can focus on
						what matters.
					</p>
				</div>
			</div>

			{/* Services List Section */}
			<section className="py-20 bg-white">
				<div className="container max-w-7xl mx-auto px-4">
					{servicesList.map((service, index) => (
						<div
							key={index}
							className={`flex flex-col items-center gap-12 ${
								index % 2 === 0
									? "md:flex-row"
									: "md:flex-row-reverse"
							} ${
								index < servicesList.length - 1 ? "mb-20" : ""
							}`}
						>
							<div className="md:w-1/2">
								<div className="flex items-center mb-4">
									{service.icon}
									<h2 className="text-4xl font-bold text-gray-800 ml-4">
										{service.title}
									</h2>
								</div>
								<p className="text-lg text-gray-600 mb-6">
									{service.description}
								</p>
								<ul className="space-y-3">
									{service.features.map((feature, i) => (
										<li
											key={i}
											className="flex items-center"
										>
											<CheckCircleIcon className="h-6 w-6 text-green-500 mr-3" />
											<span className="text-gray-700">
												{feature}
											</span>
										</li>
									))}
								</ul>
							</div>
							<div className="md:w-1/2">
								<img
									src={`https://placehold.co/800x600/a2e6b8/333333?text=${encodeURIComponent(
										service.title
									)}`} // Using a more reliable placeholder
									alt={service.title}
									className="rounded-lg shadow-xl w-full h-auto"
								/>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* How It Works Section */}
			<HowItWorks />
		</>
	);
};

export default Services;
