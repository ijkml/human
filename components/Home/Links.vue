<script setup lang="ts">
const links = [
  { text: 'Get in touch', to: '/contact' },
  { text: 'My work', to: '/work' },
  { text: 'Introducing me', to: '/about' },
];
</script>

<template>
  <div class="links-container">
    <NuxtLink v-for="ln in links" :key="ln.to" :to="ln.to" class="hero-link">
      <div class="link-text" v-text="ln.text" />

      <div class="link-arrow">
        <UnoIcon class="i-carbon-arrow-right h-6 w-6" />
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.links-container {
  @apply w-full max-w-100 mt-auto grid gap-4 lg:(col-span-2);

  --border-size: 8px;

  width: calc(100% + var(--border-size));
  margin-left: calc(-1 * var(--border-size));
}

.link-arrow {
  @apply transition-inherit transform
    preserve-3d backface-hidden;
}

.hero-link {
  @apply flex items-center justify-between px-4 py-3.5 rd-lg
    border-ml-5/50 cursor-pointer transition-300 select-none
    outline-none bg-ml-8/100 text-4/none transform-gpu
    b-0 b-l-width-[var(--border-size)] md:(py-5 text-4.5);

  &:is(:hover, :focus-visible) {
    @apply bg-ml-7/100 border-ml-0/50 text-ml-2/90 scale-103;

    .link-arrow {
      @apply text-ml-0/90 rotate--45;
    }
  }
}
</style>
