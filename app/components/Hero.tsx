"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import DownloadCatalogueIcon from "@/app/components/Header";

const slides = [
    {
        image: "https://www.habloindia.com/hom2.jpg",
        alt: "Modern modular kitchen with premium accessories",
    },
    {
        image: "https://www.habloindia.com/hom1.jpg",
        alt: "Elegant kitchen storage solutions",
    },
    {
        image: "https://www.habloindia.com/hom3.jpg",
        alt: "Contemporary kitchen design with smart accessories",
    },
    {
        image: "https://www.habloindia.com/hom4.jpg",
        alt: "Luxury modular kitchen setup",
    },
];

export function DownloadCatalogueIcon() {
    return (
        <div className="fixed bottom-25 right-6">
            <div className="relative w-[60px] h-[60px] rounded-full bg-white shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-200">
                {/* Center Dummy Image */}
                <img
                    src="https://www.habloindia.com/catalogue.png"
                    alt="Catalogue"
                    className="w-7 h-7"
                />

                {/* Circular Text */}
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                    <defs>
                        {/* Top curve - text outward */}
                        <path id="top-curve" d="M 10,50 A 40,40 0 0,1 90,50" fill="none" />
                        {/* Bottom curve - flipped direction so text faces user */}
                        <path id="bottom-curve" d="M 10,50 A 40,40 0 0,0 90,50" fill="none" />
                    </defs>

                    <text fontSize="13" fill="#0a2540" fontWeight="600">
                        <textPath href="#top-curve" startOffset="50%" textAnchor="middle">
                            DOWNLOAD
                        </textPath>
                        <textPath
                            href="#bottom-curve"
                            startOffset="50%"
                            textAnchor="middle"
                            dy="5"
                            textLength="80"
                            lengthAdjust="spacingAndGlyphs"
                        >
                            CATALOGUE
                        </textPath>
                    </text>
                </svg>
            </div>
        </div>
    );
}



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
            className="relative h-[50vh] mt-14 overflow-hidden"
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
                        className="
    w-[90vw] h-auto object-cover
    sm:w-full sm:h-full
    mx-auto
    rounded-2xl
    shadow-lg
  "
                        draggable={false}
                    />


                    <div className="absolute inset-0 bg-black/30"></div>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="container mx-auto px-4 text-center">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  {/*              <button*/}
                  {/*                  onClick={() =>*/}
                  {/*                      document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })*/}
                  {/*                  }*/}
                  {/*                  className="*/}
                  {/*  bg-gradient-to-r from-amber-500 to-orange-600*/}
                  {/*  text-white px-8 py-4 rounded-lg font-semibold text-lg*/}
                  {/*  transition-all transform hover:scale-105 shadow-lg*/}
                  {/*"*/}
                  {/*              >*/}
                  {/*                  Explore Products*/}
                  {/*              </button>*/}

                  {/*              <button*/}
                  {/*                  onClick={() =>*/}
                  {/*                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })*/}
                  {/*                  }*/}
                  {/*                  className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"*/}
                  {/*              >*/}
                  {/*                  Get Quote*/}
                  {/*              </button>*/}
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
            {/* ✅ Fixed Floating Icons */}
            <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
                {/* WhatsApp Button */}
                <a
                    href="/HABLO_JULY2025_CATALOGUE.pdf"
                    download="HABLO_CATALOGUE_JULY2025.pdf"
                    className="text-white p-3 rounded-full shadow-lg transition transform hover:scale-110"
                >
                    <DownloadCatalogueIcon/>
                </a>
                <a
                    href="https://wa.me/919840488579" // replace with your WhatsApp number
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110"
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                        alt="WhatsApp"
                        className="w-7 h-7"
                    />
                </a>
            </div>

        </section>
    );
}
