import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ name: "Home", to: "/" },
		{ name: "Services", to: "/services" },
		{ name: "Pricing", to: "/pricing" },
		{ name: "About Us", to: "/about" },
		{ name: "Contact", to: "/contact" },
	];

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-brand-forest/90 backdrop-blur-md py-3 shadow-2xl" : "bg-transparent py-6"
				}`}
		>
			<div className="container mx-auto px-6">
				<div className="flex justify-between items-center">
					{/* Logo */}
					<NavLink to="/" className="group flex items-center gap-3">
						<div className="relative">
							<div className="bg-brand-green p-2 rounded-xl shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
								<SparklesIcon className="h-6 w-6 text-white" />
							</div>
							<div className="absolute -inset-1 bg-brand-gold/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
						</div>
						<div className="flex flex-col">
							<span className="text-xl font-serif font-black tracking-tighter text-white leading-none">
								7GREEN
							</span>
							<span className="text-[10px] font-black tracking-[0.3em] text-brand-gold uppercase leading-none mt-1">
								Laundry
							</span>
						</div>
					</NavLink>

					{/* Desktop Menu */}
					<div className="hidden lg:flex items-center space-x-10">
						{navLinks.map((link) => (
							<NavLink
								key={link.to}
								to={link.to}
								className={({ isActive }) =>
									`text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:text-brand-gold ${isActive ? "text-brand-gold" : "text-white/80"
									}`
								}
							>
								{link.name}
							</NavLink>
						))}
						<NavLink
							to="/schedule-pickup"
							className="bg-brand-gold text-brand-forest px-8 py-3 rounded-xl font-black text-sm uppercase tracking-widest shadow-lg hover:bg-white hover:scale-105 transition-all duration-300 active:scale-95"
						>
							Book Now
						</NavLink>
					</div>

					{/* Mobile Menu Button */}
					<div className="lg:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="p-2 text-white hover:text-brand-gold transition-colors"
						>
							{isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.2 }}
						className="lg:hidden absolute top-full left-0 right-0 bg-brand-forest border-t border-white/10 shadow-2xl p-6 space-y-4"
					>
						{navLinks.map((link) => (
							<NavLink
								key={link.to}
								to={link.to}
								onClick={() => setIsOpen(false)}
								className="block text-lg font-serif text-white hover:text-brand-gold py-2"
							>
								{link.name}
							</NavLink>
						))}
						<NavLink
							to="/schedule-pickup"
							onClick={() => setIsOpen(false)}
							className="block bg-brand-gold text-brand-forest text-center py-4 rounded-xl font-black uppercase tracking-widest"
						>
							Schedule a Pickup
						</NavLink>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
