export type TabPanel = 'page' | 'section' | 'block' | 'component'

export interface Metadata {
  title: string
  slug: string
  description: string
  lang: string
}

export interface Section {
  id: string
  layout: Layout
  blocks?: Block[]
  props?: object
  styles: Styles
}

export interface Styles {
  backgroundColor?: string
  paddingX?: number
  paddingY?: number
  gap?: number
  align?: 'start' | 'center' | 'end'
}

export interface Layout {
  cols: number
  name: string
}

export interface Block {
  id: string
  components: Component[]
  props?: object
  styles: Styles
}

export interface Component {
  id: string
  name: string
  props?: object
}

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}
