<script setup lang="ts">
interface Project {
  name: string;
  // basic
  id: string;
  img: string;
  live: boolean;
  // basic end
  years: string;
  type: string; // contract/freelance/demo/??
  roles: string[];
  tools: string[];
}

const chips = ['Contract', 'Jan 2023 -  Jun 2025'];

// const project: Project = {};
</script>

<template>
  <section class="sect-space-top" aria-labelledby="project-title" role="region">
    <div class="heading-wrap">
      <h1 id="project-title" class="screamer-h1">MOI Immigration Solutions</h1>
      <div>
        <ZeButton text="View Project" icon="i-carbon-arrow-up-right" suffix />
      </div>
    </div>

    <div class="project-info-page">
      <div class="project-deet">
        <SubSect title="Project">
          <p>
            Sexless and inhumanly patient, his primary gratification seemed to
            he in his sleep, and wake alone in the coffin for Armitage’s call.
          </p>

          <div class="chips-cont">
            <span v-for="ch of chips" :key="ch" class="chip" v-text="ch" />
          </div>
        </SubSect>

        <SubSect title="Roles">
          <ul>
            <li>Developer</li>
          </ul>
        </SubSect>

        <SubSect title="Tools">
          <ul>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>Vue</li>
            <li>HTML/CSS</li>
            <li>Nuxt</li>
            <li>Sass/Less</li>
            <li>Astro</li>
            <li>UnoCSS</li>
          </ul>
        </SubSect>
      </div>

      <div class="project-prvw">
        <!-- <img src="/img/projects/PennyPay.webp" /> -->

        <div
          class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]"
        >
          <div
            class="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"
          ></div>
          <div
            class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"
          ></div>
          <div
            class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"
          ></div>
          <div
            class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"
          ></div>
          <div
            class="rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800"
          >
            <img
              src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png"
              class="block h-[426px] md:h-[654px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.sect-space-top {
  @apply px-2 ss:(px-3) ss500:(px-4)
    sm:(px-6) md:(px-10) xl:(px-13);
}

.heading-wrap {
  @apply mx-auto text-center;
}

.project-info-page {
  @apply grid grid-cols-3 gap-16 mt-24;
}

.project-prvw {
  @apply col-span-2;

  > img {
    // @apply object-(contain center) rd-md  outline-(1 solid ml-5/35);
  }
}

.project-deet {
  @apply col-span-1 grid gap-3 content-start
    justify-items-start self-start;

  // @apply outline-(1 dashed yellow/10) min-h-250px;
}

.chips-cont {
  @apply inline-flex flex-wrap items-center
    gap-2 mt-1.5 justify-start select-none;
}

.chip {
  @apply inline-flex items-center text-xs/[1] border-(1 ml-5/33)
    px-2.25 py-1.25 uppercase tracking-wide rd bg-ml-6/100;

  font-family: Inter;
}

:deep() {
  .sub-sect {
    @apply p-1 text-base w-full max-w-40ch;
  }

  .sub-head {
    @apply text-3.3/[1.5] font-mono text-ml-3/100
    border-(b-1 ml-3/35) min-w-25 inline-block
      tracking-wide uppercase mb-2.5 ml--1 px-1;
  }
}

ul {
  @apply px-1 grid grid-cols-2 space-y-0 gap-2;

  > li::before {
    @apply content-['▹'] text-(size-inherit ml-0/70) mr-2;
  }
}

.tools-subsect {
  @apply w-full;
}
</style>
