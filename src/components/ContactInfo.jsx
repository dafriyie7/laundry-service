import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

const WhatsAppIcon = () => (
	<svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
		<path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.006.332.009c.109.004.258-.045.405.314.159.386.541 1.32.588 1.417.047.097.078.21.014.332-.064.123-.097.199-.191.314-.094.114-.197.255-.282.342-.097.1-.197.209-.085.403.111.193.493.815 1.06 1.319.734.652 1.352.854 1.545.95.193.097.305.08.419-.051.114-.131.487-.567.617-.76.13-.193.259-.162.433-.097.174.065 1.1.519 1.287.613s.312.141.358.22c.046.08.046.46-.098.865z" />
	</svg>
);

const ContactInfo = () => {
	return (
		<section className="bg-brand-forest py-24 relative overflow-hidden">
			{/* Decorative elements */}
			<div className="absolute top-0 left-0 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
			<div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

			<div className="container mx-auto px-6 relative z-10">
				<div className="max-w-4xl mx-auto text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
						Connect with <span className="text-brand-gold italic">Concierge</span>
					</h2>
					<p className="text-xl text-gray-400 font-medium">
						Available for consultation and order management through our premium communication channels.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{[
						{
							icon: <PhoneIcon className="h-6 w-6" />,
							label: "Phone",
							value: "+233 55 915 4796",
							link: "tel:+233559154796",
							color: "brand-green"
						},
						{
							icon: <WhatsAppIcon />,
							label: "WhatsApp",
							value: "Direct Consultation",
							link: "https://wa.me/233559154796",
							color: "[#25D366]"
						},
						{
							icon: <EnvelopeIcon className="h-6 w-6" />,
							label: "Email",
							value: "care@7green.com",
							link: "mailto:care@7green.com",
							color: "brand-gold"
						}
					].map((item, index) => (
						<a
							key={index}
							href={item.link}
							target={item.link.startsWith('http') ? "_blank" : undefined}
							rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
							className="group p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 hover:border-brand-gold/30 transition-all duration-500 text-center"
							data-aos="fade-up"
							data-aos-delay={index * 150}
						>
							<div className={`mx-auto w-16 h-16 rounded-2xl bg-${item.color}/10 flex items-center justify-center text-white group-hover:bg-brand-gold group-hover:text-brand-forest transition-all duration-500 mb-8 border border-white/5`}>
								{item.icon}
							</div>
							<p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-3">{item.label}</p>
							<p className="text-xl font-serif font-bold text-white group-hover:text-brand-gold transition-colors">{item.value}</p>
						</a>
					))}
				</div>

				<div className="mt-20 pt-10 border-t border-white/10 text-center">
					<p className="text-xs text-gray-500 font-bold uppercase tracking-widest">
						&copy; {new Date().getFullYear()} 7Green Laundry. All Rights Reserved.
					</p>
				</div>
			</div>
		</section>
	);
};

export default ContactInfo;
