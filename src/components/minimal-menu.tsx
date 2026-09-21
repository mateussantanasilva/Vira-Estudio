import { Menu } from "lucide-react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { useEffect, useState } from "react"

import { BrandLogo } from "@/components/brand-logo"
import { MenuTrigger } from "@/components/expanded-menu"
import {
  getSectionChrome,
  sectionIds,
  type SectionChrome,
} from "@/constants/section-chrome"
import { useActiveSection } from "@/hooks/use-active-section"
import { useHeaderVisibility } from "@/hooks/use-header-visibility"
import { cn } from "@/lib/utils"

const foregroundClass = {
  white: "text-white",
  beige: "text-beige",
  black: "text-black",
} as const

export function MinimalMenu() {
  const headerVisible = useHeaderVisibility("site-header")
  const activeSection = useActiveSection(sectionIds)
  const reduceMotion = useReducedMotion()
  const [chrome, setChrome] = useState<SectionChrome>(() =>
    getSectionChrome(activeSection)
  )
  const [flipKey, setFlipKey] = useState(0)

  const isVisible = !headerVisible

  useEffect(() => {
    const next = getSectionChrome(activeSection)
    if (next.id === chrome.id) return

    if (reduceMotion) {
      setChrome(next)
      return
    }

    setFlipKey((key) => key + 1)
    setChrome(next)
  }, [activeSection, chrome.id, reduceMotion])

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          key="minimal-menu"
          className="fixed inset-x-0 top-0 z-40 h-(--minimal-menu-height) overflow-hidden"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {/*
            Máscara sólida na altura do menu: durante o rotateX as “bordas”
            do flip ficam clipadas e o mosaic/foto atrás não aparece nos cantos.
          */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: chrome.bg }}
            aria-hidden="true"
          />

          <div className="relative h-full perspective-[1200px]">
            <motion.div
              key={flipKey}
              className="h-full origin-center"
              style={{
                backgroundColor: chrome.bg,
                transformStyle: "preserve-3d",
              }}
              initial={
                reduceMotion ? false : { rotateX: 90, opacity: 0.85 }
              }
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className={cn(
                  "mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",
                  foregroundClass[chrome.foreground]
                )}
              >
                <BrandLogo
                  variant="mark"
                  tone={chrome.foreground === "black" ? "dark" : "beige"}
                  className="transition-opacity duration-200 hover:opacity-70 [&_img]:h-7 sm:[&_img]:h-8"
                />

                <MenuTrigger
                  className={cn(
                    "inline-flex items-center gap-2 text-sm font-bold tracking-wide uppercase transition-opacity duration-200 hover:opacity-70",
                    foregroundClass[chrome.foreground]
                  )}
                >
                  <Menu className="size-5" aria-hidden="true" />
                  MENU
                </MenuTrigger>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
