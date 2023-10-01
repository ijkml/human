<script setup lang="ts">
import type { Project } from '@data/work';

definePageMeta({
  documentDriven: true,
});

function cast(xyz: unknown) {
  return xyz as Project;
}
</script>

<template>
  <div>
    <ContentDoc :head="false">
      <template #default="{ doc }">
        <WorkProjectPage v-bind="cast(doc)" />
      </template>

      <template #empty>
        <NotFoundWork />
      </template>

      <template #not-found>
        <NotFoundWork />
      </template>
    </ContentDoc>
  </div>
</template>
