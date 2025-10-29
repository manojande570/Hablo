"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        image: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1920",
        alt: "Modern modular kitchen with premium accessories",
    },
    {
        image: "https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=1920",
        alt: "Elegant kitchen storage solutions",
    },
    {
        image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1920",
        alt: "Contemporary kitchen design with smart accessories",
    },
    {
        image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920",
        alt: "Luxury modular kitchen setup",
    },
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const touchStartX = useRef(0);
    const touchDifference = useRef(0);
    const isDragging = useRef(false);

    // Auto slide
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentSlide]);

    const nextSlide = () =>
        setCurrentSlide((prev) => (prev + 1) % slides.length);

    const prevSlide = () =>
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    // ✅ Touch + Drag Support
    const startSwipe = (clientX: number) => {
        isDragging.current = true;
        touchStartX.current = clientX;
    };

    const moveSwipe = (clientX: number) => {
        if (!isDragging.current) return;
        touchDifference.current = clientX - touchStartX.current;
    };

    const endSwipe = () => {
        if (!isDragging.current) return;
        isDragging.current = false;

        const threshold = 50;
        if (touchDifference.current > threshold) {
            prevSlide();
        } else if (touchDifference.current < -threshold) {
            nextSlide();
        }
        touchDifference.current = 0;
    };

    return (
        <section
            id="home"
            className="relative h-screen pt-20 overflow-hidden"
            onMouseDown={(e) => startSwipe(e.clientX)} // Desktop drag
            onMouseMove={(e) => moveSwipe(e.clientX)}
            onMouseUp={endSwipe}
            onTouchStart={(e) => startSwipe(e.touches[0].clientX)} // Mobile swipe
            onTouchMove={(e) => moveSwipe(e.touches[0].clientX)}
            onTouchEnd={endSwipe}
        >
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <img
                        src={slide.image}
                        alt={slide.alt}
                        className="w-full h-full object-cover"
                        draggable={false}
                    />
                    <div className="absolute inset-0 bg-black/30"></div>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="container mx-auto px-4 text-center">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <button
                                    onClick={() =>
                                        document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
                                    }
                                    className="
                    bg-gradient-to-r from-amber-500 to-orange-600
                    text-white px-8 py-4 rounded-lg font-semibold text-lg
                    transition-all transform hover:scale-105 shadow-lg
                  "
                                >
                                    Explore Products
                                </button>

                                <button
                                    onClick={() =>
                                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                                    }
                                    className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
                                >
                                    Get Quote
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* ✅ Buttons available on both Desktop and Mobile */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition"
            >
                <ChevronLeft size={28} />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition"
            >
                <ChevronRight size={28} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                            index === currentSlide ? "bg-white w-8" : "bg-white/50"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}
