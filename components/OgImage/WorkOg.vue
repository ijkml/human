<script lang="ts" setup>
const props = withDefaults(defineProps<{
  title?: string;
  description?: string;
  headline?: string;
}>(), {
  title: 'title',
  description: 'description',
});

// inspired by Lukas Guschlbauer's <https://www.der-lukas.net>
</script>

<template>
  <div class="size-full bg-#0a0a0b px-16 py-12" style="font-family: alliance">
    <div class="bg-zinc-8 size-full flex items-end">
      <h1 class="w-[600px] m-0 text-[75px] font-semibold mb-4 text-white flex items-center">
        <span>{{ title }}</span>
      </h1>
      <p class="text-[32px] text-[#E4E4E7] leading-tight">
        {{ description.slice(0, 200) }}
      </p>
    </div>
  </div>
</template>
