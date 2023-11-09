import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-color': 'hsl(214, 57%, 51%)',
        'secondary-color': 'hsl(214, 56%, 58%)',
        'tertiary-color': '#28a745',
        'font-color': '#0f1113',
        'font-light': '#ffffff',
        'bg-color': '#fafafa',
        'bg-light': '#fafafa',
        'bg-dark': '#1e1e1e',
        'card-bg': 'rgb(245, 245, 245)',
        'bg-grey': '#bab8b8',
      },
    },
  },
  plugins: [],
}
export default config
