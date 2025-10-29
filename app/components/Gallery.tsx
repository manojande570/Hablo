"use client";

import { useState } from 'react';
import { Play, X } from 'lucide-react';

const videos = [
    {
        title: 'Tandem box installation video',
        thumbnail: 'https://img.youtube.com/vi/ChoE-WXXSvo/hqdefault.jpg',
        duration: '2:58',
        url: 'https://www.youtube.com/watch?v=ChoE-WXXSvo',
        embed: 'https://www.youtube.com/embed/ChoE-WXXSvo'
    },
    {
        title: 'Wardrobe slide fitting installation video',
        thumbnail: 'https://img.youtube.com/vi/y_svnRtHR8E/hqdefault.jpg',
        duration: '3:24',
        url: 'https://www.youtube.com/watch?v=y_svnRtHR8E',
        embed: 'https://www.youtube.com/embed/y_svnRtHR8E'
    },
    {
        title: 'Slim box installation video',
        thumbnail: 'https://img.youtube.com/vi/YLp31qQBodg/hqdefault.jpg',
        duration: '1:22',
        url: 'https://www.youtube.com/watch?v=YLp31qQBodg',
        embed: 'https://www.youtube.com/embed/YLp31qQBodg'
    }
];

export default function Gallery() {
    const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

    return (
        <section id="gallery" className="scroll-mt-45 py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Gallery & Videos
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore our installation guides and video tutorials
                    </p>
                </div>

                {/* ✅ Installation Videos */}
                <div className="mb-20">
                    <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                        Installation Videos
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {videos.map((video, index) => (
                            <div
                                key={index}
                                className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                                onClick={() => setSelectedVideo(index)}
                            >
                                <div className="aspect-video relative">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                                    <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform shadow-lg">
                                        <Play className="w-12 h-12 text-white" fill="white" />
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                                    <h4 className="text-white font-semibold mb-1">{video.title}</h4>
                                    <span className="text-amber-400 text-sm font-medium">{video.duration}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ✅ Video Modal */}
            {selectedVideo !== null && (
                <div
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedVideo(null)}
                >
                    <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute -top-14 right-0 text-white hover:text-amber-500 transition-colors bg-black/50 rounded-full p-2"
                        >
                            <X size={32} />
                        </button>

                        <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`${videos[selectedVideo].embed}?autoplay=1&rel=0`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={videos[selectedVideo].title}
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}


