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
            fontFamily: {},
            colors: {
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
            }
        },
        objectPosition: {
            'top-center': 'top center',
            'center-center': 'center center',
            'bottom-center': 'bottom center',
            'bottom-left': 'bottom left'
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}

