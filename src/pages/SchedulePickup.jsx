import React, { useState, useMemo } from "react";
import { pricingData } from "../data/pricingData";
import { PlusIcon, MinusIcon, TrashIcon } from "@heroicons/react/24/outline";

const SchedulePickup = () => {
    const [serviceType, setServiceType] = useState("pickup"); // 'pickup' or 'dropoff'
    const [selectedCategory, setSelectedCategory] = useState("laundry");
    const [basket, setBasket] = useState([]); // [{ item: 'Shirt', category: 'laundry', price: 7, quantity: 1, unit: '' }]

    const addItem = (itemObj) => {
        setBasket(prev => {
            const existing = prev.find(i => i.item === itemObj.item && i.category === selectedCategory);
            if (existing) {
                return prev.map(i =>
                    (i.item === itemObj.item && i.category === selectedCategory)
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                );
            }
            return [...prev, { ...itemObj, category: selectedCategory, quantity: 1 }];
        });
    };

    const updateQuantity = (item, category, delta) => {
        setBasket(prev => {
            return prev.map(i => {
                if (i.item === item && i.category === category) {
                    const newQty = Math.max(0, i.quantity + delta);
                    return { ...i, quantity: newQty };
                }
                return i;
            }).filter(i => i.quantity > 0);
        });
    };

    const removeItem = (item, category) => {
        setBasket(prev => prev.filter(i => !(i.item === item && i.category === category)));
    };

    const totalEstimate = useMemo(() => {
        return basket.reduce((sum, i) => sum + (i.price * i.quantity), 0).toFixed(2);
    }, [basket]);

    return (
        <div className="pt-20 bg-gray-50 min-h-screen">
            <div className="bg-green-600 text-white shadow-xl">
                <div className="container mx-auto text-center py-16 px-4">
                    <h1 className="text-5xl font-bold italic">Schedule Your Service</h1>
                    <p className="text-xl mt-4 text-green-100 italic">
                        Tell us what you need, and we'll handle the rest.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column: Form and Selection */}
                    <div className="lg:w-2/3 space-y-8">
                        {/* Service Selection Toggle */}
                        <div className="bg-white p-6 rounded-2xl shadow-md" data-aos="fade-up">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                                Service Option
                            </h2>
                            <div className="flex p-1 bg-gray-100 rounded-xl max-w-sm">
                                <button
                                    onClick={() => setServiceType("pickup")}
                                    className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all duration-300 ${serviceType === "pickup" ? "bg-white text-green-600 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                                >
                                    🚚 Pickup & Delivery
                                </button>
                                <button
                                    onClick={() => setServiceType("dropoff")}
                                    className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all duration-300 ${serviceType === "dropoff" ? "bg-white text-green-600 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                                >
                                    🏬 Drop at Shop
                                </button>
                            </div>
                        </div>

                        {/* Itemized Selection */}
                        <div className="bg-white p-6 rounded-2xl shadow-md" data-aos="fade-up">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                                Item Selection (Optional Estimate)
                            </h2>

                            {/* Category Tabs */}
                            <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
                                {Object.keys(pricingData).map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-6 py-2 rounded-full font-bold whitespace-nowrap transition-all duration-300 ${selectedCategory === cat ? "bg-green-600 text-white" : "bg-green-50 text-green-600 hover:bg-green-100"}`}
                                    >
                                        {cat.charAt(0).toUpperCase() + cat.slice(1).replace(/([A-Z])/g, ' $1')}
                                    </button>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                {pricingData[selectedCategory].map((itemObj, idx) => (
                                    <div key={idx} className="flex justify-between items-center p-4 border border-gray-100 rounded-xl hover:bg-green-50 transition-colors group">
                                        <div>
                                            <p className="font-semibold text-gray-800">{itemObj.item}</p>
                                            <p className="text-sm text-green-600 font-bold">GHS {itemObj.price.toFixed(2)} {itemObj.unit ? `/ ${itemObj.unit}` : ""}</p>
                                        </div>
                                        <button
                                            onClick={() => addItem(itemObj)}
                                            className="bg-green-100 text-green-600 p-2 rounded-lg group-hover:bg-green-600 group-hover:text-white transition-all"
                                        >
                                            <PlusIcon className="h-5 w-5" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-6 rounded-2xl shadow-md" data-aos="fade-up">
                            <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                                <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                                {serviceType === "pickup" ? "Address & Schedule" : "Contact Details"}
                            </h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">First Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:outline-none transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:outline-none transition-all" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:outline-none transition-all" />
                                </div>

                                {serviceType === "pickup" && (
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">Pickup Address</label>
                                        <textarea rows="3" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:outline-none transition-all" placeholder="Enter your full address in Ghana..."></textarea>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">Service Date</label>
                                        <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:outline-none transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">{serviceType === "pickup" ? "Pickup Time" : "Drop-off Time"}</label>
                                        <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:outline-none transition-all">
                                            <option>Morning (8am - 12pm)</option>
                                            <option>Afternoon (12pm - 4pm)</option>
                                            <option>Evening (4pm - 8pm)</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Special Instructions</label>
                                    <textarea rows="2" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:outline-none transition-all" placeholder="e.g. gate code, leave with security, starch level..."></textarea>
                                </div>

                                <button
                                    type="button"
                                    className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition duration-300 shadow-lg transform hover:-translate-y-1 block md:hidden"
                                >
                                    Schedule {serviceType === "pickup" ? "Pickup" : "Drop-off"}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right Column: Basket Summary */}
                    <div className="lg:w-1/3">
                        <div className="bg-white p-6 rounded-2xl shadow-xl sticky top-24" data-aos="fade-left">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">Order Summary</h3>

                            <div className="max-h-[300px] overflow-y-auto mb-6 custom-scrollbar">
                                {basket.length === 0 ? (
                                    <p className="text-gray-400 italic text-center py-8">Your basket is empty. Add items to see an estimate.</p>
                                ) : (
                                    <div className="space-y-4">
                                        {basket.map((i, idx) => (
                                            <div key={idx} className="flex justify-between items-start animate-fade-in shadow-sm rounded-lg p-2">
                                                <div className="flex-1">
                                                    <p className="font-semibold text-gray-800 leading-tight">{i.item}</p>
                                                    <p className="text-xs text-gray-400 capitalize">{i.category.replace(/([A-Z])/g, ' $1')}</p>
                                                </div>
                                                <div className="flex flex-col items-end">
                                                    <div className="flex items-center space-x-2 mb-1">
                                                        <button onClick={() => updateQuantity(i.item, i.category, -1)} className="p-1 rounded bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-red-500"><MinusIcon className="h-4 w-4" /></button>
                                                        <span className="font-mono text-sm">{i.quantity}</span>
                                                        <button onClick={() => updateQuantity(i.item, i.category, 1)} className="p-1 rounded bg-gray-100 hover:bg-green-100 text-gray-600 hover:text-green-500"><PlusIcon className="h-4 w-4" /></button>
                                                    </div>
                                                    <p className="font-bold text-sm text-green-600">GHS {(i.price * i.quantity).toFixed(2)}</p>
                                                </div>
                                                <button onClick={() => removeItem(i.item, i.category)} className="ml-2 text-gray-300 hover:text-red-500"><TrashIcon className="h-4 w-4" /></button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="border-t pt-4 space-y-3">
                                <div className="flex justify-between items-center text-gray-600">
                                    <span>Subtotal</span>
                                    <span className="font-bold">GHS {totalEstimate}</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-600">
                                    <span>Service Fee ({serviceType})</span>
                                    <span className="font-bold">{serviceType === "pickup" ? "GHS 10.00" : "GHS 0.00"}</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-900 text-xl font-black pt-2">
                                    <span>Total Estimate</span>
                                    <span className="text-green-600">GHS {(parseFloat(totalEstimate) + (serviceType === "pickup" ? 10 : 0)).toFixed(2)}</span>
                                </div>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition duration-300 shadow-lg transform hover:-translate-y-1 mt-8"
                            >
                                Proceed to Finalize Order
                            </button>
                            <p className="text-xs text-center text-gray-400 mt-4 leading-relaxed">
                                * This is an estimate based on your selection. Final pricing will be confirmed after physical inspection of garments.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SchedulePickup;
