import { defineStore } from 'pinia'
import { type Metadata, type Block, type Component, type Section, type TabPanel } from '@/types'
import { ref } from 'vue'

const DEFAULT_METADATA = {
  title: '',
  slug: '',
  description: '',
  lang: 'fr',
}

export const usePageBuilderStore = defineStore('pageBuilder', () => {
  // -------------------------------------------------------------------------
  // State
  // -------------------------------------------------------------------------

  const metadata = ref<Metadata>(DEFAULT_METADATA)
  const sections = ref<Section[]>([])
  const activeTab = ref<TabPanel>('page')
  const selectedSection = ref<Section | null>(null)
  const selectedBlock = ref<Block | null>(null)
  const selectedComponent = ref<Component | null>(null)

  // -------------------------------------------------------------------------
  // Getters
  // -------------------------------------------------------------------------


  // -------------------------------------------------------------------------
  // Actions
  // -------------------------------------------------------------------------

  function addSection(section: Section): void {
    sections.value.push(section)
  }

  function removeSection(sectionToRemove: Section): void {
    sections.value = sections.value.filter(section => section !== sectionToRemove)
  }


  return {
    //state
    metadata, sections, activeTab, selectedBlock, selectedSection, selectedComponent,
    // actions
    addSection, removeSection
  }
})
