"use client";

import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50  shadow-md bg-[#ff5d24]">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between ">
                    <div className="flex items-center space-x-2">
                        <div className="relative w-28 h-14 md:w-32 md:h-16 lg:w-36 lg:h-18">
                        <Image
                                src="https://www.habloindia.com/hablologo.png"
                                alt="HABLO Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => scrollToSection('home')}
                            className="text-white hover:border-b-2 hover:border-white pb-1 transition-all font-medium"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-white hover:border-b-2 hover:border-white pb-1 transition-all font-medium"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection('products')}
                            className="text-white hover:border-b-2 hover:border-white pb-1 transition-all font-medium"
                        >
                            Products
                        </button>
                        <a
                            href="https://www.habloindia.com/viewer.html?file=HABLO_JULY2025_CATALOGUE.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:border-b-2 hover:border-white pb-1 transition-all font-medium"
                        >
                            Catalogue
                        </a>

                        <button
                            onClick={() => scrollToSection('gallery')}
                            className="text-white hover:border-b-2 hover:border-white pb-1 transition-all font-medium"
                        >
                            Gallery
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="text-white hover:border-b-2 hover:border-white pb-1 transition-all font-medium"
                        >
                            Contact
                        </button>
                    </nav>


                    <div className="hidden md:flex items-center space-x-4">
                        <a href="tel:+91 98404 88579"
                            className="flex items-center space-x-2 text-white hover:border-b-2 hover:border-white pb-1 transition-all font-medium">
                            <Phone size={18} />
                            <span>Call Now</span>
                        </a>
                    </div>

                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                        <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-left">
                            Home
                        </button>
                        <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-left">
                            About
                        </button>
                        <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-left">
                            Products
                        </button>
                        <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-left">
                            Gallery
                        </button>
                        <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-left">
                            Contact
                        </button>
                        <a href="tel:+911234567890" className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 transition-colors font-medium">
                            <Phone size={18} />
                            <span>Call Now</span>
                        </a>

                    </nav>
                </div>
            )}
        </header>
    );
}
