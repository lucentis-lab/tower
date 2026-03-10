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
    }
  }

  function selectBlock(block: Block): void {
    store.selectedBlock = block
  }

  return {
    createBlock, selectBlock
  }
}
