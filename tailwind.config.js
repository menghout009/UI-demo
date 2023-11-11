/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    darkMode: false,
    extend: {
      fontFamily: {
        "sp-pro-text-light": ['sp-pro-text-light', 'sans-serif'],
        "sp-pro-text-light": ['sp-pro-text-light', 'sans-serif'],
        "sp-pro-text-regular": ['sp-pro-text-regular', 'sans-serif'],
        "sp-pro-text-bold": ['sp-pro-text-bold', 'sans-serif'],
        "sp-pro-text-medium": ['sp-pro-text-medium', 'sans-serif'],
        "sp-pro-text-semibold": ['sp-pro-text-semibold', 'sans-serif'],
        "sp-pro-text-heavy": ['sp-pro-text-heavy', 'sans-serif'],
      },
      colors: {
        "primary": "#1C63ED",
        "pending-hover": "#0254F3",
        "secondary": "#002979",
        "text-color": "#324C5B",
        "background-color": "#ffffff",
        "border-color": "#E2E8F0",
        "bg-dashboard": "#F8F9FA",
        "deployment-bgColor": "#FFE2E5",
        "deployment-iconColor": "#FA5A7D",
        "database-bgColor": "#DCF0FC",
        "database-iconColor": "#3CC5D8",
        "domain-bgColor": "#F3E8FF",
        "domain-iconColor": "#BF83FF",
        "https-bgColor": "#DCFCE7",
        "https-iconColor": "#3CD856",
        "red-button": "#EE1D52",
        // color logo project
        "project-color1": "#009fff",
        "project-color2": "#00ffde",
        "project-color3": "#f9ff00",
        "project-color4": "#00ef0f",
        "project-color5": "#b400ef",
        "project-color6": "#ef0000",
        "project-color7": "#0059ef",


      }
    },
  },
  plugins: [require("daisyui")
    //,require('@headlessui/tailwindcss')
    //, require('tailwind-scrollbar')({ nocompatible: true })
  ],
  daisyui: {
    themes: false,
  }
}