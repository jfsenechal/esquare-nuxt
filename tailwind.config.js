/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
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
                lato: [100, 300],
            },
            colors: {
                esquare: {
                    black: '#37352f',
                    yellow: '#f3c30c',
                    blue: '#0067a1'
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
                    footer: '#797979',
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
                }
        },
        animation: {
            shimmer: "6s infinite shimmer ease-in-out",
            bouncejf: "bouncejf linear 2s",
            leftjf: "leftjf linear 2s",
            "bounce-in-top": "bounce-in-top 2s ease both" //https://tail-animista.vercel.app/
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}

