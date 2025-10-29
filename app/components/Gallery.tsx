"use client";

import { useState } from 'react';
import { Play, X } from 'lucide-react';

const videos = [
    {
        title: 'Tandem box installation video',
        thumbnail: 'Installation guide for corner carousel units',
        duration: '2:58',
        youtubeUrl: 'https://www.youtube.com/embed/ChoE-WXXSvo'
    },
    {
        title: 'Wardrobe slide fitting installation video',
        thumbnail: 'Step-by-step pull-out basket installation',
        duration: '3:24',
        youtubeUrl: 'https://www.youtube.com/embed/y_svnRtHR8E'
    },
    {
        title: 'Slim box installation video',
        thumbnail: 'Complete tall unit installation tutorial',
        duration: '1:22',
        youtubeUrl: 'https://www.youtube.com/embed/YLp31qQBodg'
    }
];


const galleryImages = [
    { title: 'Modern Kitchen Setup', category: 'Contemporary' },
    { title: 'Classic Design', category: 'Traditional' },
    { title: 'Minimalist Style', category: 'Modern' },
    { title: 'Luxury Kitchen', category: 'Premium' },
    { title: 'Compact Solution', category: 'Space-Saving' },
    { title: 'Industrial Look', category: 'Contemporary' }
];

export default function Gallery() {
    const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

    return (
        <section id="gallery" className="scroll-mt-45 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Gallery & Videos
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore our installation guides and see our products in beautifully designed kitchens
                    </p>
                </div>

                <div className="mb-20">
                    <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                        Installation Videos
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {videos.map((video, index) => (
                            <div
                                key={index}
                                className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                                onClick={() => setSelectedVideo(index)}
                            >
                                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                                    <div className="text-center text-white p-6">
                                        <Play className="mx-auto mb-3 w-16 h-16 text-amber-500 group-hover:scale-110 transition-transform" />
                                        <p className="text-sm font-medium">{video.thumbnail}</p>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all flex items-center justify-center">
                                    <Play className="w-20 h-20 text-white opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all" fill="white" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                    <h4 className="text-white font-semibold mb-1">{video.title}</h4>
                                    <span className="text-amber-400 text-sm">{video.duration}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {selectedVideo !== null && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedVideo(null)}
                >
                    <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute -top-12 right-0 text-white hover:text-amber-500 transition-colors"
                        >
                            <X size={32} />
                        </button>
                        <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`${videos[selectedVideo].youtubeUrl}?autoplay=1&rel=0`}
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

