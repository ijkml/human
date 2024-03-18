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
        9: 'hsl(240, 4%, 4%)',
      },
    },
    fontFamily: {
      sans: [
        'Space Grotesk',
        'Source Sans Pro',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Helvetica Neue',
        'Helvetica',
        'DejaVu Sans',
        'Segoe UI',
        'sans-serif',
      ],
      mono: [
        'Roboto Mono',
        'Mono Code',
        'ui-monospace',
        'Ubuntu Mono',
        'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
      ],
    },
    breakpoints: {
      'ss': '360px',
      'ss500': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
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
