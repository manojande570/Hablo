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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <title>HABLO - Modular Kitchen Accessories</title>
            <meta name="description" content="Premium modular kitchen accessories and solutions by HABLO. Redefine your space with elegance and functionality." />
            <link rel="icon" href="https://taupe-cajeta-e0f0c7.netlify.app/favicon.png" />
            <meta property="og:title" content="HABLO - Modular Kitchen Accessories" />
            <meta property="og:description" content="Discover stylish and functional modular kitchen solutions by HABLO." />
            <meta property="og:image" content="https://taupe-cajeta-e0f0c7.netlify.app/favicon.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="HABLO" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="HABLO - Modular Kitchen Accessories" />
            <meta name="twitter:description" content="Transform your kitchen with premium accessories from HABLO." />
            <meta name="twitter:image" content="https://taupe-cajeta-e0f0c7.netlify.app/favicon.png" />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}


