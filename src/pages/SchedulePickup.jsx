import React, { useState, useMemo } from "react";
import PageHeader from "../components/PageHeader";
import { pricingData } from "../data/pricingData";
import {
    PlusIcon,
    MinusIcon,
    TrashIcon,
    CalendarIcon,
    TruckIcon,
    ShoppingBagIcon,
    MapPinIcon,
    ClockIcon,
    CheckBadgeIcon,
    ChevronRightIcon,
    MagnifyingGlassIcon
} from "@heroicons/react/24/outline";
import { SparklesIcon, SunIcon, ArrowPathRoundedSquareIcon } from "@heroicons/react/24/solid";

const SchedulePickup = () => {
    const [serviceType, setServiceType] = useState("pickup"); // 'pickup' or 'dropoff'
    const [selectedCategory, setSelectedCategory] = useState("laundry");
    const [basket, setBasket] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        date: "",
        window: "Morning (08:00 - 12:00)"
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const categoryIcons = {
        laundry: <SunIcon className="h-4 w-4" />,
        dryCleaning: <SparklesIcon className="h-4 w-4" />,
        pressOnly: <ArrowPathRoundedSquareIcon className="h-4 w-4" />
    };

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

    const filteredItems = useMemo(() => {
        return pricingData[selectedCategory].filter(item =>
            item.item.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [selectedCategory, searchTerm]);

    const getItemQuantity = (itemName) => {
        const item = basket.find(i => i.item === itemName && i.category === selectedCategory);
        return item ? item.quantity : 0;
    };

    const handleFinalizeBooking = () => {
        // Basic validation
        if (!formData.firstName || !formData.phone) {
            alert("Please provide your name and phone number to continue.");
            return;
        }

        const WHATSAPP_NUMBER = "233547285141"; // Your Business Number

        let message = `🌿 *New Order: 7Green Laundry*\n`;
        message += `----------------------------------\n`;
        message += `👤 *Customer:* ${formData.firstName} ${formData.lastName}\n`;
        message += `📞 *Phone:* ${formData.phone}\n`;

        if (serviceType === "pickup") {
            message += `📍 *Address:* ${formData.address}\n`;
        } else {
            message += `📍 *Type:* Drop-off at Station\n`;
        }

        message += `📅 *Service Date:* ${formData.date}\n`;
        message += `⏰ *Window:* ${formData.window}\n\n`;

        message += `🧺 *Selections:*\n`;

        if (basket.length === 0) {
            message += `• _No items selected (Estimate requested)_\n`;
        } else {
            basket.forEach(item => {
                const categoryClean = item.category.replace(/([A-Z])/g, ' $1');
                message += `• ${item.quantity}x ${item.item} (${categoryClean}) - GHS ${(item.price * item.quantity).toFixed(2)}\n`;
            });
        }

        const finalTotal = (parseFloat(totalEstimate) + (serviceType === "pickup" ? 10 : 0)).toFixed(2);
        message += `\n💰 *Total Estimate:* GHS ${finalTotal}\n`;
        message += `🚚 *Service Type:* ${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)}\n`;
        message += `----------------------------------`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
    };

    return (
        <div className="bg-brand-cream min-h-screen">
            <PageHeader
                title="Schedule Service"
                subtitle="Book your premium garment care experience. Professional handling from doorstep to delivery."
                icon={CalendarIcon}
            />

            <div className="container mx-auto px-6 py-20">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Column: Form and Selection */}
                    <div className="lg:w-2/3 space-y-12">
                        {/* Service Selection Toggle */}
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-brand-forest/5 border border-brand-cream" data-aos="fade-up">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="bg-brand-gold p-3 rounded-xl text-brand-forest font-black">01</div>
                                <h2 className="text-2xl font-serif font-bold text-brand-forest">Choose Your Convenience</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2 bg-brand-cream/50 rounded-[2rem]">
                                <button
                                    onClick={() => setServiceType("pickup")}
                                    className={`flex items-center justify-center gap-4 py-6 px-4 rounded-[1.5rem] font-bold transition-all duration-500 uppercase tracking-widest text-xs ${serviceType === "pickup" ? "bg-brand-forest text-brand-gold shadow-2xl" : "text-brand-forest hover:bg-brand-gold/10"}`}
                                >
                                    <TruckIcon className="h-6 w-6" />
                                    Concierge Pickup
                                </button>
                                <button
                                    onClick={() => setServiceType("dropoff")}
                                    className={`flex items-center justify-center gap-4 py-6 px-4 rounded-[1.5rem] font-bold transition-all duration-500 uppercase tracking-widest text-xs ${serviceType === "dropoff" ? "bg-brand-forest text-brand-gold shadow-2xl" : "text-brand-forest hover:bg-brand-gold/10"}`}
                                >
                                    <ShoppingBagIcon className="h-6 w-6" />
                                    In-Store Drop
                                </button>
                            </div>
                        </div>

                        {/* Itemized Selection */}
                        <div className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-brand-forest/5 border border-brand-cream" data-aos="fade-up">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="bg-brand-gold p-3 rounded-xl text-brand-forest font-black">02</div>
                                <h2 className="text-2xl font-serif font-bold text-brand-forest">Garment Inventory <span className="text-sm font-sans font-medium text-gray-400 block lg:inline lg:ml-2">(Optional for Estimate)</span></h2>
                            </div>

                            {/* Category Tabs & Search */}
                            <div className="flex flex-col md:flex-row gap-6 mb-10">
                                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide flex-1">
                                    {Object.keys(pricingData).map(cat => (
                                        <button
                                            key={cat}
                                            onClick={() => setSelectedCategory(cat)}
                                            className={`px-6 py-3 rounded-2xl font-bold whitespace-nowrap transition-all duration-500 uppercase tracking-widest text-[10px] flex items-center gap-2 ${selectedCategory === cat ? "bg-brand-green text-white shadow-lg" : "bg-brand-cream text-brand-green hover:bg-brand-green/10"}`}
                                        >
                                            {categoryIcons[cat]}
                                            {cat.charAt(0).toUpperCase() + cat.slice(1).replace(/([A-Z])/g, ' $1')}
                                        </button>
                                    ))}
                                </div>
                                <div className="relative w-full md:w-64">
                                    <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search items..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 rounded-2xl bg-brand-cream/50 border border-brand-cream focus:bg-white focus:ring-2 focus:ring-brand-gold outline-none transition-all text-sm font-bold text-brand-forest"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
                                {filteredItems.length === 0 ? (
                                    <div className="col-span-full py-20 text-center opacity-40">
                                        <p className="italic font-medium">No items found matching "{searchTerm}"</p>
                                    </div>
                                ) : (
                                    filteredItems.map((itemObj, idx) => {
                                        const qty = getItemQuantity(itemObj.item);
                                        return (
                                            <div
                                                key={idx}
                                                className={`flex justify-between items-center p-6 rounded-3xl border transition-all group ${qty > 0 ? "bg-white border-brand-green shadow-xl" : "bg-brand-cream/30 border-brand-cream hover:border-brand-gold/30 hover:bg-white"}`}
                                            >
                                                <div className="flex-1">
                                                    <p className={`font-serif font-bold text-lg transition-colors ${qty > 0 ? "text-brand-green" : "text-brand-forest"}`}>{itemObj.item}</p>
                                                    <p className="text-xs font-black text-brand-gold uppercase tracking-widest mt-1">GHS {itemObj.price.toFixed(2)} {itemObj.unit ? `/ ${itemObj.unit}` : ""}</p>
                                                </div>

                                                <div className="flex items-center gap-3 bg-brand-forest/5 rounded-2xl p-2">
                                                    {qty > 0 ? (
                                                        <>
                                                            <button
                                                                onClick={() => updateQuantity(itemObj.item, selectedCategory, -1)}
                                                                className="w-8 h-8 rounded-xl bg-white text-brand-forest flex items-center justify-center hover:bg-red-500 hover:text-white transition-all shadow-sm"
                                                            >
                                                                <MinusIcon className="h-4 w-4" />
                                                            </button>
                                                            <span className="w-6 text-center font-black text-brand-forest">{qty}</span>
                                                        </>
                                                    ) : null}
                                                    <button
                                                        onClick={() => addItem(itemObj)}
                                                        className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all shadow-lg ${qty > 0 ? "bg-brand-green text-white" : "bg-brand-forest text-brand-gold hover:bg-brand-green hover:text-white"}`}
                                                    >
                                                        <PlusIcon className="h-5 w-5" />
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })
                                )}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-brand-forest/5 border border-brand-cream" data-aos="fade-up">
                            <div className="flex items-center gap-4 mb-12">
                                <div className="bg-brand-gold p-3 rounded-xl text-brand-forest font-black">03</div>
                                <h2 className="text-2xl font-serif font-bold text-brand-forest">{serviceType === "pickup" ? "Schedule & Location" : "Guest Details"}</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="form-input"
                                        placeholder="e.g. Samuel"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="form-input"
                                        placeholder="e.g. Asante"
                                    />
                                </div>

                                <div className="col-span-1 md:col-span-2 space-y-3">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="form-input"
                                        placeholder="+233 ... ... ..."
                                    />
                                </div>

                                {serviceType === "pickup" && (
                                    <div className="col-span-1 md:col-span-2 space-y-3">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                                            <MapPinIcon className="h-3 w-3" />
                                            Collection Address
                                        </label>
                                        <textarea
                                            rows="3"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            className="form-input resize-none"
                                            placeholder="Provide details e.g. Community 10, House Num..."
                                        ></textarea>
                                    </div>
                                )}

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                                        <CalendarIcon className="h-3 w-3" />
                                        Service Date
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                        className="form-input"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                                        <ClockIcon className="h-3 w-3" />
                                        Window Preference
                                    </label>
                                    <select
                                        name="window"
                                        value={formData.window}
                                        onChange={handleInputChange}
                                        className="form-input appearance-none"
                                    >
                                        <option>Morning (08:00 - 12:00)</option>
                                        <option>Afternoon (12:00 - 16:00)</option>
                                        <option>Evening (16:00 - 20:00)</option>
                                    </select>
                                </div>

                                <div className="col-span-1 md:col-span-2 space-y-3">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Special Handling Instructions</label>
                                    <textarea rows="2" className="w-full px-6 py-5 rounded-2xl bg-brand-cream/50 border border-brand-cream focus:ring-2 focus:ring-brand-gold focus:bg-white outline-none transition-all font-bold text-brand-forest resize-none" placeholder="e.g. Delicate fabrics, stain alerts, starch level..."></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Basket Summary */}
                    <div className="lg:w-1/3 w-full">
                        <div className="bg-brand-forest rounded-[3rem] shadow-2xl sticky top-24 border border-white/10 flex flex-col max-h-[calc(100vh-140px)]">
                            {/* Header */}
                            <div className="p-8 pb-6 border-b border-white/10">
                                <div className="flex items-center gap-4">
                                    <div className="bg-brand-gold p-3 rounded-xl text-brand-forest">
                                        <SparklesIcon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-white">Your Selection</h3>
                                </div>
                            </div>

                            {/* Scrollable Items Area */}
                            <div className="flex-1 overflow-y-auto p-8 py-6 custom-scrollbar-white">
                                {basket.length === 0 ? (
                                    <div className="text-center py-10 opacity-40">
                                        <ShoppingBagIcon className="h-16 w-16 mx-auto mb-4 text-white" />
                                        <p className="text-white italic font-medium">Your basket is awaiting your selection.</p>
                                    </div>
                                ) : (
                                    <div className="space-y-3">
                                        {basket.map((i, idx) => (
                                            <div key={idx} className="bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/20 transition-all group">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex-1 min-w-0">
                                                        <p className="font-serif font-bold text-white text-base leading-tight truncate">{i.item}</p>
                                                        <p className="text-[9px] font-black text-brand-gold uppercase tracking-widest mt-0.5 opacity-60 truncate">{i.category.replace(/([A-Z])/g, ' $1')}</p>
                                                    </div>

                                                    <div className="flex items-center gap-2 bg-white/5 rounded-xl p-1.5 px-2">
                                                        <button
                                                            onClick={(e) => { e.stopPropagation(); updateQuantity(i.item, i.category, -1); }}
                                                            className="w-6 h-6 rounded-lg bg-white/10 text-white flex items-center justify-center hover:bg-brand-gold hover:text-brand-forest transition-all"
                                                        >
                                                            <MinusIcon className="h-3 w-3" />
                                                        </button>
                                                        <span className="text-white text-xs font-black font-mono w-4 text-center">{i.quantity}</span>
                                                        <button
                                                            onClick={(e) => { e.stopPropagation(); updateQuantity(i.item, i.category, 1); }}
                                                            className="w-6 h-6 rounded-lg bg-white/10 text-white flex items-center justify-center hover:bg-brand-green hover:text-white transition-all"
                                                        >
                                                            <PlusIcon className="h-3 w-3" />
                                                        </button>
                                                    </div>

                                                    <div className="text-right min-w-[70px]">
                                                        <p className="font-serif font-black text-brand-gold text-sm whitespace-nowrap">GHS {(i.price * i.quantity).toFixed(2)}</p>
                                                    </div>

                                                    <button
                                                        onClick={() => removeItem(i.item, i.category)}
                                                        className="text-white/20 hover:text-red-400 transition-colors p-1"
                                                    >
                                                        <TrashIcon className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Sticky/Fixed Footer Area */}
                            <div className="p-8 pt-6 border-t border-white/10 bg-brand-forest/50 backdrop-blur-md rounded-b-[3rem]">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-gray-400 text-[10px] font-black uppercase tracking-widest">
                                        <span>Base Service</span>
                                        <span className="text-white">GHS {totalEstimate}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-gray-400 text-[10px] font-black uppercase tracking-widest">
                                        <span>Concierge Fee ({serviceType})</span>
                                        <span className="text-white">{serviceType === "pickup" ? "GHS 10.00" : "GHS 0.00"}</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-6 border-t border-white/10 text-brand-gold">
                                        <span className="text-sm font-black uppercase tracking-[0.2em]">Total Estimate</span>
                                        <span className="text-3xl font-serif font-black">GHS {(parseFloat(totalEstimate) + (serviceType === "pickup" ? 10 : 0)).toFixed(2)}</span>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleFinalizeBooking}
                                    className="w-full btn-primary bg-brand-gold text-brand-forest hover:bg-white mt-8 py-6 rounded-2xl group flex items-center justify-center gap-4"
                                >
                                    Finalize Your Booking
                                    <ChevronRightIcon className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                                </button>

                                <div className="flex items-start gap-4 mt-6 opacity-40">
                                    <CheckBadgeIcon className="h-4 w-4 text-white flex-shrink-0 mt-1" />
                                    <p className="text-[9px] text-white italic leading-relaxed">
                                        Final pricing will be confirmed after physical garment inspection. 7Green Laundry adheres to international textile care standards.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Sticky CTA */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-brand-forest p-6 border-t border-white/10 z-40 backdrop-blur-lg">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-white text-xs font-black uppercase tracking-widest opacity-60">Estimated Total</span>
                    <span className="text-brand-gold text-2xl font-serif font-black">GHS {(parseFloat(totalEstimate) + (serviceType === "pickup" ? 10 : 0)).toFixed(2)}</span>
                </div>
                <button
                    onClick={handleFinalizeBooking}
                    className="w-full btn-primary bg-brand-gold text-brand-forest py-5 rounded-2xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3"
                >
                    Finalize & Book
                    <ChevronRightIcon className="h-5 w-5" />
                </button>
            </div>
            <div id="finalize-booking" className="h-1 lg:hidden"></div>
        </div>
    );
};

export default SchedulePickup;
