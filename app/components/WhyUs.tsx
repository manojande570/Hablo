"use client";

import { Award, Shield, Sparkles, Users, Clock, TrendingUp } from 'lucide-react';

const features = [
    {
        icon: Award,
        title: 'Premium Quality',
        description: 'German engineering standards with superior materials and finish'
    },
    {
        icon: Shield,
        title: 'Durability Guaranteed',
        description: 'Built to last with comprehensive warranty on all products'
    },
    {
        icon: Sparkles,
        title: 'Innovative Design',
        description: 'Contemporary aesthetics meeting functional excellence'
    },
    {
        icon: Users,
        title: 'Expert Support',
        description: 'Professional guidance from design to installation'
    },
    {
        icon: Clock,
        title: 'Timely Delivery',
        description: 'Quick turnaround time with reliable service'
    },
    {
        icon: TrendingUp,
        title: 'Best Value',
        description: 'Premium products at competitive pricing'
    }
];

export default function WhyUs() {
    return (
        <section id="about" className="scroll-mt-24 py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
                        Why Choose HABLO?
                    </h2>
                    <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Experience the perfect combination of innovation, quality, and design excellence
                        that sets us apart in the modular kitchen industry
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 border border-gray-100"
                            >
                                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-amber-500 to-[#ff5d24] rounded-lg flex items-center justify-center mb-5 md:mb-6">
                                    <Icon className="text-white" size={28} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-10 md:mt-16 bg-gradient-to-r from-amber-500 to-[#ff5d24] rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
                    <h3 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
                        Trusted by 10,000+ Happy Customers
                    </h3>
                    <p className="text-base md:text-xl mb-6 md:mb-8 text-amber-50">
                        Join thousands of satisfied homeowners who have transformed their kitchens with HABLO
                    </p>
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-white text-amber-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
                    >
                        Start Your Journey
                    </button>
                </div>
            </div>
        </section>
    );
}
