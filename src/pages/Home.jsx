import React from "react";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Cta from "../components/Cta";
import ContactInfo from "../components/ContactInfo";

const Home = () => {
	return (
		<>
			<Hero />
			<HowItWorks />
			<Services />
			<WhyChooseUs />
			<Testimonials />
			<ContactInfo />
			<Cta />
		</>
	);
};

export default Home;
