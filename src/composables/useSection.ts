// composables/useSection.ts
import { usePageBuilderStore } from '@/store/pageBuilder'
import type { Layout, Section } from '@/types'
import { v4 as uuid } from 'uuid'

import { useBlock } from '@/composables/useBlock'


export function useSection() {
  const store = usePageBuilderStore()
  const { createBlock } = useBlock()

  function createSection(payload: Layout): void {
    const section: Section = {
      id: uuid(),
      layout: payload,
      blocks: Array.from({ length: payload.cols }, createBlock),
      props: {},
      styles: {
        backgroundColor: '#ffffff',
        paddingX: 0,
        paddingY: 0,
        maxWidth: 1200,
        gap: 0,
      },
    }

    store.addSection(section)
    store.selectedSection = section
  }

  function selectSection(section: Section): void {
    store.selectedSection = section
  }

  return { createSection, selectSection }
}
