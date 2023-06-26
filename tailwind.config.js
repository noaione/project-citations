const colors = require("tailwindcss/colors");

/**
 * @type {import("tailwindcss").Config}
 */
const Config = {
    content: [
        "./components/**/*.{js,ts,jsx,tsx}",
        "./lib/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./styles/**/*.{js,ts,jsx,tsx,.css}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                gray: colors.neutral,
            },
        },
    },
};
module.exports = Config;
