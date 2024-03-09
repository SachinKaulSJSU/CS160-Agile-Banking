import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: {  
          50:'#f8fafc',      
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        green: {
          DEFAULT:colors.emerald,
          rev:'#A5D142',
        },
        purple: {
          DEFAULT:colors.violet,
          plan:'#A73DD2',
          des:'#6C3FD2',
        },
        yellow: colors.amber,
        pink: {
          DEFAULT:colors.fuschia,
          lau:'#A5D142',
        },
        blue: {
          DEFAULT:colors.blue,
          lau:'#A5D142',
          dev:'#6C3FD2',
          test:'#1BDAEE',
        },
        orange: {
          DEFAULT:colors.orange,
          dep:'#F8921E',
        },
      },
    },
  },
  plugins: [
  ],
};
export default config;
