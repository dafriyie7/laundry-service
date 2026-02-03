import React from "react";
import { motion } from "framer-motion";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

const Cta = () => {
	return (
		<section className="py-24 bg-white relative overflow-hidden">
			<div className="container mx-auto px-6">
				<div className="bg-brand-forest rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
					{/* Decorative Bg */}
					<div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
					<div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2"></div>

					<div className="relative z-10 max-w-3xl mx-auto">
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight"
						>
							Experience Luxury <br />
							<span className="text-brand-gold italic">in Every Fold.</span>
						</motion.h2>

						<p className="text-xl text-gray-400 mb-12 leading-relaxed">
							Join our elite circle of clients who trust us with their most precious garments. Professional care is just a click away.
						</p>

						<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
							<a
								href="/schedule-pickup"
								className="btn-primary flex items-center gap-3 w-full sm:w-auto justify-center bg-brand-gold text-brand-forest hover:bg-white"
							>
								<CalendarDaysIcon className="h-6 w-6" />
								Schedule Pickup
							</a>
							<a
								href="/contact"
								className="text-white font-bold uppercase tracking-widest hover:text-brand-gold transition-colors py-4 px-8 border-2 border-white/10 rounded-2xl hover:border-brand-gold/30 w-full sm:w-auto"
							>
								Speak with Us
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cta;
