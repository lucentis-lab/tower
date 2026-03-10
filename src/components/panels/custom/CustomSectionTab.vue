<script setup lang="ts">
import { computed } from 'vue'
import { usePageBuilderStore } from '@/store/pageBuilder'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const store = usePageBuilderStore()
const section = computed(() => store.selectedSection)
</script>

<template>
  <div v-if="section" class="p-4 flex flex-col gap-4">

    <div class="flex flex-col gap-1.5">
      <Label>Layout</Label>
      <span class="text-sm font-mono text-muted-foreground">{{ section.layout.name }}</span>
    </div>

    <div class="flex flex-col gap-1.5">
      <Label>Background</Label>
      <Input type="color" v-model="section.styles.backgroundColor" class="h-9 w-full cursor-pointer" />
    </div>

    <div class="grid grid-cols-2 gap-2">
      <div class="flex flex-col gap-1.5">
        <Label>Padding X</Label>
        <Input type="number" v-model.number="section.styles.paddingX" />
      </div>
      <div class="flex flex-col gap-1.5">
        <Label>Padding Y</Label>
        <Input type="number" v-model.number="section.styles.paddingY" />
      </div>
    </div>

    <div class="flex flex-col gap-1.5">
      <Label>Gap</Label>
      <Input type="number" v-model.number="section.styles.gap" />
    </div>

  </div>

  <div v-else class="p-4 text-sm text-muted-foreground">
    Sélectionne une section.
  </div>
</template>
