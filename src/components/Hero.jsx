import heroImage from "../assets/images/font1.jpg";

const Hero = () => {
	return (
		<div
			className="relative min-h-screen bg-cover bg-center flex items-center"
			style={{ backgroundImage: `url(${heroImage})` }}
		>
			{/* Overlay for better text readability on top of the background image */}
			<div className="absolute inset-0 bg-black opacity-50"></div>

			{/* Content of the hero section */}
			<div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 relative z-10">
				<div
					className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
					data-aos="fade-right"
				>
					<h1
						className="text-5xl font-bold text-white leading-tight"
						data-aos="fade-right"
						data-aos-delay="100"
					>
						7GREEN LAUNDRY SERVICES. <br /> YOUR LAUNDRY IS AS FRESH
						AS NEW
					</h1>
					<p
						className="mt-4 text-xl text-gray-200"
						data-aos="fade-right"
						data-aos-delay="200"
					>
						Quality services at a low cost, delivered right to your
						doorstep.
					</p>
					<a
						href="/services"
						className="mt-8 inline-block bg-green-600 text-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-green-700 transition duration-300"
						data-aos="fade-up"
						data-aos-delay="300"
					>
						Explore Our Services &#8594;
					</a>
				</div>
				<div className="md:w-1/2">
					{/* The image is now set as a background image for the entire hero section. */}
					{/* This div can be used for other content or removed if not needed. */}
				</div>
			</div>
		</div>
	);
};

export default Hero;
