<script setup lang="ts">
import type { PostContent } from '@/types/content';
import { typeCastAs } from '@/types/utils';

definePageMeta({
  documentDriven: true,
});
</script>

<template>
  <div>
    <ContentDoc>
      <template #default="{ doc }">
        <PostContentWrapper :doc="typeCastAs<PostContent>(doc)" />
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
