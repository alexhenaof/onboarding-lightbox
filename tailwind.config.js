const defaultTheme = require('tailwindcss/defaultTheme')
const tailwindUiColors = require('@tailwindcss/ui/colors')

module.exports = {
    purge: [],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            minHeight: {
                'cardbox': ['450px'],
            },
            inset: {
                '12': '3rem',
                '1/2': '50%',
            },
            colors:{
                'orangeptp': '#FF5A1F',
            }
        },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/ui'),
    ],
}
