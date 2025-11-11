import React from "react";

const testimonials = [
	{
		quote: "7Green Laundry has been a lifesaver! My clothes always come back perfectly clean and folded. The convenience is unbeatable.",
		author: "K.K.",
		image: "https://i.pravatar.cc/150?img=1",
	},
	{
		quote: "The quality of the dry cleaning is fantastic. They handled my delicate items with so much care. Highly recommended!",
		author: "Daniel",
		image: "https://i.pravatar.cc/150?img=2",
	},
	{
		quote: "Affordable, reliable, and always on time. I don't know how I managed my laundry before finding this service.",
		author: "Bright",
		image: "https://i.pravatar.cc/150?img=3",
	},
];

const Testimonials = () => {
	return (
		<section className="py-20 bg-gray-100 mb-20">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
					What Our Customers Say
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="bg-white p-8 rounded-lg shadow-md text-center"
							data-aos="bounce"
							data-aos-duration="800"
							data-aos-delay={index * 100}
						>
							<img
								src={testimonial.image}
								alt={testimonial.author}
								className="w-20 h-20 rounded-full mx-auto mb-4"
							/>
							<p className="text-gray-600 italic mb-4">
								"{testimonial.quote}"
							</p>
							<p className="font-bold text-gray-800">
								- {testimonial.author}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
