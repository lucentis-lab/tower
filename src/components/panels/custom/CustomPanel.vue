<script setup lang="ts">
import { usePageBuilderStore } from '@/store/pageBuilder'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import CustomPageTab from './CustomPageTab.vue'
import CustomSectionTab from './CustomSectionTab.vue'
import CustomBlockTab from './CustomBlockTab.vue'
import CustomComponentTab from './CustomComponentTab.vue'

const store = usePageBuilderStore()
</script>

<template>
  <div class="w-72 h-screen border-l flex flex-col">
    <Tabs :model-value="store.activeCustomTab" @update:model-value="store.activeCustomTab = $event">
      <TabsList class="w-full rounded-none border-b">
        <TabsTrigger value="page" class="flex-1">Page</TabsTrigger>
        <TabsTrigger value="section" class="flex-1">Section</TabsTrigger>
        <TabsTrigger value="block" class="flex-1">Block</TabsTrigger>
        <TabsTrigger value="component" class="flex-1">Comp.</TabsTrigger>
      </TabsList>
      <TabsContent value="page"><CustomPageTab /></TabsContent>
      <TabsContent value="section"><CustomSectionTab /></TabsContent>
      <TabsContent value="block"><CustomBlockTab /></TabsContent>
      <TabsContent value="component"><CustomComponentTab /></TabsContent>
    </Tabs>
  </div>
</template>
