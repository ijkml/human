<script setup lang="ts">
import { oss } from '@data/projects';

const editable = ref(false);

onMounted(() => {
  // prevent extremely rare case of hydration mismatch
  editable.value = true;
});

function getSrc(repo: string) {
  const randomizer = new Date().toISOString().substring(0, 10); // YYYY-MM-DD
  //                 Math.floor(Math.random() * 90000) + 10000;
  return `https://opengraph.githubassets.com/${randomizer}/${repo}`;
}
</script>

<template>
  <section role="region" aria-labelledby="head-oss">
    <div class="sect-head">
      <h2 id="head-oss" class="screamer-h2">Open Source</h2>
      <div>
        <Balancer as="p">
          I believe open source makes the web more open and accessible, so I try
          to contribute whenever I can.
        </Balancer>
        <p role="note">
          <code class="gh-commit">
            chore(docs):
            <span
              class="fix-typos"
              spellcheck="false"
              tabindex="-1"
              :contenteditable="editable"
            >
              fix typoss
            </span>
          </code>
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
          <img :src="getSrc(repo.link)" :alt="repo.title" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.screamer-h2 {
  // @apply text-ml-2/100;
}

.gh-commit {
  @apply text-3.4/[1.1] font-mono bg-zinc-8/100 rd-1
    py-0.3em px-0.5em mt-1 inline-block transition-200;

  .fix-typos {
    @apply transition-inherit;
  }

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
  @apply block bg-ml-8/100 outline-none
    cursor-pointer select-none aspect-2;

  img {
    @apply object-contain rd-md filter
      brightness-90 grayscale-100 transition-500;
  }

  &:where(:hover, :focus-visible) {
    img {
      @apply grayscale-0 brightness-100;
    }
  }
}
</style>
