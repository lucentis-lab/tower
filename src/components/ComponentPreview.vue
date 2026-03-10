<script setup lang="ts">
import { computed } from 'vue'
import { Trash2 } from 'lucide-vue-next'
import { usePageBuilderStore } from '@/store/pageBuilder'
import { useComponent } from '@/composables/useComponent'
import type { Component } from '@/types'

const props = defineProps<{ component: Component }>()
const store = usePageBuilderStore()
const { selectComponent } = useComponent()

const isSelected = computed(() => store.selectedComponent?.id === props.component.id)
</script>

<template>
  <div
    class="group/component relative border border-dashed transition-colors cursor-pointer min-h-10"
    :class="isSelected
      ? 'border-purple-500 bg-purple-50/20'
      : 'border-slate-200 hover:border-slate-400 hover:bg-slate-50'"
    @click="selectComponent(component)"
  >
    <div class="absolute top-1 left-1/2 flex items-center gap-1 opacity-0 group-hover/component:opacity-100 transition-opacity z-10">
      <span class="text-[10px] bg-slate-100 text-slate-500 font-mono px-1.5 py-0.5 rounded">
        {{ component.name }}
      </span>
      <button
        class="p-0.5 rounded hover:bg-red-50 hover:text-red-500 text-slate-400 transition-colors"
        @click.stop="store.removeComponent(component)"
      >
        <Trash2 :size="12" />
      </button>
    </div>
    {{ component.name }}
  </div>
</template>
