<script setup lang="ts">
defineProps<{
  title?: string;
  date?: string;
}>();
</script>

<template>
  <div class="layout-pad">
    <article>
      <div class="heading">
        <h1 class="title">
          <Balancer :ratio="0.5">{{ title }}</Balancer>
        </h1>
        <time v-if="date" :datetime="date">
          {{ formatDate(date) }}
        </time>
      </div>
      <div class="body">
        <slot />
      </div>
    </article>
  </div>
</template>

<style scoped lang="scss">
.layout-pad {
  @apply p-4 ss:(px-7) sm:(px-10) xl:(px-13);
}

article {
  // @apply outline-(1 dashed yellow/50);

  @apply mx-auto mt-16 max-w-55ch sm:(py-12) md:(max-w-65ch);
}

.title {
  @apply mx-0 mb-4 font-semibold text-(ml-2/100 8/[1.2]) sm:(text-10);
}

time {
  @apply text-ml-4/100;
}
</style>
