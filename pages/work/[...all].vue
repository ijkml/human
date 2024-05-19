<script setup lang="ts">
import type { Project } from '@data/work';
import { typeCastAs } from '@/types/utils';

definePageMeta({
  documentDriven: true,
});
</script>

<template>
  <div>
    <ContentDoc :head="false">
      <template #default="{ doc }">
        <WorkProjectPage v-bind="typeCastAs<Project>(doc)" />
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
