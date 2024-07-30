import { fileURLToPath } from 'node:url';
import svgLoader from 'vite-svg-loader';
import { redirects } from './redirects';

export default defineNuxtConfig({
  compatibilityDate: '2024-07-30',
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxt/content',
    '@nuxthq/studio',
    '@nuxtjs/seo',
    'nuxt-og-image',
  ],
  extends: ['nuxt-umami'],
  site: {
    url: 'https://ijkml.dev',
    name: 'Moses Laurence (ijkml)',
    description: 'Software developer & open-source enthusiast building beautiful, functional web experiences. Let\'s work together!',
    defaultLocale: 'en',
  },
  seo: {
    redirectToCanonicalSiteUrl: true,
  },
  schemaOrg: {
    identity: {
      type: 'Person',
      name: 'Moses Laurence',
      alternateName: 'ijkml',
      image: '/avatar.png',
      sameAs: [
        'https://github.com/ijkml',
      ],
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preload', href: '/fonts/Space-Grotesk-Var.woff2', as: 'font', type: 'font/woff2', crossorigin: true },
      ],
      htmlAttrs: {
        lang: 'en-US',
      },
      meta: [
        {
          name: 'description',
          content: 'Software developer & open-source enthusiast building beautiful, functional web experiences. Let\'s work together!',
        },
        { name: 'referrer', content: 'strict-origin-when-cross-origin' },
        { name: 'msvalidate.01', content: '91CC11ED2B60F80CC99F5646E01CD0A2' },
      ],
    },
  },
  routeRules: {
    // Add link shortcuts/redirects
    ...redirects,
    '/posts': { isr: true },
    '/posts/**': { isr: true },
    '/work': { prerender: true },
    '/work/**': { prerender: true },
  },
  alias: {
    '@img': fileURLToPath(new URL('./app/assets/images', import.meta.url)),
    '@data': fileURLToPath(new URL('./app/assets/data', import.meta.url)),
  },
  sitemap: {
    strictNuxtContentPaths: true,
    sources: [
      '/api/__sitemap__/work-urls',
    ],
  },
  ogImage: {
    fonts: ['Space+Grotesk:400', 'Space+Grotesk:600'],
  },
  content: {
    documentDriven: false,
    highlight: {
      // Theme used in all color schemes.
      theme: 'monokai',
      preload: ['ts', 'vue', 'js', 'json', 'html', 'css', 'diff', 'scss', 'less', 'shell', 'markdown', 'mdx', 'yaml', 'toml', 'tsx'],
    },
  },
  features: {
    inlineStyles: true,
  },
  experimental: {
    typedPages: true,
    componentIslands: true,
    headNext: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/global.scss" as *;',
        },
      },
    },
    plugins: [
      svgLoader({
        defaultImport: 'url',
      }),
    ],
  },
  css: ['@unocss/reset/tailwind.css', '~/assets/styles/root.scss'],
  devtools: { enabled: true },
  devServer: {
    host: '',
    port: 4444,
  },
});
