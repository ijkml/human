<script setup lang="ts">
import type { Project } from '@data/work';
import { featuredProjects, publicWork } from '@data/work';

definePageMeta({
  documentDriven: false,
});

interface RouteParams {
  id: string
}

const id = ((useRoute().params as RouteParams).id || '').toLowerCase();

let project: Project | false = false;

if (publicWork.includes(id))
  project = featuredProjects.find(p => p.id === id) || false;
</script>

<template>
  <WorkProjectPage v-if="project" v-bind="project" />

  <NotFoundWork v-else />
</template>
