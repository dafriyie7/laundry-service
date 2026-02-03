import React from "react";
import PageHeader from "../components/PageHeader";
import {
	CheckBadgeIcon,
	SparklesIcon,
	SunIcon,
	CubeIcon,
	ChevronRightIcon
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import HowItWorks from "../components/HowItWorks";

// Import services images
import washAndFoldImg from "../assets/service_images/wash_and_fold.png";
import dryCleaningImg from "../assets/service_images/dry_cleaning.png";
import beddingImg from "../assets/service_images/bedding.png";

const servicesList = [
	{
		icon: <SunIcon className="h-10 w-10" />,
		title: "Couture Wash & Fold",
		image: washAndFoldImg,
		description:
			"A meticulous cleaning process for your everyday luxury. We use enzyme-rich detergents that protect fibers while achieving deep sanitation.",
		features: [
			"Ph-balanced fabric softeners",
			"Micro-filtration water process",
			"Boutique-style precision folding",
			"Custom aroma options"
		],
	},
	{
		icon: <SparklesIcon className="h-10 w-10" />,
		title: "Artisanal Dry Cleaning",
		image: dryCleaningImg,
		description:
			"Beyond cleaning—this is preservation. We handle high-fashion, delicate silks, and tailored suits with zero-impact, eco-friendly solvents.",
		features: [
			"Individual garment inspection",
			"Hand-finishing and pressing",
			"Silk and cashmere specialization",
			"Breathable garment packaging"
		],
	},
	{
		icon: <CubeIcon className="h-10 w-10" />,
		title: "Luxe Bedding Care",
		image: beddingImg,
		description:
			"Restore the comfort of your sanctuary. Our deep-cleansing process removes allergens while maintaining the loft of your finest linens.",
		features: [
			"Hypoallergenic sterilization",
			"Down and feather rejuvenation",
			"Crisp linen pressing",
			"Hermetic storage packaging"
		],
	},
];

const Services = () => {
	return (
		<div className="bg-brand-cream min-h-screen">
			<PageHeader
				title="Our Services"
				subtitle="Meticulous care for your most valued garments, delivered with uncompromising quality."
				icon={StarIcon}
			/>

			{/* Services List Section */}
			<section className="py-20 lg:py-32 bg-white">
				<div className="container max-w-7xl mx-auto px-6">
					{servicesList.map((service, index) => (
						<div
							key={index}
							className={`flex flex-col items-center gap-16 lg:gap-24 ${index % 2 === 0
								? "lg:flex-row"
								: "lg:flex-row-reverse"
								} ${index < servicesList.length - 1 ? "mb-32 shadow-sm pb-32 border-b border-brand-cream" : ""
								}`}
							data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
						>
							<div className="lg:w-1/2">
								<div className="flex items-center gap-4 mb-8">
									<div className="bg-brand-gold p-4 rounded-2xl text-brand-forest">
										{service.icon}
									</div>
									<h2 className="text-4xl md:text-5xl font-serif text-brand-forest font-bold">
										{service.title}
									</h2>
								</div>

								<p className="text-xl text-gray-500 mb-10 leading-relaxed font-medium">
									{service.description}
								</p>

								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									{service.features.map((feature, i) => (
										<div
											key={i}
											className="flex items-center gap-3 bg-brand-cream/50 p-4 rounded-xl border border-brand-gold/10"
										>
											<CheckBadgeIcon className="h-6 w-6 text-brand-green flex-shrink-0" />
											<span className="text-brand-forest font-bold text-sm uppercase tracking-wider">
												{feature}
											</span>
										</div>
									))}
								</div>

								<div className="mt-12">
									<a href="/schedule-pickup" className="btn-primary inline-flex items-center gap-3">
										Book this Service
										<ChevronRightIcon className="h-5 w-5" />
									</a>
								</div>
							</div>

							<div className="lg:w-1/2 relative group">
								<div className="absolute -inset-4 bg-brand-gold/10 rounded-[3rem] blur-xl group-hover:bg-brand-gold/20 transition-all"></div>
								<div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-brand-cream aspect-[4/3]">
									<img
										src={service.image}
										alt={service.title}
										className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition duration-1000"
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* How It Works Section */}
			<div className="bg-brand-cream">
				<HowItWorks />
			</div>
		</div>
	);
};

export default Services;
