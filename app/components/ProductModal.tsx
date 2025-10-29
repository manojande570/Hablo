"use client";


import { X, Info } from 'lucide-react';

interface Product {
    id: number;
    name: string;
    image: string;
    description: string;
    details: string[];
}

interface ProductModalProps {
    product: Product;
    onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
    return (
        <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-0 md:p-4 animate-fadeIn"
            onClick={onClose}
        >
            <div
                className="bg-white md:rounded-3xl shadow-2xl w-screen h-screen max-w-none max-h-none md:max-w-4xl md:h-auto md:max-h-[90vh] overflow-y-auto animate-slideUp"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-slate-200 px-4 md:px-6 py-4 flex items-center justify-between z-10 rounded-t-3xl">
                    <div className="flex items-center gap-2">
                        <Info className="w-5 h-5 text-blue-600" />
                        <span className="text-lg font-semibold text-slate-900">Product Details</span>
                    </div>

                    <button
                        onClick={onClose}
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
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="flex flex-col">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                            {product.name}
                        </h2>

                        <p className="text-base md:text-lg text-slate-600 mb-6 leading-relaxed">
                            {product.description}
                        </p>

                        {/* Details List */}
                        <div className="mb-6">
                            {/*<h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">*/}
                            {/*    <span className="w-1 h-6 bg-blue-600 rounded-full"></span>*/}
                            {/*    Key Features & Specifications*/}
                            {/*</h3>*/}
                            <ul className="space-y-3">
                                {product.details.map((detail, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-3 text-slate-700 bg-slate-50 p-3 rounded-lg hover:bg-slate-100 transition-colors"
                                    >
                    {/*<span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">*/}
                    {/*  {idx + 1}*/}
                    {/*</span>*/}
                                        <span className="text-sm md:text-base">{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Additional Info */}
                        {/*<div className="mt-auto pt-6 border-t border-slate-200">*/}
                        {/*    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">*/}
                        {/*        <div className="bg-green-50 p-4 rounded-xl border border-green-200">*/}
                        {/*            <span className="text-green-700 font-semibold block mb-1">Free Shipping</span>*/}
                        {/*            <p className="text-green-600">On all orders</p>*/}
                        {/*        </div>*/}
                        {/*        <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">*/}
                        {/*            <span className="text-blue-700 font-semibold block mb-1">Warranty</span>*/}
                        {/*            <p className="text-blue-600">1 year guarantee</p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>

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
        </div>
    );
}
