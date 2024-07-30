<script setup lang="ts">
import { current, explore } from '~~/content/data/tools.json';
</script>

<template>
  <div class="black-red bc-card skills-card">
    <h3 class="heading-lv-3">
      Skills & Tools
    </h3>
    <p>
      I am dedicated to expanding my skill set and adopting new technologies to
      effectively tackle any task.
    </p>

    <div class="sub-sub-sect">
      <div>
        <h4>Tools & languages I frequent:</h4>
        <ul>
          <li v-for="t in current" :key="t" v-text="t" />
        </ul>
      </div>

      <hr>

      <div>
        <h4>Learning and exploring:</h4>
        <ul>
          <li v-for="t in explore" :key="t" v-text="t" />
        </ul>
      </div>
    </div>
  </div>
</template>
