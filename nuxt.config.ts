import { fileURLToPath } from 'node:url';
import svgLoader from 'vite-svg-loader';
import { resolve } from 'pathe';
import { redirects } from './redirects';

export default defineNuxtConfig({
  devServer: {
    host: '',
    port: 3221,
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      htmlAttrs: {
        lang: 'en-US',
      },
      meta: [
        { name: 'description', content: 'Moses Laurence' },
        { name: 'referrer', content: 'strict-origin-when-cross-origin' },
      ],
      // style: [
      //   {
      //     textContent:
      //       'html{color:hsl(240, 1%, 43%);background-color:hsl(240, 4%, 11%)}',
      //   },
      // ],
      noscript: [
        {
          innerHTML: `<link rel='stylesheet' type='text/css' href='/no-script.css'>`,
          tagPosition: 'bodyOpen',
        },
      ],
    },
  },
  routeRules: {
    // Add link shortcuts/redirects
    ...redirects,
    '/posts/**': { prerender: true },
  },
  alias: {
    '@img': fileURLToPath(new URL('./assets/images', import.meta.url)),
    // '@icons': fileURLToPath(new URL('./assets/icons', import.meta.url)),
    '@data': fileURLToPath(new URL('./assets/data', import.meta.url)),
  },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    'nuxt-beastcss',
    '@nuxt/content',
    'nuxt-simple-sitemap',
    '@nuxthq/studio',
  ],
  extends: ['nuxt-umami'],
  content: {
    documentDriven: false,
    highlight: {
      // Theme used in all color schemes.
      theme: 'monokai',
      preload: [
        'ts',
        'vue',
        'js',
        'json',
        'html',
        'css',
        'diff',
        'scss',
        'less',
        'shell',
        'markdown',
        'mdx',
        'yaml',
        'toml',
        'tsx',
      ],
    },
  },
  experimental: {
    // inlineSSRStyles: false,
    typedPages: true,
    componentIslands: true,
    headNext: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/global.scss" as *;',
        },
      },
    },
    plugins: [
      svgLoader({
        defaultImport: 'url',
      }),
    ],
  },
  css: ['@unocss/reset/tailwind.css', '@/assets/styles/root.scss'],
  typescript: {
    tsConfig: {
      compilerOptions: {
        moduleResolution: 'bundler',
      },
    },
  },
  devtools: {
    enabled: false,
  },
});
