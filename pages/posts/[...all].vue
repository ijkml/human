<script setup lang="ts">
import type { PostContent } from '@/types/content';
import { typecastAs } from '@/types/utils';

definePageMeta({
  documentDriven: true,
});
</script>

<template>
  <div>
    <ContentDoc>
      <template #default="{ doc }">
        <PostContentWrapper :doc="typecastAs<PostContent>(doc)" />
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
