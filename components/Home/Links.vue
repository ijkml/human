<script setup lang="ts">
const links = [
  { text: 'Introducing me', to: '/about' },
  { text: 'My work', to: '/work' },
  // { text: 'Thoughts & scribbles', to: '/blog' },
  { text: 'Get in touch', to: '/contact' },
];
</script>

<template>
  <div class="hero-links-cont">
    <NuxtLink v-for="ln in links" :key="ln.to" :to="ln.to" class="hero-link">
      <div class="link-text" v-text="ln.text" />

      <div class="link-arrow">
        <UnoIcon class="i-carbon-arrow-right h-6 w-6" />
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.hero-links-cont {
  @apply w-full max-w-100 grid gap-4 lg:(col-span-2);
}

.link-arrow {
  @apply transition-inherit transform
    preserve-3d backface-hidden;
}

.link-text {
  // font issue?!
  @apply pt-1px;
}

.hero-link {
  @apply flex items-center justify-between px-4 py-3.5 rd-lg
    border-(l-8 ml-5/50) cursor-pointer transition-300
      select-none outline-none bg-ml-8/100 text-4/none
        transform-gpu md:(py-5 text-4.5);

  &:where(:hover, :focus-visible) {
    @apply bg-ml-7/100 border-ml-0/50 text-ml-2/90 scale-103;

    .link-arrow {
      @apply text-ml-0/90 rotate--45;
    }
  }
}
</style>
