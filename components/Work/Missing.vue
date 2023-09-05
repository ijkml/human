<script setup lang="ts">
useHead({
  title: 'Undefined Work',
  meta: [{ name: 'description', content: 'This project does not exist.' }],
});

const props = {
  title: 'Undefined',
  paragraph:
    "This project does not exist, <i>yet</i>. But we can change that! Reach out, let's work together to craft something amazing.",

  links: [
    { text: 'Get in touch', link: '/contact' },
    { text: 'View works', link: '/work' },
  ],
};
</script>

<template>
  <NotFound v-bind="props" />
</template>

<style scoped lang="scss">
</style>
