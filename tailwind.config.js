/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin')
export default {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './app.vue'
    ],
    theme: {
        extend: {
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
                'Hanken-Grotesk': ['Hanken Grotesk', 'sans-serif'],
                lato: [100, 300],
            },
            colors: {
                esquare: {
                    black: '#37352f',
                    yellow: '#f3c30c',
                    blue: '#0067a1',
                    brown: '#9f6709',
                    'green-light': '#A2BE63',
                    'green-dark': '#94af4d',
                    'grey-dark': '#707070',
                    'grey-lighter': '#ededec',
                },
                //https://uicolors.app/create
                saffron: {
                    50: '#fefde8',
                    100: '#fdfac4',
                    200: '#fcf38c',
                    300: '#fae44a',
                    400: '#f7d218',
                    500: '#f3c30c',
                    600: '#c79007',
                    700: '#9f6709',
                    800: '#835110',
                    900: '#704213',
                    950: '#412207',
                },
                blue: {
                    default: '#608BA4',
                    light: '#608ba4',
                    lighter: '#4f8ea5',
                    hard: '#0d6efd',
                    small: '#50afd2',
                    banner: '#9AD7F7',
                    search: '#3a87a4',
                },
                green: {
                    default: '#A2BE63',
                    light: '#94af4d',
                    lighter: '#a8c564',
                    checks: '#00d19f',
                    btn: '#a3be62',
                },
                grey: {
                    dark: '#707070',
                    footer: '#767676',
                    shop: '#6c6b6b',
                    e: '#828080',
                    light: '#F8F8F8',
                    lighter: '#ededec',
                    white: '#fefefc',
                    tt: '#f5fafce8',
                    xx: '#f3f4f1ff'
                },
                yellow: {
                    default: '#facc15',
                    hard: '#b59411',
                },
            }
        },
        objectPosition: {
            'top-center': 'top center',
            'center-center': 'center center',
            'bottom-center': 'bottom center',
            'center-50': 'center 50%',
            'center-44': 'center 44%',
            'center-80': 'center 80%',
            'bottom-left': 'bottom left'
        },
        keyframes: {
            shimmer: {
                "0%": {
                    backgroundPosition: "left",
                },
                "50%": {
                    backgroundPosition: "right",
                },
                "100%": {
                    backgroundPosition: "left",
                },
            },
            leftjf: {
                "0%": {
                    transform: "translateX(-4rem)",
                },
                "50%": {
                    transform: "translateX(-2rem)",
                },
                "100%": {
                    transform: "translateX(0)",
                },
            },
            bouncejf: {
                "0%": {
                    transform: "translateY(-4rem)",
                },
                "50%": {
                    transform: " translateY(0)",
                },
                "100%": {
                    transform: "translateY(0)",
                },
            },
            "bounce-in-top": {
                "0%": {
                    transform: "translateY(-500px)",
                    "animation-timing-function": "ease-in",
                    opacity: "0"
                },
                "38%": {
                    transform: "translateY(0)",
                    "animation-timing-function": "ease-out",
                    opacity: "1"
                },
                "55%": {
                    transform: "translateY(-65px)",
                    "animation-timing-function": "ease-in"
                },
                "72%,90%,to": {
                    transform: "translateY(0)",
                    "animation-timing-function": "ease-out"
                },
                "81%": {
                    transform: "translateY(-28px)"
                },
                "95%": {
                    transform: "translateY(-8px)",
                    "animation-timing-function": "ease-in"
                }
            },
            "scale-up-center": {
                "0%": {
                    transform: "scale(.5)"
                },
                to: {
                    transform: "scale(1)"
                }
            },
            typing: {
                '0%': {
                    width: '0ch',
                },
                '10%': {
                    width: '11ch',
                },
                '20%': {
                    width: '22ch',
                },
                '30%': {
                    width: '33ch',
                },
                '40%': {
                    width: '44ch',
                },
                '50%': {
                    width: '55ch',
                },
                '60%': {
                    width: '66ch',
                },
                '70%': {
                    width: '77ch',
                },
                '80%': {
                    width: '88ch',
                },
                '90%': {
                    width: '99ch',
                },
                '100%': {
                    width: '110ch',
                }
            },
        },
        //https://tail-animista.vercel.app/
        animation: {
            shimmer: "6s infinite shimmer ease-in-out",
            bouncejf: "bouncejf linear 2s",
            leftjf: "leftjf linear 2s",
            typing: 'typing 5s steps(34)',
            "scale-up-center": "scale-up-center 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
            "bounce-in-top": "bounce-in-top 2s ease both"
        },
    },
    plugins: [
        plugin(function ({addUtilities}) {
            addUtilities({
                '.grid-auto-fit': {
                    gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))',
                },
            })
        }),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('tailwindcss-animated'),
        require('tailwindcss-intersect')
    ],
}

