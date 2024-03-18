<script setup lang="ts">
definePageMeta({
  documentDriven: true,
});
</script>

<template>
  <div>
    <ContentDoc>
      <template #default="{ doc }">
        <PostContentWrapper v-bind="{ title: doc.title, date: doc.date }">
          <ContentRenderer :value="doc" />
        </PostContentWrapper>
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
