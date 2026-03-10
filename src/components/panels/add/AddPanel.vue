<script setup lang="ts">
import { usePageBuilderStore } from '@/store/pageBuilder'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import AddComponentTab from './AddComponentTab.vue'
import AddSectionTab from './AddSectionTab.vue'

const store = usePageBuilderStore()
</script>

<template>
  <div class="w-72 h-full border-r flex flex-col">
    <Tabs :model-value="store.activeAddTab" @update:value="store.activeAddTab = $event">
      <TabsList class="w-full rounded-none border-b">
        <TabsTrigger value="section" class="flex-1">Sections</TabsTrigger>
        <TabsTrigger value="component" class="flex-1">Composants</TabsTrigger>
      </TabsList>
      <TabsContent value="section">
        <AddSectionTab />
      </TabsContent>
      <TabsContent value="component">
        <AddComponentTab />
      </TabsContent>
    </Tabs>
  </div>
</template>
