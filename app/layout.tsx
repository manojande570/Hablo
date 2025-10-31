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
    title: "HABLO - Modular Kitchen Accessories",
    description:
        "Premium modular kitchen accessories and solutions by HABLO. Redefine your space with elegance and functionality.",

    // ✅ Browser Tab Icon
    icons: {
        icon: "https://taupe-cajeta-e0f0c7.netlify.app/favicon.png",
    },

    // ✅ Open Graph (WhatsApp, Facebook, LinkedIn Preview)
    openGraph: {
        title: "HABLO - Modular Kitchen Accessories",
        description:
            "Discover stylish and functional modular kitchen solutions by HABLO.",
        url: "https://taupe-cajeta-e0f0c7.netlify.app",
        siteName: "HABLO",
        images: [
            {
                url: "https://taupe-cajeta-e0f0c7.netlify.app/og-image.png", // ⚠️ Must be 1200x630px minimum
                width: 1200,
                height: 630,
                alt: "HABLO - Premium Modular Kitchen Accessories",
            },
        ],
        type: "website",
        locale: "en_US",
    },

    // ✅ Twitter Preview
    twitter: {
        card: "summary_large_image", // Changed from "summary" to "summary_large_image"
        title: "HABLO - Modular Kitchen Accessories",
        description:
            "Transform your kitchen with premium accessories from HABLO.",
        images: ["https://taupe-cajeta-e0f0c7.netlify.app/og-image.png"],
    },

    // ✅ Additional meta tags for better compatibility
    metadataBase: new URL("https://taupe-cajeta-e0f0c7.netlify.app"),
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


