<script setup lang="ts">
import { sections } from '@/utils/sections'
import { useSection } from '@/composables/useSection'

const { createSection } = useSection()
</script>

<template>
  <div class="add-section-tab grid grid-cols-2 gap-2 p-4 border-r h-full bg-slate-50/50">
    <div
      v-for="section in sections"
      :key="section.name"
      class="add-section bg-white border-2 border-slate-500 rounded p-2 flex flex-col items-center justify-center aspect-square hover:bg-slate-50 cursor-pointer"
      @click="createSection(section)"
    >
      {{ section.name }}
    </div>
  </div>
</template>
