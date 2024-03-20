<script setup lang="ts">
import type { Project } from '@data/work';

defineOptions({
  inheritAttrs: false,
});

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
}
catch (error) {
  linkText = link;
}

useHead({
  title: name,
  meta: [{ name: 'description', content: details }],
});

defineOgImageComponent('WorkOg', { name, roles });

const pager = [
  { title: 'Contact Me', desc: 'Get in touch', link: '/contact' },
  { title: 'All Works', desc: 'View all projects', link: '/work' },
];
</script>

<template>
  <section
    class="sect-space-top even"
    aria-labelledby="project-title"
    role="region"
  >
    <div class="heading-wrap">
      <h1 id="project-title" class="screamer-h1">
        {{ name }}
      </h1>
      <div class="text-url">
        <a :href="link" target="_blank" rel="noopener" class="link-xi">
          {{ linkText }}
        </a>
      </div>
    </div>

    <div class="project-info-grid">
      <div class="project-deet">
        <SubSect title="Project">
          <div class="project-text">
            <div class="chips-cont">
              <Chip v-for="ch of chips" :key="ch">
                {{ ch }}
              </Chip>
            </div>

            <p class="text-balance">
              {{ details }}
            </p>

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
              <li v-for="r in roles" :key="r">
                {{ r }}
              </li>
            </ul>
          </SubSect>

          <SubSect title="Tools">
            <ul>
              <li v-for="t in tools" :key="t">
                {{ t }}
              </li>
            </ul>
          </SubSect>

          <SubSect v-if="credits" title="Credits">
            <ul class="single">
              <li v-for="c in credits" :key="c.name">
                <a
                  class="link-xi credits-link"
                  :href="c.link"
                  target="_blank"
                  rel="noopener nofollow"
                >{{ c.name }}</a>
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
        >
      </div>
    </div>

    <div class="pagination">
      <NuxtLink
        v-for="ln in pager"
        :key="ln.title"
        :to="ln.link"
        class="pager-link"
      >
        <div class="link-text">
          <span class="desc" v-text="ln.desc" />
          <span class="title" v-text="ln.title" />
        </div>

        <div class="link-arrow">
          <span class="i-carbon-arrow-right" />
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped lang="scss">
.project-info-grid {
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
      h-auto w-full min-h-100 outline-(1 solid ml-5/40);
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
    @apply inline-flex items-center;

    &::before {
      @apply content-['▹'] text-(1.5em/0 amber-5/50) mr-2 sm:(text-1em);
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

  &:not(:is(:hover, :focus-visible)) {
    @apply text-inherit;
  }
}

.pagination {
  @apply grid gap-3 my-24 max-w-screen-md mx-auto
    ss500:(gap-5 grid-cols-2) sm:(gap-8) md:(my-32);
}

.link-arrow {
  @apply transition-inherit transform
    preserve-3d backface-hidden;

  > span {
    @apply block h-6 w-6;
  }
}

.pager-link {
  @apply flex items-center justify-between transition-300
    cursor-pointer rd-lg text-ml-2/75 border-(1 ml-5/60)
    p-(x-5 y-3) outline-none sm:(text-lg);

  &:is(:hover, :focus-visible) {
    @apply text-ml-0/90 border-ml-0/50;

    .link-arrow {
      @apply rotate--45;
    }
  }
}

.link-text {
  @apply inline-grid transition-inherit;

  .desc {
    @apply font-light my-1px text-(xs ml-3/100) sm:(text-sm);
  }
}
</style>
