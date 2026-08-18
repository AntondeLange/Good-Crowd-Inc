import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        crowd: {
          brown: "var(--color-brown)",
          earth: "var(--color-earth)",
          sand: "var(--color-sand)",
          peach: "var(--color-sand)",
          cream: "var(--color-cream)",
          mist: "var(--color-mist)",
          ink: "var(--color-ink)",
          focus: "var(--color-focus)",
        }
      },
      fontFamily: {
        body: "var(--font-body)",
        display: "var(--font-display)",
      },
      borderRadius: {
        crowd: "var(--radius-lg)",
        "crowd-sm": "var(--radius-sm)",
        "crowd-md": "var(--radius-md)",
      },
      boxShadow: {
        crowd: "var(--shadow-soft)",
        "crowd-lg": "var(--shadow-lifted)",
      },
      transitionDuration: {
        crowd: "var(--duration-crowd)",
      },
      transitionTimingFunction: {
        crowd: "var(--ease-crowd)",
      },
    }
  },
  plugins: []
};

export default config;
