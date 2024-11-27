/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  // Ensure app folder is included
    './pages/**/*.{js,ts,jsx,tsx}', // Ensure pages folder is included
    './components/**/*.{js,ts,jsx,tsx}', // Ensure components folder is included
    './layout/**/*.{js,ts,jsx,tsx}', // Ensure layout folder is included
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
