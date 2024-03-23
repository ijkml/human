<script setup lang="ts">
definePageMeta({
  documentDriven: true,
});
</script>

<template>
  <div>
    <ContentDoc>
      <template #default="{ doc }">
        <PostContentWrapper :doc="doc" />
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
