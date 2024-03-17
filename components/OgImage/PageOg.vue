<script lang="ts" setup>
withDefaults(defineProps<{
  link?: string;
}>(), {
  link: '/ml',
});

// inspired by Lukas Guschlbauer's <https://www.der-lukas.net>
</script>

<template>
  <div
    class="size-full bg-#0a0a0b text-#e6e6e6 px-20 py-10"
    style="font-family: alliance"
  >
    <div class="size-full justify-end">
      <h1 class="text-100px/tight tracking-tight w-500px">
        Moses Laurence
      </h1>

      <div class="block b-(t-1 #939395/45) my-4" />

      <div class="flex text-8/[1] justify-between">
        <p class="uppercase">
          Frontend Developer
        </p>
        <p class="text-#939395">
          {{ link }}
        </p>
      </div>
    </div>

    <div class="absolute top-16 right-16">
      <svg xmlns="http://www.w3.org/2000/svg" fill="#6d6d6f" xml:space="preserve" viewBox="0 0 48 31.783" width="100"><path d="M42.847 30.172h-12.42v-.118q.907-.473 1.459-1.34.591-.908.591-2.406V4.464q0-1.459-.552-2.366-.512-.907-1.498-1.38V.6h8.714v.118q-.946.473-1.498 1.38-.552.907-.552 2.366v21.568q0 1.104.236 1.853.276.71.828 1.065.552.355 1.42.355 1.025 0 2.01-.552.986-.552 1.933-1.46.985-.946 1.932-2.168.946-1.222 1.892-2.523l.158.078-1.498 8.833h-.119q-.473-.67-1.261-1.026-.75-.315-1.775-.315zM10.278.6l5.086 20.622-.867-.04 5.52-20.58h6.86V.72q-.946.434-1.458 1.498-.513 1.065-.394 2.366l2.208 22.199q.157 1.222.71 2.01t1.34 1.263v.118h-8.32v-.118q.71-.395 1.262-1.223.592-.828.434-2.05L20.214 2.651h.434l-7.492 27.916h-.197L5.901 2.454l.473.04-2.484 23.38q-.157 1.538.355 2.682.552 1.104 1.301 1.498v.118H.5v-.118q.947-.513 1.46-1.577.551-1.065.709-2.603l2.248-21.33q.157-1.262-.355-2.327Q4.048 1.153 3.023.72V.602z" /></svg>
    </div>
  </div>
</template>
