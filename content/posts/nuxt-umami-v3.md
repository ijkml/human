---
date: 2024-08-28
title: Nuxt Umami v3
subtitle: "A little story, an upgrade guide, and a shiny new proxy mode."
tags: technical, nuxt
---

Hey everyone. I'm excited to announce an update to Nuxt Umami: v3 is out (in
beta), bringing back the module setup, `nuxi` support, and a new proxy mode.

---

## What's Changed?

### 🎁 Module, yay

::tag{type='yellow'}
Breaking change.
::

Nuxt Umami is back as a proper module, and I'm excited! This change streamlines
the module and helps avoid those tricky _module-vs-layer_ configuration issues.

[Read: Why layer in the first place?](#why-layer)

Also as a bonus, you can now install the module using `nuxi module`.
Huge thanks to Daniel for the motivation 😆.

```sh
nuxi module add nuxt-umami@module
```

![Dean Norris' Reaction meme. On the left (smiling), open PR to use 'nuxi module add' in the docs, and on the right (serious), PR closed because it is not a module.](/img/memes/1.webp)

<br>

### 🎭 Proxy mode

::tag{type='green'}
New feature.
::

Server-rendered Nuxt apps can now proxy Umami requests, thanks to
[Nitro route rules](https://nitro.unjs.io/guide/routing#route-rules)
and [Nuxt server endpoints](https://nuxt.com/docs/getting-started/server).

There are currently 3 proxy options:
- **none**: No proxy—requests go directly to your Umami endpoint.
- **direct**: Simple proxy using route rules.
- **cloak**: Proxy with "sensitive" data kept out of your client bundle.

Learn more about `proxy` [in the docs](https://umami.nuxt.dev/api/configuration#proxy-mode).

<br>

### ⛵ Other changes

- 🆕 New composable: `umIdentify`.
- 🆕 New config option: `enabled`.
- 🆕 New config option: `excludeQueryParams`.
- ⚠️ `debug` option has been renamed to `logErrors`.
- 📗 New documentation website, [umami.nuxt.dev](https://umami.nuxt.dev/) powered by [NuxtHub](https://hub.nuxt.com/) and [shadcn-docs](https://shadcn-docs.nuxt.dev/).

<br>

## Upgrade Guide

Upgrading to v3 should be quick and straightforward.

#### 📥 Install the latest version.

Using `nuxi`:

```sh
npx nuxi module add nuxt-umami@module
```

Manually:

```sh
pnpm install -D nuxt-umami@module
```

...then add to `nuxt.config.ts`.

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['nuxt-umami'],

  // ...other configs
});
```

#### 🚛 Move over your v2 config.

Copy your umami config from `app.config.ts` or `appConfig`, paste into `nuxt.config.ts`.

**Copy:**

```ts [app.config.ts]
defineAppConfig({
  umami: {
  // ...COPY
  },
});
```

**Paste:**

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['nuxt-umami'],
  umami: {
    // ...PASTE
  },
});
```

#### 🍸 Et voilà.

You're now using the latest version of Nuxt Umami. _Félicitations!_

Remember to [read the docs](https://umami.nuxt.dev/).

<br>

## Why Layer?

Short answer: skill issue.

Here's how the module has evolved:

- **v1: Script loader.**

  v1 was a convenient loader for the Umami script, but it had its
  limitations. Yes, it worked, but it relied on `provide/inject` instead
  of composables, and both error handling and SSR support were lacking.

- **v2: Rewrite: why not?**

  I decided to rewrite the script _for_ Nuxt. Fortunately, it's
  a small script, making it easy to maintain and keep up to date.

  ![Skeleton whispering to man meme. Text reads: 'I should just patch this up and move on,' followed by, 'My Lord, are you not the Visionary of Grand Designs? The Architect of Perfection? Wipe the slate clean and carve out perfection from the chaos!'](/img/memes/2.webp)

  When I started the rewrite, the Nuxt docs on modules and layers were
  still WIP. I read the Nuxt team raving about layers on TwiX and thought,
  _'This is the next big thing.'_ And yes, I was right.

  Implementing the tracker as a Nuxt Layer initially worked well, but
  as the Nuxt docs evolved and users ran into _gotchas_, I realized this
  was a misuse of layers.

- **v3: Are we there yet?**

  I'll update this part ~~when~~ if there's a v4.

<br>

## What's Next?

v3 will remain under the `@module` tag before moving to
`@latest` on October 1.

Contributions are welcome, start a discussion, open an issue,
send a PR to rewrite in HTMX 😅.

![Nuxt Umami contributors](https://contrib.rocks/image?repo=ijkml/nuxt-umami)
