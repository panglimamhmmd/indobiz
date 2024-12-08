import type { Config } from "tailwindcss";
import {
  scopedPreflightStyles,
  isolateOutsideOfContainer,
} from 'tailwindcss-scoped-preflight';
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        'orange' : '#ffa500',
        'white' : '#f5f7f8',
        'black' : '#231F20'
      },
    },
    fontFamily: {
      sans: [ "Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    scopedPreflightStyles({
      isolationStrategy: isolateOutsideOfContainer(['.blog-content']),
    }),
  ],
};
export default config;
