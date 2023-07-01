import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  theme: {
    colors: {
      ml: {
        0: 'hsl(0, 100%, 59%)',
        1: 'hsl(0, 0%, 94%)',
        2: 'hsl(0, 0%, 90%)',
        3: 'hsl(240, 1%, 58%)',
        4: 'hsl(240, 1%, 43%)',
        5: 'hsl(240, 3%, 24%)',
        6: 'hsl(240, 3%, 14%)',
        7: 'hsl(240, 4%, 11%)',
        8: 'hsl(240, 4%, 9%)',
      },
    },
    fontFamily: {
      sans: [
        'Alliance',
        'Source Sans Pro',
        'DejaVu Sans',
        'Helvetica Neue',
        'Helvetica',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'sans-serif',
      ],
    },
    breakpoints: {
      ss: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
