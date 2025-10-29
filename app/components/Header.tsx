"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Info } from 'lucide-react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showAboutModal, setShowAboutModal] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        // Set active section based on current hash
        const hash = window.location.hash.slice(1) || 'home';
        setActiveSection(hash);

        // Handle hash changes
        const handleHashChange = () => {
            const hash = window.location.hash.slice(1) || 'home';
            setActiveSection(hash);
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const scrollToSection = (id: string) => {
        // Update URL hash
        window.history.pushState(null, '', `#${id}`);
        setActiveSection(id);

        // Scroll to section
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    const handleAboutClick =() => {
        window.history.pushState(null, '', `#about`);
        setShowAboutModal(true);
        setMobileMenuOpen(false);
    };

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 shadow-md bg-[#ff5d24]">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="relative w-28 h-14 md:w-32 md:h-16 lg:w-36 lg:h-18">
                                <img
                                    src="https://www.habloindia.com/hablologo.png"
                                    alt="HABLO Logo"
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        </div>

                        <nav className="hidden md:flex items-center space-x-8">
                            <button
                                onClick={() => scrollToSection('home')}
                                className={`text-white pb-1 transition-all font-medium ${
                                    activeSection === 'home'
                                        ? 'border-b-2 border-white'
                                        : 'hover:border-b-2 hover:border-white'
                                }`}
                            >
                                Home
                            </button>
                            <button
                                onClick={()=>handleAboutClick}
                                className="text-white hover:border-b-2 hover:border-white pb-1 transition-all font-medium"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection('products')}
                                className={`text-white pb-1 transition-all font-medium ${
                                    activeSection === 'products'
                                        ? 'border-b-2 border-white'
                                        : 'hover:border-b-2 hover:border-white'
                                }`}
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
                                className={`text-white pb-1 transition-all font-medium ${
                                    activeSection === 'gallery'
                                        ? 'border-b-2 border-white'
                                        : 'hover:border-b-2 hover:border-white'
                                }`}
                            >
                                Gallery
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className={`text-white pb-1 transition-all font-medium ${
                                    activeSection === 'contact'
                                        ? 'border-b-2 border-white'
                                        : 'hover:border-b-2 hover:border-white'
                                }`}
                            >
                                Contact
                            </button>
                        </nav>

                        <div className="hidden md:flex items-center space-x-4">
                            <a
                                href="tel:+919840488579"
                                className="flex items-center space-x-2 text-white hover:border-b-2 hover:border-white pb-1 transition-all font-medium"
                            >
                                <Phone size={18} />
                                <span>Call Now</span>
                            </a>
                        </div>

                        <button
                            className="md:hidden text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200">
                        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                            <button
                                onClick={() => scrollToSection('home')}
                                className={`font-medium text-left transition-colors ${
                                    activeSection === 'home'
                                        ? 'text-amber-600'
                                        : 'text-gray-700 hover:text-amber-600'
                                }`}
                            >
                                Home
                            </button>
                            <button
                                onClick={handleAboutClick}
                                className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-left"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection('products')}
                                className={`font-medium text-left transition-colors ${
                                    activeSection === 'products'
                                        ? 'text-amber-600'
                                        : 'text-gray-700 hover:text-amber-600'
                                }`}
                            >
                                Products
                            </button>
                            <a
                                href="https://www.habloindia.com/viewer.html?file=HABLO_JULY2025_CATALOGUE.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-left"
                            >
                                Catalogue
                            </a>
                            <button
                                onClick={() => scrollToSection('gallery')}
                                className={`font-medium text-left transition-colors ${
                                    activeSection === 'gallery'
                                        ? 'text-amber-600'
                                        : 'text-gray-700 hover:text-amber-600'
                                }`}
                            >
                                Gallery
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className={`font-medium text-left transition-colors ${
                                    activeSection === 'contact'
                                        ? 'text-amber-600'
                                        : 'text-gray-700 hover:text-amber-600'
                                }`}
                            >
                                Contact
                            </button>
                            <a
                                href="tel:+919840488579"
                                className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 transition-colors font-medium"
                            >
                                <Phone size={18} />
                                <span>Call Now</span>
                            </a>
                        </nav>
                    </div>
                )}
            </header>

            {/* About Us Modal */}
            {showAboutModal && (
                <div
                    className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
                    onClick={() => setShowAboutModal(false)}
                >
                    <div
                        className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-slideUp"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="sticky top-0 bg-gradient-to-r from-[#ff5d24] to-orange-600 px-6 py-5 flex items-center justify-between z-10 rounded-t-3xl">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                    <Info className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-2xl font-bold text-white">About HABLO</span>
                            </div>
                            <button
                                onClick={() => setShowAboutModal(false)}
                                className="rounded-full p-2 hover:bg-white/20 transition-colors"
                                aria-label="Close modal"
                            >
                                <X className="w-6 h-6 text-white" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-10">
                            <div className="space-y-6 text-gray-700 leading-relaxed">
                                <p className="text-lg md:text-xl">
                                    Founded in <strong className="text-[#ff5d24]">2014</strong>, HABLO was born from the vision of a passionate young entrepreneur who aspired to bring structure, innovation, and professionalism to the largely unorganised architectural hardware sector. What began as a modest start-up with just three dealers has today evolved into one of <strong className="text-[#ff5d24]">South India's most trusted and fast-growing</strong> architectural hardware brands.
                                </p>

                                <p className="text-lg md:text-xl">
                                    With an unwavering commitment to quality, design, and reliability, HABLO has built a strong dealer network of <strong className="text-[#ff5d24]">150+ partners</strong>, delivering premium hardware solutions across <strong className="text-[#ff5d24]">Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, and Telangana</strong>. Our products are crafted to blend functionality with elegance, redefining modern living and design standards.
                                </p>

                                <p className="text-lg md:text-xl">
                                    HABLO stands as a testament to vision-driven growth, customer trust, and continuous innovation. With a forward-looking approach and a dedication to excellence, HABLO continues to expand its presence, setting new benchmarks in the hardware industry and aiming to reach greater heights in the years ahead.
                                </p>
                            </div>

                            {/* Statistics */}
                            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="text-center p-4 bg-orange-50 rounded-xl border border-orange-200">
                                    <div className="text-3xl font-bold text-[#ff5d24] mb-1">2014</div>
                                    <div className="text-sm text-gray-600">Founded</div>
                                </div>
                                <div className="text-center p-4 bg-orange-50 rounded-xl border border-orange-200">
                                    <div className="text-3xl font-bold text-[#ff5d24] mb-1">150+</div>
                                    <div className="text-sm text-gray-600">Dealers</div>
                                </div>
                                <div className="text-center p-4 bg-orange-50 rounded-xl border border-orange-200">
                                    <div className="text-3xl font-bold text-[#ff5d24] mb-1">5</div>
                                    <div className="text-sm text-gray-600">States</div>
                                </div>
                                <div className="text-center p-4 bg-orange-50 rounded-xl border border-orange-200">
                                    <div className="text-3xl font-bold text-[#ff5d24] mb-1">#1</div>
                                    <div className="text-sm text-gray-600">South India</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out;
                }

                .animate-slideUp {
                    animation: slideUp 0.3s ease-out;
                }
            `}</style>
        </>
    );
}