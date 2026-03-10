<script setup lang="ts">
import { components } from '@/utils/components'
import { useComponent } from '@/composables/useComponent'

const { createComponent } = useComponent()
</script>

<template>
  <div class="grid grid-cols-2 gap-2 p-4 h-full bg-slate-50/50">
    <div
      v-for="component in components"
      :key="component.name"
      class="bg-white border-2 border-slate-500 rounded p-2 flex items-center justify-center aspect-square hover:bg-slate-50 cursor-pointer text-sm"
      @click="createComponent(component.name)"
    >
      {{ component.name }}
    </div>
  </div>
</template>
