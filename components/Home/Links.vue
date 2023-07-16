<script setup lang="ts">
const links = [
  {
    title: '/about',
    link: '/about',
    text: 'I am groot.',
  },
  {
    title: '/work',
    link: '/work',
    text: "Show, don't tell.",
  },
];
</script>

<template>
  <section>
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
        <h3 class="heading-lv-3" v-text="ln.title" />
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
  @apply p-2 m-(t-16 b-20) ss:(px-3) ss500:(px-4)
    sm:(px-6) md:(px-10) xl:(px-13);
}

.below-deck {
  @apply mx-auto gap-6 grid grid-cols-1 max-w-screen-lg ss500:(gap-8)
    sm:(grid-cols-2 gap-4) md:(gap-6) lg:(grid-cols-2);

  // @apply outline-(1 dashed yellow/50);
}

.bc-card {
  @apply p-(x-4 b-8 t-20) grid gap-4 transition-all-350
    justify-items-start text-(3.8/[1.5] ml-2/90) rd-2
      outline-none relative isolate col-span-1 min-h-50
        select-none saturate-25 content-end bg-ml-8/100
          brightness-75 bg-gradient-to-br from-(ml-0/0)
            to-(ml-0/50) ss:(px-6) sm:(min-h-65)
              md:(px-8) at-lg:(px-6);

  .sub-p {
    @apply max-h-0 of-hidden transition-inherit;
  }

  &:where(:hover, :focus-visible) {
    @apply filter-none;

    .sub-p {
      // max-height: var(--maxh, 1.40625rem);
      max-height: 1.41rem;
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
  @apply text-center justify-items-center filter-none
    min-h-80 transition-all-350 content-center
      decoration-none sm:(col-span-2 min-h-70);

  .card-head {
    background: linear-gradient(to right, currentColor, currentColor) no-repeat
      center bottom / 0% 1px;

    @apply font-light text-7/[1.1] p-1 transition-inherit
      ss:(text-8) sm:(text-10) lg:(text-12 tracking-tighter);
  }

  &:where(:hover, :focus-visible) {
    .card-head {
      @apply saturate-100;

      background-size: 100% 1px;
    }
  }
}
</style>
