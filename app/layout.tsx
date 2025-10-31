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
    title: "My Brand - Modern Home Accessories",
    description:
        "Explore modern, stylish, and functional home accessories to enhance your living space.",

    // ✅ Browser Tab Icon (favicon)
    icons: {
        icon: "https://dummyimage.com/64x64/000/fff.png&text=MB", // small dummy favicon
    },

    // ✅ Open Graph (used by WhatsApp, Facebook, LinkedIn)
    openGraph: {
        title: "My Brand - Modern Home Accessories",
        description:
            "Discover premium and elegant home accessories for every modern home.",
        url: "https://mybrand-demo.netlify.app", // your dummy Netlify site
        siteName: "My Brand",
        images: [
            {
                url: "https://dummyimage.com/1200x630/000/fff.png&text=My+Brand+Preview", // ✅ required image for WhatsApp & social
                width: 1200,
                height: 630,
                alt: "My Brand - Modern Home Accessories",
            },
        ],
        type: "website",
        locale: "en_US",
    },

    // ✅ Twitter / X Preview
    twitter: {
        card: "summary_large_image",
        title: "My Brand - Modern Home Accessories",
        description:
            "Upgrade your home with elegant and functional accessories from My Brand.",
        images: [
            "https://dummyimage.com/1200x630/000/fff.png&text=My+Brand+Preview",
        ],
    },

    // ✅ Additional meta tags (for fallback consistency)
    metadataBase: new URL("https://mybrand-demo.netlify.app"),
};


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}


