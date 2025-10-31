import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Spice AI",
    description: "Future of Podcast.",
    openGraph: {
        title: "Spice AI",
        description: "Future of Podcast.",
        images: [
            {
                url: "https://spice-ai-assets.s3.us-east-1.amazonaws.com/spice-logo.jpeg",
                width: 1080, // Square or portrait dimensions
                height: 1080, // Using square dimensions which often triggers vertical layout
                alt: "Spice AI",
            },
        ],
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}


