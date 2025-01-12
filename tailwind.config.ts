import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
   
   // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
   ],
  theme: {
    container:{
      padding: {
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryColor:"var(--primaryColor)",
        buttonColor:"var(--buttonColor)"
      },
    },
  },
  plugins: [],
} satisfies Config;
