export type SectionChrome = {
  id: string
  bg: string
  foreground: "white" | "beige" | "black"
}

export const sectionChrome: SectionChrome[] = [
  { id: "topo", bg: "var(--orange)", foreground: "white" },
  { id: "o-vira", bg: "var(--yellow)", foreground: "black" },
  { id: "projetos", bg: "var(--gray)", foreground: "beige" },
  { id: "ja-virou", bg: "var(--beige)", foreground: "black" },
  { id: "como-funciona", bg: "var(--green)", foreground: "white" },
  { id: "sobre", bg: "var(--orange)", foreground: "white" },
  { id: "rodape", bg: "var(--gray)", foreground: "beige" },
]

export const sectionIds = sectionChrome.map((section) => section.id)

export function getSectionChrome(sectionId: string): SectionChrome {
  return (
    sectionChrome.find((section) => section.id === sectionId) ??
    sectionChrome[0]
  )
}
