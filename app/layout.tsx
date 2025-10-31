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
    icons: {
        icon: "https://taupe-cajeta-e0f0c7.netlify.app/favicon.png", // Browser tab icon
    },
    openGraph: {
        title: "HABLO - Modular Kitchen Accessories",
        description:
            "Discover stylish and functional modular kitchen solutions by HABLO.",
        url: "https://example-site.netlify.app/", // 🔁 replace with your real domain
        siteName: "HABLO",
        images: [
            {
                url: "https://dummyimage.com/1200x630/000/fff.png&text=HABLO+Preview+Image", // ✅ use same icon for sharing
                width: 1200, // adjust if your favicon is smaller/larger
                height: 630,
                alt: "HABLO Logo",
                type: "image/png",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "HABLO - Modular Kitchen Accessories",
        description:
            "Transform your kitchen with premium accessories from HABLO.",
        images: ["https://taupe-cajeta-e0f0c7.netlify.app/favicon.png"], // ✅ same here
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


