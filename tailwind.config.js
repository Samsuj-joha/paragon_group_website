// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
    // './app/**/*.{js,ts,jsx,tsx}',  // Ensure app folder is included
    // './pages/**/*.{js,ts,jsx,tsx}', // Ensure pages folder is included
    // './components/**/*.{js,ts,jsx,tsx}', // Ensure components folder is included
    // './layout/**/*.{js,ts,jsx,tsx}', // Ensure layout folder is included
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };


module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  // Ensure app folder is included
    './pages/**/*.{js,ts,jsx,tsx}', // Ensure pages folder is included
    './components/**/*.{js,ts,jsx,tsx}', // Ensure components folder is included
    './layout/**/*.{js,ts,jsx,tsx}', // Ensure layout folder is included
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',  // Small screens and above
        md: '768px',  // Medium screens and above
        lg: '1024px', // Large screens and above
        xl: '1280px', // Extra large screens and above
        '2xl': '1536px', // 2x Extra large screens and above
      },
    },
  },
  plugins: [],
}

