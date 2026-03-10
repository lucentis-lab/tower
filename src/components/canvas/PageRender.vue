<script setup lang="ts">
import { usePageBuilderStore } from '@/store/pageBuilder'
import SectionPreview from '@/components/SectionPreview.vue'

const store = usePageBuilderStore()
</script>

<template>
  <div class="grow flex flex-col gap-4 p-6 overflow-y-auto">
    <SectionPreview
      v-for="section in store.sections"
      :key="section.id"
      :section="section"
      @remove="store.removeSection"
    />

    <div v-if="!store.sections.length" class="text-slate-400 text-sm text-center mt-12">
      Ajoute une section depuis le panel gauche.
    </div>
    <pre>{{  store }}</pre>
  </div>

</template>
