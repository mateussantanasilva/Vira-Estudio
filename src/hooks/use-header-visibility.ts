import { useEffect, useState } from "react"

export function useHeaderVisibility(headerId = "site-header") {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const element = document.getElementById(headerId)
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [headerId])

  return isVisible
}
