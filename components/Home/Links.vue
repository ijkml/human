<script setup lang="ts">
const links = [
  {
    title: '/about',
    link: '/about',
    text: 'I am Groot.',
  },
  {
    title: '/work',
    link: '/work',
    text: "Show, don't tell.",
  },
];
</script>

<template>
  <section role="region" aria-labelledby="sub-hero-head">
    <h2 id="sub-hero-head" class="sr-only">Links</h2>
    <div class="below-deck">
      <div class="bc-card avatar-cont" aria-hidden="true">
        <Avatar />
      </div>

      <NuxtLink
        v-for="ln in links"
        :key="ln.title"
        v-auto-animate
        class="bc-card"
        :to="ln.link"
      >
        <h3 class="heading-lv-3 card-head" v-text="ln.title" />
        <p class="sub-p" v-text="ln.text" />
      </NuxtLink>

      <NuxtLink to="/contact" class="bc-card contact-card">
        <h3 class="card-head">Let's work together</h3>
        <div class="sub-p">please hire me, senpai</div>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  @apply p-2 my-20 ss:(px-3) ss500:(px-4)
    sm:(px-6) md:(px-10) xl:(px-13);
}

.below-deck {
  @apply mx-auto gap-6 grid grid-cols-1 max-w-screen-lg ss500:(gap-8)
    sm:(grid-cols-2 gap-4) md:(gap-6) lg:(grid-cols-2);

  // @apply outline-(1 dashed yellow/50);
}

.bc-card {
  @apply p-(x-4 b-8 t-20) grid gap-4 transition-all-300
    justify-items-start text-(3.8/[1.5] ml-2/90) rd-2
      outline-none relative isolate col-span-1 min-h-50
        select-none brightness-75 saturate-25 content-end
          bg-(gradient-to-br ml-8/100) from-(ml-0/0)
            to-(ml-0/50) ss:(px-6) sm:(min-h-65) at-md:(px-8);

  --max-h: 1.40625rem;
  // --maxh-neg: calc(-1 * var(--maxh-pos));

  .card-head,
  .sub-p {
    @apply translate-y-[var(--max-h)] transition-inherit transform-gpu;
  }

  .sub-p {
    @apply op-0;
  }

  &:where(:hover, :focus-visible) {
    @apply filter-none;

    .card-head {
      @apply translate-y-0;
    }

    .sub-p {
      @apply op-100 translate-y-0;
    }
  }
}

.avatar-cont {
  @apply bg-(ml-0/100 none) p-8 of-hidden
    filter-none sm:(row-span-2);

  .avatar {
    --body: #000;

    @apply h-auto w-full mx-auto mt-40 max-h-50
      sm:(max-h-60) md:(max-h-70);
  }
}

.contact-card {
  @apply text-center justify-items-center
    min-h-80 content-center filter-none
      decoration-none duration-350 sm:(col-span-2 min-h-70);

  .card-head {
    background: linear-gradient(to right, currentColor, currentColor) no-repeat
      center bottom / 0% 1px;

    @apply font-light text-7/[1.1] p-1 ss:(text-8)
      sm:(text-10) lg:(text-12 tracking-tighter);
  }

  &:where(:hover, :focus-visible) {
    .card-head {
      @apply saturate-100;

      background-size: 100% 1px;
    }
  }
}
</style>
