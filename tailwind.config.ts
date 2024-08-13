import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    extend: {
      inset: {
        "17": "68px",
        "26": "104px",
      },
      backdropBlur: {
        xxs: "1px",
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
      },
      colors: {
        "material-theme": { white: "#ffffff", black: "#000000" },
        light: {
          primary: "#004a00",
          "surface-tint": "#176d10",
          "on-primary": "#ffffff",
          "primary-container": "#1c7114",
          "on-primary-container": "#ffffff",
          secondary: "#46663d",
          "on-secondary": "#ffffff",
          "secondary-container": "#cbf1bc",
          "on-secondary-container": "#33522b",
          tertiary: "#004269",
          "on-tertiary": "#ffffff",
          "tertiary-container": "#216699",
          "on-tertiary-container": "#ffffff",
          error: "#ba1a1a",
          "on-error": "#ffffff",
          "error-container": "#ffdad6",
          "on-error-container": "#410002",
          background: "#f6fbef",
          "on-background": "#181d16",
          surface: "#fcf8f8",
          "on-surface": "#1c1b1b",
          "surface-variant": "#dbe6d3",
          "on-surface-variant": "#40493c",
          outline: "#707a6a",
          "outline-variant": "#bfcab8",
          shadow: "#000000",
          scrim: "#000000",
          "inverse-surface": "#313030",
          "inverse-on-surface": "#f4f0ef",
          "inverse-primary": "#85db71",
          "primary-fixed": "#a0f88a",
          "on-primary-fixed": "#002200",
          "primary-fixed-dim": "#85db71",
          "on-primary-fixed-variant": "#005300",
          "secondary-fixed": "#c7edb9",
          "on-secondary-fixed": "#042102",
          "secondary-fixed-dim": "#acd19e",
          "on-secondary-fixed-variant": "#2f4e28",
          "tertiary-fixed": "#cee5ff",
          "on-tertiary-fixed": "#001d33",
          "tertiary-fixed-dim": "#97cbff",
          "on-tertiary-fixed-variant": "#004a76",
          "surface-dim": "#ddd9d8",
          "surface-bright": "#fcf8f8",
          "surface-container-lowest": "#ffffff",
          "surface-container-low": "#f7f3f2",
          "surface-container": "#f1edec",
          "surface-container-high": "#ebe7e7",
          "surface-container-highest": "#e5e2e1",
        },
        dark: {
          primary: "#85db71",
          "surface-tint": "#85db71",
          "on-primary": "#003a00",
          "primary-container": "#005500",
          "on-primary-container": "#9ff78a",
          secondary: "#acd19e",
          "on-secondary": "#193713",
          "secondary-container": "#284721",
          "on-secondary-container": "#badfac",
          tertiary: "#97cbff",
          "on-tertiary": "#003353",
          "tertiary-container": "#004c79",
          "on-tertiary-container": "#cfe5ff",
          error: "#ffb4ab",
          "on-error": "#690005",
          "error-container": "#93000a",
          "on-error-container": "#ffdad6",
          background: "#10150e",
          "on-background": "#dfe4d8",
          surface: "#141313",
          "on-surface": "#e5e2e1",
          "surface-variant": "#40493c",
          "on-surface-variant": "#bfcab8",
          outline: "#8a9483",
          "outline-variant": "#40493c",
          shadow: "#000000",
          scrim: "#000000",
          "inverse-surface": "#e5e2e1",
          "inverse-on-surface": "#313030",
          "inverse-primary": "#176d10",
          "primary-fixed": "#a0f88a",
          "on-primary-fixed": "#002200",
          "primary-fixed-dim": "#85db71",
          "on-primary-fixed-variant": "#005300",
          "secondary-fixed": "#c7edb9",
          "on-secondary-fixed": "#042102",
          "secondary-fixed-dim": "#acd19e",
          "on-secondary-fixed-variant": "#2f4e28",
          "tertiary-fixed": "#cee5ff",
          "on-tertiary-fixed": "#001d33",
          "tertiary-fixed-dim": "#97cbff",
          "on-tertiary-fixed-variant": "#004a76",
          "surface-dim": "#141313",
          "surface-bright": "#3a3939",
          "surface-container-lowest": "#0e0e0e",
          "surface-container-low": "#1c1b1b",
          "surface-container": "#201f1f",
          "surface-container-high": "#2a2a2a",
          "surface-container-highest": "#353434",
        },
        "light-high-contrast": {
          primary: "#002900",
          "surface-tint": "#176d10",
          "on-primary": "#ffffff",
          "primary-container": "#004f00",
          "on-primary-container": "#ffffff",
          secondary: "#0a2806",
          "on-secondary": "#ffffff",
          "secondary-container": "#2b4a24",
          "on-secondary-container": "#ffffff",
          tertiary: "#00243d",
          "on-tertiary": "#ffffff",
          "tertiary-container": "#004670",
          "on-tertiary-container": "#ffffff",
          error: "#4e0002",
          "on-error": "#ffffff",
          "error-container": "#8c0009",
          "on-error-container": "#ffffff",
          background: "#f6fbef",
          "on-background": "#181d16",
          surface: "#fcf8f8",
          "on-surface": "#000000",
          "surface-variant": "#dbe6d3",
          "on-surface-variant": "#1d261a",
          outline: "#3c4538",
          "outline-variant": "#3c4538",
          shadow: "#000000",
          scrim: "#000000",
          "inverse-surface": "#313030",
          "inverse-on-surface": "#ffffff",
          "inverse-primary": "#b4ffa0",
          "primary-fixed": "#004f00",
          "on-primary-fixed": "#ffffff",
          "primary-fixed-dim": "#003500",
          "on-primary-fixed-variant": "#ffffff",
          "secondary-fixed": "#2b4a24",
          "on-secondary-fixed": "#ffffff",
          "secondary-fixed-dim": "#153310",
          "on-secondary-fixed-variant": "#ffffff",
          "tertiary-fixed": "#004670",
          "on-tertiary-fixed": "#ffffff",
          "tertiary-fixed-dim": "#002f4e",
          "on-tertiary-fixed-variant": "#ffffff",
          "surface-dim": "#ddd9d8",
          "surface-bright": "#fcf8f8",
          "surface-container-lowest": "#ffffff",
          "surface-container-low": "#f7f3f2",
          "surface-container": "#f1edec",
          "surface-container-high": "#ebe7e7",
          "surface-container-highest": "#e5e2e1",
        },
        "dark-high-contrast": {
          primary: "#f1ffe8",
          "surface-tint": "#85db71",
          "on-primary": "#000000",
          "primary-container": "#89df75",
          "on-primary-container": "#000000",
          secondary: "#f1ffe8",
          "on-secondary": "#000000",
          "secondary-container": "#b0d5a2",
          "on-secondary-container": "#000000",
          tertiary: "#fafaff",
          "on-tertiary": "#000000",
          "tertiary-container": "#a0cfff",
          "on-tertiary-container": "#000000",
          error: "#fff9f9",
          "on-error": "#000000",
          "error-container": "#ffbab1",
          "on-error-container": "#000000",
          background: "#10150e",
          "on-background": "#dfe4d8",
          surface: "#141313",
          "on-surface": "#ffffff",
          "surface-variant": "#40493c",
          "on-surface-variant": "#f4feeb",
          outline: "#c4cebc",
          "outline-variant": "#c4cebc",
          shadow: "#000000",
          scrim: "#000000",
          "inverse-surface": "#e5e2e1",
          "inverse-on-surface": "#000000",
          "inverse-primary": "#003200",
          "primary-fixed": "#a4fc8e",
          "on-primary-fixed": "#000000",
          "primary-fixed-dim": "#89df75",
          "on-primary-fixed-variant": "#001c00",
          "secondary-fixed": "#ccf1bd",
          "on-secondary-fixed": "#000000",
          "secondary-fixed-dim": "#b0d5a2",
          "on-secondary-fixed-variant": "#001c00",
          "tertiary-fixed": "#d6e9ff",
          "on-tertiary-fixed": "#000000",
          "tertiary-fixed-dim": "#a0cfff",
          "on-tertiary-fixed-variant": "#00182b",
          "surface-dim": "#141313",
          "surface-bright": "#3a3939",
          "surface-container-lowest": "#0e0e0e",
          "surface-container-low": "#1c1b1b",
          "surface-container": "#201f1f",
          "surface-container-high": "#2a2a2a",
          "surface-container-highest": "#353434",
        },
        "light-medium-contrast": {
          primary: "#004a00",
          "surface-tint": "#176d10",
          "on-primary": "#ffffff",
          "primary-container": "#1c7114",
          "on-primary-container": "#ffffff",
          secondary: "#2b4a24",
          "on-secondary": "#ffffff",
          "secondary-container": "#5c7d52",
          "on-secondary-container": "#ffffff",
          tertiary: "#004269",
          "on-tertiary": "#ffffff",
          "tertiary-container": "#216699",
          "on-tertiary-container": "#ffffff",
          error: "#8c0009",
          "on-error": "#ffffff",
          "error-container": "#da342e",
          "on-error-container": "#ffffff",
          background: "#f6fbef",
          "on-background": "#181d16",
          surface: "#fcf8f8",
          "on-surface": "#1c1b1b",
          "surface-variant": "#dbe6d3",
          "on-surface-variant": "#3c4538",
          outline: "#586253",
          "outline-variant": "#747e6e",
          shadow: "#000000",
          scrim: "#000000",
          "inverse-surface": "#313030",
          "inverse-on-surface": "#f4f0ef",
          "inverse-primary": "#85db71",
          "primary-fixed": "#328527",
          "on-primary-fixed": "#ffffff",
          "primary-fixed-dim": "#146b0d",
          "on-primary-fixed-variant": "#ffffff",
          "secondary-fixed": "#5c7d52",
          "on-secondary-fixed": "#ffffff",
          "secondary-fixed-dim": "#44643b",
          "on-secondary-fixed-variant": "#ffffff",
          "tertiary-fixed": "#3a79ad",
          "on-tertiary-fixed": "#ffffff",
          "tertiary-fixed-dim": "#186093",
          "on-tertiary-fixed-variant": "#ffffff",
          "surface-dim": "#ddd9d8",
          "surface-bright": "#fcf8f8",
          "surface-container-lowest": "#ffffff",
          "surface-container-low": "#f7f3f2",
          "surface-container": "#f1edec",
          "surface-container-high": "#ebe7e7",
          "surface-container-highest": "#e5e2e1",
        },
        "dark-medium-contrast": {
          primary: "#89df75",
          "surface-tint": "#85db71",
          "on-primary": "#001c00",
          "primary-container": "#50a341",
          "on-primary-container": "#000000",
          secondary: "#b0d5a2",
          "on-secondary": "#001c00",
          "secondary-container": "#779a6c",
          "on-secondary-container": "#000000",
          tertiary: "#a0cfff",
          "on-tertiary": "#00182b",
          "tertiary-container": "#5996cb",
          "on-tertiary-container": "#000000",
          error: "#ffbab1",
          "on-error": "#370001",
          "error-container": "#ff5449",
          "on-error-container": "#000000",
          background: "#10150e",
          "on-background": "#dfe4d8",
          surface: "#141313",
          "on-surface": "#fefaf9",
          "surface-variant": "#40493c",
          "on-surface-variant": "#c4cebc",
          outline: "#9ca695",
          "outline-variant": "#7c8676",
          shadow: "#000000",
          scrim: "#000000",
          "inverse-surface": "#e5e2e1",
          "inverse-on-surface": "#2b2a2a",
          "inverse-primary": "#005500",
          "primary-fixed": "#a0f88a",
          "on-primary-fixed": "#001600",
          "primary-fixed-dim": "#85db71",
          "on-primary-fixed-variant": "#004000",
          "secondary-fixed": "#c7edb9",
          "on-secondary-fixed": "#001600",
          "secondary-fixed-dim": "#acd19e",
          "on-secondary-fixed-variant": "#1f3d18",
          "tertiary-fixed": "#cee5ff",
          "on-tertiary-fixed": "#001223",
          "tertiary-fixed-dim": "#97cbff",
          "on-tertiary-fixed-variant": "#00395c",
          "surface-dim": "#141313",
          "surface-bright": "#3a3939",
          "surface-container-lowest": "#0e0e0e",
          "surface-container-low": "#1c1b1b",
          "surface-container": "#201f1f",
          "surface-container-high": "#2a2a2a",
          "surface-container-highest": "#353434",
        },
        primary: {
          primary100: "#ffffff",
          primary99: "#f7ffee",
          primary98: "#edffe1",
          primary95: "#caffb8",
          primary90: "#bbf1aa",
          primary80: "#85db71",
          primary70: "#6abe59",
          primary60: "#50a341",
          primary50: "#358829",
          primary40: "#176d10",
          primary35: "#016101",
          primary30: "#005300",
          primary25: "#004600",
          primary20: "#003a00",
          primary15: "#002d00",
          primary10: "#002200",
          primary5: "#001500",
          primary0: "#000000",
        },
        secondary: {
          secondary100: "#ffffff",
          secondary99: "#f7ffee",
          secondary98: "#edffe1",
          secondary95: "#e1f8d5",
          secondary90: "#d3e9c7",
          secondary80: "#b7cdac",
          secondary70: "#9cb192",
          secondary60: "#829779",
          secondary50: "#687d60",
          secondary40: "#506449",
          secondary35: "#44583e",
          secondary30: "#394c33",
          secondary25: "#2e4028",
          secondary20: "#23351e",
          secondary15: "#192a14",
          secondary10: "#0e200b",
          secondary5: "#051503",
          secondary0: "#000000",
        },
        tertiary: {
          tertiary100: "#ffffff",
          tertiary99: "#f3ffff",
          tertiary98: "#e7feff",
          tertiary95: "#c1fbff",
          tertiary90: "#adeef2",
          tertiary80: "#92d1d6",
          tertiary70: "#77b6ba",
          tertiary60: "#5c9b9f",
          tertiary50: "#418185",
          tertiary40: "#24686c",
          tertiary35: "#135b5f",
          tertiary30: "#004f53",
          tertiary25: "#004346",
          tertiary20: "#003739",
          tertiary15: "#002b2d",
          tertiary10: "#002022",
          tertiary5: "#001415",
          tertiary0: "#000000",
        },
        error: {
          error100: "#ffffff",
          error99: "#fffbff",
          error98: "#fff8f7",
          error95: "#ffedea",
          error90: "#ffdad6",
          error80: "#ffb4ab",
          error70: "#ff897d",
          error60: "#ff5449",
          error50: "#de3730",
          error40: "#ba1a1a",
          error35: "#a80710",
          error30: "#93000a",
          error25: "#7e0007",
          error20: "#690005",
          error15: "#540003",
          error10: "#410002",
          error5: "#2d0001",
          error0: "#000000",
        },
        neutral: {
          neutral100: "#ffffff",
          neutral99: "#f9f9f9",
          neutral98: "#fdf8f8",
          neutral95: "#f4f0ef",
          neutral90: "#e5e2e1",
          neutral80: "#c9c6c5",
          neutral70: "#adaaaa",
          neutral60: "#939090",
          neutral50: "#797776",
          neutral40: "#605e5e",
          neutral35: "#535252",
          neutral30: "#484646",
          neutral25: "#3c3b3b",
          neutral20: "#313030",
          neutral15: "#262625",
          neutral10: "#1c1b1b",
          neutral5: "#111111",
          neutral0: "#000000",
        },
        "neutral-variant": {
          "neutral-variant100": "#ffffff",
          "neutral-variant99": "#f9fef1",
          "neutral-variant98": "#f6fbee",
          "neutral-variant95": "#edf3e5",
          "neutral-variant90": "#dfe4d7",
          "neutral-variant80": "#c3c8bc",
          "neutral-variant70": "#a7ada1",
          "neutral-variant60": "#8d9387",
          "neutral-variant50": "#73796e",
          "neutral-variant40": "#5a6056",
          "neutral-variant35": "#4e544a",
          "neutral-variant30": "#43483f",
          "neutral-variant25": "#373d34",
          "neutral-variant20": "#2c3229",
          "neutral-variant15": "#22271f",
          "neutral-variant10": "#181d15",
          "neutral-variant5": "#0d120b",
          "neutral-variant0": "#000000",
        },
        "key-colors": { primary: "#006000", neutral: "#646464" },
        source: { seed: "#006000" },
      },
      fontSize: {
        "2xs": "0.625rem",
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
      },
      fontFamily: { danafanum: "DanaFaNum" },
      boxShadow: {
        "Drop Shadow/100": "0px 1px 4px 0px rgba(12,12,13,0.05)",
        "Drop Shadow/200":
          "0px 1px 4px 0px rgba(12,12,13,0.05), 0px 1px 4px 0px rgba(12,12,13,0.1)",
        "Drop Shadow/300":
          "0px 4px 4px -1px rgba(12,12,13,0.05), 0px 4px 4px -1px rgba(12,12,13,0.1)",
        "Drop Shadow/400":
          "0px 4px 4px -4px rgba(12,12,13,0.05), 0px 16px 32px -4px rgba(12,12,13,0.1)",
        "Drop Shadow/500":
          "0px 4px 4px -4px rgba(12,12,13,0.05), 0px 16px 16px -8px rgba(12,12,13,0.1)",
        "Drop Shadow/600": "0px 16px 32px -8px rgba(12,12,13,0.4)",
        "Blur/Overlay": "",
        "Blur/Layer": "",
        "Blur/Glass": "",
        "Inner Shadow/100": "inset 0px 1px 4px 0px rgba(12,12,13,0.05)",
        "Inner Shadow/200": "inset 0px 1px 4px 0px rgba(12,12,13,0.05)",
        "Inner Shadow/300": "inset 0px 4px 4px -1px rgba(12,12,13,0.05)",
        "Inner Shadow/400": "inset 0px 16px 32px -4px rgba(12,12,13,0.1)",
        "Inner Shadow/500": "inset 0px 16px 16px -8px rgba(12,12,13,0.1)",
        "Inner Shadow/600": "inset 0px 16px 32px -8px rgba(12,12,13,0.4)",
      },
      borderRadius: {
        "rounded-0": "0rem",
        "rounded-1": "0.0625rem",
        "rounded-2": "0.125rem",
        "rounded-3": "0.25rem",
        "rounded-4": "0.3125rem",
        "rounded-5": "0.44631630182266235rem",
        "rounded-6": "0.5rem",
        "rounded-7": "0.75rem",
        "rounded-8": "0.8926326036453247rem",
        "rounded-9": "1rem",
        "rounded-10": "1.5rem",
        "rounded-11": "2rem",
        "rounded-12": "2.5rem",
        "rounded-13": "3.125rem",
        "rounded-14": "62.4375rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
export default config;
