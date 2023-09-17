<script setup lang="ts">
const { page } = useContent();
</script>

<template>
  <div class="layout-pad">
    <article>
      <div class="heading">
        <h1 v-if="page?.title" class="title">
          <!-- <Balancer>{{ page.title }}</Balancer> -->
          <Balancer>
            The art and struggles of styling markdown elements
          </Balancer>
        </h1>
        <time v-if="page?.date" :datetime="page.date">
          {{ formatDate(page.date) }}
        </time>
      </div>

      <div class="body">
        <ContentDoc />
      </div>
    </article>
  </div>
</template>

<style scoped lang="scss">
.layout-pad {
  @apply p-4 ss:(px-7) sm:(px-10) xl:(px-13);
}

article {
  // @apply outline-(1 dashed green/50);

  @apply mx-auto mt-16 max-w-55ch sm:(py-12) md:(max-w-65ch);
}

.title {
  @apply mx-0 mb-4 font-semibold text-(ml-2/100 10/[1.1]);
}

time {
  @apply text-ml-4/100;
}

.body:deep() {
  h1:first-of-type {
    @apply hidden;
  }
}
</style>
