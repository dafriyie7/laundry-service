import React from "react";
import {
	CheckCircleIcon,
	SparklesIcon,
	SunIcon,
	CubeIcon,
} from "@heroicons/react/24/outline";
import HowItWorks from "../components/HowItWorks"; // Re-using this component

// Import services images
import washAndFoldImg from "../assets/service_images/wash_and_fold.png";
import dryCleaningImg from "../assets/service_images/dry_cleaning.png";
import beddingImg from "../assets/service_images/bedding.png";

const servicesList = [
	{
		icon: <SunIcon className="h-12 w-12 text-green-600" />,
		title: "Wash & Fold",
		image: washAndFoldImg,
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
		image: dryCleaningImg,
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
		image: beddingImg,
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
		<div className="pt-20">
			{/* Page Header */}
			<div className="bg-green-600 text-white">
				<div className="container mx-auto text-center py-16 px-4">
					<h1 className="text-5xl font-bold italic">Our Services</h1>
					<p className="text-xl mt-4 text-green-100 italic">
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
							className={`flex flex-col items-center gap-12 ${index % 2 === 0
									? "md:flex-row"
									: "md:flex-row-reverse"
								} ${index < servicesList.length - 1 ? "mb-20 shadow-sm pb-20 border-b border-gray-100" : ""
								}`}
							data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
						>
							<div className="md:w-1/2">
								<div className="flex items-center mb-4">
									{service.icon}
									<h2 className="text-4xl font-bold text-gray-800 ml-4 italic">
										{service.title}
									</h2>
								</div>
								<p className="text-lg text-gray-600 mb-6 leading-relaxed">
									{service.description}
								</p>
								<ul className="space-y-3">
									{service.features.map((feature, i) => (
										<li
											key={i}
											className="flex items-center"
										>
											<CheckCircleIcon className="h-6 w-6 text-green-500 mr-3" />
											<span className="text-gray-700 italic">
												{feature}
											</span>
										</li>
									))}
								</ul>
							</div>
							<div className="md:w-1/2">
								<img
									src={service.image}
									alt={service.title}
									className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition duration-500"
								/>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* How It Works Section */}
			<HowItWorks />
		</div>
	);
};

export default Services;
