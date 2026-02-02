import React from "react";
import ContactInfo from "../components/ContactInfo";

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-green-600 text-white">
        <div className="container mx-auto text-center py-16 px-4">
          <h1 className="text-5xl font-bold italic">About 7Green Laundry</h1>
          <p className="text-xl mt-4 text-green-100 italic">
            Eco-friendly, efficient, and exceptionally clean.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to revolutionize the laundry industry in Ghana, 7Green Laundry has grown from a small local service to a premier destination for professional garment care. We understood that in today's fast-paced world, people need more than just a laundry—they need a reliable partner.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our journey began with a simple idea: combine high-quality cleaning with environmental responsibility. This is why we use eco-friendly detergents and energy-efficient machines, ensuring that while your clothes come out fresh, the planet stays green.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <img
                src="https://placehold.co/800x600/a2e6b8/333333?text=Our+Laundry+Facility"
                alt="Our Story"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Eco-Friendly</h3>
              <p className="text-gray-600">We prioritize the use of biodegradable soaps and sustainable practices to minimize our environmental footprint.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Efficiency</h3>
              <p className="text-gray-600">Your time is valuable. We've streamlined our pickup, cleaning, and delivery process to fit your busy schedule.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💎</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality</h3>
              <p className="text-gray-600">We treat every garment with care, ensuring they return to you as fresh as new, every single time.</p>
            </div>
          </div>
        </div>
      </section>

      <ContactInfo />
    </div>
  );
};

export default About;