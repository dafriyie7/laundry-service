import React from "react";

const Cta = () => {
	return (
		<section className="bg-green-800 text-white py-20">
			<div className="container mx-auto px-4 text-center">
				<h2 className="text-4xl font-bold mb-4">
					Ready to Lighten Your Laundry Load?
				</h2>
				<p className="text-lg text-green-100 mb-8">
					Get your clothes cleaned by professionals and enjoy your
					free time.
				</p>
				<a
					href="/schedule-pickup"
					className="bg-white text-green-600 text-lg font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300"
				>
					Schedule a Pickup Today
				</a>
			</div>
		</section>
	);
};

export default Cta;
