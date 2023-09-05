<script setup lang="ts">
useHead({
  title: '404 Not Found',
  meta: [{ name: 'description', content: 'This page does not exist.' }],
});

const props = {
  title: 'Bro<span class="select-none" aria-hidden="true">·_·</span>ken',
  paragraph:
    'Congratulations, you found a broken link! <br /> If this is not what you were hoping to find, please give me a shout.',

  links: [
    { text: 'Go Home', link: '/' },
    { text: 'FIX NOW!', link: '/contact' },
  ],
};
</script>

<template>
  <NotFound v-bind="props" />
</template>
