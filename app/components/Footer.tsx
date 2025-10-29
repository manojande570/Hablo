"use client";

import { Instagram, Award } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">HABLO</h3>
                        <p className="text-gray-400">
                            Premium Modular Kitchen Accessories
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">About</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Policies</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Returns & Replacement Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Shipping & Delivery
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Connect</h4>
                        <div className="flex items-center space-x-4">
                            <a
                                href="#"
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

                <div className="border-t border-gray-800 pt-8 text-center">
                    <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors mb-4">
                        DOWNLOAD CATALOGUE
                    </button>
                    <p className="text-gray-400 text-sm">
                        © 2024 HABLO. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}