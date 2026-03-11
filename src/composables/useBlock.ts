import { usePageBuilderStore } from '@/store/pageBuilder'
import type { Block } from '@/types'
import { v4 as uuid } from 'uuid'

export function useBlock() {
  const store = usePageBuilderStore()

  function createBlock(): Block {
    return {
      id: uuid(),
      components: [],
      props: {},
      styles: {
      backgroundColor: undefined,
      paddingX: 0,
      paddingY: 0,
      gap: 0,
      align: 'start',
    },
    }
  }

  function selectBlock(block: Block): void {
    store.selectedBlock = block
    store.activeAddTab = 'component'
    store.activeCustomTab = 'block'
  }

  return {
    createBlock, selectBlock
  }
}
