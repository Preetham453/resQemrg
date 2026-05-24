/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        tactical: {
          bg: '#060b12',
          dark: '#0a0f1a',
          darker: '#050810',
          border: '#1a1f2e',
          accent: '#10b981',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan-line': 'scanLine 3s linear infinite',
        'signal-pulse': 'signalPulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shake: 'shake 0.5s',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(16, 185, 129, 0.8)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        signalPulse: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        },
      },
      backgroundImage: {
        'tactical-grid': `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 59px,
          rgba(16, 185, 129, 0.03) 59px,
          rgba(16, 185, 129, 0.03) 60px
        ),
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 59px,
          rgba(16, 185, 129, 0.03) 59px,
          rgba(16, 185, 129, 0.03) 60px
        )`,
      },
    },
  },
  plugins: [],
};
