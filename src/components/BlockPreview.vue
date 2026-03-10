<script setup lang="ts">
import { computed } from 'vue'
import { usePageBuilderStore } from '@/store/pageBuilder'
import { useBlock } from '@/composables/useBlock'
import { getBlockStyles } from '@/utils/styles'
import ComponentPreview from '@/components/ComponentPreview.vue'
import type { Block } from '@/types'

const props = defineProps<{ block: Block }>()
const store = usePageBuilderStore()
const { selectBlock } = useBlock()

const isSelected = computed(() => store.selectedBlock?.id === props.block.id)
</script>

<template>
  <div
    class="border border-dashed transition-colors cursor-pointer flex flex-col"
    :class="[
      isSelected
        ? 'border-green-500 bg-green-50/20'
        : 'border-slate-200 hover:border-slate-400',
      { 'min-h-20': !block.components.length }
    ]"
    :style="getBlockStyles(block)"
    @click="selectBlock(block)"
  >
    <ComponentPreview
      v-for="component in block.components"
      :key="component.id"
      :component="component"
    />
  </div>
</template>
