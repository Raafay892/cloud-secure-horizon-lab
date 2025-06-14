import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
        feminine: {
          primary: {
            DEFAULT: '#9B4DCA',
            light: '#B47EDE',
            dark: '#7B2CBF',
          },
          secondary: {
            DEFAULT: '#FF69B4',
            light: '#FFB6C1',
            dark: '#DB7093',
          },
          accent: {
            DEFAULT: '#F8BBD0',
            light: '#FCE4EC',
            dark: '#F48FB1',
          },
          background: {
            DEFAULT: '#FFFFFF',
            alt: '#FDF2F8',
            dark: '#2D1B69',
          },
          text: {
            primary: '#4A4A4A',
            secondary: '#666666',
            light: '#FFFFFF',
          },
          additional: {
            lavender: '#E6E6FA',
            peach: '#FFDAB9',
            mint: '#F5FFFA',
            rose: '#FFE4E1',
          }
        },
        csp: {
          'primary': '#1e005a',
          'secondary': '#3d006f',
          'tertiary': '#4a0082',
          'accent': '#ff007f',
          'accent-subtle': '#d4008a',
          'cyan': '#00ffff',
          'cyan-subtle': '#00cccc',
          'gray-dark': '#222222',
          'gray-medium': '#333333',
          'gray-light': '#8E9196',
          'text-primary': '#ffffff',
          'text-secondary': '#cccccc',
        }
      },
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
        'pill': '9999px',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(10px)'
					}
				},
        'glow': {
          '0%, 100%': {
            boxShadow: '0 0 5px 2px rgba(155, 77, 202, 0.3), 0 0 10px rgba(155, 77, 202, 0.2)'
          },
          '50%': {
            boxShadow: '0 0 10px 3px rgba(155, 77, 202, 0.5), 0 0 15px rgba(155, 77, 202, 0.3)'
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-out': 'fade-out 0.5s ease-out',
        'glow': 'glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite'
			}
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
