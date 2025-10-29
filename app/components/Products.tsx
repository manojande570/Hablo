"use client";

import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductModal from '../components/ProductModal';

interface Product {
    id: number;
    name: string;
    image: string;
    description: string;
    details: string[];
}

const products: Product[] = [
    {
        id: 1,
        name: '',
        image: 'https://www.habloindia.com/images/products/DRAWER%20CHANNEL.jpg',
        description: 'Premium modular kitchen cabinets with modern design and superior storage',
        details: [
            'High-quality plywood construction with waterproof coating',
            'Soft-close hinges for smooth and quiet operation',
            'Customizable layouts to fit any kitchen space',
            'Scratch-resistant laminate finish in multiple colors',
            'Easy installation with pre-drilled holes',
            'Adjustable shelves for flexible storage options'
        ]
    },
    {
        id: 2,
        name: 'Drawer Channel System',
        image: 'https://images.pexels.com/photos/6492398/pexels-photo-6492398.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Heavy-duty telescopic drawer channels for smooth gliding action',
        details: [
            'Full extension design for complete drawer access',
            'Soft-close mechanism prevents slamming',
            'Load capacity up to 40kg per pair',
            'Corrosion-resistant steel construction',
            'Ball-bearing technology for smooth operation',
            'Easy mounting with included hardware'
        ]
    },
    {
        id: 3,
        name: 'Cupboard Hinges',
        image: 'https://images.pexels.com/photos/7195122/pexels-photo-7195122.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Premium hydraulic hinges with soft-close technology',
        details: [
            'Hydraulic soft-close mechanism for silent operation',
            'Adjustable in 3 dimensions for perfect door alignment',
            'Nickel-plated finish for durability',
            '165-degree opening angle for full access',
            'Suitable for overlay and inset doors',
            'Tested for 200,000+ opening cycles'
        ]
    },
    {
        id: 4,
        name: 'Kitchen Countertops',
        image: 'https://images.pexels.com/photos/2098086/pexels-photo-2098086.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Elegant and durable countertops for modern kitchens',
        details: [
            'Heat-resistant surface up to 200°C',
            'Stain-resistant and easy to clean',
            'Scratch-resistant premium finish',
            'Available in marble, granite, and quartz finishes',
            'Seamless joints for a clean appearance',
            'Custom edge profiles available'
        ]
    },
    {
        id: 5,
        name: 'Glass Door Fittings',
        image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Modern glass door hardware for contemporary kitchen designs',
        details: [
            'Tempered glass compatibility up to 12mm thickness',
            'Stainless steel construction with polished finish',
            'Soft-close mechanism included',
            'Adjustable mounting brackets',
            '180-degree opening angle',
            'Minimal frame design for modern aesthetics'
        ]
    },
    {
        id: 6,
        name: 'Aluminum Profile Handles',
        image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Sleek aluminum handles for cabinet doors and drawers',
        details: [
            'Anodized aluminum finish in multiple colors',
            'Ergonomic design for comfortable grip',
            'Available in various lengths: 128mm to 512mm',
            'Concealed mounting for seamless look',
            'Corrosion-resistant and easy to maintain',
            'Modern minimalist design'
        ]
    },
    {
        id: 7,
        name: 'Kitchen Sink & Faucet',
        image: 'https://images.pexels.com/photos/6527036/pexels-photo-6527036.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Stainless steel sink with premium pull-out faucet',
        details: [
            'Stainless steel 304 grade construction',
            'Sound-dampening pads reduce noise',
            'Pull-out spray faucet with dual-function head',
            'Ceramic disc cartridge for drip-free performance',
            'Easy-to-clean brushed finish',
            'Complete installation kit included'
        ]
    },
    {
        id: 8,
        name: 'Door Closer System',
        image: 'https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Automatic door closer with adjustable closing speed',
        details: [
            'Hydraulic mechanism for controlled closing',
            'Adjustable closing speed and force',
            'Suitable for doors up to 85kg',
            'Heavy-duty aluminum body',
            'Fire door certified (optional)',
            'Easy installation on all door types'
        ]
    }
];

export default function ProductsSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            const newScrollPosition =
                direction === 'left'
                    ? scrollContainerRef.current.scrollLeft - scrollAmount
                    : scrollContainerRef.current.scrollLeft + scrollAmount;

            scrollContainerRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div id={'products'} className={'scroll-mt-24'}>
            <div className="py-8 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-slate-50 via-white to-slate-50 min-h-screen">
                {/* Header Section */}
                <div className="max-w-7xl mx-auto mb-8 md:mb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-3 md:mb-4">
                        Products
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl">
                        Discover our premium collection of carefully selected products designed for excellence
                    </p>
                </div>

                {/* Scrollable Products Container */}
                <div className="relative max-w-7xl mx-auto">
                    {/* Left Arrow - Desktop Only */}
                    <button
                        onClick={() => scroll('left')}
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all hover:scale-110 border border-slate-200"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-6 h-6 text-slate-700" />
                    </button>

                    {/* Right Arrow - Desktop Only */}
                    <button
                        onClick={() => scroll('right')}
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all hover:scale-110 border border-slate-200"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-6 h-6 text-slate-700" />
                    </button>

                    {/* Products Scroll Container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide snap-x snap-mandatory"
                    >
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[340px] lg:w-[380px] group snap-center"
                            >
                                {/* Product Card */}
                                <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 h-full">
                                    {/* Image */}
                                    <div className="relative h-[240px] md:h-[280px] overflow-hidden bg-slate-100">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 md:p-6">
                                        {/* Header */}
                                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[3.5rem]">
                                            {product.name}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm md:text-base text-slate-600 mb-5 line-clamp-2 min-h-[2.5rem]">
                                            {product.description}
                                        </p>

                                        {/* Click Here Button */}
                                        <button
                                            onClick={() => setSelectedProduct(product)}
                                            className="w-full bg-slate-900 hover:bg-blue-600 text-white font-semibold py-3 md:py-3.5 px-6 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 active:scale-95"
                                        >
                                            Click Here
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile scroll hint */}
                    <div className="md:hidden text-center mt-6">
                        <p className="text-sm text-slate-500">
                            ← Swipe to see more products →
                        </p>
                    </div>
                </div>
            </div>
            {/* Product Modal */}
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}

            <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </div>
    );
}
