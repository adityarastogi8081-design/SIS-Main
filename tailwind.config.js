/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                teal: '#04AAA5',
                gold: '#FBB040',
                dark: {
                    DEFAULT: '#000000',
                    50: '#0a0a0a',
                    100: '#111111',
                    200: '#1a1a1a',
                    300: '#222222',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
                sora: ['Sora', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
                dmsans: ['DM Sans', 'sans-serif'],
            },
            animation: {
                'gradient': 'gradient 8s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'float 10s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
                'shine': 'shine 1.2s ease forwards',
                'spin-slow': 'spin 8s linear infinite',
                'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
                'shimmer': 'shimmer 2s ease-in-out infinite',
            },
            keyframes: {
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: '0.4' },
                    '50%': { opacity: '0.8' },
                },
                shine: {
                    '0%': { left: '-60%', opacity: '0' },
                    '50%': { opacity: '1' },
                    '100%': { left: '120%', opacity: '0' },
                },
                'bounce-subtle': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-8px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
            },
        },
    },
    plugins: [],
}