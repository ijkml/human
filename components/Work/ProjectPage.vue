<script setup lang="ts">
import type { Project } from '@data/work';

const props = withDefaults(defineProps<Project>(), {
  credits: undefined,
  git: undefined,
});

const {
  id,
  details,
  kind,
  link,
  name,
  period,
  roles,
  tools,
  git = null,
  credits = null,
} = props;

const chips = [kind, period];

let linkText: string;

try {
  linkText = new URL(link).host;
} catch (error) {
  linkText = link;
}

useHead({
  title: name,
  meta: [{ name: 'description', content: details }],
});
</script>

<template>
  <section class="sect-space-top" aria-labelledby="project-title" role="region">
    <div class="heading-wrap">
      <h1 id="project-title" class="screamer-h1">{{ name }}</h1>
      <div class="text-url">
        <a :href="link" target="_blank" rel="noopener" class="link-xi">
          {{ linkText }}
        </a>
      </div>
    </div>

    <div class="project-info-page">
      <div class="project-deet">
        <SubSect title="Project">
          <div class="project-text">
            <div class="chips-cont">
              <span v-for="ch of chips" :key="ch" class="chip" v-text="ch" />
            </div>

            <Balancer as="p">{{ details }}</Balancer>

            <div class="project-links">
              <ZeButton
                text="Visit Site"
                icon="i-carbon-arrow-up-right"
                suffix
                small
                primary
                external
                :link="link"
              />
              <ZeButton
                v-if="git"
                text="View Source"
                icon="i-carbon-logo-github"
                suffix
                small
                external
                :link="git"
              />
            </div>
          </div>
        </SubSect>

        <div class="sub-g">
          <SubSect title="Roles">
            <ul class="single">
              <li v-for="r in roles" :key="r">{{ r }}</li>
            </ul>
          </SubSect>

          <SubSect title="Tools">
            <ul>
              <li v-for="t in tools" :key="t">{{ t }}</li>
            </ul>
          </SubSect>

          <SubSect v-if="credits" title="Credits">
            <ul class="single">
              <li v-for="c in credits" :key="c.name">
                <a
                  class="link-xi credits-link"
                  :href="c.link"
                  target="_blank"
                  rel="noopener"
                  >{{ c.name }}</a
                >
              </li>
            </ul>
          </SubSect>
        </div>
      </div>

      <div class="project-prvw">
        <img
          :src="`/img/projects/${id}-preview.webp`"
          width="780"
          loading="lazy"
          decoding="async"
          :alt="`Full-view screenshot of the ${name} website.`"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.sect-space-top {
  @apply px-2 ss:(px-3) ss500:(px-4)
    sm:(px-6) md:(px-10) xl:(px-13);
}

.project-info-page {
  @apply grid gap-8 mt-24 items-center lg:(grid-cols-3);
}

.text-url {
  @apply mt--6 font-mono text-sm;

  .link-xi {
    @apply text-ml-3/100;
  }
}

.project-prvw {
  @apply mt-4 lg:(col-span-2);

  // width = 1400px; height = auto
  > img {
    @apply object-(contain center) rd-lg select-none
      h-auto w-full outline-(1 solid ml-5/40);
  }
}

.project-deet {
  @apply col-span-1 grid gap-3 content-start self-start 
    justify-items-start items-start sm:(grid-cols-2)
      lg:(grid-cols-1 sticky);

  top: calc(1.23 * var(--nav-height));
}

.sub-g {
  @apply grid gap-3 w-full max-w-80 sm:(ml-6) lg:(ml-0);
}

.chips-cont {
  @apply inline-flex flex-wrap items-center
    gap-2 mt-0.5 justify-start select-none;
}

.chip {
  @apply inline-flex items-center text-xs/[1] border-(1 ml-5/33)
    px-2.25 py-1.25 uppercase tracking-wide rd bg-ml-6/100 font-mono;
}

:deep() {
  .sub-sect {
    @apply p-1 text-3.8 w-full max-w-40ch;
  }

  .sub-head {
    @apply text-3.3/[1.5] font-mono text-ml-3/100
    border-(b-1 ml-3/35) min-w-25 inline-block
      tracking-wide uppercase mb-2.5 ml--1 px-1;
  }
}

ul {
  @apply px-1 grid grid-cols-2 gap-2;

  &.single {
    @apply grid-cols-1 gap-1.5;
  }

  li {
    &::before {
      @apply content-['▹'] text-(size-inherit ml-0/70) mr-2;
    }
  }
}

.project-text {
  @apply grid gap-3;
}

.project-links {
  @apply flex flex-wrap items-center justify-start gap-2;
}

.credits-link {
  @apply px-0;

  &:not(:where(:hover, :focus-visible)) {
    @apply text-inherit;
  }
}
</style>
