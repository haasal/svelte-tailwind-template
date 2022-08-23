/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            colors: {
                light: {
                    100: "#f6f8fa",
                    200: "#F3F4F6",
                    300: "#DDDEDE",
                },
            },
        },
    },
    plugins: [],
};
