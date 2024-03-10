import { fileURLToPath } from 'node:url';
import svgLoader from 'vite-svg-loader';
import { redirects } from './redirects';

export default defineNuxtConfig({
  devServer: {
    host: '',
    port: 3221,
  },
  site: {
    url: 'https://ijkml.vercel.app',
    name: 'Moses Laurence',
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
    '/posts': { isr: true },
    '/posts/**': { isr: true },
    '/work': { isr: true },
    '/work/**': { isr: true },
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
    '@nuxtjs/sitemap',
    '@nuxthq/studio',
  ],
  extends: ['nuxt-umami'],
  sitemap: {
    strictNuxtContentPaths: true,
  },
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
