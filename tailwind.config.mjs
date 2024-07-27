/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
	  screens: {
		sm: "480px",
		md: "768px",
		lg: "976px",
		xl: "1440px",
	  },
	  colors: {
		black: "#000000",
		white: "#FFFFFF",
		gray: "#0D0C22",
		stone: "#231F20",
		lime: "#eee0c6",
		zinc: {
		  100: "#F3F3F3",
		  200: "#F0F0F0",
		  300: "#D9D9D9",
		  400: "#D8D8D8",
		  500: "#898989",
		  600: "#B0B0B0",
		  700: "#787878",
		  800: "#292A32",
		  900: "#191A23",
		},
		slate: {
		  900: '#0f172a',
		  800: '#1e293b',
		  400: '#94a3b8',
		},
		cyan: {
		  400: '#22d3ee',
		  900: '#164e63',
		},
		neutral: {
		  900: '#171717',
		  400: '#a3a3a3',
		},
		stone: {
		  900: '#1c1917',
		  400: '#a8a29e',
		},
		red: {
		  900: '#7f1d1d',
		  400: '#f87171',
		},
		orange: {
		  900: '#7c2d12',
		  400: '#fb923c',
		},
		amber: {
		  900: '#783915',
		  400: '#fbbf24',
		},
		yellow: {
		  900: '#713f12',
		  400: '#facc15',
		},
		lime: {
		  900: '#365314',
		  400: '#a3e635',
		},
		green: {
		  900: '#14532d',
		  400: '#4ade80',
		},
		emerald: {
		  900: '#064e3b',
		  400: '#34d399',
		},
		teal: {
		  900: '#134e4a',
		  400: '#2dd4bf',
		},
		sky: {
		  400: '#38bdf8',
		  900: '#0c4a6e',
		},
		blue: {
		  900: '#1e3a8a',
		  400: '#60a5fa',
		},
		indigo: {
		  900: '#312d81',
		  400: '#818cf8',
		},
		violet: {
		  900: '#4c1d95',
		  400: '#a78bfa',
		},
		purple: {
		  900: '#582d87',
		  400: '#c084fc',
		},
		fuchsia: {
		  900: '#701a75',
		  400: '#e879f9',
		},
		pink: {
		  900: '#831943',
		  400: '#f472b6',
		},
		rose: {
		  900: '#881c37',
		  400: '#fb7185',
		},
		transparent: 'transparent',
	  },
	  boxShadow: {
		card: '0px 5px 0px 0px #191A23',
	  },
	  backgroundColor: theme => ({
		...theme('colors'),
		'transparent': 'transparent',
	  }),
	  extend: {
		fontFamily: {
		  SpaceGrotesk: ["Space Grotesk", "sans-serif"],
		},
		backgroundImage: {
		  'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
		},
		gradientColorStops: theme => ({
		  ...theme('colors'),
		}),
		backgroundClip: {
		  'text': 'text',
		},
		stroke: theme => ({
		  ...theme('colors'),
		}),
		borderColor: {
		  'gray-600': 'rgb(75 85 99 / var(--tw-border-opacity))',
		},
		backgroundColor: {
		  'slate-900': 'rgb(15 23 42 / var(--tw-bg-opacity))',
		  'slate-800': 'rgb(30 41 59 / var(--tw-bg-opacity))',
		  'slate-400': 'rgb(148 163 184 / var(--tw-bg-opacity))',
		  'gray-400': 'rgb(156 163 175 / var(--tw-bg-opacity))',
		  'zinc-400': 'rgb(161 161 170 / var(--tw-bg-opacity))',
		  'neutral-400': 'rgb(163 163 163 / var(--tw-bg-opacity))',
		  'stone-400': 'rgb(168 162 158 / var(--tw-bg-opacity))',
		  'red-400': 'rgb(248 113 113 / var(--tw-bg-opacity))',
		  'orange-400': 'rgb(251 146 60 / var(--tw-bg-opacity))',
		  'amber-400': 'rgb(251 191 36 / var(--tw-bg-opacity))',
		  'yellow-400': 'rgb(250 204 21 / var(--tw-bg-opacity))',
		  'lime-400': 'rgb(163 230 53 / var(--tw-bg-opacity))',
		  'green-400': 'rgb(74 222 128 / var(--tw-bg-opacity))',
		  'emerald-400': 'rgb(52 211 153 / var(--tw-bg-opacity))',
		  'teal-400': 'rgb(45 212 191 / var(--tw-bg-opacity))',
		  'cyan-400': 'rgb(34 211 238 / var(--tw-bg-opacity))',
		  'sky-400': 'rgb(56 189 248 / var(--tw-bg-opacity))',
		  'blue-400': 'rgb(96 165 250 / var(--tw-bg-opacity))',
		  'indigo-400': 'rgb(129 140 248 / var(--tw-bg-opacity))',
		  'violet-400': 'rgb(167 139 250 / var(--tw-bg-opacity))',
		  'purple-400': 'rgb(192 132 252 / var(--tw-bg-opacity))',
		  'fuchsia-400': 'rgb(232 121 249 / var(--tw-bg-opacity))',
		  'pink-400': 'rgb(244 114 182 / var(--tw-bg-opacity))',
		  'rose-400': 'rgb(251 113 133 / var(--tw-bg-opacity))',
		},
		gradientColorStops: {
		  'from-sky-500': '#0ea5e9',
		  'to-cyan-400': '#22d3ee',
		},
	  },
	},
  };
  