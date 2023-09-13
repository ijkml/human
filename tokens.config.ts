import { defineTheme } from 'pinceau';

// TODO: refactor to use real design tokens

export default defineTheme({
  typography: {
    font: {
      sans: 'inherit',
    },
    fontWeight: {
      // specific font stuff
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '400',
      semibold: '400',
      bold: '500',
      extrabold: '500',
      black: '500',
    },
    color: {
      primary: {
        50: '#ff2d2d',
        100: '{typography.color.primary.50}',
        200: '{typography.color.primary.50}',
        300: '{typography.color.primary.50}',
        400: '{typography.color.primary.50}',
        500: '{typography.color.primary.50}',
        600: '{typography.color.primary.50}',
        700: '{typography.color.primary.50}',
        800: '{typography.color.primary.50}',
        900: '{typography.color.primary.50}',
      },
    },
  },
  prose: {
    img: {
      borderRadius: '12px',
    },
    code: {
      block: {
        borderRadius: '8px',
        borderWidth: '0px',
      },
      inline: {
        color: {
          initial: '{typography.color.secondary.200}',
        },
        backgroundColor: {
          initial: '#2f2f32',
        },
      },
    },
    a: {
      code: {
        background: {
          hover: {
            initial: '{typography.color.black}',
            dark: '{typography.color.black}',
          },
        },
        color: {
          hover: {
            initial: '{typography.color.primary.50}',
            dark: '{typography.color.primary.50}',
          },
        },
      },
    },
    hr: {
      color: {
        initial: '{typography.color.secondary.700}',
        dark: '{typography.color.secondary.700}',
      },
    },
    blockquote: {
      border: {
        color: {
          initial: 'currentColor',
        },
      },
    },
  },
});
