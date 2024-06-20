import { fileURLToPath } from 'node:url';
import svgLoader from 'vite-svg-loader';
import { redirects } from './redirects';

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxt/content',
    '@nuxthq/studio',
    '@nuxtjs/seo',
  ],
  extends: ['nuxt-umami'],
  devServer: {
    host: '',
    port: 4444,
  },
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
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      htmlAttrs: {
        lang: 'en-US',
      },
      meta: [
        {
          name: 'description',
          content: 'Software developer & open-source enthusiast building beautiful, functional web experiences. Let\'s work together!',
        },
        { name: 'referrer', content: 'strict-origin-when-cross-origin' },
      ],
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
    '@data': fileURLToPath(new URL('./assets/data', import.meta.url)),
  },
  sitemap: {
    strictNuxtContentPaths: true,
  },
  ogImage: {
    fonts: [
      'Space+Grotesk:400',
      'Space+Grotesk:600',
    ],
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
  devtools: { enabled: true },
});
