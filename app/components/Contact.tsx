"use client";

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Format the WhatsApp message
        const whatsappMessage = `Hello! I'm ${formData.name}%0A%0APhone: ${formData.phone}%0A%0AMessage: ${formData.message}`;

        // WhatsApp number (replace with your actual number)
        const whatsappNumber = '919840488579'; // Format: country code + number (no + or spaces)

        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');

        // Reset form
        setFormData({name: '', phone: '', message: ''});
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="contact" className="scroll-mt-24 py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Ready to transform your kitchen? Contact us today for a free consultation
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <div>
                        <div
                            className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
                            <h3 className="text-3xl font-bold mb-8">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div
                                        className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="text-white" size={24}/>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg mb-1">Phone</h4>
                                        <p className="text-amber-50">+91 98404 88579</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div
                                        className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="text-white" size={24}/>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg mb-1">Email</h4>
                                        <p className="text-amber-50">info@habloindia.com</p>
                                        <p className="text-amber-50">sales@habloindia.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div
                                        className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="text-white" size={24}/>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg mb-1">Address</h4>
                                        <p className="text-amber-50">HABLO Kitchen Accessories</p>
                                        <p className="text-amber-50">Mumbai, Maharashtra, India</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div
                                        className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Clock className="text-white" size={24}/>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg mb-1">Business Hours</h4>
                                        <p className="text-amber-50">Mon - Sat: 9:00 AM - 6:00 PM</p>
                                        <p className="text-amber-50">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>

                            {/*<div className="mt-8 pt-8 border-t border-white/20">*/}
                            {/*    <a*/}
                            {/*        href="https://wa.me/919840488579"*/}
                            {/*        target="_blank"*/}
                            {/*        rel="noopener noreferrer"*/}
                            {/*        className="flex items-center justify-center space-x-3 bg-white text-amber-600 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"*/}
                            {/*    >*/}
                            {/*        <MessageCircle size={24}/>*/}
                            {/*        <span>Chat on WhatsApp</span>*/}
                            {/*    </a>*/}
                            {/*</div>*/}
                        </div>
                    </div>

                    <div>
                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200">
                            <h3 className="text-3xl font-bold text-gray-800 mb-8">Send Us a Message</h3>

                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-gray-800 placeholder-gray-400"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-gray-800 placeholder-gray-400"
                                        placeholder="+91 1234567890"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                                        Your Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none text-gray-800 placeholder-gray-400"
                                        placeholder="Tell us about your kitchen project..."
                                    />
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                                >
                                    <Send size={20}/>
                                    <span>Send via WhatsApp</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
