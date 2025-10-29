"use client";

import { useState } from 'react';
import { Instagram, Award, X, Package, Truck } from 'lucide-react';

export default function Footer() {
    const [showReturnsModal, setShowReturnsModal] = useState(false);
    const [showShippingModal, setShowShippingModal] = useState(false);

    const handleAboutClick = () => {
        const element = document.getElementById('about');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleContactClick = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        const whatsappNumber = '919840488579'; // Format: country code + number (no + or spaces)

        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    };

    return (
        <>
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="relative w-28 h-14 md:w-32 md:h-16 lg:w-36 lg:h-18">
                                <img
                                    src="https://www.habloindia.com/hablologo.png"
                                    alt="HABLO Logo"
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            {/*<p className="text-gray-400">*/}
                            {/*    Premium Modular Kitchen Accessories*/}
                            {/*</p>*/}
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">About</h4>
                            <ul className="space-y-2">
                                <li>
                                    <button
                                        onClick={handleAboutClick}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        About Us
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={handleContactClick}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        Contact Us
                                    </button>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Policies</h4>
                            <ul className="space-y-2">
                                <li>
                                    <button
                                        onClick={() => setShowReturnsModal(true)}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        Returns & Replacement Policy
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => setShowShippingModal(true)}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        Shipping & Delivery
                                    </button>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Connect</h4>
                            <div className="flex items-center space-x-4">
                                <a
                                    href="https://www.instagram.com/hablo.india/?igsh=NWZqMW1zdjYweGVz&utm_source=qr#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                                >
                                    <Instagram size={20} />
                                </a>
                            </div>
                            <div className="mt-6 flex items-center space-x-2">
                                <Award size={24} className="text-gray-400" />
                                <span className="text-gray-400">ISO Certified</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Returns & Replacement Modal */}
            {showReturnsModal && (
                <div
                    className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
                    onClick={() => setShowReturnsModal(false)}
                >
                    <div
                        className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-slideUp"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="sticky top-0 bg-gradient-to-r from-[#ff5d24] to-orange-600 px-6 py-5 flex items-center justify-between z-10 rounded-t-3xl">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                    <Package className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-2xl font-bold text-white">Returns & Replacement Policy</span>
                            </div>
                            <button
                                onClick={() => setShowReturnsModal(false)}
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
                                    At <strong className="text-[#ff5d24]">HABLO</strong>, every product comes with a replacement warranty, ensuring complete customer satisfaction.
                                </p>

                                <p className="text-lg md:text-xl">
                                    The warranty period varies depending on the product category.
                                </p>

                                <p className="text-lg md:text-xl">
                                    You can view the specific return and replacement details under each product section.
                                </p>

                                <p className="text-lg md:text-xl">
                                    For further assistance, you may contact your nearest HABLO dealer or consult your interior designer.
                                </p>

                                <p className="text-lg md:text-xl">
                                    <strong className="text-[#ff5d24]">HABLO is committed to providing reliable service and long-lasting quality</strong> for every product we offer.
                                </p>
                            </div>

                            {/* Key Points */}
                            <div className="mt-10 bg-orange-50 border border-orange-200 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-[#ff5d24] mb-4">Key Highlights</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-6 h-6 bg-[#ff5d24] text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                                        <span className="text-gray-700">Replacement warranty on all products</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-6 h-6 bg-[#ff5d24] text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                                        <span className="text-gray-700">Warranty period varies by product category</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-6 h-6 bg-[#ff5d24] text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                                        <span className="text-gray-700">Contact nearest dealer for assistance</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-6 h-6 bg-[#ff5d24] text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                                        <span className="text-gray-700">Complete customer satisfaction guaranteed</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Shipping & Delivery Modal */}
            {showShippingModal && (
                <div
                    className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
                    onClick={() => setShowShippingModal(false)}
                >
                    <div
                        className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-slideUp"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="sticky top-0 bg-gradient-to-r from-[#ff5d24] to-orange-600 px-6 py-5 flex items-center justify-between z-10 rounded-t-3xl">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                    <Truck className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-2xl font-bold text-white">Shipping & Delivery</span>
                            </div>
                            <button
                                onClick={() => setShowShippingModal(false)}
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
                                    At <strong className="text-[#ff5d24]">HABLO</strong>, we ensure a smooth and hassle-free delivery experience for all our customers.
                                </p>

                                <p className="text-lg md:text-xl">
                                    To place an order, simply reach out to your nearest HABLO dealer or consult your interior designer for product availability and assistance.
                                </p>

                                <p className="text-lg md:text-xl">
                                    Once your order is confirmed, the product will be delivered to your doorstep <strong className="text-[#ff5d24]">within 24 hours</strong>, ensuring quick and reliable service.
                                </p>

                                <p className="text-lg md:text-xl">
                                    Our logistics team and dealer network work hand in hand to guarantee timely, safe, and damage-free delivery.
                                </p>

                                <p className="text-lg md:text-xl">
                                    We take pride in offering a seamless experience, from product selection to installation.
                                </p>

                                <p className="text-lg md:text-xl">
                                    With <strong className="text-[#ff5d24]">HABLO</strong>, quality, convenience, and customer satisfaction are always our top priorities.
                                </p>
                            </div>

                            {/* Delivery Process */}
                            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 text-center">
                                    <div className="w-12 h-12 bg-[#ff5d24] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
                                    <h4 className="font-bold text-gray-900 mb-2">Contact Dealer</h4>
                                    <p className="text-sm text-gray-600">Reach out to your nearest HABLO dealer</p>
                                </div>
                                <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 text-center">
                                    <div className="w-12 h-12 bg-[#ff5d24] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
                                    <h4 className="font-bold text-gray-900 mb-2">Order Confirmed</h4>
                                    <p className="text-sm text-gray-600">Your order is processed immediately</p>
                                </div>
                                <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 text-center">
                                    <div className="w-12 h-12 bg-[#ff5d24] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
                                    <h4 className="font-bold text-gray-900 mb-2">24-Hour Delivery</h4>
                                    <p className="text-sm text-gray-600">Fast and safe delivery to your doorstep</p>
                                </div>
                            </div>

                            {/* Guarantee Badge */}
                            <div className="mt-8 bg-gradient-to-r from-[#ff5d24] to-orange-600 rounded-2xl p-6 text-center text-white">
                                <div className="text-3xl font-bold mb-2">⚡ 24-Hour Delivery Guarantee</div>
                                <p className="text-lg text-orange-50">Timely, safe, and damage-free delivery promised</p>
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