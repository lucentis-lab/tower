<script setup lang="ts">
import { computed } from 'vue'
import { usePageBuilderStore } from '@/store/pageBuilder'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const store = usePageBuilderStore()
const block = computed(() => store.selectedBlock)
</script>

<template>
  <div v-if="block" class="p-4 flex flex-col gap-4">
    <div class="grid grid-cols-2 gap-2">
      <div class="flex flex-col gap-1.5">
        <Label>Padding X</Label>
        <Input type="number" v-model.number="block.styles.paddingX" />
      </div>
      <div class="flex flex-col gap-1.5">
        <Label>Padding Y</Label>
        <Input type="number" v-model.number="block.styles.paddingY" />
      </div>
    </div>

    <div class="flex flex-col gap-1.5">
      <Label>Gap</Label>
      <Input type="number" v-model.number="block.styles.gap" />
    </div>

    <div class="flex flex-col gap-1.5">
      <Label>Align</Label>
      <Select v-model="block.styles.align">
        <SelectTrigger><SelectValue /></SelectTrigger>
        <SelectContent>
          <SelectItem value="start">Start</SelectItem>
          <SelectItem value="center">Center</SelectItem>
          <SelectItem value="end">End</SelectItem>
        </SelectContent>
      </Select>
    </div>

    <div class="flex flex-col gap-1.5">
      <Label>Background</Label>
      <Input type="color" v-model="block.styles.backgroundColor" class="h-9 w-full cursor-pointer" />
    </div>

  </div>

  <div v-else class="p-4 text-sm text-muted-foreground">
    Sélectionne un block.
  </div>
</template>
