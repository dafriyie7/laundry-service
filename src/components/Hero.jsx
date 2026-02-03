import React from "react";
import { motion } from "framer-motion";
import { SparklesIcon, TruckIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import heroImage from "../assets/hero/hero_image.png";

const Hero = () => {
	return (
		<section className="relative min-h-screen flex items-center overflow-hidden bg-brand-forest">
			{/* Decorative Shapes */}
			<div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/20 skew-x-12 translate-x-32"></div>
			<div className="absolute top-1/4 left-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl"></div>

			<div className="container mx-auto px-6 pt-20 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					{/* Left Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/20 border border-brand-green/30 text-brand-gold text-xs font-black uppercase tracking-[0.2em] mb-8">
							<SparklesIcon className="h-4 w-4" />
							Premium Laundry Service
						</div>

						<h1 className="text-6xl md:text-8xl font-serif text-white leading-[1.1] mb-8">
							Garment Care <br />
							<span className="text-brand-gold italic">Redefined.</span>
						</h1>

						<p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-lg">
							Experience the perfect blend of eco-friendly technology and traditional craftsmanship. Your wardrobe deserves the best.
						</p>

						<div className="flex flex-wrap gap-4">
							<a href="/schedule-pickup" className="btn-primary flex items-center gap-3">
								Book a Pickup
								<TruckIcon className="h-5 w-5" />
							</a>
							<a href="/pricing" className="px-8 py-4 rounded-2xl border-2 border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
								View Pricing
							</a>
						</div>

						{/* Quick Trust Stats */}
						<div className="mt-12 flex gap-8 border-t border-white/10 pt-8">
							<div className="flex items-center gap-3">
								<ShieldCheckIcon className="h-6 w-6 text-brand-gold" />
								<span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Insured Service</span>
							</div>
							<div className="flex items-center gap-3">
								<div className="flex -space-x-3">
									{[1, 2, 3].map(i => (
										<div key={i} className="w-8 h-8 rounded-full border-2 border-brand-forest bg-brand-green"></div>
									))}
								</div>
								<span className="text-sm font-bold text-gray-400 uppercase tracking-wider">500+ Happy Clients</span>
							</div>
						</div>
					</motion.div>

					{/* Right Content: Modern Image Frame */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="relative hidden lg:block"
					>
						<div className="relative z-0 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white/5 aspect-[4/5]">
							<img
								src={heroImage}
								alt="Professional Laundry Care"
								className="w-full h-full object-cover"
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
