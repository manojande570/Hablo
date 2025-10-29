"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import AboutModal from "@/app/components/About-model";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showAboutModal, setShowAboutModal] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const hash = window.location.hash.slice(1) || "home";
        setActiveSection(hash);

        const handleHashChange = () => {
            const updatedHash = window.location.hash.slice(1) || "home";
            setActiveSection(updatedHash);
        };

        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    const scrollToSection = (id: string) => {
        window.history.pushState(null, "", `#${id}`);
        setActiveSection(id);

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setMobileMenuOpen(false);
        }
    };

    const handleAboutClick = () => {
        window.history.pushState(null, "", "#about");
        setActiveSection("about");
        setShowAboutModal(true);
        setMobileMenuOpen(false);
    };

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 shadow-md bg-[#ff5d24]">
                <div className="container mx-auto pr-4">
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

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            <button
                                onClick={() => scrollToSection("home")}
                                className={`text-white pb-1 transition-all font-medium ${
                                    activeSection === "home"
                                        ? "border-b-2 border-white"
                                        : "hover:border-b-2 hover:border-white"
                                }`}
                            >
                                Home
                            </button>

                            <button
                                onClick={handleAboutClick}
                                className={`text-white pb-1 transition-all font-medium ${
                                    activeSection === "about"
                                        ? "border-b-2 border-white"
                                        : "hover:border-b-2 hover:border-white"
                                }`}
                            >
                                About
                            </button>

                            <button
                                onClick={() => scrollToSection("products")}
                                className={`text-white pb-1 transition-all font-medium ${
                                    activeSection === "products"
                                        ? "border-b-2 border-white"
                                        : "hover:border-b-2 hover:border-white"
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
                                onClick={() => scrollToSection("gallery")}
                                className={`text-white pb-1 transition-all font-medium ${
                                    activeSection === "gallery"
                                        ? "border-b-2 border-white"
                                        : "hover:border-b-2 hover:border-white"
                                }`}
                            >
                                Gallery
                            </button>

                            <button
                                onClick={() => scrollToSection("contact")}
                                className={`text-white pb-1 transition-all font-medium ${
                                    activeSection === "contact"
                                        ? "border-b-2 border-white"
                                        : "hover:border-b-2 hover:border-white"
                                }`}
                            >
                                Contact
                            </button>
                        </nav>

                        {/* Desktop Phone Call */}
                        <div className="hidden md:flex items-center space-x-4">
                            <a
                                href="tel:+919840488579"
                                className="flex items-center space-x-2 text-white hover:border-b-2 hover:border-white pb-1 transition-all font-medium"
                            >
                                <Phone size={18} />
                                <span>Call Now</span>
                            </a>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200">
                        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                            <button
                                onClick={() => scrollToSection("home")}
                                className={`font-medium text-left transition-colors ${
                                    activeSection === "home"
                                        ? "text-amber-600"
                                        : "text-gray-700 hover:text-amber-600"
                                }`}
                            >
                                Home
                            </button>

                            <button
                                onClick={handleAboutClick}
                                className={`font-medium text-left transition-colors ${
                                    activeSection === "about"
                                        ? "text-amber-600"
                                        : "text-gray-700 hover:text-amber-600"
                                }`}
                            >
                                About
                            </button>

                            <button
                                onClick={() => scrollToSection("products")}
                                className={`font-medium text-left transition-colors ${
                                    activeSection === "products"
                                        ? "text-amber-600"
                                        : "text-gray-700 hover:text-amber-600"
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
                                onClick={() => scrollToSection("gallery")}
                                className={`font-medium text-left transition-colors ${
                                    activeSection === "gallery"
                                        ? "text-amber-600"
                                        : "text-gray-700 hover:text-amber-600"
                                }`}
                            >
                                Gallery
                            </button>

                            <button
                                onClick={() => scrollToSection("contact")}
                                className={`font-medium text-left transition-colors ${
                                    activeSection === "contact"
                                        ? "text-amber-600"
                                        : "text-gray-700 hover:text-amber-600"
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

            {/* ✅ About Modal Component */}
            <AboutModal
                isOpen={showAboutModal}
                onClose={() => setShowAboutModal(false)}
            />
        </>
    );
}
