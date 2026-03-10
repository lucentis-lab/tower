import type { Section, Block } from '@/types'

export function getSectionStyles(section: Section) {
  return {
    backgroundColor: section.styles?.backgroundColor,
    padding: `${section.styles?.paddingY ?? 0}px ${section.styles?.paddingX ?? 0}px`,
    gap: `${section.styles?.gap || 0 * 4}px`,
  }
}

export function getBlockStyles(block: Block) {
  return {
    backgroundColor: block.styles?.backgroundColor,
    padding: `${block.styles?.paddingY ?? 0}px ${block.styles?.paddingX ?? 0}px`,
    gap: `${block.styles?.gap || 0 * 4}px`,
    alignItems: block.styles?.align ?? 'start',
  }
}
