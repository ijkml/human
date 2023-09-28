<script setup lang="ts">
withDefaults(defineProps<{
  link?: string
  text?: string
}>(), {
  link: '/contact',
  text: 'Open to work',
});
</script>

<template>
  <div>
    <NuxtLink :to="link" class="available">
      <Chip>
        <span class="availa-bull i-carbon-dot-mark" />
        {{ text }}
      </Chip>
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.available {
  @apply outline-none;

  &:where(:hover, :focus-visible) {
    @apply text-green-6/100 transition-300;
  }
}

.chip {
  @apply tracking-0.1em;
}

.availa-bull {
  @apply text-green-5/100 ml--1 mr-1 block;

  animation: flicker 4000ms linear infinite both;
}
</style>
