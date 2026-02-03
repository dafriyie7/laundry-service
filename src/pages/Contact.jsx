import React from "react";
import PageHeader from "../components/PageHeader";
import {
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
    ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

const WhatsAppIcon = () => (
    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.006.332.009c.109.004.258-.045.405.314.159.386.541 1.32.588 1.417.047.097.078.21.014.332-.064.123-.097.199-.191.314-.094.114-.197.255-.282.342-.097.1-.197.209-.085.403.111.193.493.815 1.06 1.319.734.652 1.352.854 1.545.95.193.097.305.08.419-.051.114-.131.487-.567.617-.76.13-.193.259-.162.433-.097.174.065 1.1.519 1.287.613s.312.141.358.22c.046.08.046.46-.098.865z" />
    </svg>
);

const Contact = () => {
    return (
        <div className="bg-brand-cream min-h-screen">
            <PageHeader
                title="Get in Touch"
                subtitle="Our concierge team is here to assist with your wardrobe care needs. Excellence is just a message away."
                icon={ChatBubbleLeftRightIcon}
            />

            <div className="container mx-auto px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
                    {/* Left: Contact Details */}
                    <div className="lg:col-span-1 space-y-10" data-aos="fade-right">
                        <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-brand-cream relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 transition-all group-hover:bg-brand-gold/10"></div>

                            <h2 className="text-3xl font-serif font-bold text-brand-forest mb-10">Direct Contact</h2>

                            <div className="space-y-8 relative z-10">
                                <a
                                    href="tel:+233559154796"
                                    className="flex items-center gap-6 group/item"
                                >
                                    <div className="bg-brand-green/10 p-5 rounded-2xl text-brand-green group-hover/item:bg-brand-green group-hover/item:text-white transition-all">
                                        <PhoneIcon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Phone</p>
                                        <p className="text-lg font-bold text-brand-forest">+233 55 915 4796</p>
                                    </div>
                                </a>

                                <a
                                    href="mailto:care@7greenlaundry.com"
                                    className="flex items-center gap-6 group/item"
                                >
                                    <div className="bg-brand-green/10 p-5 rounded-2xl text-brand-green group-hover/item:bg-brand-green group-hover/item:text-white transition-all">
                                        <EnvelopeIcon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Email</p>
                                        <p className="text-lg font-bold text-brand-forest">care@7green.com</p>
                                    </div>
                                </a>

                                <a
                                    href="https://wa.me/233559154796"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-6 p-6 bg-[#25D366]/5 rounded-[2rem] border border-[#25D366]/20 transition-all hover:bg-[#25D366]/10 group/wa"
                                >
                                    <div className="bg-[#25D366] p-4 rounded-xl text-white group-hover/wa:rotate-12 transition-transform">
                                        <WhatsAppIcon />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-[#25D366] uppercase tracking-widest">WhatsApp</p>
                                        <p className="text-lg font-bold text-brand-forest">Express Chat</p>
                                    </div>
                                </a>

                                <div className="pt-8 border-t border-brand-cream">
                                    <div className="flex items-start gap-6">
                                        <div className="bg-brand-gold/10 p-5 rounded-2xl text-brand-gold">
                                            <MapPinIcon className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Location</p>
                                            <p className="text-lg font-bold text-brand-forest">Accra, Ghana</p>
                                            <p className="text-sm text-gray-500 italic">Premium Mobile Service Only</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="lg:col-span-2 bg-white p-12 lg:p-20 rounded-[3rem] shadow-2xl border border-brand-cream relative" data-aos="fade-left">
                        <div className="max-w-2xl">
                            <h2 className="text-sm font-black text-brand-green uppercase tracking-[0.3em] mb-4">
                                Send a Request
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-serif text-brand-forest leading-tight mb-12">
                                How Can We Help <br /> <span className="text-brand-gold italic">Your Wardrobe?</span>
                            </h3>

                            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        placeholder="e.g. Samuel Asante"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-input"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div className="col-span-1 md:col-span-2 space-y-3">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Your Message</label>
                                    <textarea
                                        rows="5"
                                        className="form-input resize-none"
                                        placeholder="Tell us about your requirements..."
                                    ></textarea>
                                </div>
                                <div className="col-span-1 md:col-span-2 pt-4">
                                    <button className="w-full btn-primary py-6 rounded-2xl bg-brand-forest text-brand-gold hover:bg-brand-green hover:text-white">
                                        Submit Concierge Request
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
