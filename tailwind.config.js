/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)" /* gray-200 */,
        input: "var(--color-input)" /* gray-200 */,
        ring: "var(--color-ring)" /* blue-900 */,
        background: "var(--color-background)" /* gray-50 */,
        foreground: "var(--color-foreground)" /* slate-900 */,
        primary: {
          DEFAULT: "var(--color-primary)" /* blue-900 */,
          foreground: "var(--color-primary-foreground)" /* white */,
        },
        secondary: {
          DEFAULT: "var(--color-secondary)" /* blue-400 */,
          foreground: "var(--color-secondary-foreground)" /* slate-900 */,
        },
        destructive: {
          DEFAULT: "var(--color-destructive)" /* red-700 */,
          foreground: "var(--color-destructive-foreground)" /* white */,
        },
        muted: {
          DEFAULT: "var(--color-muted)" /* gray-200 */,
          foreground: "var(--color-muted-foreground)" /* slate-600 */,
        },
        accent: {
          DEFAULT: "var(--color-accent)" /* amber-500 */,
          foreground: "var(--color-accent-foreground)" /* slate-900 */,
        },
        popover: {
          DEFAULT: "var(--color-popover)" /* white */,
          foreground: "var(--color-popover-foreground)" /* slate-900 */,
        },
        card: {
          DEFAULT: "var(--color-card)" /* gray-100 */,
          foreground: "var(--color-card-foreground)" /* slate-900 */,
        },
        success: {
          DEFAULT: "var(--color-success)" /* green-700 */,
          foreground: "var(--color-success-foreground)" /* white */,
        },
        warning: {
          DEFAULT: "var(--color-warning)" /* orange-600 */,
          foreground: "var(--color-warning-foreground)" /* white */,
        },
        error: {
          DEFAULT: "var(--color-error)" /* red-700 */,
          foreground: "var(--color-error-foreground)" /* white */,
        },
        brand: {
          teal: "var(--color-brand-teal)" /* teal-700 */,
          "teal-foreground": "var(--color-brand-teal-foreground)" /* white */,
          cloud: "var(--color-brand-cloud)" /* gray-50 */,
          "cloud-foreground":
            "var(--color-brand-cloud-foreground)" /* slate-900 */,
          amber: "var(--color-brand-amber)" /* orange-500 */,
          "amber-foreground": "var(--color-brand-amber-foreground)" /* white */,
          green: "var(--color-brand-green)" /* green-600 */,
          "green-foreground": "var(--color-brand-green-foreground)" /* white */,
          blue: "var(--color-brand-blue)" /* blue-500 */,
          "blue-foreground": "var(--color-brand-blue-foreground)" /* white */,
          charcoal: "var(--color-brand-charcoal)" /* slate-800 */,
          gray: "var(--color-brand-gray)" /* slate-500 */,
        },
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
      },
      fontFamily: {
        headline: ["Crimson Text", "serif"],
        body: ["Source Sans 3", "sans-serif"],
        cta: ["Outfit", "sans-serif"],
        accent: ["JetBrains Mono", "monospace"],
      },
      spacing: {
        base: "var(--spacing-base)",
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        elevated: "var(--shadow-elevated)",
        modal: "var(--shadow-modal)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
