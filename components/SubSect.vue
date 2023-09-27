<script setup lang="ts">
defineProps<{
  title: string
}>();
</script>

<template>
  <div class="sub-sect">
    <div class="sub-head">
      {{ title }}
    </div>
    <slot />
  </div>
</template>
