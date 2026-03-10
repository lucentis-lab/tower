<script setup lang="ts">
import { computed } from 'vue'
import { usePageBuilderStore } from '@/store/pageBuilder'
import { useBlock } from '@/composables/useBlock'
import type { Block } from '@/types'

const props = defineProps<{ block: Block }>()
const store = usePageBuilderStore()
const { selectBlock } = useBlock()

const isSelected = computed(() => store.selectedBlock?.id === props.block.id)
</script>

<template>
  <div
    class="border border-dashed transition-colors cursor-pointer"
    :class="[
      isSelected
        ? 'border-green-500 bg-green-50/50'
        : 'border-slate-200 hover:border-slate-400 hover:bg-slate-50',
      { 'min-h-20': !block.components.length }
    ]"
    @click="selectBlock(block)"
  />
</template>
