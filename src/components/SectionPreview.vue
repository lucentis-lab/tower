<script setup lang="ts">
import { computed } from 'vue'
import { Trash2 } from 'lucide-vue-next'
import { usePageBuilderStore } from '@/store/pageBuilder'
import type { Section } from '@/types'

const props = defineProps<{ section: Section }>()
const emit = defineEmits(['remove'])

const store = usePageBuilderStore()
const isSelected = computed(() => store.selectedSection?.id === props.section.id)
</script>

<template>
  <div
    class="group relative border-2 rounded transition-colors"
    :class="isSelected ? 'border-blue-500' : 'border-slate-200 hover:border-slate-400'"
  >
    <div class="absolute top-2 right-2 flex items-center gap-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
      <span class="text-xs bg-slate-100 text-slate-500 font-mono px-2 py-0.5 rounded">
        {{ section.layout.name }}
      </span>
      <button
        class="p-1 rounded hover:bg-red-50 hover:text-red-500 text-slate-400 transition-colors"
        @click.stop="emit('remove', section)"
      >
        <Trash2 :size="14" />
      </button>
    </div>

    <div
      class="grid"
      :style="{ gridTemplateColumns: `repeat(${section.layout.cols}, 1fr)` }"
    >
      <div
        v-for="block in section.blocks"
        :key="block.id"
        class="border border-dashed border-slate-200 min-h-20"
      />
    </div>
  </div>
</template>
