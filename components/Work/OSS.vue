<script setup lang="ts">
import { oss } from '@data/work';

const editable = ref(false);

onMounted(() => {
  // prevent extremely rare case of hydration mismatch
  editable.value = true;
});

function getSrc(repo: string) {
  const randomizer = new Date().toISOString().substring(0, 10); // YYYY-MM-DD
  return `https://opengraph.githubassets.com/${randomizer}/${repo}`;
}
</script>

<template>
  <section role="region" aria-labelledby="head-oss">
    <div class="sect-head">
      <h2 id="head-oss" class="screamer-h2">
        Open Source
      </h2>
      <div>
        <Balancer as="p">
          I believe open source makes the web more accessible, I try to
          contribute whenever I can.
        </Balancer>
        <p role="note">
          <Chip class="gh-commit">
            chore(docs):
            <span
              class="fix-typos"
              spellcheck="false"
              tabindex="-1"
              :contenteditable="editable"
            >
              fix typoss
            </span>
          </Chip>
        </p>
      </div>
    </div>

    <div v-once class="project-grid">
      <div v-for="repo in oss" :key="repo.title">
        <a
          :href="`https://github.com/${repo.link}`"
          class="oss-project-card cursor-project-alt"
          target="_blank"
          rel="noopener"
        >
          <img :src="getSrc(repo.link)" :alt="`GitHub: ${repo.title}`">
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.gh-commit {
  // @apply text-3/[1] font-mono bg-zinc-8/100 rd-1
  //   py-0.3em px-0.5em mt-1 inline-block transition-200;

  text-transform: none;

  @apply leading-[1.1] mt-2 gap-1 of-clip;

  &:hover {
    .fix-typos:not(:focus) {
      @apply bg-ml-9/100;
    }
  }
}

.project-grid {
  @apply mt-8 grid gap-8 md:grid-cols-2;
}

.oss-project-card {
  @apply block bg-ml-8/100 outline-none rd-md of-hidden
    cursor-pointer select-none aspect-2 relative transition-300;

  img {
    @apply object-contain rd-md filter
      brightness-50 transition-inherit grayscale-90;
  }

  &::after {
    @apply content-[''] absolute w-full h-full rd-inherit
      z-1 inset-0 bg-(ml-0 op-0) transition-inherit;
  }

  &:where(:hover, :focus-visible) {
    &::after {
      @apply bg-op-25;
    }

    img {
      @apply grayscale-0 brightness-75;
    }
  }
}
</style>
