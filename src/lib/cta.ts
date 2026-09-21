import { cn } from "@/lib/utils"

/** Base compartilhada dos CTAs “FAZER VIRAR”. */
export const ctaBase =
  "group/cta inline-flex items-center justify-center gap-2 border-2 border-black px-5 text-sm font-bold tracking-wide uppercase transition-colors duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"

/** CTA laranja (header, menu, como funciona). */
export function ctaOrangeClassName(className?: string) {
  return cn(
    ctaBase,
    "bg-orange text-black hover:bg-black hover:text-beige active:bg-gray",
    className
  )
}

/** CTA do hero (preto + borda preta → branco + borda preta). */
export function ctaHeroClassName(className?: string) {
  return cn(
    ctaBase,
    "bg-black text-beige hover:bg-white hover:text-black active:bg-beige",
    className
  )
}

/** Links de navegação (header). */
export function navLinkClassName(className?: string) {
  return cn(
    "text-sm font-semibold tracking-wide text-black uppercase transition-colors duration-200 hover:text-orange focus-visible:text-orange",
    className
  )
}

/** Links do menu expandido. */
export function menuLinkClassName(className?: string) {
  return cn(
    "block py-4 text-center text-[clamp(1.75rem,4.5vw,3.75rem)] font-bold tracking-wide text-beige uppercase transition-colors duration-200 hover:text-orange focus-visible:text-orange sm:py-5",
    className
  )
}

/** Links do footer. */
export function footerLinkClassName(className?: string) {
  return cn(
    "text-sm font-medium tracking-wide text-beige transition-colors duration-200 hover:text-yellow focus-visible:text-yellow",
    className
  )
}
