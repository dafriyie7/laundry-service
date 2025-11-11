import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="absolute top-0 left-0 right-0 z-50 py-4">
			{" "}
			{/* Positioned absolutely, transparent background */}
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center">
					{" "}
					{/* Logo */}
					<div className="shrink-0">
						<NavLink
							to="/"
							className="text-2xl font-bold text-white hover:text-gray-200 transition-colors duration-300 flex items-center border-2 border-white rounded-md"
						>
							<span className="bg-green-600 text-white px-2 rounded-md mr-2">
								7GREEN
							</span>
							<span className="tracking-wider pr-2">LAUNDRY</span>
						</NavLink>
					</div>
					{/* Desktop Menu */}
					<div className="hidden md:flex items-center space-x-8">
						<NavLink
							to="/"
							className="text-white hover:text-green-200 transition duration-300" // Changed to white for blending
						>
							Home
						</NavLink>
						<NavLink
							to="/services"
							className="text-white hover:text-green-200 transition duration-300" // Changed to white for blending
						>
							Services
						</NavLink>
						<NavLink
							to="/about"
							className="text-white hover:text-green-200 transition duration-300" // Changed to white for blending
						>
							About Us
						</NavLink>
						<NavLink
							to="/contact"
							className="text-white hover:text-green-200 transition duration-300" // Changed to white for blending
						>
							Contact
						</NavLink>
						<NavLink
							to="/schedule-pickup"
							className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition duration-300 font-semibold"
						>
							Schedule a Pickup
						</NavLink>
					</div>
					{/* Mobile Menu Button */}
					<div className="md:hidden flex items-center">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-green-200 hover:bg-gray-700" // Changed text to white, hover background for better contrast
						>
							<span className="sr-only">Open main menu</span>
							{isOpen ? (
								<XMarkIcon
									className="block h-6 w-6"
									aria-hidden="true"
								/>
							) : (
								<Bars3Icon
									className="block h-6 w-6"
									aria-hidden="true"
								/>
							)}
						</button>
					</div>
				</div>
			</div>
			{/* Mobile Menu */}
			<div
				className={`${
					isOpen ? "block" : "hidden"
				} md:hidden bg-black bg-opacity-75`}
			>
				{" "}
				{/* Added dark, semi-transparent background for mobile menu */}
				<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
					<NavLink
						to="/"
						className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-green-200 hover:bg-gray-700" // Changed text to white
					>
						Home
					</NavLink>
					<NavLink
						to="/services"
						className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-green-200 hover:bg-gray-700" // Changed text to white
					>
						Services
					</NavLink>
					<NavLink
						to="/about"
						className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-green-200 hover:bg-gray-700" // Changed text to white
					>
						About Us
					</NavLink>
					<NavLink
						to="/contact"
						className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-green-200 hover:bg-gray-700" // Changed text to white
					>
						Contact
					</NavLink>
					<NavLink
						to="/schedule-pickup"
						className="block mt-2 mx-3 text-center bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition duration-300 font-semibold"
					>
						Schedule a Pickup
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
