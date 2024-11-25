/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Scans all relevant files for Tailwind classes
  ],
  theme: {
    extend: {
      // 1. Fonts
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'], // Primary font
        serif: ['Merriweather', 'serif'], // For headings or formal text
        mono: ['Fira Code', 'monospace'], // For code blocks or technical text
      },

      // 2. Colors
      colors: {
        primary: '#4a90e2', // Custom primary color
        secondary: '#f5f5f5', // Custom secondary color
        accent: '#ff5722', // Accent color for highlights
        success: '#4caf50', // Success message color
        warning: '#ff9800', // Warning message color
        danger: '#f44336', // Error or danger message color
        info: '#2196f3', // Informational messages color
        light: '#f9f9f9', // Light background color
        dark: '#212121', // Dark background color
      },

      // 3. Spacing
      spacing: {
        72: '18rem', // Large spacing
        84: '21rem',
        96: '24rem',
        128: '32rem',
        '1/5': '20%', // Fractional spacing
        '2/5': '40%',
        '3/5': '60%',
      },

      // 4. Border Radius
      borderRadius: {
        '4xl': '2rem', // Extra-large rounded corners
        full: '50%', // Full circular shapes
      },

      // 5. Breakpoints
      screens: {
        xs: '480px', // Extra-small screens
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },

      // 6. Shadows
      boxShadow: {
        soft: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
        hard: '0 8px 10px rgba(0, 0, 0, 0.25)', // Strong shadow
        glow: '0 4px 10px rgba(74, 144, 226, 0.5)', // Glow effect
        neon: '0 0 15px rgba(255, 87, 34, 0.8)', // Neon shadow
      },

      // 7. Custom Animation
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in forwards',
        spinSlow: 'spin 3s linear infinite', // Slower spin animation
        progress: 'progress 3s ease-in-out infinite', // Progress bar animation
        float: 'float 5s ease-in-out infinite', // Floating effect
        bounceSlow: 'bounce 2s infinite', // Smooth bounce effect
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        progress: {
          '0%': { width: '0%' },
          '50%': { width: '70%' },
          '100%': { width: '100%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },

      // 8. Max Widths
      maxWidth: {
        xs: '20rem', // Small containers
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        full: '100%', // Full width
      },

      // 9. Custom Gradients
      gradientColorStops: {
        primary: '#4a90e2',
        secondary: '#f5f5f5',
        accent: '#ff5722',
      },

      // 10. Z-Index
      zIndex: {
        '-10': '-10', // Negative z-index for backgrounds
        50: '50', // For floating elements
      },

      
  colors: {
    'custom-green': '#59C1B0', // Define your custom color here
    'custom-greeni': '#87C1B0', // Define your custom color here
  },
    },
  },


  darkMode: 'class', // Enables dark mode using a "class"

  plugins: [
    require('@tailwindcss/forms'), // Better form styling
    require('@tailwindcss/typography'), // Rich text content
    require('@tailwindcss/aspect-ratio'), // Managing aspect ratios
    require('@tailwindcss/line-clamp'), // Truncating text with ellipsis
  ],
};
