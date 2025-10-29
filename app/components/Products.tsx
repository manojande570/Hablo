"use client";

import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X, Info } from 'lucide-react';

interface SubProduct {
    id: number;
    name: string;
    image: string;
    description: string;
    details: string[];
}

interface MainProduct {
    id: number;
    name: string;
    image: string;
    description: string;
    subProducts: SubProduct[];
}

const mainProducts: MainProduct[] = [
    {
        id: 1,
        name: 'Kitchen Cabinets',
        image: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Premium modular kitchen cabinets with modern design',
        subProducts: [
            {
                id: 101,
                name: 'Base Cabinet - Standard',
                image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'Standard base cabinet with soft-close doors and adjustable shelves',
                details: [
                    'Width: 600mm, Height: 720mm, Depth: 560mm',
                    'Marine plywood construction with waterproof coating',
                    'Soft-close hinges included',
                    'Adjustable internal shelves',
                    'Available in 20+ laminate finishes',
                    'Load capacity: 50kg'
                ]
            },
            {
                id: 102,
                name: 'Wall Cabinet - Glass Front',
                image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'Elegant wall cabinet with tempered glass doors',
                details: [
                    'Width: 600mm, Height: 720mm, Depth: 320mm',
                    '5mm tempered glass with aluminum frame',
                    'Internal LED lighting compatible',
                    'Soft-close mechanism',
                    'Perfect for display and storage',
                    'Easy wall mounting system'
                ]
            },
            {
                id: 103,
                name: 'Tall Unit Cabinet',
                image: 'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'Full-height storage cabinet for maximum organization',
                details: [
                    'Width: 600mm, Height: 2100mm, Depth: 560mm',
                    '5 adjustable shelves included',
                    'Pull-out wire baskets available',
                    'Ideal for pantry storage',
                    'Heavy-duty construction',
                    'Soft-close door system'
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'Drawer Systems',
        image: 'https://images.pexels.com/photos/6492398/pexels-photo-6492398.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Premium drawer channels and accessories',
        subProducts: [
            {
                id: 201,
                name: 'Tandem Box - Regular Height',
                image: 'https://images.pexels.com/photos/6585607/pexels-photo-6585607.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'High-quality drawer system with soft-close',
                details: [
                    'Height: 68mm (M height)',
                    'Available lengths: 270mm to 650mm',
                    'Load capacity: 30kg',
                    'Full extension for complete access',
                    'Soft-close damping system',
                    'Easy tool-free installation'
                ]
            },
            {
                id: 202,
                name: 'Deep Drawer System',
                image: 'https://images.pexels.com/photos/6969866/pexels-photo-6969866.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'Extra-deep drawer for pots and pans',
                details: [
                    'Height: 194mm (K height)',
                    'Ideal for large cookware storage',
                    'Load capacity: 40kg',
                    'Silent soft-close mechanism',
                    'Ball-bearing runners',
                    'Scratch-resistant finish'
                ]
            },
            {
                id: 203,
                name: 'Cutlery Organizer Drawer',
                image: 'https://images.pexels.com/photos/6436799/pexels-photo-6436799.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'Organized drawer with cutlery dividers',
                details: [
                    'Built-in divider system',
                    'Non-slip base material',
                    'Easy to clean surface',
                    'Fits standard drawer widths',
                    'Premium quality organizers',
                    'Removable compartments'
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'Kitchen Handles',
        image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Modern and elegant cabinet handles',
        subProducts: [
            {
                id: 301,
                name: 'Aluminum Profile Handle',
                image: 'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'Sleek aluminum handle for contemporary kitchens',
                details: [
                    'Available sizes: 128mm, 192mm, 256mm, 320mm',
                    'Anodized aluminum finish',
                    'Matt black, silver, gold options',
                    'Concealed mounting screws',
                    'Ergonomic grip design',
                    'Corrosion resistant'
                ]
            },
            {
                id: 302,
                name: 'Recessed Handle',
                image: 'https://images.pexels.com/photos/6585760/pexels-photo-6585760.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'Minimalist flush-mounted handle',
                details: [
                    'Length: 128mm to 256mm',
                    'Flush design for modern look',
                    'Easy finger-pull opening',
                    'Available in multiple finishes',
                    'Space-saving design',
                    'Simple installation'
                ]
            },
            {
                id: 303,
                name: 'Brass Knob Handle',
                image: 'https://images.pexels.com/photos/6969878/pexels-photo-6969878.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'Classic brass knob for traditional kitchens',
                details: [
                    'Solid brass construction',
                    'Diameter: 25mm, 32mm, 38mm',
                    'Polished or antique finish',
                    'Perfect for classic designs',
                    'Easy installation',
                    'Long-lasting durability'
                ]
            }
        ]
    },
    {
        id: 4,
        name: 'Kitchen Sinks',
        image: 'https://images.pexels.com/photos/6527036/pexels-photo-6527036.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Premium stainless steel kitchen sinks',
        subProducts: [
            {
                id: 401,
                name: 'Single Bowl Sink',
                image: 'https://images.pexels.com/photos/6969895/pexels-photo-6969895.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'Large single bowl stainless steel sink',
                details: [
                    'Size: 760mm x 510mm',
                    'SS 304 grade stainless steel',
                    'Sound-dampening pads included',
                    'Brushed finish for easy maintenance',
                    'Large capacity bowl',
                    'Complete mounting kit'
                ]
            },
            {
                id: 402,
                name: 'Double Bowl Sink',
                image: 'https://images.pexels.com/photos/6436801/pexels-photo-6436801.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'Dual bowl sink for multitasking',
                details: [
                    'Size: 860mm x 510mm',
                    'Equal-sized double bowls',
                    'Premium SS 304 construction',
                    'Includes drainer basket',
                    'Anti-bacterial coating option',
                    'Easy undermount installation'
                ]
            },
            {
                id: 403,
                name: 'Farmhouse Sink',
                image: 'https://images.pexels.com/photos/6585754/pexels-photo-6585754.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'Classic apron-front farmhouse sink',
                details: [
                    'Size: 900mm x 560mm',
                    'Deep basin design',
                    'Front-facing apron style',
                    'Hand-brushed finish',
                    'Extra-thick gauge steel',
                    'Perfect for traditional kitchens'
                ]
            }
        ]
    },
    {
        id: 5,
        name: 'Kitchen Faucets',
        image: 'https://images.pexels.com/photos/6969851/pexels-photo-6969851.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Modern kitchen faucets and taps',
        subProducts: [
            {
                id: 501,
                name: 'Pull-Out Kitchen Faucet',
                image: 'https://images.pexels.com/photos/6585756/pexels-photo-6585756.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'Flexible pull-out spray faucet',
                details: [
                    'Pull-out spray with 1.5m hose',
                    'Dual spray modes: stream and spray',
                    'Chrome-plated brass construction',
                    'Ceramic disc cartridge',
                    '360-degree swivel spout',
                    'Easy installation kit'
                ]
            },
            {
                id: 502,
                name: 'Wall-Mounted Faucet',
                image: 'https://images.pexels.com/photos/6585606/pexels-photo-6585606.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'Space-saving wall-mount tap',
                details: [
                    'Wall-mounted design saves counter space',
                    'Adjustable spout length',
                    'Hot and cold water mixing',
                    'Premium chrome finish',
                    'Easy-clean aerator',
                    'Includes mounting hardware'
                ]
            },
            {
                id: 503,
                name: 'Sensor Kitchen Faucet',
                image: 'https://images.pexels.com/photos/6969850/pexels-photo-6969850.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'Touchless automatic sensor faucet',
                details: [
                    'Infrared motion sensor activation',
                    'Battery or AC powered options',
                    'Adjustable sensor range',
                    'Water-saving technology',
                    'Manual override option',
                    'Hygienic touchless operation'
                ]
            }
        ]
    },
    {
        id: 6,
        name: 'Cabinet Hinges',
        image: 'https://images.pexels.com/photos/7195122/pexels-photo-7195122.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Premium cabinet hinges and hardware',
        subProducts: [
            {
                id: 601,
                name: 'Soft-Close Hinge',
                image: 'https://images.pexels.com/photos/6969893/pexels-photo-6969893.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'Hydraulic soft-close cabinet hinge',
                details: [
                    'Hydraulic damping system',
                    '165-degree opening angle',
                    '3D adjustable mounting',
                    'Nickel-plated finish',
                    'Tested for 200,000 cycles',
                    'Suitable for overlay doors'
                ]
            },
            {
                id: 602,
                name: 'Glass Door Hinge',
                image: 'https://images.pexels.com/photos/6585605/pexels-photo-6585605.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'Specialized hinge for glass doors',
                details: [
                    'Designed for glass thickness: 4-8mm',
                    'Stainless steel construction',
                    'Soft-close mechanism included',
                    '110-degree opening angle',
                    'No drilling required on glass',
                    'Modern minimalist design'
                ]
            },
            {
                id: 603,
                name: 'Lift-Up Hinge',
                image: 'https://images.pexels.com/photos/6585603/pexels-photo-6585603.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: 'Gas strut hinge for overhead cabinets',
                details: [
                    'Gas spring assisted opening',
                    'Holds door in any position',
                    'Suitable for heavy doors',
                    'Soft-close and soft-open',
                    'Easy height adjustment',
                    'Load capacity: 5-20kg'
                ]
            }
        ]
    }
];

export default function ProductsSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [selectedSubProduct, setSelectedSubProduct] = useState<SubProduct | null>(null);
    const [expandedProduct, setExpandedProduct] = useState<number | null>(null);

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
        <div id="products" className="scroll-mt-24">
            <div className="py-8 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-slate-50 via-white to-slate-50 min-h-screen">
                {/* Header Section */}
                <div className="max-w-7xl mx-auto mb-8 md:mb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-3 md:mb-4">
                        Our Products
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl">
                        Explore our comprehensive range of premium kitchen accessories and hardware
                    </p>
                </div>

                {/* Scrollable Products Container */}
                <div className="relative max-w-7xl mx-auto">
                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll('left')}
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all hover:scale-110 border border-slate-200"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-6 h-6 text-slate-700" />
                    </button>

                    {/* Right Arrow */}
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
                        {mainProducts.map((product) => (
                            <div
                                key={product.id}
                                className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[400px] lg:w-[450px] snap-center"
                            >
                                {/* Main Product Card */}
                                <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100">
                                    {/* Main Product Image */}
                                    <div className="relative h-[240px] md:h-[280px] overflow-hidden bg-slate-100">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                                {product.name}
                                            </h3>
                                            <p className="text-slate-200 text-sm">
                                                {product.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Sub Products Section */}
                                    <div className="p-5 md:p-6">
                                        <h4 className="text-lg font-semibold text-slate-900 mb-4">
                                            Available Products ({product.subProducts.length})
                                        </h4>

                                        <div className="space-y-3">
                                            {product.subProducts.map((subProduct) => (
                                                <button
                                                    key={subProduct.id}
                                                    onClick={() => setSelectedSubProduct(subProduct)}
                                                    className="w-full flex items-center gap-4 p-3 bg-slate-50 hover:bg-blue-50 rounded-lg transition-all border border-slate-200 hover:border-blue-300 group"
                                                >
                                                    <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-slate-200">
                                                        <img
                                                            src={subProduct.image}
                                                            alt={subProduct.name}
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                                        />
                                                    </div>
                                                    <div className="flex-1 text-left">
                                                        <h5 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                                                            {subProduct.name}
                                                        </h5>
                                                        <p className="text-xs text-slate-600 line-clamp-1">
                                                            {subProduct.description}
                                                        </p>
                                                    </div>
                                                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile scroll hint */}
                    <div className="md:hidden text-center mt-6">
                        <p className="text-sm text-slate-500">
                            ← Swipe to see more categories →
                        </p>
                    </div>
                </div>
            </div>

            {/* Sub Product Modal */}
            {selectedSubProduct && (
                <div
                    className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
                    onClick={() => setSelectedSubProduct(null)}
                >
                    <div
                        className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slideUp"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="sticky top-0 bg-white border-b border-slate-200 px-4 md:px-6 py-4 flex items-center justify-between z-10 rounded-t-3xl">
                            <div className="flex items-center gap-2">
                                <Info className="w-5 h-5 text-blue-600" />
                                <span className="text-lg font-semibold text-slate-900">Product Details</span>
                            </div>
                            <button
                                onClick={() => setSelectedSubProduct(null)}
                                className="rounded-full p-2 hover:bg-slate-100 transition-colors"
                                aria-label="Close modal"
                            >
                                <X className="w-6 h-6 text-slate-600" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="grid md:grid-cols-2 gap-6 md:gap-8 p-4 md:p-8">
                            {/* Image Section */}
                            <div className="relative">
                                <div className="rounded-2xl overflow-hidden bg-slate-100 aspect-square shadow-lg">
                                    <img
                                        src={selectedSubProduct.image}
                                        alt={selectedSubProduct.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Details Section */}
                            <div className="flex flex-col">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                                    {selectedSubProduct.name}
                                </h2>

                                <p className="text-base md:text-lg text-slate-600 mb-6 leading-relaxed">
                                    {selectedSubProduct.description}
                                </p>

                                {/* Details List */}
                                <div className="mb-6">
                                    <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                                        <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                                        Key Features & Specifications
                                    </h3>
                                    <ul className="space-y-3">
                                        {selectedSubProduct.details.map((detail, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-3 text-slate-700 bg-slate-50 p-3 rounded-lg hover:bg-slate-100 transition-colors"
                                            >
                                                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                                                    {idx + 1}
                                                </span>
                                                <span className="text-sm md:text-base">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Additional Info */}
                                <div className="mt-auto pt-6 border-t border-slate-200">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                        <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                                            <span className="text-green-700 font-semibold block mb-1">Free Shipping</span>
                                            <p className="text-green-600">On all orders</p>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                                            <span className="text-blue-700 font-semibold block mb-1">Warranty</span>
                                            <p className="text-blue-600">1 year guarantee</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                
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
        </div>
    );
}