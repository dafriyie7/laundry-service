import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import { pricingData } from "../data/pricingData";
import { MagnifyingGlassIcon, BanknotesIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import AOS from "aos";

const Pricing = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");

    useEffect(() => {
        AOS.refresh();
    }, [activeCategory, searchTerm]);

    const categories = [
        { id: "all", name: "All Services" },
        { id: "laundry", name: "Laundry" },
        { id: "dryCleaning", name: "Dry Cleaning" },
        { id: "pressOnly", name: "Press Only" },
    ];

    const filteredData = () => {
        let data = [];
        if (activeCategory === "all") {
            data = [
                ...pricingData.laundry.map(i => ({ ...i, cat: "Laundry" })),
                ...pricingData.dryCleaning.map(i => ({ ...i, cat: "Dry Cleaning" })),
                ...pricingData.pressOnly.map(i => ({ ...i, cat: "Press Only" })),
            ];
        } else {
            data = pricingData[activeCategory].map(i => ({ ...i, cat: activeCategory.replace(/([A-Z])/g, ' $1') }));
        }

        return data.filter(i =>
            i.item.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    return (
        <div className="bg-brand-cream min-h-screen">
            <PageHeader
                title="Transparent Pricing"
                subtitle="Investment-grade care for your wardrobe. Simple, honest, and competitive rates."
                icon={BanknotesIcon}
            />

            <div className="container mx-auto px-6 py-20">
                {/* Search and Filters */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-20 bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-brand-forest/5 border border-brand-cream" data-aos="fade-up">
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mr-4">Filter by:</span>
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-8 py-3 rounded-2xl font-bold transition-all duration-500 uppercase tracking-widest text-[10px] ${activeCategory === cat.id ? "bg-brand-forest text-brand-gold shadow-xl rotate-1 scale-110" : "bg-brand-cream text-brand-forest hover:bg-brand-gold/20"}`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full lg:w-96">
                        <MagnifyingGlassIcon className="h-5 w-5 absolute left-5 top-1/2 -translate-y-1/2 text-brand-green" />
                        <input
                            type="text"
                            placeholder="Find a specific item..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-14 pr-6 py-5 rounded-2xl bg-brand-cream/50 border border-brand-cream focus:ring-2 focus:ring-brand-gold focus:bg-white transition-all outline-none font-bold text-brand-forest"
                        />
                    </div>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {filteredData().map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-brand-cream hover:shadow-xl hover:border-brand-gold/30 hover:-translate-y-1 transition-all group"
                            data-aos="fade-up"
                            data-aos-delay={(idx % 4) * 50}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="px-2 py-0.5 bg-brand-green/10 text-brand-green text-[8px] font-black uppercase tracking-widest rounded-md group-hover:bg-brand-green group-hover:text-white transition-colors">
                                    {item.cat}
                                </span>
                                {item.unit && (
                                    <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">per {item.unit}</span>
                                )}
                            </div>
                            <h3 className="text-lg font-serif font-bold text-brand-forest mb-3 leading-tight group-hover:text-brand-green transition-colors">{item.item}</h3>
                            <div className="pt-3 border-t border-brand-cream flex justify-between items-baseline">
                                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Rate</span>
                                <span className="text-xl font-serif font-black text-brand-forest">GHS {item.price.toFixed(2)}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredData().length === 0 && (
                    <div className="text-center py-32 bg-white rounded-[3rem] shadow-inner border-4 border-dashed border-brand-cream">
                        <div className="bg-brand-cream w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                            <MagnifyingGlassIcon className="h-10 w-10 text-brand-green/30" />
                        </div>
                        <p className="text-3xl font-serif font-bold text-gray-300">No items found matching "{searchTerm}"</p>
                    </div>
                )}

                <div className="mt-32 bg-brand-forest rounded-[3rem] p-16 lg:p-24 text-center relative overflow-hidden shadow-2xl" data-aos="zoom-in">
                    {/* Decorative Bg */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">Ready to <span className="text-brand-gold italic">Experience</span> the Difference?</h2>
                        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                            Our pricing matches our quality. Professional garment restoration is just a book away.
                        </p>
                        <a href="/schedule-pickup" className="btn-primary inline-flex items-center gap-4 bg-brand-gold text-brand-forest hover:bg-white">
                            Book Your Pickup Now
                            <ChevronRightIcon className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
