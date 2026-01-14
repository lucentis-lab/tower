import type { Component as VueComponent } from 'vue'

export interface PageBuilder {
  title?: string
  sections: Section[]
  currentSection: Section | null
  currentBlock: Block | null
  currentComponent: object | null
  tabs: string

  addSection: CallableFunction
  removeSection: CallableFunction
  addComponent: CallableFunction
  removeComponent: CallableFunction
  generateBlocks: CallableFunction
}

export interface Section {
  id: string
  layout: Layout
  blocks?: Block[]
}

export interface Layout {
  cols: number
  name: string
}

export interface Block {
  id: string
  components: []
}

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}
