import { motion, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"

import { CtaArrow } from "@/components/cta-arrow"
import { useMenu } from "@/components/menu-context"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet"
import { ctaLink, mainNavLinks } from "@/constants/navigation"
import { ctaOrangeClassName, menuLinkClassName } from "@/lib/cta"
import { cn } from "@/lib/utils"

/** Única instância do painel — montar uma vez no layout. */
export function ExpandedMenu() {
  const { open, setOpen, closeMenu } = useMenu()
  const reduceMotion = useReducedMotion()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        side="top"
        showCloseButton={false}
        className={cn(
          "inset-0 z-50 h-dvh w-full max-w-none gap-0 border-0 bg-green p-0 text-beige shadow-none",
          "data-[side=top]:inset-0 data-[side=top]:h-dvh data-[side=top]:border-0",
          "md:inset-x-[3vw] md:inset-y-[2.5vh] md:h-auto md:min-h-[min(92dvh,900px)] md:rounded-none"
        )}
      >
        <SheetTitle className="sr-only">Menu de navegação</SheetTitle>

        <div className="flex h-full min-h-[inherit] flex-col perspective-[1200px]">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
            <motion.a
              href={ctaLink.href}
              target="_blank"
              rel="noreferrer"
              className={ctaOrangeClassName("h-11 px-4 sm:px-5")}
              onClick={closeMenu}
              initial={reduceMotion ? false : { rotateX: 90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "center top" }}
            >
              {ctaLink.label}
              <CtaArrow />
            </motion.a>

            <motion.div
              initial={reduceMotion ? false : { rotateX: -90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: reduceMotion ? 0 : 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformOrigin: "center top" }}
            >
              <SheetClose
                className="text-sm font-bold tracking-wide text-beige uppercase transition-colors duration-200 hover:text-orange"
                aria-label="Fechar menu"
              >
                X FECHAR
              </SheetClose>
            </motion.div>
          </div>

          <nav
            className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center px-4 pb-16 sm:max-w-2xl lg:max-w-3xl"
            aria-label="Principal expandido"
          >
            <ul className="flex w-full flex-col items-stretch">
              {mainNavLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  className="border-b-2 border-beige/35 last:border-b-0"
                  initial={
                    reduceMotion ? false : { rotateX: 90, opacity: 0, y: 12 }
                  }
                  animate={{ rotateX: 0, opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: reduceMotion ? 0 : 0.12 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    transformOrigin: "center top",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <a
                    href={link.href}
                    className={menuLinkClassName()}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}

type MenuTriggerProps = {
  children: ReactNode
  className?: string
}

export function MenuTrigger({ children, className }: MenuTriggerProps) {
  const { openMenu } = useMenu()

  return (
    <button
      type="button"
      className={className}
      aria-label="Abrir menu"
      onClick={openMenu}
    >
      {children}
    </button>
  )
}
