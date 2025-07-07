/** @type {import('tailwindcss').Config} */
module.exports = {
    // darkMode: "class",
    content: ["./src/frontend/**/*.{html,js,svelte}"],
    theme: {
        extend: {},
        fontFamily: {
            printer: ['"Line Printer"'],
        },
    },
    plugins: [],
};
