<script setup lang="ts">
const props = withDefaults(defineProps<{
  tags?: string;
}>(), {});

const tagList = computed(() => {
  const tags = props.tags;
  if (typeof tags !== 'string' || tags.trim() === '')
    return null;

  return tags.split(',').map(t => t.trim());
});
</script>

<template>
  <div class="tags-wrap">
    <Chip v-for="t in tagList" :key="t" class="chip">
      {{ t }}
    </Chip>
  </div>
</template>

<style scoped lang="scss">
.tags-wrap {
  @apply flex gap-2 justify-center;
}

.chip {
  @apply text-2.5 h-5;
}
</style>
