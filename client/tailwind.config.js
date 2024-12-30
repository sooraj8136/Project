module.exports = {
  content: ['./src/**/*.{html,js}'], // Update this based on your file structure
  theme: {
    extend: {},
  },
  plugins: [],
};


module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Adjust the paths to match your project structure
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
