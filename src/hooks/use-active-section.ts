import { useEffect, useState } from "react"

/** Seção ativa = última cujo topo já passou (ou tocou) o topo da viewport. */
export function useActiveSection(sectionIds: readonly string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "")

  useEffect(() => {
    if (sectionIds.length === 0) return

    let frame = 0

    const update = () => {
      frame = 0
      let current = sectionIds[0] ?? ""

      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (!element) continue

        // Toca o topo quando o topo da seção chega em y <= 0
        if (element.getBoundingClientRect().top <= 1) {
          current = id
        }
      }

      setActiveSection((prev) => (prev === current ? prev : current))
    }

    const onScrollOrResize = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScrollOrResize, { passive: true })
    window.addEventListener("resize", onScrollOrResize)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScrollOrResize)
      window.removeEventListener("resize", onScrollOrResize)
    }
  }, [sectionIds])

  return activeSection
}
