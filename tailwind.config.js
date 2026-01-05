/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: {
                    dark: '#000000',
                    card: '#0A0A0A',
                },
                primary: {
                    DEFAULT: '#8B5CF6', // Vibrant Violet
                    dark: '#7C3AED',
                    glow: 'rgba(139, 92, 246, 0.4)',
                },
                text: {
                    main: '#FFFFFF',
                    muted: '#9CA3AF',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'], // For Headings
            },
            animation: {
                'pulse-glow': 'pulse-glow 2s infinite',
            },
            keyframes: {
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 5px rgba(139, 92, 246, 0.4)' },
                    '50%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)' },
                }
            }
        },
        container: {
            center: true,
            padding: '2rem',
        },
    },
    plugins: [],
}
