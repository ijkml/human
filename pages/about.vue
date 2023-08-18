<script setup lang="ts">
</script>

<template>
  <section
    role="region"
    aria-labelledby="about-me"
    class="sect-space-top section-about"
  >
    <div class="heading-wrap">
      <h1 id="about-me" class="screamer-h1">About</h1>
      <p class="echo">
        The man, the myth, the <s>clumsy calamity</s> legend...
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
.section-about {
  @apply px-2 ss:(px-3) ss500:(px-4) sm:(px-6)
    md:(px-10) xl:(px-13);
}

.details-deck {
  @apply mt-24 grid gap-8 sm:(grid-cols-2 gap-6) md:(gap-7);
}

.img-cont {
  @apply bg-ml-0/100 p-8 of-hidden;

  .avatar {
    --body: #000;

    @apply h-auto w-full mx-auto mt-40 max-h-50
      sm:(max-h-60) md:(max-h-80);
  }
}

:where(.text-cont, .img-cont) {
  @apply rd-2 grid content-end;
}

.text-cont {
  @apply p-(x-4 t-24 b-12) gap-4 min-h-200 ss:(px-6) md:(px-8);
}

.bottom-cont {
  @apply grid gap-inherit of-hidden sm:(col-span-2 grid-cols-2) lg:(grid-cols-13);

  // @apply outline-(1 dashed yellow);
}

:deep() {
  .heading-h2 {
    @apply mb-2 text-(6/[1.1] ml-2/90) ss:(text-7)
      sm:(text-8) md:(text-9) lg:(text-10);
  }

  .heading-lv-3 {
    @apply mb-2;
  }

  ul > li:not(:only-child)::before {
    @apply content-['▹'] text-(size-inherit ml-0/100) mr-2;
  }

  :where(dt, li) {
    @apply text-ml-2/80;
  }

  .sub-sect {
    @apply p-1 text-3.8/[1.5] max-w-50ch space-y-3;

    :where(dl, ul) {
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

    ul {
      @apply mt-4 px-1 grid grid-cols-2 space-y-0 gap-2;
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
