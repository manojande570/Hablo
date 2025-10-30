"use client";

import React, { useEffect } from "react";
import {Info, X} from "lucide-react";

interface AboutModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center md:p-4 animate-fadeIn"
            onClick={() => onClose()}
        >
            <div
                className="bg-white w-full h-full md:rounded-3xl md:max-w-3xl md:max-h-[90vh] overflow-y-auto animate-slideUp shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="sticky top-0 bg-gradient-to-r from-[#ff5d24] to-orange-600 px-6 py-3 flex items-center justify-between z-10 lg:rounded-t-3xl">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <Info className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-white">About HABLO</span>
                    </div>
                    <button
                        onClick={() => onClose()}
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
    );
}

