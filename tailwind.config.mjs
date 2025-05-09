/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
	  screens: {
		sm: "640px",
		md: "768px",
		lg: "1024px",
		xl: "1280px",
		"2xl": "1536px",
	  },
	  colors: {
		// primary: "#B9FF66",
		// primary: "#E63946", //spicy red
		// primary: "#780606", //bloody red
		primary: "#a81c07", //rufous
		accent: "#F4A261",
		neutralbase: "#264653",
		secondary: "#2A9D8F",
		background: "#EDEDED",
		black: "#000000",
		white: "#FFFFFF",
		gray: "#0D0C22",
		stone: "#231F20",
		lime: "#B9FF66",
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
		barnRed: "#7C0A02",
	  },
	  boxShadow:{
        'card':'0px 5px 0px 0px #191A23'
      },
	  extend: {
		fontFamily: {
			SpaceGrotesk: ["Space Grotesk", "sans-serif"],
		},
	  },
	},
  };