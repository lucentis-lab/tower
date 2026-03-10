import { usePageBuilderStore } from '@/store/pageBuilder'
import type { Component } from '@/types'
import { v4 as uuid } from 'uuid'

export function useComponent() {
  const store = usePageBuilderStore()

  function createComponent(name: string): void {
    if (!store.selectedBlock) return

    const component: Component = {
      id: uuid(),
      name,
      props: {},
    }

    store.selectedBlock.components.push(component)
    store.selectedComponent = component
  }

  function selectComponent(component: Component): void {
    store.selectedComponent = component
  }

  return { createComponent, selectComponent }
}
