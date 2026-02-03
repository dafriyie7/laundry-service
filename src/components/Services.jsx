import React from "react";
import {
	SparklesIcon,
	SunIcon,
	ArrowPathRoundedSquareIcon,
} from "@heroicons/react/24/outline";

const services = [
	{
		icon: <SunIcon className="h-8 w-8 text-brand-gold" />,
		title: "Wash & Fold",
		description:
			"Expert cleaning and precise folding for your daily wardrobe, returned ready to wear.",
	},
	{
		icon: <SparklesIcon className="h-8 w-8 text-brand-gold" />,
		title: "Dry Cleaning",
		description:
			"Premium care for delicate fabrics using eco-conscious solvents and artisanal techniques.",
	},
	{
		icon: <ArrowPathRoundedSquareIcon className="h-8 w-8 text-brand-gold" />,
		title: "Press & Ironing",
		description:
			"Flawless steaming and pressing for shirts, suits, and linens with extreme attention to detail.",
	},
];

const Services = () => {
	return (
		<section className="py-32 bg-white relative">
			<div className="container mx-auto px-6">
				<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
					<div className="max-w-2xl">
						<h2 className="text-sm font-black text-brand-green uppercase tracking-[0.3em] mb-4" data-aos="fade-right">
							Our Expertise
						</h2>
						<h3 className="text-4xl md:text-6xl font-serif text-brand-forest leading-tight" data-aos="fade-right" data-aos-delay="100">
							Comprehensive Care <br /> for Every Garment
						</h3>
					</div>
					<div data-aos="fade-left">
						<a href="/services" className="text-brand-green font-bold uppercase tracking-widest border-b-2 border-brand-green/20 hover:border-brand-green transition-all py-2">
							Explore All Services &rarr;
						</a>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
					{services.map((service, index) => (
						<div
							key={service.title}
							className="group h-full"
							data-aos="fade-up"
							data-aos-delay={index * 100}
						>
							<div className="bg-brand-cream p-12 rounded-[2.5rem] h-full flex flex-col items-start hover:bg-brand-forest transition-colors duration-500 group">
								<div className="bg-white p-5 rounded-2xl shadow-xl mb-8 group-hover:bg-brand-green group-hover:scale-110 transition-all duration-500">
									<div className="group-hover:text-white transition-colors">
										{service.icon}
									</div>
								</div>
								<h4 className="text-2xl font-serif font-bold text-brand-forest mb-4 group-hover:text-white transition-colors">
									{service.title}
								</h4>
								<p className="text-gray-500 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
									{service.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
