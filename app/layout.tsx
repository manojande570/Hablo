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
        url: "https://taupe-cajeta-e0f0c7.netlify.app", // your deployed URL
        siteName: "HABLO",
        images: [
            {
                url: "https://taupe-cajeta-e0f0c7.netlify.app/favicon.png", // must be an absolute URL
                width: 512,
                height: 512,
                alt: "HABLO Logo",
            },
        ],
        type: "website",
    },

    // ✅ Twitter Preview
    twitter: {
        card: "summary",
        title: "HABLO - Modular Kitchen Accessories",
        description:
            "Transform your kitchen with premium accessories from HABLO.",
        images: ["https://taupe-cajeta-e0f0c7.netlify.app/favicon.png"], // absolute URL
    },
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


