<script setup lang="ts">
definePageMeta({
  documentDriven: true,
});

// if (page.value && page.value.cover) {
//   useHead({
//     meta: [{ property: 'og:image', content: page.value.cover }],
//   });
// }
</script>

<template>
  <div>
    <ContentDoc>
      <template #default="{ doc }">
        <ContentWrapper v-bind="{ title: doc.title, date: doc.date }">
          <ContentRenderer :value="doc" />
        </ContentWrapper>
      </template>

      <template #empty>
        <!-- Document is empty -->
        <NotFoundPost />
      </template>

      <template #not-found>
        <NotFoundPost />
      </template>
    </ContentDoc>
  </div>
</template>
