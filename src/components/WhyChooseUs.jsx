import React from "react";
import {
	ShieldCheckIcon,
	ClockIcon,
	BanknotesIcon,
} from "@heroicons/react/24/outline";

const features = [
	{
		icon: <ShieldCheckIcon className="h-8 w-8 text-brand-gold" />,
		title: "Premium Care",
		description: "Hospital-grade sanitization and PH-balanced detergents to preserve your garments.",
	},
	{
		icon: <ClockIcon className="h-8 w-8 text-brand-gold" />,
		title: "Doorstep Ease",
		description: "Real-time tracking and zero-contact collection at your convenience.",
	},
	{
		icon: <BanknotesIcon className="h-8 w-8 text-brand-gold" />,
		title: "Fair Pricing",
		description: "Transparent rates without hidden fees. Value that matches our excellence.",
	},
];

const WhyChooseUs = () => {
	return (
		<section className="py-32 bg-brand-forest text-white overflow-hidden relative">
			{/* Bg Accents */}
			<div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl -translate-x-1/2"></div>

			<div className="container mx-auto px-6 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
					<div data-aos="fade-right">
						<h2 className="text-sm font-black text-brand-gold uppercase tracking-[0.3em] mb-6">
							The Advantage
						</h2>
						<h3 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
							Setting the Gold <br /> Standard for Care
						</h3>
						<p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-lg">
							We don't just wash clothes; we restore them. Our multi-stage inspection process ensures every button is secure and every stain is addressed.
						</p>
						<a href="/about" className="btn-primary inline-block">
							Learn Our Process
						</a>
					</div>

					<div className="space-y-6">
						{features.map((feature, index) => (
							<div
								key={index}
								className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-gold/30 transition-all duration-300"
								data-aos="fade-left"
								data-aos-delay={index * 100}
							>
								<div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
									<div className="bg-brand-green/20 p-4 rounded-2xl text-brand-gold group-hover:scale-110 transition-transform">
										{feature.icon}
									</div>
									<div>
										<h4 className="text-2xl font-serif font-bold mb-2">{feature.title}</h4>
										<p className="text-gray-400 font-medium">{feature.description}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
