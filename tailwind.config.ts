import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#007aff",
        secondary: "#da3ca1",
        accent1: "#3b82f6",
        accent2: "#02050a",
        accent4: "#1e293b",
        accent5: "#0f172a",
        accent6: "#1e293b",
        neutral1: "#ffffff",
        neutral4: "#94a3b8",
      },
      animation: {
        'slow-rotate': 'spin 10s linear infinite',
        'slow-rotate-reverse': 'spin-reverse 10s linear infinite',
        'skew': 'skew 5s ease-in-out infinite',
        'updown': 'updown 4s ease-in-out infinite',
        'bounce-soft': 'bounceSoft 2s infinite',
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'skew': {
          '0%, 100%': { transform: 'skewY(0deg)' },
          '50%': { transform: 'skewY(5deg)' },
        },
        'updown': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'bounceSoft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};

export default config;
