<script setup lang="ts">
import type { Project } from '@data/work';
import { typecastAs } from '~/types/utils';
</script>

<template>
  <div>
    <ContentDoc :head="false">
      <template #default="{ doc }">
        <WorkProjectPage v-bind="typecastAs<Project>(doc)" />
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
