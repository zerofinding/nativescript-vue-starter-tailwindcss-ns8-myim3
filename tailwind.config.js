module.exports = {
  mode: 'jit',
  purge: [
    './app/**/*.{css,xml,html,vue,svelte,ts,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        myim3: {
          red: '#ed2324',
          blue: '#2dcef3'
        }
      },
      spacing: {
        25: '7rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}