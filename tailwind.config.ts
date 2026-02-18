import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#f47b25",
                "primary-hover": "#e06915",
                "background-light": "#f8f7f5",
                "background-dark": "#221710",
                "surface-light": "#ffffff",
                "surface-dark": "#2e231c",
                "surface-dark-hover": "#3a2d24",
                "text-light": "#1e293b",
                "text-dark": "#e2e8f0",
            },
            fontFamily: {
                "display": ["var(--font-jakarta)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
