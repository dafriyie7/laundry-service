import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, ExclamationTriangleIcon, CheckCircleIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

const AlertModal = ({ isOpen, onClose, title, message, type = "info" }) => {
    if (!isOpen) return null;

    const theme = {
        info: {
            icon: InformationCircleIcon,
            color: "text-brand-gold",
            bg: "bg-brand-gold/10",
            border: "border-brand-gold/30"
        },
        warning: {
            icon: ExclamationTriangleIcon,
            color: "text-amber-500",
            bg: "bg-amber-500/10",
            border: "border-amber-500/30"
        },
        success: {
            icon: CheckCircleIcon,
            color: "text-brand-green",
            bg: "bg-brand-green/10",
            border: "border-brand-green/30"
        },
        error: {
            icon: ExclamationTriangleIcon,
            color: "text-red-500",
            bg: "bg-red-500/10",
            border: "border-red-500/30"
        }
    };

    const style = theme[type] || theme.info;
    const Icon = style.icon;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-brand-forest/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className={`relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl border ${style.border} overflow-hidden`}
                    >
                        {/* Decorative background blob */}
                        <div className={`absolute top-0 right-0 w-32 h-32 ${style.bg} rounded-full blur-2xl -translate-y-1/2 translate-x-1/2`}></div>

                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
                        >
                            <XMarkIcon className="h-5 w-5 text-gray-400" />
                        </button>

                        <div className="relative z-10">
                            <div className={`w-12 h-12 rounded-2xl ${style.bg} flex items-center justify-center mb-6`}>
                                <Icon className={`h-6 w-6 ${style.color}`} />
                            </div>

                            <h3 className="text-2xl font-serif font-bold text-brand-forest mb-3">
                                {title}
                            </h3>

                            <p className="text-gray-500 mb-8 leading-relaxed">
                                {message}
                            </p>

                            <button
                                onClick={onClose}
                                className="w-full btn-primary bg-brand-forest text-white hover:bg-brand-green py-4 rounded-xl flex items-center justify-center"
                            >
                                Understood
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AlertModal;
