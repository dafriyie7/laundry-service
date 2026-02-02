import React from "react";
import ContactInfo from "../components/ContactInfo";

const WhatsAppIcon = () => (
    <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.006.332.009c.109.004.258-.045.405.314.159.386.541 1.32.588 1.417.047.097.078.21.014.332-.064.123-.097.199-.191.314-.094.114-.197.255-.282.342-.097.1-.197.209-.085.403.111.193.493.815 1.06 1.319.734.652 1.352.854 1.545.95.193.097.305.08.419-.051.114-.131.487-.567.617-.76.13-.193.259-.162.433-.097.174.065 1.1.519 1.287.613s.312.141.358.22c.046.08.046.46-.098.865z" />
    </svg>
);

const Contact = () => {
    return (
        <div className="pt-20 bg-gray-50">
            <div className="bg-green-600 text-white shadow-xl">
                <div className="container mx-auto text-center py-16 px-4">
                    <h1 className="text-5xl font-bold italic underline decoration-green-400">Contact Us</h1>
                    <p className="text-xl mt-4 text-green-100 italic">
                        Fast, eco-friendly, and always ready to help.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    {/* Left: Contact Details */}
                    <div className="lg:col-span-1 space-y-8" data-aos="fade-right">
                        <div className="bg-white p-8 rounded-3xl shadow-2xl border border-green-50">
                            <h2 className="text-3xl font-black text-gray-800 mb-8 italic">Quick Reach</h2>

                            <div className="space-y-6">
                                <a
                                    href="https://wa.me/233559154796"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center p-6 bg-[#25D366]/5 rounded-2xl border-2 border-[#25D366]/20 hover:bg-[#25D366]/10 transition-all group"
                                >
                                    <div className="bg-[#25D366] p-4 rounded-xl mr-5 text-white shadow-lg group-hover:rotate-12 transition-transform">
                                        <WhatsAppIcon />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-[#25D366] uppercase tracking-[0.2em]">WhatsApp</p>
                                        <p className="text-xl font-bold text-gray-800">Chat Now</p>
                                    </div>
                                </a>

                                <div className="p-6 bg-green-50 rounded-2xl border border-green-100 italic text-gray-600">
                                    <p className="mb-4 font-bold text-gray-800">Operating Hours:</p>
                                    <p>Mon - Sat: 8:00 AM - 8:00 PM</p>
                                    <p>Sun: Closed / Book Online</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="lg:col-span-2 bg-white p-10 rounded-3xl shadow-2xl border border-gray-100" data-aos="fade-left">
                        <h2 className="text-3xl font-black text-gray-800 mb-8 italic">Send a Message</h2>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-500 uppercase ml-1">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-green-500 focus:bg-white outline-none transition-all"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-500 uppercase ml-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-green-500 focus:bg-white outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div className="col-span-1 md:col-span-2 space-y-2">
                                <label className="text-sm font-bold text-gray-500 uppercase ml-1">Message</label>
                                <textarea
                                    rows="5"
                                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-green-500 focus:bg-white outline-none transition-all"
                                    placeholder="How can we help today?"
                                ></textarea>
                            </div>
                            <div className="col-span-1 md:col-span-2">
                                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-5 rounded-2xl shadow-xl transform active:scale-95 transition-all text-xl uppercase tracking-widest">
                                    Submit Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <ContactInfo />
        </div>
    );
};

export default Contact;
