import React from "react";
import {
	ShoppingBagIcon,
	TruckIcon,
	CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const steps = [
	{
		icon: <ShoppingBagIcon className="h-8 w-8" />,
		title: "Schedule & Bag Up",
		description: "Select your services online and place your garments in any bag. We'll handle the sorting.",
	},
	{
		icon: <TruckIcon className="h-8 w-8" />,
		title: "Professional Pickup",
		description: "Our uniformed valets collect your order from your preferred location at the chosen time.",
	},
	{
		icon: <CheckBadgeIcon className="h-8 w-8" />,
		title: "Pristine Delivery",
		description: "Receive your items freshly laundered, perfectly pressed, and delivered back in 24-48 hours.",
	},
];

const HowItWorks = () => {
	return (
		<section className="py-32 bg-brand-cream relative overflow-hidden">
			{/* Bg Accent */}
			<div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

			<div className="container mx-auto px-6">
				<div className="max-w-3xl mx-auto text-center mb-20">
					<h2 className="text-sm font-black text-brand-gold uppercase tracking-[0.3em] mb-4" data-aos="fade-up">
						The Experience
					</h2>
					<h3 className="text-4xl md:text-6xl font-serif text-brand-forest leading-tight" data-aos="fade-up" data-aos-delay="100">
						Effortless Elegance <br /> in 3 Simple Steps
					</h3>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{steps.map((step, index) => (
						<div
							key={index}
							className="group relative bg-white p-10 rounded-3xl shadow-xl border border-transparent hover:border-brand-gold/30 transition-all duration-500 hover:-translate-y-2"
							data-aos="fade-up"
							data-aos-delay={index * 100}
						>
							{/* Step Number */}
							<div className="absolute top-6 right-8 text-7xl font-serif text-brand-gold/10 font-black italic group-hover:text-brand-gold/20 transition-colors">
								0{index + 1}
							</div>

							<div className="bg-brand-green/10 text-brand-green p-5 rounded-2xl w-fit mb-8 group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
								{step.icon}
							</div>

							<h4 className="text-2xl font-serif font-bold text-brand-forest mb-4">
								{step.title}
							</h4>
							<p className="text-gray-500 leading-relaxed font-medium">
								{step.description}
							</p>

							{/* Bottom Accent */}
							<div className="absolute bottom-0 left-10 right-10 h-1 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
