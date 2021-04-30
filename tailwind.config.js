module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            gridColumn: {
                container_right: "1 / span 4",
                container_left: "5 / span 8",
            }
        },
        boxShadow: {
            default: '0px 2px 8px rgba(0, 0, 0, 0.05)'
        },
        backgroundColor: {
            default: '#dadada',
        }
    },
    variants: {
        extend: {},
    },
    plugins: [
        "postcss-import",
        "tailwindcss",
        "autoprefixer"
    ],
}
