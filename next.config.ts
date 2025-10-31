// import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        domains: ['www.habloindia.com'], // ✅ Allow your logo domain
    },
};

module.exports = nextConfig;

