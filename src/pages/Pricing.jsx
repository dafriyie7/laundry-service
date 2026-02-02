import React, { useState } from "react";
import { pricingData } from "../data/pricingData";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Pricing = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");

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
        <div className="pt-20 bg-gray-50 min-h-screen">
            <div className="bg-green-600 text-white shadow-xl">
                <div className="container mx-auto text-center py-16 px-4">
                    <h1 className="text-5xl font-black italic underline decoration-green-400 mb-4">Pricing List</h1>
                    <p className="text-xl text-green-100 italic">
                        Transparent pricing for all your garment care needs.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                {/* Search and Filters */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-white p-8 rounded-3xl shadow-xl" data-aos="fade-up">
                    <div className="flex flex-wrap gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 uppercase tracking-wider text-sm ${activeCategory === cat.id ? "bg-green-600 text-white shadow-lg scale-105" : "bg-gray-100 text-gray-500 hover:bg-green-50 hover:text-green-600"}`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-80">
                        <MagnifyingGlassIcon className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search items..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-green-500 focus:bg-white transition-all outline-none font-semibold"
                        />
                    </div>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
                    {filteredData().map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl shadow-md border border-gray-50 hover:shadow-xl hover:-translate-y-1 transition-all group">
                            <div className="flex justify-between items-start mb-2">
                                <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-widest rounded-full group-hover:bg-green-600 group-hover:text-white transition-colors">
                                    {item.cat}
                                </span>
                                {item.unit && (
                                    <span className="text-xs font-bold text-gray-400">per {item.unit}</span>
                                )}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-1">{item.item}</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-black text-green-600">GHS {item.price.toFixed(2)}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredData().length === 0 && (
                    <div className="text-center py-20 bg-white rounded-3xl shadow-inner border-2 border-dashed border-gray-200">
                        <p className="text-2xl font-bold text-gray-400 italic">No items found matching "{searchTerm}"</p>
                    </div>
                )}

                <div className="mt-16 bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-12 text-center text-white shadow-2xl overflow-hidden relative" data-aos="zoom-in">
                    <div className="relative z-10">
                        <h2 className="text-4xl font-black italic mb-6">Ready to book?</h2>
                        <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
                            Get your laundry picked up today and enjoy 5-star garment care.
                        </p>
                        <button className="bg-white text-green-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-green-50 transition-all shadow-xl transform hover:scale-110 active:scale-95 uppercase tracking-widest">
                            Schedule a Pickup
                        </button>
                    </div>
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-green-400/20 rounded-full blur-3xl"></div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
