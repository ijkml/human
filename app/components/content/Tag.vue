<script setup lang="ts">
withDefaults(defineProps<{
  type: 'zinc' | 'blue' | 'yellow' | 'red' | 'green';
}>(), {
  type: 'zinc',
});
</script>

<template>
  <div class="tag" :class="type">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>

<style lang="scss" scoped>
.tag {
  @apply b-l-(4 solid current) text-ml-3/100
    max-w-55ch pl-4 py-2 ml--5 my-4;

  &.zinc {
    @apply b-ml-5/60;
  }
  &.blue {
    @apply b-sky-8/50;
  }
  &.red {
    @apply b-red-8/50;
  }
  &.yellow {
    @apply b-yellow-8/50;
  }
  &.green {
    @apply b-emerald-8/50;
  }
}
</style>
