<script setup lang="ts">
useHead({
  title: 'Project not found',
  meta: [{ name: 'description', content: 'This project does not exist.' }],
});

const props = {
  title: 'Undefined',
  paragraph:
    'This project does not exist, <em>yet</em>. But we can change that! Reach out, let\'s work together to craft something amazing.',

  links: [
    { text: 'View works', link: '/work' },
    { text: 'Get in touch', link: '/contact' },
  ],
};
</script>

<template>
  <NotFound v-bind="props" />
</template>
