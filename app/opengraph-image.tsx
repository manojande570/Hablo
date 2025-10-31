import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'HABLO - Premium Modular Kitchen Accessories';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(135deg, #ff5d24 0%, #ff8444 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'system-ui',
                }}
            >
                <div
                    style={{
                        fontSize: 80,
                        fontWeight: 'bold',
                        color: 'white',
                        textAlign: 'center',
                        marginBottom: 20,
                    }}
                >
                    HABLO
                </div>
                <div
                    style={{
                        fontSize: 40,
                        color: 'white',
                        textAlign: 'center',
                        opacity: 0.9,
                    }}
                >
                    Premium Modular Kitchen Accessories
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
//     ```
//
// This will automatically generate the OG image at build time!
//
// ---
//
// ## **Verify It Works:**
//
// After deploying with the new image:
//
// 1. Clear WhatsApp cache by sending the link with a query parameter first:
// ```
// https://taupe-cajeta-e0f0c7.netlify.app/?v=1