<script setup lang="ts">
useHead({
  title: 'About',
  // meta: [{ name: 'description', content: '' }],
});

definePageMeta({
  alias: ['/about-me'],
});

defineOgImageComponent('PageOg', {
  link: '/about',
});
</script>

<template>
  <section role="region" aria-labelledby="about-me" class="sect-space-top">
    <div class="heading-wrap">
      <h1 id="about-me" class="screamer-h1">
        About
      </h1>
      <p>
        Hey, I'm ML. <br>
        Nice to meet you!
      </p>
    </div>

    <div class="details-deck">
      <div class="img-cont">
        <Avatar />
      </div>

      <AboutCardA />

      <div class="bottom-cont">
        <AboutCardB />
        <AboutCardC />
        <AboutCardD />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.details-deck {
  @apply mt-24 grid gap-8 sm:(grid-cols-2 gap-6) md:(gap-7);
}

.img-cont {
  @apply p-8 bg-ml-9/100 of-hidden;

  .avatar {
    --body: #000;

    @apply h-auto w-full mx-auto mt-40 max-h-50
      sm:(max-h-60) md:(max-h-80);
  }
}

:is(.text-cont, .img-cont) {
  @apply rd-2 grid content-end;
}

.text-cont {
  @apply p-(x-4 t-24 b-12) gap-4 min-h-200 ss:(px-6) md:(px-8);
}

.bottom-cont {
  @apply grid gap-inherit of-hidden sm:(col-span-2 grid-cols-2) lg:(grid-cols-13);
}

:deep() {
  .heading-h2 {
    @apply mb-2 text-(6/[1.1] ml-2/90) ss:(text-7)
      sm:(text-8) md:(text-9) lg:(text-10);
  }

  .heading-lv-3 {
    @apply mb-2;
  }

  ul > li {
    @apply inline-flex items-center;

    &:not(:only-child)::before {
      @apply content-['▹'] text-(1.5em/0 amber-5/50) mr-2 sm:(text-1em);
    }
  }

  :is(dt, li) {
    @apply text-ml-2/80;
  }

  .sub-sect {
    @apply p-1 text-3.8/[1.5] max-w-50ch space-y-3;

    :is(dl, ul) {
      @apply space-y-2;
    }

    dd {
      @apply ml-2;
    }
  }

  .sub-head {
    @apply font-mono text-(ml-3/100 90%) uppercase ml--1 px-1
      border-(b-1 ml-3/35) inline-block w-30 tracking-wider;
  }

  .bc-card {
    @apply rd-2 p-(x-4 b-8 t-20) ss:(px-6) grid gap-4 content-end
      md:(px-8 min-h-100) lg:(col-span-4) at-lg:(px-6);
  }

  .end-grid {
    @apply grid gap-7 sm:(col-span-2 grid-cols-2) lg:(col-span-4 grid-cols-1);

    .bc-card {
      @apply col-span-1;
    }
  }

  .services-card {
    @apply bg-none lg:(col-span-5);
  }

  .skills-card {
    @apply gap-0 text-3.8/[1.5] bg-gradient-shape-tl;

    .sub-sub-sect {
      @apply grid gap-4 mt-6;
    }

    hr {
      @apply op-10 ml--1 w-75%;
    }

    h4 {
      @apply mb-2 text-(ml-2/80 base);
    }

    ul {
      @apply px-1 grid grid-cols-2 space-y-0 gap-2;
    }
  }

  .certs-card {
    // @apply ring-(1 ml-5/25) bg-ml-7/100;

    @apply to-500% min-h-100;
  }

  .work-card {
    @apply min-h-50 gap-0 text-3.8/[1.5] pt-8;

    .action {
      @apply mt-4;
    }
  }
}
</style>
