export interface Page {
  metadata: Metadata
  sections: Section[]
}


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
  styles: {}
}

export interface Layout {
  cols: number
  name: string
}

export interface Block {
  id: string
  components: Component[]
  styles: {}
}

export interface Component {
  id: string
  name: string
  props: {}
}

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}
