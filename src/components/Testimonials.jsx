import React from "react";
import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";

const testimonials = [
	{
		quote: "7Green Laundry has been absolute excellence. My designer suits come back smelling like new and perfectly pressed.",
		author: "Kwadwo Asante",
		role: "Executive Client",
		image: "https://i.pravatar.cc/150?img=12",
	},
	{
		quote: "The pickup service is seamless. I haven't stepped into a laundry shop in months, and my wardrobe has never looked better.",
		author: "Daniel Osei",
		role: "Regular Customer",
		image: "https://i.pravatar.cc/150?img=33",
	},
	{
		quote: "Affordable luxury. They handled my wedding gown with such care. I won't trust anyone else with my garments.",
		author: "Maame Serwaa",
		role: "Verified Client",
		image: "https://i.pravatar.cc/150?img=26",
	},
];

const Testimonials = () => {
	return (
		<section className="py-32 bg-brand-cream relative overflow-hidden">
			<div className="container mx-auto px-6">
				<div className="max-w-3xl mx-auto text-center mb-20">
					<h2 className="text-sm font-black text-brand-green uppercase tracking-[0.3em] mb-4" data-aos="fade-up">
						Client Reviews
					</h2>
					<h3 className="text-4xl md:text-6xl font-serif text-brand-forest leading-tight" data-aos="fade-up" data-aos-delay="100">
						Voices of Satisfaction
					</h3>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.05 }}
							className="glass-card p-10 flex flex-col justify-between border-brand-gold/10 hover:border-brand-gold/30 transition-all group"
						>
							<div>
								<div className="flex gap-1 text-brand-gold mb-6">
									{[1, 2, 3, 4, 5].map(i => <StarIcon key={i} className="h-5 w-5" />)}
								</div>
								<p className="text-xl font-serif text-brand-forest italic leading-relaxed mb-8">
									"{testimonial.quote}"
								</p>
							</div>

							<div className="flex items-center gap-4">
								<img
									src={testimonial.image}
									alt={testimonial.author}
									className="w-14 h-14 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
								/>
								<div>
									<h4 className="font-bold text-brand-forest uppercase tracking-widest text-xs">{testimonial.author}</h4>
									<p className="text-brand-green text-[10px] font-black uppercase tracking-wider">{testimonial.role}</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
