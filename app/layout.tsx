import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ Load Google Fonts
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// ✅ Website Metadata (with dummy data)
export const metadata: Metadata = {
    title: "DemoSite - Modern Web Experience",
    description:
        "Explore the DemoSite — a sample Next.js project with Open Graph and Twitter preview support.",

    // ✅ Browser tab icon
    icons: {
        icon: "https://dummyimage.com/256x256/000/fff.png&text=DS", // Dummy favicon
    },

    // ✅ Open Graph (used by WhatsApp, Facebook, LinkedIn)
    openGraph: {
        title: "DemoSite - Modern Web Experience",
        description:
            "Discover a beautiful demo website built with Next.js, designed to test OG image previews.",
        url: "https://demo-site-example.netlify.app",
        siteName: "DemoSite",
        images: [
            {
                url: "https://dummyimage.com/1200x630/000/fff.png&text=Demo+OG+Image",
                width: 1200,
                height: 630,
                alt: "Demo OG Image",
            },
        ],
        type: "website",
        locale: "en_US",
    },

    // ✅ Twitter (used by Twitter/X)
    twitter: {
        card: "summary_large_image",
        title: "DemoSite - Modern Web Experience",
        description:
            "Experience the clean and elegant demo website with perfect OG tags.",
        images: ["https://dummyimage.com/1200x630/000/fff.png&text=Demo+OG+Image"],
    },

    metadataBase: new URL("https://demo-site-example.netlify.app"),
};

// ✅ Root Layout Component
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}



