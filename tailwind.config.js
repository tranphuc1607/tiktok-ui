// const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            height: {
                hasContainer: 'calc(100vh - 60px)',
                wrapImg: 'calc(100% + 14px)',
            },
            width: {
                container: 'calc(100% - 240px)',
                img: 'calc(100% - 14px)',
                wrapImg: 'calc(100% + 14px)',
            },
            colors: {
                backGround: 'rgba(22, 24, 35, 0.06)',
                backGroundWrapMenu: 'rgba(0, 0, 0, 0.5)',
                colorLetterOnDarkMode: '#fff',
                colorLetterOffDarkMode: '#000',
                backGrounColorRed: 'rgb(254, 44, 85)',
                colorLetterBold0: 'rgba(22, 24, 35)',
                colorLetterBold1: 'rgba(22, 24, 35, 0.5)',
                colorLetterBold2: 'rgba(22, 24, 35, 0.2)',
                colorHagtag: 'rgb(43, 93, 185)',
                backGroundIconMenu4: 'rgba(22, 24, 35, 0.03)',
                backGroundNotification: 'rgba(84, 84, 84, 0.92)',
                color: 'rgba(22, 24, 35, 0.34)',
            },
            borderRadius: {
                100: '100%',
            },
            fontSize: {
                fontLabelReprot: '24px',
                descriptReport: '16px',
                notification: '14px',
            },
            fontWeight: {
                notification: '600',
            },
            keyframes: {
                transform: {
                    '0%': { transform: 'translate(-50% , 30%)', opacity: 0 },
                    '50%': { transform: 'translate(-50% , 100%)', opacity: 0.5 },
                    '100%': { transform: 'translate(-50% , 200%)', opacity: 1 },
                },
                fadeIn: {
                    '0%': { transform: 'scale(0.8)', opacity: 0 },
                    '50%': { transform: 'scale(0.9)', opacity: 0.5 },
                    '100%': { transform: 'scale(1)', opacity: 1 },
                },
                fadeOut: {
                    '0%': { transform: 'scale(1)', opacity: 1 },
                    '100%': { transform: 'scale(0.1)', opacity: 0.2 },
                },
                fading: {
                    '0%': { opacity: 1 },
                    '100%': { opacity: 0.9 },
                },
            },
            animation: {
                transform: 'transform .3s ease-in',
                fadeIn: 'fadeIn .1s ease-in',
                fadeOut: 'fadeOut .4s ease',
                fading: 'fading .7s ease',
            },
            screens: {
                test: '400px',
            },
        },
    },
    plugins: [],
};
