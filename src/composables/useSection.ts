// composables/useSection.ts
import { usePageBuilderStore } from '@/store/pageBuilder'
import type { Layout, Block, Section } from '@/types'
import { v4 as uuid } from 'uuid'

export function useSection() {
  const store = usePageBuilderStore()

  function createBlock(): Block {
    return {
      id: uuid(),
      components: [],
      props: {},
    }
  }

  function createSection(payload: Layout): void {
    const section: Section = {
      id: uuid(),
      layout: payload,
      blocks: Array.from({ length: payload.cols }, createBlock),
      props: {},
    }

    store.addSection(section)
    store.selectedSection = section
  }

  return { createSection }
}
