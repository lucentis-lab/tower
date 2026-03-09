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
  styles: object
}

export interface Layout {
  cols: number
  name: string
}

export interface Block {
  id: string
  components: Component[]
  styles: object
}

export interface Component {
  id: string
  name: string
  props: object
}

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}
