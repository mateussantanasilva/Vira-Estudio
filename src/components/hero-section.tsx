import { motion, useReducedMotion } from "motion/react"

import { CtaArrow } from "@/components/cta-arrow"
import { ViraFlip } from "@/components/reveal"
import { ctaLink } from "@/constants/navigation"
import { ctaHeroClassName } from "@/lib/cta"
import {
  duration,
  easeOut,
  revealTransition,
  revealVariants,
} from "@/lib/motion"

export function HeroSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="topo"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-orange"
    >
      <div
        className="absolute top-0 left-0 z-10 h-16 w-5 bg-black sm:h-40 lg:w-10"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 bottom-0 z-10 h-16 w-5 bg-beige sm:h-40 lg:w-10"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[min(85vh,720px)] max-w-7xl flex-col justify-between gap-12 px-9 py-16 sm:px-6 lg:px-8 lg:py-24">
        <h1
          id="hero-heading"
          className="max-w-4xl text-[clamp(2.75rem,10vw,7rem)] font-bold leading-tight tracking-tight"
        >
          <motion.span
            className="block text-black"
            variants={revealVariants.fadeUp}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            transition={revealTransition("fadeUp")}
          >
            Seu negócio
          </motion.span>
          <ViraFlip onMount delay={0.12} as="span" className="block text-white">
            vira mais
          </ViraFlip>
        </h1>

        <div className="ml-auto flex w-full max-w-xs flex-col items-start gap-6">
          <motion.p
            className="text-left text-balance text-base font-semibold leading-relaxed text-black sm:text-lg"
            variants={revealVariants.fadeUp}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            transition={{
              duration: duration.short,
              ease: easeOut,
              delay: reduceMotion ? 0 : 0.28,
            }}
          >
            Um estúdio brasileiro que junta comunicação e tecnologia sem
            transformar o simples em complicado.
          </motion.p>

          <motion.a
            href={ctaLink.href}
            target="_blank"
            rel="noreferrer"
            className={ctaHeroClassName("h-12")}
            variants={revealVariants.fadeUp}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            transition={{
              duration: duration.short,
              ease: easeOut,
              delay: reduceMotion ? 0 : 0.4,
            }}
          >
            {ctaLink.label}
            <CtaArrow />
          </motion.a>
        </div>
      </div>
    </section>
  )
}
