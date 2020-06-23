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
                '112': '28rem',
            },
        },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/ui'),
    ],
}
