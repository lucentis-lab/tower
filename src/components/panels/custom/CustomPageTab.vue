<script setup lang="ts">
import { usePageBuilderStore } from '@/store/pageBuilder'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const store = usePageBuilderStore()
</script>

<template>
  <div class="p-4 flex flex-col gap-4">
    <div class="flex flex-col gap-1.5">
      <Label>Title</Label>
      <Input v-model="store.metadata.title" placeholder="Page title" />
    </div>

    <div class="flex flex-col gap-1.5">
      <Label>Slug</Label>
      <Input v-model="store.metadata.slug" placeholder="/ma-page" class="font-mono" />
    </div>

    <div class="flex flex-col gap-1.5">
      <Label>Description</Label>
      <Textarea v-model="store.metadata.description" placeholder="Meta description" rows="3" />
    </div>

    <div class="flex flex-col gap-1.5">
      <Label>Language</Label>
      <Select v-model="store.metadata.lang">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="fr">Français</SelectItem>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="de">Deutsch</SelectItem>
          <SelectItem value="es">Español</SelectItem>
        </SelectContent>
      </Select>
    </div>
  </div>
</template>
