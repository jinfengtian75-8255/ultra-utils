import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'UltraUtils - Digital Superpowers for Creators'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 128,
                    background: 'linear-gradient(to bottom right, #09090b, #18181b)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}
            >
                {/* Abstract Background Elements */}
                <div
                    style={{
                        position: 'absolute',
                        top: -100,
                        left: -100,
                        width: 500,
                        height: 500,
                        borderRadius: '50%',
                        background: 'rgba(59, 130, 246, 0.05)',
                        filter: 'blur(100px)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: -100,
                        right: -100,
                        width: 500,
                        height: 500,
                        borderRadius: '50%',
                        background: 'rgba(236, 72, 153, 0.05)',
                        filter: 'blur(100px)',
                    }}
                />

                {/* Logo and Icon */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 24,
                        marginBottom: 20
                    }}
                >
                    <div
                        style={{
                            fontSize: 120,
                            filter: 'drop-shadow(0 0 20px rgba(234, 179, 8, 0.5))',
                        }}
                    >
                        ⚡
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginLeft: 10,
                        }}
                    >
                        <div
                            style={{
                                fontSize: 100,
                                fontWeight: 900,
                                fontStyle: 'italic',
                                color: 'white',
                                letterSpacing: '-0.05em',
                                lineHeight: 1,
                            }}
                        >
                            UltraUtils
                        </div>
                    </div>
                </div>

                {/* Subtitle */}
                <div
                    style={{
                        fontSize: 42,
                        fontWeight: 500,
                        color: '#a1a1aa',
                        marginTop: 40,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        textAlign: 'center',
                        maxWidth: 800,
                    }}
                >
                    Digital Superpowers for Creators
                </div>

                {/* Badge */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 60,
                        display: 'flex',
                        padding: '12px 32px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: 100,
                        fontSize: 24,
                        color: '#3b82f6',
                        fontWeight: 600,
                    }}
                >
                    100% Free • Privacy Focused • AI Powered
                </div>
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    )
}
