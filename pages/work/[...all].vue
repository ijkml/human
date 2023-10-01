<script setup lang="ts">
import type { Project } from '@data/work';

definePageMeta({
  documentDriven: true,
});
</script>

<template>
  <ContentDoc :head="false">
    <template #default="{ doc }">
      <WorkProjectPage v-bind="doc as unknown as Project" />
    </template>

    <template #empty>
      <NotFoundWork />
    </template>

    <template #not-found>
      <NotFoundWork />
    </template>
  </ContentDoc>
</template>
