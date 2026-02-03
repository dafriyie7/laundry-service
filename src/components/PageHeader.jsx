import React from "react";
import { motion } from "framer-motion";

const PageHeader = ({ title, subtitle, icon: Icon, image }) => {
    return (
        <div className="relative pt-32 pb-20 overflow-hidden bg-brand-forest">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl">
                    {Icon && (
                        <div
                            className="inline-flex p-4 rounded-2xl bg-brand-green/20 border border-brand-green/30 text-brand-gold mb-6"
                            data-aos="fade-down"
                        >
                            <Icon className="h-10 w-10" />
                        </div>
                    )}

                    <h1
                        className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight"
                        data-aos="fade-up"
                    >
                        {title}
                    </h1>

                    {subtitle && (
                        <p
                            className="text-xl md:text-2xl text-gray-300 italic max-w-2xl leading-relaxed"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>

            {/* Bottom Curve Divider */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-brand-cream" style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }}></div>
        </div>
    );
};

export default PageHeader;
