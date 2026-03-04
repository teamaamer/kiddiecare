import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF7EF",
        peach: "#F7BFA8",
        "sky-blue": "#A9D9F5",
        "gentle-green": "#86B78B",
        lavender: "#C9B6F2",
        "accent-orange": "#F4A261",
        "text-charcoal": "#3B3A36",
      },
      fontFamily: {
        fredoka: ["var(--font-fredoka)", "sans-serif"],
        nunito: ["var(--font-nunito)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
