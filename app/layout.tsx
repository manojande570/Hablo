import "./globals.css";

export const metadata = {
    title: "HABLO - Modular Kitchen Accessories",
    description:
        "Premium modular kitchen accessories and solutions by HABLO. Redefine your space with elegance and functionality.",

    openGraph: {
        title: "HABLO - Modular Kitchen Accessories",
        description:
            "Discover stylish and functional modular kitchen solutions by HABLO.",
        url: "https://bejeweled-pika-84775d.netlify.app",
        siteName: "HABLO",
        images: [
            {
                url: "https://dummyimage.com/1200x630/000/fff.png&text=HABLO+Kitchen",
                width: 1200,
                height: 630,
                alt: "HABLO - Modular Kitchen Accessories",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "HABLO - Modular Kitchen Accessories",
        description:
            "Transform your kitchen with premium accessories from HABLO.",
        images: ["https://dummyimage.com/1200x630/000/fff.png&text=HABLO+Kitchen"],
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            <link
                rel="icon"
                href="https://dummyimage.com/512x512/000/fff.png&text=H"
            />
        </head>
        <body>{children}</body>
        </html>
    );
}




