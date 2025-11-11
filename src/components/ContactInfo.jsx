import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

const ContactInfo = () => {
	return (
		<section className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 text-white py-20 px-4">
			<div className="container mx-auto px-4 text-center">
				<h2 className="text-4xl font-bold text-white mb-4">
					Get In Touch
				</h2>
				<p className="text-lg text-gray-200 mb-12">
					Have questions? We're here to help!
				</p>
				<div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
					<div className="flex items-center p-6 bg-white rounded-lg shadow-md w-full md:w-auto">
						<div className="bg-green-100 rounded-full p-3">
							<PhoneIcon className="h-8 w-8 text-green-700" />
						</div>
						<div className="ml-4 text-left">
							<h3 className="text-xl font-semibold text-gray-900">
								Call Us
							</h3>
							<a
								href="tel:+1234567890"
								className="text-lg text-gray-700 hover:text-green-700"
							>
								+233 55 915 4796
							</a>
						</div>
					</div>
					<div className="flex items-center p-6 bg-white rounded-lg shadow-md w-full md:w-auto">
						<div className="bg-green-100 rounded-full p-3">
							<EnvelopeIcon className="h-8 w-8 text-green-700" />
						</div>
						<div className="ml-4 text-left">
							<h3 className="text-xl font-semibold text-gray-900">
								Email Us
							</h3>
							<a
								href="mailto:contact@7greenlaundry.com"
								className="text-lg text-gray-700 hover:text-green-700"
							>
								contact@7greenlaundry.com
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactInfo;
