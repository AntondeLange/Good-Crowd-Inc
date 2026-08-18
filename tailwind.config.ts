import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        crowd: {
          brown: "#602E17",
          earth: "#9F785A",
          peach: "#F4D4B7",
          cream: "#FBF9F4",
          mist: "#F8F8F8"
        }
      },
      borderRadius: {
        crowd: "2rem"
      }
    }
  },
  plugins: []
};

export default config;
