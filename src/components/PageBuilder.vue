<script setup lang="ts">
import PageRender from './canvas/PageRender.vue';
import AddPanel from './panels/add/AddPanel.vue';
import CustomPanel from './panels/custom/CustomPanel.vue';

</script>

<template>
  <div class="h-screen w-screen bg-slate-200 overflow-hidden flex">
    <AddPanel></AddPanel>
    <PageRender></PageRender>
    <CustomPanel></CustomPanel>
  </div>
</template>
