<script setup lang="ts">
import { computed } from 'vue'
import { Trash2 } from 'lucide-vue-next'
import BlockPreview from '@/components/BlockPreview.vue'
import { usePageBuilderStore } from '@/store/pageBuilder'
import { useSection } from '@/composables/useSection'

const { selectSection } = useSection()
import type { Section } from '@/types'

const props = defineProps<{ section: Section }>()
const emit = defineEmits(['remove'])

const store = usePageBuilderStore()
const isSelected = computed(() => store.selectedSection?.id === props.section.id)
</script>

<template>
  <div
    class="group/section relative border-2 rounded transition-colors"
    :class="isSelected ? 'border-blue-500' : 'border-slate-200 hover:border-slate-400'"
    @click="selectSection(section)"
  >
    <div class="absolute top-2 right-2 flex items-center gap-1 z-10 opacity-0 group-hover/section:opacity-100 transition-opacity">
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
      <BlockPreview
        v-for="block in section.blocks"
        :key="block.id"
        :block="block"
      />
    </div>
  </div>
</template>
