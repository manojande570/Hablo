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
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            <title>HABLO - Modular Kitchen Accessories</title>
            <meta
                name="description"
                content="Premium modular kitchen accessories and solutions by HABLO."
            />
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://example-site.netlify.app/"/>
            <meta
                property="og:title"
                content="HABLO - Modular Kitchen Accessories"
            />
            <meta
                property="og:description"
                content="Discover stylish and functional modular kitchen solutions by HABLO."
            />
            <meta
                property="og:image"
                content="https://dummyimage.com/1200x630/000/fff.png&text=HABLO+Preview+Image"
            />
            <meta property="og:image:width" content="1200"/>
            <meta property="og:image:height" content="630"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta
                name="twitter:title"
                content="HABLO - Modular Kitchen Accessories"
            />
            <meta
                name="twitter:description"
                content="Transform your kitchen with premium accessories from HABLO."
            />
            <meta
                name="twitter:image"
                content="https://dummyimage.com/1200x630/000/fff.png&text=HABLO+Preview+Image"
            />
            <link
                rel="icon"
                href="https://dummyimage.com/64x64/000/fff.png&text=H"
                type="image/png"
            />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}


