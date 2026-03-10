import type { Section } from '@/types'

export function getSectionStyle(section: Section) {
  return {
    backgroundColor: section.styles?.backgroundColor,
    padding: `${section.styles?.paddingY ?? 0}px ${section.styles?.paddingX ?? 0}px`,
    maxWidth: section.styles?.maxWidth ? `${section.styles.maxWidth}px` : undefined,
    gap: `${section.styles?.gap * 4}px`
  }
}
