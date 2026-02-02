import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

const WhatsAppIcon = () => (
	<svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
		<path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.006.332.009c.109.004.258-.045.405.314.159.386.541 1.32.588 1.417.047.097.078.21.014.332-.064.123-.097.199-.191.314-.094.114-.197.255-.282.342-.097.1-.197.209-.085.403.111.193.493.815 1.06 1.319.734.652 1.352.854 1.545.95.193.097.305.08.419-.051.114-.131.487-.567.617-.76.13-.193.259-.162.433-.097.174.065 1.1.519 1.287.613s.312.141.358.22c.046.08.046.46-.098.865z" />
	</svg>
);

const ContactInfo = () => {
	return (
		<section className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 text-white py-20 px-4">
			<div className="container mx-auto px-4 text-center">
				<h2 className="text-4xl font-bold text-white mb-4 italic">
					Get In Touch
				</h2>
				<p className="text-lg text-gray-200 mb-12 italic">
					Have questions? We're here to help! Reach us directly via any of these channels.
				</p>
				<div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
					{/* Phone */}
					<div className="flex items-center p-6 bg-white rounded-2xl shadow-xl w-full md:w-auto transform hover:scale-105 transition-all group">
						<div className="bg-green-100 rounded-2xl p-4 mr-6 group-hover:bg-green-600 transition-colors">
							<PhoneIcon className="h-8 w-8 text-green-700 group-hover:text-white" />
						</div>
						<div className="text-left">
							<h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-1">
								Call Us
							</h3>
							<a
								href="tel:+233559154796"
								className="text-xl font-bold text-gray-800 hover:text-green-600"
							>
								+233 55 915 4796
							</a>
						</div>
					</div>

					{/* WhatsApp */}
					<div className="flex items-center p-6 bg-white rounded-2xl shadow-xl w-full md:w-auto transform hover:scale-105 transition-all group border-2 border-transparent hover:border-[#25D366]">
						<div className="bg-[#25D366]/10 rounded-2xl p-4 mr-6 group-hover:bg-[#25D366] transition-colors">
							<div className="text-[#25D366] group-hover:text-white">
								<WhatsAppIcon />
							</div>
						</div>
						<div className="text-left">
							<h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-1">
								WhatsApp
							</h3>
							<a
								href="https://wa.me/233559154796"
								target="_blank"
								rel="noopener noreferrer"
								className="text-xl font-bold text-gray-800 hover:text-[#25D366]"
							>
								Chat with us
							</a>
						</div>
					</div>

					{/* Email */}
					<div className="flex items-center p-6 bg-white rounded-2xl shadow-xl w-full md:w-auto transform hover:scale-105 transition-all group">
						<div className="bg-green-100 rounded-2xl p-4 mr-6 group-hover:bg-green-600 transition-colors">
							<EnvelopeIcon className="h-8 w-8 text-green-700 group-hover:text-white" />
						</div>
						<div className="text-left">
							<h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-1">
								Email Us
							</h3>
							<a
								href="mailto:7greenlaundry@gmail.com"
								className="text-xl font-bold text-gray-800 hover:text-green-600"
							>
								7greenlaundry@gmail.com
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactInfo;
